import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'


import { Button } from '@/components/ui/button'

const galleryItems = [
  {
    image: '/20200125_132157-2048x679.jpg',
    title: 'Technische Dienst',
    desc: '',
    tags: [],
  },
  {
    image: '/keyb_repair_720-1.jpg',
    title: 'Asus Notebook keyboard reparatie',
    desc: '',
    tags: [],
  },
  {
    image: '/Imac_repair1-1.jpg',
    title: 'iMac beeldscherm reparatie',
    desc: '',
    tags: [],
  },
  {
    image: '/webdesign-1024x576.jpg',
    title: 'Webserver Project',
    desc: 'Weer een leuk project, apache webserver, mysql, php, virtual hosting server opzetten met wordpress support',
    tags: ['VMware', 'Apache', 'MySQL', 'PHP', 'WordPress'],
  },
  {
    image: '/20171114_073154-1024x576.jpg',
    title: 'macOS op Notebook',
    desc: 'macOS op willekeurige Notebook @ PCDiemen #YesWeCan',
    tags: ['macOS'],
  },
  {
    image: '/bedrijfskleding.jpg',
    title: 'Bedrijfs Hoodies',
    desc: '',
    tags: [],
  },
]

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = galleryItems[activeIndex]

  const prev = () =>
    setActiveIndex((i) => (i === 0 ? galleryItems.length - 1 : i - 1))
  const next = () =>
    setActiveIndex((i) => (i === galleryItems.length - 1 ? 0 : i + 1))

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-10 w-72 h-72 rounded-full bg-white" />
          <div className="absolute bottom-1/4 -left-24 w-[26rem] h-[26rem] rounded-full bg-white" />
          <div className="absolute -bottom-8 right-1/2 w-36 h-36 rounded-full bg-white" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-14 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Gallerij</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Een kijkje in onze werkplaats en projecten.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4">

          {/* Title & description — fixed height to prevent layout shift */}
          <div className="text-center mb-4 h-16 flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-bold">{active.title}</h2>
            <p className="text-muted-foreground text-sm mt-1">
              {active.desc || '\u00A0'}
            </p>
          </div>

          {/* Main image with navigation — fixed aspect ratio container */}
          <div className="relative mb-4">
            <div className="w-full h-[24rem] md:h-[28rem] rounded-lg overflow-hidden">
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-full object-contain"
              />
            </div>

            <Button
              variant="secondary"
              size="icon"
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full shadow-lg h-9 w-9 opacity-80 hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full shadow-lg h-9 w-9 opacity-80 hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-1.5 justify-center">
            {galleryItems.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`
                  w-16 h-12 md:w-24 md:h-16 rounded-md overflow-hidden shrink-0 transition-all duration-200
                  ${i === activeIndex
                    ? 'ring-2 ring-primary ring-offset-1 opacity-100'
                    : 'opacity-40 hover:opacity-75'
                  }
                `}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
