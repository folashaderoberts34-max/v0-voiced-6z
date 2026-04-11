"use client"

import { useState } from "react"
import { BottomNav } from "@/components/voiced/bottom-nav"
import { HomeScreen } from "@/components/voiced/home-screen"
import { StoryScreen } from "@/components/voiced/story-screen"
import { ProfileScreen } from "@/components/voiced/profile-screen"
import { SubmitScreen } from "@/components/voiced/submit-screen"
import { PricingScreen } from "@/components/voiced/pricing-screen"

type Screen = "home" | "discover" | "submit" | "account"
type DetailScreen = "story" | "profile" | null

export default function VoicedApp() {
  const [activeScreen, setActiveScreen] = useState<Screen>("home")
  const [detailScreen, setDetailScreen] = useState<DetailScreen>(null)
  const [navigationHistory, setNavigationHistory] = useState<Screen[]>(["home"])

  const handleNavigate = (screen: Screen) => {
    setActiveScreen(screen)
    setDetailScreen(null)
    setNavigationHistory([screen])
  }

  const handleStoryClick = (_storyId: string) => {
    setNavigationHistory([...navigationHistory, activeScreen])
    setDetailScreen("story")
  }

  const handleAuthorClick = (_authorId: string) => {
    setNavigationHistory([...navigationHistory, activeScreen])
    setDetailScreen("profile")
  }

  const handleBack = () => {
    if (detailScreen === "profile" && navigationHistory.includes("home")) {
      // If we came from a story to a profile, go back to story
      const prevHistory = [...navigationHistory]
      prevHistory.pop()
      setNavigationHistory(prevHistory)
      setDetailScreen("story")
    } else {
      setDetailScreen(null)
      setNavigationHistory([activeScreen])
    }
  }

  const handleProfileStoryClick = (_storyId: string) => {
    setNavigationHistory([...navigationHistory, activeScreen])
    setDetailScreen("story")
  }

  // Render detail screens
  if (detailScreen === "story") {
    return (
      <main className="max-w-md mx-auto bg-warm-cream min-h-screen relative">
        <StoryScreen onBack={handleBack} onAuthorClick={handleAuthorClick} />
        <BottomNav activeScreen={activeScreen} onNavigate={handleNavigate} />
      </main>
    )
  }

  if (detailScreen === "profile") {
    return (
      <main className="max-w-md mx-auto bg-warm-cream min-h-screen relative">
        <ProfileScreen onBack={handleBack} onStoryClick={handleProfileStoryClick} />
        <BottomNav activeScreen={activeScreen} onNavigate={handleNavigate} />
      </main>
    )
  }

  // Render main screens
  return (
    <main className="max-w-md mx-auto bg-warm-cream min-h-screen relative">
      {activeScreen === "home" && (
        <HomeScreen
          onStoryClick={handleStoryClick}
          onAuthorClick={handleAuthorClick}
        />
      )}
      {activeScreen === "discover" && (
        <HomeScreen
          onStoryClick={handleStoryClick}
          onAuthorClick={handleAuthorClick}
        />
      )}
      {activeScreen === "submit" && <SubmitScreen />}
      {activeScreen === "account" && <PricingScreen />}
      <BottomNav activeScreen={activeScreen} onNavigate={handleNavigate} />
    </main>
  )
}
