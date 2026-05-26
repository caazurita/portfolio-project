import { marked } from 'marked'
import { createFileRoute, Link } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { MapPin, Calendar, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold">Carlos A. Alvarado Zurita</h1>
          <p className="text-lg text-muted-foreground">Software Developer</p>
          <div className="flex flex-wrap gap-4 pt-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin size={14} /> Santa Cruz de la Sierra, Bolivia - Remote
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
        <img
          src="/profile.png"
          alt="Alex Johnson"
          className="hidden sm:block w-24 h-28 rounded-xl object-cover shadow"
        />
      </div>

      <Separator />

      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="text-muted-foreground leading-relaxed">
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
          * Cloud Solutions using AWS.\
          <br />
          * Implementing bulk data processing for logistics operations
          <br />
          * Creating automation, reporting, and data ingestion workflows
          <br />
          <br />

          Currently focused on backend and data-oriented roles, including data ingestion, automation, reporting, and system integration.
          <br />
          <br />
          And expanding my skills into AI-powered integrations, including LLM API consumption and intelligent automation solutions using Python.
        </p>
      </section>

      {/* Work Experience */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Work Experience</h2>
        <div className="space-y-6">
          {allJobs.map((job) => (
            <Card key={`${job.company}-${job.jobTitle}`}>
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <CardTitle className="text-lg">{job.jobTitle}</CardTitle>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-xs self-start whitespace-nowrap flex items-center gap-1"
                  >
                    <Calendar size={11} />
                    {job.startDate} – {job.endDate ?? 'Present'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {job.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
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
        <h2 className="text-xl font-semibold">Education</h2>
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
                    {education.startDate} – {education.endDate ?? 'Present'}
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
          Contact Me <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
