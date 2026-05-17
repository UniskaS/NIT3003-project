#  PawPal — Project README

> **"Because Every Paw Matters"**  
> PawPal is a warm, modern pet adoption platform that connects animals in shelters with loving families through AI-powered matching, streamlined applications, and an intuitive admin dashboard.

---

## Project Structure

```
pawpal_final/
├── index.html              # Admin Dashboard (Overview)
├── home.html               # Public Homepage
├── login.html              # Login / Sign Up Page
├── pets.html               # Manage Pets (Admin)
├── applications.html       # Applications Manager (Admin)
├── analytics.html          # Analytics Dashboard (Admin)
├── add-pet.html            # Add New Pet (Admin)
├── ai-matching.html        # AI Pet Matching Chatbox (Public)
├── my-applications.html    # My Applications (User)
├── pet-profile.html        # Pet Profile Page (Public)
├── inquiry-form.html       # Adoption Inquiry Form (Public)
├── settings.html           # Settings (Admin) — 🚧 Under Construction
├── css/                    # All stylesheets
├── js/                     # JavaScript files
└── images/                 # Logo and image assets
```

---

##  Pages — Functionality Overview

###  🏠 Home Page (`home.html`)
The main public-facing landing page of PawPal. It introduces visitors to the platform and its mission. Features include a hero section with a call-to-action to start the AI pet matching quiz, an overview of how the adoption process works, featured pets available for adoption, trust indicators (number of successful adoptions, happy families), and links to browse pets, learn more, and contact the team. This is the primary entry point for prospective adopters.

---

###   Login Page (`login.html`)
Handles both user login and new account creation in a single, elegant split-panel layout. The left panel features the PawPal branding over a warm lifestyle photo, while the right panel contains the interactive form. Key features include:
- **User Login / Sign Up toggle** — switch between logging in and creating a new account
- **Staff Login tab** — redirects shelter staff to the Admin Dashboard
- **Role-based routing** — users go to My Applications; staff go to the Admin Panel
- Form fields for name, email, password, and confirm password (signup only)
- Remember me checkbox and Forgot Password link

---

### 3.  Admin Dashboard / Overview (`index.html`)
The central hub for shelter administrators after logging in as staff. Displays a real-time overview of shelter activity with:
- **Welcome banner** with quick-action buttons (Add New Pet, View Applications)
- **4 stat cards** — Available Pets, Open Applications, Adopted This Month, Email Success Rate — each with trend indicators
- **Recent Applications table** — shows the latest applicants with their pet match, AI compatibility score, date, status badge, and a Review link
This page is the first screen staff see after signing in.

---

### 4.  Manage Pets (`pets.html`)
An admin-only page for viewing and managing all pets currently listed in the shelter system. Features include:
- **Stats banner** showing total pets, available, in-process, and pending counts
- **All Pets table** listing each pet's name, breed, age, availability status, and an Edit action link
- **Add New Pet button** for quick navigation to the add pet form
Staff can monitor the full pet inventory at a glance and navigate directly to edit any listing.

---

### 5.  Applications Manager (`applications.html`)
An admin-only page for reviewing all adoption applications submitted through the platform. Features include:
- **Status summary strip** — a quick count of Pending, In Review, and Approved applications
- **Applications table** displaying each applicant's name (with avatar initials), the pet they applied for, an AI compatibility score, submission date, current status badge, and a Review action link
- **AI Scores** — colour-coded badges (green for high, yellow for mid) that reflect how well the applicant matches the pet based on lifestyle answers

---

### 6.  Analytics Page (`analytics.html`)
A data dashboard giving shelter administrators insight into platform performance over time. Features include:
- **Insight pill** — a highlighted headline metric (e.g., adoption growth percentage)
- **Date range filter** — apply a custom date range and export data as CSV
- **4 stat cards** — Total Visitors, Active Users, Successful Matches, Avg. Click Rate — with percentage change indicators
- **Top Search Keywords** — a horizontal bar chart of the most searched pet types
- **Weekly Inquiries** — a vertical bar chart of inquiry volume by day of the week
- **AI Suggestions vs Adoptions** — a full-width line chart comparing AI-recommended pets to actual adoptions over time, with a legend

---

### 7.  Add New Pet (`add-pet.html`)
A form for shelter staff to create a new pet listing. Organised into four clearly defined sections:

- **Basic Information** — pet name, type (dog/cat/other), breed, age, gender, size, and behaviour keywords
- **AI Generated Description** — staff enter the basic info and click "Generate Description" to produce a warm, adoption-ready bio automatically
- **Photos** — drag-and-drop photo upload area supporting up to 8 images, with live preview thumbnails and remove buttons
- **Staff Only Information** — private fields for medical history and rescue background, visible only to shelter staff

Action buttons at the bottom allow saving as a draft or publishing the profile live.

---

### 8.  AI Pet Matching Chatbox (`ai-matching.html`)
An interactive, wizard-style quiz that helps potential adopters find their perfect pet match. Features a two-panel layout:

- **Left panel (Quiz)** — step-by-step questions about the user's home size (apartment, house, farm) and lifestyle (active, moderate, relaxed), with a progress bar and step counter
- **Right panel (Live Results)** — updates in real time as the user answers, showing the top 3 matched pets with their photo, name, breed, and a percentage match score
- **AI recommendation box** — a short, contextual sentence explaining why these pets are recommended based on the user's answers
- A "View All Matches" button links back to the homepage to browse further

---

### 9.  My Applications (`my-applications.html`)
A user-facing dashboard where adopters can track the progress of their submitted adoption applications. Features include:
- **Page header stats** — total applications, approved count, and in-progress count
- **Application cards** — one card per application, each showing the pet's photo, name, breed, submission date, and current status badge
- **Progress tracker** — a visual step-by-step timeline (Submitted → Under Review → Home Check → Approved) with animated pulse on the current step, completed steps shown in green, and future steps greyed out
- **User sidebar** — navigation links to Browse Pets, My Applications, Find a Vet, and My Profile

---

### 10.  Pet Profile Page (`pet-profile.html`)
A detailed public-facing profile for an individual pet available for adoption. Displays the pet's photos, name, breed, age, gender, size, personality traits, AI-generated bio, vaccination and health status, and a prominent "Start Adoption Inquiry" button linking to the inquiry form. Designed to give prospective adopters everything they need to fall in love and take the next step.

---

### 11.  Adoption Inquiry Form (`inquiry-form.html`)
A structured form for prospective adopters to formally express interest in a specific pet. Collects personal details (name, email, phone, address), household information (home type, number of residents, other pets), lifestyle questions, and a personal message to the shelter. Includes a clear submission button and a note about the review timeline. Submitted forms appear in the admin Applications Manager.

---

##  Pages Under Construction

The following pages are part of the PawPal platform but are currently under active development and not yet functional:

| Page | File | Status |
|------|------|--------|
| Settings | `settings.html` | 🚧 Under Construction |
| Vet Finder | — | 🚧 Coming Soon |
| User Profile | — | 🚧 Coming Soon |
| Browse / Filter Pets | — | 🚧 Coming Soon |
| Notifications | — | 🚧 Coming Soon |

These pages are planned for future development sprints and will be integrated into the platform once the core adoption flow is fully tested and deployed.

---

##  Design System

| Token | Value |
|-------|-------|
| Primary colour | `#C85A3E` (warm terracotta) |
| Background | `#FDF8F2` (soft cream) |
| Accent green | `#7FA882` |
| Accent gold | `#D4A853` |
| Display font | Playfair Display |
| Body font | DM Sans |
| Border radius | 8px – 24px (contextual) |

---

##  Tech Stack

- **HTML5** — semantic markup across all pages
- **CSS3** — custom design system via CSS variables, no framework
- **Vanilla JavaScript** — all interactivity (form toggles, quiz logic, AI description generator, photo uploads)
- **Chart.js** — used on the Analytics page for bar and line charts
- **Google Fonts** — Playfair Display, DM Sans, DM Mono
- **Unsplash** — placeholder pet imagery via URL (no local images required)

---

##  Getting Started

No build tools or dependencies are required. Simply open any `.html` file in a modern browser.

```bash
# Clone or unzip the project
cd pawpal_final

# Open the homepage
open home.html

# Or open the admin dashboard
open index.html
```

For the full user flow, start at `home.html` → `ai-matching.html` → `pet-profile.html` → `inquiry-form.html`.  
For the admin flow, start at `login.html` (Staff Login) → `index.html` → `applications.html`.

---

*© 2026 PawPal AI. All rights reserved. Because Every Paw Matters 🐾*