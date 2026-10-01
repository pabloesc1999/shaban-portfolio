# Shaban Portfolio

> A modern, futuristic developer portfolio built with Next.js, TypeScript, and Tailwind CSS.

**Live Website:** https://shaban-portfolio-tau.vercel.app/

---

## Overview

This repository contains my personal developer portfolio, designed to showcase my skills, projects, development journey, and contact information through a modern, responsive interface.

The design combines a dark technical aesthetic with subtle glassmorphism, terminal-inspired UI elements, restrained animations, and a responsive layout.

The portfolio is primarily focused on my work as an **Android developer using Kotlin**, while also documenting my transition into modern web development.

---

## Features

* Responsive design across desktop, tablet, and mobile
* Futuristic dark UI with glassmorphism
* Terminal-inspired developer interface
* Smooth section navigation
* Scroll-based reveal animations
* Responsive mobile navigation
* Accessible keyboard navigation
* Reduced-motion support
* Interactive project cards
* GitHub, LinkedIn, and email contact links
* Production deployment through Vercel
* GitHub-based deployment workflow

---

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* HTML
* CSS

### Development

* Git
* GitHub
* VS Code
* Vercel

---

## Project Structure

```text
shaban-portfolio/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── Projects.tsx
│   ├── Reveal.tsx
│   ├── Skills.tsx
│   └── Terminal.tsx
│
├── public/
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## Sections

### Hero

Introduces the portfolio with:

* Developer identity
* Current role
* Short introduction
* GitHub link
* Terminal-style system interface

### About

Describes my development focus, learning approach, and current areas of interest.

### Skills

Highlights the technologies and tools currently being used across Android and web development.

### Projects

Showcases practical projects built while learning, experimenting, and turning ideas into working software.

Current projects include:

#### Simple Calculator

A Kotlin-based Android calculator focused on precision-safe arithmetic and practical application logic.

**Technologies:**

`Kotlin` `Android` `XML` `BigDecimal`

#### LoginTask

An Android authentication practice project demonstrating local session persistence and screen navigation.

**Technologies:**

`Kotlin` `Android` `XML` `SharedPreferences` `Intents`

#### Counter App

A simple Android application focused on UI interaction, button handling, and state updates.

**Technologies:**

`Kotlin` `XML` `ConstraintLayout` `Android`

#### Android Bottom Navigation

A single-activity Android application demonstrating bottom navigation between Home, Search, and Bookmark screens using Fragments and the Android Navigation Component.

The project uses a `NavGraph`, `NavHostFragment`, `NavController`, and `BottomNavigationView` to manage navigation between three screens.

**Technologies:**

`Kotlin` `Android` `Navigation Component` `Fragments` `BottomNavigationView` `ConstraintLayout`

**GitHub:** https://github.com/pabloesc1999/android-bottom-navigation

### Contact

Provides direct contact channels through:

* Email
* GitHub
* LinkedIn

---

## Design Philosophy

The portfolio was intentionally designed around a **technical and futuristic developer aesthetic** rather than a traditional template.

The visual system uses:

* Deep dark backgrounds
* Subtle cyan accents
* Glass panels
* Thin borders
* Terminal-inspired components
* Minimal glow effects
* Restrained animations
* Responsive spacing and typography

The goal is to make the interface feel technical without sacrificing readability or usability.

---

## Accessibility

Accessibility was considered throughout the development process.

The portfolio includes:

* Semantic HTML structure
* Visible keyboard focus states
* Accessible navigation controls
* Appropriate ARIA attributes
* Keyboard-friendly mobile navigation
* Reduced-motion support
* Sufficient text contrast
* Responsive touch targets

The interface was tested across multiple viewport sizes, including:

`320px` `375px` `390px` `430px` `768px` `1024px` `1440px`

---

## Local Development

### Prerequisites

Make sure you have:

* Node.js
* npm
* Git

### Clone the repository

```bash
git clone https://github.com/pabloesc1999/shaban-portfolio.git
cd shaban-portfolio
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

## Production Build

To create an optimized production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

---

## Deployment

The portfolio is deployed using **Vercel** and connected directly to the GitHub repository.

```text
Local Development
       │
       ▼
     Git
       │
       ▼
    GitHub
       │
       ▼
    Vercel
       │
       ▼
  Live Portfolio
```

Every push to the production branch can trigger a new Vercel deployment.

### Live

**https://shaban-portfolio-tau.vercel.app/**

---

## Development Workflow

My workflow for this project is intentionally simple:

```text
PLAN
  ↓
BUILD
  ↓
TEST
  ↓
DEBUG
  ↓
COMMIT
  ↓
PUSH
  ↓
DEPLOY
```

The project is continuously evolving as I learn new technologies and improve my development practices.

---

## Future Improvements

Potential future additions include:

* More Android projects
* Detailed project case studies
* Individual project pages
* Additional interactive UI components
* More advanced animation systems
* Improved project filtering
* Custom domain
* Additional performance monitoring

---

## Contact

**Shaban Saeed**

Android Developer focused on Kotlin and modern software development.

* **Portfolio:** https://shaban-portfolio-tau.vercel.app/
* **GitHub:** https://github.com/pabloesc1999
* **LinkedIn:** https://www.linkedin.com/in/m-shaba*
