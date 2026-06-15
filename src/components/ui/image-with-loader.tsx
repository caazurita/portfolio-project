import { useState, type ImgHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ImageWithLoaderProps extends ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string
}

export function ImageWithLoader({ containerClassName, className, ...props }: ImageWithLoaderProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={cn('relative overflow-hidden', containerClassName)}>
      {!loaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <img
        {...props}
        className={cn(className, 'transition-opacity duration-300', loaded ? 'opacity-100' : 'opacity-0')}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
