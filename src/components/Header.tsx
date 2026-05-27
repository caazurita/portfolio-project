import { Link } from '@tanstack/react-router'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { useLocale } from '@/lib/use-locale'
import { useTheme } from '@/lib/use-theme'

const navLinks = [
  { to: '/' as const, labelKey: 'nav.home' as const },
  { to: '/projects' as const, labelKey: 'nav.projects' as const },
  { to: '/resume' as const, labelKey: 'nav.resume' as const },
  // { to: '/blog' as const, labelKey: 'nav.blog' as const },
  { to: '/contact' as const, labelKey: 'nav.contact' as const },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggle: toggleTheme } = useTheme()
  const { locale, setLocale, t } = useLocale()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity"
        >
          Carlos A. Alvarado Zurita
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">
          {navLinks.map(({ to, labelKey }) => (
            <Link
              key={to}
              to={to}
              className="px-3 py-1.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              activeProps={{ className: 'px-3 py-1.5 rounded-md text-sm font-medium text-foreground bg-accent' }}
              activeOptions={{ exact: to === '/' }}
            >
              {t(labelKey)}
            </Link>
          ))}
          <select
            value={locale}
            aria-label="Select language"
            onChange={(e) => setLocale(e.target.value as 'en' | 'es')}
            className="ml-2 px-2 py-1.5 rounded-md text-sm font-medium text-muted-foreground bg-transparent border border-border hover:text-foreground hover:bg-accent transition-colors cursor-pointer outline-none"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="sm:hidden p-2 rounded-md hover:bg-accent transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="sm:hidden border-t border-border bg-background px-4 pb-4 pt-2 flex flex-col gap-1">
          {navLinks.map(({ to, labelKey }) => (
            <Link
              key={to}
              to={to}
              className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              activeProps={{ className: 'px-3 py-2 rounded-md text-sm font-medium text-foreground bg-accent' }}
              activeOptions={{ exact: to === '/' }}
              onClick={() => setMobileOpen(false)}
            >
              {t(labelKey)}
            </Link>
          ))}
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value as 'en' | 'es')}
            className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground bg-transparent border border-border hover:text-foreground hover:bg-accent transition-colors cursor-pointer outline-none"
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent hover:cursor-pointer transition-colors"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            {theme === 'light' ? t('nav.darkMode') : t('nav.lightMode')}
          </button>
        </nav>
      )}
    </header>
  )
}
