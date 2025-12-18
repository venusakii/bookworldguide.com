import { LibraryHeader } from "@/components/library-header"
import { TheArchives } from "@/components/the-archives"
import { CookieBanner } from "@/components/cookie-banner"
import { Shield, Calendar, Award, BookOpen, Feather } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FirstFolioPage() {
  return (
    <>
      <LibraryHeader />
      <main className="min-h-screen bg-gradient-to-b from-mahogany via-forest to-mahogany pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="bg-[#1E2D24] border-2 border-[#C6A75E] p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Book Image */}
              <div className="relative h-[600px] overflow-hidden border-4 border-[#C6A75E]/40">
                <img
                  src="/antique-book-collection-leather.jpg"
                  alt="First Folio Collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 right-6 bg-[#C6A75E] p-4 rounded-sm">
                  <Shield className="w-10 h-10 text-[#0F0F0F]" />
                </div>
              </div>

              {/* Book Details */}
              <div className="flex flex-col justify-center">
                <div className="mb-8">
                  <h1 className="font-serif text-5xl text-[#C6A75E] mb-4">First Folio Collection</h1>
                  <p className="text-[#C6A75E]/80 text-xl uppercase tracking-wider mb-2">Signed Edition</p>
                  <p className="text-[#8B7355] text-2xl italic mb-6">By Special Request</p>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-[#C6A75E] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-[#EFE6D8] font-bold mb-2">Historical Significance</h3>
                      <p className="text-[#8B7355] leading-relaxed">
                        This remarkable collection contains first edition prints from the 17th and 18th centuries,
                        including works by Shakespeare, Milton, and other literary giants of the English Renaissance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Feather className="w-6 h-6 text-[#C6A75E] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-[#EFE6D8] font-bold mb-2">Signed Authenticity</h3>
                      <p className="text-[#8B7355] leading-relaxed">
                        Each volume includes original signatures and inscriptions from notable literary figures and
                        previous owners, adding immense historical and monetary value.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Award className="w-6 h-6 text-[#C6A75E] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-[#EFE6D8] font-bold mb-2">Rarity & Condition</h3>
                      <p className="text-[#8B7355] leading-relaxed">
                        Professionally restored and bound in full morocco leather with gilt decoration. Complete with
                        all original plates and illustrations in excellent condition.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <BookOpen className="w-6 h-6 text-[#C6A75E] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-[#EFE6D8] font-bold mb-2">Collection Contents</h3>
                      <ul className="text-[#8B7355] space-y-1">
                        <li>• 24 volumes in total</li>
                        <li>• Original leather bindings restored</li>
                        <li>• Custom-built display case included</li>
                        <li>• Complete authentication certificates</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-[#C6A75E] hover:bg-[#F4ECD8] text-[#0F0F0F] font-serif text-lg py-6">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2A1810] border-2 border-[#C6A75E]/30 p-8">
              <h3 className="font-serif text-2xl text-[#C6A75E] mb-4">Expert Authentication</h3>
              <p className="text-[#8B7355] leading-relaxed">
                Every volume has been examined and authenticated by leading rare book specialists. Complete provenance
                documentation is provided with purchase.
              </p>
            </div>

            <div className="bg-[#2A1810] border-2 border-[#C6A75E]/30 p-8">
              <h3 className="font-serif text-2xl text-[#C6A75E] mb-4">Bespoke Display</h3>
              <p className="text-[#8B7355] leading-relaxed">
                A custom mahogany display case with climate control is included, designed to showcase and preserve this
                exceptional collection for centuries to come.
              </p>
            </div>

            <div className="bg-[#2A1810] border-2 border-[#C6A75E]/30 p-8">
              <h3 className="font-serif text-2xl text-[#C6A75E] mb-4">White Glove Service</h3>
              <p className="text-[#8B7355] leading-relaxed">
                Our specialists provide personalized consultation, secure transportation, and installation services to
                ensure your collection arrives safely and is displayed properly.
              </p>
            </div>
          </div>
        </div>
      </main>
      <TheArchives />
      <CookieBanner />
    </>
  )
}
