# Technical Reference — Work About Work

This document is for developers and designers modifying or extending the tool. For the project overview, see [README.md](./README.md).

---

## Running the tool

Open `index.html` in any browser. The tool is a single self-contained file with no dependencies, no build step, and no backend. Everything runs client-side.

---

## File structure

```
workaboutwork/
├── index.html          # The complete tool — both Calculator and Audit modes
├── README.md           # Project overview for non-technical readers
├── TECHNICAL.md        # This file
└── docs/
    ├── 01_Framework_Document.pdf
    ├── 02_Calculator_Methodology.pdf
    ├── 03_Question_Bank.pdf
    ├── 04_Recommendation_Logic_Map.pdf
    ├── 05_IO_Specification.pdf
    └── 06_AI_Workflow_Methodology.pdf
```

---

## Architecture

The tool is a stateless client-side computation. No data is stored or transmitted.

- **Calculator mode:** Four sliders fire `oninput` events. All outputs recalculate on every slider movement — there is no submit button.
- **Audit mode:** Five questions scored 0–3 each. Total score determines band. Band determines recommendation set. No per-question routing.
- **Mode switching:** Tab toggle in the header. Slider values are preserved when switching modes.

---

## Formula chain

Full documentation in `docs/02_Calculator_Methodology.pdf`, Section 5. Summary:

```
Step 0:  admin_pct = (admin_hrs / 40) * 100
Step 1:  cost_per_hour = avg_salary / (40 * 48)
Step 2:  total_hours = team_size * 40 * 48
Step 3:  admin_hours = total_hours * (admin_pct / 100)
Step 4:  admin_cost = admin_hours * cost_per_hour           [OUTPUT 1]
Step 5:  hours_pp_week = (admin_hours / team_size) / 48     [OUTPUT 2]
Step 6:  reclaim_hours = admin_hours * (adoption_pct/100) * 0.60  [OUTPUT 3]
Step 7:  reclaim_cost = reclaim_hours * cost_per_hour       [OUTPUT 4]
```

Fixed constants: `weeks_per_year = 48`, `hours_per_week = 40`. Do not expose these as configurable inputs without a methodology review.

---

## Brand and colour system

```
Magenta (primary accent):   #C4006A
Sidebar background:         #EAEAEA
Body text:                  #111111
Secondary text:             #545454
Links:                      #0463C0
Rule lines:                 #BBBBBB
Pink tint (reclaim cells):  #FFF5FA
Green (opportunity):        #006B2B
```

**Score band colours:**

| Band      | Score | Colour        | Hex     |
| --------- | ----- | ------------- | ------- |
| High Risk | 10–15 | Full magenta  | #C4006A |
| Moderate  | 5–9   | Light magenta | #E8779F |
| Healthy   | 0–4   | Green         | #006B2B |

Band colours apply to: banner label text, banner title text, score ring stroke, score ring number, legend pill backgrounds. Banner background (#FFF5FA) and left border (#C4006A) are identical across all three bands.

**Semantic colour logic:**

- Magenta: cost / problem / overhead
- Green: opportunity / reclaim
- Never use amber — it is not in the brand palette

**Typography:** Georgia serif for headings and large numbers. Arial for all body copy and labels.

---

## Audit scoring

```
Questions:  5
Options:    4 per question (scored 0, 1, 2, 3)
Max score:  15
Direction:  0 = healthiest, 3 = highest defect

Score bands:
  0–4:   Healthy   — 3 optimisation recommendations
  5–9:   Moderate  — 3 targeted fix recommendations
  10–15: High Risk — 3 systemic redesign recommendations
```

Full question text, scoring rationale, and recommendation content in `docs/03_Question_Bank.pdf` and `docs/04_Recommendation_Logic_Map.pdf`.

---

## How to make changes

**The rule:** documentation first, code second.

Every element of this tool traces back to a source document. Before changing anything in the HTML, update the relevant document first. This ensures the documentation set and the tool stay in sync.

| If you want to change...                   | Update this document first        |
| ------------------------------------------ | --------------------------------- |
| Calculator inputs or formula               | `02_Calculator_Methodology.pdf`   |
| Input ranges, defaults, or display formats | `05_IO_Specification.pdf`         |
| Audit questions or scoring                 | `03_Question_Bank.pdf`            |
| Recommendations                            | `04_Recommendation_Logic_Map.pdf` |
| Colours, layout, or formatting             | `05_IO_Specification.pdf`         |

---

## Change log (v1.0 to current)

| #   | Change                                                                                                                                                                           | Where applied                |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| 001 | Admin load slider changed from percentage to hours per week (2–28 hrs, default 14 hrs). Formula: `admin_pct = (admin_hrs / 40) * 100`                                            | HTML + IO Spec + Methodology |
| 002 | Hours per person per week metric changed from body text to magenta for consistent semantic colour logic                                                                          | HTML + IO Spec               |
| 003 | Admin severity bar simplified to two colours only: green below 25% converted (less than 10 hrs/week), magenta 25% and above. Amber removed.                                      | HTML + IO Spec               |
| 005 | README note added explaining coefficient difference between web tool and Tableau model                                                                                           | README                       |
| 006 | Em dashes removed from all UI copy and all product documents. Replaced with colons, commas, or restructured sentences.                                                           | HTML + all docs              |
| 007 | Score band banners redesigned: pink tint background (#FFF5FA) and magenta left border (#C4006A) consistent across all three bands. Only label and title colour changes per band. | HTML + IO Spec               |
| 008 | Band colour system finalised: High Risk #C4006A, Moderate #E8779F, Healthy #006B2B. Applied to banner labels, titles, score rings, and legend pills.                             | HTML + IO Spec               |

---

_Full product documentation in `/docs`. For project context and methodology, see [README.md](./README.md)._
