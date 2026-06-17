# Gridion — Complete Build Plan

## 1. PRODUCT

Gridion is an automation-first pipeline builder for mid-sized creative agencies. The core product is a visual drag-and-drop flow editor where a project manager lays out a campaign pipeline as connected nodes (Trigger → Task → File → Approval → Notify), and the system then auto-routes asset handoffs, sends client approval requests, swaps file versions, and updates deadlines — replacing the daily 10+ hours PMs currently spend as a human router between Trello, Google Drive, Slack, and email. Primary user: a project manager at a 10-40-person digital agency running $2M–$20M in annual billings, juggling 5–15 concurrent client campaigns. The specific pain solved is **handoff latency** — the dead time between "designer uploads v3 to Drive" and "PM notices, pings reviewer in Slack, files Trello card, emails client" — which compounds across an agency to delay every deliverable.

## 2. WHO IT'S FOR

**ICP:** Project Managers, Senior PMs, and Operations leads at digital agencies (10–40 staff). They are Trello/Asana power users, comfortable with Kanban, but have hit a ceiling: they have outgrown "card moving" and want a system that **moves cards for them**. They are time-poor, skeptical of "yet another tool," and will judge the product in 30 seconds by whether the flow editor feels intuitive.

**How this shapes the product and tone:**
- **Single primary CTA per screen.** No nested menus. The PM is juggling 8 clients; the dashboard opens to a "Today" view with one obvious next action.
- **Calm, not gamified.** No "🔥 streaks" or "💪 you're crushing it!" copy. The tone is composed, professional, like a well-run studio.
- **Flow editor is the hero.** It gets the most screen real estate, the most visual care, and the smoothest interactions in the entire product. Everything else supports it.
- **Branded client portal** matters because agency owners sell retainers — white-label matters. This is why pricing scales.
- **Pricing per-seat** at $29–$49 because agencies bill by hours; they model internal cost in seats.

## 3. LOOK & FEEL

### Visual System

**Vibe / positioning:** A studio workspace that feels like a well-organized desk. Calm, precise, airy. Atlas motif: subtle dotted grid backgrounds reminiscent of map paper, thin "meridian" lines as section dividers, compass-rose iconography for orientation, latitude/longitude ticks on the flow editor canvas. The flow editor feels like plotting a route on a chart — purposeful, spatial, satisfying.

**Color palette (HSL-tuned for calm):**
- `--sky-50: #F0F7FB` — page wash
- `--sky-100: #DDEEF6` — panel backgrounds
- `--sky-300: #8EC5E0` — primary actions, links
- `--sky-500: #4F9DCB` — primary brand, focus rings
- `--sky-700: #2E6A8E` — headings, deep accents
- `--mint-100: #DCEFE5` — success wash
- `--mint-400: #7AC9A4` — success state, "running" indicator
- `--mint-600: #4FA982` — success deep
- `--sand-50: #FAF6EE` — warm panel
- `--sand-200: #EFE4CE` — borders with warmth
- `--sand-400: #D4B98A` — pending/attention
- `--sand-600: #9C7E4F` — warm text
- `--ink-900: #1F2A33` — primary text (not pure black)
- `--ink-600: #4A5A66` — secondary text
- `--ink-400: #8094A1` — tertiary, placeholders
- `--paper: #FBFBF8` — soft white (slight warm tint)
- `--canvas: #FAFCFD` — flow editor background (cooler than paper)

**Typography:**
- **Geist Sans** (variable) for UI, body, labels, buttons, table cells, nav.
- **Geist Mono** for IDs, timestamps, version numbers, node IDs in the editor.
- **Lora** (variable, italic optional) for marketing headings, the empty-state pull quote, the "your agency's workflow, on autopilot" hero line, and the pipeline name in the flow editor header.

Type scale: 12 / 14 / 16 / 18 / 22 / 28 / 36 / 48. Lora used at 36+ with relaxed tracking (-0.01em). Geist used everywhere else with default tracking.

**Spacing:** 4px base unit. Generous: section padding 32–48px on desktop, panel padding 24px, card padding 20px, button padding 10x16. Vertical rhythm uses 8px steps.

**Layout style:** Two-column dashboard with a 240px fixed sidebar (collapsible to 64px) and a fluid main area with a 64px topbar. Landing page is a single long scroll with sections separated by sand-50 washes. Cards have a 1px sand-200 border, 12px radius, no shadow except a single `--shadow-soft: 0 1px 2px rgba(31,42,51,0.04), 0 4px 12px rgba(31,42,51,0.04)` on hover.

**Iconography:** Lucide icons throughout, 1.5px stroke. Custom compass-rose mark for the logo. Atlas-themed iconography: a stylized "G" that looks like a meridian, node icons that look like waypoints (circle with a dot), status indicators as small filled circles like map pins.

**Imagery:** Generative illustrated motifs — soft gradient blobs (sky-300 → mint-400 at 30% opacity), dotted grid patterns, thin latitude lines, abstract agency "campaign cards" rendered as UI mockups rather than stock photos. No people photos on the marketing site. In the product, the only "imagery" is the flow editor canvas itself.

**Interaction / motion:**
- All transitions 200ms ease-out.
- Node drag: spring with slight overshoot (transform scale 1.02 on grab, 1.0 on drop).
- Sidebar route change: cross-fade main content 150ms.
- Flow editor pan/zoom: smooth with momentum, zoom range 0.5x–2x.
- Button hover: 2px translate-y lift + soft shadow.
- Empty states: a single Lora italic line, a small illustrated mark, one CTA.
- Loading: thin sky-500 progress bar at the very top of the viewport (1.5px tall).
- Skeleton screens for dashboard cards, not spinners.

---

### Screen-by-screen layout

#### Marketing Landing Page (`/`)

**Top (sticky, 64px):** Logo (compass-rose mark + "Gridion" wordmark, Geist 18px ink-900) on left. Nav center: Product, Pricing, Sign in. Right: "Start free trial" button (sky-500 solid, white text, 10×16 padding).

**Hero (100vh, gradient wash):** Background is a soft sky-50→paper gradient with a faint dotted-grid atlas overlay in the top-right quadrant. Centered:
- Eyebrow chip: "For digital agencies" in a sand-50 pill, sand-600 text, 12px Geist mono uppercase.
- H1 in Lora 48px (italic on "on autopilot"): "Your agency's workflow, *on autopilot*."
- Subhead in Geist 18px ink-600, max 560px: "The visual pipeline builder for creative teams. Map handoffs once. Let Gridion run them forever."
- Two buttons: primary "Start your free trial" → `/sign-up`, secondary "See how it works" (sky-300 outline) anchor-scrolls to features.
- Below buttons, micro-row of 3 inline stat labels in Geist 12px ink-400: "10+ hrs/week saved · 4.7/5 by beta agencies · SOC 2 in progress" (use neutral placeholder phrasing — no fake numbers from named sources, just "early access partners report 10+ hours saved weekly").

**TrustedBy strip (60px, sand-50 wash):** Single line in Geist 14px ink-600, italic in Lora: "Built for agencies that demand better workflow." No fake logos. Followed by a row of 3 small pill chips: "10–40 person teams", "Design-led studios", "Campaign operations".

**Features section (`#features`):** 6-card grid (2 rows × 3 cols on desktop, single col mobile). Each card: 1px sand-200 border, 20px padding, 12px radius, sky-500 1.5px stroke icon top-left (24×24). Heading Geist 18px semibold ink-900, body Geist 14px ink-600. Cards:
1. **Visual Flow Builder** — "Drag nodes onto a canvas. Connect them. Your pipeline is your source of truth."
2. **Smart Automations** — "Triggers fire on file upload, status change, schedule. The work moves itself."
3. **Client Approval Hub** — "Branded portal. One-click approve. No more 'see attached' email chains."
4. **File Versioning** — "Replace a file, history follows it. v1, v2, v3 — always recoverable."
5. **Real-time Analytics** — "See where every campaign stalls. Time-to-approval, by stage, by client."
6. **White-label Dashboards** — "Client-facing views with your agency's colors, logo, and domain."

**How It Works (`#how`):** Three numbered steps on a horizontal connector line. Each step in a 320px card: large Lora italic numeral (sky-300, 64px), heading, body. Line: 1px dashed sand-200 connecting step circles. Steps: "Connect tools" (Google Drive, Slack, Figma, Email), "Build pipelines" (drag-and-drop the flow), "Automate delivery" (assignments, approvals, deadlines fire automatically).

**Pricing (`#pricing`):** Three cards in a row, middle card elevated (sky-500 border, scale 1.02). Each card: 1px border (sand-200 for outer, sky-500 for Growth), 24px padding.
- **Starter** — $29/seat/mo, billed annually. Up to 10 seats. Features: 3 active pipelines, 1 client portal, 5GB file storage, email automations, basic analytics.
- **Growth** — $49/seat/mo, billed annually. Up to 50 seats. Features: unlimited pipelines, white-label portal, 100GB storage, Slack + email automations, advanced analytics, custom domains. Ribbon: "Most popular" sand-400.
- **Enterprise** — Custom. Unlimited everything. SSO, dedicated CSM, custom integrations, 99.9% SLA, audit log, on-prem option. CTA: "Talk to us".

Below the cards: a **feature comparison table** (4 columns, 8 rows). Rows: Pipelines, Seats, File storage, Client portal branding, Automations, Analytics, Integrations, Support. Cells contain ✓ / "Up to X" / "—" in Geist 14px.

**Final CTA strip (sand-50 wash, 240px tall):** Lora italic 28px "Start your trial. Build your first pipeline by lunch." → "Start free trial" button.

**Footer (3 columns, sand-200 top border):** Product / Company / Legal. © 2026 Gridion. Wordmark + compass-rose in sky-700.

---

#### Sign-in (`/sign-in`) and Sign-up (`/sign-up`)

Centered single card on sky-50 wash, max-width 400px, paper background, 16px radius, 1px sand-200 border, 32px padding.
- Compass-rose logo top, 32×32, sky-500.
- Lora 28px heading: "Welcome back" / "Create your workspace".
- Form (vertical, 16px gap):
  - "Work email" input.
  - "Password" input (with show/hide toggle).
- Primary button full-width: "Sign in" / "Create workspace".
- Below, Geist 14px ink-600: "New to Gridion? Create your workspace" / "Already have one? Sign in".
- Tiny footer line: "By continuing you agree to our Terms and Privacy." (no fake trust badges).
- Inline error region: sand-50 background, sand-600 text, 12px, only renders on error.
- Submit shows button with spinner + "Creating workspace…" text.

#### Auth callback (`/auth/callback`)

Server route that exchanges the code for a session cookie via `supabase.auth.exchangeCodeForSession`, then 302s to `/dashboard`. No UI.

#### Dashboard shell (`/dashboard`)

**Sidebar (240px fixed, sky-50 background, sand-200 right border):**
- Top: compass-rose logo (24px) + "Gridion" wordmark (Geist 16px semibold).
- Workspace switcher below (small chip showing "My Agency" with chevron — non-functional placeholder for v1).
- Nav (vertical list, 8px gap, each item 36px tall, 8px padding, 8px radius):
  - Home (house icon)
  - Pipelines (flow icon)
  - Clients (users icon)
  - Files (folder icon)
  - Analytics (chart icon)
  - Settings (gear icon)
- Active item: sky-100 background, sky-700 text, sky-500 left border 2px.
- Bottom: user avatar + name, with sign-out on hover (sky-500 text).

**Topbar (64px, paper background, sand-200 bottom border):**
- Left: page title in Geist 18px semibold (e.g. "Home", "Pipelines").
- Right: search input (256px wide, sky-100 background, "Search pipelines, clients, files…" placeholder), notification bell icon (sky-300 stroke), user avatar.

**Main (max-width 1280px, centered, 32px padding):** Content varies per route.

---

#### `/dashboard` (Home — "Today" view)

The PM's first stop. Single column, max 960px wide.

- **Greeting block:** Lora italic 28px "Good morning, {firstName}." followed by Geist 14px ink-600 "Here's where your work is right now."

- **KPI row (4 stat cards, 240px each):** Each card 1px sand-200 border, 20px padding. Top: Geist 12px ink-400 uppercase label. Middle: Geist 36px ink-900 number. Bottom: 12px delta in mint-600 or sand-400 with small up/down arrow.
  - Active pipelines
  - Pending approvals
  - Tasks due today
  - Overdue items (sand-400 if >0)

- **"Needs your attention" section:** Card list, 3–5 items. Each row: 1px sand-200 bottom border, 16px vertical padding. Left: status dot (mint-400, sand-400, or sky-300). Middle: Geist 14px ink-900 description (e.g. "Acme Co Q3 campaign — design review waiting on Jordan"). Right: relative timestamp in Geist 12px ink-400 ("2h ago") and a small "Open" arrow link. If empty: Lora italic 16px ink-400 "All clear. Nothing waiting on you."

- **"Active pipelines" section:** Horizontal scrollable row of compact pipeline cards (260px wide, 1px border). Each card shows: pipeline name, client name, current stage name with mint-400 pulse, % progress bar (sky-500 fill on sand-200 track), 3 mini-avatar team chips. Click → `/dashboard/pipelines/[id]`.

- **"Recent activity" section:** Vertical list, Geist 14px, with mint-400 / sky-300 / sand-400 dot at the start of each row, Geist 12px ink-400 timestamp at right. e.g. "Jordan uploaded final_hero_v3.png to Acme Co Q3 — 12m ago".

#### `/dashboard/pipelines` (Pipeline list)

- Page header: "Pipelines" (Lora 28px) + Geist 14px ink-600 subtitle "Visual automations that run your client work." Right: primary button "New pipeline" → opens `NewPipelineModal`.
- Filter bar: search input (left, 320px), status filter chips (All / Running / Paused / Draft), client filter dropdown, sort dropdown (Last updated / Name / Stage count).
- Card grid (3 columns desktop): Each card 1px sand-200 border, 20px padding. Top: small status badge (Running = mint-400 dot + "Running"; Paused = sand-400; Draft = sky-300). Pipeline name Geist 18px semibold. Client name Geist 12px ink-400. Mini flow preview: a 60px tall area showing 4–5 small circular node icons connected by thin sand-200 lines, the active path highlighted sky-500. Bottom row: avatar stack (max 3, +N), "Updated 2d ago" timestamp, kebab menu (rename, duplicate, pause, delete).
- Empty state: Lora italic 22px "No pipelines yet." / "Build your first one — it's a 5-minute setup." / Button "New pipeline".

#### `/dashboard/pipelines/[id]` (Pipeline detail — the flow editor)

This is the product's hero screen. Three-pane layout.

- **Left pane (240px collapsible):** Node palette. Grouped sections: "Triggers", "Tasks", "Files", "Approvals", "Notifications", "Logic". Each node is a 64px tall row with a 24px sky-500 stroke icon, Geist 14px name, "drag to canvas" hint on hover. A subtle "atlas" compass icon marks the top of each section.
- **Center pane (fluid, canvas):** The flow editor. Background: canvas color with a 24px dotted grid (sand-200 dots). Pan with space+drag or middle-mouse. Zoom with cmd/ctrl+wheel. Top-left of canvas: floating toolbar (sky-100 background, sand-200 border) with: zoom-out, zoom % display, zoom-in, fit-to-screen, undo, redo, test-run (sky-500 filled).
  - **Nodes** rendered as 180×80px rounded rectangles, paper background, 1px sand-200 border, 8px radius. Top: 8px colored stripe (sky-300 trigger, mint-400 task, sand-400 file, sky-700 approval, mint-600 notify, sand-600 logic). Node icon (16px) + Geist 14px semibold name. Sub-label in Geist 12px ink-400 (e.g. "Assign: Jordan", "Trigger: File uploaded"). Selected node: sky-500 2px border, subtle drop shadow.
  - **Edges** are bezier curves with 1.5px stroke. Default sand-400, sky-500 when active. Animated dashes flow along the path when a run is in progress.
  - **Port handles** are 10px circles on node sides, sky-500 fill on hover.
  - **Pan/zoom indicator:** bottom-right, sky-100 pill, shows "100%" and pan position.
- **Right pane (320px):** Inspector for the selected node. If no node is selected: Lora italic 16px "Select a node to configure." + a small "Run history" section with last 5 runs as list rows.
  - When a node is selected: node name (Geist 16px semibold), node type badge, form fields for that node type (see Features), "Test this node" link, "Delete node" link in sand-600.
- **Top strip above canvas (56px):** Pipeline name (Lora 20px, click to inline-edit) + client name pill + status toggle (Running/Paused, mint-400 vs sand-400 dot) + "Save" button (auto-saves with subtle "Saved 2s ago" indicator) + share button.

**Node interaction detail:**
- Drag from palette → drop on canvas → animated placement.
- Click node → inspector opens with smooth slide-in from right.
- Drag from output port → ghost line follows cursor → release on input port to connect.
- Click edge → small popover with "Delete edge" and "Add condition".
- Background click → deselects.

**Empty pipeline state:** Centered Lora italic 22px "A blank canvas." / "Drag a trigger from the left to start." with a small compass-rose mark.

#### `/dashboard/clients` (Clients)

- Header: "Clients" (Lora 28px) + "Manage your client roster and branded portals." Right: "Add client" button.
- Table (paper background, 1px sand-200 border, 12px radius). Header row sky-50, Geist 12px ink-400 uppercase. Rows 64px tall, sand-200 bottom border, hover sky-50.
  - Columns: Client name (Geist 14px semibold, with small logo avatar), Active pipelines (number), Portal status (badge: Live / Not set up), Storage used, Last activity (relative time), kebab menu.
- Row click → slide-over from right (480px wide) showing client details: contact info, all their pipelines (mini list), their files (mini list), their approval history, "Open portal" button.
- Empty state: Lora italic "No clients yet." / CTA "Add your first client".

#### `/dashboard/files` (Files)

- Header: "Files" (Lora 28px) + "Versioned assets across every campaign." Right: "Upload" button (uploads to active pipeline context).
- Left filter rail (200px): By client (multi-select), by pipeline, by file type (image/video/document/other), by uploader.
- Main: grid view (default) or list view toggle. Grid: 200×200 cards, paper background, 1px border, 8px radius. Top: image preview (sky-50 background) or file type icon. Bottom: file name (Geist 14px, truncate), version badge (v3 in sky-100), uploader avatar, relative time.
- Click file → modal: full preview, version history timeline (vertical, sky-500 dots connected by sand-200 line, each version shows "v3 — Jordan — 2d ago — 12MB"), restore button per version, "Replace" button (uploads new version).

#### `/dashboard/analytics` (Analytics)

- Header: "Analytics" + "How your pipelines are performing."
- Time range selector (top right): 7d / 30d / 90d / Custom. Pill toggle, sand-200 border, active state sky-500.
- KPI row (same style as home): Avg time-to-approval, Pipelines running, Total handoffs, Bottleneck count.
- Chart 1 (full width, 280px tall, paper card): Line chart "Handoffs per day" — sky-500 line on sand-200 grid, mint-400 area fill below.
- Two-column row:
  - Chart 2: Bar chart "Time-to-approval by stage" — horizontal bars, sky-500 with the longest bar in sand-400 as a bottleneck highlight.
  - Chart 3: Donut "Pipeline status mix" — mint-400, sand-400, sky-300 segments with center label.
- Bottleneck table: "Stages with the longest wait". Columns: Stage name, Avg wait, Pipelines affected, Last occurrence. Row hover sky-50.
- All charts use `recharts` with custom theme: no axis lines, dotted gridlines (sand-200), sky-500 primary, mint-400 secondary, sand-400 tertiary, Geist 12px labels, ink-400 axis text, Lora 18px chart titles.

#### `/dashboard/settings`

- Tabbed sub-nav (horizontal, 32px height, sand-200 bottom border, sky-500 underline on active): Profile, Workspace, Team, Billing, Integrations.
- **Profile:** Avatar upload, full name, email (read-only), role, "Save changes" button.
- **Workspace:** Workspace name, logo upload, default client portal colors (two color pickers), custom domain field.
- **Team:** Member list table (avatar, name, email, role dropdown, status, kebab). Right: "Invite member" → modal with email + role select.
- **Billing:** Current plan card, seat count, next invoice date, payment method (placeholder), "Manage subscription" link, "View invoices" link.
- **Integrations:** Grid of integration cards (Google Drive, Slack, Figma, Gmail, Dropbox). Each card: logo, name, status (Connected / Not connected), toggle or "Connect" button. "Connected" shows mint-400 dot.

#### Client-facing portal (`/portal/[workspace]/[pipeline]` — public, no auth)

- Branded header: client logo + workspace name. Sand-50 wash background, paper card centered max 720px.
- "Items awaiting your review" section: list of approval cards. Each card: file preview (left, 120×120), title, pipeline stage, "Approve" (mint-600 button) and "Request changes" (sky-300 outline) buttons. Comment input below.
- "Pipeline progress" section: vertical timeline of stages with check marks (mint-400) for completed, mint-400 pulse for current, sky-300 for upcoming.
- Footer: "Powered by Gridion" small text (white-label on paid plans).

---

## 4. USER FLOWS

### Flow A: New user signs up and creates a pipeline

1. Visit `/` → click "Start your free trial" → `/sign-up`.
2. Sign-up form: enter email + password. Server action calls `supabase.auth.signUp`. On success, `auth/callback` exchanges code, sets session cookie, redirects to `/dashboard`.
3. User lands on empty Home: "Welcome, {name}. Let's build your first pipeline." Single CTA: "New pipeline".
4. Click → modal: "Name your pipeline" (text) + "Client" (dropdown; can also add new). Submit.
5. Redirect to `/dashboard/pipelines/[id]` with the new flow (one trigger node "When file uploaded" already placed). Empty state copy: "Drag a task or approval node to continue."
6. User drags nodes, connects them, configures in inspector.
7. Click "Save" (or auto-save fires). Toast confirmation: "Pipeline saved." Switch toggle to "Running".
8. Activity logged to home dashboard "Recent activity".

**States:** validation errors inline (sand-50 background, sand-600 text), loading state (button spinner + disabled), network error (top-of-form error region with retry link), session-expired (redirect to `/sign-in?next=/dashboard/pipelines/[id]`).

### Flow B: Client approves an asset

1. PM in dashboard: pipeline's approval node fires (file uploaded, node connected). System creates approval record, generates portal link.
2. PM clicks "Copy portal link" on the node inspector → share with client via email/Slack.
3. Client opens `/portal/[ws]/[pipeline]` — no login required (token in URL, server-validated).
4. Client sees approval card, clicks "Approve". Server action records approval, advances pipeline.
5. Approve triggers connected next-node (e.g. "Notify designer" → Slack message fires, or "Move file" → file status updates to Approved).
6. PM dashboard Home "Recent activity" updates: "Acme Co approved hero v3."

**States:** approval not found (404 with Lora italic "This approval link has expired."), already approved (show "You approved this on Mar 12." message), comment field (optional, saved alongside approval).

### Flow C: PM views analytics and finds a bottleneck

1. Home dashboard shows "Pending approvals: 12" KPI in sand-400 (over threshold).
2. PM clicks Analytics nav → `/dashboard/analytics`.
3. Default range 30d. Bottleneck table shows "Client Review" stage avg wait: 4.2 days, 8 pipelines affected.
4. PM clicks a row → side panel lists affected pipelines with link to each `/dashboard/pipelines/[id]`.

### Flow D: User invites a team member

1. Settings → Team tab → "Invite member" button.
2. Modal: email + role dropdown (Admin / Member / Client). Submit.
3. Server action: inserts into `team_members` table, sends invite email (in v1 we show "Invite sent" toast and log to activity — actual email transport stubbed but the row is created).
4. Invited user receives link → `/sign-up?invite=token` → on signup, joins workspace.

### Flow E: Sign out

1. User avatar in sidebar bottom → click → menu with "Sign out" → click.
2. Server action: `supabase.auth.signOut` → clear cookies → redirect to `/`.

### Flow F: Forgot password

1. `/sign-in` → "Forgot password?" link (small, sky-500) → `/forgot-password` page.
2. Enter email → submit → server calls `supabase.auth.resetPasswordForEmail` → toast "Check your email."
3. Email link → `/auth/callback?type=recovery` → after exchange, redirect to `/reset-password`.
4. New password form → submit → success → redirect to `/dashboard`.

---

## 5. PAGES / ROUTES

| Route | Auth | Purpose | Main UI |
|---|---|---|---|
| `/` | public | Marketing landing | Hero, features, how-it-works, pricing, CTA, footer |
| `/sign-up` | public | New user signup | Centered form, single card |
| `/sign-in` | public | Returning user login | Centered form, single card |
| `/forgot-password` | public | Request password reset | Centered email form |
| `/reset-password` | session | Set new password after reset | Centered password form |
| `/auth/callback` | public | OAuth/code exchange server route | Server-only, 302 redirect |
| `/auth/sign-out` | session | Sign out server action | Redirects to `/` |
| `/dashboard` | session | Home — Today view | Greeting, KPIs, attention, active pipelines, activity |
| `/dashboard/pipelines` | session | Pipeline list | Header, filters, card grid |
| `/dashboard/pipelines/new` | session | Create new pipeline modal route | Renders modal over list |
| `/dashboard/pipelines/[id]` | session | Flow editor (hero screen) | 3-pane: palette, canvas, inspector |
| `/dashboard/clients` | session | Client list | Header, table |
| `/dashboard/clients/[id]` | session | Client detail slide-over | Slide-over panel |
| `/dashboard/files` | session | File library | Filter rail, grid/list view |
| `/dashboard/analytics` | session | Analytics | KPIs, line chart, bar chart, donut, table |
| `/dashboard/settings` | session | Settings shell | Tab nav |
| `/dashboard/settings/profile` | session | Profile form | Form |
| `/dashboard/settings/workspace` | session | Workspace config | Form |
| `/dashboard/settings/team` | session | Team management | Member table, invite modal |
| `/dashboard/settings/billing` | session | Plan + billing | Plan card, payment placeholder |
| `/dashboard/settings/integrations` | session | Integration toggles | Grid of integration cards |
| `/portal/[workspace]/[pipeline]` | token | Public client approval portal | Branded header, approval cards, timeline |
| `/api/pipelines` | session | CRUD: list/create pipelines | Server actions |
| `/api/pipelines/[id]` | session | CRUD: get/update/delete one | Server actions |
| `/api/pipelines/[id]/run` | session | Manual run trigger | Server action |
| `/api/approvals/[id]/decide` | session-or-token | Approve or request changes | Server action |
| `/api/files/upload` | session | Upload file (Supabase storage signed URL) | Server action |
| `/api/invites` | session | Send invite | Server action |

---

##