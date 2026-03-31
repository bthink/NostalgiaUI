# NostalgiaUI

**React component library inspired by iconic games from the 90s and 2000s.**

Each theme is a faithful recreation of a game's visual language - its colors, typography, shapes, and glow effects - packaged as a set of ready-to-use React components.

---

## Themes

| Theme | Game | Year | Status | Accent |
|-------|------|------|--------|--------|
| `nfsu` | Need for Speed: Underground | 2003 | Ready | `#00c8f8` cyan |
| `diablo` | Diablo II: Lord of Destruction | 2001 | Planned | `#8b0000` red |
| `halo` | Halo: Combat Evolved | 2001 | Planned | teal/green |
| `kotor` | Knights of the Old Republic | 2003 | Planned | gold/blue |
| `wow` | World of Warcraft (vanilla) | 2004 | Planned | `#f0c040` gold |
| `winxp` | Windows XP | 2001 | Planned | `#316ac5` blue |
| `cs` | Counter-Strike 1.6 | 2000 | Planned | `#4caf50` green |

---

## NFSU Theme

Dark backgrounds, neon cyan glow, parallelogram-cut buttons - straight from the NFS Underground main menu.

**Components included:**

| Component | Description |
|-----------|-------------|
| `Button` | variants: `accent` / `primary` / `secondary` / `danger` |
| `Panel` | container with optional header, badge, and footer |
| `StatCard` | single-metric tile |
| `SectionBox` | content group with cyan left accent |
| `Input` | text input with label, error state, password toggle |
| `Select` | dropdown with custom cyan arrow |
| `Checkbox` | checkbox with cyan checked state |
| `Badge` | inline status: `cyan` / `orange` / `muted` / `solid` |
| `Progress` | progress bar in cyan or orange |
| `Tabs` | tab navigation with cyan active state |
| `NavMenu` | vertical navigation - NFSU main menu style |
| `Breadcrumb` | navigation path |
| `Tooltip` | tooltip on hover |
| `Modal` | controlled overlay dialog |

**Design details:**
- Font: [Barlow Condensed](https://fonts.google.com/specimen/Barlow+Condensed) - italic, uppercase, wide letter spacing
- Buttons: CSS `clip-path` parallelogram shape
- Panels: sharp corners, 1px gradient top line
- Glow effects via layered `box-shadow` tokens

---

## Stack

- **React 19** + **TypeScript**
- **Vite** (dev server + build)
- **Tailwind CSS v4** (CSS-first config, `@theme` tokens)
- **Storybook 10** with a11y + docs addons

---

## Getting Started

```bash
# Install dependencies
npm install

# Dev server (component showcase)
npm run dev

# Storybook
npm run storybook

# Build
npm run build
```

---

## Architecture

Each theme in `src/themes/<id>/` is **fully self-contained**:

```
src/themes/nfsu/
  components/    # Full component implementations
  styles/
    tokens.css   # CSS custom properties (@theme) + utility classes
  meta.ts        # Theme metadata: id, name, game, year, accentColor, font
  index.ts       # Re-exports all components and meta
```

CSS token naming is prefixed by theme ID so all themes can coexist in a single build:

```css
/* nfsu */   --color-nfsu-bg, --color-nfsu-accent
/* diablo */ --color-diablo-bg, --color-diablo-accent
/* halo */   --color-halo-bg, --color-halo-accent
```

The only shared utility is `src/core/lib/cn.ts` (clsx + tailwind-merge).

### Adding a new theme

```bash
cp -r src/themes/_template src/themes/<id>
```

Then fill in `meta.ts`, create `styles/tokens.css` with your token values, implement components using those tokens, and import the token file in `src/styles/base.css`.

Full guide: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)

---

## License

MIT
