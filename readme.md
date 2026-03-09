<div align="center">

```
███╗   ██╗██████╗ ███████╗██╗  ██╗██████╗
████╗  ██║██╔══██╗██╔════╝██║  ██║██╔══██╗
██╔██╗ ██║██║  ██║███████╗███████║██║  ██║
██║╚██╗██║██║  ██║╚════██║╚════██║██║  ██║
██║ ╚████║██████╔╝███████║     ██║██████╔╝
╚═╝  ╚═══╝╚═════╝ ╚══════╝     ╚═╝╚═════╝
```

**Neat Dark Styling 4 Devs**

[![Version](https://img.shields.io/badge/version-1.0.0-white?style=flat-square&labelColor=0a0a0a)](.)
[![License](https://img.shields.io/badge/license-MIT--Commons--Clause-white?style=flat-square&labelColor=0a0a0a)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-white?style=flat-square&labelColor=0a0a0a&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-4-white?style=flat-square&labelColor=0a0a0a&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-white?style=flat-square&labelColor=0a0a0a)](https://ui.shadcn.com)

<br/>

*Copy. Paste. Ship dark.*

<br/>

</div>

---

## ◼ What is NDS4D?

NDS4D is a **dark-first component library** for developers who want production-ready UI without the setup tax. Built on top of shadcn/ui and Radix primitives — every component is accessible, themeable, and ready to drop into any Next.js project.

No npm install. No config hell. Just copy the code.

---

## ◼ Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.1 |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui + Radix UI |
| Language | TypeScript |
| Font | Geist + Geist Mono |

---

## ◼ Components

<table>
<tr><td><strong>Form</strong></td><td>Button · Checkbox · Input · Switch</td></tr>
<tr><td><strong>Data Display</strong></td><td>Avatar · Badge · Card · Skeleton</td></tr>
<tr><td><strong>Feedback</strong></td><td>Alert · Tooltip</td></tr>
<tr><td><strong>Navigation</strong></td><td>Tabs</td></tr>
<tr><td><strong>Layout</strong></td><td>Separator</td></tr>
</table>

Each component ships with:
- ✦ Live preview
- ✦ Component source code
- ✦ Tailwind CSS classes
- ✦ Copy-paste ready

---

## ◼ Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/nds4d.git
cd nds4d

# 2. Install dependencies
npm install

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start copying.

---

## ◼ Usage

Browse to any component, hit **copy**, paste into your project. That's it.

For shadcn/ui setup in your own project:

```bash
npx shadcn@latest init
```

Then add individual components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add badge
# etc.
```

---

## ◼ Project Structure

```
nds4d/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   └── page.tsx            # Main docs page
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   ├── component-card.tsx  # Preview + code card
│   ├── code-block.tsx      # Syntax highlighted block
│   ├── docs-header.tsx     # Fixed top nav
│   └── docs-sidebar.tsx    # Collapsible sidebar
├── lib/
│   └── component-examples.ts  # All component code/metadata
└── public/
    ├── manifest.json
    ├── browserconfig.xml
    └── favicon-*/          # Full favicon set
```

---

## ◼ PWA

NDS4D ships as a Progressive Web App out of the box.

- `manifest.json` — installable on mobile/desktop
- `browserconfig.xml` — Windows tile support
- Full favicon set (57px → 512px)
- Dark `theme_color` (`#0a0a0a`)

---

## ◼ License

```
MIT License + Commons Clause

Copyright (c) 2025 NDS4D

Permission is granted to use this software freely in personal and
commercial projects. However, you may NOT sell, rebrand, or republish
this project or any substantial portion of it as your own product
or service without explicit written permission from the author.
```

See [LICENSE](./LICENSE) for full terms.

---

<div align="center">

<br/>

```
built in the dark  ·  for devs who ship
```

<br/>

**[⬆ back to top](#)**

</div>
