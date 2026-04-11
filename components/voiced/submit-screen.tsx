"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function SubmitScreen() {
  const [genre, setGenre] = useState("")
  const [community, setCommunity] = useState("")

  return (
    <div className="min-h-screen bg-warm-cream pb-24 px-4 pt-6">
      <h1 className="text-forest-green text-2xl font-bold mb-2 text-balance">
        Your Story Belongs Here.
      </h1>
      <p className="text-dark-charcoal mb-6">
        VOICED is looking for real stories from real lives. No experience
        necessary.
      </p>

      <form className="space-y-4">
        {/* Story Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-dark-charcoal font-medium mb-2"
          >
            Story Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full bg-soft-white border border-forest-green rounded-lg px-4 py-3 text-dark-charcoal placeholder:text-dark-charcoal/50 focus:outline-none focus:ring-2 focus:ring-gold"
            placeholder="Enter your story title"
          />
        </div>

        {/* Genre Dropdown */}
        <div>
          <label
            htmlFor="genre"
            className="block text-dark-charcoal font-medium mb-2"
          >
            Genre
          </label>
          <div className="relative">
            <select
              id="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full bg-soft-white border border-forest-green rounded-lg px-4 py-3 text-dark-charcoal appearance-none focus:outline-none focus:ring-2 focus:ring-gold cursor-pointer"
            >
              <option value="" disabled>
                Select a genre
              </option>
              <option value="essay">Essay</option>
              <option value="fiction">Fiction</option>
              <option value="nonfiction">Nonfiction</option>
              <option value="poetry">Poetry</option>
              <option value="memoir">Memoir</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-dark-charcoal pointer-events-none" />
          </div>
        </div>

        {/* Community Tag Dropdown */}
        <div>
          <label
            htmlFor="community"
            className="block text-dark-charcoal font-medium mb-2"
          >
            Community Tag
          </label>
          <div className="relative">
            <select
              id="community"
              value={community}
              onChange={(e) => setCommunity(e.target.value)}
              className="w-full bg-soft-white border border-forest-green rounded-lg px-4 py-3 text-dark-charcoal appearance-none focus:outline-none focus:ring-2 focus:ring-gold cursor-pointer"
            >
              <option value="" disabled>
                Select a community
              </option>
              <option value="lgbtq">LGBTQ+</option>
              <option value="immigrant">Immigrant</option>
              <option value="disabled">Disabled</option>
              <option value="rural">Rural</option>
              <option value="other">Other</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-dark-charcoal pointer-events-none" />
          </div>
        </div>

        {/* Story Content */}
        <div>
          <label
            htmlFor="story"
            className="block text-dark-charcoal font-medium mb-2"
          >
            Paste or type your story here
          </label>
          <textarea
            id="story"
            rows={8}
            className="w-full bg-soft-white border border-forest-green rounded-lg px-4 py-3 text-dark-charcoal placeholder:text-dark-charcoal/50 focus:outline-none focus:ring-2 focus:ring-gold resize-none"
            placeholder="Start writing your story..."
          />
        </div>

        <p className="text-dark-charcoal text-sm italic">
          Our editorial team personally reads every submission and responds
          within 2 weeks.
        </p>

        <button
          type="submit"
          className="w-full bg-gold text-soft-white font-bold py-4 rounded-full hover:bg-gold/90 transition-colors text-lg"
        >
          Submit Your Story
        </button>
      </form>
    </div>
  )
}
