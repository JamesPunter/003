import { Link } from 'react-router-dom'
import {
  Monitor, Wifi, Shield, HardDrive, Wrench, Clock,
  Truck, ThumbsUp, Zap, Bug, AlertTriangle,
  Server, Printer, Database, Phone as PhoneIcon,
  ChevronRight, Star, RefreshCw, FileSearch, Smartphone
} from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const problems = [
  { icon: Zap, text: 'Wordt uw computer traag of wil hij niet meer opstarten?' },
  { icon: AlertTriangle, text: 'Ontvangt u steeds meer reclames?' },
  { icon: Bug, text: 'Zoekt u iemand die écht alle virussen weg haalt?' },
  { icon: Wifi, text: 'Wilt u goede wifi door uw hele huis?' },
]

const services = [
  { icon: Zap, title: 'Trage pc\u2019s versnellen' },
  { icon: Wifi, title: 'Internet problemen verhelpen en oplossen' },
  { icon: Server, title: 'Server installaties' },
  { icon: Wifi, title: '(Draadloze) netwerken aanleggen' },
  { icon: Shield, title: 'Virus en spyware verwijdering' },
  { icon: Printer, title: 'Printer problemen oplossen' },
  { icon: Monitor, title: 'Windows herinstallatie' },
  { icon: RefreshCw, title: 'Migraties van bedrijfsomgevingen' },
  { icon: Database, title: 'Back-up oplossingen' },
  { icon: PhoneIcon, title: 'Telefonieoplossingen' },
  { icon: HardDrive, title: 'Data rescue / Data recovery' },
  { icon: Shield, title: 'Virusscanner installatie en onderhoud' },
  { icon: FileSearch, title: 'Verwijderde bestanden terughalen' },
  { icon: Wifi, title: 'Wi-Fi installatie bij u thuis of bedrijf' },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[calc(100vh-64px)] flex items-center">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23499bb2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-16 md:py-24">
            {/* Left content */}
            <div className="flex-1 max-w-xl text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a2e] leading-tight mb-6">
                PC Diemen
              </h1>
              <p className="text-xl md:text-2xl text-[#555] font-medium mt-2 mb-6">
                Computer reparatie service
              </p>
              <p className="text-lg md:text-xl text-[#555] leading-relaxed mb-10">
                Met meer dan <strong className="text-[#1a1a2e]">vijfentwintig jaar</strong> ervaring staan wij garant voor vakkundige service. Zowel voor particulieren als bedrijven.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="tel:0612223338"
                  className={buttonVariants({ size: "lg", className: "bg-[#1a1a2e] hover:bg-[#2a2a4e] text-white font-semibold px-8 rounded-xl shadow-lg" })}
                >
                  <PhoneIcon className="mr-2 h-4 w-4" />
                  Bel ons
                </a>
                <Link
                  to="/reviews"
                  className="inline-flex items-center gap-2 text-[#1a1a2e] font-semibold text-lg hover:underline"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#1a1a2e]">
                    <Star className="h-4 w-4" />
                  </span>
                  Bekijk reviews
                </Link>
              </div>
            </div>

            {/* Right illustration */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <img
                src="/25272872_89y_cdnmqs3lehin4npi5ko32.svg"
                alt="Computer reparatie diensten"
                className="w-full max-w-lg lg:max-w-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pickup Banner */}
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <Truck className="h-5 w-5 text-primary shrink-0" />
          <p className="text-foreground font-semibold">Extra service: wij halen en brengen uw apparatuur! <span className="text-primary">In Diemen gratis!</span></p>
        </div>
      </section>

      {/* Service Statement */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-center mb-8">
              <img src="/avatar.jpeg" alt="Ilan - PC Diemen" className="w-28 h-28 rounded-full object-cover shadow-lg mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">Service staat bij ons voorop</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Service staat bij ons voorop en wij zijn continue onze werkzaamheden en diensten aan het verbeteren. Op dit vlak onderscheiden wij ons van de rest. Wij kijken namelijk verder dan het probleem en zorgen ervoor dat dit vakkundig word opgelost. Door hoge kwaliteitsdiensten te leveren scoort PC Diemen 100 % tevredenheid garantie.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              <Link to="/reviews" className="text-primary hover:underline font-medium">
                Klik op deze link om te lezen wat klanten over ons schrijven.
              </Link>
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Wat uw probleem ook is, klein of groot, PC-Diemen gaat grondig te werk en uw probleem wordt 100% opgelost.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Met al meer dan vijfentwintig jaar ervaring is voor PC-Diemen geen probleem onoplosbaar. Zowel software als hardware, voor bedrijf en particulier. Daarnaast zult u nergens een goedkopere computerhulp vinden.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Verder werken wij snel en effici&euml;nt. Hierdoor heeft u uw computer of laptop zo snel mogelijk weer terug en kunnen wij onze prijzen laag houden met behoud van optimale dienstverlening.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Wij zijn specialisten op het gebied van Windows, Mac, Linux en mobiele systemen. Spoedservice: dezelfde dag nog een monteur bij u thuis of op uw werk. Altijd een vrijblijvende prijsopgave.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <img src="/mcse-1-e1510525067773.jpg" alt="Microsoft Certified Systems Engineer" className="h-12 object-contain" />
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <img src="/logo_lftcert_engineer-1-e1510523804268.png" alt="Linux Foundation Certified Engineer" className="h-12 object-contain" />
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <img src="/cisco-e1510525505290.jpg" alt="Cisco Certified CCNA" className="h-12 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Services */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">Onze Diensten</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-3 py-3 border-b border-slate-100"
              >
                <s.icon className="h-5 w-5 text-primary shrink-0" />
                <span className="text-[15px] text-slate-700">{s.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
