const footerSections = [
  {
    title: "The Library Wings",
    links: ["Classic Literature", "Historical Fiction", "Philosophy & Thought", "Fantasy & Mythology"],
  },
  {
    title: "The Curator",
    links: ["About Our Collection", "Selection Process", "New Acquisitions", "Curator's Notes"],
  },
  {
    title: "Preservation & Care",
    links: ["Conservation Methods", "Digital Archive", "Reading Guidelines", "Member Benefits"],
  },
]

export function TheArchives() {
  return (
    <footer className="bg-[#3B1F16] border-t-4 border-[#C6A75E]">
      {/* Wood texture overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(198, 167, 94, 0.1) 2px, rgba(198, 167, 94, 0.1) 4px)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Top section */}
        

        {/* Contact the Librarian */}

        {/* Bottom bar */}
        <div className="border-t border-[#C6A75E]/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[#8B7355] text-sm">© 2025 BookWorldGuide.com — Where books live beyond time.</p>
            <p className="text-[#8B7355]/70 text-xs italic">
              As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="text-[#8B7355] hover:text-[#C6A75E] transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="/terms-of-use" className="text-[#8B7355] hover:text-[#C6A75E] transition-colors text-sm">
              Terms of Use
            </a>
            <a href="/preservation-standards" className="text-[#8B7355] hover:text-[#C6A75E] transition-colors text-sm">
              Preservation Standards
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
