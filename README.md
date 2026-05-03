# 🎓 CampusNav — Smart Campus Navigation & Assistance System

> A mobile-first web application for FAST NUCES students to navigate campus, find rooms, track real-time alerts, view timetables, and locate facilities — built as part of the Advanced Human-Computer Interaction (AHCI) course, Spring 2026.

---

## 📌 Table of Contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Features](#features)
- [Project Structure](#project-structure)
- [How to Run](#how-to-run)
- [AHCI Deliverables](#ahci-deliverables)
- [Design System](#design-system)
- [Tech Stack](#tech-stack)
- [Team](#team)

---

## Overview

CampusNav solves a real problem at FAST NUCES — students, especially in their first semester, waste time wandering the campus looking for rooms, checking cancelled class notices too late, or not knowing if the CS Lab is free. The app provides:

- **Instant room navigation** — building code, floor, room number, walk time, and step-by-step directions in one screen
- **Live class status** — a "NOW" indicator on the dashboard shows the current ongoing lecture
- **Real-time alerts** — class cancellations, room changes, and announcements pushed as colour-coded notifications
- **Places hub** — live occupancy and status for every campus facility: labs, library, BCR, GCR, canteens, prayer hall, admin offices
- **Dark & light theme** — persists across all pages via localStorage

The entire app runs from a single folder of HTML files. No server, no framework, no installation.

---

## Screenshots

| Login | Dashboard | Map |
|-------|-----------|-----|
| Roll number + password, guest access | Today's classes, live NOW strip, quick tiles | SVG campus map, animated route, directions |

| Timetable | Alerts | Places |
|-----------|--------|--------|
| Mon–Sat day tabs, class cards, navigate links | Urgent / Notice / Info severity levels | Search + filter: labs, BCR, GCR, canteen, library |

---

## Features

### 🗺️ Campus Navigation
- Hand-coded SVG campus map with Block A, B, C, and Library
- Animated dashed route line from current location to destination
- Building code · Floor · Room number displayed as chips
- Step-by-step directions with done / active / pending states
- Zoom in/out controls

### 🏠 Dashboard
- Live greeting with real date
- Pulsing green "NOW IN CLASS" strip for the current lecture
- All today's classes with teacher name, room code, and time badge
- Progress bar showing how many classes are done
- Quick-access tiles to Map, Alerts, Timetable, Places
- Stats: classes today, active alerts, attendance %, weeks left in semester

### 📅 Timetable
- Mon–Sat day selector tabs
- Class cards with colour-coded left border by subject type (CS = blue, Math = amber, HCI = teal, Lab = purple)
- Live "● NOW" badge calculated from the real system time
- "Navigate →" link on every class card takes you directly to the map
- Week summary: total classes, lab sessions, attendance

### 🔔 Alerts
- Three severity levels: 🔴 Urgent · 🟡 Notice · 🔵 Info
- Left-border colour coding (accessible for colour-blind users)
- Tap any card to dismiss with a slide-out animation
- "Clear all" clears everything with staggered animation
- Empty state when all alerts are dismissed

### 🏛️ Places Hub
- **20 places** across 7 categories
- Live search — filters as you type
- Category chips: All / Library / Labs / Rooms / Canteen / Common Rooms / Admin
- Every card shows: status (Open/Busy/Closed), hours, amenity tags, live capacity bar
- Tapping any card opens Place Detail

**Places included:**
| Category | Places |
|----------|--------|
| Library | Main Library (LB-01), Digital Library Lab |
| Labs | CS Lab 1 & 2, HCI Lab, Electronics Lab, Network Lab |
| Rooms | Lecture Hall B4-312, Seminar Room A2-307, Auditorium |
| Canteen | Main Canteen, Juice & Snacks Corner, Faculty Cafeteria |
| Common Rooms | **BCR** (Boys Common Room), **GCR** (Girls Common Room), Student Society Room |
| Admin | Admin Office, IT Support Desk, Medical / First Aid, **Prayer Hall (Masjid)** |

### 📍 Place Detail
- Hero banner with large icon, open/busy/closed status badge, and hours
- Animated SVG occupancy ring (green < 50% → amber < 80% → red > 80%)
- Info grid: building, floor, room code, hours
- Amenity checklist with green tick marks
- "Navigate to [room]" CTA → opens map
- "Report an issue" → opens help form

### 🛎️ Help & Support
- Issue report form — dropdown type + description textarea with character counter
- Submit shows a green toast notification
- Contact cards: IT Support email, Admin Office (with map link), Helpline phone
- Accordion FAQ — tap any question to expand the answer

### 🌙 Dark / Light Theme
- Toggle button (🌙 / ☀️) in the top-right header of **every screen**
- Switches instantly with full colour re-mapping
- Saved to `localStorage` — survives page navigation
- Dark: deep navy (#0b1120) base
- Light: clean white (#f0f4fb) base

---

## Project Structure

```
campus-nav/
│
├── index.html                      ← Start here — prototype flow & all screen links
│
├── ── App Screens ──
├── login.html                      ← Screen 1: Login
├── dashboard.html                  ← Screen 2: Dashboard
├── map.html                        ← Screen 3: Campus Map & Navigation
├── timetable.html                  ← Screen 4: Weekly Timetable
├── alerts.html                     ← Screen 5: Alerts & Notifications
├── places.html                     ← Screen 6: Places Hub
├── place-detail.html               ← Screen 7: Individual Place Detail
├── help.html                       ← Screen 8: Help & Support
│
├── ── AHCI Deliverables ──
├── wireframes.html                 ← Deliverable 1: Low-fidelity wireframes (all 7 screens)
├── hifi-guide.html                 ← Deliverable 2: High-fidelity design system
├── prototype.html                  ← Deliverable 3: Interactive prototype flow diagram
├── usability-evaluation-plan.docx  ← Deliverable 4: Full usability evaluation document
│
├── ── Shared Assets ──
├── style.css                       ← Complete design system (CSS variables, themes, components)
└── theme.js                        ← Dark/light theme toggle engine (localStorage persistence)
```

---

## How to Run

**No installation. No server. No internet required.**

1. Download and unzip `campus-nav.zip`
2. Open the `campus-nav/` folder
3. Double-click `index.html` — it opens in any browser
4. Navigate from there to any screen

> Works in Chrome, Firefox, Edge, and Safari. Optimised for a 390px mobile viewport but scales to any screen size.

**Recommended starting path for evaluation:**
```
index.html → login.html → dashboard.html → map.html
```

---

## AHCI Deliverables

This project covers all four deliverables required by the AHCI course:

### Deliverable 1 — Low-Fidelity Wireframes (`wireframes.html`)
Grey-box wireframes for all 7 app screens showing layout, structure, and element placement — before any colour or styling is applied. Includes design decision notes explaining *why* layout choices were made (e.g. 5-tab bottom nav vs hamburger, left-border alert colours for accessibility).

### Deliverable 2 — High-Fidelity UI Design (`hifi-guide.html`)
Complete design system document covering:
- Colour palettes for both dark and light themes (hex codes)
- Typography scale — 7 levels from 22px heading to 10px caption
- Spacing scale — 4pt base grid
- Border radius tokens
- Full CSS variable / component token map
- Figma implementation checklist (frame size, fonts, variables, grid, theme modes)

### Deliverable 3 — Interactive Prototype (`prototype.html` / all `.html` files)
Fully clickable HTML prototype — every button, link, and navigation tab is functional. The `prototype.html` index shows:
- Visual flow diagram: Login → Dashboard → 5 screen branches → Place Detail
- All 9 screens as clickable cards
- 8 usability evaluation task scenarios

### Deliverable 4 — Usability Evaluation Plan (`usability-evaluation-plan.docx`)
A 13-section academic Word document including:

| Section | Content |
|---------|---------|
| Introduction | Purpose, scope, research questions |
| Participants | 8 participants, 3 groups, recruitment plan |
| Methodology | Moderated think-aloud protocol, 45–60 min sessions |
| Task Scenarios | 8 realistic tasks with success criteria and time limits |
| Usability Metrics | Task completion rate, time-on-task, error rate, lostness, SUS |
| SUS Questionnaire | Full 10-item System Usability Scale |
| Session Schedule | 8 sessions across 4 days (in-person + remote) |
| Data Analysis | Quantitative + qualitative analysis plan |
| Debrief Questions | 5 post-session interview questions |
| Ethics | Consent, anonymity, data storage policy |
| Heuristics Checklist | Nielsen's 10 heuristics evaluation sheet |
| Deliverables Timeline | 12 milestones across 8 weeks |
| References | Nielsen (1993, 1994), Brooke/SUS (1996), ISO 9241-11 |

---

## Design System

All visual decisions are documented in `hifi-guide.html` and implemented via CSS variables in `style.css`.

### Colour Tokens
| Token | Dark Value | Light Value | Usage |
|-------|-----------|-------------|-------|
| `--navy` | `#0b1120` | `#f0f4fb` | App background |
| `--navy-mid` | `#131e30` | `#ffffff` | Cards, topbar, bottom nav |
| `--navy-light` | `#1c2d44` | `#e6edf8` | Input fields, tiles |
| `--navy-border` | `#253347` | `#ccd5e8` | All borders & dividers |
| `--accent` | `#3b7cf4` | `#2563eb` | CTAs, active state, links |
| `--green` | `#22c97a` | `#16a34a` | Open status, success |
| `--amber` | `#f5a623` | `#d97706` | Busy / warning |
| `--red` | `#f04848` | `#dc2626` | Urgent / closed / danger |

### Typography
- **DM Sans** — all UI text (Google Fonts)
- **JetBrains Mono** — all room codes, times, and technical labels (B4-312, 08:00, CS-203)

### Spacing
4pt base grid — all padding and gaps are multiples of 4px (4, 8, 12, 16, 20, 24, 32, 40).

---

## Tech Stack

| Layer | Technology | Reason |
|-------|-----------|--------|
| Markup | HTML5 | Semantic, no framework needed |
| Styling | CSS3 (custom properties) | Full design token system, two themes |
| Scripting | Vanilla JavaScript | No dependencies, works offline |
| Fonts | Google Fonts (DM Sans, JetBrains Mono) | Professional typography |
| Maps | Hand-coded SVG | No API key, no external dependency |
| Storage | localStorage | Theme persistence across pages |
| Documents | docx (Node.js) | Programmatic Word document generation |

**Zero dependencies in the browser.** The app works completely offline once downloaded.

---

## Team

| Role | Member |
|------|--------|
| UI/UX Design | — |
| Frontend Development | — |
| HCI Evaluation | — |
| Documentation | — |

**Course:** Advanced Human-Computer Interaction (AHCI)  
**Institution:** FAST NUCES, Karachi  
**Semester:** Spring 2026

---

## Key Design Decisions

**Why 5-tab bottom nav instead of a hamburger menu?**
Students access the app under time pressure. A hamburger menu requires two taps to reach any screen. Bottom nav = one tap. Core screens are always visible.

**Why hand-coded SVG map instead of Google Maps?**
No API key needed, works offline, loads instantly, and can be customised to show exactly the FAST NUCES campus layout without external dependencies.

**Why JetBrains Mono for room codes?**
In a sans-serif font, B4-312 and B4-312 can look identical. Monospace fonts make every character distinct — critical when a student is rushing to the right room.

**Why left-border colours on alerts instead of coloured backgrounds?**
Left borders work for colour-blind users — the severity is communicated by position and label, not colour alone. Full coloured backgrounds can also make text harder to read.

**Why CSS variables for the entire design system?**
One change to `--accent` updates every button, active nav tab, link, and route line across all 15 files simultaneously. This is the same approach used by professional design systems (Material Design, Tailwind, etc.).

---

*CampusNav v1.0 · FAST NUCES AHCI Project · Spring 2026*
