import { LibraryHeader } from "@/components/library-header"
import { TheArchives } from "@/components/the-archives"
import { CookieBanner } from "@/components/cookie-banner"
import { Crown, Calendar, Award, BookOpen, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function IlluminatedManuscriptPage() {
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
                  src="/illuminated-manuscript-gold-ornate.jpg"
                  alt="The Illuminated Manuscript"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 right-6 bg-[#C6A75E] p-4 rounded-sm">
                  <Crown className="w-10 h-10 text-[#0F0F0F]" />
                </div>
              </div>

              {/* Book Details */}
              <div className="flex flex-col justify-center">
                <div className="mb-8">
                  <h1 className="font-serif text-5xl text-[#C6A75E] mb-4">The Illuminated Manuscript</h1>
                  <p className="text-[#C6A75E]/80 text-xl uppercase tracking-wider mb-2">Limited Edition</p>
                  <p className="text-[#8B7355] text-2xl italic mb-6">Reserved for Collectors</p>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-[#C6A75E] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-[#EFE6D8] font-bold mb-2">Origin & Date</h3>
                      <p className="text-[#8B7355] leading-relaxed">
                        This extraordinary manuscript dates back to the 15th century, featuring hand-painted miniatures
                        and gold leaf illumination. Each page is a masterpiece of medieval artistry.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-[#C6A75E] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-[#EFE6D8] font-bold mb-2">Condition & Provenance</h3>
                      <p className="text-[#8B7355] leading-relaxed">
                        Exceptionally preserved with complete authentication and detailed provenance documentation.
                        Previously housed in a European royal library collection.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Award className="w-6 h-6 text-[#C6A75E] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-[#EFE6D8] font-bold mb-2">Collector's Value</h3>
                      <p className="text-[#8B7355] leading-relaxed">
                        One of only three known copies in existence. Featured in numerous exhibitions and scholarly
                        publications. A true investment piece for serious collectors.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <BookOpen className="w-6 h-6 text-[#C6A75E] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-[#EFE6D8] font-bold mb-2">Specifications</h3>
                      <ul className="text-[#8B7355] space-y-1">
                        <li>• Size: 340mm × 240mm</li>
                        <li>• Pages: 284 vellum folios</li>
                        <li>• Binding: Original leather with brass clasps</li>
                        <li>• Illuminations: 156 hand-painted miniatures</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-[#C6A75E] hover:bg-[#F4ECD8] text-[#0F0F0F] font-serif text-lg py-6">
                  Request Private Viewing
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2A1810] border-2 border-[#C6A75E]/30 p-8">
              <h3 className="font-serif text-2xl text-[#C6A75E] mb-4">Acquisition Process</h3>
              <p className="text-[#8B7355] leading-relaxed">
                Interested collectors are invited to schedule a private viewing. Our specialists will provide detailed
                authentication documents and arrange secure delivery.
              </p>
            </div>

            <div className="bg-[#2A1810] border-2 border-[#C6A75E]/30 p-8">
              <h3 className="font-serif text-2xl text-[#C6A75E] mb-4">Care & Preservation</h3>
              <p className="text-[#8B7355] leading-relaxed">
                We provide comprehensive guidance on proper storage, environmental controls, and conservation practices
                to ensure this treasure remains pristine for generations.
              </p>
            </div>

            <div className="bg-[#2A1810] border-2 border-[#C6A75E]/30 p-8">
              <h3 className="font-serif text-2xl text-[#C6A75E] mb-4">Investment Value</h3>
              <p className="text-[#8B7355] leading-relaxed">
                Historical manuscripts have consistently appreciated in value. This piece represents not only cultural
                significance but also a sound addition to any collection.
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
