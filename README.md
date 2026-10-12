Shaban Portfolio

A modern, futuristic developer portfolio built with Next.js, TypeScript, and Tailwind CSS.

Live Website: https://shaban-portfolio-tau.vercel.app/

Overview

This repository contains my personal developer portfolio, built to showcase my technical skills, practical projects, certifications and virtual job simulations, and development journey.

The portfolio features a futuristic dark interface with subtle glassmorphism, cyan accents, terminal-inspired elements, responsive layouts, and restrained animations.

My primary focus is Android development with Kotlin, alongside modern web development, Python, and practical applications of generative AI and data analytics.

Features

Responsive layouts for desktop, tablet, and mobile

Futuristic dark UI with glassmorphism and cyan accents

Terminal-inspired developer interface

Smooth section navigation

Scroll-based reveal animations

Responsive mobile navigation

Keyboard-friendly navigation and visible focus states

Reduced-motion support

Interactive project cards

Dedicated skills and certifications sections

Certificate viewing through linked PDF files

GitHub, LinkedIn, and email contact links

Production deployment through Vercel

GitHub-based deployment workflow

Tech Stack

Frontend Development

Next.js

React

TypeScript

Tailwind CSS

HTML

CSS

Android Development

Kotlin

Android SDK

XML layouts

ConstraintLayout

Android Fragments

Navigation Component

SharedPreferences

Intents

BigDecimal arithmetic

Python and AI

Python

Automated testing with pytest

Rule-based chatbot development

Generative AI concepts

AI-assisted workflows

Data analysis fundamentals

Tools and Platforms

Git

GitHub

Visual Studio Code

Android Studio

Vercel

Project Structure

shaban-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── Projects.tsx
│   ├── Reveal.tsx
│   ├── Skills.tsx
│   └── Terminal.tsx
├── public/
│   └── certificates/
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md

Note: The structure above highlights the main application files. Additional configuration files and assets may also be present.

Featured Projects

1. Simple Calculator

A Kotlin-based Android calculator focused on precision-safe arithmetic and practical application logic.

Key features:

Arithmetic operations using BigDecimal

Chained calculations

Operator switching

Division-by-zero handling

Formatted numerical results

Technologies: Kotlin Android XML BigDecimal

2. LoginTask

An Android authentication practice project demonstrating local session persistence and screen navigation.

Key features:

Android UI built with XML

Navigation using Intents

Local persistence with SharedPreferences

Basic login-flow practice

Technologies: Kotlin Android XML SharedPreferences Intents

Note: This is a learning project, not a production-ready authentication system.

3. Counter App

A simple Android application demonstrating interactive UI elements and state updates.

Key features:

Button click handling

Counter value updates

ConstraintLayout-based interface

Basic application state management

Technologies: Kotlin Android XML ConstraintLayout

4. Android Bottom Navigation

A single-activity Android application demonstrating navigation between Home, Search, and Bookmark screens.

Key features:

Fragment-based navigation

Navigation graph configuration

NavHostFragment and NavController

BottomNavigationView integration

Technologies: Kotlin Android Navigation Component Fragments BottomNavigationView

GitHub: https://github.com/pabloesc1999/android-bottom-navigation

5. GFC Financial Chatbot

A Python-based financial chatbot prototype designed to answer predefined questions about company financial data.

Key features:

Rule-based question handling

Financial data covering Microsoft, Tesla, and Apple for fiscal years 2023–2025

Automated test suite with 21 passing tests

Structured responses for supported financial queries

Technologies: Python Financial Data pytest Rule-Based Chatbot

GitHub: https://github.com/pabloesc1999/GFC-Financial-Chatbot

Note: The chatbot is a prototype using predefined data, not a live financial-data service or an LLM-powered financial advisor.

Certifications and Virtual Job Simulations

I have completed virtual job simulations and learning experiences covering software engineering, generative AI, analytics, cybersecurity, and business technology.

Organization

Simulation

BCG X

Generative AI

Tata

GenAI-Powered Data Analytics

Walmart Global Tech

Advanced Software Engineering

Vista Equity Partners

AI in Action

EAB

GenAI for Proposal Generation

Mastercard

Cybersecurity

Certificate documents are available in the portfolio's public/certificates/ directory and through the website's certifications section.

Portfolio: https://shaban-portfolio-tau.vercel.app/

Forage simulations: https://www.theforage.com/simulations?qfilter=completed

Design Philosophy

The portfolio uses a technical, futuristic visual identity rather than a conventional template.

Its design system includes:

Deep dark backgrounds

Subtle cyan accents

Glass-inspired panels

Thin borders and restrained glow effects

Terminal-inspired components

Responsive spacing and typography

Carefully controlled animations

The goal is to create a distinctive developer portfolio without compromising readability, accessibility, or usability.

Accessibility and Responsive Design

Accessibility and responsive behavior are important considerations in the interface.

Implemented considerations include:

Semantic HTML structure

Visible keyboard focus states

Accessible navigation controls

Appropriate ARIA attributes

Keyboard-friendly mobile navigation

Reduced-motion support

Text contrast and readable typography

Responsive layouts and touch-friendly controls

The interface has been considered across viewport widths including 320px, 375px, 390px, 430px, 768px, 1024px, and 1440px.

Local Development

Prerequisites

Node.js

npm

Git

Clone the repository

git clone https://github.com/pabloesc1999/shaban-portfolio.git
cd shaban-portfolio

Install dependencies

npm install

Start the development server

npm run dev

Open http://localhost:3000 in your browser.

Production Build

Create an optimized production build:

npm run build

Run the production build locally:

npm run start

Deployment Workflow

The portfolio is deployed through Vercel and connected to GitHub.

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
PUSH TO GITHUB
  ↓
DEPLOY WITH VERCEL
  ↓
LIVE PORTFOLIO

Pushes to the configured production branch can trigger a new deployment. Deployment behavior depends on the Vercel project configuration.

Live Website: https://shaban-portfolio-tau.vercel.app/

Future Improvements

More Android and full-stack projects

Detailed project case studies

Individual project pages

Improved project filtering

Additional interactive components

Further performance and accessibility improvements

Custom domain

Expanded testing and monitoring

Contact

Shaban Saeed
Android Developer focused on Kotlin and modern software development.

Portfolio: https://shaban-portfolio-tau.vercel.app/

GitHub: https://github.com/pabloesc1999

LinkedIn: https://www.linkedin.com/in/m-shaban-saeed-80b5a2316/

Building practical software, strengthening fundamentals, and continuously learning.
