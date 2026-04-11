"use client"

import { Settings, Award, BookOpen, Users } from "lucide-react"

interface MyProfileScreenProps {
  onStoryClick: (storyId: string) => void
  onPatronClick: () => void
}

// Current user's profile - this would come from auth in a real app
const currentUser = {
  name: "Your Name",
  initials: "YN",
  category: "Your Community",
  bio: "Share your story with the world. Tap Settings to customize your profile.",
  readers: "0",
  followers: "0",
  storiesCount: 0,
}

// Mock stories for the user - empty for new users
const userStories: { id: string; title: string; category: string; reads: string }[] = []

export function MyProfileScreen({ onStoryClick, onPatronClick }: MyProfileScreenProps) {
  return (
    <div className="min-h-screen bg-warm-cream pb-20">
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

      {/* View Patrons Button */}
      <div className="px-4 mb-6">
        <button
          onClick={onPatronClick}
          className="w-full bg-gold text-soft-white font-bold py-4 rounded-xl hover:bg-gold/90 transition-colors flex items-center justify-center gap-3"
        >
          <Award className="h-5 w-5" />
          <span>View Hall of Fame</span>
        </button>
      </div>

      {/* Published Stories */}
      <div className="px-4">
        <h2 className="text-dark-charcoal font-bold text-lg mb-4">
          Your Published Stories
        </h2>
        <div className="space-y-3">
          {userStories.length > 0 ? (
            userStories.map((story) => (
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
            ))
          ) : (
            <div className="bg-soft-white rounded-xl p-8 border border-forest-green/20 text-center">
              <BookOpen className="h-12 w-12 text-forest-green/30 mx-auto mb-4" />
              <p className="text-dark-charcoal font-medium mb-2">No stories yet</p>
              <p className="text-dark-charcoal/60 text-sm">
                Submit your first story to see it here
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
