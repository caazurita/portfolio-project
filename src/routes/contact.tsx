import { createFileRoute } from '@tanstack/react-router'
import { type FormEvent, useState } from 'react'
import { CheckCircle, Loader2, Send } from 'lucide-react'
import { useLocale } from '@/lib/use-locale'
import emailjs from '@emailjs/browser'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string

function Contact() {
  const { t } = useLocale()
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setError(null)

    const form = e.currentTarget

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      })
      setSubmitted(true)
      form.reset()
    } catch(error) {
      console.error('EmailJS error:', error)
      setError('Failed to send message. Please try again.')
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">
            {t('contact.successTitle')}
          </h2>
          <p className="text-muted-foreground mb-6">
            {t('contact.successMessage')}
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            {t('contact.sendAnother')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">{t('contact.title')}</h1>
        <p className="text-muted-foreground mb-8">
          {t('contact.description')}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1"
            >
              {t('contact.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors bg-background"
              placeholder={t('contact.namePlaceholder')}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1"
            >
              {t('contact.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors bg-background"
              placeholder={t('contact.emailPlaceholder')}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1"
            >
              {t('contact.message')}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors resize-none bg-background"
              placeholder={t('contact.messagePlaceholder')}
            />
          </div>

          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium disabled:opacity-50 cursor-pointer"
          >
            {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            {sending ? 'Sending...' : t('contact.send')}
          </button>
        </form>
      </div>
    </div>
  )
}
