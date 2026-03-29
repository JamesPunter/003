import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Monitor } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <footer className="bg-[#2a2a2a] text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="bg-primary rounded-lg p-2">
                <Monitor className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">PC-Diemen</span>
            </div>
            <p className="text-sm leading-relaxed">
              De Windows, Mac & Linux specialist voor particulier en MKB in Diemen & Omgeving.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigatie</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/bedrijfsinformatie" className="hover:text-white transition-colors">Bedrijfsinformatie</Link></li>
              <li><Link to="/helpdesk" className="hover:text-white transition-colors">Remote Helpdesk</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors">Google Reviews</Link></li>
              <li><Link to="/bedrijven" className="hover:text-white transition-colors">Bedrijven</Link></li>

              <li><Link to="/gallerij" className="hover:text-white transition-colors">Gallerij</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>Meerkoet 227, Diemen</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:0612223338" className="hover:text-white transition-colors">06-12223338</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:0853015433" className="hover:text-white transition-colors">085-3015433</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@pcdiemen.nl" className="hover:text-white transition-colors">info@pcdiemen.nl</a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>&copy; {new Date().getFullYear()} PC-Diemen. Alle rechten voorbehouden.</span>
          <span>Telefonisch te bereiken vanaf 8:00 tot 22:00, 7 dagen per week</span>
        </div>
      </div>
    </footer>
  )
}
