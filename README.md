# Isaac Tan — Portfolio

Personal portfolio site built with Nuxt 3, TypeScript, Tailwind CSS, and Nuxt UI.

Live: [isaactan.vercel.app](https://isaactan.vercel.app)

## Tech Stack

- **Framework**: Nuxt 3 + TypeScript
- **UI**: Nuxt UI + Tailwind CSS
- **Deploy**: Vercel

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero, featured projects, freelance CTA |
| `/about` | Bio, experience timeline, tech stack |
| `/projects` | 3 detailed case studies |
| `/contact` | Contact form + social links |

## Development

```bash
npm install
npm run dev       # localhost:3000
```

## Build & Deploy

```bash
npm run build     # SSR build (Vercel)
npm run generate  # Static build
npm run preview   # Preview production build locally
```

Deploys automatically to Vercel on push to `master`.

## Contact Form

The form UI is complete. To wire up email sending, add your service credentials to `.env` and update `pages/contact.vue`:

- **[EmailJS](https://www.emailjs.com/)** — client-side, no backend needed
- **[Resend](https://resend.com/)** — server-side via `server/api/contact.post.ts`
