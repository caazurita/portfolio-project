import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'

const jobs = defineCollection({
  name: 'jobs',
  directory: 'content/jobs',
  include: '**/*.md',
  schema: z.object({
    jobTitle: z.string(),
    summary: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    company: z.string(),
    location: z.string(),
    tags: z.array(z.string()),
    content: z.string(),
  }),
})

const education = defineCollection({
  name: 'education',
  directory: 'content/education',
  include: '**/*.md',
  schema: z.object({
    school: z.string(),
    summary: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    tags: z.array(z.string()),
    content: z.string(),
  }),
})

const blog = defineCollection({
  name: 'blog',
  directory: 'content/blog',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    content: z.string(),
  }),
})

const projects = defineCollection({
  name: 'projects',
  directory: 'content/projects',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    github: z.string().optional(),
    liveUrl: z.string().optional(),
    mockup: z.string().optional(),
    company: z.string().optional(),
    images: z.array(z.string()).optional(),
    content: z.string(),
  }),
})

const certifications = defineCollection({
  name: 'certifications',
  directory: 'content/certifications',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.string(),
    url: z.string().optional(),
    tags: z.array(z.string()).optional(),
    content: z.string().optional(),
  }),
})

export default defineConfig({
  collections: [jobs, education, blog, projects, certifications],
})
