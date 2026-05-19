import { createFileRoute, Link } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Monitor, Building } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export const Route = createFileRoute('/')({
  component: Home,
})

const skills = [
  'Node.js',
  'Express',
  'JavaScript',
  'TypeScript',
  "Python",
  "Flask",
  "FastAPI",
  "AI-Powered",
  "LLMs",
  "Pandas",
  "Passport",
  "Sequelize",
  "Joi",
  "Prisma",
  "TypeORM",
  "JWT",
  'Next.js',
  'React.js',
  "React Native",
  "Vue.js",
  "MUI",
  'Tailwind CSS',
  "MongoDB",
  "Mongoose",
  "PostgreSQL",
  "MySQL",
  "GraphQL",
  "API Gateway",
  "Serverless",
  "AWS",
  "Digital Ocean",
  "Cloud Sulutions",
  'Docker',
  "CI/CD",
  "CircleCI",
  "Clean Architecture",
  "Design Patterns",
  "Microservices",
  "SCRUM",
  "Git",
  "GitHub",
  "GitLab",
  "Bitbucket",
  "Jira",
  "Slack",
  "Notion",
  "Figma",
  "Management Engineering",
]

function Home() {
  const featuredProjects = allProjects.slice(0, 3)

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-24">
      {/* Hero */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-widest">
              Software Developer
            </p>
            <h1 className="text-5xl font-bold tracking-tight">
              Hi, I'm Carlos
            </h1>
          </div>
          <p className="text-lg leading-relaxed max-w-xl font-bold">
            a software developer passionate about building scalable applications and solving real-world problems through technology.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            From backend systems and APIs to cloud infrastructure and fullstack development, I enjoy creating solutions that are efficient, reliable, and impactful. When I’m not coding, you’ll find me improving my English, exploring new technologies, or preparing for my next professional challenge.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg text-sm font-medium hover:bg-accent transition-colors"
            >
              Get in Touch <Mail size={16} />
            </Link>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://github.com/caazurita"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/carlos-alberto-alvarado-zurita-a3223a217/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="shrink-0">
          <img
            src="/profile.png"
            alt="Carlos Alberto"
            className="w-48 h-56 md:w-56 md:h-64 rounded-2xl object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Expertise</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link
            to="/projects"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
          >
            All projects <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredProjects.map((project) => (
            <Card
              key={project._meta.path}
              className="flex flex-col hover:shadow-md transition-shadow"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-3">
                <p className="text-sm text-muted-foreground flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={13} /> GitHub
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
                      Mockups
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
                      Corporation
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={13} /> Live
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog teaser */}
      {/* <section className="space-y-4 pb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Writing</h2>
          <Link
            to="/blog"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
          >
            All posts <ArrowRight size={14} />
          </Link>
        </div>
        <p className="text-muted-foreground">
          Occasional thoughts on React, TypeScript, and building for the web.
        </p>
      </section> */}
    </div>
  )
}
