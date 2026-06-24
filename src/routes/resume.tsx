import { marked } from 'marked'
import { createFileRoute, Link } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { MapPin, Calendar, ArrowRight } from 'lucide-react'
import { ImageWithLoader } from '@/components/ui/image-with-loader'
import { getTechLogoUrl } from '@/lib/tech-logos'
import { localizeField, useLocale } from '@/lib/use-locale'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

function Resume() {
  const { t, locale } = useLocale()
  if (locale === 'es') {
    console.log('Locale is Spanish')
  } else {
    console.log('Locale is not Spanish')
  }
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold">Carlos A. Alvarado Zurita</h1>
          <p className="text-lg text-muted-foreground">Software Developer</p>
          <div className="flex flex-wrap gap-4 pt-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin size={14} /> {t('resume.location')}
            </span>
            <a
              href="mailto:alex@example.com"
              className="hover:text-foreground transition-colors"
            >
              carlosaazurita@gmail.com
            </a>
            <a
              href="https://github.com/caazurita"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              github.com/caazurita
            </a>
          </div>
        </div>
        <ImageWithLoader
          src="/profile.png"
          alt="Alex Johnson"
          containerClassName="hidden sm:block w-24 h-28 rounded-xl shadow"
          className="object-cover w-full h-full"
        />
      </div>

      <Separator />

      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">{t('resume.about')}</h2>
        {
          locale === 'en'
            ? <p className="text-muted-foreground leading-relaxed">
              <p>
                I am a Software Developer with over 4 years of professional experience building APIs, backend services, web applications and data-driven systems using Node.js | TypeScript | React | Python | MongoDB | PostgreSQL | AWS.
              </p>
              <br />
              <p>
                Strong background in:
              </p>
              * Developing RESTful APIs and secure authorization systems
              <br />
              * Database optimization
              <br />
              * System integrations for SaaS platforms and third-party services
              <br />
              * Build scalable Backend architecture
              <br />
              * Cloud Solutions using AWS.
              <br />
              * Implementing bulk data processing for logistics operations
              <br />
              * Creating automation, reporting, and data ingestion workflows
              <br />
              <br />

              Currently focused on backend and data-oriented roles, including data ingestion, automation, reporting, and system integration.
              <br />
              <br />
              And foundational experience developing AI-powered integrations, including the consumption of LLM APIs, building RAG agents using LangChain, and automation solutions with Python.
            </p>
            : <p className="text-muted-foreground leading-relaxed">
              <p>
                Soy un desarrollador de software con más de 4 años de experiencia profesional construyendo APIs, servicios backend, aplicaciones web y sistemas orientados a datos utilizando Node.js | TypeScript | React | Python | MongoDB | PostgreSQL | AWS.
              </p>
              <br />
              <p>
                Mi experiencia se centra en:
              </p>
              * Desarrollo de APIs RESTful y sistemas de autorización seguros
              <br />
              * Optimizacion de bases de datos
              <br />
              * Integraciones de sistemas para plataformas SaaS y servicios de terceros
              <br />
              * Construcción de arquitecturas backend escalables
              <br />
              * Soluciones en la nube utilizando AWS.
              <br />
              * Implementanción de procesamiento de datos a gran escala para operaciones logísticas
              <br />
              * Creación de flujos de trabajo de automatización, informes e ingestión de datos
              <br />
              <br />

              Actualmente enfocado en roles orientados a backend/frontend y datos, incluyendo ingestión de datos, automatización, informes e integración de sistemas.
              <br />
              <br />
              Y experiencia fundamental desarrollando integraciones impulsadas por IA, incluyendo el consumo de APIs de modelos LLM,la contrucción de RAG agents usando LangChain y soluciones de automatización con Python.
            </p>
        }

      </section>

      {/* Work Experience */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">{t('resume.workExperience')}</h2>
        <div className="space-y-6">
          {allJobs.map((job) => (
            <Card key={`${job.company}-${localizeField(job, 'jobTitle', locale)}`}>
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <CardTitle className="text-lg">{localizeField(job, 'jobTitle', locale)}</CardTitle>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      {localizeField(job, 'company', locale)} · {localizeField(job, 'location', locale)}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-xs self-start whitespace-nowrap flex items-center gap-1"
                  >
                    <Calendar size={11} />
                    {job.startDate} – {job.endDate ?? t('resume.present')}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* <p className="text-sm text-muted-foreground leading-relaxed">
                  {localizeField(job, 'summary', locale)}
                </p> */}
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => {
                    const logoUrl = getTechLogoUrl(tag)
                    return (
                      <Badge key={tag} variant="outline" className="text-xs flex items-center gap-1">
                        {logoUrl && (
                          <img src={logoUrl} alt="" className="size-3.5" />
                        )}
                        {tag}
                      </Badge>
                    )
                  })}
                </div>
                {/* <p className="text-sm font-bold">
                  Responsibilities
                </p> */}
                {job.content && (
                  <div
                    className="prose prose-sm max-w-none prose-ul:list-disc prose-ul:pl-5 prose-li:marker:text-muted-foreground prose-li:text-muted-foreground prose-li:leading-relaxed prose-li:mb-1"
                    dangerouslySetInnerHTML={{ __html: marked(job.content) }}
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">{t('resume.education')}</h2>
        <div className="space-y-4">
          {allEducations.map((education) => (
            <Card key={education.school}>
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <CardTitle className="text-lg">{education.school}</CardTitle>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      {education.summary}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-xs self-start whitespace-nowrap flex items-center gap-1"
                  >
                    <Calendar size={11} />
                    {education.startDate} – {education.endDate ?? t('resume.present')}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {education.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {education.content && (
                  <div
                    className="prose prose-sm max-w-none prose-ul:list-disc prose-ul:pl-5 prose-li:marker:text-muted-foreground prose-li:text-muted-foreground prose-li:leading-relaxed prose-li:mb-1"
                    dangerouslySetInnerHTML={{ __html: marked(education.content) }}
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications */}
      {/* <section className="space-y-6">
        <h2 className="text-xl font-semibold">Certifications</h2>
        <div className="space-y-4">
          {allCertifications.map((cert) => (
            <Card key={cert.title}>
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div className="flex items-start gap-3">
                    <Award size={20} className="text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <CardTitle className="text-base">{cert.title}</CardTitle>
                      <p className="text-muted-foreground text-sm mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-xs self-start whitespace-nowrap flex items-center gap-1 shrink-0"
                  >
                    <Calendar size={11} />
                    {cert.date}
                  </Badge>
                </div>
              </CardHeader>
              {cert.tags && cert.tags.length > 0 && (
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {cert.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </section> */}

      {/* CTA */}
      <div className="flex gap-4 pt-2 pb-8">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        >
          {t('resume.contactMe')} <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
