"use client"

import { Search, User, X } from "lucide-react"
import { useState, useMemo } from "react"

interface HomeScreenProps {
  onStoryClick: (storyId: string) => void
  onAuthorClick: (authorId: string) => void
}

const categories = ["All", "LGBTQ+", "Immigrant", "Disabled", "Rural"]

const allStories = [
  {
    id: "1",
    title: "The Garden My Mother Left Behind",
    author: "Maria Santos",
    authorId: "maria-santos",
    category: "Immigrant",
    excerpt: "The first thing my mother planted when we arrived was cilantro. She said it reminded her of home.",
    supportLink: "https://patreon.com/mariasantos",
  },
  {
    id: "2",
    title: "Red Dust and Quiet Mornings",
    author: "Adaeze Okonkwo",
    authorId: "adaeze-okonkwo",
    category: "Rural",
    excerpt: "In Nsukka, the roosters do not wait for dawn. They call when they feel like it, and the village listens.",
    supportLink: "https://ko-fi.com/adaezewrites",
  },
  {
    id: "3",
    title: "The Colors We Wore",
    author: "Alex Chen",
    authorId: "alex-chen",
    category: "LGBTQ+",
    excerpt: "My grandmother never asked why I cut my hair. She just handed me her old photographs and said, 'You remind me of your grandfather.'",
    supportLink: "https://buymeacoffee.com/alexchen",
  },
  {
    id: "4",
    title: "Wheels and Wings",
    author: "Destiny Carter",
    authorId: "destiny-carter",
    category: "Disabled",
    excerpt: "People always ask if I miss walking. I tell them I miss flying. The wheelchair was never the cage—the stairs were.",
    supportLink: "https://patreon.com/destinycarter",
  },
  {
    id: "5",
    title: "Between Two Tongues",
    author: "Priya Sharma",
    authorId: "priya-sharma",
    category: "Immigrant",
    excerpt: "My daughter speaks English in her dreams. I wonder if she visits me there, or if I am a stranger in her sleep.",
    supportLink: "https://priyasharma.com/support",
  },
  {
    id: "6",
    title: "The Last Train from Aba",
    author: "Chukwuemeka Eze",
    authorId: "chukwuemeka-eze",
    category: "Rural",
    excerpt: "When the train stopped running through our village, we did not notice at first. The silence crept in like a relative who overstays.",
    supportLink: "https://ko-fi.com/chukwuemeka",
  },
  {
    id: "7",
    title: "First Dance",
    author: "Jordan Williams",
    authorId: "jordan-williams",
    category: "LGBTQ+",
    excerpt: "She asked me to dance at my cousin's wedding. The aunties watched. My mother smiled. That was the moment I knew I was finally home.",
    supportLink: "https://patreon.com/jordanwrites",
  },
  {
    id: "8",
    title: "Hands That Speak",
    author: "Marcus Thompson",
    authorId: "marcus-thompson",
    category: "Disabled",
    excerpt: "Losing my hearing at nineteen felt like the end. Learning sign language at twenty felt like being born into a new world.",
    supportLink: "https://marcusthompson.com/support",
  },
  {
    id: "9",
    title: "The Well at Sunset",
    author: "Fatima Yusuf",
    authorId: "fatima-yusuf",
    category: "Rural",
    excerpt: "In our village in northern Nigeria, the well was where stories were traded like currency. Water was just the excuse to gather.",
    supportLink: "https://ko-fi.com/fatimayusuf",
  },
  {
    id: "10",
    title: "Cornfields and Constellations",
    author: "Emily Hartman",
    authorId: "emily-hartman",
    category: "Rural",
    excerpt: "Growing up in rural Nebraska, I learned to read the sky before I learned to read books. The stars were my first stories.",
    supportLink: "https://patreon.com/emilyhartman",
  },
]

export function HomeScreen({ onStoryClick, onAuthorClick }: HomeScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  const filteredStories = useMemo(() => {
    let stories = allStories

    // Filter by category
    if (selectedCategory !== "All") {
      stories = stories.filter((story) => story.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      stories = stories.filter(
        (story) =>
          story.title.toLowerCase().includes(query) ||
          story.author.toLowerCase().includes(query) ||
          story.category.toLowerCase().includes(query) ||
          story.excerpt.toLowerCase().includes(query)
      )
    }

    return stories
  }, [selectedCategory, searchQuery])

  const featuredStory = filteredStories[0]
  const otherStories = filteredStories.slice(1)

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    setSearchQuery("")
    setIsSearching(false)
  }

  return (
    <div className="min-h-screen bg-warm-cream pb-20">
      {/* Header */}
      <header className="bg-forest-green px-4 py-4 flex items-center justify-between">
        <h1 className="text-soft-white text-xl font-bold tracking-wide">VOICED</h1>
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
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setIsSearching(e.target.value.length > 0)
            }}
            placeholder="Search stories, authors, communities..."
            className="w-full bg-soft-white rounded-lg pl-10 pr-10 py-3 text-dark-charcoal placeholder:text-dark-charcoal/50 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("")
                setIsSearching(false)
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-dark-charcoal/10 rounded-full"
              aria-label="Clear search"
            >
              <X className="h-4 w-4 text-dark-charcoal/50" />
            </button>
          )}
        </div>
      </div>

      {/* Category Tags */}
      <div className="px-4 pb-4 overflow-x-auto">
        <div className="flex gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
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

      {/* Search Results Header */}
      {isSearching && (
        <div className="px-4 pb-2">
          <p className="text-dark-charcoal/70 text-sm">
            {filteredStories.length} result{filteredStories.length !== 1 ? "s" : ""} for &ldquo;{searchQuery}&rdquo;
          </p>
        </div>
      )}

      {/* No Results */}
      {filteredStories.length === 0 && (
        <div className="px-4 py-12 text-center">
          <p className="text-dark-charcoal/70 text-lg mb-2">No stories found</p>
          <p className="text-dark-charcoal/50 text-sm">
            Try a different search term or category
          </p>
        </div>
      )}

      {/* Featured Story Banner */}
      {featuredStory && (
        <div className="px-4 pb-4">
          <button
            onClick={() => onStoryClick(featuredStory.id)}
            className="w-full bg-forest-green rounded-xl p-6 text-left"
          >
            <span className="inline-block bg-gold text-soft-white text-xs font-medium px-3 py-1 rounded-full mb-3">
              {featuredStory.category}
            </span>
            <h2 className="text-warm-cream text-2xl font-bold mb-2 text-balance">
              {featuredStory.title}
            </h2>
            <p className="text-warm-cream/80 text-sm mb-3 line-clamp-2">
              {featuredStory.excerpt}
            </p>
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
              </span>
            </p>
          </button>
        </div>
      )}

      {/* Story Cards */}
      <div className="px-4 space-y-3">
        {otherStories.map((story) => (
          <button
            key={story.id}
            onClick={() => onStoryClick(story.id)}
            className="w-full bg-soft-white rounded-xl p-4 border border-forest-green/30 text-left hover:border-forest-green transition-colors"
          >
            <h3 className="text-dark-charcoal font-bold text-lg mb-1">
              {story.title}
            </h3>
            <p className="text-dark-charcoal/70 text-sm mb-2 line-clamp-2">
              {story.excerpt}
            </p>
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

export { allStories }
