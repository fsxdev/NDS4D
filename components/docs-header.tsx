"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { AnimatedLogo } from "./animated-logo"

export function DocsHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="flex items-center justify-between h-14 px-4 md:px-6">
        <div className="flex items-center gap-6">
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>

          <Link href="/" className="flex items-center gap-2 group">
            <AnimatedLogo size={28} />
            <span className="font-semibold text-foreground hidden sm:inline group-hover:text-muted-foreground transition-colors">NDS4D</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
