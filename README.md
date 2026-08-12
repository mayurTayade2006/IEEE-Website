# IEEE NMIET Student Branch Website

A modern, responsive React + Vite website for the IEEE Student Branch at NMIET. The site highlights the IEEE community, chapter activities, event gallery, leadership, and membership opportunities.

## Overview

This project is designed to showcase the student branch professionally and present a clean digital presence for students, faculty, and visitors. It includes:

- hero and introduction sections
- IEEE mission and values overview
- event gallery with album-style image viewing
- chapter-wise showcase with member highlights
- leadership team section
- join us and contact information
- social links for LinkedIn, Instagram, and WhatsApp

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Project Structure

```bash
src/
  components/
  data/
  assets/
  App.tsx
  main.tsx
  index.css
public/
package.json
vite.config.ts
tailwind.config.js
postcss.config.js
README.md
```

## Features

- Fully responsive landing page
- Animated UI transitions
- Gallery modal for event photo collections
- Chapter detail view with image galleries
- Social media and contact call-to-action blocks
- Centralized data in the data layer for easy updates

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview the production build locally

```bash
npm run preview
```

## Scripts

- npm run dev — runs the app in development mode
- npm run build — builds the production bundle
- npm run preview — previews the built app
- npm run lint — runs lint checks

## Configuration

The project uses:

- Vite for development and bundling
- Tailwind for styling
- TypeScript for type safety
- custom image and data-driven content from the src/data folder

## Update Content

Most website content is managed in:

- src/data/ieeeData.ts

You can update:

- gallery albums
- chapter details
- team members
- contact information
- social links

## Social Links

The site includes official IEEE NMIET social connections for:

- LinkedIn
- Instagram
- WhatsApp

## Notes

This project is intended for a student branch website and is designed for easy future customization. Images and content can be replaced with official branch media, updated event albums, and real member information as needed.

## Contact

For updates or content changes, coordinate with the IEEE NMIET student branch team or maintainers of this project.
