import { LibraryHeader } from "@/components/library-header"
import { TheArchives } from "@/components/the-archives"
import { CookieBanner } from "@/components/cookie-banner"
import { Award, BookCheck, Sparkles, Target } from "lucide-react"

export default function PreservationStandardsPage() {
  return (
    <>
      <LibraryHeader />
      <main className="min-h-screen bg-gradient-to-b from-[#3D2817] to-[#1E2D24] pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <Award className="w-16 h-16 text-[#C6A75E] mx-auto mb-4" />
            <h1 className="font-serif text-5xl md:text-6xl text-[#C6A75E] mb-4">Preservation Standards</h1>
            <p className="text-[#8B7355] text-lg">Our commitment to literary excellence</p>
            <p className="text-[#8B7355]/70 text-sm mt-2">Established 2025</p>
          </div>

          <div className="bg-[#1E2D24] border-2 border-[#C6A75E]/30 p-8 md:p-12 space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-[#C6A75E]" />
                <h2 className="font-serif text-2xl text-[#C6A75E]">Our Mission</h2>
              </div>
              <p className="text-[#F4ECD8] leading-relaxed">
                At BookWorldGuide, we are dedicated to preserving and promoting the world's greatest literary works. Our
                preservation standards ensure that every book in our collection meets the highest criteria for literary
                merit, historical significance, and cultural impact.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <BookCheck className="w-6 h-6 text-[#C6A75E]" />
                <h2 className="font-serif text-2xl text-[#C6A75E]">Selection Criteria</h2>
              </div>
              <p className="text-[#F4ECD8] leading-relaxed mb-4">
                Every book featured in our library undergoes a rigorous evaluation process by our team of literary
                curators. We consider multiple factors when selecting works for preservation:
              </p>
              <ul className="list-disc list-inside text-[#8B7355] space-y-2 ml-4">
                <li>Literary merit and artistic achievement</li>
                <li>Historical and cultural significance</li>
                <li>Critical acclaim and scholarly recognition</li>
                <li>Enduring impact on literature and society</li>
                <li>Representation of diverse voices and perspectives</li>
                <li>Innovation in form, style, or narrative technique</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-[#C6A75E]" />
                <h2 className="font-serif text-2xl text-[#C6A75E]">Quality Assurance</h2>
              </div>
              <p className="text-[#F4ECD8] leading-relaxed mb-4">
                We maintain the highest standards for book information accuracy and presentation:
              </p>
              <div className="space-y-4">
                <div className="bg-[#3D2817] border-l-4 border-[#C6A75E] p-4">
                  <h3 className="text-[#C6A75E] font-bold mb-2">Accurate Metadata</h3>
                  <p className="text-[#8B7355]">
                    All publication dates, author information, and editions are verified against authoritative sources.
                  </p>
                </div>
                <div className="bg-[#3D2817] border-l-4 border-[#C6A75E] p-4">
                  <h3 className="text-[#C6A75E] font-bold mb-2">Thoughtful Curation</h3>
                  <p className="text-[#8B7355]">
                    Our descriptions and recommendations are crafted by experienced readers and literary scholars.
                  </p>
                </div>
                <div className="bg-[#3D2817] border-l-4 border-[#C6A75E] p-4">
                  <h3 className="text-[#C6A75E] font-bold mb-2">Regular Updates</h3>
                  <p className="text-[#8B7355]">
                    Our collection is continuously reviewed and updated to include new classics and contemporary
                    masterpieces.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#C6A75E] mb-4">Special Collections</h2>
              <p className="text-[#F4ECD8] leading-relaxed mb-4">
                Our rare and special collections feature works of exceptional historical and cultural value. These
                include first editions, signed copies, and historically significant volumes that have shaped literary
                traditions.
              </p>
              <p className="text-[#8B7355] leading-relaxed">
                Each item in our special collections is authenticated and documented with provenance information to
                ensure historical accuracy and cultural preservation.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#C6A75E] mb-4">Curator's Commitment</h2>
              <p className="text-[#F4ECD8] leading-relaxed mb-4">
                Our team of literary curators brings decades of combined experience in literary criticism, library
                science, and book history. We are committed to:
              </p>
              <ul className="list-disc list-inside text-[#8B7355] space-y-2 ml-4">
                <li>Promoting literary excellence across all genres and eras</li>
                <li>Amplifying diverse voices and underrepresented authors</li>
                <li>Providing context and historical perspective for every work</li>
                <li>Making great literature accessible to all readers</li>
                <li>Preserving literary heritage for future generations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#C6A75E] mb-4">Contact Our Curators</h2>
              <p className="text-[#F4ECD8] leading-relaxed">
                Have questions about our preservation standards or suggestions for our collection? Contact our
                curatorial team at{" "}
                <a href="mailto:curators@bookworldguide.com" className="text-[#C6A75E] hover:underline">
                  curators@bookworldguide.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <TheArchives />
      <CookieBanner />
    </>
  )
}
