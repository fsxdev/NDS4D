export interface ComponentEntry {
  id: string
  title: string
  description: string
  filename: string
  section: string
  isNew?: boolean
}

export const componentsRegistry: ComponentEntry[] = [

  { id: "button",      title: "Button",      description: "Displays a button or a component that looks like a button.",                      filename: "button.tsx",      section: "Form" },
  { id: "checkbox",    title: "Checkbox",    description: "A control that allows the user to toggle between checked and unchecked states.",   filename: "checkbox.tsx",    section: "Form" },
  { id: "input",       title: "Input",       description: "Displays a form input field for text entry.",                                      filename: "input.tsx",       section: "Form" },
  { id: "input-otp",   title: "Input OTP",   description: "Accessible one-time password input with customizable length.",                    filename: "input-otp.tsx",   section: "Form" },
  { id: "label",       title: "Label",       description: "Renders an accessible label for form controls.",                                   filename: "label.tsx",       section: "Form" },
  { id: "radio-group", title: "Radio Group", description: "A set of checkable buttons where only one can be checked at a time.",              filename: "radio-group.tsx", section: "Form" },
  { id: "select",      title: "Select",      description: "Displays a list of options for the user to pick from.",                            filename: "select.tsx",      section: "Form" },
  { id: "slider",      title: "Slider",      description: "An input where the user selects a value from within a given range.",               filename: "slider.tsx",      section: "Form" },
  { id: "switch",      title: "Switch",      description: "A control that allows the user to toggle between on and off states.",              filename: "switch.tsx",      section: "Form" },
  { id: "textarea",    title: "Textarea",    description: "Displays a multi-line text input field.",                                          filename: "textarea.tsx",    section: "Form" },
  { id: "toggle",      title: "Toggle",      description: "A two-state button that can be either on or off.",                                 filename: "toggle.tsx",      section: "Form" },
  { id: "toggle-group",title: "Toggle Group","description": "A set of two-state buttons that can be toggled on or off.",                     filename: "toggle-group.tsx",section: "Form" },

  // Data Display
  { id: "avatar",      title: "Avatar",      description: "An image element with a fallback for representing the user.",                      filename: "avatar.tsx",      section: "Data Display" },
  { id: "badge",       title: "Badge",       description: "Displays a badge or a component that looks like a badge.",                         filename: "badge.tsx",       section: "Data Display" },
  { id: "calendar",    title: "Calendar",    description: "A date field component that allows users to enter and edit date.",                  filename: "calendar.tsx",    section: "Data Display" },
  { id: "card",        title: "Card",        description: "Displays a card with header, content, and footer sections.",                       filename: "card.tsx",        section: "Data Display" },
  { id: "carousel",    title: "Carousel",    description: "A carousel with motion and swipe built using Embla.",                              filename: "carousel.tsx",    section: "Data Display" },
  { id: "chart",       title: "Chart",       description: "Beautiful chart components built using Recharts.",                                 filename: "chart.tsx",       section: "Data Display" },
  { id: "skeleton",    title: "Skeleton",    description: "Used to show a placeholder while content is loading.",                             filename: "skeleton.tsx",    section: "Data Display" },
  { id: "table",       title: "Table",       description: "A responsive table component.",                                                    filename: "table.tsx",       section: "Data Display" },

  // Feedback
  { id: "alert",       title: "Alert",       description: "Displays a callout for user attention.",                                           filename: "alert.tsx",       section: "Feedback" },
  { id: "progress",    title: "Progress",    description: "Displays an indicator showing the completion progress of a task.",                 filename: "progress.tsx",    section: "Feedback" },
  { id: "sonner",      title: "Sonner",      description: "An opinionated toast component for React.",                                        filename: "sonner.tsx",      section: "Feedback" },
  { id: "spinner",     title: "Spinner",     description: "Displays an animated spinner to indicate loading state.",                          filename: "spinner.tsx",     section: "Feedback" },
  { id: "toast",       title: "Toast",       description: "A succinct message that is displayed temporarily.",                                filename: "toast.tsx",       section: "Feedback" },
  { id: "tooltip",     title: "Tooltip",     description: "A popup that displays information related to an element on hover.",                filename: "tooltip.tsx",     section: "Feedback" },

  // Navigation
  { id: "breadcrumb",       title: "Breadcrumb",        description: "Displays the path to the current resource using a hierarchy of links.", filename: "breadcrumb.tsx",        section: "Navigation" },
  { id: "menubar",          title: "Menubar",           description: "A visually persistent menu common in desktop applications.",            filename: "menubar.tsx",           section: "Navigation" },
  { id: "navigation-menu",  title: "Navigation Menu",   description: "A collection of links for navigating websites.",                        filename: "navigation-menu.tsx",   section: "Navigation" },
  { id: "pagination",       title: "Pagination",        description: "Pagination with page navigation, next and previous links.",             filename: "pagination.tsx",        section: "Navigation" },
  { id: "tabs",             title: "Tabs",              description: "A set of layered sections of content that display one panel at a time.",filename: "tabs.tsx",              section: "Navigation" },

  // Overlay
  { id: "alert-dialog",    title: "Alert Dialog",    description: "A modal dialog that interrupts the user with important content.",          filename: "alert-dialog.tsx",    section: "Overlay" },
  { id: "context-menu",    title: "Context Menu",    description: "Displays a menu to the user — triggered by a right-click.",               filename: "context-menu.tsx",    section: "Overlay" },
  { id: "dialog",          title: "Dialog",          description: "A window overlaid on either the primary window or another dialog.",       filename: "dialog.tsx",          section: "Overlay" },
  { id: "drawer",          title: "Drawer",          description: "A panel that slides out from the edge of the screen.",                    filename: "drawer.tsx",          section: "Overlay" },
  { id: "dropdown-menu",   title: "Dropdown Menu",   description: "Displays a menu to the user — triggered by a button.",                   filename: "dropdown-menu.tsx",   section: "Overlay" },
  { id: "hover-card",      title: "Hover Card",      description: "For sighted users to preview content available behind a link.",           filename: "hover-card.tsx",      section: "Overlay" },
  { id: "popover",         title: "Popover",         description: "Displays rich content in a portal, triggered by a button.",              filename: "popover.tsx",         section: "Overlay" },
  { id: "sheet",           title: "Sheet",           description: "Extends the Dialog component to display content that complements the main content.", filename: "sheet.tsx", section: "Overlay" },

  // Layout
  { id: "accordion",    title: "Accordion",    description: "A vertically stacked set of interactive headings.",                             filename: "accordion.tsx",    section: "Layout" },
  { id: "aspect-ratio", title: "Aspect Ratio", description: "Displays content within a desired ratio.",                                     filename: "aspect-ratio.tsx", section: "Layout" },
  { id: "collapsible",  title: "Collapsible",  description: "An interactive component which expands/collapses a panel.",                    filename: "collapsible.tsx",  section: "Layout" },
  { id: "resizable",    title: "Resizable",    description: "Accessible resizable panel groups and layouts with keyboard support.",          filename: "resizable.tsx",    section: "Layout" },
  { id: "scroll-area",  title: "Scroll Area",  description: "Augments native scroll functionality for custom, cross-browser styling.",      filename: "scroll-area.tsx",  section: "Layout" },
  { id: "separator",    title: "Separator",    description: "Visually or semantically separates content.",                                   filename: "separator.tsx",    section: "Layout" },
  { id: "sidebar",      title: "Sidebar",      description: "A composable, themeable and customizable sidebar component.",                   filename: "sidebar.tsx",      section: "Layout" },

  // Utilities
  { id: "button-group",  title: "Button Group",  description: "Groups multiple buttons together.",                                           filename: "button-group.tsx",  section: "Utilities" },
  { id: "command",       title: "Command",       description: "Fast, composable, unstyled command menu for React.",                          filename: "command.tsx",       section: "Utilities" },
  { id: "empty",         title: "Empty",         description: "Displays a placeholder for empty states.",                                    filename: "empty.tsx",         section: "Utilities" },
  { id: "field",         title: "Field",         description: "A form field wrapper with label and error message.",                          filename: "field.tsx",         section: "Utilities" },
  { id: "form",          title: "Form",          description: "Building forms with React Hook Form and Zod validation.",                     filename: "form.tsx",          section: "Utilities" },
  { id: "input-group",   title: "Input Group",   description: "Groups input elements with addons.",                                          filename: "input-group.tsx",   section: "Utilities" },
  { id: "item",          title: "Item",          description: "A generic list item component.",                                              filename: "item.tsx",          section: "Utilities" },
  { id: "kbd",           title: "KBD",           description: "Displays keyboard shortcut keys.",                                            filename: "kbd.tsx",           section: "Utilities" },
]

export const sections = [...new Set(componentsRegistry.map(c => c.section))]