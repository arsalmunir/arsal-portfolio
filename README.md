# Arsal Munir — Personal Portfolio

A responsive, modern-dark professional portfolio built with React, TypeScript, Vite and CSS. No paid services, database or API keys required.

## 1. Run on your computer

Install Node.js (current supported LTS), open a terminal in this project folder and run:

```bash
npm install
npm run dev
```

Open the localhost link shown by Vite (typically http://localhost:5173).

## 2. PERSONALIZE BEFORE YOU PUBLISH

Edit `src/content.ts`:

- `profile.email`: your **personal** public email, not a company-owned address unless you have permission.
- `profile.linkedin`: the full URL of your LinkedIn profile.
- `profile.github`: the full URL of your GitHub profile.
- `profile.resume`: set to `/resume.pdf` after putting your PDF in `public/resume.pdf` (remove confidential personal details first).
- Adjust experience dates, descriptions, skills and selected work to accurately reflect what you want to publish.
- Selected work descriptions are intentionally high-level. Do not add employer secrets, internal code, customer data or restricted project names without permission.

A fallback LinkedIn link is provided if your contact links have not yet been supplied. Replace it before sharing your portfolio with recruiters.

## 3. Check the production build

```bash
npm run build
npm run preview
```

Vite creates the publishable site in `dist/`.

## 4. Publish for free with GitHub + Vercel

1. Sign in or create accounts at https://github.com and https://vercel.com.
2. Create a new **public or private** GitHub repository called `arsal-portfolio` (a private repo is fine with Vercel's Git integration).
3. From this folder run the commands below, replacing `YOUR_GITHUB_USERNAME`:

```bash
git init
git add .
git commit -m "Launch personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/arsal-portfolio.git
git push -u origin main
```

4. At https://vercel.com/new choose **Add New → Project**, import your GitHub repository, select the Vite framework if it is not autodetected, leave build command as `npm run build` and output directory as `dist`, and click **Deploy**.
5. Vercel gives you a free `*.vercel.app` address. Later pushes to `main` automatically redeploy your website.

**Free-tier note:** Vercel Hobby is for personal, non-commercial use. This personal job-search portfolio generally fits that purpose, but review Vercel's current terms before using the site for paid services or company business.

## Optional next steps

- Add a headshot or original screenshots only if you have usage rights and want them public.
- Buy a custom domain only if you want one; the Vercel subdomain is free.
- Test mobile layouts and all links after deploying.

## Structure

```
src/content.ts    ← all editable profile content
src/main.tsx      ← React layout and sections
src/style.css     ← dark theme and responsive styling
public/           ← static assets (such as resume.pdf)
index.html        ← page title and metadata
```
