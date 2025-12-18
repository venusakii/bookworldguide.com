import { LibraryHeader } from "@/components/library-header"
import { TheArchives } from "@/components/the-archives"
import { CookieBanner } from "@/components/cookie-banner"
import { Shield, Lock, Eye, Database } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <>
      <LibraryHeader />
      <main className="min-h-screen bg-gradient-to-b from-[#3D2817] to-[#1E2D24] pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-[#C6A75E] mx-auto mb-4" />
            <h1 className="font-serif text-5xl md:text-6xl text-[#C6A75E] mb-4">Privacy Policy</h1>
            <p className="text-[#8B7355] text-lg">How we protect your information</p>
            <p className="text-[#8B7355]/70 text-sm mt-2">Last updated: January 2025</p>
          </div>

          <div className="bg-[#1E2D24] border-2 border-[#C6A75E]/30 p-8 md:p-12 space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-[#C6A75E]" />
                <h2 className="font-serif text-2xl text-[#C6A75E]">Information We Collect</h2>
              </div>
              <p className="text-[#F4ECD8] leading-relaxed mb-4">
                At BookWorldGuide, we collect information that you provide directly to us, including your name, email
                address, and reading preferences. We also collect information about your interactions with our site,
                such as books you view, search queries, and browsing patterns.
              </p>
              <ul className="list-disc list-inside text-[#8B7355] space-y-2 ml-4">
                <li>Account information (name, email, password)</li>
                <li>Reading preferences and book ratings</li>
                <li>Purchase history and wishlist items</li>
                <li>Device information and browser type</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-[#C6A75E]" />
                <h2 className="font-serif text-2xl text-[#C6A75E]">How We Use Your Information</h2>
              </div>
              <p className="text-[#F4ECD8] leading-relaxed mb-4">
                We use the information we collect to provide, maintain, and improve our services, including
                personalizing your book recommendations and enhancing your reading experience.
              </p>
              <ul className="list-disc list-inside text-[#8B7355] space-y-2 ml-4">
                <li>Personalize book recommendations based on your preferences</li>
                <li>Process transactions and send order confirmations</li>
                <li>Send newsletters and updates about new books (with your consent)</li>
                <li>Improve our website functionality and user experience</li>
                <li>Respond to customer service requests and support needs</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-[#C6A75E]" />
                <h2 className="font-serif text-2xl text-[#C6A75E]">Information Sharing</h2>
              </div>
              <p className="text-[#F4ECD8] leading-relaxed mb-4">
                We do not sell your personal information to third parties. We may share your information with service
                providers who assist us in operating our website, conducting our business, or serving our users, as long
                as those parties agree to keep this information confidential.
              </p>
              <p className="text-[#8B7355] leading-relaxed">
                As an Amazon Associate, when you click on book links and make purchases, Amazon may collect information
                according to their own privacy policy. We receive a small commission from qualifying purchases.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#C6A75E] mb-4">Cookies</h2>
              <p className="text-[#F4ECD8] leading-relaxed mb-4">
                We use cookies to enhance your browsing experience, analyze site traffic, and understand where our
                visitors are coming from. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#C6A75E] mb-4">Your Rights</h2>
              <p className="text-[#F4ECD8] leading-relaxed mb-4">
                You have the right to access, update, or delete your personal information at any time. You may also opt
                out of marketing communications or request a copy of the data we hold about you.
              </p>
              <ul className="list-disc list-inside text-[#8B7355] space-y-2 ml-4">
                <li>Access and review your personal data</li>
                <li>Request corrections to inaccurate information</li>
                <li>Delete your account and associated data</li>
                <li>Opt out of marketing emails</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#C6A75E] mb-4">Contact Us</h2>
              <p className="text-[#F4ECD8] leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@bookworldguide.com" className="text-[#C6A75E] hover:underline">
                  privacy@bookworldguide.com
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
