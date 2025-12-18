import { LibraryHeader } from "@/components/library-header"
import { TheArchives } from "@/components/the-archives"
import { CookieBanner } from "@/components/cookie-banner"
import { Star, BookOpen } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AtomicHabitsPage() {
  return (
    <>
      <LibraryHeader />
      <main className="min-h-screen bg-gradient-to-b from-[#3D2817] via-[#1E2D24] to-[#3D2817] pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Book Cover */}
            <div className="bg-[#1E2D24] border-4 border-[#C6A75E]/30 p-8">
              <div className="relative w-full aspect-[2/3]">
                <Image src="/atomic-habits-cover.jpg" alt="Atomic Habits" fill className="object-cover" />
              </div>
            </div>

            {/* Book Details */}
            <div className="text-[#F4ECD8]">
              <span className="inline-block bg-[#C6A75E] text-[#3D2817] text-sm font-bold px-4 py-2 mb-4">
                BEST OF YEAR
              </span>
              <h1 className="font-serif text-5xl mb-4 text-[#C6A75E]">Atomic Habits</h1>
              <p className="text-2xl text-[#C6A75E]/80 mb-6">by James Clear</p>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#C6A75E] text-[#C6A75E]" />
                  ))}
                </div>
                <span className="text-2xl font-bold">4.9</span>
                <span className="text-[#C6A75E]/60">(3.1M reviews)</span>
              </div>

              <div className="flex gap-4 mb-8">
                <Button
                  asChild
                  className="bg-[#C6A75E] text-[#3D2817] px-8 py-6 text-lg font-bold hover:bg-[#F4ECD8] flex items-center gap-2"
                >
                  <a
                    href="https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BookOpen className="w-5 h-5" />
                    Read More
                  </a>
                </Button>
              </div>

              <div className="bg-[#1E2D24] border-2 border-[#C6A75E]/30 p-6 mb-8">
                <h3 className="font-serif text-xl text-[#C6A75E] mb-3">About This Book</h3>
                <p className="text-[#F4ECD8]/90 leading-relaxed mb-4">
                  No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear,
                  one of the world's leading experts on habit formation, reveals practical strategies that will teach
                  you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to
                  remarkable results.
                </p>
                <p className="text-[#F4ECD8]/90 leading-relaxed">
                  If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad
                  habits repeat themselves again and again not because you don't want to change, but because you have
                  the wrong system for change.
                </p>
              </div>

              <div className="bg-[#1E2D24] border-2 border-[#C6A75E]/30 p-6">
                <h3 className="font-serif text-xl text-[#C6A75E] mb-3">Book Details</h3>
                <div className="space-y-2 text-[#F4ECD8]/90">
                  <p>
                    <span className="text-[#C6A75E] font-bold">Publisher:</span> Avery
                  </p>
                  <p>
                    <span className="text-[#C6A75E] font-bold">Publication Date:</span> October 16, 2018
                  </p>
                  <p>
                    <span className="text-[#C6A75E] font-bold">Pages:</span> 320
                  </p>
                  <p>
                    <span className="text-[#C6A75E] font-bold">Language:</span> English
                  </p>
                  <p>
                    <span className="text-[#C6A75E] font-bold">ISBN:</span> 978-0735211292
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <TheArchives />
      <CookieBanner />
    </>
  )
}
