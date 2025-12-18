import { BookOpen, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="font-serif text-2xl font-bold text-foreground">BookWorldGuide</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#discover" className="text-muted-foreground hover:text-foreground transition-colors">
            Discover
          </a>
          <a href="#collections" className="text-muted-foreground hover:text-foreground transition-colors">
            Collections
          </a>
          <a href="#authors" className="text-muted-foreground hover:text-foreground transition-colors">
            Authors
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button className="hidden md:flex">Join Library</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
