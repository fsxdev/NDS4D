import { DocsSidebar } from "@/components/docs-sidebar"
import { DocsHeader } from "@/components/docs-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getAllComponentSources } from "@/lib/get-component-source"
import { ComponentShowcase } from "@/components/component-showcase"
import { ArrowRight, Package, Zap, Layers } from "lucide-react"
import { AnimatedLogo } from "@/components/animated-logo"

export default function Home() {
  const sources = getAllComponentSources()

  return (
    <div className="min-h-screen bg-background">
      <DocsHeader />
      <div className="h-14" />
      <div className="hidden md:block">
        <DocsSidebar />
      </div>
      <div className="flex">
        <main className="flex-1 min-w-0 md:ml-64">

          <section id="introduction" className="border-b border-border">
            <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
              <Badge variant="outline" className="mb-4">
                Neat Dark Styling 4 DEVS
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                NDS4D Components
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                A collection of accessible, reusable components with dark styling for modern web applications. Copy component code or Tailwind CSS classes directly.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://github.com/fsxdev/NDS4D" target="_blank">View on GitHub</a>
                </Button>
              </div>
            </div>
          </section>

          <section className="border-b border-border bg-secondary/20">
            <div className="max-w-4xl mx-auto px-6 py-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg border border-border bg-card">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <Package className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Copy & Paste</h3>
                  <p className="text-sm text-muted-foreground">
                    Copy component code or Tailwind CSS classes directly into your project.
                  </p>
                </div>
                <div className="p-6 rounded-lg border border-border bg-card">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <Zap className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Fully Customizable</h3>
                  <p className="text-sm text-muted-foreground">
                    Built with Tailwind CSS. Customize colors, spacing, and more.
                  </p>
                </div>
                <div className="p-6 rounded-lg border border-border bg-card">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <Layers className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Accessible</h3>
                  <p className="text-sm text-muted-foreground">
                    Built on Radix UI primitives with full accessibility support.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16" id="components">
            <div className="max-w-4xl mx-auto px-6">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Components</h2>
                <p className="text-muted-foreground">
                  Explore all available components with live previews and source code.
                </p>
              </div>
              <ComponentShowcase sources={sources} />
            </div>
          </section>

          <footer className="border-t border-border py-8">
            <div className="max-w-4xl mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <AnimatedLogo size={28} />
                  <span className="text-sm text-muted-foreground">
                    NDS4D - Neat Dark Styling 4 DEVS
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <a href="https://github.com/fsxdev/NDS4D" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
                </div>
              </div>
            </div>
          </footer>

        </main>
      </div>
    </div>
  )
}