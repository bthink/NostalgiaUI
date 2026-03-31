# NostalgiaUI

Biblioteka komponentow React inspirowanych grami z lat 90/2000.
Stack: React 19 + TypeScript + Vite + Tailwind CSS v4.

Pelna dokumentacja struktury: **docs/ARCHITECTURE.md**

## Kluczowe zasady

- Kazdy theme w `src/themes/<id>/` jest **samodzielny** - wlasne komponenty, wlasne tokeny CSS
- Tokeny CSS prefixowane ID theme: `--color-nfsu-*`, `--color-diablo-*`, itp.
- Wspoldzielona utility: `src/core/lib/cn.ts` - importuj z `../../../core/lib/cn`
- Nowy theme: kopiuj `src/themes/_template/`, przeczytaj docs/ARCHITECTURE.md

## Aktywny theme w dev

`src/styles/base.css` - tu podmien `@import` zeby zmienic aktywny theme w showcase.

## Uruchamianie

```bash
npm run dev    # dev server
npm run build  # build
```
