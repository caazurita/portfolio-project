import { createContext, useCallback, useContext, useEffect, useState } from 'react'

export type Locale = 'en' | 'es'

const STORAGE_KEY = 'locale'

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.resume': 'Resume',
    'nav.contact': 'Contact',
    'nav.darkMode': 'Dark mode',
    'nav.lightMode': 'Light mode',
    'home.hero.title': "Hi, I'm Carlos",
    'home.hero.subtitle': 'Software Developer',
    'home.hero.description':
      'a software developer passionate about building scalable applications and solving real-world problems through technology.',
    'home.hero.viewProjects': 'View Projects',
    'home.hero.getInTouch': 'Get in Touch',
    'home.expertise': 'Expertise',
    'home.featuredProjects': 'Featured Projects',
    'home.allProjects': 'All projects',
    'projects.github': 'GitHub',
    'projects.mockups': 'Mockups',
    'projects.corporation': 'Corporation',
    'projects.liveDemo': 'Live Demo',
    'projects.title': 'Projects',
    'projects.description':
      "A selection of things I've worked on, including personal projects, projects I participated in, client deliverables, and more.",
    'resume.about': 'About',
    'resume.workExperience': 'Work Experience',
    'resume.education': 'Education',
    'resume.contactMe': 'Contact Me',
    'resume.present': 'Present',
    'resume.location': 'Santa Cruz de la Sierra, Bolivia - Remote',
    'contact.title': 'Contact',
    'contact.description': 'Have a question or want to work together? Drop me a message.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.messagePlaceholder': 'Your message...',
    'contact.successTitle': 'Message Sent!',
    'contact.successMessage': "Thanks for reaching out. I'll get back to you as soon as possible.",
    'contact.sendAnother': 'Send Another Message',
    'blog.title': 'Blog',
    'blog.description': 'Thoughts on web development, design, and technology.',
    'blog.backToBlog': 'Back to blog',
    'blog.notFound': 'Post not found',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.resume': 'Currículum',
    'nav.contact': 'Contacto',
    'nav.darkMode': 'Modo oscuro',
    'nav.lightMode': 'Modo claro',
    'home.hero.title': 'Hola, soy Carlos',
    'home.hero.subtitle': 'Desarrollador de Software',
    'home.hero.description':
      'un desarrollador de software apasionado por crear aplicaciones escalables y resolver problemas del mundo real a través de la tecnología.',
    'home.hero.viewProjects': 'Ver Proyectos',
    'home.hero.getInTouch': 'Contáctame',
    'home.expertise': 'Experiencia Técnica',
    'home.featuredProjects': 'Proyectos Destacados',
    'home.allProjects': 'Todos los proyectos',
    'projects.github': 'GitHub',
    'projects.mockups': 'Maquetas',
    'projects.corporation': 'Corporación',
    'projects.liveDemo': 'Demo en Vivo',
    'projects.title': 'Proyectos',
    'projects.description':
      'Una selección de proyectos en los que he trabajado, incluyendo proyectos personales, proyectos en los que participé, entregas para clientes y más.',
    'resume.about': 'Acerca de mí',
    'resume.workExperience': 'Experiencia Laboral',
    'resume.education': 'Educación',
    'resume.contactMe': 'Contáctame',
    'resume.present': 'Presente',
    'resume.location': 'Santa Cruz de la Sierra, Bolivia - Remoto',
    'contact.title': 'Contacto',
    'contact.description': '¿Tienes una pregunta o quieres trabajar juntos? Escríbeme.',
    'contact.name': 'Nombre',
    'contact.email': 'Correo',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.emailPlaceholder': 'tu@correo.com',
    'contact.messagePlaceholder': 'Tu mensaje...',
    'contact.successTitle': '¡Mensaje Enviado!',
    'contact.successMessage': 'Gracias por contactarme. Te responderé lo antes posible.',
    'contact.sendAnother': 'Enviar Otro Mensaje',
    'blog.title': 'Blog',
    'blog.description': 'Reflexiones sobre desarrollo web, diseño y tecnología.',
    'blog.backToBlog': 'Volver al blog',
    'blog.notFound': 'Publicación no encontrada',
  },
} satisfies Record<Locale, Record<string, string>>

type Translations = typeof translations.en

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'es') return stored
  return 'en'
}

const LocaleContext = createContext<{
  locale: Locale
  setLocale: (locale: Locale) => void
  toggle: () => void
  t: (key: keyof Translations) => string
} | null>(null)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    localStorage.setItem(STORAGE_KEY, l)
  }, [])

  const toggle = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === 'en' ? 'es' : 'en'
      localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }, [])

  const t = useCallback(
    (key: keyof Translations) => translations[locale]?.[key] ?? key,
    [locale],
  )

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggle, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function localizeField<T>(
  obj: T & Record<string, unknown>,
  field: string,
  locale: Locale,
): string {
  const langField = `${field}-${locale}`
  const val = (obj[langField] ?? obj[field] ?? field) as string | undefined
  return val ?? field
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider')
  return ctx
}
