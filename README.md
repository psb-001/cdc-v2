# CDC Website — Career Development Cell | MES MLCOE

Official website for the Career Development Cell at MES Mukunddas Lohia College of Engineering, Pune.

## Quick Start

```bash
npm install
npm run dev
```

App runs at **http://localhost:3000**

## Tech Stack

- **React 19** + TypeScript
- **Vite 6** (build tool)
- **Tailwind CSS 4** (styling)
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Project Structure

```
src/
├── assets/        # Images & logos
├── components/    # Navbar
├── sections/      # All page sections (Hero, About, Programs, etc.)
├── App.tsx        # Root component
├── index.css      # Global styles
└── main.tsx       # Entry point
```

## Sections

| Section | Description |
|---------|-------------|
| Hero | Main landing with stats and CTA |
| About | Mission, vision, and 4 pillars |
| Programs | 6 training program cards |
| Events | 7-day IoT & AI workshop schedule |
| Leadership | Principal and Faculty Coordinator |
| Team | 7 CDC team members |
| Contact | Email, phone, and address |
| Footer | Brand, nav links, copyright |

## Build

```bash
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # TypeScript check
```