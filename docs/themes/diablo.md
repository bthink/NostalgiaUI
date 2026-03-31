# Theme: Diablo — Diablo II: Lord of Destruction

**Gra:** Diablo II: Lord of Destruction (2001, Blizzard North)
**Plik tokenow:** `src/themes/diablo/styles/tokens.css`
**Komponenty:** `src/themes/diablo/components/`

---

## Visual Language

### Kolory

| Token                        | Wartosc                  | Zastosowanie                        |
|------------------------------|--------------------------|-------------------------------------|
| `--color-diablo-bg`          | `#0a0604`                | Tlo strony (prawie czarne, ciepłe)  |
| `--color-diablo-panel`       | `#1a130c`                | Tlo paneli — ciemny kamien          |
| `--color-diablo-panel-dark`  | `#100c07`                | Ciemniejszy wariant panelu          |
| `--color-diablo-border`      | `#4a3020`                | Domyslne obramowanie (brunatne)     |
| `--color-diablo-border-light`| `#7a5838`                | Aktywne obramowanie, hover          |
| `--color-diablo-gold`        | `#c8a84b`                | Glowny akcent — zloto               |
| `--color-diablo-gold-dim`    | `rgba(200,168,75,0.22)`  | Delikatne zloto (glows, borders)    |
| `--color-diablo-gold-bright` | `#e8cc78`                | Jasniejsze zloto (wartosci, hover)  |
| `--color-diablo-red`         | `#8b1010`                | Czerwien — zycie, danger            |
| `--color-diablo-red-bright`  | `#cc2020`                | Jasniejsza czerwien (hover)         |
| `--color-diablo-blue`        | `#2244aa`                | Niebieski — mana                    |
| `--color-diablo-text`        | `#c8b078`                | Tekst podstawowy (pergamin/zloto)   |
| `--color-diablo-text-bright` | `#eadaaa`                | Jasniejszy tekst, hover             |
| `--color-diablo-text-dim`    | `#5a4530`                | Drugi plan, placeholder, disabled   |

### Cienie (box-shadow)

- `--shadow-diablo-stone` — inset: wklęsłość kamienia, symuluje wygrawerowanie
- `--shadow-diablo-raised` — wypukłosc: przycisk lezy "na" kamieniu
- `--shadow-diablo-gold` — delikatny glow złota (focus, accent button)
- `--shadow-diablo-gold-lg` — mocny glow złota (hover na accent)
- `--shadow-diablo-red` — glow czerwieni (danger, checkbox zaznaczony)

### Typografia

**Font:** `Cinzel` (Google Fonts) — najbliższy webowy odpowiednik Exocet (oryginalna czcionka Diablo).

- Weights: 400 (body), 500 (etykiety, UI), 600 (headery, przyciski)
- Styl UI: `uppercase letter-spacing 2-3px` — BEZ italic (w przeciwienstwie do NFSU)
- Rozmiary: 9-10px (mikroetykiety), 12-14px (UI), 26px+ (wartosci w StatCard)

Etykiety kontrolek: `text-[10px] tracking-[3px] uppercase text-diablo-gold/80 font-medium font-diablo`
Headery paneli: `font-diablo uppercase tracking-[3px] text-[12px] text-diablo-gold`

### Kształty

- **Przyciski:** Prostokąty z ostrymi rogami (brak `border-radius`, brak clip-path)
- **Panele:** Podwójne obramowanie (`border-2`), subtelna zlota linia u góry (`.panel-diablo-top`)
- **Efekt kamienia:** `.stone-inset` — inset shadow symulujący wgłębienie w kamieniu
- **Efekt wypukłości:** `.stone-raised` — dla przycisków leżących "na" powierzchni
- Brak zaokrąglonych narożników gdziekolwiek

### Utility Classes

| Klasa                 | Opis                                                   |
|-----------------------|--------------------------------------------------------|
| `.stone-inset`        | Inset shadow — efekt wgłębionego kamienia              |
| `.stone-raised`       | Box-shadow — efekt wypukłego kamienia (przyciski)      |
| `.gold-divider`       | Pseudo-element ::after z gradientem złota na dole      |
| `.panel-diablo-top`   | Pseudo-element ::before z gradientem złota na górze    |
| `.shadow-diablo-*`    | Skróty dla box-shadow z tokenów                        |

---

## Komponenty

Wszystkie komponenty w `src/themes/diablo/components/`.
Importuj z `src/themes/diablo/` (index.ts).

| Komponent    | Opis                                                    |
|--------------|---------------------------------------------------------|
| `Button`     | variants: accent / primary / secondary / danger         |
| `Panel`      | kontener z headerem, badge, footer — styl kamiennej ramki |
| `StatCard`   | minikafelka z wartością atrybutu (Strength, Vitality…)  |
| `SectionBox` | grupuje treść z lewym złotym akcentem                   |
| `Input`      | pole tekstowe z etykietą, błędem, password toggle       |
| `Select`     | dropdown z złotą strzałką                               |
| `Checkbox`   | kamienne pole z czerwonym checkmarkiem                  |
| `Badge`      | inline status (gold / red / muted / solid)              |
| `Progress`   | pasek postępu (life / mana / experience)                |
| `Tabs`       | zakładki ze złotym aktywnym stanem                      |
| `NavMenu`    | pionowe menu nawigacyjne a la main menu Diablo II       |
| `Breadcrumb` | ścieżka nawigacji ze złotym aktywnym elementem          |
| `Tooltip`    | kamiennyobjaśniający dymek nad elementem                |
| `Modal`      | dialog overlay (controlled) — styl kamiennego okna      |

### Progress — warianty

| Variant        | Kolor wypełnienia | Zastosowanie           |
|----------------|-------------------|------------------------|
| `life`         | Czerwony gradient | Pasek zdrowia          |
| `mana`         | Niebieski gradient| Pasek many             |
| `experience`   | Złoty gradient    | Pasek doświadczenia    |

### Badge — warianty

| Variant  | Wygląd                               | Zastosowanie                   |
|----------|--------------------------------------|--------------------------------|
| `solid`  | Złote tło, czarny tekst              | Set Item, unikalne            |
| `gold`   | Przezroczyste złoto, złoty tekst     | Unique, Rare                  |
| `red`    | Przezroczyste czerwone tło           | Cursed, Ethereal, Hardcore     |
| `muted`  | Bez tła, szary tekst                 | Normal, locked                 |

---

## Inspiracje wizualne

- **Ekran ekwipunku** — kamienne tło z siatką komórek, brunatne obramowania, złote nagłówki zakładek (I / II)
- **Ekran postaci (Character Screen)** — złoty tekst atrybutów na ciemnym tle, czerwony przycisk z krzyżem do przydzielania punktów
- **Options Screen (D2R)** — prostokątne przyciski Cancel / Default / Accept z ozdobnymi narożnikami i złotym tekstem Cinzel
- **Dolna belka HUD** — ciemne panele z coin icon, licznik złota (nawiązanie: `StatCard`)
- **Czcionka Exocet** — gotycki serif z małymi kapitelikami, oddany przez Cinzel
- **Paleta** — prawie czarne tło z ciepłym odcieniem (#0a0604), brunatno-złote obramowania, krew czerwona i mana niebieska jako jedyne kolory funkcjonalne
