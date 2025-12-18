import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    rating: 4.5,
    cover: "/great-gatsby-book-cover.png",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    rating: 4.8,
    cover: "/to-kill-a-mockingbird-cover.png",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    rating: 4.7,
    cover: "/1984-book-cover.png",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    rating: 4.6,
    cover: "/pride-and-prejudice-cover.png",
  },
]

export function FeaturedBooks() {
  return (
    <section className="py-20 bg-secondary/20" id="discover">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Featured Selections</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked masterpieces from our literary curators
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <Card
              key={book.title}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={book.cover || "/placeholder.svg"}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <Badge variant="secondary" className="mb-2">
                  {book.genre}
                </Badge>
                <h3 className="font-serif text-lg font-bold mb-1 text-balance">{book.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{book.author}</p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(book.rating) ? "fill-primary text-primary" : "text-muted"}`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">{book.rating}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
