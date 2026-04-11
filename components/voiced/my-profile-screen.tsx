"use client"

import { Settings, BookOpen, Users } from "lucide-react"

interface MyProfileScreenProps {
  onStoryClick: (storyId: string) => void
}

// Current user's profile - Maria Santos from the stories
const currentUser = {
  name: "Maria Santos",
  initials: "MS",
  category: "Immigrant",
  bio: "First-generation Mexican-American writer exploring identity, family, and the spaces between two cultures. Based in Los Angeles.",
  readers: "2.4K",
  followers: "847",
  storiesCount: 3,
}

// Maria's published stories
const userStories = [
  { id: "1", title: "The Garden My Mother Left Behind", category: "Immigrant", reads: "1.2K" },
  { id: "5", title: "Between Two Tongues", category: "Immigrant", reads: "856" },
  { id: "11", title: "Abuela's Kitchen", category: "Immigrant", reads: "344" },
]

export function MyProfileScreen({ onStoryClick }: MyProfileScreenProps) {
  return (
    <div className="min-h-screen bg-warm-cream pb-24">
      {/* Header Banner */}
      <div className="relative">
        <div className="bg-forest-green h-32">
          <button
            className="absolute top-4 right-4 text-soft-white p-2 hover:bg-soft-white/10 rounded-full transition-colors z-10"
            aria-label="Settings"
          >
            <Settings className="h-6 w-6" />
          </button>
        </div>

        {/* Profile Photo */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-12">
          <div className="w-24 h-24 rounded-full bg-warm-cream border-4 border-gold flex items-center justify-center">
            <span className="text-forest-green font-bold text-2xl">{currentUser.initials}</span>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-16 px-4 text-center">
        <h1 className="text-dark-charcoal text-2xl font-bold mb-2">
          {currentUser.name}
        </h1>
        <span className="inline-block bg-gold text-soft-white text-sm font-medium px-4 py-1 rounded-full mb-4">
          {currentUser.category}
        </span>
        <p className="text-dark-charcoal italic mb-6 max-w-sm mx-auto">
          {currentUser.bio}
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-6 mb-8">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-forest-green/10 flex items-center justify-center mx-auto mb-1">
              <BookOpen className="h-5 w-5 text-forest-green" />
            </div>
            <p className="text-forest-green font-bold text-lg">{currentUser.storiesCount}</p>
            <p className="text-dark-charcoal text-sm">Stories</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-forest-green/10 flex items-center justify-center mx-auto mb-1">
              <Users className="h-5 w-5 text-forest-green" />
            </div>
            <p className="text-forest-green font-bold text-lg">{currentUser.readers}</p>
            <p className="text-dark-charcoal text-sm">Readers</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-forest-green/10 flex items-center justify-center mx-auto mb-1">
              <Users className="h-5 w-5 text-forest-green" />
            </div>
            <p className="text-forest-green font-bold text-lg">{currentUser.followers}</p>
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
          {userStories.map((story) => (
            <button
              key={story.id}
              onClick={() => onStoryClick(story.id)}
              className="w-full bg-soft-white rounded-xl p-4 border border-forest-green/30 text-left hover:border-forest-green transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-dark-charcoal font-bold text-lg">
                  {story.title}
                </h3>
                <span className="text-dark-charcoal/60 text-sm">{story.reads} reads</span>
              </div>
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
