export const componentExamples = {
  button: {
    title: "Button",
    description: "Displays a button or a component that looks like a button.",
    code: `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex gap-4">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}`,
    tailwind: `/* Base Button Styles */
.btn {
  @apply inline-flex items-center justify-center gap-2;
  @apply whitespace-nowrap rounded-md text-sm font-medium;
  @apply ring-offset-background transition-colors;
  @apply focus-visible:outline-none focus-visible:ring-2;
  @apply focus-visible:ring-ring focus-visible:ring-offset-2;
  @apply disabled:pointer-events-none disabled:opacity-50;
  @apply h-10 px-4 py-2;
}

/* Variants */
.btn-default { @apply bg-primary text-primary-foreground hover:bg-primary/90; }
.btn-secondary { @apply bg-secondary text-secondary-foreground hover:bg-secondary/80; }
.btn-outline { @apply border border-input bg-background hover:bg-accent hover:text-accent-foreground; }
.btn-ghost { @apply hover:bg-accent hover:text-accent-foreground; }
.btn-destructive { @apply bg-destructive text-destructive-foreground hover:bg-destructive/90; }`,
    filename: "button-demo.tsx",
  },
  badge: {
    title: "Badge",
    description: "Displays a badge or a component that looks like a badge.",
    code: `import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  )
}`,
    tailwind: `/* Base Badge Styles */
.badge {
  @apply inline-flex items-center rounded-full border;
  @apply px-2.5 py-0.5 text-xs font-semibold;
  @apply transition-colors focus:outline-none focus:ring-2;
  @apply focus:ring-ring focus:ring-offset-2;
}

/* Variants */
.badge-default { @apply border-transparent bg-primary text-primary-foreground; }
.badge-secondary { @apply border-transparent bg-secondary text-secondary-foreground; }
.badge-outline { @apply text-foreground; }
.badge-destructive { @apply border-transparent bg-destructive text-destructive-foreground; }`,
    filename: "badge-demo.tsx",
  },
  card: {
    title: "Card",
    description: "Displays a card with header, content, and footer.",
    code: `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CardDemo() {
  return (
    <Card className="w-87.5">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>
          Deploy your new project in one-click.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Your new project will be deployed instantly.</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Deploy</Button>
      </CardFooter>
    </Card>
  )
}`,
    tailwind: `/* Card Container */
.card {
  @apply rounded-lg border border-border bg-card text-card-foreground shadow-sm;
}

/* Card Header */
.card-header {
  @apply flex flex-col space-y-1.5 p-6;
}

/* Card Title */
.card-title {
  @apply text-2xl font-semibold leading-none tracking-tight;
}

/* Card Description */
.card-description {
  @apply text-sm text-muted-foreground;
}

/* Card Content */
.card-content {
  @apply p-6 pt-0;
}

/* Card Footer */
.card-footer {
  @apply flex items-center p-6 pt-0;
}`,
    filename: "card-demo.tsx",
  },
  input: {
    title: "Input",
    description: "Displays a form input field or a component that looks like an input field.",
    code: `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputDemo() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}`,
    tailwind: `/* Input Field */
.input {
  @apply flex h-10 w-full rounded-md border border-input;
  @apply bg-background px-3 py-2 text-sm;
  @apply ring-offset-background;
  @apply file:border-0 file:bg-transparent file:text-sm file:font-medium;
  @apply placeholder:text-muted-foreground;
  @apply focus-visible:outline-none focus-visible:ring-2;
  @apply focus-visible:ring-ring focus-visible:ring-offset-2;
  @apply disabled:cursor-not-allowed disabled:opacity-50;
}

/* Label */
.label {
  @apply text-sm font-medium leading-none;
  @apply peer-disabled:cursor-not-allowed peer-disabled:opacity-70;
}`,
    filename: "input-demo.tsx",
  },
  checkbox: {
    title: "Checkbox",
    description: "A control that allows the user to toggle between checked and not checked.",
    code: `import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">
        Accept terms and conditions
      </Label>
    </div>
  )
}`,
    tailwind: `/* Checkbox */
.checkbox {
  @apply peer h-4 w-4 shrink-0 rounded-sm border border-primary;
  @apply ring-offset-background;
  @apply focus-visible:outline-none focus-visible:ring-2;
  @apply focus-visible:ring-ring focus-visible:ring-offset-2;
  @apply disabled:cursor-not-allowed disabled:opacity-50;
  @apply data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground;
}

/* Checkbox Indicator */
.checkbox-indicator {
  @apply flex items-center justify-center text-current;
}`,
    filename: "checkbox-demo.tsx",
  },
  avatar: {
    title: "Avatar",
    description: "An image element with a fallback for representing the user.",
    code: `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
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
  )
}`,
    tailwind: `/* Avatar Container */
.avatar {
  @apply relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full;
}

/* Avatar Image */
.avatar-image {
  @apply aspect-square h-full w-full;
}

/* Avatar Fallback */
.avatar-fallback {
  @apply flex h-full w-full items-center justify-center;
  @apply rounded-full bg-muted text-sm font-medium;
}`,
    filename: "avatar-demo.tsx",
  },
  alert: {
    title: "Alert",
    description: "Displays a callout for user attention.",
    code: `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  )
}`,
    tailwind: `/* Alert Container */
.alert {
  @apply relative w-full rounded-lg border p-4;
  @apply [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px];
  @apply [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4;
  @apply [&>svg]:text-foreground;
}

/* Alert Title */
.alert-title {
  @apply mb-1 font-medium leading-none tracking-tight;
}

/* Alert Description */
.alert-description {
  @apply text-sm [&_p]:leading-relaxed;
}

/* Alert Variants */
.alert-destructive {
  @apply border-destructive/50 text-destructive dark:border-destructive;
  @apply [&>svg]:text-destructive;
}`,
    filename: "alert-demo.tsx",
  },
  tabs: {
    title: "Tabs",
    description: "A set of layered sections of content displayed one at a time.",
    code: `import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-100">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">
        Change your password here.
      </TabsContent>
    </Tabs>
  )
}`,
    tailwind: `/* Tabs List */
.tabs-list {
  @apply inline-flex h-10 items-center justify-center;
  @apply rounded-md bg-muted p-1 text-muted-foreground;
}

/* Tab Trigger */
.tabs-trigger {
  @apply inline-flex items-center justify-center whitespace-nowrap;
  @apply rounded-sm px-3 py-1.5 text-sm font-medium;
  @apply ring-offset-background transition-all;
  @apply focus-visible:outline-none focus-visible:ring-2;
  @apply focus-visible:ring-ring focus-visible:ring-offset-2;
  @apply disabled:pointer-events-none disabled:opacity-50;
  @apply data-[state=active]:bg-background data-[state=active]:text-foreground;
  @apply data-[state=active]:shadow-sm;
}

/* Tab Content */
.tabs-content {
  @apply mt-2 ring-offset-background;
  @apply focus-visible:outline-none focus-visible:ring-2;
  @apply focus-visible:ring-ring focus-visible:ring-offset-2;
}`,
    filename: "tabs-demo.tsx",
  },
  tooltip: {
    title: "Tooltip",
    description: "A popup that displays information related to an element.",
    code: `import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export function TooltipDemo() {
  return (
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
  )
}`,
    tailwind: `/* Tooltip Content */
.tooltip-content {
  @apply z-50 overflow-hidden rounded-md border bg-popover;
  @apply px-3 py-1.5 text-sm text-popover-foreground shadow-md;
  @apply animate-in fade-in-0 zoom-in-95;
  @apply data-[state=closed]:animate-out data-[state=closed]:fade-out-0;
  @apply data-[state=closed]:zoom-out-95;
  @apply data-[side=bottom]:slide-in-from-top-2;
  @apply data-[side=left]:slide-in-from-right-2;
  @apply data-[side=right]:slide-in-from-left-2;
  @apply data-[side=top]:slide-in-from-bottom-2;
}`,
    filename: "tooltip-demo.tsx",
  },
  skeleton: {
    title: "Skeleton",
    description: "Use to show a placeholder while content is loading.",
    code: `import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-62.5" />
        <Skeleton className="h-4 w-50" />
      </div>
    </div>
  )
}`,
    tailwind: `/* Skeleton */
.skeleton {
  @apply animate-pulse rounded-md bg-muted;
}

/* Common Skeleton Shapes */
.skeleton-circle { @apply rounded-full; }
.skeleton-text { @apply h-4 w-full; }
.skeleton-avatar { @apply h-12 w-12 rounded-full; }
.skeleton-card { @apply h-32 w-full rounded-lg; }`,
    filename: "skeleton-demo.tsx",
  },
  separator: {
    title: "Separator",
    description: "Visually or semantically separates content.",
    code: `import { Separator } from "@/components/ui/separator"

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">
          Radix Primitives
        </h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}`,
    tailwind: `/* Separator Horizontal */
.separator-horizontal {
  @apply h-[1px] w-full shrink-0 bg-border;
}

/* Separator Vertical */
.separator-vertical {
  @apply h-full w-[1px] shrink-0 bg-border;
}`,
    filename: "separator-demo.tsx",
  },
  switch: {
    title: "Switch",
    description: "A control that allows the user to toggle between checked and not checked.",
    code: `import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}`,
    tailwind: `/* Switch Root */
.switch {
  @apply peer inline-flex h-6 w-11 shrink-0 cursor-pointer;
  @apply items-center rounded-full border-2 border-transparent;
  @apply transition-colors;
  @apply focus-visible:outline-none focus-visible:ring-2;
  @apply focus-visible:ring-ring focus-visible:ring-offset-2;
  @apply focus-visible:ring-offset-background;
  @apply disabled:cursor-not-allowed disabled:opacity-50;
  @apply data-[state=checked]:bg-primary data-[state=unchecked]:bg-input;
}

/* Switch Thumb */
.switch-thumb {
  @apply pointer-events-none block h-5 w-5 rounded-full;
  @apply bg-background shadow-lg ring-0 transition-transform;
  @apply data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0;
}`,
    filename: "switch-demo.tsx",
  },
}
