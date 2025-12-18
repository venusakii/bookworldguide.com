"use client"

import { Feather, Quote } from "lucide-react"

export function AuthorSpotlight() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#1E2D24] to-[#3D2817]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Feather className="w-8 h-8 text-[#C6A75E]" />
            <h2 className="font-serif text-4xl text-[#F4ECD8]">Author Spotlight</h2>
          </div>
          <p className="text-[#C6A75E]/80 text-lg">Featured voices shaping literature today</p>
        </div>

        <div className="bg-[#1E2D24] border-2 border-[#C6A75E]/30 p-12 hover:border-[#C6A75E] transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#8B4513] to-[#3D2817] border-4 border-[#C6A75E]/20 overflow-hidden">
                <img
                  src="/vintage-writing-desk-quill-books.jpg"
                  alt="Vintage writing desk with books"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <span className="inline-block bg-[#C6A75E] text-[#3D2817] text-sm font-bold px-4 py-2 mb-4">
                THIS MONTH'S FEATURED AUTHOR
              </span>

              <h3 className="font-serif text-3xl text-[#F4ECD8] mb-3">Chimamanda Ngozi Adichie</h3>
              <p className="text-[#C6A75E]/70 mb-6 italic">Award-winning Nigerian author</p>

              <div className="mb-6 pl-6 border-l-4 border-[#C6A75E]/30">
                <Quote className="w-8 h-8 text-[#C6A75E]/40 mb-3" />
                <p className="text-[#F4ECD8]/90 text-lg leading-relaxed mb-4">
                  "The single story creates stereotypes, and the problem with stereotypes is not that they are untrue,
                  but that they are incomplete."
                </p>
                <p className="text-[#C6A75E]/60 text-sm">— from her TED Talk</p>
              </div>

              <div className="mb-6">
                <h4 className="text-[#C6A75E] font-bold mb-3">Notable Works:</h4>
                <ul className="space-y-2 text-[#F4ECD8]/80">
                  <li>• Half of a Yellow Sun (2006)</li>
                  <li>• Americanah (2013)</li>
                  <li>• We Should All Be Feminists (2014)</li>
                </ul>
              </div>

              <button
                onClick={() => (window.location.href = "/author/chimamanda-ngozi-adichie")}
                className="bg-[#C6A75E] text-[#3D2817] px-6 py-3 font-bold hover:bg-[#F4ECD8] transition-colors cursor-pointer"
              >
                Explore Her Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
