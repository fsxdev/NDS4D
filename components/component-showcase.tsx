"use client"

import { componentsRegistry } from "@/lib/components-registry"
import { ComponentCard } from "@/components/component-card"

// UI Components
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { Terminal, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, ChevronsUpDown, User, CalendarIcon } from "lucide-react"

const previews: Record<string, React.ReactNode> = {
  accordion: (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>Yes. It comes with default styles that match your theme.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It's animated by default using CSS transitions.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),

  "alert-dialog": (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Open Alert Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),

  alert: (
    <Alert className="max-w-md">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
    </Alert>
  ),

  "aspect-ratio": (
    <div className="w-64">
      <AspectRatio ratio={16 / 9} className="bg-secondary rounded-md flex items-center justify-center">
        <span className="text-sm text-muted-foreground">16 / 9</span>
      </AspectRatio>
    </div>
  ),

  avatar: (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/vercel.png" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/fsxdev.png" />
        <AvatarFallback>FX</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  ),

  badge: (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  ),

  breadcrumb: (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),

  "button-group": (
    <div className="flex">
      <Button className="rounded-r-none">Left</Button>
      <Button variant="outline" className="rounded-none border-x-0">Center</Button>
      <Button className="rounded-l-none">Right</Button>
    </div>
  ),

  button: (
    <div className="flex flex-wrap gap-4">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),

  calendar: (
    <Calendar mode="single" className="rounded-md border border-border" />
  ),

  card: (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Your new project will be deployed instantly.</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Deploy</Button>
      </CardFooter>
    </Card>
  ),

  carousel: (
    <div className="flex gap-2 overflow-hidden w-full max-w-sm">
      {[1, 2, 3].map((i) => (
        <div key={i} className="min-w-full rounded-md border border-border bg-card flex items-center justify-center h-32">
          <span className="text-muted-foreground text-sm">Slide {i}</span>
        </div>
      ))}
    </div>
  ),

  chart: (
    <div className="flex items-end gap-2 h-24">
      {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
        <div key={i} className="flex-1 bg-foreground rounded-sm opacity-80 transition-all" style={{ height: `${h}%` }} />
      ))}
    </div>
  ),

  checkbox: (
    <div className="flex flex-col gap-3">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms-demo" defaultChecked />
        <Label htmlFor="terms-demo">Accept terms and conditions</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="newsletter-demo" />
        <Label htmlFor="newsletter-demo">Subscribe to newsletter</Label>
      </div>
    </div>
  ),

  collapsible: (
    <Collapsible className="w-full max-w-sm">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          Toggle content <ChevronsUpDown className="h-4 w-4" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 rounded-md border border-border p-4">
        <p className="text-sm text-muted-foreground">This content can be collapsed and expanded.</p>
      </CollapsibleContent>
    </Collapsible>
  ),

  command: (
    <div className="w-full max-w-sm rounded-md border border-border">
      <Command>
        <CommandInput placeholder="Type a command..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),

  "context-menu": (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 w-64 items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem>Forward</ContextMenuItem>
        <ContextMenuItem>Reload</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),

  dialog: (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>Make changes to your profile here.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-1.5">
            <Label htmlFor="name-demo">Name</Label>
            <Input id="name-demo" placeholder="Your name" />
          </div>
        </div>
        <DialogFooter>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),

  drawer: (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),

  "dropdown-menu": (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),

  empty: (
    <div className="flex flex-col items-center justify-center gap-2 py-8 text-center">
      <div className="rounded-full bg-secondary p-4">
        <User className="h-6 w-6 text-muted-foreground" />
      </div>
      <p className="text-sm font-medium text-foreground">No results found</p>
      <p className="text-xs text-muted-foreground">Try adjusting your search or filters.</p>
    </div>
  ),

  field: (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="field-demo">Username</Label>
        <Input id="field-demo" placeholder="Enter username" />
        <p className="text-xs text-muted-foreground">This is your public display name.</p>
      </div>
    </div>
  ),

  form: (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="form-email">Email</Label>
        <Input id="form-email" type="email" placeholder="you@example.com" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="form-password">Password</Label>
        <Input id="form-password" type="password" placeholder="••••••••" />
      </div>
      <Button className="w-full">Sign In</Button>
    </div>
  ),

  "hover-card": (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@fsxdev</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/fsxdev.png" />
            <AvatarFallback>FX</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">fsxdev</p>
            <p className="text-xs text-muted-foreground">Building NDS4D component library.</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),

  "input-group": (
    <div className="flex w-full max-w-sm">
      <span className="inline-flex items-center rounded-l-md border border-r-0 border-border bg-secondary px-3 text-sm text-muted-foreground">
        https://
      </span>
      <Input className="rounded-l-none" placeholder="example.com" />
    </div>
  ),

  "input-otp": (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),

  input: (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email-demo">Email</Label>
      <Input type="email" id="email-demo" placeholder="Email" />
    </div>
  ),

  item: (
    <div className="w-full max-w-sm rounded-md border border-border divide-y divide-border">
      {["Dashboard", "Settings", "Profile", "Logout"].map((item) => (
        <div key={item} className="flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 transition-colors cursor-pointer">
          <span className="text-sm text-foreground">{item}</span>
        </div>
      ))}
    </div>
  ),

  kbd: (
    <div className="flex flex-wrap gap-3 items-center">
      <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-secondary px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
        ⌘ K
      </kbd>
      <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-secondary px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
        Ctrl + S
      </kbd>
      <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-secondary px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
        Shift + Tab
      </kbd>
    </div>
  ),

  label: (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="label-demo" />
        <Label htmlFor="label-demo">Accept terms and conditions</Label>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="label-input-demo">Your email address</Label>
        <Input id="label-input-demo" type="email" placeholder="Email" />
      </div>
    </div>
  ),

  menubar: (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab</MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Exit</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Zoom In</MenubarItem>
          <MenubarItem>Zoom Out</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),

  "navigation-menu": (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 w-48">
              <NavigationMenuLink className="block text-sm py-1 text-muted-foreground hover:text-foreground">Introduction</NavigationMenuLink>
              <NavigationMenuLink className="block text-sm py-1 text-muted-foreground hover:text-foreground">Installation</NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="text-sm px-3 py-2 text-muted-foreground hover:text-foreground cursor-pointer">
            Components
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),

  pagination: (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
        <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
        <PaginationItem><PaginationEllipsis /></PaginationItem>
        <PaginationItem><PaginationNext href="#" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  ),

  popover: (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">Dimensions</p>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="width-demo">Width</Label>
            <Input id="width-demo" placeholder="100%" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),

  progress: (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Progress value={33} />
      <Progress value={66} />
      <Progress value={100} />
    </div>
  ),

  "radio-group": (
    <RadioGroup defaultValue="option-1" className="flex flex-col gap-2">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-1" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-2" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-3" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  ),

  resizable: (
    <ResizablePanelGroup direction="horizontal" className="w-full max-w-sm rounded-md border border-border h-32">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">Panel A</div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">Panel B</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),

  "scroll-area": (
    <ScrollArea className="h-40 w-full max-w-sm rounded-md border border-border p-4">
      {Array.from({ length: 15 }).map((_, i) => (
        <div key={i} className="text-sm text-muted-foreground py-1 border-b border-border last:border-0">
          Item {i + 1}
        </div>
      ))}
    </ScrollArea>
  ),

  select: (
    <Select>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="cherry">Cherry</SelectItem>
        <SelectItem value="grape">Grape</SelectItem>
      </SelectContent>
    </Select>
  ),

  separator: (
    <div className="w-full max-w-sm">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none text-foreground">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
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
  ),

  sheet: (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>Make changes to your profile here. Click save when done.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="sheet-name">Name</Label>
            <Input id="sheet-name" placeholder="Your name" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),

  sidebar: (
    <div className="flex h-40 w-full max-w-sm rounded-md border border-border overflow-hidden">
      <div className="w-40 border-r border-border bg-card p-3 flex flex-col gap-1">
        {["Dashboard", "Projects", "Settings"].map((item) => (
          <div key={item} className="text-xs text-muted-foreground hover:text-foreground px-2 py-1.5 rounded hover:bg-secondary/50 cursor-pointer transition-colors">
            {item}
          </div>
        ))}
      </div>
      <div className="flex-1 p-3 flex items-center justify-center">
        <span className="text-xs text-muted-foreground">Main content</span>
      </div>
    </div>
  ),

  skeleton: (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-4 w-36" />
      </div>
    </div>
  ),

  slider: (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Slider defaultValue={[33]} max={100} step={1} />
      <Slider defaultValue={[20, 80]} max={100} step={1} />
    </div>
  ),

  sonner: (
    <div className="flex flex-col gap-2 w-full max-w-sm">
      <div className="rounded-md border border-border bg-card px-4 py-3 flex items-center gap-3 shadow-sm">
        <div className="h-2 w-2 rounded-full bg-foreground" />
        <span className="text-sm text-foreground">Event has been created</span>
      </div>
      <div className="rounded-md border border-border bg-card px-4 py-3 flex items-center gap-3 shadow-sm">
        <div className="h-2 w-2 rounded-full bg-destructive" />
        <span className="text-sm text-foreground">Something went wrong</span>
      </div>
    </div>
  ),

  spinner: (
    <div className="flex items-center gap-6">
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-border border-t-foreground" />
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-border border-t-foreground" />
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-foreground" />
    </div>
  ),

  switch: (
    <div className="flex flex-col gap-3">
      <div className="flex items-center space-x-2">
        <Switch id="airplane-demo" />
        <Label htmlFor="airplane-demo">Airplane Mode</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="notifications-demo" defaultChecked />
        <Label htmlFor="notifications-demo">Notifications</Label>
      </div>
    </div>
  ),

  table: (
    <div className="w-full max-w-md rounded-md border border-border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Alice</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Admin</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob</TableCell>
            <TableCell>Inactive</TableCell>
            <TableCell>User</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Charlie</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Editor</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),

  tabs: (
    <Tabs defaultValue="account" className="w-96">
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
  ),

  textarea: (
    <div className="flex flex-col gap-1.5 w-full max-w-sm">
      <Label htmlFor="textarea-demo">Message</Label>
      <Textarea id="textarea-demo" placeholder="Type your message here..." />
    </div>
  ),

  toast: (
    <div className="w-full max-w-sm rounded-md border border-border bg-card px-4 py-3 shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-foreground">Scheduled: Catch up</p>
          <p className="text-xs text-muted-foreground mt-0.5">Friday, February 10, 2023 at 5:57 PM</p>
        </div>
        <Button variant="ghost" size="icon-sm">✕</Button>
      </div>
    </div>
  ),

  toaster: (
    <div className="flex flex-col gap-2 w-full max-w-sm">
      <div className="rounded-md border border-border bg-card px-4 py-3 shadow-sm">
        <p className="text-sm font-medium text-foreground">Your message has been sent.</p>
      </div>
      <div className="rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 shadow-sm">
        <p className="text-sm font-medium text-destructive">Failed to send message.</p>
      </div>
    </div>
  ),

  toggle: (
    <div className="flex gap-2">
      <Toggle aria-label="Bold"><Bold className="h-4 w-4" /></Toggle>
      <Toggle aria-label="Italic"><Italic className="h-4 w-4" /></Toggle>
      <Toggle aria-label="Underline" pressed><Underline className="h-4 w-4" /></Toggle>
    </div>
  ),

  "toggle-group": (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Left"><AlignLeft className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center"><AlignCenter className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right"><AlignRight className="h-4 w-4" /></ToggleGroupItem>
    </ToggleGroup>
  ),

  tooltip: (
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
  ),
}

interface Props {
  sources: Record<string, string>
}

export function ComponentShowcase({ sources }: Props) {
  return (
    <div className="space-y-10">
      {componentsRegistry.map((component) => (
        <div key={component.id} id={component.id}>
          <ComponentCard
            title={component.title}
            description={component.description}
            code={sources[component.id] ?? "// Source not found"}
            filename={`components/ui/${component.filename}`}
            preview={
              previews[component.id] ?? (
                <p className="text-sm text-muted-foreground italic">
                  Preview coming soon for {component.title}
                </p>
              )
            }
          />
        </div>
      ))}
    </div>
  )
}