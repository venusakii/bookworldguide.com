import { LibraryHeader } from "@/components/library-header"
import { TheArchives } from "@/components/the-archives"
import { CookieBanner } from "@/components/cookie-banner"
import { Calendar } from "lucide-react"
import Image from "next/image"

export default function BrowseByEraPage() {
  const eras = [
    {
      period: "Classical Era",
      years: "8th Century BC - 5th Century AD",
      description: "Ancient wisdom from Greek and Roman philosophers, poets, and historians.",
      books: [
        { title: "The Iliad", author: "Homer", year: "8th Century BC", image: "/classical-iliad.jpg" },
        { title: "Meditations", author: "Marcus Aurelius", year: "170-180 AD", image: "/classical-meditations.jpg" },
        { title: "The Republic", author: "Plato", year: "380 BC", image: "/classical-republic.jpg" },
      ],
      color: "#8B7355",
    },
    {
      period: "Medieval Period",
      years: "5th Century - 15th Century",
      description: "Tales of chivalry, religious texts, and the dawn of vernacular literature.",
      books: [
        { title: "The Divine Comedy", author: "Dante Alighieri", year: "1320", image: "/medieval-divine-comedy.jpg" },
        { title: "The Canterbury Tales", author: "Geoffrey Chaucer", year: "1387", image: "/medieval-canterbury.jpg" },
        { title: "Le Morte d'Arthur", author: "Thomas Malory", year: "1485", image: "/medieval-arthur.jpg" },
      ],
      color: "#6B4423",
    },
    {
      period: "Renaissance",
      years: "15th Century - 17th Century",
      description: "The rebirth of classical learning and the flourishing of arts and literature.",
      books: [
        { title: "Don Quixote", author: "Miguel de Cervantes", year: "1605", image: "/renaissance-quixote.jpg" },
        { title: "Hamlet", author: "William Shakespeare", year: "1603", image: "/renaissance-hamlet.jpg" },
        { title: "Paradise Lost", author: "John Milton", year: "1667", image: "/renaissance-paradise.jpg" },
      ],
      color: "#C6A75E",
    },
    {
      period: "Enlightenment",
      years: "17th Century - 18th Century",
      description: "Age of reason, scientific revolution, and philosophical inquiry.",
      books: [
        { title: "Candide", author: "Voltaire", year: "1759", image: "/enlightenment-candide.jpg" },
        { title: "A Modest Proposal", author: "Jonathan Swift", year: "1729", image: "/enlightenment-modest.jpg" },
        { title: "The Wealth of Nations", author: "Adam Smith", year: "1776", image: "/enlightenment-wealth.jpg" },
      ],
      color: "#D4AF37",
    },
    {
      period: "Victorian Era",
      years: "19th Century",
      description: "Industrial revolution meets romantic ideals in literature's golden age.",
      books: [
        { title: "Pride and Prejudice", author: "Jane Austen", year: "1813", image: "/victorian-pride.jpg" },
        { title: "Jane Eyre", author: "Charlotte Brontë", year: "1847", image: "/victorian-jane.jpg" },
        { title: "Great Expectations", author: "Charles Dickens", year: "1861", image: "/victorian-expectations.jpg" },
      ],
      color: "#8B4513",
    },
    {
      period: "Modern Era",
      years: "20th Century - Present",
      description: "Contemporary voices exploring the complexities of modern life.",
      books: [
        { title: "1984", author: "George Orwell", year: "1949", image: "/modern-1984.jpg" },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: "1960", image: "/modern-mockingbird.jpg" },
        {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: "1967",
          image: "/modern-solitude.jpg",
        },
      ],
      color: "#5C3A2E",
    },
  ]

  return (
    <>
      <LibraryHeader />
      <main className="min-h-screen bg-gradient-to-b from-mahogany via-forest to-mahogany pt-20">
        {/* Hero Section */}
        

        {/* Eras Timeline */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto space-y-24">
            {eras.map((era, index) => (
              <div key={index} className="relative">
                {/* Era Header */}
                <div className="text-center mb-12">
                  
                  <h2 className="font-serif text-4xl md:text-5xl text-[#EFE6D8] mb-4" style={{ color: era.color }}>
                    {era.period}
                  </h2>
                  <p className="text-[#8B7355] text-lg max-w-2xl mx-auto">{era.description}</p>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {era.books.map((book, bookIndex) => (
                    <div
                      key={bookIndex}
                      className="bg-[#1E2D24] border-2 border-[#C6A75E]/30 p-6 hover:border-[#C6A75E] transition-all duration-300 hover:shadow-xl hover:shadow-[#C6A75E]/20 hover:-translate-y-2 group"
                    >
                      <div className="w-full h-80 bg-gradient-to-br from-[#8B4513] to-[#3D2817] mb-4 overflow-hidden">
                        <Image
                          src={book.image || "/placeholder.svg"}
                          alt={book.title}
                          width={300}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-serif text-2xl text-[#EFE6D8] mb-2">{book.title}</h3>
                        <p className="text-[#C6A75E] font-medium">{book.author}</p>
                        <p className="text-[#8B7355] text-sm">{book.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <TheArchives />
      <CookieBanner />
    </>
  )
}
