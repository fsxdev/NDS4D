"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  filename?: string
  language?: string
  className?: string
}

export function CodeBlock({ code, filename, language = "tsx", className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // syntax highlighting.
  const highlightCode = (code: string) => {
    return code
      .split("\n")
      .map((line, i) => {
        let highlighted = line
          // comments
          .replace(/(\/\/.*$)/gm, '<span class="text-code-comment">$1</span>')
          .replace(/(\/\*[\s\S]*?\*\/)/gm, '<span class="text-code-comment">$1</span>')
          // strings
          .replace(/("[^"]*")/g, '<span class="text-code-string">$1</span>')
          .replace(/('[^']*')/g, '<span class="text-code-string">$1</span>')
          .replace(/(`[^`]*`)/g, '<span class="text-code-string">$1</span>')
          // keywords
          .replace(
            /\b(import|export|from|const|let|var|function|return|if|else|for|while|class|extends|new|this|async|await|default|interface|type)\b/g,
            '<span class="text-code-keyword">$1</span>'
          )
          // jsx tags
          .replace(/(&lt;\/?)(\w+)/g, '$1<span class="text-code-function">$2</span>')
          .replace(/(<\/?)(\w+)(?=[\s>])/g, '$1<span class="text-code-function">$2</span>')

        return `<span class="text-muted-foreground select-none mr-4">${String(i + 1).padStart(2, " ")}</span>${highlighted}`
      })
      .join("\n")
  }

  return (
    <div className={cn("rounded-lg border border-border bg-card overflow-hidden", className)}>
      {filename && (
        <div className="flex items-center justify-between border-b border-border px-4 py-2 bg-secondary/50">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground font-mono">{filename}</span>
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      )}
      <div className="relative">
        {!filename && (
          <button
            onClick={copyToClipboard}
            className="absolute right-3 top-3 flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors bg-secondary/80 px-2 py-1 rounded"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        )}
        <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
          <code
            className="font-mono"
            dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
          />
        </pre>
      </div>
    </div>
  )
}
