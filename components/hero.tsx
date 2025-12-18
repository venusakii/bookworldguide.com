import { Button } from "@/components/ui/button"
import { BookOpen, Library, Compass } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20">
      <div className="absolute inset-0 bg-[url('/vintage-library-interior-dark-bookshelves.jpg')] bg-cover bg-center opacity-5" />

      <div className="container mx-auto px-4 py-24 md:py-32 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Library className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">Curated Literary Experience</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-bold text-balance mb-6 leading-tight">
            Your Journey Through the World of Books
          </h1>

          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Discover timeless classics and contemporary masterpieces in our carefully curated collection. Let us guide
            you to your next unforgettable read.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="w-full sm:w-auto">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Collection
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              <Compass className="mr-2 h-5 w-5" />
              Get Recommendations
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-primary" />
              </div>
              <span>10,000+ Books</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Library className="h-4 w-4 text-primary" />
              </div>
              <span>500+ Authors</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Compass className="h-4 w-4 text-primary" />
              </div>
              <span>Personalized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
