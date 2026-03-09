"use client"
import { DocsSidebar } from "@/components/docs-sidebar"
import { DocsHeader } from "@/components/docs-header"
import { ComponentCard } from "@/components/component-card"
import { CodeBlock } from "@/components/code-block"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { componentExamples } from "@/lib/component-examples"
import { Terminal, ArrowRight, Package, Zap, Layers } from "lucide-react"

export default function Home() {
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
                <Button size="lg" variant="outline">
                  View on GitHub
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
                  Explore all available components with live previews, component code, and Tailwind CSS classes.
                </p>
              </div>

              <div className="space-y-10">
              
                <div id="button">
                  <ComponentCard
                    title={componentExamples.button.title}
                    description={componentExamples.button.description}
                    code={componentExamples.button.code}
                    tailwind={componentExamples.button.tailwind}
                    filename={componentExamples.button.filename}
                    preview={
                      <div className="flex flex-wrap gap-4">
                        <Button>Default</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="destructive">Destructive</Button>
                      </div>
                    }
                  />
                </div>

              
                <div id="badge">
                  <ComponentCard
                    title={componentExamples.badge.title}
                    description={componentExamples.badge.description}
                    code={componentExamples.badge.code}
                    tailwind={componentExamples.badge.tailwind}
                    filename={componentExamples.badge.filename}
                    preview={
                      <div className="flex flex-wrap gap-2">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="outline">Outline</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                      </div>
                    }
                  />
                </div>

                
                <div id="card">
                  <ComponentCard
                    title={componentExamples.card.title}
                    description={componentExamples.card.description}
                    code={componentExamples.card.code}
                    tailwind={componentExamples.card.tailwind}
                    filename={componentExamples.card.filename}
                    preview={
                      <Card className="w-87.5">
                        <CardHeader>
                          <CardTitle>Create project</CardTitle>
                          <CardDescription>
                            Deploy your new project in one-click.
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">Your new project will be deployed instantly.</p>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full">Deploy</Button>
                        </CardFooter>
                      </Card>
                    }
                  />
                </div>

               
                <div id="input">
                  <ComponentCard
                    title={componentExamples.input.title}
                    description={componentExamples.input.description}
                    code={componentExamples.input.code}
                    tailwind={componentExamples.input.tailwind}
                    filename={componentExamples.input.filename}
                    preview={
                      <div className="grid w-full max-w-sm gap-1.5">
                        <Label htmlFor="email-demo">Email</Label>
                        <Input type="email" id="email-demo" placeholder="Email" />
                      </div>
                    }
                  />
                </div>

              
                <div id="checkbox">
                  <ComponentCard
                    title={componentExamples.checkbox.title}
                    description={componentExamples.checkbox.description}
                    code={componentExamples.checkbox.code}
                    tailwind={componentExamples.checkbox.tailwind}
                    filename={componentExamples.checkbox.filename}
                    preview={
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms-demo" />
                        <Label htmlFor="terms-demo">Accept terms and conditions</Label>
                      </div>
                    }
                  />
                </div>

               
                <div id="avatar">
                  <ComponentCard
                    title={componentExamples.avatar.title}
                    description={componentExamples.avatar.description}
                    code={componentExamples.avatar.code}
                    tailwind={componentExamples.avatar.tailwind}
                    filename={componentExamples.avatar.filename}
                    preview={
                      <div className="flex gap-4">
                        <Avatar>
                          <AvatarImage src="https://github.com/vercel.png" />
                          <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      </div>
                    }
                  />
                </div>

              
                <div id="alert">
                  <ComponentCard
                    title={componentExamples.alert.title}
                    description={componentExamples.alert.description}
                    code={componentExamples.alert.code}
                    tailwind={componentExamples.alert.tailwind}
                    filename={componentExamples.alert.filename}
                    preview={
                      <Alert className="max-w-md">
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription>
                          You can add components to your app using the CLI.
                        </AlertDescription>
                      </Alert>
                    }
                  />
                </div>

               
                <div id="tabs">
                  <ComponentCard
                    title={componentExamples.tabs.title}
                    description={componentExamples.tabs.description}
                    code={componentExamples.tabs.code}
                    tailwind={componentExamples.tabs.tailwind}
                    filename={componentExamples.tabs.filename}
                    preview={
                      <Tabs defaultValue="account" className="w-100">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="account">Account</TabsTrigger>
                          <TabsTrigger value="password">Password</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account" className="text-sm text-muted-foreground p-4">
                          Make changes to your account here.
                        </TabsContent>
                        <TabsContent value="password" className="text-sm text-muted-foreground p-4">
                          Change your password here.
                        </TabsContent>
                      </Tabs>
                    }
                  />
                </div>

              
                <div id="tooltip">
                  <ComponentCard
                    title={componentExamples.tooltip.title}
                    description={componentExamples.tooltip.description}
                    code={componentExamples.tooltip.code}
                    tailwind={componentExamples.tooltip.tailwind}
                    filename={componentExamples.tooltip.filename}
                    preview={
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline">Hover me</Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Add to library</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    }
                  />
                </div>

               
                <div id="switch">
                  <ComponentCard
                    title={componentExamples.switch.title}
                    description={componentExamples.switch.description}
                    code={componentExamples.switch.code}
                    tailwind={componentExamples.switch.tailwind}
                    filename={componentExamples.switch.filename}
                    preview={
                      <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode-demo" />
                        <Label htmlFor="airplane-mode-demo">Airplane Mode</Label>
                      </div>
                    }
                  />
                </div>

               
                <div id="skeleton">
                  <ComponentCard
                    title={componentExamples.skeleton.title}
                    description={componentExamples.skeleton.description}
                    code={componentExamples.skeleton.code}
                    tailwind={componentExamples.skeleton.tailwind}
                    filename={componentExamples.skeleton.filename}
                    preview={
                      <div className="flex items-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-62.5" />
                          <Skeleton className="h-4 w-50" />
                        </div>
                      </div>
                    }
                  />
                </div>

           
                <div id="separator">
                  <ComponentCard
                    title={componentExamples.separator.title}
                    description={componentExamples.separator.description}
                    code={componentExamples.separator.code}
                    tailwind={componentExamples.separator.tailwind}
                    filename={componentExamples.separator.filename}
                    preview={
                      <div>
                        <div className="space-y-1">
                          <h4 className="text-sm font-medium leading-none text-foreground">
                            Radix Primitives
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            An open-source UI component library.
                          </p>
                        </div>
                        <Separator className="my-4" />
                        <div className="flex h-5 items-center space-x-4 text-sm text-foreground">
                          <div>Blog</div>
                          <Separator orientation="vertical" />
                          <div>Docs</div>
                          <Separator orientation="vertical" />
                          <div>Source</div>
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </section>

        
          <footer className="border-t border-border py-8">
            <div className="max-w-4xl mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-6 h-6 rounded bg-foreground">
                    <span className="text-background font-bold text-[8px]">NDS</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    NDS4D - Neat Dark Styling 4 DEVS
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    GitHub
                  </a>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </a>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Examples
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
