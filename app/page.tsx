import { GrandHall } from "@/components/grand-hall"
import { GenreStaircase } from "@/components/genre-staircase"
import { CuratorsDesk } from "@/components/curators-desk"
import { BestsellersShelf } from "@/components/bestsellers-shelf"
import { ReadingRooms } from "@/components/reading-rooms"
import { AuthorSpotlight } from "@/components/author-spotlight"
import { SpecialCollection } from "@/components/special-collection"
import { TheArchives } from "@/components/the-archives"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1E2D24]">
      <GrandHall />
      <CuratorsDesk />
      <ReadingRooms />
      <AuthorSpotlight />
      <SpecialCollection />
      <BestsellersShelf />
      <GenreStaircase />
      <TheArchives />
    </main>
  )
}
