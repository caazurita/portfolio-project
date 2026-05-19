import { Link } from '@tanstack/react-router'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '@/lib/use-theme'

const navLinks = [
  { to: '/' as const, label: 'Home' },
  { to: '/projects' as const, label: 'Projects' },
  { to: '/resume' as const, label: 'Resume' },
  // { to: '/blog' as const, label: 'Blog' },
  { to: '/contact' as const, label: 'Contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggle } = useTheme()

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
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="px-3 py-1.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              activeProps={{ className: 'px-3 py-1.5 rounded-md text-sm font-medium text-foreground bg-accent' }}
              activeOptions={{ exact: to === '/' }}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="ml-2 p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
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
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              activeProps={{ className: 'px-3 py-2 rounded-md text-sm font-medium text-foreground bg-accent' }}
              activeOptions={{ exact: to === '/' }}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent hover:cursor-pointer transition-colors"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            {theme === 'light' ? 'Dark mode' : 'Light mode'}
          </button>
        </nav>
      )}
    </header>
  )
}
