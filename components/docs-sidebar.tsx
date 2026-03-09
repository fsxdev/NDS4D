"use client"

import { cn } from "@/lib/utils"
import { ChevronDown, Search, Layers } from "lucide-react"
import { useState, useEffect } from "react"

interface SidebarSection {
  title: string
  items: {
    name: string
    id: string
    isNew?: boolean
  }[]
}

const sections: SidebarSection[] = [
  {
    title: "Getting Started",
    items: [
      { name: "Introduction", id: "introduction" }
    ],
  },
  {
    title: "Form",
    items: [
      { name: "Button", id: "button" },
      { name: "Checkbox", id: "checkbox" },
      { name: "Input", id: "input" },
      { name: "Switch", id: "switch" },
    ],
  },
  {
    title: "Data Display",
    items: [
      { name: "Avatar", id: "avatar" },
      { name: "Badge", id: "badge" },
      { name: "Card", id: "card" },
      { name: "Skeleton", id: "skeleton" },
    ],
  },
  {
    title: "Feedback",
    items: [
      { name: "Alert", id: "alert" },
      { name: "Tooltip", id: "tooltip" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { name: "Tabs", id: "tabs" },
    ],
  },
  {
    title: "Layout",
    items: [
      { name: "Separator", id: "separator" },
    ],
  },
]

export function DocsSidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>(
    sections.map((s) => s.title)
  )
  const [searchQuery, setSearchQuery] = useState("")
  const [activeId, setActiveId] = useState<string>("")
  const [version, setVersion] = useState<string>("...")

  useEffect(() => {
    fetch("/version.json")
      .then((res) => res.json())
      .then((data) => setVersion(data.version))
      .catch(() => setVersion("1.0.0"))
  }, [])
  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    )
  }

const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
  e.preventDefault()
  const element = document.getElementById(id)
  if (element) {
    const headerOffset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset
    window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    setActiveId(id)
  }
}

  const filteredSections = sections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((section) => section.items.length > 0)

  const totalComponents = sections.reduce((acc, s) => acc + s.items.length, 0) - 2

  return (
    <aside className="w-64 border-r border-border bg-card/50 fixed top-14 left-0 h-[calc(100vh-3.5rem)] flex flex-col">
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 transition-all"
          />
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Layers className="h-3.5 w-3.5" />
          <span>{totalComponents} components</span>
        </div>
      </div>

      <nav className="px-2 pb-4 overflow-y-auto flex-1">
        {filteredSections.map((section) => (
          <div key={section.title} className="mb-1">
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-secondary/50 transition-colors"
            >
              <span className="uppercase tracking-wider">{section.title}</span>
              <ChevronDown 
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  !expandedSections.includes(section.title) && "-rotate-90"
                )} 
              />
            </button>
            
            <div className={cn(
              "overflow-hidden transition-all duration-200",
              expandedSections.includes(section.title) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            )}>
              <ul className="py-1 pl-3">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={cn(
                        "flex items-center justify-between w-full px-3 py-1.5 text-sm rounded-md transition-all text-left",
                        activeId === item.id
                          ? "bg-foreground text-background font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                      )}
                    >
                      <span>{item.name}</span>
                      {item.isNew && (
                        <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-foreground text-background">
                          NEW
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </nav>

      <div className="px-4 py-3 border-t border-border bg-card/50 mt-auto">
        <p className="text-[10px] text-muted-foreground text-center font-mono">
          v{version}
        </p>
      </div>
    </aside>
  )
}
