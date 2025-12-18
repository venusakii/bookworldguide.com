import { Feather } from "lucide-react"

const curatorNotes = [
  {
    title: "Why This Book Matters",
    excerpt:
      "Some volumes transcend their pages to become monuments of human thought. Here we examine those rare works that changed the course of intellectual history.",
    seal: "Curator's Mark",
  },
  {
    title: "Books That Changed Thought",
    excerpt:
      "From ancient philosophy to modern revelation, certain texts have reshaped how we perceive reality, morality, and our place in the cosmos.",
    seal: "Historical Seal",
  },
  {
    title: "Hidden Gems of Literature",
    excerpt:
      "Not all masterpieces achieve fame in their time. Our curators have unearthed forgotten treasures waiting to be rediscovered by discerning readers.",
    seal: "Discovery Mark",
  },
]

export function CuratorsDesk() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#1E2D24] to-[#2A3F35] relative">
      {/* Parchment texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <img src="/images/parchment-texture.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Feather className="h-12 w-12 text-[#C6A75E] mx-auto mb-4" />
          <h2 className="font-serif text-5xl md:text-6xl text-[#C6A75E] mb-4">The Curator's Desk</h2>
          <p className="text-[#8B7355] text-lg max-w-2xl mx-auto leading-relaxed">
            Handwritten reflections on the volumes that have earned their place in our collection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {curatorNotes.map((note, index) => (
            <div
              key={index}
              className="relative bg-[#EFE6D8] p-8 shadow-2xl border border-[#8B7355]/30 hover:shadow-[#C6A75E]/20 transition-all duration-300 hover:-translate-y-2"
              style={{
                transform: `rotate(${index % 2 === 0 ? "-1deg" : "1deg"})`,
              }}
            >
              {/* Wax seal */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#8B1A1A] border-4 border-[#EFE6D8] flex items-center justify-center shadow-lg">
                <span className="text-[#C6A75E] text-xs font-serif text-center leading-tight">{note.seal}</span>
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl text-[#3B1F16] mb-4 border-b-2 border-[#C6A75E]/40 pb-2">
                {note.title}
              </h3>

              <p className="text-[#3B1F16] leading-relaxed text-sm font-serif italic drop-cap">{note.excerpt}</p>

              {/* Curator signature */}
              <div className="mt-6 pt-4 border-t border-[#8B7355]/30">
                <p className="font-serif italic text-[#8B7355] text-right text-sm">— The Librarian</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
