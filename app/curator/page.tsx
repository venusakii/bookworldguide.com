import { LibraryHeader } from "@/components/library-header"
import { CuratorsDesk } from "@/components/curators-desk"
import { AuthorSpotlight } from "@/components/author-spotlight"
import { ReadingRooms } from "@/components/reading-rooms"
import { TheArchives } from "@/components/the-archives"
import { CookieBanner } from "@/components/cookie-banner"

export default function CuratorPage() {
  return (
    <>
      <LibraryHeader />
      <main className="min-h-screen bg-gradient-to-b from-mahogany via-forest to-mahogany pt-20">
        <CuratorsDesk />
        <AuthorSpotlight />
        <ReadingRooms />
      </main>
      <TheArchives />
      <CookieBanner />
    </>
  )
}
