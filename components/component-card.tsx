"use client"

import { useState } from "react"
import { CodeBlock } from "./code-block"
import { cn } from "@/lib/utils"

interface ComponentCardProps {
  id?: string
  title: string
  description: string
  preview: React.ReactNode
  code: string
  tailwind?: string
  filename?: string
}

export function ComponentCard({ id, title, description, preview, code, tailwind, filename }: ComponentCardProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code" | "tailwind">("preview")

  return (
    <div 
      id={id}
      className="rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 component-card"
    >
      <div className="border-b border-border p-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>

      <div className="border-b border-border">
        <div className="flex">
          <button
            onClick={() => setActiveTab("preview")}
            className={cn(
              "px-4 py-2.5 text-sm font-medium transition-colors relative",
              activeTab === "preview"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Preview
            {activeTab === "preview" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={cn(
              "px-4 py-2.5 text-sm font-medium transition-colors relative",
              activeTab === "code"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Component
            {activeTab === "code" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
            )}
          </button>
          {tailwind && (
            <button
              onClick={() => setActiveTab("tailwind")}
              className={cn(
                "px-4 py-2.5 text-sm font-medium transition-colors relative",
                activeTab === "tailwind"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Tailwind CSS
              {activeTab === "tailwind" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
              )}
            </button>
          )}
        </div>
      </div>

      {activeTab === "preview" ? (
        <div className="p-6 bg-secondary/30 min-h-50 flex items-center justify-center">
          {preview}
        </div>
      ) : activeTab === "code" ? (
        <CodeBlock code={code} filename={filename} />
      ) : (
        <CodeBlock code={tailwind || ""} filename="styles.css" />
      )}
    </div>
  )
}
