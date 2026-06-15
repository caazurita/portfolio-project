import { Header } from '@/components/Header'
import { LocaleProvider } from '@/lib/use-locale'
import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Carlos Alberto — Developer Portfolio' },
      {
        name: 'description',
        content:
          'Software Developer specializing in Node.js, TypeScript, and modern web tooling.',
      },
    ],
  }),
  component: RootLayout,
})

function RootLayout() {
  return (
    <LocaleProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <HeadContent />
      <Scripts />
    </LocaleProvider>
  )
}
