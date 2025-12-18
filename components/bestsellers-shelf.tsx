"use client"

import { Star, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function BestsellersShelf() {
  const bestsellers = [
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      rating: 4.8,
      reviews: "2.4M",
      price: "$14.99",
      badge: "NYT Bestseller",
      cover: "/midnight-library-cover.jpg",
      slug: "the-midnight-library",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      rating: 4.9,
      reviews: "3.1M",
      price: "$16.99",
      badge: "Best of Year",
      cover: "/atomic-habits-cover.jpg",
      slug: "atomic-habits",
    },
    {
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      rating: 4.7,
      reviews: "1.8M",
      price: "$13.99",
      badge: "Editor's Choice",
      cover: "/evelyn-hugo-cover.jpg",
      slug: "the-seven-husbands-of-evelyn-hugo",
    },
    {
      title: "Project Hail Mary",
      author: "Andy Weir",
      rating: 4.9,
      reviews: "980K",
      price: "$15.99",
      badge: "Trending",
      cover: "/hail-mary-cover.jpg",
      slug: "project-hail-mary",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#3D2817] to-[#1E2D24]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-[#C6A75E]" />
            <h2 className="font-serif text-4xl text-[#F4ECD8]">Bestsellers Shelf</h2>
            <TrendingUp className="w-8 h-8 text-[#C6A75E]" />
          </div>
          <p className="text-[#C6A75E]/80 text-lg">Most loved books by our community</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((book, index) => (
            <div
              key={index}
              className="bg-[#1E2D24] border-2 border-[#C6A75E]/20 p-6 hover:border-[#C6A75E] transition-all duration-300 hover:shadow-xl hover:shadow-[#C6A75E]/20 hover:-translate-y-2 group"
            >
              <div className="mb-4">
                <div className="w-full h-64 mb-4 relative overflow-hidden bg-[#1E2D24]">
                  <Image
                    src={book.cover || "/placeholder.svg"}
                    alt={book.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="inline-block bg-[#C6A75E] text-[#3D2817] text-xs font-bold px-3 py-1 mb-3">
                  {book.badge}
                </span>
              </div>

              <h3 className="font-serif text-xl text-[#F4ECD8] mb-2 group-hover:text-[#C6A75E] transition-colors">
                {book.title}
              </h3>
              <p className="text-[#C6A75E]/70 mb-4">by {book.author}</p>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C6A75E] text-[#C6A75E]" />
                  ))}
                </div>
                <span className="text-[#F4ECD8] font-bold">{book.rating}</span>
                <span className="text-[#C6A75E]/60 text-sm">({book.reviews})</span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#C6A75E]/20">
                <Link href={`/book/${book.slug}`}>
                  <button className="bg-[#C6A75E] text-[#3D2817] px-4 py-2 text-sm font-bold hover:bg-[#F4ECD8] transition-colors">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
