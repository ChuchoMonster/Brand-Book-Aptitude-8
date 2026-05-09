# Brand Book: Aptitude 8 — Colors

Source: https://aptitude8.com
Extracted: 2026-05-09

## ⚠ Inconsistencies

- **One declared brand token** — `--primary-color: #FFD131`. The rest is hardcoded.
- **Body text color is lavender-tinted** (`#D5D6E5`) — deliberate softening of the dark surface, but never declared as a token.
- **Two near-identical grays** for muted text (`#D5D6E5` vs `#8C8D94`).
- **Yellow `#FFD131` does triple duty** — CTA bg, footer column-head text, accent eyebrow. Reserve for CTAs only.
- **Surface dark has a warm purple tint** (~`#14141C`) but isn't declared.
- **Button text on yellow is `#141418`** — near-black, not pure black.

## Palette

**Dark surface + signature yellow.** Yellow is *the* identity. Everything else supports.

### Primary
| Token | Hex | Usage |
|---|---|---|
| `accent` | `#FFD131` | CTAs only |

### Neutral
| Token | Hex | Usage |
|---|---|---|
| `neutral-0` | `#FFFFFF` | Headings on dark |
| `neutral-200` | `#D5D6E5` | Lavender-tinted body — brand-distinctive |
| `neutral-500` | `#8C8D94` | Muted secondary |
| `neutral-1000` | `#141418` | Text on yellow CTA |

### Surface
| Token | Hex | Usage |
|---|---|---|
| `surface-dark` | `#14141C` | Page bg (warm purple tint) |
| `surface-mid` | `#1E1E2A` | Card surfaces |
| `surface-deeper` | `#0B0B12` | Footer / contrast |

## Recommended 6-token system
1. `accent` `#FFD131`
2. `neutral-0` `#FFFFFF`
3. `neutral-200` `#D5D6E5`
4. `neutral-500` `#8C8D94`
5. `neutral-1000` `#141418`
6. `surface-dark` `#14141C`

The lavender body color (`#D5D6E5`) is the brand's secret weapon — it's what makes the dark surface feel premium instead of generic-saas-dark. Keep it.
