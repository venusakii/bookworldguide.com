"use client"

import { BookMarked, Coffee, Users, Headphones } from "lucide-react"
import Image from "next/image"

export function ReadingRooms() {
  const rooms = [
    {
      icon: BookMarked,
      image: "/scholars-nook-reading-room.jpg",
      title: "The Scholar's Nook",
      description:
        "Dive deep into academic literature and research papers. Perfect for those seeking knowledge and intellectual growth.",
      books: "12,450+ titles",
      category: "Academic & Research",
    },
    {
      icon: Coffee,
      image: "/cozy-corner-reading-space.jpg",
      title: "The Cozy Corner",
      description:
        "Curl up with contemporary fiction, romance, and feel-good stories. Your escape from everyday life awaits.",
      books: "8,760+ titles",
      category: "Fiction & Romance",
    },
    {
      icon: Users,
      image: "/discussion-hall-book-club.jpg",
      title: "The Discussion Hall",
      description:
        "Join book clubs, engage in literary debates, and share your thoughts with fellow readers worldwide.",
      books: "24 active clubs",
      category: "Community",
    },
    {
      icon: Headphones,
      image: "/audio-chamber-headphones.jpg",
      title: "The Audio Chamber",
      description: "Immerse yourself in narrated stories and audiobooks. Listen while you commute, exercise, or relax.",
      books: "5,200+ audiobooks",
      category: "Audiobooks",
    },
  ]

  return (
    <section className="py-20 px-6 bg-[#1E2D24]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-[#F4ECD8] mb-4">Explore Our Reading Rooms</h2>
          <p className="text-[#C6A75E]/80 text-lg max-w-2xl mx-auto">
            Each room is carefully curated to match your reading mood and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room, index) => {
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#3D2817] to-[#2A1810] border-2 border-[#C6A75E]/30 p-8 hover:border-[#C6A75E] transition-all duration-300 hover:shadow-2xl hover:shadow-[#C6A75E]/30 group"
              >
                <div className="flex items-start gap-6">
                  <div className="relative w-24 h-24 border-2 border-[#C6A75E]/30 group-hover:border-[#C6A75E] transition-all overflow-hidden flex-shrink-0">
                    <Image
                      src={room.image || "/placeholder.svg"}
                      alt={room.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="mb-3">
                      <h3 className="font-serif text-2xl text-[#F4ECD8] mb-2 group-hover:text-[#C6A75E] transition-colors">
                        {room.title}
                      </h3>
                      <span className="inline-block bg-[#C6A75E]/20 text-[#C6A75E] text-xs font-bold px-3 py-1 border border-[#C6A75E]/30">
                        {room.category}
                      </span>
                    </div>

                    <p className="text-[#F4ECD8]/80 leading-relaxed mb-4">{room.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-[#C6A75E] font-semibold">{room.books}</span>
                      
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
