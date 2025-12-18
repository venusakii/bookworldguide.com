import { LibraryHeader } from "@/components/library-header"
import { TheArchives } from "@/components/the-archives"
import { CookieBanner } from "@/components/cookie-banner"
import { Star, Calendar, Award, BookOpen, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RareCompendiumPage() {
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
                  src="/rare-vintage-book-embossed.jpg"
                  alt="The Rare Compendium"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 right-6 bg-[#C6A75E] p-4 rounded-sm">
                  <Star className="w-10 h-10 text-[#0F0F0F]" />
                </div>
              </div>

              {/* Book Details */}
              <div className="flex flex-col justify-center">
                <div className="mb-8">
                  <h1 className="font-serif text-5xl text-[#C6A75E] mb-4">The Rare Compendium</h1>
                  <p className="text-[#C6A75E]/80 text-xl uppercase tracking-wider mb-2">Collector's Print</p>
                  <p className="text-[#8B7355] text-2xl italic mb-6">Exclusive Acquisition</p>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-[#C6A75E] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-[#EFE6D8] font-bold mb-2">A Masterwork of Knowledge</h3>
                      <p className="text-[#8B7355] leading-relaxed">
                        This extraordinary compendium, published in 1823, contains encyclopedic knowledge spanning
                        natural history, philosophy, and the arts. Hand-illustrated with over 200 copperplate
                        engravings.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Lock className="w-6 h-6 text-[#C6A75E] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-[#EFE6D8] font-bold mb-2">Exclusive Availability</h3>
                      <p className="text-[#8B7355] leading-relaxed">
                        Only 50 copies were ever printed, making this one of the rarest collector's items available.
                        This particular copy is number 7, with pristine original binding and uncut pages.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Award className="w-6 h-6 text-[#C6A75E] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-[#EFE6D8] font-bold mb-2">Museum Quality</h3>
                      <p className="text-[#8B7355] leading-relaxed">
                        Previously owned by a distinguished Oxford scholar and later housed in the private collection of
                        a European nobleman. Includes original bookplate and marginalia of historical interest.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <BookOpen className="w-6 h-6 text-[#C6A75E] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-[#EFE6D8] font-bold mb-2">Physical Details</h3>
                      <ul className="text-[#8B7355] space-y-1">
                        <li>• Dimensions: Large Quarto (305mm × 240mm)</li>
                        <li>• 3 volumes, 1,247 pages total</li>
                        <li>• Full calf leather binding with gilt spine</li>
                        <li>• 247 hand-colored engravings</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-[#C6A75E] hover:bg-[#F4ECD8] text-[#0F0F0F] font-serif text-lg py-6">
                  Express Interest
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2A1810] border-2 border-[#C6A75E]/30 p-8">
              <h3 className="font-serif text-2xl text-[#C6A75E] mb-4">Collector's Dream</h3>
              <p className="text-[#8B7355] leading-relaxed">
                This compendium represents the pinnacle of 19th-century bookmaking. The combination of rarity,
                condition, and provenance makes it an exceptional addition to any serious collection.
              </p>
            </div>

            <div className="bg-[#2A1810] border-2 border-[#C6A75E]/30 p-8">
              <h3 className="font-serif text-2xl text-[#C6A75E] mb-4">Preservation Services</h3>
              <p className="text-[#8B7355] leading-relaxed">
                We offer ongoing conservation support and professional advice on maintaining this treasure.
                Climate-controlled storage recommendations and periodic condition assessments are included.
              </p>
            </div>

            <div className="bg-[#2A1810] border-2 border-[#C6A75E]/30 p-8">
              <h3 className="font-serif text-2xl text-[#C6A75E] mb-4">Secure Acquisition</h3>
              <p className="text-[#8B7355] leading-relaxed">
                All transactions are handled with complete discretion. We arrange secure, insured international shipping
                and provide comprehensive documentation for insurance and estate purposes.
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
