"use client"

import { Check } from "lucide-react"

export function PricingScreen() {
  return (
    <div className="min-h-screen bg-forest-green pb-24 px-4 pt-8">
      <h1 className="text-soft-white text-2xl font-bold mb-2 text-center text-balance">
        Support Writers. Access Stories.
      </h1>
      <p className="text-soft-white/90 text-center mb-8">
        70% of all subscription revenue goes directly to our writers.
      </p>

      <div className="space-y-4 max-w-sm mx-auto">
        {/* Free Plan */}
        <div className="bg-soft-white rounded-xl p-6">
          <h2 className="text-dark-charcoal text-xl font-bold mb-4">Free</h2>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-3 text-dark-charcoal">
              <Check className="h-5 w-5 text-forest-green flex-shrink-0" />
              <span>2 stories per month</span>
            </li>
            <li className="flex items-center gap-3 text-dark-charcoal">
              <Check className="h-5 w-5 text-forest-green flex-shrink-0" />
              <span>Community access</span>
            </li>
            <li className="flex items-center gap-3 text-dark-charcoal">
              <Check className="h-5 w-5 text-forest-green flex-shrink-0" />
              <span>No credit card needed</span>
            </li>
          </ul>
          <button className="w-full bg-forest-green text-soft-white font-bold py-3 rounded-full hover:bg-forest-green/90 transition-colors">
            Get Started
          </button>
        </div>

        {/* Member Plan - Most Popular */}
        <div className="bg-gold rounded-xl p-6 relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-soft-white text-gold text-xs font-bold px-3 py-1 rounded-full">
            Most Popular
          </span>
          <h2 className="text-soft-white text-xl font-bold mb-1">
            VOICED Member
          </h2>
          <p className="text-soft-white text-3xl font-bold mb-4">$10/month</p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-3 text-soft-white">
              <Check className="h-5 w-5 flex-shrink-0" />
              <span>Unlimited stories</span>
            </li>
            <li className="flex items-center gap-3 text-soft-white">
              <Check className="h-5 w-5 flex-shrink-0" />
              <span>Ad free reading</span>
            </li>
            <li className="flex items-center gap-3 text-soft-white">
              <Check className="h-5 w-5 flex-shrink-0" />
              <span>Early access to new writers</span>
            </li>
          </ul>
          <button className="w-full bg-soft-white text-gold font-bold py-3 rounded-full hover:bg-soft-white/90 transition-colors">
            Subscribe
          </button>
        </div>

        {/* Supporter Plan */}
        <div className="bg-soft-white rounded-xl p-6">
          <h2 className="text-dark-charcoal text-xl font-bold mb-1">
            VOICED Supporter
          </h2>
          <p className="text-dark-charcoal text-3xl font-bold mb-4">
            $20/month
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-3 text-dark-charcoal">
              <Check className="h-5 w-5 text-forest-green flex-shrink-0" />
              <span>Everything in Member</span>
            </li>
            <li className="flex items-center gap-3 text-dark-charcoal">
              <Check className="h-5 w-5 text-forest-green flex-shrink-0" />
              <span>20% of your fee goes to writers</span>
            </li>
            <li className="flex items-center gap-3 text-dark-charcoal">
              <Check className="h-5 w-5 text-forest-green flex-shrink-0" />
              <span>Your name listed as a community patron</span>
            </li>
          </ul>
          <button className="w-full bg-forest-green text-soft-white font-bold py-3 rounded-full hover:bg-forest-green/90 transition-colors">
            Become a Supporter
          </button>
        </div>
      </div>

      <p className="text-warm-cream text-center text-sm italic mt-6">
        Cancel anytime. No commitment.
      </p>
    </div>
  )
}
