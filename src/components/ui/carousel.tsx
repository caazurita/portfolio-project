import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { ImageWithLoader } from '@/components/ui/image-with-loader'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselProps {
  images: string[]
  alt: string
  className?: string
}

export function Carousel({ images, alt, className }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  if (images.length === 0) return null

  return (
    <div className={cn('relative group aspect-video', className)}>
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 h-full">
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <ImageWithLoader
                  src={src}
                  alt={`${alt} - image ${i + 1}`}
                  containerClassName="w-full h-full bg-muted"
                  className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background z-10 group-hover:cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background z-10 group-hover:cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight size={16} />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={cn(
                  'size-1.5 rounded-full transition-all',
                  i === selectedIndex
                    ? 'bg-background w-4'
                    : 'bg-background/50 hover:bg-background/80'
                )}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
