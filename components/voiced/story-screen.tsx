"use client"

import { ArrowLeft, Heart, Share2 } from "lucide-react"

interface StoryScreenProps {
  onBack: () => void
  onAuthorClick: (authorId: string) => void
}

export function StoryScreen({ onBack, onAuthorClick }: StoryScreenProps) {
  return (
    <div className="min-h-screen bg-warm-cream pb-24">
      {/* Header */}
      <header className="px-4 py-4">
        <button
          onClick={onBack}
          className="text-forest-green p-2 -ml-2 hover:bg-forest-green/10 rounded-full transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
      </header>

      {/* Story Content */}
      <article className="px-4">
        <h1 className="text-dark-charcoal text-2xl font-bold mb-4 text-balance">
          The Garden My Mother Left Behind
        </h1>

        {/* Author Info */}
        <button
          onClick={() => onAuthorClick("maria-santos")}
          className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity"
        >
          <div className="w-12 h-12 rounded-full bg-forest-green/20 flex items-center justify-center">
            <span className="text-forest-green font-bold text-lg">MS</span>
          </div>
          <div className="text-left">
            <p className="text-forest-green font-bold">Maria Santos</p>
            <p className="text-dark-charcoal text-sm italic">
              Immigrant writer based in Tennessee
            </p>
          </div>
        </button>

        {/* Story Text */}
        <div className="prose prose-lg max-w-none text-dark-charcoal leading-relaxed space-y-4">
          <p>
            The first thing my mother planted when we arrived was cilantro. She
            said it reminded her of home. I did not understand then what it
            meant to carry a garden inside you, to tend to it across borders and
            years.
          </p>
          <p>
            Every morning, she would walk to the back of our small apartment
            complex, to the patch of dirt she had claimed as her own. The
            landlord never complained — perhaps he saw something sacred in the
            way she knelt, her hands disappearing into the soil like prayers.
          </p>
          <p>
            Now, twenty years later, I find myself doing the same. My daughter
            watches from the window, too young to understand why her mother
            cries over seedlings. But one day she will know. One day she will
            carry her own garden, and she will remember.
          </p>
        </div>
      </article>

      {/* Action Bar */}
      <div className="fixed bottom-20 left-0 right-0 bg-soft-white border-t border-forest-green/20 px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <button className="p-3 hover:bg-gold/10 rounded-full transition-colors">
            <Heart className="h-6 w-6 text-gold" />
          </button>
          <button className="p-3 hover:bg-forest-green/10 rounded-full transition-colors">
            <Share2 className="h-6 w-6 text-forest-green" />
          </button>
          <button className="bg-gold text-soft-white font-bold px-6 py-3 rounded-full hover:bg-gold/90 transition-colors">
            Support this Writer
          </button>
        </div>
      </div>
    </div>
  )
}
