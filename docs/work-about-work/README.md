# Work About Work
### A process diagnostic tool for coordination overhead in knowledge-work teams

**[Run the tool](https://workaboutwork.netlify.app/)** · [Read the article](https://youthful-weaver-67b.notion.site/Work-About-Work-Is-a-Process-Defect-30590b86ee6780bcbd42e64c5156a8d6)

---

## What this is

Coordination overhead — meetings, internal communications, information retrieval — is not an inconvenience. It is a measurable process defect. The average knowledge worker spends 16.4 hours per week on work about work rather than the work itself. That is two full working days, every week, across every team.

This tool makes that visible in 60 seconds, and identifies where in the system the defect is most acute.

---

## Two modes, one URL

**Calculator** — Enter your team size, average salary, admin load (in hours per week), and AI adoption rate. The tool outputs the annual cost of coordination overhead, hours lost, and the value of capacity reclaimable through AI adoption. All outputs update in real time.

**Audit** — Five diagnostic questions scored 0–3 each, producing a Process Defect Score (0–15) across three bands: Healthy (0–4), Moderate (5–9), High Risk (10–15). Each band surfaces three specific recommendations ordered from most visible symptom to root cause.

---

## The methodology

The calculator is grounded in published research:

- **Baseline:** Microsoft 365 telemetry and APQC benchmarks across 982 knowledge workers (16.4 hrs/week composite)
- **Efficiency gains:** Noy and Zhang (MIT) generative AI productivity study; Harvard Business School, *Navigating the Jagged Technological Frontier*
- **Reclaim coefficient:** 0.60 — a conservative weighted midpoint across three admin categories (meetings, communications, information retrieval)
- **Framework:** DMAIC continuous improvement methodology applied to knowledge work coordination

All assumptions are conservative and configurable.

### Note on the Tableau model

This tool is a simplified web version of an earlier Tableau ROI model. The Tableau model allows per-category efficiency rate adjustment across meetings, communications, and information retrieval separately. The web tool uses a single blended reclaim coefficient of 0.60. Both are methodologically valid — they reflect different levels of configurability. Outputs will differ for the same inputs.

---

## How it was built

This project started from an existing operational framework and a published article. Before any code was written, five product documents were produced: a Framework Document, Calculator Methodology Sheet, Diagnostic Question Bank, Recommendation Logic Map, and Input/Output Specification.

The documentation layer came first. AI (Claude and Claude Code) was used to draft documents from defined inputs, build the tool from the specification, and apply a structured change log through testing. The process is documented in the [AI Workflow Methodology](https://github.com/aleszordan/workaboutwork) included in this repo.

Total time from concept to deployed tool: approximately 20 hours.

---

## Product documentation

The full documentation set is available in the `/docs` folder:

| Document | Purpose |
|---|---|
| Framework Document | Intellectual foundation and research grounding |
| Calculator Methodology Sheet | Full formula chain, assumptions, and stress test responses |
| Diagnostic Question Bank | Five questions with scoring rationale and sequence logic |
| Recommendation Logic Map | Nine recommendations with ordering logic and source citations |
| Input/Output Specification | Complete developer and designer build brief |
| AI Workflow Methodology | How AI was used in the design, build, and test process |

---

## Running the tool

Open `index.html` in any browser. No install, no login, no build step required.

---

*Built by [Ales Zordan](https://www.linkedin.com/in/azordan/) · Operations Lead and Systems Thinker*
