"use client"

import { Search, User } from "lucide-react"
import { useState } from "react"

interface HomeScreenProps {
  onStoryClick: (storyId: string) => void
  onAuthorClick: (authorId: string) => void
}

const categories = ["All", "LGBTQ+", "Immigrant", "Disabled", "Rural", "More"]

const featuredStory = {
  id: "1",
  title: "The Garden My Mother Left Behind",
  author: "Maria Santos",
  authorId: "maria-santos",
  category: "Immigrant Stories",
}

const stories = [
  {
    id: "2",
    title: "Finding Home in the Quiet",
    author: "James Whitfield",
    authorId: "james-whitfield",
    category: "Rural",
  },
  {
    id: "3",
    title: "The Colors We Wore",
    author: "Alex Chen",
    authorId: "alex-chen",
    category: "LGBTQ+",
  },
  {
    id: "4",
    title: "Wheels and Wings",
    author: "Sarah Mitchell",
    authorId: "sarah-mitchell",
    category: "Disabled",
  },
]

export function HomeScreen({ onStoryClick, onAuthorClick }: HomeScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  return (
    <div className="min-h-screen bg-warm-cream pb-20">
      {/* Header */}
      <header className="bg-forest-green px-4 py-4 flex items-center justify-between">
        <h1 className="text-soft-white text-xl font-bold">Voiced</h1>
        <button className="text-soft-white p-2" aria-label="Profile">
          <User className="h-6 w-6" />
        </button>
      </header>

      {/* Search Bar */}
      <div className="px-4 py-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-dark-charcoal/50" />
          <input
            type="text"
            placeholder="Search stories, authors, communities..."
            className="w-full bg-soft-white rounded-lg pl-10 pr-4 py-3 text-dark-charcoal placeholder:text-dark-charcoal/50 focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>
      </div>

      {/* Category Tags */}
      <div className="px-4 pb-4 overflow-x-auto">
        <div className="flex gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? "bg-gold text-soft-white"
                  : "bg-forest-green text-soft-white hover:bg-forest-green/90"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Story Banner */}
      <div className="px-4 pb-4">
        <button
          onClick={() => onStoryClick(featuredStory.id)}
          className="w-full bg-forest-green rounded-xl p-6 text-left"
        >
          <h2 className="text-warm-cream text-2xl font-bold mb-2 text-balance">
            {featuredStory.title}
          </h2>
          <p className="text-warm-cream/90 text-sm">
            By{" "}
            <span
              onClick={(e) => {
                e.stopPropagation()
                onAuthorClick(featuredStory.authorId)
              }}
              className="underline hover:text-gold cursor-pointer"
            >
              {featuredStory.author}
            </span>{" "}
            | {featuredStory.category}
          </p>
        </button>
      </div>

      {/* Story Cards */}
      <div className="px-4 space-y-3">
        {stories.map((story) => (
          <button
            key={story.id}
            onClick={() => onStoryClick(story.id)}
            className="w-full bg-soft-white rounded-xl p-4 border border-forest-green/30 text-left hover:border-forest-green transition-colors"
          >
            <h3 className="text-dark-charcoal font-bold text-lg mb-1">
              {story.title}
            </h3>
            <p className="text-dark-charcoal/80 text-sm mb-2">
              By{" "}
              <span
                onClick={(e) => {
                  e.stopPropagation()
                  onAuthorClick(story.authorId)
                }}
                className="text-forest-green font-medium hover:underline cursor-pointer"
              >
                {story.author}
              </span>
            </p>
            <span className="inline-block bg-gold text-soft-white text-xs font-medium px-3 py-1 rounded-full">
              {story.category}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
