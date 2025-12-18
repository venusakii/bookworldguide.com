import { LibraryHeader } from "@/components/library-header"
import { GenreStaircase } from "@/components/genre-staircase"
import { BestsellersShelf } from "@/components/bestsellers-shelf"
import { TheArchives } from "@/components/the-archives"
import { CookieBanner } from "@/components/cookie-banner"

export default function GenresPage() {
  return (
    <>
      <LibraryHeader />
      <main className="min-h-screen bg-gradient-to-b from-mahogany via-forest to-mahogany pt-20">
        <GenreStaircase />
        <BestsellersShelf />
      </main>
      <TheArchives />
      <CookieBanner />
    </>
  )
}
