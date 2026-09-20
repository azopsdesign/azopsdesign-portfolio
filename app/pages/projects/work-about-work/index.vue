<template>
    <div>
        <header>
            <span class="logo">Work About Work</span>

            <div class="mode-tabs">
                <button
                    id="tab-calc"
                    class="mode-tab active"
                    onclick="switchMode('calculator')"
                >
                    Calculator
                </button>

                <button
                    id="tab-audit"
                    class="mode-tab"
                    onclick="switchMode('audit')"
                >
                    Audit
                </button>
            </div>
        </header>

        <!-- ════════════════════════════════════════
         CALCULATOR MODE
         ════════════════════════════════════════ -->

        <div id="mode-calculator" class="mode-panel active">
            <!-- Left: inputs -->

            <div class="panel-left">
                <div class="panel-left-heading">Your team</div>

                <!-- team_size -->

                <div class="slider-group">
                    <div class="slider-label-row">
                        <span class="slider-label">Team size</span>

                        <span id="val-team-size" class="slider-value">
                            25 people
                        </span>
                    </div>

                    <input
                        id="sl-team-size"
                        type="range"
                        min="3"
                        max="500"
                        value="25"
                        step="1"
                        oninput="updateCalc()"
                    />

                    <div class="slider-range-labels">
                        <span>3</span><span>500</span>
                    </div>
                </div>

                <!-- avg_salary -->

                <div class="slider-group">
                    <div class="slider-label-row">
                        <span class="slider-label">
                            Avg. fully-loaded salary
                        </span>

                        <span id="val-avg-salary" class="slider-value">
                            €80K / yr
                        </span>
                    </div>

                    <input
                        id="sl-avg-salary"
                        type="range"
                        min="30000"
                        max="300000"
                        value="80000"
                        step="5000"
                        oninput="updateCalc()"
                    />

                    <div class="slider-range-labels">
                        <span>€30K</span><span>€300K</span>
                    </div>
                </div>

                <!-- admin_hrs -->

                <div class="slider-group">
                    <div class="slider-label-row">
                        <span class="slider-label">
                            Admin &amp; coordination load
                        </span>

                        <span id="val-admin-hrs" class="slider-value">
                            14 hrs / week
                        </span>
                    </div>

                    <input
                        id="sl-admin-hrs"
                        type="range"
                        min="2"
                        max="28"
                        value="14"
                        step="1"
                        oninput="updateCalc()"
                    />

                    <div class="slider-range-labels">
                        <span>2 hrs</span><span>28 hrs</span>
                    </div>
                </div>

                <!-- adoption_pct -->

                <div class="slider-group">
                    <div class="slider-label-row">
                        <span class="slider-label">
                            AI workflow adoption rate
                        </span>

                        <span id="val-adoption-pct" class="slider-value">
                            50% of team
                        </span>
                    </div>

                    <input
                        id="sl-adoption-pct"
                        type="range"
                        min="0"
                        max="100"
                        value="50"
                        step="1"
                        oninput="updateCalc()"
                    />

                    <div class="slider-range-labels">
                        <span>0%</span><span>100%</span>
                    </div>
                </div>

                <div class="cta-block">
                    Want to understand <em>where</em> your coordination overhead
                    comes from?

                    <a onclick="switchMode('audit')">
                        Run the 5-question audit
                    </a>

                    to identify your team's friction points and get targeted
                    recommendations.
                </div>
            </div>

            <!-- Right: outputs -->

            <div class="panel-right">
                <div class="headline-block">
                    <div class="output-eyebrow">
                        Annual cost of coordination overhead
                    </div>

                    <div id="out-admin-cost" class="headline-value">€700K</div>
                </div>

                <hr class="rule" />

                <!-- 2x2 metric grid -->

                <div class="metric-grid">
                    <div class="metric-cell">
                        <div class="metric-cell-label">Hours lost per year</div>

                        <div
                            id="out-admin-hours"
                            class="metric-cell-value cost-val"
                        >
                            16.8K
                        </div>

                        <div class="metric-cell-note">
                            across the whole team
                        </div>
                    </div>

                    <div class="metric-cell">
                        <div class="metric-cell-label">
                            Hours per person / week
                        </div>

                        <div
                            id="out-hours-pp-week"
                            class="metric-cell-value cost-val"
                        >
                            14.0
                        </div>

                        <div class="metric-cell-note">
                            benchmark: 16.4 hrs (Microsoft / APQC)
                        </div>
                    </div>

                    <div class="metric-cell reclaim-cell">
                        <div class="metric-cell-label">
                            Reclaimable hours / yr
                        </div>

                        <div
                            id="out-reclaim-hours"
                            class="metric-cell-value reclaim-val"
                        >
                            5.0K
                        </div>

                        <div class="metric-cell-note">
                            with current AI adoption
                        </div>
                    </div>

                    <div class="metric-cell reclaim-cell">
                        <div class="metric-cell-label">
                            Value of reclaimed capacity
                        </div>

                        <div
                            id="out-reclaim-cost"
                            class="metric-cell-value reclaim-val"
                        >
                            €210K
                        </div>

                        <div class="metric-cell-note">
                            salary-equivalent per year
                        </div>
                    </div>
                </div>

                <!-- Admin load severity bar -->

                <div class="bar-section">
                    <div class="bar-label-row">
                        <span class="bar-label">Admin load severity</span>

                        <span id="bar-admin-label" class="bar-right-label">
                            14 hrs / week
                        </span>
                    </div>

                    <div class="bar-track">
                        <div
                            id="bar-admin-fill"
                            class="bar-fill bar-magenta"
                            style="width: 50%"
                        />
                    </div>
                </div>

                <!-- AI reclaim potential bar -->

                <div class="bar-section">
                    <div class="bar-label-row">
                        <span class="bar-label">AI reclaim potential</span>

                        <span id="bar-adopt-label" class="bar-right-label">
                            50%
                        </span>
                    </div>

                    <div class="bar-track">
                        <div
                            id="bar-adopt-fill"
                            class="bar-fill bar-green"
                            style="width: 50%"
                        />
                    </div>
                </div>
            </div>
        </div>

        <!-- ════════════════════════════════════════
         AUDIT MODE
         ════════════════════════════════════════ -->

        <div id="mode-audit" class="mode-panel">
            <!-- Left: info + live score -->

            <div class="panel-left">
                <div class="audit-info-heading">Diagnostic Audit</div>

                <p class="audit-intro-text">
                    Five questions. Under 90 seconds. Identifies where your
                    team's coordination overhead is coming from and what to do
                    about it.
                </p>

                <p class="audit-intro-text">
                    Answer honestly. Each option is calibrated to a specific
                    process pattern. There is no neutral answer.
                </p>

                <p
                    class="audit-intro-text"
                    style="font-weight: 700; color: #111; margin-bottom: 8px"
                >
                    Score bands:
                </p>

                <div class="band-indicator">
                    <span class="band-chip chip-high"> High Risk 10–15 </span>

                    <span>Systemic redesign required.</span>
                </div>

                <div class="band-indicator">
                    <span class="band-chip chip-moderate"> Moderate 5–9 </span>

                    <span>Targeted fixes in 2–3 dimensions.</span>
                </div>

                <div class="band-indicator">
                    <span class="band-chip chip-healthy"> Healthy 0–4 </span>

                    <span>Optimise and protect what's working.</span>
                </div>

                <div class="live-score-box">
                    <div class="live-score-label">Process Defect Score</div>

                    <div id="live-score-val" class="live-score-number">—</div>

                    <div id="live-score-band" class="live-score-band">
                        Answer the questions to see your score
                    </div>
                </div>
            </div>

            <!-- Right: questions + result -->

            <div class="panel-right">
                <div style="max-width: 680px">
                    <div class="audit-right-heading">
                        Where does your team's time go?
                    </div>

                    <p class="audit-right-sub">
                        Select one answer per question. Your score updates in
                        real time. Recommendations appear once all five
                        questions are answered.
                    </p>

                    <!-- Q1 -->

                    <div class="question-block">
                        <div class="question-meta">Q1 — Meeting Design</div>

                        <div class="question-text">
                            What best describes the majority of your team's
                            recurring meetings?
                        </div>

                        <ul class="options-list">
                            <li class="option-item">
                                <input
                                    id="q1-0"
                                    type="radio"
                                    name="q1"
                                    value="0"
                                    onchange="updateAudit()"
                                />

                                <label class="option-label" for="q1-0">
                                    Deep work sessions or workshops
                                </label>
                            </li>

                            <li class="option-item">
                                <input
                                    id="q1-1"
                                    type="radio"
                                    name="q1"
                                    value="1"
                                    onchange="updateAudit()"
                                />

                                <label class="option-label" for="q1-1">
                                    Decision-making with clear owners
                                </label>
                            </li>

                            <li class="option-item">
                                <input
                                    id="q1-2"
                                    type="radio"
                                    name="q1"
                                    value="2"
                                    onchange="updateAudit()"
                                />

                                <label class="option-label" for="q1-2">
                                    Alignment meetings: getting everyone on the
                                    same page
                                </label>
                            </li>

                            <li class="option-item">
                                <input
                                    id="q1-3"
                                    type="radio"
                                    name="q1"
                                    value="3"
                                    onchange="updateAudit()"
                                />

                                <label class="option-label" for="q1-3">
                                    Status updates: reporting what happened
                                </label>
                            </li>
                        </ul>
                    </div>

                    <!-- Q2 -->

                    <div class="question-block">
                        <div class="question-meta">Q2 — Meeting Structure</div>

                        <div class="question-text">
                            How often do meetings have a written agenda shared
                            in advance?
                        </div>

                        <ul class="options-list">
                            <li class="option-item">
                                <input
                                    id="q2-0"
                                    type="radio"
                                    name="q2"
                                    value="0"
                                    onchange="updateAudit()"
                                />

                                <label class="option-label" for="q2-0">
                                    Always: it's a team norm
                                </label>
                            </li>

                            <li class="option-item">
                                <input
                                    id="q2-1"
                                    type="radio"
                                    name="q2"
                                    value="1"
                                    onchange="updateAudit()"
                                />

                                <label class="option-label" for="q2-1">
                                    Usually, but not consistently
                                </label>
                            </li>

                            <li class="option-item">
                                <input
                                    id="q2-2"
                                    type="radio"
                                    name="q2"
                                    value="2"
                                    onchange="updateAudit()"
                                />

                                <label class="option-label" for="q2-2">
                                    Sometimes: for big meetings only
                                </label>
                            </li>

                            <li class="option-item">
                                <input
                                    id="q2-3"
                                    type="radio"
                                    name="q2"
                                    value="3"
                                    onchange="updateAudit()"
                                />

                                <label class="option-label" for="q2-3">
                                    Almost never
                                </label>
                            </li>
                        </ul>
                    </div>

                    <!-- Q3 -->

                    <div class="question-block">
                        <div class="question-meta">Q3 — Async Maturity</div>

                        <div class="question-text">
                            Could the majority of your information-sharing
                            meetings be replaced by an async message instead?
                        </div>

                        <ul class="options-list">
                            <li class="option-item">
                                <input
                                    id="q3-0"
                                    type="radio"
                                    name="q3"
                                    value="0"
                                    onchange="updateAudit()"
                                />

                                <label class="option-label" for="q3-0">
                                    No: the live discussion adds real value
                                </label>
                            </li>

                            <li class="option-item">
                                <input
                                    id="q3-1"
                                    type="radio"
                                    name="q3"
                                    value="1"
                                    onchange="updateAudit()"
                                />

                                <label class="option-label" for="q3-1">
                                    Some, but not most
                                </label>
                            </li>

                            <li class="option-item">
                                <input
                                    id="q3-2"
                                    type="radio"
                                    name="q3"
                                    value="2"
                                    onchange="updateAudit()"
                                />

                                <label class="option-label" for="q3-2">
                                    Probably most of them
                                </label>
                            </li>

                            <li class="option-item">
                                <input
                                    id="q3-3"
                                    type="radio"
                                    name="q3"
                                    value="3"
                                    onchange="updateAudit()"
                                />

                                <label class="option-label" for="q3-3">
                                    Yes, almost all of them
                                </label>
                            </li>
                        </ul>
                    </div>

                    <!-- Q4 -->

                    <div class="question-block">
                        <div class="question-meta">
                            Q4 — Decision Architecture
                        </div>

                        <div class="question-text">
                            When you leave a meeting, how often is there a clear
                            owner and next action?
                        </div>

                        <ul class="options-list">
                            <li class="option-item">
                                <input
                                    id="q4-0"
                                    type="radio"
                                    name="q4"
                                    value="0"
                                    onchange="updateAudit()"
                                />

                                <label class="option-label" for="q4-0">
                                    Almost always: we have a clear system
                                </label>
                            </li>

                            <li class="option-item">
                                <input
                                    id="q4-1"
                                    type="radio"
                                    name="q4"
                                    value="1"
                                    onchange="updateAudit()"
                                />

                                <label class="option-label" for="q4-1">
                                    Usually, but follow-through is inconsistent
                                </label>
                            </li>

                            <li class="option-item">
                                <input
                                    id="q4-2"
                                    type="radio"
                                    name="q4"
                                    value="2"
                                    onchange="updateAudit()"
                                />

                                <label class="option-label" for="q4-2">
                                    Sometimes: varies by meeting
                                </label>
                            </li>

                            <li class="option-item">
                                <input
                                    id="q4-3"
                                    type="radio"
                                    name="q4"
                                    value="3"
                                    onchange="updateAudit()"
                                />

                                <label class="option-label" for="q4-3">
                                    Rarely: things feel discussed but not
                                    decided
                                </label>
                            </li>
                        </ul>
                    </div>

                    <!-- Q5 -->

                    <div class="question-block">
                        <div class="question-meta">
                            Q5 — AI and Workflow Maturity
                        </div>

                        <div class="question-text">
                            How is your team currently using AI tools to reduce
                            admin and coordination work?
                        </div>

                        <ul class="options-list">
                            <li class="option-item">
                                <input
                                    id="q5-0"
                                    type="radio"
                                    name="q5"
                                    value="0"
                                    onchange="updateAudit()"
                                />

                                <label class="option-label" for="q5-0">
                                    We have consistent team-wide AI workflows
                                </label>
                            </li>

                            <li class="option-item">
                                <input
                                    id="q5-1"
                                    type="radio"
                                    name="q5"
                                    value="1"
                                    onchange="updateAudit()"
                                />

                                <label class="option-label" for="q5-1">
                                    We have some shared workflows but no system
                                </label>
                            </li>

                            <li class="option-item">
                                <input
                                    id="q5-2"
                                    type="radio"
                                    name="q5"
                                    value="2"
                                    onchange="updateAudit()"
                                />

                                <label class="option-label" for="q5-2">
                                    A few individuals are experimenting
                                </label>
                            </li>

                            <li class="option-item">
                                <input
                                    id="q5-3"
                                    type="radio"
                                    name="q5"
                                    value="3"
                                    onchange="updateAudit()"
                                />

                                <label class="option-label" for="q5-3">
                                    We are not using AI for this at all
                                </label>
                            </li>
                        </ul>
                    </div>

                    <!-- Score result (revealed when all 5 answered) -->

                    <div id="score-result" class="score-result">
                        <div id="res-eyebrow" class="result-eyebrow" />

                        <div id="res-title" class="result-title" />

                        <div id="res-score-line" class="result-score-line" />

                        <div id="res-description" class="result-description" />

                        <div class="recs-header">
                            Your three recommendations
                        </div>

                        <div id="res-recs" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Work About Work | Alessia Zordan | AZ · OpsDesign — Operations and Systems Design',
    meta: [
        {
            name: 'description',
            content: 'Project Work About Work',
        },
    ],
    link: [
        {
            rel: 'icon',
            type: 'image/svg+xml',
            href: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzQwIDM0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzQwIiBoZWlnaHQ9IjM0MCIgZmlsbD0iI0Y1RjNGMSIvPgogIDxyZWN0IHg9Ijk1IiB5PSI2NSIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIHJ4PSIyOCIgZmlsbD0iIzNDM0MzQiIvPgogIDxsaW5lIHgxPSI5NSIgeTE9IjE0MCIgeDI9IjEwNSIgeTI9IjE0MCIgc3Ryb2tlPSIjQzQwMDZBIiBzdHJva2Utd2lkdGg9IjIuOSIvPgogIDxsaW5lIHgxPSIxMTEiIHkxPSIxNDAiIHgyPSIxMjEiIHkyPSIxNDAiIHN0cm9rZT0iI0M0MDA2QSIgc3Ryb2tlLXdpZHRoPSIyLjkiLz4KICA8bGluZSB4MT0iMTI3IiB5MT0iMTQwIiB4Mj0iMTM3IiB5Mj0iMTQwIiBzdHJva2U9IiNDNDAwNkEiIHN0cm9rZS13aWR0aD0iMi45Ii8+CiAgPGxpbmUgeDE9IjE0MyIgeTE9IjE0MCIgeDI9IjE1MyIgeTI9IjE0MCIgc3Ryb2tlPSIjQzQwMDZBIiBzdHJva2Utd2lkdGg9IjIuOSIvPgogIDxjaXJjbGUgY3g9IjE3MCIgY3k9IjE0MCIgcj0iMTgiIGZpbGw9IiMzQzNDM0IiIHN0cm9rZT0iI0M0MDA2QSIgc3Ryb2tlLXdpZHRoPSIyLjkiLz4KICA8Y2lyY2xlIGN4PSIxNzAiIGN5PSIxNDAiIHI9IjEyIiBmaWxsPSIjQzQwMDZBIi8+Cjwvc3ZnPgo=',
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: '',
        },
        {
            href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
            rel: 'stylesheet',
        },
    ],
})

// ════════════════════════════════
// CALCULATOR
// ════════════════════════════════

const WEEKS = 48
const HPW = 40

function fmtCurrency(v: number): string {
    if (v >= 1e6) return '€' + (v / 1e6).toFixed(1) + 'M'
    if (v >= 1000) return '€' + Math.round(v / 1000) + 'K'
    return '€' + Math.round(v)
}

function fmtHours(v: number): string {
    if (v >= 1000) return (v / 1000).toFixed(1) + 'K'
    return Math.round(v).toString()
}

function updateCalc(): void {
    const ts = +(document.getElementById('sl-team-size') as HTMLInputElement)
        .value

    const sal = +(document.getElementById('sl-avg-salary') as HTMLInputElement)
        .value

    const ah = +(document.getElementById('sl-admin-hrs') as HTMLInputElement)
        .value

    const ap = +(document.getElementById('sl-adoption-pct') as HTMLInputElement)
        .value

    // Slider display values

    document.getElementById('val-team-size')!.textContent = ts + ' people'

    document.getElementById('val-avg-salary')!.textContent =
        '€' + sal / 1000 + 'K / yr'

    document.getElementById('val-admin-hrs')!.textContent = ah + ' hrs / week'

    document.getElementById('val-adoption-pct')!.textContent = ap + '% of team'

    // Step 0
    const adminPct = (ah / HPW) * 100

    // Step 1
    const cph = sal / (HPW * WEEKS)

    // Step 2
    const totalHrs = ts * HPW * WEEKS

    // Step 3
    const adminHrs = totalHrs * (adminPct / 100)

    // Step 4
    const adminCost = adminHrs * cph

    // Step 5
    const hppw = adminHrs / ts / WEEKS

    // Step 6
    const reclaimHrs = adminHrs * (ap / 100) * 0.6

    // Step 7
    const reclaimCost = reclaimHrs * cph

    // Outputs

    document.getElementById('out-admin-cost')!.textContent =
        fmtCurrency(adminCost)

    document.getElementById('out-admin-hours')!.textContent = fmtHours(adminHrs)

    document.getElementById('out-hours-pp-week')!.textContent = hppw.toFixed(1)

    document.getElementById('out-reclaim-hours')!.textContent =
        fmtHours(reclaimHrs)

    document.getElementById('out-reclaim-cost')!.textContent =
        fmtCurrency(reclaimCost)

    // Admin bar

    document.getElementById('bar-admin-label')!.textContent = ah + ' hrs / week'

    const adminBarW = Math.min((adminPct / 70) * 100, 100)

    const adminFill = document.getElementById('bar-admin-fill') as HTMLElement

    adminFill.style.width = adminBarW + '%'

    adminFill.className =
        'bar-fill ' + (adminPct < 25 ? 'bar-green' : 'bar-magenta')

    // Adoption bar

    document.getElementById('bar-adopt-label')!.textContent = ap + '%'

    ;(document.getElementById('bar-adopt-fill') as HTMLElement).style.width =
        ap + '%'
}

// ════════════════════════════════
// AUDIT
// ════════════════════════════════

interface Recommendation {
    title: string
    body: string
}

interface RecBand {
    eyebrow: string
    title: string
    description: string
    recs: Recommendation[]
}

const RECS: Record<'high' | 'moderate' | 'healthy', RecBand> = {
    high: {
        eyebrow: 'High Risk',
        title: 'High Risk: 10–15',
        description:
            'Systemic coordination overhead across most or all five dimensions. The team has high-defect meeting patterns, low process discipline, low async maturity, unclear decision ownership, and minimal AI adoption. Structural redesign is required across meeting culture, process design, and AI adoption.',
        recs: [
            {
                title: 'Run a meeting audit: cancel everything, reschedule only what you miss',
                body: 'Cancel all recurring meetings for two weeks. At the end of week two, only reschedule the meetings whose absence created a real problem. Research consistently shows teams eliminate 30–40% of recurring meetings through this exercise and rarely notice the gap. This is the entry point because it is visible, reversible, and produces immediate signal about where coordination overhead actually lives.',
            },
            {
                title: 'Install decision ownership before any meeting gets scheduled',
                body: 'The root cause beneath most high-defect meeting patterns is the absence of a single named decision-maker. When ownership is unclear, decisions recirculate across meetings. Introduce a lightweight rule: every meeting invite must name one Accountable owner (using DACI or RACI logic) and state the decision or outcome expected. If either is missing, the meeting does not get scheduled. This single constraint restructures how work moves through the team without requiring a full process redesign.',
            },
            {
                title: 'Deploy AI for post-meeting admin immediately: do not wait for a strategy',
                body: 'At a High Risk score, the team is spending the most time on the activities where AI produces the most reliable, measurable gains: meeting notes, action item extraction, follow-up drafting, and status summarisation. Start with one tool (Fathom, Fireflies, Otter, or equivalent) deployed consistently across all meetings. The goal is not AI transformation: it is eliminating the 60–90 minutes of post-meeting admin per meeting that currently consumes coordination capacity. Teams that do this consistently reclaim 4–6 hours per person per week within weeks, not months.',
            },
        ],
    },

    moderate: {
        eyebrow: 'Moderate',
        title: 'Moderate: 5–9',
        description:
            'Clear friction in two or three dimensions but not across all five. The team has some process awareness: meetings are partially structured, some decisions have owners, some AI tools are in use. Targeted fixes in 2–3 dimensions will produce measurable gains without full redesign.',
        recs: [
            {
                title: 'Standardise meeting formats with mandatory pre-reads',
                body: 'The fix is not fewer meetings: it is better-prepared ones. Create two or three standard meeting templates: a decision meeting (agenda + named owner + context doc shared 24 hours in advance), a working session (problem statement + pre-work defined), and a review (artefact shared before, not during). Any meeting that does not fit a template gets rescheduled until it does. Research shows meetings with shared agendas run 25% shorter and produce clearer outcomes. This is a low-cost, high-visibility change that signals process seriousness without disrupting culture.',
            },
            {
                title: 'Shift information-sharing meetings to async by default',
                body: 'The team likely recognises that some of its meetings could be async but has not made the change. The friction is inertia, not intent. Introduce an async-first norm for all information-sharing: weekly status becomes a Friday written briefing doc; project updates move to a shared Loom or Notion page; decisions already made are communicated in writing, not announced in meetings. Reserve synchronous time exclusively for decisions that require real-time negotiation. Teams that adopt this norm consistently recover 2–3 hours per person per week from information-sharing meetings alone.',
            },
            {
                title: 'Build shared AI workflows for the two highest-friction tasks',
                body: 'Some team members are using AI individually but there is no shared system. Individual adoption creates uneven benefit and can increase inequality within the team. Identify the two most time-consuming repeatable admin tasks: typically post-meeting notes and internal status updates. Build a shared workflow for each. Document the workflow, assign an owner, and make adoption a team norm rather than an individual choice. Two well-adopted workflows outperform ten individual experiments in terms of measurable time reclaimed.',
            },
        ],
    },

    healthy: {
        eyebrow: 'Healthy',
        title: 'Healthy: 0–4',
        description:
            'Good process hygiene across most dimensions. Meetings are purposeful, decisions have owners, async norms exist, and AI tools are in use. Recommendations focus on protecting and compounding what is working, not on fixing defects.',
        recs: [
            {
                title: 'Run a quarterly operating rhythm review to protect what is working',
                body: 'Healthy process hygiene degrades over time without active maintenance. Team composition changes, workload grows, and the norms that work at 10 people break at 25. Introduce a quarterly 60-minute operating rhythm review: audit every recurring meeting (is it still needed?), review decision ownership (are owners still clear?), and check async norms (are they holding?). Treat coordination overhead as a metric to be monitored, not a problem to be solved once. The teams that stay healthy are the ones that make process health a standing agenda item.',
            },
            {
                title: 'Document your decision architecture so it scales to new team members',
                body: 'Healthy decision ownership often exists as tacit knowledge: people know who decides what because they have worked together long enough to have learned it. This does not scale. Document your decision architecture: for the ten most common decision types in your team, name the Accountable owner, the Consulted stakeholders, and the expected turnaround. A one-page DACI reference doc removes the need for clarification meetings as the team grows and protects the decision velocity that is currently one of your competitive advantages.',
            },
            {
                title: 'Systematise your AI workflows and measure the gains',
                body: 'AI tools are in use but likely not yet systematised or measured. The next maturity step is to document what is working: which workflows, which tools, which team norms. Make them onboarding material for new team members. Then introduce a simple measurement: track hours per person spent on the three admin categories (meetings, comms, information retrieval) quarterly. This turns your AI adoption from an individual habit into an organisational capability that compounds as the team grows.',
            },
        ],
    },
}

function getQ(name: string): number | null {
    const el = document.querySelector<HTMLInputElement>(
        'input[name="' + name + '"]:checked'
    )

    return el ? +el.value : null
}

function updateAudit(): void {
    const scores = ['q1', 'q2', 'q3', 'q4', 'q5'].map(getQ)

    const filled = scores.filter((s): s is number => s !== null)

    const total = filled.reduce((a, b) => a + b, 0)

    const count = filled.length

    const lsv = document.getElementById('live-score-val')!
    const lsb = document.getElementById('live-score-band')!

    if (count === 0) {
        lsv.textContent = '—'
        lsb.textContent = 'Answer the questions to see your score'
    } else {
        lsv.textContent = String(total)

        if (count < 5) {
            lsb.textContent = count + ' of 5 answered'
        } else {
            const band =
                total <= 4 ? 'Healthy' : total <= 9 ? 'Moderate' : 'High Risk'

            lsb.textContent = band
        }
    }

    const result = document.getElementById('score-result')!

    if (count < 5) {
        result.classList.remove('visible')
        return
    }

    const key: 'high' | 'moderate' | 'healthy' =
        total <= 4 ? 'healthy' : total <= 9 ? 'moderate' : 'high'

    const data = RECS[key]

    const bandColor =
        key === 'healthy'
            ? '#006B2B'
            : key === 'moderate'
              ? '#E8779F'
              : '#C4006A'

    // Live score number colour

    ;(document.getElementById('live-score-val') as HTMLElement).style.color =
        bandColor

    // Banner label + title

    const resEyebrow = document.getElementById('res-eyebrow') as HTMLElement

    resEyebrow.textContent = data.eyebrow
    resEyebrow.style.color = bandColor

    const resTitle = document.getElementById('res-title') as HTMLElement

    resTitle.textContent = data.title
    resTitle.style.color = bandColor

    // Score line + description (#545454 per spec)

    document.getElementById('res-score-line')!.textContent =
        'Process Defect Score: ' + total + ' / 15'

    document.getElementById('res-description')!.textContent = data.description

    // Recommendations — rec numbers use band colour

    document.getElementById('res-recs')!.innerHTML = data.recs
        .map(
            (r, i) => `
    <div class="rec-item">
      <div class="rec-number" style="color:${bandColor}">${i + 1}</div>
      <div>
        <div class="rec-title">${r.title}</div>
        <div class="rec-body">${r.body}</div>
      </div>
    </div>
  `
        )
        .join('')

    result.classList.add('visible')

    result.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
    })
}

// ════════════════════════════════
// MODE SWITCHING
// ════════════════════════════════

function switchMode(mode: string): void {
    const isCalc = mode === 'calculator'

    document
        .getElementById('mode-calculator')!
        .classList.toggle('active', isCalc)

    document.getElementById('mode-audit')!.classList.toggle('active', !isCalc)

    document.getElementById('tab-calc')!.classList.toggle('active', isCalc)

    document.getElementById('tab-audit')!.classList.toggle('active', !isCalc)
}

// ════════════════════════════════
// TYPED WINDOW API
// ════════════════════════════════

interface WorkAboutWorkWindow extends Window {
    updateCalc: () => void
    updateAudit: () => void
    switchMode: (mode: string) => void
}

onMounted(() => {
    // window does not have these custom properties in the standard Window type yet
    // so we intentionally cast through unknown.
    const workWindow = window as unknown as WorkAboutWorkWindow

    // Expose to window so the inline onclick/oninput/onchange attributes
    // in the template above (kept as-is from the original static HTML)
    // keep working exactly like before.
    workWindow.updateCalc = updateCalc
    workWindow.updateAudit = updateAudit
    workWindow.switchMode = switchMode

    // Initialise calculator with default values
    updateCalc()
})
</script>

<style>
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    font-size: 15px;
    color: #111111;
    background: #fff;
    min-height: 100vh;
}

/* ── Header ── */

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 32px;
    border-bottom: 1px solid #bbbbbb;
    background: #fff;
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo {
    font-family: Georgia, serif;
    font-size: 21px;
    font-weight: bold;
    color: #c4006a;
}

.mode-tabs {
    display: flex;
    border: 1px solid #bbbbbb;
    border-radius: 4px;
    overflow: hidden;
}

.mode-tab {
    padding: 8px 22px;
    font-family: Arial, sans-serif;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    background: #fff;
    color: #111111;
    border: none;
    letter-spacing: 0.2px;
    transition:
        background 0.12s,
        color 0.12s;
}

.mode-tab.active {
    background: #c4006a;
    color: #fff;
}

/* ── Mode panels ── */

.mode-panel {
    display: none;
}

.mode-panel.active {
    display: flex;
}

/* ── Shared two-panel layout ── */

.panel-left {
    width: 380px;
    min-width: 300px;
    flex-shrink: 0;
    background: #eaeaea;
    padding: 32px 28px 28px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #bbbbbb;
    min-height: calc(100vh - 62px);
}

.panel-right {
    flex: 1;
    padding: 32px 40px 40px;
    background: #fff;
    min-height: calc(100vh - 62px);
}

/* ── Sliders ── */

.panel-left-heading {
    font-family: Georgia, serif;
    font-size: 18px;
    color: #111;
    margin-bottom: 28px;
}

.slider-group {
    margin-bottom: 30px;
}

.slider-label-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 8px;
}

.slider-label {
    font-family: Arial, sans-serif;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    color: #444;
}

.slider-value {
    font-family: Arial, sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #c4006a;
}

input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 4px;
    background: #bbbbbb;
    border-radius: 2px;
    outline: none;
    cursor: pointer;
}

input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #c4006a;
    cursor: pointer;
    border: 2px solid #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
}

input[type='range']::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #c4006a;
    cursor: pointer;
    border: 2px solid #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
}

.slider-range-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
}

.slider-range-labels span {
    font-family: Arial, sans-serif;
    font-size: 11px;
    color: #888;
}

/* ── CTA block ── */

.cta-block {
    margin-top: auto;
    padding-top: 24px;
    border-top: 1px solid #bbbbbb;
    font-family: Arial, sans-serif;
    font-size: 13px;
    color: #555;
    line-height: 1.6;
}

.cta-block a {
    color: #0463c0;
    text-decoration: underline;
    cursor: pointer;
}

/* ── Calculator outputs ── */

.headline-block {
    margin-bottom: 32px;
}

.output-eyebrow {
    font-family: Arial, sans-serif;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #888;
    margin-bottom: 4px;
}

.headline-value {
    font-family: Georgia, serif;
    font-size: 58px;
    font-weight: bold;
    color: #c4006a;
    line-height: 1;
    letter-spacing: -1px;
}

hr.rule {
    border: none;
    border-top: 1px solid #bbbbbb;
    margin: 0 0 28px 0;
}

/* ── 2x2 metric grid ── */

.metric-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    border: 1px solid #bbbbbb;
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 32px;
}

.metric-cell {
    padding: 20px 22px;
    background: #fff;
}

.metric-cell.reclaim-cell {
    background: #fff5fa;
}

.metric-cell:nth-child(1),
.metric-cell:nth-child(2) {
    border-bottom: 1px solid #bbbbbb;
}

.metric-cell:nth-child(odd) {
    border-right: 1px solid #bbbbbb;
}

.metric-cell-label {
    font-family: Arial, sans-serif;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    color: #888;
    margin-bottom: 8px;
}

.metric-cell-value {
    font-family: Georgia, serif;
    font-size: 30px;
    font-weight: bold;
    line-height: 1;
}

.metric-cell-value.cost-val {
    color: #c4006a;
}

.metric-cell-value.reclaim-val {
    color: #006b2b;
}

.metric-cell-note {
    font-family: Arial, sans-serif;
    font-size: 11px;
    color: #999;
    margin-top: 5px;
}

/* ── Visual bars ── */

.bar-section {
    margin-bottom: 18px;
}

.bar-label-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 7px;
}

.bar-label {
    font-family: Arial, sans-serif;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    color: #888;
}

.bar-right-label {
    font-family: Arial, sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: #111;
}

.bar-track {
    height: 10px;
    background: #e8e8e8;
    border-radius: 5px;
    overflow: hidden;
}

.bar-fill {
    height: 100%;
    border-radius: 5px;
    transition:
        width 0.12s ease,
        background-color 0.12s ease;
}

.bar-green {
    background: #006b2b;
}

.bar-magenta {
    background: #c4006a;
}

/* ── Audit left panel ── */

.audit-info-heading {
    font-family: Georgia, serif;
    font-size: 18px;
    color: #111;
    margin-bottom: 14px;
}

.audit-intro-text {
    font-family: Arial, sans-serif;
    font-size: 13px;
    color: #444;
    line-height: 1.7;
    margin-bottom: 12px;
}

.band-indicator {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    font-family: Arial, sans-serif;
    font-size: 13px;
    color: #333;
    line-height: 1.4;
}

.band-chip {
    display: inline-block;
    padding: 3px 9px;
    border-radius: 3px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.2px;
    white-space: nowrap;
}

.chip-high {
    background: #c4006a;
    color: #fff;
}

.chip-moderate {
    background: #e8779f;
    color: #fff;
}

.chip-healthy {
    background: #006b2b;
    color: #fff;
}

.live-score-box {
    margin-top: 24px;
    padding: 16px 18px;
    background: #fff;
    border: 1px solid #bbbbbb;
    border-radius: 5px;
}

.live-score-label {
    font-family: Arial, sans-serif;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    color: #888;
    margin-bottom: 4px;
}

.live-score-number {
    font-family: Georgia, serif;
    font-size: 38px;
    font-weight: bold;
    color: #c4006a;
    line-height: 1;
}

.live-score-band {
    font-family: Arial, sans-serif;
    font-size: 12px;
    color: #666;
    margin-top: 4px;
}

/* ── Audit questions ── */

.audit-right-heading {
    font-family: Georgia, serif;
    font-size: 24px;
    color: #111;
    margin-bottom: 8px;
}

.audit-right-sub {
    font-family: Arial, sans-serif;
    font-size: 13px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 32px;
}

.question-block {
    margin-bottom: 36px;
    padding-bottom: 32px;
    border-bottom: 1px solid #bbbbbb;
}

.question-block:last-of-type {
    border-bottom: none;
}

.question-meta {
    font-family: Arial, sans-serif;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: #c4006a;
    margin-bottom: 8px;
}

.question-text {
    font-family: Georgia, serif;
    font-size: 19px;
    font-weight: bold;
    color: #111;
    margin-bottom: 18px;
    line-height: 1.4;
}

.options-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.option-item {
    display: flex;
    align-items: flex-start;
    gap: 11px;
}

.option-item input[type='radio'] {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    min-width: 18px;
    border: 2px solid #bbbbbb;
    border-radius: 50%;
    cursor: pointer;
    margin-top: 2px;
    transition: border-color 0.1s;
    position: relative;
}

.option-item input[type='radio']:checked {
    border-color: #c4006a;
    background: #c4006a;
    box-shadow: inset 0 0 0 3px #fff;
}

.option-label {
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #111;
    cursor: pointer;
    line-height: 1.5;
}

/* ── Score result panel ── */

.score-result {
    display: none;
    margin-top: 36px;
    padding: 28px 32px;
    border-radius: 6px;
    border-left: 4px solid #c4006a;
    background: #fff5fa;
}

.score-result.visible {
    display: block;
}

.result-eyebrow {
    font-family: Arial, sans-serif;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 4px;
}

.result-title {
    font-family: Georgia, serif;
    font-size: 28px;
    font-weight: bold;
    color: #111;
    margin-bottom: 4px;
}

.result-score-line {
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #545454;
    margin-bottom: 12px;
}

.result-description {
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #545454;
    line-height: 1.7;
    margin-bottom: 28px;
}

.recs-header {
    font-family: Arial, sans-serif;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #888;
    margin-bottom: 18px;
    border-top: 1px solid #bbbbbb;
    padding-top: 18px;
}

.rec-item {
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
}

.rec-number {
    font-family: Georgia, serif;
    font-size: 28px;
    font-weight: bold;
    color: #c4006a;
    line-height: 1;
    min-width: 20px;
}

.rec-title {
    font-family: Georgia, serif;
    font-size: 16px;
    font-weight: bold;
    color: #111;
    margin-bottom: 8px;
    line-height: 1.35;
}

.rec-body {
    font-family: Arial, sans-serif;
    font-size: 13px;
    color: #333;
    line-height: 1.7;
}

/* ── Responsive ── */

@media (max-width: 767px) {
    .mode-panel.active {
        flex-direction: column;
    }

    .panel-left {
        width: 100%;
        min-height: unset;
        border-right: none;
        border-bottom: 1px solid #bbbbbb;
        padding: 24px 20px 20px;
    }

    .panel-right {
        min-height: unset;
        padding: 24px 20px 32px;
    }

    .headline-value {
        font-size: 44px;
    }

    header {
        padding: 12px 16px;
    }

    .metric-cell-value {
        font-size: 24px;
    }
}
</style>
