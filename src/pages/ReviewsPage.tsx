import { useState } from 'react'
import { Star, Quote, ChevronDown, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Review {
  name: string
  date: string
  text: string
  rating: number
}

const GOOGLE_MAPS_REVIEW_URL =
  'https://www.google.com/maps/place/PC-Diemen/@52.3521874,4.9748143,17z/data=!4m8!3m7!1s0x47c60eadf0c76705:0x45f9be9607028a0b!8m2!3d52.3521874!4d4.9773946!9m1!1b1!16s%2Fg%2F11gd67v9zk'

const GOOGLE_MAPS_WRITE_REVIEW_URL =
  'https://www.google.com/maps/place/PC-Diemen/@52.3521874,4.9748143,17z/data=!4m8!3m7!1s0x47c60eadf0c76705:0x45f9be9607028a0b!8m2!3d52.3521874!4d4.9773946!9m1!1b1!16s%2Fg%2F11gd67v9zk'

const INITIAL_VISIBLE = 9

const reviews: Review[] = [
  { name: 'Elnaz K', date: '23-11-2020', rating: 5, text: 'I spilled a lot of water on my computer and it totally crashed... I had also spilled some beer two months ago which ruined the sound in my computer. I was very stressed about not having a computer as a student and the possibility of it not being fixable. Fortunately he picked up my computer the very same day I called! He kept in contact with photos, updates and explained everything well to someone who knows nothing about computers, which was very assuring. Less than a week later he delivers it to me and my computer looks as good as new AND the sound is fixed! The service you receive is top quality. He was super nice, effective and it is definitely worth the money in my opinion!' },
  { name: 'Suhyeon Kim', date: '21-10-2020', rating: 5, text: 'PROFESSIONAL, RELIABLE, QUICK, AND AFFORDABLE! He picked up my laptop on the day that I requested the repair, and my computer\'s mainboard was replaced within a few days! He made calls to multiple suppliers in Europe to make sure that I get the most affordable option, kept me updated about the process with all the pictures, and brought it back to me on the day the repair was finished even though it was late in the evening! My laptop looks/works like a new one since he also cleaned my laptop for free! Definitely recommend this place if you need your computer repaired as soon as possible, as cheap as possible!' },
  { name: 'Giacomo', date: '16-10-2020', rating: 5, text: 'Receiving such a good service is a rare thing in the Netherlands. Ilan is kind, helpful, precise and always ready to keep you updated on the work he does. Definitely recommended!' },
  { name: 'Daniel Keur', date: '21-05-2020', rating: 5, text: 'Wauw....wat een geweldige service!! Ik raad iedereen aan om dit op te lossen door Ilan van PC-Diemen.' },
  { name: 'POPS', date: '28-04-2020', rating: 5, text: 'Perfect job!' },
  { name: 'Jeannet Engelen', date: '28-04-2020', rating: 5, text: 'Ilan is een expert in het oplossen van slepende computerproblemen.' },
  { name: 'Triantafyllia Ism', date: '28-04-2020', rating: 5, text: 'I appreciated how quick he was picking my computer up and delivering it within a day. He was very responsive and explained everything to me. I would definitely recommend the services, he does the job fast and makes sure you feel comfortable. I trust PC Diemen.' },
  { name: 'Floris Koenis', date: '28-04-2020', rating: 5, text: 'Ilan legt goed uit wat hij voor je kan doen. Top Service!' },
  { name: 'Jaleesa Cruden', date: '28-04-2020', rating: 5, text: 'Ik meen het serieus, de service is ongekend.. Eerste geweldige telefonische service verleend.. toen het probleem toch iets ingewikkelder was, kon ik toch ondanks de drukte even langs komen EN met succes! AANRADER' },
  { name: 'Ioana Pop', date: '31-03-2020', rating: 5, text: 'Good professional services, great customer support! Recommended!' },
  { name: 'Kwai Lam Ho', date: '01-03-2020', rating: 5, text: 'This is a fantastic place for laptop and harddisk repair. The technician is skilled, responsive, fast, and eager to provide multiple solutions to problems. He is also very kind to provide extra help for clients. He has been a great help.' },
  { name: 'J.J.F. Dinkelaar', date: '18-02-2020', rating: 5, text: 'The best in town, top service in Diemen Noord. Een aanrader, zeer deskundige hulp, kan niet beter!' },
  { name: 'itsjilla', date: '25-02-2020', rating: 5, text: 'Hele goede service! Goede ervaring gehad. SSD geïnstalleerd, oude harde schijf omgezet naar externe schijf. Ook kreeg ik een gratis premium abonnement!' },
  { name: 'John Sanders', date: '25-02-2020', rating: 5, text: 'Fantastische service en kennis van zaken. Daarnaast een kabel nodig om mijn hard-disk uit te lezen, kon ik ongevraagd lenen.' },
  { name: 'Niekie Geheim', date: '04-02-2020', rating: 5, text: 'Ik ben fantastisch geholpen door Ilian van PC Diemen. Ondanks dat hij ziek was heeft hij mijn oudere laptop weer een verjongingskuur gegeven en kan hij weer een paar jaar langer mee. Kortom een Topperrrrrrrr' },
  { name: 'HMG', date: '31-01-2020', rating: 5, text: 'Ilan heeft duidelijk verstand van zaken, communiceert helder, is vriendelijk, snel en denkt mee over de beste oplossing.' },
  { name: 'Jan Lasker', date: '25-01-2020', rating: 5, text: 'Ilan heeft mij, ondanks een zware griep, deskundig en snel geholpen. Heb ondertussen al lovende woorden tegen vrienden en kennissen gezegd.' },
  { name: 'Stephan Stephan', date: '21-01-2020', rating: 5, text: 'Echt superfijn adresje, vrijdagmiddag de laptop van onze dochter gebracht omdat het scherm kapot was en ze hem toch echt nodig heeft voor school, zondag word ik al gebeld dat hij maandag klaar zou zijn, echt top service!' },
  { name: 'Oguzhan Çelik', date: '06-01-2020', rating: 5, text: 'Erg behulpzaam, meedenkend en zeer vriendelijk. Heeft me snel kunnen helpen en is met een passende oplossing gekomen. Verder ging de communicatie soepel. Ik raad PCdiemen zeker aan!' },
  { name: 'Roel Semmekrot', date: '27-12-2019', rating: 5, text: 'Ilan heeft mij ontzettend goed geholpen met data recovery, een refurbished laptop en het delen van zijn kennis. Een dikke aanrader!' },
  { name: 'Gerda De Vries', date: '27-12-2019', rating: 5, text: 'Kan niet anders zeggen, super fijn geholpen.' },
  { name: 'alexandra solin', date: '19-12-2019', rating: 5, text: 'I highly recommend this place for your computer. I am really happy that I came there because he really saved my computer.' },
  { name: 'Jeffrey Fleks', date: '27-11-2019', rating: 5, text: 'Top! Me laptop doet het weer helemaal.' },
  { name: 'OLIA PERTSEMLIDH', date: '23-11-2019', rating: 5, text: 'Top service!! Ilan is really an expert, he repaired my laptop in one day and he gave me really valuable tips. Definitely will visit him again if I face any problem with my laptop! Really good quality price ratio!' },
  { name: 'Carlos Oviedo Moreno', date: '11-11-2019', rating: 5, text: 'Attentive and caring service. Ilan really aims to help and solve all PC problems you may have, suggesting improvements and alternatives if you need any ideas. He really makes an effort to provide you with the best service. Totally recommended.' },
  { name: 'RICHA GARG', date: '08-10-2019', rating: 5, text: 'PC Diemen provided really good service. I went to get my laptop\'s ventilator changed and I received it back in no time with not only a new ventilator but free security updates. Highly recommend.' },
  { name: 'Lilian Touw-Kuypers', date: '27-09-2019', rating: 5, text: 'Prima service. Harde schijf vervangen met ophaal- en bezorgservice aan huis. Duidelijke communicatie. Zeer blij mee!' },
  { name: 'Sumit Gupta', date: '13-09-2019', rating: 5, text: 'Wonderful service on first time visit. He not only helped me fix the laptop but also gave me advice and explained how laptops are built so that I understand what is being fixed. Trustworthy and reliable.' },
  { name: 'lucas ong', date: '06-09-2019', rating: 5, text: 'Super kind, helpful people who accepted problems with my Microsoft Surface Pro when many other repair shops did not. Managed to fix it properly for a great price! Highly recommended and saved my studies!' },
  { name: 'Paola Cannito', date: '27-07-2019', rating: 5, text: 'Zeker aan te raden!! Ontzettend snel geholpen en mega goede service. Advies over apparaten, data migratie en remote support.' },
  { name: 'Thomas van Zelst', date: '27-06-2019', rating: 5, text: 'Ik ben heel snel en goed geholpen. Ik kom zeker terug als ik wat heb met een computer of laptop. Tevens heb ik goed advies gekregen over welke laptop ik het beste kon kiezen voor bepaalde werkzaamheden.' },
  { name: 'Nico van Bockel', date: '27-06-2019', rating: 5, text: 'Ik kan PC-Diemen zeker aanraden! Hele goede service en vakmanschap voor een onwijs goede prijs! Ilan is above and beyond gegaan! Ilan bedankt!' },
  { name: 'Ognjan Denkovski', date: '07-06-2019', rating: 5, text: 'Transparent, available, fast and fair service. Helped out in a crisis on Sunday!' },
  { name: 'Christopher Liddle', date: '03-06-2019', rating: 5, text: 'Excellent service!!! Recovered my lost data after I had spilled water on my laptop and it had broken. Very friendly, helpful and hardworking. Will definitely recommend!' },
  { name: 'Ariaan Bos', date: '27-04-2019', rating: 5, text: 'Zeker 5 sterren waard! De computer is opgehaald, de disk is verwijderd en de informatie is op een stick gezet. Na een dag kon ik de stick alweer ophalen. Nogmaals bedankt voor het snelle accurate handelen.' },
  { name: 'Tanja Versloot', date: '27-03-2019', rating: 5, text: 'Prima service, snel en kordaat niks is hem te veel en je hoeft maar te kikken en hij is er.' },
  { name: 'Roemer Schoorl', date: '27-03-2019', rating: 5, text: 'Goed contact, lekker snel, altijd behulpzaam en dat voor een lage prijs. Dit is zeker een aanrader.' },
  { name: 'Karim M', date: '27-03-2019', rating: 5, text: 'Top service. Probleem gehad met mijn moederboard en had verwacht dat ik een nieuwe moest kopen. PCDiemen heeft de moederboard toch kunnen repareren. Vakkundig en professioneel.' },
  { name: 'ImTooGucci', date: '27-03-2019', rating: 5, text: 'Beste plek om je desktop/laptop te repareren echt een aanrader, Ilan is een toffe gozer maakt goeie deals en is zeker vertrouwbaar.' },
  { name: 'Rik Almekinders', date: '27-03-2019', rating: 5, text: 'Grappig: Ilan vernieuwde mijn harde schijf en van de oude maakte hij een externe harde schijf. Je moet er maar opkomen!' },
  { name: 'Edoardo Polito', date: '27-01-2019', rating: 5, text: 'Great and punctual service! I bought all the PC components separately and they were very kind in building my desktop — it took them only 2 hours!' },
  { name: 'Marieke Geudeker', date: '27-01-2019', rating: 5, text: 'Super snel, bekwaam, vriendelijk en betaalbaar!' },
  { name: 'Chris ter Veen', date: '27-01-2019', rating: 5, text: 'Mijn computer stopte er opeens mee. Ik ben erg onder de indruk van de snelheid en professionaliteit waarmee Ilan werkt. Duidelijk aanrader.' },
  { name: 'Luca Belelli Marchesini', date: '27-01-2019', rating: 5, text: 'I found in PC-Diemen a competent and helpful IT repair service with a very good service quality/cost ratio. The causes of my laptop malfunctioning were quickly analyzed, then the benefits and related costs of different options were reported in a very informative and transparent way. Thanks to PC-Diemen I now have a fully performing computer — and even better than before — at a fair expense.' },
  { name: 'Danny Danquah', date: '27-01-2019', rating: 5, text: 'Ik ben blij dat Ilan mij andere opties kon aanbieden toen andere winkels mij niet konden helpen. Bedankt PC-Diemen!!' },
  { name: 'Joanne Gerrits', date: '15-01-2019', rating: 5, text: 'Ilan van PC Diemen heeft écht alles op alles gezet om mijn totaal vastgelopen harde schijf en al mijn bestanden te redden. En met succes! Ik raad hem van harte aan!!' },
  { name: 'Tetyana Volokhovych', date: '29-06-2018', rating: 5, text: 'Good service, quick and professional assistance! Fair prices.' },
  { name: 'Hon Sophia Balod', date: '14-06-2018', rating: 5, text: 'PC Diemen was very helpful after I spilled water on my laptop for the second time. Even if Ilan was away for work in another country, he found me an expert to fix my laptop. I highly recommend these guys!' },
  { name: 'Mirjam Bobo', date: '28-05-2018', rating: 5, text: 'Ik kan door m\'n werk niet zonder computer, 1 telefoontje naar PC-Diemen en ze nemen m\'n computer over, diagnosticeren het probleem en lossen het op. Het lijkt wel een privé helpdesk, SUPER GEWOON!! Ga zo door mannen.' },
  { name: 'Robin de Vries', date: '28-05-2018', rating: 5, text: 'Perfecte service! Ik ben vanwege mijn werk zeer afhankelijk van mijn computer en dat begrijpen ze goed bij PC-Diemen. Jullie zijn een life saver.' },
  { name: 'Tjeerd van Benthem', date: '28-05-2018', rating: 5, text: 'Uitstekende service! Snel, vakkundig, professioneel en betrouwbaar. Heldere prijsopgave, geen verrassingen.' },
  { name: 'Bob van Veen', date: '04-05-2018', rating: 5, text: 'Leek wel een aquarium... maar na het nodige harde werk doet hij het weer. Goed werk!' },
  { name: 'Boukje Bakker', date: '30-04-2018', rating: 5, text: 'Super blij! Batterij van mn laptop vervangen. Snelle service, echt een aanrader!' },
  { name: 'Ilse Ros-Kraijnbrink', date: '27-01-2018', rating: 5, text: 'Super leuk contact, deskundig, geen flauwekul het is wat het is.' },
  { name: 'Anita Doodeman', date: '27-01-2018', rating: 5, text: 'Geweldige en snelle service.' },
  { name: 'Melissa van den Aakster', date: '27-01-2018', rating: 5, text: 'Mijn laptop was traag aan het worden. Goede service. Laptop weer lekker snel. Zeker aan te raden.' },
  { name: 'Danny Phillipson', date: '27-01-2018', rating: 5, text: 'Geweldige service en eerlijke aardige man. Toppie. Zouden velen een voorbeeld aan kunnen nemen.' },
  { name: 'myrthe wieler', date: '18-12-2017', rating: 5, text: 'Top quality service. I came with a very old laptop that I had little hope for, but Ilan worked a miracle. Fantastic to find someone who you can trust.' },
  { name: 'af w', date: '21-11-2017', rating: 5, text: 'Amazing service, came with a PC that didn\'t want to start up and went home with a PC that worked amazingly fast. 10/10 would come again.' },
  { name: 'Akari Akaza', date: '21-11-2017', rating: 5, text: 'Snel geholpen hele goeie service! Zeker een aanrader!' },
]

export default function ReviewsPage() {
  const [showAll, setShowAll] = useState(false)
  const visibleReviews = showAll ? reviews : reviews.slice(0, INITIAL_VISIBLE)

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-16 w-[20rem] h-[20rem] rounded-full bg-white" />
          <div className="absolute -bottom-28 right-1/4 w-80 h-80 rounded-full bg-white" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Google Reviews & Recensies</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Service, kwaliteit & klant tevredenheid staat bij ons op #1.
            Laat ons weten hoe wij onze diensten nog beter kunnen maken.
            PC Diemen luistert naar U.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleReviews.map((review, i) => (
              <a
                key={i}
                href={GOOGLE_MAPS_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="h-full hover:shadow-md transition-shadow group-hover:border-primary/30">
                  <CardContent className="pt-5">
                    <div className="flex items-start justify-between mb-2">
                      <Quote className="h-5 w-5 text-primary/30 shrink-0" />
                      <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/0 group-hover:text-muted-foreground transition-colors shrink-0" />
                    </div>
                    <p className="text-sm text-foreground leading-relaxed mb-4">
                      "{review.text}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(review.rating)].map((_, j) => (
                          <Star key={j} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {/* See More Button */}
          {!showAll && reviews.length > INITIAL_VISIBLE && (
            <div className="flex justify-center mt-10">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(true)}
                className="gap-2"
              >
                Bekijk alle {reviews.length} reviews
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          )}

          {showAll && (
            <div className="flex justify-center mt-10">
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  setShowAll(false)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="gap-2"
              >
                Minder tonen
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5 border-t border-border">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Heeft u een goede ervaring bij ons gehad?
          </h2>
          <p className="text-muted-foreground mb-8">
            Laat het ons weten in een Google review!
          </p>
          <a href={GOOGLE_MAPS_WRITE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2 text-base px-8">
              <Star className="h-5 w-5" />
              Schrijf een Google Review
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
