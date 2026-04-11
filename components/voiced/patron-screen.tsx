"use client"

import { useState } from "react"
import { Crown, Eye, EyeOff } from "lucide-react"

interface PatronScreenProps {
  onJoinClick: () => void
}

interface Patron {
  id: string
  username: string
  initials: string
  memberSince: string
  tier: "gold" | "silver" | "bronze"
  isAnonymous: boolean
}

const patrons: Patron[] = [
  { id: "1", username: "SarahM_Writer", initials: "SM", memberSince: "January 2024", tier: "gold", isAnonymous: false },
  { id: "2", username: "Anonymous Supporter", initials: "AS", memberSince: "March 2024", tier: "gold", isAnonymous: true },
  { id: "3", username: "JamesKnight", initials: "JK", memberSince: "February 2024", tier: "gold", isAnonymous: false },
  { id: "4", username: "LiteraryLove", initials: "LL", memberSince: "December 2023", tier: "gold", isAnonymous: false },
  { id: "5", username: "StoriesForAll", initials: "SF", memberSince: "April 2024", tier: "silver", isAnonymous: false },
  { id: "6", username: "Anonymous Supporter", initials: "AS", memberSince: "May 2024", tier: "silver", isAnonymous: true },
  { id: "7", username: "ReaderRachel", initials: "RR", memberSince: "January 2024", tier: "silver", isAnonymous: false },
  { id: "8", username: "BookwormBen", initials: "BB", memberSince: "March 2024", tier: "silver", isAnonymous: false },
  { id: "9", username: "VoicesMatter", initials: "VM", memberSince: "June 2024", tier: "silver", isAnonymous: false },
  { id: "10", username: "CommunityChris", initials: "CC", memberSince: "February 2024", tier: "bronze", isAnonymous: false },
  { id: "11", username: "Anonymous Supporter", initials: "AS", memberSince: "April 2024", tier: "bronze", isAnonymous: true },
  { id: "12", username: "InkAndSoul", initials: "IS", memberSince: "May 2024", tier: "bronze", isAnonymous: false },
  { id: "13", username: "TalesTina", initials: "TT", memberSince: "January 2024", tier: "bronze", isAnonymous: false },
  { id: "14", username: "NarrativeNate", initials: "NN", memberSince: "March 2024", tier: "bronze", isAnonymous: false },
  { id: "15", username: "PageTurner", initials: "PT", memberSince: "June 2024", tier: "bronze", isAnonymous: false },
]

const tierConfig = {
  gold: {
    label: "Gold Patrons",
    description: "VOICED Supporters - $20/month",
    bgColor: "bg-gold",
    textColor: "text-soft-white",
    borderColor: "border-gold",
    iconColor: "text-gold",
  },
  silver: {
    label: "Silver Patrons", 
    description: "VOICED Members - $10/month",
    bgColor: "bg-dark-charcoal/80",
    textColor: "text-soft-white",
    borderColor: "border-dark-charcoal/80",
    iconColor: "text-dark-charcoal/80",
  },
  bronze: {
    label: "Bronze Patrons",
    description: "Free Supporters",
    bgColor: "bg-forest-green/70",
    textColor: "text-soft-white",
    borderColor: "border-forest-green/70",
    iconColor: "text-forest-green/70",
  },
}

export function PatronScreen({ onJoinClick }: PatronScreenProps) {
  const [showPrivacyToggle, setShowPrivacyToggle] = useState(false)
  const [isAnonymous, setIsAnonymous] = useState(false)

  const goldPatrons = patrons.filter((p) => p.tier === "gold")
  const silverPatrons = patrons.filter((p) => p.tier === "silver")
  const bronzePatrons = patrons.filter((p) => p.tier === "bronze")

  const renderPatronList = (patronList: Patron[], tier: "gold" | "silver" | "bronze") => {
    const config = tierConfig[tier]
    
    return (
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Crown className={`h-6 w-6 ${config.iconColor}`} />
          <div>
            <h2 className="text-dark-charcoal font-bold text-lg">{config.label}</h2>
            <p className="text-dark-charcoal/60 text-sm">{config.description}</p>
          </div>
        </div>
        
        <div className="space-y-3">
          {patronList.map((patron) => (
            <div
              key={patron.id}
              className={`flex items-center gap-4 p-4 rounded-xl border ${config.borderColor} bg-soft-white`}
            >
              <div className={`w-12 h-12 rounded-full ${config.bgColor} flex items-center justify-center flex-shrink-0`}>
                <span className={`font-bold ${config.textColor}`}>
                  {patron.isAnonymous ? "?" : patron.initials}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-dark-charcoal font-semibold truncate">
                  {patron.isAnonymous ? "Anonymous Supporter" : patron.username}
                </p>
                <p className="text-dark-charcoal/60 text-sm">
                  Member since {patron.memberSince}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-warm-cream pb-24 px-4 pt-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-forest-green text-2xl font-bold mb-2 text-balance">
          Hall of Fame
        </h1>
        <p className="text-dark-charcoal">
          Celebrating the community that makes VOICED possible
        </p>
      </div>

      {/* Privacy Toggle for Current User */}
      <div className="bg-soft-white rounded-xl p-4 border border-forest-green/20 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {isAnonymous ? (
              <EyeOff className="h-5 w-5 text-forest-green" />
            ) : (
              <Eye className="h-5 w-5 text-forest-green" />
            )}
            <div>
              <p className="text-dark-charcoal font-medium">Privacy Setting</p>
              <p className="text-dark-charcoal/60 text-sm">
                {isAnonymous ? "You appear as Anonymous" : "Your name is visible"}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsAnonymous(!isAnonymous)}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              isAnonymous ? "bg-forest-green" : "bg-dark-charcoal/30"
            }`}
          >
            <span
              className={`absolute top-1 w-5 h-5 rounded-full bg-soft-white transition-transform ${
                isAnonymous ? "left-8" : "left-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Patron Lists by Tier */}
      {renderPatronList(goldPatrons, "gold")}
      {renderPatronList(silverPatrons, "silver")}
      {renderPatronList(bronzePatrons, "bronze")}

      {/* Join CTA */}
      <div className="bg-forest-green rounded-xl p-6 text-center">
        <h3 className="text-soft-white text-xl font-bold mb-2">
          Join the Community
        </h3>
        <p className="text-soft-white/90 mb-4">
          Support underrepresented voices and get your name in the Hall of Fame
        </p>
        <button
          onClick={onJoinClick}
          className="bg-gold text-soft-white font-bold px-8 py-3 rounded-full hover:bg-gold/90 transition-colors"
        >
          Become a Patron
        </button>
      </div>
    </div>
  )
}
