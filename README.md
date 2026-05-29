# Astikan Health Next.js Website

Updated responsive Next.js website for Astikan Health using the provided sitemap, uploaded healthcare content, Astikan red / dark blue / violet gradient palette, uploaded logo, AOS scroll animations and GSAP entrance/scroll animation setup.

## Pages included

- Home
- About Us
- Contact Us
- Careers
- Partner With Us
- FAQ
- Lab Tests
- Doctors
- Medicines
- Surgery
- Insurance
- Medical Finance
- Health Packages
- Blogs
- Testimonials
- Success Stories
- Hospital Partners
- Diagnostic Centers
- Privacy Policy
- Terms & Conditions
- Refund Policy
- Cancellation Policy
- Cookie Policy
- Disclaimer

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Notes

- Main page/content config: `data/site-data.ts`
- Shared page renderer: `components/SitePage.tsx`
- Header/footer navigation uses the full sitemap.
- AOS and GSAP are initialized in `components/AstikanAnimations.tsx`.
- Uploaded Astikan logo is stored at `public/astikan-logo.png`.
