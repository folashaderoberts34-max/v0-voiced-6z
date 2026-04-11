"use client"

import { Home, Compass, PenSquare, CreditCard } from "lucide-react"

type Screen = "home" | "discover" | "submit" | "subscribe"

interface BottomNavProps {
  activeScreen: Screen
  onNavigate: (screen: Screen) => void
}

export function BottomNav({ activeScreen, onNavigate }: BottomNavProps) {
  const navItems: { id: Screen; label: string; icon: React.ReactNode }[] = [
    { id: "home", label: "Home", icon: <Home className="h-5 w-5" /> },
    { id: "discover", label: "Discover", icon: <Compass className="h-5 w-5" /> },
    { id: "submit", label: "Submit", icon: <PenSquare className="h-5 w-5" /> },
    { id: "subscribe", label: "Subscribe", icon: <CreditCard className="h-5 w-5" /> },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-soft-white border-t border-forest-green/20 px-4 py-2 z-50">
      <div className="max-w-md mx-auto flex justify-around items-center">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center gap-1 py-2 px-4 transition-colors ${
              activeScreen === item.id
                ? "text-gold"
                : "text-forest-green hover:text-gold"
            }`}
          >
            {item.icon}
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
