import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookMarked, Heart, TrendingUp, Clock } from "lucide-react"

const collections = [
  {
    title: "Timeless Classics",
    description: "Enduring works that have shaped literature",
    icon: BookMarked,
    count: 324,
  },
  {
    title: "Reader Favorites",
    description: "Most loved by our community",
    icon: Heart,
    count: 567,
  },
  {
    title: "Trending Now",
    description: "Currently popular selections",
    icon: TrendingUp,
    count: 89,
  },
  {
    title: "Quick Reads",
    description: "Captivating stories under 300 pages",
    icon: Clock,
    count: 234,
  },
]

export function Collections() {
  return (
    <section className="py-20" id="collections">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Curated Collections</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our thoughtfully organized literary collections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => {
            const Icon = collection.icon
            return (
              <Card
                key={collection.title}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border group cursor-pointer"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">{collection.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{collection.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{collection.count} books</span>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Explore →
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
