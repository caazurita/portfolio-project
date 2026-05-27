import { createFileRoute } from '@tanstack/react-router'
import { useLocale } from '@/lib/use-locale'

export const Route = createFileRoute('/about')({
    component: About,
})

function About() {
    const { t } = useLocale()
    return <h2>{t('resume.about')}</h2>
}