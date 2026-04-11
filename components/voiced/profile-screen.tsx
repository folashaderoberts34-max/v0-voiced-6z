"use client"

import { ArrowLeft } from "lucide-react"

interface ProfileScreenProps {
  onBack: () => void
  onStoryClick: (storyId: string) => void
}

const authorStories = [
  {
    id: "1",
    title: "The Garden My Mother Left Behind",
    category: "Immigrant Stories",
  },
  {
    id: "5",
    title: "Letters to My Younger Self",
    category: "Immigrant Stories",
  },
]

export function ProfileScreen({ onBack, onStoryClick }: ProfileScreenProps) {
  return (
    <div className="min-h-screen bg-warm-cream pb-20">
      {/* Header Banner */}
      <div className="relative">
        <div className="bg-forest-green h-32">
          <button
            onClick={onBack}
            className="absolute top-4 left-4 text-soft-white p-2 hover:bg-soft-white/10 rounded-full transition-colors z-10"
            aria-label="Go back"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
        </div>

        {/* Profile Photo */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-12">
          <div className="w-24 h-24 rounded-full bg-warm-cream border-4 border-gold flex items-center justify-center">
            <span className="text-forest-green font-bold text-2xl">MS</span>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-16 px-4 text-center">
        <h1 className="text-dark-charcoal text-2xl font-bold mb-2">
          Maria Santos
        </h1>
        <span className="inline-block bg-gold text-soft-white text-sm font-medium px-4 py-1 rounded-full mb-4">
          Immigrant Stories
        </span>
        <p className="text-dark-charcoal italic mb-6 max-w-sm mx-auto">
          Maria is a first generation writer from El Salvador, now living in
          Nashville. She writes about memory, migration, and belonging.
        </p>

        <button className="bg-forest-green text-soft-white font-bold px-8 py-3 rounded-full hover:bg-forest-green/90 transition-colors mb-6">
          Follow
        </button>

        {/* Stats */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="text-center">
            <p className="text-forest-green font-bold text-lg">1.2k</p>
            <p className="text-dark-charcoal text-sm">Readers</p>
          </div>
          <div className="text-center">
            <p className="text-forest-green font-bold text-lg">340</p>
            <p className="text-dark-charcoal text-sm">Followers</p>
          </div>
        </div>
      </div>

      {/* Published Stories */}
      <div className="px-4">
        <h2 className="text-dark-charcoal font-bold text-lg mb-4">
          Published Stories
        </h2>
        <div className="space-y-3">
          {authorStories.map((story) => (
            <button
              key={story.id}
              onClick={() => onStoryClick(story.id)}
              className="w-full bg-soft-white rounded-xl p-4 border border-forest-green/30 text-left hover:border-forest-green transition-colors"
            >
              <h3 className="text-dark-charcoal font-bold text-lg mb-2">
                {story.title}
              </h3>
              <span className="inline-block bg-gold text-soft-white text-xs font-medium px-3 py-1 rounded-full">
                {story.category}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
