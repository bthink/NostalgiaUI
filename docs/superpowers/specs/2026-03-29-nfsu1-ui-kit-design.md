# NFSU1 UI Kit - Design Spec

**Date:** 2026-03-29
**Stack:** React + TypeScript + Vite + Tailwind CSS v4

---

## Overview

A React component library styled after Need for Speed Underground 1 (2003).
Dark underground aesthetic: near-black background, electric cyan neon accents, parallelogram-shaped buttons, condensed italic typography.
Intended as a reusable UI kit - components are standalone, composable, and exported from a single entry point.

---

## Visual Language

### Color Palette (design tokens in `globals.css` via `@theme`)

| Token | Value | Usage |
|---|---|---|
| `--color-nfsu-bg` | `#07080f` | Page background |
| `--color-nfsu-panel` | `#0c1422` | Panel/card background |
| `--color-nfsu-panel-dark` | `#080e18` | Darker panel variant |
| `--color-nfsu-border` | `#1a2f50` | Default border |
| `--color-nfsu-cyan` | `#00c8f8` | Primary accent (neon cyan) |
| `--color-nfsu-cyan-dim` | `#00c8f840` | Subtle cyan (borders, glows) |
| `--color-nfsu-orange` | `#ff6600` | Danger / nitro accent |
| `--color-nfsu-muted` | `#5a7898` | Secondary text |
| `--color-nfsu-text` | `#d0e4f8` | Primary text |
| `--color-nfsu-text-dim` | `#3a5070` | Placeholder / disabled text |

Custom shadows:
- `--shadow-nfsu-cyan`: `0 0 20px #00c8f860, 0 0 40px #00c8f820`
- `--shadow-nfsu-cyan-sm`: `0 0 12px #00c8f830`
- `--shadow-nfsu-orange`: `0 0 16px #ff660050`

### Typography

- **Font:** `Barlow Condensed` (Google Fonts) - weights 400, 500, 600, italic variants
- **Style:** italic, uppercase, letter-spacing heavy (2-4px) for UI labels and buttons
- **Body text:** weight 400-500, not italic
- **Min readable weight:** 500 (no 300 - unreadable on dark bg)

### Shape Language

- Buttons use `clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)` - parallelogram cut corners
- Panels use flat rectangular borders with a 1px cyan gradient line on top
- No rounded corners anywhere

---

## Project Structure

```
nfsuUISet/
  src/
    components/ui/
      Button.tsx
      Panel.tsx
      StatCard.tsx
      SectionBox.tsx
      Input.tsx
      Select.tsx
      Checkbox.tsx
      Badge.tsx
      Progress.tsx
      Tabs.tsx
      NavMenu.tsx
      Breadcrumb.tsx
      Tooltip.tsx
      Modal.tsx
    lib/
      cn.ts               # clsx + tailwind-merge utility
    styles/
      globals.css         # @import tailwindcss + @theme tokens + base styles
    App.tsx               # Living showcase of all components
  index.html
  vite.config.ts
  tsconfig.json
  package.json
```

---

## Components

### Button

Variants: `accent` | `primary` | `secondary` | `danger`
Sizes: `sm` | `md` (default) | `lg`

- All variants: parallelogram clip-path, Barlow Condensed italic 600, uppercase, letter-spacing 3-4px
- `accent`: filled `#00c8f8`, dark text, strong glow shadow
- `primary`: transparent bg, `#00c8f8` border + text, subtle inner glow
- `secondary`: transparent bg, `#1a2f50` border, muted text - brightens on hover
- `danger`: transparent bg, `#cc3300` border, orange-red text
- Hover: all variants increase glow intensity
- Disabled state: opacity 40%, no pointer events

Props: `variant`, `size`, `disabled`, `onClick`, `children`, standard HTML button attrs

### Panel

Wrapper container with optional header.

- Border: `1px solid #1a2f50`
- Background: gradient `#0c1422` to `#080e18`
- Top accent: 1px gradient line `transparent -> #00c8f870 -> transparent`
- Optional `header` slot: title (cyan italic uppercase) + optional badge (right-aligned)
- Optional `footer` slot

Props: `header` (string), `badge` (string), `footer` (ReactNode), `children`, `className`

### StatCard

Small tile for displaying a single metric.

- Same border/background/top-line as Panel
- Label: 9px, letter-spacing 3px, cyan 70% opacity, weight 500
- Value: 28px, weight 600, italic, white
- Unit: 11px, muted, weight 500

Props: `label`, `value`, `unit`, `className`

### SectionBox

Groups related content with left cyan accent border.

- Border: `1px solid #0f1e30`, left border `2px solid #00c8f830`
- Background: `#080e18`
- Optional title slot

Props: `title` (string), `children`, `className`

### Input

Text input with label and optional error state.

- Background: `#08101c`, bottom border accent cyan
- Text: `#d0e4f8`, font-size 15px, italic, weight 500
- Label: 10px uppercase, letter-spacing 3px, cyan 90% opacity, weight 500
- Focus: bottom border brightens to full cyan + subtle glow
- Error state: bottom border red, error message below (11px, orange-red, weight 500)
- Password variant: show/hide toggle button on right (eye icon SVG, toggles via CSS classes - no innerHTML)

Props: `label`, `error`, `type` (`text` | `password` | `email` etc.), standard HTML input attrs

### Select

Styled dropdown matching Input appearance.

- Same bg/border/text as Input
- Custom cyan chevron arrow via SVG background-image
- `appearance: none` to remove native arrow

Props: `label`, `options` (`{value, label}[]`), `value`, `onChange`, standard select attrs

### Checkbox

- Box: 16x16px, `#08101c` bg, `#1a2f50` border
- Checked: cyan border + `#00c8f815` bg + 8x8 cyan fill square + glow
- Label: 13px, uppercase, letter-spacing 2px, muted, weight 500

Props: `checked`, `onChange`, `label`, `disabled`

### Badge

Inline status label.

Variants: `cyan` | `orange` | `muted` | `solid`
- `solid`: filled cyan background, dark text - for "New" / important
- `cyan`: outlined cyan
- `orange`: outlined orange
- `muted`: dark outlined, muted text

Props: `variant`, `children`

### Progress

Horizontal bar.

- Track: 4px height, `#0f1e30`
- Fill variants: `cyan` (blue to cyan gradient + glow) | `orange` (dark orange to orange + glow)
- Optional label row above: name left, percentage right (11px, weight 500)

Props: `value` (0-100), `variant` (`cyan` | `orange`), `label`, `showValue` (bool)

### Tabs

- Tab list with bottom border separator
- Active tab: cyan text + 2px cyan underline + subtle text glow
- Inactive: muted, brightens on hover
- Tab body: dark bg panel with border (no top border)

Props: `tabs` (`{key, label, content}[]`), `activeKey`, `onChange`

### NavMenu

Vertical navigation list styled after NFSU1 main menu.

- Items: italic, uppercase, letter-spacing 3px, weight 500
- Active: white text + left 2px cyan border + subtle bg + text glow
- Hover: brightens, left border appears dim
- Optional right arrow indicator

Props: `items` (`{key, label, href?}[]`), `activeKey`, `onSelect`

### Breadcrumb

Navigation path indicator.

- Font: 13px, italic, uppercase, letter-spacing 2px, weight 500
- Inactive items: muted, underline on hover
- Active (last): cyan
- Separator: `/` in dim color

Props: `items` (`{label, href?}[]`) - last item is always active/current

### Tooltip

- Trigger: any ReactNode via `children`
- Tooltip box: dark panel bg, `#1a2f50` border, cyan top border accent
- Text: 12px, weight 400, light blue
- Triangle pointer at bottom
- Positioning: above trigger by default

Props: `content`, `children`

### Modal

Dialog overlay.

- Overlay: `rgba(3,5,12,0.85)`
- Modal box: Panel appearance (border, gradient bg, cyan top line)
- Header: title (cyan italic) + close button (x)
- Body: 14px, weight 400, muted blue-gray
- Footer: right-aligned button row
- Controlled (open/onClose props) - no internal state

Props: `open`, `onClose`, `title`, `children` (body), `footer` (ReactNode)

---

## `cn.ts` Utility

```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
```

---

## `globals.css` Structure

```css
@import 'tailwindcss';

@theme {
  --color-nfsu-bg: #07080f;
  /* ... all tokens ... */
  --font-nfsu: 'Barlow Condensed', 'Arial Narrow', Arial, sans-serif;
  --shadow-nfsu-cyan: 0 0 20px #00c8f860, 0 0 40px #00c8f820;
}

@layer base {
  body {
    background-color: var(--color-nfsu-bg);
    font-family: var(--font-nfsu);
    color: var(--color-nfsu-text);
  }
}
```

---

## App.tsx Showcase

Single page rendering all components in sections, matching the mockup layout.
No routing needed. Serves as living documentation.

---

## Dependencies

- `react` + `react-dom`
- `typescript`
- `vite`
- `tailwindcss` v4
- `clsx`
- `tailwind-merge`
- Google Fonts: Barlow Condensed (400, 500, 600 + italic variants) via `<link>` in `index.html`

---

## Out of Scope

- No animations/transitions beyond CSS `transition` on hover
- No dark/light mode toggle (always dark)
- No Storybook
- No unit tests
- No npm publish
