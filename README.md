# KG Portfolio

Personal portfolio site for Kaustav Ghosh — GenAI engineer and systems builder.

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v3** — utility-first styling with custom design tokens
- **GSAP + ScrollTrigger** — scroll-driven animations and pinned sections
- **lucide-react** — icons
- **Vercel** — deployment

## Project Structure

```
app/
├── public/          # Static assets (images, PDF, favicon)
├── src/
│   ├── App.tsx      # Single-page app — all sections live here
│   ├── index.css    # Global styles, custom utilities, grain overlay
│   └── main.tsx     # Entry point
├── index.html       # SEO meta tags, OG tags
└── package.json
```

## Running Locally

```bash
cd app
npm install
npm run dev
```

App runs at `http://localhost:5173`.

## Building

```bash
npm run build
```

Output goes to `app/dist/`.

## Sections

1. **Hero** — portrait, intro, CTA buttons (pinned + scroll exit animation)
2. **Featured Work** — 3 project cards (pinned + scroll animation)
3. **Work Index** — full list of projects with tags
4. **Manifesto** — personal statement (pinned)
5. **Principles** — 3 principle cards (pinned)
6. **Writing** — essays and research (pinned); MSc thesis links to PDF
7. **Reading List** — books and papers
8. **Education & Awards** — degrees and recognitions
9. **Contact** — email, LinkedIn, GitHub

## Notes

- No trackers, no analytics.
- CV links to `/Kaustav_Ghosh_CV_2026.docx` in `public/`.
- MSc thesis links to `/KAUSTAV_GHOSH_MASTERS.pdf` in `public/`.
- Nav scroll uses `ScrollTrigger.getById()` to account for GSAP pin spacers.
