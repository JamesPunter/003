import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function BusinessPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-32 right-1/4 w-[28rem] h-[28rem] rounded-full bg-white" />
          <div className="absolute -bottom-20 -left-12 w-56 h-56 rounded-full bg-white" />
          <div className="absolute top-1/3 -right-24 w-64 h-64 rounded-full bg-white" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">MKB ICT Consultancy</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Netwerkbeveiliging is niet langer een luxe &mdash; het is een noodzaak. Onze proactieve,
            waakzame aanpak zorgt ervoor dat uw systemen up-to-date zijn en beveiligd tegen
            bedreigingen.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Naast 24/7 monitoring en on-demand ondersteuningsdiensten, zijn wij ook gespecialiseerd
              in het ontwerpen en implementeren van datasystemen. Wij helpen u bij het onderhouden van
              uw datasystemen, vanaf de ondersteuning van eindgebruikers tot uw router/firewall. Neem
              contact met ons op en laat ons uw netwerk veiliger en efficiënter maken.
            </p>
          </div>

          <Separator className="my-12" />

          {/* Key decisions */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Belangrijke zakelijke beslissingen
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Als ondernemer moet u veel keuzes maken voor uw organisatie met betrekking tot de
              inrichting van uw ICT-omgeving.
            </p>

            <ul className="space-y-3 mb-6">
              {[
                'Welke internetverbinding(en) kiest u voor uw kantoor?',
                'Waar slaat u uw bestanden op?',
                'Hoe doet u uw elektronische boekhouding en facturatie?',
                'Hoe richt u uw website en e-mail in?',
                'Welke hardware heeft u nodig?',
                'Welke software heeft u nodig?',
                'Hoe beveiligt u uw bedrijfsdata?',
                'Welke bedrijfstelefoons schaft u aan?',
                'Wilt u een maatwerk softwareoplossing?',
              ].map((question, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span className="text-foreground/90">{question}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground leading-relaxed font-medium">
              Iedere keuze kan grote gevolgen hebben voor de continuïteit en beveiliging van uw
              organisatie.
            </p>
          </div>

          <Separator className="my-12" />

          {/* Werkwijze */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Werkwijze</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Wij komen bij u op kantoor langs voor een inventarisatie hierbij nemen wij alle facetten
              van uw ICT omgeving mee. Uiteindelijk schrijven wij voor u een advies, dit kan in de
              vorm van een adviesrapport zijn of in de vorm van een offerte.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              De PCDiemen.nl specialisten hebben praktijkervaring met vrijwel alle oplossingen uit de
              markt en adviseren u graag welke oplossingen het beste bij uw organisatie passen. ICT
              Consultancy van PCDiemen.nl is daarom voor veel organisaties een uitkomst.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Vrijblijvend Adviesgesprek</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Neem contact met ons op en laat ons uw netwerk veiliger en efficiënter maken.
          </p>
          <Link
            to="/contact"
            className={buttonVariants({
              size: 'lg',
              variant: 'secondary',
              className: 'text-primary font-semibold',
            })}
          >
            Contact Opnemen
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
