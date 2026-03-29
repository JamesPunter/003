import type { FormEvent } from 'react'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      {/* Contact Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            {/* Left — Contact Info Card */}
            <div className="bg-teal-light rounded-2xl lg:rounded-r-none p-10 md:p-14 flex flex-col justify-center space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
                    Bel ons
                  </h3>
                </div>
                <p className="text-muted-foreground ml-8">
                  085-3015433 / 06-12223338
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
                    Locatie
                  </h3>
                </div>
                <p className="text-muted-foreground ml-8">
                  Meerkoet 227, Diemen
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
                    E-mail
                  </h3>
                </div>
                <p className="text-muted-foreground ml-8">info@pcdiemen.nl</p>
              </div>

            </div>

            {/* Right — Contact Form */}
            <div className="bg-white rounded-2xl lg:rounded-l-none p-10 md:p-14 flex flex-col justify-center">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <Mail className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Bedankt!</h3>
                  <p className="text-muted-foreground">
                    Wij nemen zo snel mogelijk contact met u op.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-primary mb-8">
                    Neem contact op
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        placeholder="Uw naam"
                        required
                        className="border-0 border-b-2 border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Uw e-mailadres"
                        required
                        className="border-0 border-b-2 border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Uw bericht"
                        rows={4}
                        required
                        className="border-0 border-b-2 border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-400 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="outline"
                      className="uppercase tracking-widest font-semibold border-2 border-foreground hover:bg-primary hover:text-white hover:border-primary px-8"
                    >
                      Versturen
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Review prompt */}
      <section className="max-w-3xl mx-auto px-4 py-12 text-center">
        <p className="text-muted-foreground">
          Bent u reeds klant, laat aub uw mening horen, uw mening is belangrijk voor ons!
        </p>
      </section>

      {/* Google Maps */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="PC-Diemen locatie"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.0!2d4.96!3d52.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMeerkoet%20227%2C%20Diemen!5e0!3m2!1snl!2snl!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
