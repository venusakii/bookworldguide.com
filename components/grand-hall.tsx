"use client"

import { Button } from "@/components/ui/button"
import { BookOpen, Clock } from "lucide-react"
import { useEffect, useRef } from "react"
import Link from "next/link"

export function GrandHall() {
  const dustContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!dustContainerRef.current) return

    // Create floating dust particles
    for (let i = 0; i < 30; i++) {
      const dust = document.createElement("div")
      dust.className = "dust-particle"
      dust.style.left = `${Math.random() * 100}%`
      dust.style.top = `${Math.random() * 100}%`
      dust.style.animationDelay = `${Math.random() * 8}s`
      dust.style.animationDuration = `${6 + Math.random() * 4}s`
      dustContainerRef.current.appendChild(dust)
    }
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#3B1F16] via-[#5C3A2E] to-[#3B1F16]">
      <div className="absolute inset-0 opacity-40">
        <img src="/warm-brown-library-wooden-shelves.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Dust particles */}
      <div ref={dustContainerRef} className="absolute inset-0 pointer-events-none" />

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <div className="mb-8">
          <div className="inline-block w-24 h-24 mb-6"></div>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-[#EFE6D8] mb-6 text-balance leading-tight">
          Enter a World Where
          <br />
          Every Book Has a Place
        </h1>

        <p className="text-lg md:text-xl text-[#C6A75E] mb-4 max-w-2xl mx-auto leading-relaxed">
          Carefully curated books across genres, preserved with reverence.
        </p>

        <p className="font-serif text-2xl md:text-3xl text-[#8B7355] italic mb-12">
          "A Library Is Not Collected. It Is Inherited."
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToContent}
            className="bg-[#C6A75E] hover:bg-[#B8985A] text-[#0F0F0F] font-serif text-lg px-8 py-6 border-2 border-[#8B7355] shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Enter the Library
          </Button>

          <Link href="/browse-by-era">
            
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#3B1F16] to-transparent" />
    </section>
  )
}
