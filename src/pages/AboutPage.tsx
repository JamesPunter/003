
const clients = [
  { name: 'Alfa Romeo Nederland', logo: '/logos/Alfa-Romeo-Logo.png' },
  { name: 'Korps politie Aruba', logo: '/logos/Aruba_Police_Force_logo.png' },
  { name: 'Cadillac Corvette Europe', logo: '/logos/Cadillac-logo-on-transparent-background-PNG.png', bgWhite: true },
  { name: 'Holiday Inn resorts and hotels', logo: '/logos/Holiday-Inn-Symbol.png' },
  { name: 'Hummer Benelux', logo: '/logos/Hummer-Logo.jpg' },
  { name: 'Kroymans Corporation', logo: '/logos/Logo-Kroymans.jpg' },
  { name: 'Prinsze Visscher Milder Notarissen', logo: '/logos/Logo-kleur-V1-PVM-Notarissen.png' },
  { name: 'Stadsherstel Amsterdam N.V.', logo: '/logos/SH-bordje-gevel-v3.png' },
  { name: 'Aackosoft', logo: '/logos/aacksoft.png' },
  { name: 'IATA', logo: '/logos/iata.png' },
  { name: 'Kamer van Koophandel Aruba', logo: '/logos/kamer_van_koophandel_logo.png' },
  { name: 'Golden Tulip Hotels', logo: '/logos/logo-goldentulip.webp' },
  { name: 'Marriott Hotel group', logo: '/logos/marriott.png' },
  { name: 'Strik Advocaten en Belastingadviseurs', logo: '/logos/strik_attorneys_at_law_and_tax_advisors_logo.jpg' },
  { name: 'VERCOMA communicatie systemen', logo: '/logos/vercoma.png' },
  { name: 'Uitzendbureau 65plus', logo: '/logos/images.jpg' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-16 -left-20 w-80 h-80 rounded-full bg-white" />
          <div className="absolute -bottom-10 right-1/3 w-72 h-72 rounded-full bg-white" />
          <div className="absolute top-1/2 -right-16 w-48 h-48 rounded-full bg-white" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 flex items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Wie zijn wij?</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              25 jaar ICT ervaring 100% klanttevredenheid
            </p>
          </div>
          <img
            src="/avatar.jpeg"
            alt="PC Diemen"
            className="hidden md:block w-36 h-36 rounded-full object-cover border-4 border-white/20 shadow-lg"
          />
        </div>
      </section>

      {/* Logo Carousel */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Een kleine blik op onze portefeuille</h2>
          <p className="text-muted-foreground text-lg">waar wij onze ervaring ingezet hebben:</p>
        </div>
        <div className="max-w-6xl mx-auto px-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex-shrink-0 mx-6 flex items-center justify-center"
              >
                <div className="bg-white rounded-xl p-5 shadow-sm w-44 h-28 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    title={client.name}
                    className={`max-h-16 max-w-32 object-contain grayscale hover:grayscale-0 transition-all duration-300${client.bgWhite ? ' mix-blend-multiply' : ''}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            Bij ons geen nietszeggend ICT waarborg keurmerk, al ons technisch personeel is
            Microsoft MCSE, Linux & Cisco gecertificeerd!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <img src="/mcse-1-e1510525067773.jpg" alt="Microsoft Certified Systems Engineer" className="h-24 object-contain" />
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <img src="/logo_lftcert_engineer-1-e1510523804268.png" alt="Linux Foundation Certified Engineer" className="h-24 object-contain" />
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <img src="/cisco-e1510525505290.jpg" alt="Cisco Certified CCNA" className="h-24 object-contain" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
