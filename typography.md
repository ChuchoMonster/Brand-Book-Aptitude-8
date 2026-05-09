# Brand Book: Aptitude 8 — Typography

Source: https://aptitude8.com
Extracted: 2026-05-09

## ⚠ Inconsistencies

- **Two display fonts coexist** — hero h1 uses Roobert (paid), section h1/h2/h3 use Plus Jakarta Display.
- **Plus Jakarta Display declared as `serif`** in font-family, but rendering as sans. Wrong fallback declaration.
- **`<h3>` ships in `georgia, palatino`** — case-study card title is georgia serif at 33px / 500. **Only serif on the page.** Either commit or remove.
- **Hero h1 letter-spacing is `0.2px` positive** — barely perceptible. Either drop to normal or push negative for confidence.
- **Body letter-spacing `0.4px` everywhere** — reads loose at 16-17px sans. Tighten.
- **Footer h6 wears yellow** — sole non-CTA use of the brand color. Reserve yellow for CTAs only.
- **One declared token** — `--primary-color`. No typography tokens.
- **Eyebrow tracked at 6px = 0.4em** — extreme; brand-distinctive when used.

## Type Scale

| Role | Tag | Font | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|---|
| display | h1 | Roobert | 61.2px | 700 | 1.20 | 0.2px |
| display-alt | h1 | Plus Jakarta Display | 56px | 700 | 1.10 | 0.2px |
| h2 | h2 | Plus Jakarta Display | 42px | 700 | 1.15 | normal |
| case-h3 (LEAK?) | h3 | Georgia | 33px | 500 | 1.25 | normal |
| h4 | h4 | Plus Jakarta Display | 30px | 500 | 0.93 | normal |
| h4-mid | h4 | Plus Jakarta Display | 22px | 500 | 1.27 | normal |
| eyebrow | h5 | Plus Jakarta Display | 12px | 500 | 1.67 | 6px (uppercase) |
| lead | p, a | Plus Jakarta Sans | 17px | 400-500 | 1.88 | 0.4px |
| body | p, a | Plus Jakarta Sans | 16px | 400 | 1.69 | -0.1px |
| small | p, h6 | Plus Jakarta Sans | 12px | 400 | 2.25 | 0.4px |

### Web fonts
- **Roobert** (paid, Displaay Type Foundry) — license before shipping. Free sub: **Bricolage Grotesque**.
- **Plus Jakarta Display / Sans** (free Google) — everything else.
- **Georgia** (system) — case study titles only.

## Recommendations
- License Roobert or substitute Bricolage Grotesque.
- Drop the wrong `serif` fallback in Plus Jakarta declaration.
- Either commit to Georgia as editorial accent or remove.
- Tighten body letter-spacing to `normal`.
- Codify a token layer.
