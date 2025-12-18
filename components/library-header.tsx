"use client"

import { BookOpen } from "lucide-react"
import Link from "next/link"

export function LibraryHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-mahogany/95 backdrop-blur-sm border-b border-gold/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <BookOpen className="w-8 h-8 text-gold" />
            <div>
              <h1 className="font-sans text-2xl font-bold text-parchment">BookWorldGuide</h1>
              <p className="text-xs text-gold/80">The Living Library</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/genres" className="text-parchment/80 hover:text-gold transition-colors text-sm font-medium">
              Genres
            </Link>
            <Link href="/curator" className="text-parchment/80 hover:text-gold transition-colors text-sm font-medium">
              Curator's Desk
            </Link>
            <Link
              href="/collection"
              className="text-parchment/80 hover:text-gold transition-colors text-sm font-medium"
            >
              Special Collection
            </Link>
          </nav>

          {/* Search Button */}
        </div>
      </div>
    </header>
  )
}
