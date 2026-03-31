# Theme: NFSU - Need for Speed Underground

**Gra:** Need for Speed: Underground (2003, EA Black Box)
**Plik tokenow:** `src/themes/nfsu/styles/tokens.css`
**Komponenty:** `src/themes/nfsu/components/`

---

## Visual Language

### Kolory

| Token                     | Wartosc                  | Zastosowanie                    |
|---------------------------|--------------------------|---------------------------------|
| `--color-nfsu-bg`         | `#07080f`                | Tlo strony                      |
| `--color-nfsu-panel`      | `#0c1422`                | Tlo paneli / kart               |
| `--color-nfsu-panel-dark` | `#080e18`                | Ciemniejszy wariant panelu      |
| `--color-nfsu-border`     | `#1a2f50`                | Domyslne obramowanie            |
| `--color-nfsu-cyan`       | `#00c8f8`                | Glowny akcent (neonowy cyan)    |
| `--color-nfsu-cyan-dim`   | `rgba(0,200,248,0.25)`   | Delikatny cyan (glows, borders) |
| `--color-nfsu-orange`     | `#ff6600`                | Danger / nitro                  |
| `--color-nfsu-red`        | `#cc3300`                | Bledy, stan danger              |
| `--color-nfsu-muted`      | `#5a7898`                | Drugi plan, etykiety            |
| `--color-nfsu-text`       | `#d0e4f8`                | Tekst podstawowy                |
| `--color-nfsu-text-dim`   | `#3a5070`                | Placeholder, disabled           |

### Glowy (box-shadow)

- `--shadow-nfsu-cyan` - sredni glow cyanu na elementach aktywnych
- `--shadow-nfsu-cyan-sm` - delikatny glow cyanu (focus, hover)
- `--shadow-nfsu-cyan-lg` - mocny glow cyanu (selected, accent button)
- `--shadow-nfsu-orange` - glow pomaranczowy (danger, nitro)
- `--shadow-nfsu-orange-lg` - mocny glow pomaranczowy

### Typografia

**Font:** `Barlow Condensed` (Google Fonts)
- Weights: 400 (body), 500 (labels, UI), 600 (headings, buttons)
- Styl UI: `italic uppercase letter-spacing 2-4px` - przyciski, etykiety, headery
- Styl body: weight 400-500, nie italic, czytelny

Etykiety kontrolek: `text-[10px] tracking-[3px] uppercase text-nfsu-cyan/90 font-medium`
Headery: `font-nfsu italic uppercase tracking-[4-6px]`

### Ksztalty

- **Przyciski:** `clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)` - paralelogrm
- **Panele:** Ostre rogi (brak `border-radius`), 1px gradient na gorze (`.panel-top-line`)
- Brak zaokraglonych naroznikow gdziekolwiek

### Utility Classes

| Klasa              | Opis                                        |
|--------------------|---------------------------------------------|
| `.clip-para`       | Paralelogrm dla przyciskow md/lg            |
| `.clip-para-sm`    | Paralelogrm dla przyciskow sm               |
| `.panel-top-line`  | Pseudo-element z gradientem cyan na gorze   |
| `.shadow-nfsu-*`   | Skroty dla box-shadow z tokenow             |

---

## Komponenty

Wszystkie komponenty w `src/themes/nfsu/components/`.
Importuj z `src/themes/nfsu/` (index.ts).

| Komponent    | Opis                                               |
|--------------|----------------------------------------------------|
| `Button`     | variants: accent / primary / secondary / danger    |
| `Panel`      | kontener z opcjonalnym headerem, badge, footer     |
| `StatCard`   | minikafelka z pojedyncza metryka                   |
| `SectionBox` | grupuje tresc z lewym akcentem cyan                |
| `Input`      | text input z label, error, password toggle         |
| `Select`     | dropdown z custom strzalka cyan                    |
| `Checkbox`   | checkbox z cyjanowym stanem zaznaczenia            |
| `Badge`      | inline status (cyan / orange / muted / solid)      |
| `Progress`   | pasek postepu (cyan / orange)                      |
| `Tabs`       | zakladki z cyjanowym aktywnym stanem               |
| `NavMenu`    | pionowe menu nawigacyjne a la main menu NFSU       |
| `Breadcrumb` | sciezka nawigacji                                  |
| `Tooltip`    | dymek nad elementem                                |
| `Modal`      | dialog overlay (controlled)                        |

---

## Inspiracje wizualne

- Ekrany ladowania i menu NFSU1 - ciemne tla, neonowe cyan glowy na bialym tekscie
- HUD podczas wyscigu - paralelogrmy na speedometrze i wskazniku nitro
- Ekran wyboru samochodow - ciemne karty z jasnym obramowaniem i cyan akcentem
- Progres bledny / nitro - pomaranczowe glowy
