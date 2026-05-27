import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Carousel } from '@/components/ui/carousel'
import { Building, ExternalLink, Github, Monitor } from 'lucide-react'
import { localizeField, useLocale } from '@/lib/use-locale'

export const Route = createFileRoute('/projects')({
    component: Projects,
})

function ProjectImage({
    images,
    title,
}: {
    images?: string[]
    title: string
}) {
    if (images && images.length > 0) {
        return (
            <div className="overflow-hidden rounded-t-lg bg-muted">
                <Carousel images={images} alt={title} />
            </div>
        )
    }

    const initials = title
        .split(/\s+/)
        .slice(0, 2)
        .map((w) => w[0])
        .join('')
        .toUpperCase()

    return (
        <div className="aspect-video overflow-hidden rounded-t-lg bg-gradient-to-br from-muted via-muted/80 to-muted/40 flex flex-col items-center justify-center gap-2">
            <Monitor size={32} className="text-muted-foreground/30" />
            <span className="text-3xl font-bold tracking-wider text-muted-foreground/20">
                {initials}
            </span>
        </div>
    )
}

function Projects() {
    const { t, locale } = useLocale()
    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="mb-10">
                <h1 className="text-4xl font-bold mb-2">{t('projects.title')}</h1>
                <p className="text-muted-foreground text-lg">
                    {t('projects.description')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {allProjects.map((project) => (
                    <Card
                        key={project._meta.path}
                        className="group flex flex-col hover:shadow-md transition-shadow overflow-hidden p-0"
                    >
                        <ProjectImage images={project.images} title={localizeField(project, 'title', locale)} />
                        <CardHeader className="pt-5">
                            <CardTitle className="text-xl">{localizeField(project, 'title', locale)}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col gap-4">
                            <p className="text-muted-foreground flex-1">{localizeField(project, 'description', locale)}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            <div className="flex gap-4 pt-1 pb-1">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <Github size={15} />
                                        {t('projects.github')}
                                    </a>
                                )}
                                {project.mockup && (
                                    <a
                                        href={project.mockup}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <Monitor size={15} />
                                        {t('projects.mockups')}
                                    </a>
                                )}
                                {project.company && (
                                    <a
                                        href={project.company}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <Building size={15} />
                                        {t('projects.corporation')}
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <ExternalLink size={15} />
                                        {t('projects.liveDemo')}
                                    </a>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
