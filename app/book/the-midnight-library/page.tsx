import { LibraryHeader } from "@/components/library-header"
import { TheArchives } from "@/components/the-archives"
import { CookieBanner } from "@/components/cookie-banner"
import { Star, ShoppingCart, Heart, Share2 } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function MidnightLibraryPage() {
  return (
    <>
      <LibraryHeader />
      <main className="min-h-screen bg-gradient-to-b from-[#3D2817] via-[#1E2D24] to-[#3D2817] pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Book Cover */}
            <div className="bg-[#1E2D24] border-4 border-[#C6A75E]/30 p-8">
              <div className="relative w-full aspect-[2/3]">
                <Image src="/midnight-library-cover.jpg" alt="The Midnight Library" fill className="object-cover" />
              </div>
            </div>

            {/* Book Details */}
            <div className="text-[#F4ECD8]">
              <span className="inline-block bg-[#C6A75E] text-[#3D2817] text-sm font-bold px-4 py-2 mb-4">
                NYT BESTSELLER
              </span>
              <h1 className="font-serif text-5xl mb-4 text-[#C6A75E]">The Midnight Library</h1>
              <p className="text-2xl text-[#C6A75E]/80 mb-6">by Matt Haig</p>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#C6A75E] text-[#C6A75E]" />
                  ))}
                </div>
                <span className="text-2xl font-bold">4.8</span>
                <span className="text-[#C6A75E]/60">(2.4M reviews)</span>
              </div>

              <p className="text-3xl font-bold text-[#C6A75E] mb-8">$14.99</p>

              <div className="flex gap-4 mb-8">
                <Button className="bg-[#C6A75E] text-[#3D2817] px-8 py-6 text-lg font-bold hover:bg-[#F4ECD8] flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#C6A75E] text-[#C6A75E] hover:bg-[#C6A75E] hover:text-[#3D2817] p-6 bg-transparent"
                >
                  <Heart className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#C6A75E] text-[#C6A75E] hover:bg-[#C6A75E] hover:text-[#3D2817] p-6 bg-transparent"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              <div className="bg-[#1E2D24] border-2 border-[#C6A75E]/30 p-6 mb-8">
                <h3 className="font-serif text-xl text-[#C6A75E] mb-3">About This Book</h3>
                <p className="text-[#F4ECD8]/90 leading-relaxed mb-4">
                  Between life and death there is a library, and within that library, the shelves go on forever. Every
                  book provides a chance to try another life you could have lived. To see how things would be if you had
                  made other choices... Would you have done anything different, if you had the chance to undo your
                  regrets?
                </p>
                <p className="text-[#F4ECD8]/90 leading-relaxed">
                  A dazzling novel about all the choices that go into a life well lived, from the internationally
                  bestselling author of Reasons to Stay Alive and How To Stop Time.
                </p>
              </div>

              <div className="bg-[#1E2D24] border-2 border-[#C6A75E]/30 p-6">
                <h3 className="font-serif text-xl text-[#C6A75E] mb-3">Book Details</h3>
                <div className="space-y-2 text-[#F4ECD8]/90">
                  <p>
                    <span className="text-[#C6A75E] font-bold">Publisher:</span> Viking Press
                  </p>
                  <p>
                    <span className="text-[#C6A75E] font-bold">Publication Date:</span> August 13, 2020
                  </p>
                  <p>
                    <span className="text-[#C6A75E] font-bold">Pages:</span> 304
                  </p>
                  <p>
                    <span className="text-[#C6A75E] font-bold">Language:</span> English
                  </p>
                  <p>
                    <span className="text-[#C6A75E] font-bold">ISBN:</span> 978-0525559474
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
