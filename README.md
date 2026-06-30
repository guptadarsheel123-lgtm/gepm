# Gupta Enterprises — Website

A fast, modern marketing website for **Gupta Enterprises**, an infrastructure &
road-construction company based in Mandsaur, Madhya Pradesh. Built to look and
feel like leading infrastructure firms (clean, confident, content-rich), while
staying simple to maintain and cheap to host.

> **Status:** First version with **realistic placeholder content** drawn from
> publicly available information. Before going live, replace the items in the
> [Go-live checklist](#go-live-checklist) with verified, real details, photos
> and logo.

---

## Tech stack

- **[Astro](https://astro.build/)** — static site generator (fast, SEO-friendly, no heavy JS)
- **[Tailwind CSS v4](https://tailwindcss.com/)** — styling/design system
- Self-hosted fonts (Sora + Inter) via `@fontsource`
- Auto-generated `sitemap.xml`, SEO meta tags, Open Graph image, and JSON-LD structured data

## Running locally

```bash
npm install      # install dependencies (first time only)
npm run dev      # start dev server at http://localhost:4321
npm run build    # build production site into dist/
npm run preview  # preview the production build locally
```

Requires Node.js 18.20+ / 20.3+ / 22+.

## Project structure

```
src/
  consts.ts              ← company name, phone, email, address, nav, socials  (EDIT ME)
  data/content.ts        ← services, projects, stats, clients, equipment, timeline (EDIT ME)
  layouts/Layout.astro   ← shared page shell, SEO meta, structured data
  components/             ← Header, Footer, Hero pieces, cards, buttons, icons
  pages/                  ← one file per page (index, about, services, projects, …)
  styles/global.css      ← brand colours, fonts, design tokens
public/                  ← favicon, og-image, robots.txt, and any real images you add
```

## How to edit content

Most text and data lives in **two files** — no design knowledge needed:

- **`src/consts.ts`** — phone number, email, address, office hours, social links, menu.
- **`src/data/content.ts`** — the stats counters, list of services, projects,
  clients, equipment and the company timeline. Each is a simple list you can
  add to or edit. Look for `// TODO` comments marking numbers to verify.

After editing, run `npm run build` (or `npm run dev` to preview live).

## Replacing the placeholders

- **Logo** — currently an SVG monogram in `src/components/Logo.astro` and
  `public/favicon.svg`. Drop your real logo into `public/` and reference it.
- **Project / section photos** — cards currently use branded gradient
  placeholders. Replace the placeholder blocks with real `<img>` photos of your
  projects, equipment and team for maximum impact.
- **Contact form** — works out of the box by opening the visitor's email app.
  To collect submissions in your inbox automatically, create a free endpoint at
  [web3forms.com](https://web3forms.com) or [formspree.io](https://formspree.io)
  and paste it into `FORM_ENDPOINT` in `src/pages/contact.astro`.

## Deploying

This is a static site — host it free on any of these (all support custom
domains, so you can keep **guptaenterprise.in**):

- **Netlify** / **Vercel** / **Cloudflare Pages** — connect this Git repo;
  build command `npm run build`, output directory `dist`.

Then point the `guptaenterprise.in` DNS to the host and enable HTTPS.
Remember to keep `site:` in `astro.config.mjs` set to the final domain.

## Go-live checklist

- [ ] Real **phone number** and **email** in `src/consts.ts`
- [ ] Confirm exact **address** + Google Maps location
- [ ] Replace **logo** and favicon with brand assets
- [ ] Add real **project photos** and verify project names/clients/years/values
- [ ] Verify the **stat figures** (km of roads, number of projects) in `content.ts`
- [ ] Confirm **clients / approvals / certifications** details
- [ ] Update **careers** with live openings (or set the list to empty)
- [ ] Add real **social media** links (or remove the icons)
- [ ] Connect the **contact form** to a form service
- [ ] Set up the **custom domain** + HTTPS
```
