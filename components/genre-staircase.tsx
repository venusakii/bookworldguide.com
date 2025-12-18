"use client"

import { BookOpen, Sword, Brain, Sparkles, Search, Globe, Atom } from "lucide-react"
import { useState } from "react"

const genres = [
  { icon: BookOpen, name: "Classic Literature", color: "#8B4513" },
  { icon: Sword, name: "Historical Fiction", color: "#6B4423" },
  { icon: Brain, name: "Philosophy & Thought", color: "#5D4E37" },
  { icon: Sparkles, name: "Fantasy & Mythology", color: "#7C5E3D" },
  { icon: Search, name: "Detective & Mystery", color: "#4A3728" },
  { icon: Globe, name: "World Literature", color: "#8B7355" },
  { icon: Atom, name: "Science & Knowledge", color: "#6B5744" },
]

export function GenreStaircase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    null
  )
}
