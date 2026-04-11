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

interface NavigationState {
  screen: Screen
  detailScreen: DetailScreen
  storyId: string | null
  authorId: string | null
}

export default function VoicedApp() {
  const [activeScreen, setActiveScreen] = useState<Screen>("home")
  const [detailScreen, setDetailScreen] = useState<DetailScreen>(null)
  const [currentStoryId, setCurrentStoryId] = useState<string | null>(null)
  const [currentAuthorId, setCurrentAuthorId] = useState<string | null>(null)
  const [navigationStack, setNavigationStack] = useState<NavigationState[]>([])

  const handleNavigate = (screen: Screen) => {
    setActiveScreen(screen)
    setDetailScreen(null)
    setCurrentStoryId(null)
    setCurrentAuthorId(null)
    setNavigationStack([])
  }

  const handleStoryClick = (storyId: string) => {
    setNavigationStack([
      ...navigationStack,
      { screen: activeScreen, detailScreen, storyId: currentStoryId, authorId: currentAuthorId },
    ])
    setCurrentStoryId(storyId)
    setDetailScreen("story")
  }

  const handleAuthorClick = (authorId: string) => {
    setNavigationStack([
      ...navigationStack,
      { screen: activeScreen, detailScreen, storyId: currentStoryId, authorId: currentAuthorId },
    ])
    setCurrentAuthorId(authorId)
    setDetailScreen("profile")
  }

  const handleBack = () => {
    if (navigationStack.length > 0) {
      const prevState = navigationStack[navigationStack.length - 1]
      setNavigationStack(navigationStack.slice(0, -1))
      setDetailScreen(prevState.detailScreen)
      setCurrentStoryId(prevState.storyId)
      setCurrentAuthorId(prevState.authorId)
    } else {
      setDetailScreen(null)
      setCurrentStoryId(null)
      setCurrentAuthorId(null)
    }
  }

  // Render detail screens
  if (detailScreen === "story" && currentStoryId) {
    return (
      <main className="max-w-md mx-auto bg-warm-cream min-h-screen relative">
        <StoryScreen
          storyId={currentStoryId}
          onBack={handleBack}
          onAuthorClick={handleAuthorClick}
        />
        <BottomNav activeScreen={activeScreen} onNavigate={handleNavigate} />
      </main>
    )
  }

  if (detailScreen === "profile" && currentAuthorId) {
    return (
      <main className="max-w-md mx-auto bg-warm-cream min-h-screen relative">
        <ProfileScreen
          authorId={currentAuthorId}
          onBack={handleBack}
          onStoryClick={handleStoryClick}
        />
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
