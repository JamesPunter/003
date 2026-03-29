import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Monitor } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Bedrijfsinformatie', path: '/bedrijfsinformatie' },
  { label: 'Remote Helpdesk', path: '/helpdesk' },
  { label: 'Google Reviews', path: '/reviews' },
  { label: 'Bedrijven', path: '/bedrijven' },

  { label: 'Gallerij', path: '/gallerij' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      {/* Main nav */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="bg-primary rounded-lg p-2">
              <Monitor className="h-6 w-6 text-white" />
            </div>
            <div className="leading-tight">
              <span className="text-xl font-bold text-foreground">PC-Diemen</span>
              <span className="block text-xs text-muted-foreground">Computer reparatie</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-accent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-white">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-accent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
