"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-mahogany/95 backdrop-blur-sm border-t-2 border-gold/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3 text-parchment">
          <span className="text-2xl">🍪</span>
          <p className="text-sm md:text-base font-serif">
            We use cookies to protect your data like we protect your baby's.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={acceptCookies}
            className="bg-gold hover:bg-gold/90 text-mahogany font-semibold px-6 py-2 transition-all"
          >
            Accept
          </Button>
          <button
            onClick={acceptCookies}
            className="text-parchment/70 hover:text-parchment transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
