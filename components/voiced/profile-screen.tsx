"use client"

import { ArrowLeft, ExternalLink } from "lucide-react"
import { allStories } from "./home-screen"

interface ProfileScreenProps {
  authorId: string
  onBack: () => void
  onStoryClick: (storyId: string) => void
}

const authorProfiles: Record<string, {
  name: string
  initials: string
  category: string
  bio: string
  readers: string
  followers: string
  supportLink?: string
}> = {
  "maria-santos": {
    name: "Maria Santos",
    initials: "MS",
    category: "Immigrant Stories",
    bio: "Maria is a first generation writer from El Salvador, now living in Nashville. She writes about memory, migration, and belonging.",
    readers: "1.2k",
    followers: "340",
    supportLink: "https://patreon.com/mariasantos",
  },
  "adaeze-okonkwo": {
    name: "Adaeze Okonkwo",
    initials: "AO",
    category: "Rural Stories",
    bio: "Adaeze grew up in Nsukka, Nigeria. Her stories capture the rhythms and wisdom of village life in southeastern Nigeria.",
    readers: "890",
    followers: "215",
    supportLink: "https://ko-fi.com/adaezewrites",
  },
  "alex-chen": {
    name: "Alex Chen",
    initials: "AC",
    category: "LGBTQ+ Stories",
    bio: "Alex explores identity, family, and memory through a queer lens. Based in San Francisco, they write about finding belonging across generations.",
    readers: "2.1k",
    followers: "520",
    supportLink: "https://buymeacoffee.com/alexchen",
  },
  "destiny-carter": {
    name: "Destiny Carter",
    initials: "DC",
    category: "Disabled Stories",
    bio: "Destiny is a former professional dancer who became a disability advocate after her accident. She writes about redefining worth and capability.",
    readers: "1.8k",
    followers: "445",
    supportLink: "https://patreon.com/destinycarter",
  },
  "priya-sharma": {
    name: "Priya Sharma",
    initials: "PS",
    category: "Immigrant Stories",
    bio: "Priya immigrated from India as a young mother. Her writing explores the spaces between languages, generations, and homelands.",
    readers: "950",
    followers: "280",
    supportLink: "https://priyasharma.com/support",
  },
  "chukwuemeka-eze": {
    name: "Chukwuemeka Eze",
    initials: "CE",
    category: "Rural Stories",
    bio: "Chukwuemeka documents the changing landscape of rural Nigeria. His stories honor the traditions while acknowledging the transformations.",
    readers: "720",
    followers: "190",
    supportLink: "https://ko-fi.com/chukwuemeka",
  },
  "jordan-williams": {
    name: "Jordan Williams",
    initials: "JW",
    category: "LGBTQ+ Stories",
    bio: "Jordan writes about queer joy, family acceptance, and finding home. Based in Atlanta, their essays celebrate the ordinary moments of visibility.",
    readers: "1.5k",
    followers: "380",
    supportLink: "https://patreon.com/jordanwrites",
  },
  "marcus-thompson": {
    name: "Marcus Thompson",
    initials: "MT",
    category: "Disabled Stories",
    bio: "Marcus lost his hearing at nineteen and found a new world in sign language. He writes about deafness as a different way of hearing.",
    readers: "1.1k",
    followers: "310",
    supportLink: "https://marcusthompson.com/support",
  },
  "fatima-yusuf": {
    name: "Fatima Yusuf",
    initials: "FY",
    category: "Rural Stories",
    bio: "Fatima grew up in a village in northern Nigeria where stories were shared at the well. She preserves those voices in her writing.",
    readers: "680",
    followers: "175",
    supportLink: "https://ko-fi.com/fatimayusuf",
  },
  "emily-hartman": {
    name: "Emily Hartman",
    initials: "EH",
    category: "Rural Stories",
    bio: "Emily writes about rural American life in Nebraska, where she learned to read the stars before she learned to read books.",
    readers: "820",
    followers: "225",
    supportLink: "https://patreon.com/emilyhartman",
  },
}

export function ProfileScreen({ authorId, onBack, onStoryClick }: ProfileScreenProps) {
  const profile = authorProfiles[authorId] || authorProfiles["maria-santos"]
  const authorStories = allStories.filter((story) => story.authorId === authorId)

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
            <span className="text-forest-green font-bold text-2xl">{profile.initials}</span>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-16 px-4 text-center">
        <h1 className="text-dark-charcoal text-2xl font-bold mb-2">
          {profile.name}
        </h1>
        <span className="inline-block bg-gold text-soft-white text-sm font-medium px-4 py-1 rounded-full mb-4">
          {profile.category}
        </span>
        <p className="text-dark-charcoal italic mb-6 max-w-sm mx-auto">
          {profile.bio}
        </p>

        <div className="flex justify-center gap-3 mb-6">
          <button className="bg-forest-green text-soft-white font-bold px-8 py-3 rounded-full hover:bg-forest-green/90 transition-colors">
            Follow
          </button>
          {profile.supportLink && (
            <a
              href={profile.supportLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-soft-white font-bold px-6 py-3 rounded-full hover:bg-gold/90 transition-colors flex items-center gap-2"
            >
              <span>Support</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="text-center">
            <p className="text-forest-green font-bold text-lg">{profile.readers}</p>
            <p className="text-dark-charcoal text-sm">Readers</p>
          </div>
          <div className="text-center">
            <p className="text-forest-green font-bold text-lg">{profile.followers}</p>
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
          {authorStories.length > 0 ? (
            authorStories.map((story) => (
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
            ))
          ) : (
            <p className="text-dark-charcoal/60 text-center py-8">
              No published stories yet
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
