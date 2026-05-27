import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar } from 'lucide-react'
import { useLocale } from '@/lib/use-locale'

export const Route = createFileRoute('/blog')({
  component: BlogIndex,
})

function BlogIndex() {
  const { t, locale } = useLocale()
  const posts = [...allBlogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">{t('blog.title')}</h1>
        <p className="text-muted-foreground text-lg">
          {t('blog.description')}
        </p>
      </div>

      <div className="space-y-5">
        {posts.map((post) => (
          <Link
            key={post._meta.path}
            to="/blog/$slug"
            params={{ slug: post._meta.path }}
            className="block"
          >
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  <time>
                    {new Date(post.date).toLocaleDateString(locale, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span>·</span>
                  <span>{post.author}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
