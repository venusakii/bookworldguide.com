import { LibraryHeader } from "@/components/library-header"
import { TheArchives } from "@/components/the-archives"
import { CookieBanner } from "@/components/cookie-banner"
import { FileText, AlertCircle, Scale, UserCheck } from "lucide-react"

export default function TermsOfUsePage() {
  return (
    <>
      <LibraryHeader />
      <main className="min-h-screen bg-gradient-to-b from-[#3D2817] to-[#1E2D24] pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <FileText className="w-16 h-16 text-[#C6A75E] mx-auto mb-4" />
            <h1 className="font-serif text-5xl md:text-6xl text-[#C6A75E] mb-4">Terms of Use</h1>
            <p className="text-[#8B7355] text-lg">Guidelines for using our library</p>
            <p className="text-[#8B7355]/70 text-sm mt-2">Last updated: January 2025</p>
          </div>

          <div className="bg-[#1E2D24] border-2 border-[#C6A75E]/30 p-8 md:p-12 space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-[#C6A75E]" />
                <h2 className="font-serif text-2xl text-[#C6A75E]">Acceptance of Terms</h2>
              </div>
              <p className="text-[#F4ECD8] leading-relaxed">
                By accessing and using BookWorldGuide, you accept and agree to be bound by the terms and provisions of
                this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-[#C6A75E]" />
                <h2 className="font-serif text-2xl text-[#C6A75E]">Use License</h2>
              </div>
              <p className="text-[#F4ECD8] leading-relaxed mb-4">
                Permission is granted to temporarily access the materials on BookWorldGuide for personal, non-commercial
                transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
              <p className="text-[#8B7355] leading-relaxed mb-4">Under this license, you may not:</p>
              <ul className="list-disc list-inside text-[#8B7355] space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
                <li>Transfer the materials to another person or mirror on another server</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#C6A75E] mb-4">User Account</h2>
              <p className="text-[#F4ECD8] leading-relaxed mb-4">
                When you create an account with us, you must provide accurate, complete, and current information.
                Failure to do so constitutes a breach of these Terms, which may result in immediate termination of your
                account.
              </p>
              <p className="text-[#8B7355] leading-relaxed">
                You are responsible for safeguarding the password and for all activities that occur under your account.
                You agree not to disclose your password to any third party.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#C6A75E] mb-4">Affiliate Disclosure</h2>
              <p className="text-[#F4ECD8] leading-relaxed mb-4">
                BookWorldGuide participates in the Amazon Services LLC Associates Program, an affiliate advertising
                program designed to provide a means for sites to earn advertising fees by advertising and linking to
                Amazon.
              </p>
              <p className="text-[#8B7355] leading-relaxed">
                When you click on book links and make purchases through our site, we may earn a commission at no
                additional cost to you. This helps support our mission of connecting readers with great books.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#C6A75E] mb-4">Content Accuracy</h2>
              <p className="text-[#F4ECD8] leading-relaxed mb-4">
                The materials on BookWorldGuide are provided on an 'as is' basis. We make no warranties, expressed or
                implied, and hereby disclaim all warranties including, without limitation, implied warranties of
                merchantability or fitness for any particular purpose.
              </p>
              <p className="text-[#8B7355] leading-relaxed">
                Book descriptions, reviews, and recommendations are provided for informational purposes only and do not
                constitute professional advice.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-[#C6A75E]" />
                <h2 className="font-serif text-2xl text-[#C6A75E]">Limitations</h2>
              </div>
              <p className="text-[#F4ECD8] leading-relaxed">
                In no event shall BookWorldGuide or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
                or inability to use the materials on our website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#C6A75E] mb-4">Revisions</h2>
              <p className="text-[#F4ECD8] leading-relaxed">
                We may revise these terms of service at any time without notice. By using this website, you are agreeing
                to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#C6A75E] mb-4">Contact Information</h2>
              <p className="text-[#F4ECD8] leading-relaxed">
                If you have any questions about these Terms, please contact us at{" "}
                <a href="mailto:legal@bookworldguide.com" className="text-[#C6A75E] hover:underline">
                  legal@bookworldguide.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <TheArchives />
      <CookieBanner />
    </>
  )
}
