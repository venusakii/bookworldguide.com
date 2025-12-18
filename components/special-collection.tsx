import { Crown, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const specialBooks = [
  {
    title: "The Illuminated Manuscript",
    subtitle: "Limited Edition",
    price: "Reserved for Collectors",
    icon: Crown,
    image: "/illuminated-manuscript-gold-ornate.jpg",
  },
  {
    title: "First Folio Collection",
    subtitle: "Signed Edition",
    price: "By Special Request",
    icon: Shield,
    image: "/antique-book-collection-leather.jpg",
  },
  {
    title: "The Rare Compendium",
    subtitle: "Collector's Print",
    price: "Exclusive Acquisition",
    icon: Star,
    image: "/rare-vintage-book-embossed.jpg",
  },
]

export function SpecialCollection() {
  return (
    <section className="py-24 px-4 bg-[#1E2D24] relative overflow-hidden">
      {/* Velvet texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3B1F16] via-[#1E2D24] to-[#0F0F0F]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Crown className="h-16 w-16 text-[#C6A75E]" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-[#C6A75E] mb-4">Special Collection</h2>
          <p className="text-[#8B7355] text-lg max-w-2xl mx-auto leading-relaxed">
            Limited editions, rare volumes, and collector's treasures available only to the most devoted bibliophiles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialBooks.map((book, index) => {
            const Icon = book.icon
            const bookSlug = book.title.toLowerCase().replace(/\s+/g, "-")
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-[#2A1810] to-[#1E2D24] border-2 border-[#C6A75E] p-8 hover:shadow-2xl hover:shadow-[#C6A75E]/30 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Book image */}
                <div className="relative h-80 mb-6 overflow-hidden bg-[#3B1F16] border border-[#C6A75E]/40">
                  <img
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2D24] via-transparent to-transparent opacity-60" />

                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 bg-[#C6A75E] p-3 rounded-sm">
                    <Icon className="h-6 w-6 text-[#0F0F0F]" />
                  </div>
                </div>

                {/* Book details */}
                <div className="text-center">
                  <h3 className="font-serif text-2xl text-[#EFE6D8] mb-2">{book.title}</h3>
                  <p className="text-[#C6A75E] text-sm mb-2 uppercase tracking-wider">{book.subtitle}</p>
                  <p className="text-[#8B7355] text-lg mb-6 italic">{book.price}</p>

                  <a href={`/collection/${bookSlug}`}>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent hover:bg-[#C6A75E] text-[#C6A75E] hover:text-[#0F0F0F] border-2 border-[#C6A75E] font-serif transition-all duration-300"
                    >
                      Inquire About This Volume
                    </Button>
                  </a>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#C6A75E]" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#C6A75E]" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#C6A75E]" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#C6A75E]" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
