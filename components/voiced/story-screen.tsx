"use client"

import { ArrowLeft, Heart, Share2 } from "lucide-react"
import { allStories } from "./home-screen"

interface StoryScreenProps {
  storyId: string
  onBack: () => void
  onAuthorClick: (authorId: string) => void
  onSupportClick: () => void
}

const storyContent: Record<string, { paragraphs: string[] }> = {
  "1": {
    paragraphs: [
      "The first thing my mother planted when we arrived was cilantro. She said it reminded her of home. I did not understand then what it meant to carry a garden inside you, to tend to it across borders and years.",
      "Every morning, she would walk to the back of our small apartment complex, to the patch of dirt she had claimed as her own. The landlord never complained—perhaps he saw something sacred in the way she knelt, her hands disappearing into the soil like prayers.",
      "Now, twenty years later, I find myself doing the same. My daughter watches from the window, too young to understand why her mother cries over seedlings. But one day she will know. One day she will carry her own garden, and she will remember.",
    ],
  },
  "2": {
    paragraphs: [
      "In Nsukka, the roosters do not wait for dawn. They call when they feel like it, and the village listens. My grandmother used to say they were arguing with the spirits, negotiating for one more day of peace.",
      "I left for the city when I was seventeen, carrying nothing but a bag of garri and my father's blessing. The silence of Lagos traffic was deafening compared to the orchestra of our village mornings.",
      "Last month, I returned. The roosters still crow at odd hours, but now I understand—they are not arguing. They are celebrating. Every sound is a small victory against forgetting.",
    ],
  },
  "3": {
    paragraphs: [
      "My grandmother never asked why I cut my hair. She just handed me her old photographs and said, 'You remind me of your grandfather.' In the faded image, he stood tall in a suit that didn't quite fit, his hair cropped close, his smile uncertain but real.",
      "For years, I had prepared speeches, explanations, defenses. But she needed none of them. She saw me before I had the words to describe myself.",
      "When she died last spring, I found more photographs in her drawer. Women in trousers, men holding hands, lives lived quietly and bravely in decades that history forgot. She had been keeping records of us all along.",
    ],
  },
  "4": {
    paragraphs: [
      "People always ask if I miss walking. I tell them I miss flying. The wheelchair was never the cage—the stairs were.",
      "Before my accident, I was a dancer. I measured my worth in leaps and turns, in the height of my jumps. Now I measure it in the depth of my presence, in the way I can hold a room with stillness.",
      "My daughter learned to walk by pushing my chair. She would grip the handles with her tiny fists and guide us both across the living room, laughing. To her, the wheels were not a limitation. They were wings that needed two people to fly.",
    ],
  },
  "5": {
    paragraphs: [
      "My daughter speaks English in her dreams. I wonder if she visits me there, or if I am a stranger in her sleep.",
      "When we first arrived, I would whisper Hindi lullabies into her ear, trying to plant seeds of a language she might never need. But children grow in the soil they are given, not the soil we carry.",
      "Last week, she asked me to teach her our alphabet. She is sixteen now, old enough to feel the absence of something she never knew she was missing. I sat beside her, my own handwriting clumsy from disuse, and we learned together.",
    ],
  },
  "6": {
    paragraphs: [
      "When the train stopped running through our village, we did not notice at first. The silence crept in like a relative who overstays.",
      "My father had been a porter at the station for thirty years. He knew every passenger by name, every cargo by weight. The day they announced the closure, he did not cry. He simply walked to the empty platform and waited, as if the trains might return if only someone was there to receive them.",
      "Now the tracks are overgrown with grass, and children play where locomotives once thundered. My father still walks there every morning. 'Trains are patient,' he tells me. 'They always come back.'",
    ],
  },
  "7": {
    paragraphs: [
      "She asked me to dance at my cousin's wedding. The aunties watched. My mother smiled. That was the moment I knew I was finally home.",
      "For years, I had rehearsed this scene differently—with confrontations, with tears, with dramatic exits. But life rarely follows the scripts we write for it.",
      "We danced to a song I don't remember, surrounded by relatives I had avoided for a decade. When the music ended, my grandmother took my hand and said, 'Bring her to Sunday dinner.' That was all. That was everything.",
    ],
  },
  "8": {
    paragraphs: [
      "Losing my hearing at nineteen felt like the end. Learning sign language at twenty felt like being born into a new world.",
      "Sound had been my first language—I was a musician, a listener, a collector of voices. When it left, I mourned like I was attending my own funeral.",
      "But hands speak too. They shout and whisper and sing. My deaf friends taught me that silence is not the absence of communication—it is simply a different channel. Now I hear with my eyes, and the world is louder than it ever was.",
    ],
  },
  "9": {
    paragraphs: [
      "In our village in northern Nigeria, the well was where stories were traded like currency. Water was just the excuse to gather.",
      "My mother would send me with an empty bucket and I would return hours later, the bucket full but my head fuller. I learned about births and deaths, scandals and miracles, all while waiting my turn at the rope.",
      "The government built a tap system last year. It is more convenient, they say. Cleaner. But now the women collect their water in silence, and the stories stay trapped in their throats. Progress sometimes means losing the reasons we gathered.",
    ],
  },
  "10": {
    paragraphs: [
      "Growing up in rural Nebraska, I learned to read the sky before I learned to read books. The stars were my first stories.",
      "My grandfather would take me to the edge of our cornfield at dusk, and we would lie on our backs and watch the universe turn. He had names for constellations that no astronomy book contained—names passed down from his grandfather, who had named them while crossing the plains in a covered wagon.",
      "I live in the city now, where the sky is a pale imitation of itself. But on clear nights, I drive for hours until the stars return, and I tell my children the names my grandfather gave me. The stories survive because we carry them.",
    ],
  },
}

const authorBios: Record<string, { bio: string; initials: string }> = {
  "maria-santos": { bio: "Immigrant writer based in Tennessee", initials: "MS" },
  "adaeze-okonkwo": { bio: "Nigerian storyteller from Nsukka", initials: "AO" },
  "alex-chen": { bio: "Queer writer exploring identity and memory", initials: "AC" },
  "destiny-carter": { bio: "Disability advocate and former dancer", initials: "DC" },
  "priya-sharma": { bio: "First-generation immigrant mother and poet", initials: "PS" },
  "chukwuemeka-eze": { bio: "Rural Nigerian chronicler", initials: "CE" },
  "jordan-williams": { bio: "LGBTQ+ essayist from Atlanta", initials: "JW" },
  "marcus-thompson": { bio: "Deaf artist and writer", initials: "MT" },
  "fatima-yusuf": { bio: "Northern Nigerian village storyteller", initials: "FY" },
  "emily-hartman": { bio: "Rural American writer from Nebraska", initials: "EH" },
}

export function StoryScreen({ storyId, onBack, onAuthorClick, onSupportClick }: StoryScreenProps) {
  const story = allStories.find((s) => s.id === storyId) || allStories[0]
  const content = storyContent[story.id] || storyContent["1"]
  const authorInfo = authorBios[story.authorId] || { bio: "Writer", initials: "AU" }

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
        <span className="inline-block bg-gold text-soft-white text-xs font-medium px-3 py-1 rounded-full mb-3">
          {story.category}
        </span>
        
        <h1 className="text-dark-charcoal text-2xl font-bold mb-4 text-balance">
          {story.title}
        </h1>

        {/* Author Info */}
        <button
          onClick={() => onAuthorClick(story.authorId)}
          className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity"
        >
          <div className="w-12 h-12 rounded-full bg-forest-green/20 flex items-center justify-center">
            <span className="text-forest-green font-bold text-lg">{authorInfo.initials}</span>
          </div>
          <div className="text-left">
            <p className="text-forest-green font-bold">{story.author}</p>
            <p className="text-dark-charcoal text-sm italic">{authorInfo.bio}</p>
          </div>
        </button>

        {/* Story Text */}
        <div className="prose prose-lg max-w-none text-dark-charcoal leading-relaxed space-y-4">
          {content.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
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
          <button 
            onClick={onSupportClick}
            className="bg-gold text-soft-white font-bold px-6 py-3 rounded-full hover:bg-gold/90 transition-colors"
          >
            Support this Writer
          </button>
        </div>
      </div>
    </div>
  )
}
