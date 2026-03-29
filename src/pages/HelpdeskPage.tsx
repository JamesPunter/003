import { Link } from 'react-router-dom'
import { Download, Monitor, Phone, ArrowRight, Euro } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'

const steps = [
  { label: 'Download', desc: 'Sla TeamViewer Quick Support op uw bureaublad op.' },
  { label: 'Open', desc: 'Dubbelklik op het pictogram dat U heeft gedownload.' },
  { label: 'Uitvoeren', desc: 'Kies \'Uitvoeren\' wanneer gevraagd.' },
  { label: 'ID delen', desc: 'Geef Uw technicus het ID dat in het venster wordt getoond.' },
  { label: 'Wachtwoord', desc: 'Geef Uw technicus het wachtwoord wanneer daarom gevraagd wordt.' },
]

export default function HelpdeskPage() {
  return (
    <div>
      {/* Hero — asymmetric split */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-white" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2">
            Hulp / Diagnose op afstand
          </h1>
          <p className="text-lg md:text-xl text-white/75 max-w-lg mb-8">
            Remote Support-services vanaf slechts &euro;15,&ndash;&ndash;
          </p>
          <a
            href="tel:0612223338"
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'text-primary font-semibold',
            })}
          >
            <Phone className="mr-2 h-4 w-4" />
            Bel 06-12223338
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-4 py-16 md:py-20 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-teal-light mb-6">
          <Monitor className="h-7 w-7 text-primary" />
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Remote Support is een van de meest gevraagde pc-gerelateerde services
          van onze klanten in Diemen en omstreken.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Wanneer uw dichtstbijzijnde PC-reparatiewerkplaats kilometers weg is!
          Wanneer u uw computer niet kunt repareren, is &lsquo;Remote
          Support&rsquo; een geweldige oplossing.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Via onze externe computer ondersteuningsservice kunnen de meeste van uw
          computerproblemen, zoals infectie met virussen of spyware,
          gegevensoverdracht, e-mailinstellingen, om er maar een paar te noemen,
          opgelost worden.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Het gebruik van onze Remote Support is eenvoudig, betaalbaar en vereist
          alleen een internetverbinding!
        </p>
      </section>

      {/* Kosten remote support */}
      <section className="bg-card">
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-teal-light">
              <Euro className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Kosten remote support</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4 text-center">
            <p className="text-muted-foreground leading-relaxed">
              PC Diemen biedt &ldquo;Remote Computer Support&rdquo;-diensten voor
              uw desktop- of laptopcomputer tegen zeer betaalbare prijzen. Waar u
              ook bent en zolang u toegang tot internet heeft, kunnen we op afstand
              verbinding maken met uw PC, aan problemen werken en deze oplossen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Onze &ldquo;Remote Computer Support&rdquo;-prijzen zijn lager dan
              bij welk ander computerherstelbedrijf dan ook in Diemen en omgeving,
              of waar dan ook.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Omdat we pc-ondersteuning op afstand zullen uitvoeren, zullen de
              kosten per reparatie lager zijn dan wanneer u contact zou opnemen met
              een computerreparatie-technicus.
            </p>
          </div>
        </div>
      </section>

      {/* Steps — vertical timeline */}
      <section>
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-20">
          <h2 className="text-2xl font-bold text-center mb-2">
            Hoe U TeamViewer Quick Support moet gebruiken
          </h2>
          <p className="text-muted-foreground text-center mb-12">in 5 simpele stappen</p>
          <ol className="relative border-l-2 border-primary/20 ml-4 space-y-10">
            {steps.map((step, i) => (
              <li key={i} className="pl-8 relative">
                <span className="absolute -left-[17px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold ring-4 ring-background">
                  {i + 1}
                </span>
                <h3 className="font-semibold text-foreground">{step.label}</h3>
                <p className="text-muted-foreground mt-1">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Downloads — two clean cards side by side */}
      <section className="bg-card">
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-20">
          <h2 className="text-2xl font-bold text-center mb-10">Download TeamViewer</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                os: 'Windows',
                href: 'https://download.teamviewer.com/download/TeamViewerQS.exe',
              },
              {
                os: 'Mac',
                href: 'https://download.teamviewer.com/download/TeamViewerQS.dmg',
              },
            ].map(({ os, href }) => (
              <a
                key={os}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-teal-light transition-colors group-hover:bg-primary group-hover:text-white text-primary">
                  <Download className="h-6 w-6" />
                </div>
                <span className="font-semibold text-lg">{os}</span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  Download <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold mb-1">Klaar om te beginnen?</h2>
            <p className="text-white/70">
              Bel ons vandaag nog op 0612223338 om uw Remote Support-sessie te
              starten!
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="tel:0612223338"
              className={buttonVariants({
                variant: 'secondary',
                size: 'lg',
                className: 'bg-white text-primary font-semibold shadow-lg hover:bg-gray-100',
              })}
            >
              <Phone className="mr-2 h-4 w-4" />
              06-12223338
            </a>
            <Link
              to="/contact"
              className={buttonVariants({
                variant: 'secondary',
                size: 'lg',
                className: 'border-2 border-white text-primary font-semibold hover:bg-white hover:text-primary shadow-lg',
              })}
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications — subtle, minimal */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mb-6">
          Certificeringen
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-70 hover:opacity-100 transition-opacity">
          <img src={`${import.meta.env.BASE_URL}mcse-1-e1510525067773.jpg`} alt="MCSE" className="h-12 object-contain" />
          <img src={`${import.meta.env.BASE_URL}logo_lftcert_engineer-1-e1510523804268.png`} alt="Linux Foundation" className="h-12 object-contain" />
          <img src={`${import.meta.env.BASE_URL}cisco-e1510525505290.jpg`} alt="Cisco" className="h-12 object-contain" />
        </div>
      </section>
    </div>
  )
}
