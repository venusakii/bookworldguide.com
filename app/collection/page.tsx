import { LibraryHeader } from "@/components/library-header"
import { SpecialCollection } from "@/components/special-collection"
import { AuthorSpotlight } from "@/components/author-spotlight"
import { TheArchives } from "@/components/the-archives"
import { CookieBanner } from "@/components/cookie-banner"

export default function CollectionPage() {
  return (
    <>
      <LibraryHeader />
      <main className="min-h-screen bg-gradient-to-b from-mahogany via-forest to-mahogany pt-20">
        <SpecialCollection />
        <AuthorSpotlight />
      </main>
      <TheArchives />
      <CookieBanner />
    </>
  )
}
