import { LibraryHeader } from "@/components/library-header"
import { TheArchives } from "@/components/the-archives"
import { CookieBanner } from "@/components/cookie-banner"
import { BookOpen, Award, Star } from "lucide-react"

export default function AuthorCollectionPage() {
  const books = [
    {
      title: "Half of a Yellow Sun",
      year: "2006",
      description:
        "Epic story set during the Nigerian-Biafran War, exploring love, loyalty, and the end of colonialism.",
      rating: 4.5,
      awards: ["Orange Prize for Fiction"],
      image: "/half-yellow-sun-cover.jpg",
    },
    {
      title: "Americanah",
      year: "2013",
      description:
        "A powerful story about race, identity, and belonging as experienced by a Nigerian woman in America.",
      rating: 4.6,
      awards: ["National Book Critics Circle Award"],
      image: "/americanah-cover.jpg",
    },
    {
      title: "We Should All Be Feminists",
      year: "2014",
      description: "Adapted from her TEDx talk, this essay examines what it means to be a feminist today.",
      rating: 4.4,
      awards: ["Bestseller"],
      image: "/feminists-cover.jpg",
    },
    {
      title: "Purple Hibiscus",
      year: "2003",
      description:
        "Coming-of-age story set in postcolonial Nigeria, exploring family, freedom, and finding one's voice.",
      rating: 4.3,
      awards: ["Commonwealth Writers' Prize"],
      image: "/purple-hibiscus-cover.jpg",
    },
  ]

  return (
    <>
      <LibraryHeader />
      <main className="min-h-screen bg-gradient-to-b from-mahogany via-forest to-mahogany pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#3D2817] to-[#1E2D24]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 items-center mb-12">
              <div className="md:col-span-1">
                <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#8B4513] to-[#3D2817] border-4 border-[#C6A75E]/20 overflow-hidden">
                  <img
                    src="/vintage-writing-desk-quill-books.jpg"
                    alt="Chimamanda Ngozi Adichie"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <h1 className="font-serif text-5xl text-[#F4ECD8] mb-4">Chimamanda Ngozi Adichie</h1>
                <p className="text-[#C6A75E] text-xl mb-6 italic">Award-winning Nigerian Author & Feminist Icon</p>
                <p className="text-[#F4ECD8]/80 text-lg leading-relaxed mb-6">
                  Chimamanda Ngozi Adichie is a renowned Nigerian writer whose novels, essays, and stories explore
                  themes of identity, race, feminism, and the African experience. Her works have been translated into
                  over thirty languages and have earned numerous international awards.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-[#C6A75E]/20 border border-[#C6A75E]/40 text-[#C6A75E] px-4 py-2 text-sm">
                    Literary Fiction
                  </span>
                  <span className="bg-[#C6A75E]/20 border border-[#C6A75E]/40 text-[#C6A75E] px-4 py-2 text-sm">
                    Contemporary
                  </span>
                  <span className="bg-[#C6A75E]/20 border border-[#C6A75E]/40 text-[#C6A75E] px-4 py-2 text-sm">
                    African Literature
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Books Collection */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-[#C6A75E]" />
                <h2 className="font-serif text-4xl text-[#F4ECD8]">Complete Collection</h2>
              </div>
              <p className="text-[#C6A75E]/80 text-lg">Explore all works by this remarkable author</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {books.map((book, index) => (
                <div
                  key={index}
                  className="bg-[#1E2D24] border-2 border-[#C6A75E]/30 p-8 hover:border-[#C6A75E] transition-all duration-300 hover:shadow-xl hover:shadow-[#C6A75E]/20"
                >
                  <div className="flex gap-6">
                    <div className="w-32 h-48 flex-shrink-0 overflow-hidden border-2 border-[#C6A75E]/20">
                      <img
                        src={book.image || "/placeholder.svg"}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="font-serif text-2xl text-[#F4ECD8] mb-1">{book.title}</h3>
                        <p className="text-[#C6A75E]/60 text-sm">{book.year}</p>
                      </div>

                      <p className="text-[#F4ECD8]/80 mb-4 leading-relaxed">{book.description}</p>

                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(book.rating) ? "fill-[#C6A75E] text-[#C6A75E]" : "text-[#C6A75E]/30"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-[#C6A75E] font-bold">{book.rating}/5</span>
                      </div>

                      {book.awards.map((award, awardIndex) => (
                        <div key={awardIndex} className="flex items-center gap-2 mb-2">
                          <Award className="w-4 h-4 text-[#C6A75E]" />
                          <span className="text-[#C6A75E]/80 text-sm">{award}</span>
                        </div>
                      ))}

                      <button className="mt-4 bg-[#C6A75E] text-[#3D2817] px-4 py-2 text-sm font-bold hover:bg-[#F4ECD8] transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <TheArchives />
      <CookieBanner />
    </>
  )
}
