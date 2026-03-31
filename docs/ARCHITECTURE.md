# NostalgiaUI - Architektura

Biblioteka zestawow komponentow React inspirowanych grami z lat 90 i 2000.
Stack: **React 19 + TypeScript + Vite + Tailwind CSS v4**

---

## Struktura folderow

```
src/
  core/
    lib/
      cn.ts                   # clsx + tailwind-merge (wspoldzielone przez wszystkie theme-y)

  themes/
    nfsu/                     # Need for Speed Underground (2003) - GOTOWY
      components/             # Pelne implementacje komponentow
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
      styles/
        tokens.css            # CSS tokeny (@theme) + utility classes specificzne dla theme
      meta.ts                 # Metadata: id, name, game, year, accentColor, font
      index.ts                # Re-export wszystkich komponentow i meta

    _template/                # SZABLON - kopiuj przy tworzeniu nowego theme
      meta.ts
      index.ts

    diablo/                   # PLACEHOLDER - Diablo II (2000)
    halo/                     # PLACEHOLDER - Halo: Combat Evolved (2001)
    kotor/                    # PLACEHOLDER - KOTOR (2003)
    wow/                      # PLACEHOLDER - World of Warcraft (2004)
    winxp/                    # PLACEHOLDER - Windows XP (2001)
    cs/                       # PLACEHOLDER - Counter-Strike (2000)

  styles/
    base.css                  # @import tailwindcss + @import aktywnego theme/tokens.css + body globals

  App.tsx                     # Dev showcase - renderuje wszystkie komponenty aktywnego theme
  main.tsx                    # Entry point - importuje styles/base.css

docs/
  ARCHITECTURE.md             # Ten plik
  themes/
    nfsu.md                   # Visual language NFSU (kolory, typografia, ksztalty)
    diablo.md                 # (do stworzenia)
    ...

  superpowers/
    specs/                    # Specyfikacje projektowe
    plans/                    # Plany implementacji
```

---

## Zasady projektowania

### Kazdy theme jest samodzielny

Kazdy theme w `src/themes/<id>/` zawiera:
- **wlasne komponenty** - pelna implementacja, nie dziedziczenie z bazy
- **wlasne tokeny CSS** - prefixowane nazwą theme (np. `--color-nfsu-*`, `--color-diablo-*`)
- **wlasne utility classes** - w bloku `@layer utilities` w `tokens.css`
- **meta.ts** - identyfikator i opis theme

Dzieki temu kazdy theme moze miec radykalnie inny wyglad (zaokraglone rogi vs. ostre katy, glow vs. nie, etc.).

### Wspoldzielone utility

`src/core/lib/cn.ts` - jedyne wspoldzielone narzedzie. Kazdy komponent importuje z `../../../core/lib/cn`.

### CSS tokeny - konwencja nazewnictwa

Prefix tokenow = id theme. Przykladowo:

```css
/* nfsu */
--color-nfsu-bg, --color-nfsu-accent, --font-nfsu

/* diablo */
--color-diablo-bg, --color-diablo-accent, --font-diablo

/* halo */
--color-halo-bg, --color-halo-accent, --font-halo
```

Dzieki prefixom wszystkie theme-y moga wspolistniec w jednym build.

---

## Jak dodac nowy theme

### 1. Skopiuj template

```bash
cp -r src/themes/_template src/themes/<id>
```

### 2. Wypelnij meta.ts

```ts
export const diabloMeta = {
  id: 'diablo',
  name: 'Diablo II',
  game: 'Diablo II: Lord of Destruction',
  year: 2001,
  description: 'Gothic dark fantasy: stone textures, blood red accents, gothic serif typography.',
  accentColor: '#8b0000',
  font: 'Cinzel',
} as const
```

### 3. Stworz tokens.css

```css
@theme {
  --color-diablo-bg: #0a0604;
  --color-diablo-accent: #8b0000;
  /* ... */
}

@layer utilities {
  /* utility classes specyficzne dla diablo */
}
```

### 4. Zaimplementuj komponenty

Skopiuj komponenty z `themes/nfsu/components/` jako punkt startowy,
zmodyfikuj klasy Tailwind zeby uzywaly tokenow `diablo-*`.

Minimalny zestaw komponentow:
- `Button` (variants: primary, secondary, danger)
- `Panel` (kontener z headerem)
- `Input` + `Select` + `Checkbox`
- `Badge` + `Progress`

### 5. Zaktualizuj index.ts

```ts
export { Button } from './components/Button'
// ...
export { diabloMeta as meta } from './meta'
```

### 6. Podlacz tokeny w base.css

```css
@import '../themes/diablo/styles/tokens.css';
```

### 7. Zaktualizuj App.tsx

Dodaj import komponentow Diablo i stwórz sekcje showcase.

### 8. Stworz docs/themes/diablo.md

Opisz visual language: kolory, typografie, ksztalty, inspiracje.

---

## Planowane zestawy

| ID     | Gra                              | Rok  | Status      | Accent      |
|--------|----------------------------------|------|-------------|-------------|
| nfsu   | Need for Speed: Underground      | 2003 | Gotowy      | Cyan #00c8f8|
| diablo | Diablo II: Lord of Destruction   | 2001 | Planowany   | Red #8b0000 |
| halo   | Halo: Combat Evolved             | 2001 | Planowany   | Teal/Green  |
| kotor  | Knights of the Old Republic      | 2003 | Planowany   | Gold/Blue   |
| wow    | World of Warcraft (vanilla)      | 2004 | Planowany   | Gold #f0c040|
| winxp  | Windows XP                       | 2001 | Planowany   | Blue #316ac5|
| cs     | Counter-Strike 1.6               | 2000 | Planowany   | Green #4caf50|

---

## Dev workflow

```bash
npm run dev     # vite dev server - otwiera App.tsx showcase
npm run build   # build produkcyjny
```

Showcase w `App.tsx` renderuje wszystkie komponenty aktywnego theme.
Przy wiekszej liczbie theme-ow warto dodac przelacznik theme w App.tsx.
