import CTAButtons from "./CTAButtons";
import type { SitePageData } from "@/data/site-data";
import { pdfContentBySlug, type PdfContentBlock } from "@/data/pdf-content";

const pageIcons: Record<string, string> = {
  home: "✚",
  "about-us": "◇",
  "contact-us": "☎",
  careers: "↗",
  "partner-with-us": "🤝",
  faq: "?",
  "lab-tests": "🧪",
  doctors: "🩺",
  medicines: "💊",
  surgery: "🏥",
  insurance: "🛡",
  "medical-finance": "₹",
  "health-packages": "❤",
  blogs: "✍",
  testimonials: "★",
  "success-stories": "✓",
  "hospital-partners": "H",
  "diagnostic-centers": "D",
  "privacy-policy": "🔒",
  "terms-and-conditions": "§",
  "refund-policy": "↺",
  "cancellation-policy": "×",
  "cookie-policy": "🍪",
  disclaimer: "!",
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 54);
}

function SmartIllustration({ icon, index, dark = false }: { icon: string; index: number; dark?: boolean }) {
  return (
    <div className="relative min-h-44 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#e7354c] via-[#7b2bbd] to-[#0b1d5c] p-5 text-white shadow-[0_24px_80px_rgba(11,29,92,0.18)]">
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/16 blur-2xl" />
      <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-[#ffb8c2]/22 blur-2xl" />
      <div className="relative z-10 flex h-full min-h-36 flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/18 text-2xl font-black backdrop-blur">{icon}</span>
          <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white/78">Widget {String(index + 1).padStart(2, "0")}</span>
        </div>
        <svg className="mt-8 h-24 w-full" viewBox="0 0 360 120" fill="none" aria-hidden="true">
          <path d="M10 94C48 52 82 52 121 77C162 103 191 99 226 58C257 21 304 17 348 46" stroke="rgba(255,255,255,.72)" strokeWidth="10" strokeLinecap="round" />
          <path d="M27 63H93M132 38H220M250 85H333" stroke="rgba(255,255,255,.22)" strokeWidth="12" strokeLinecap="round" />
          <circle cx="96" cy="73" r="11" fill="white" />
          <circle cx="226" cy="58" r="11" fill="white" />
          <circle cx="309" cy="31" r="11" fill="white" />
        </svg>
      </div>
      <div className={`absolute inset-0 rounded-[2rem] ${dark ? "ring-1 ring-white/18" : ""}`} />
    </div>
  );
}

function ChecklistBlock({ block, index, icon }: { block: PdfContentBlock; index: number; icon: string }) {
  const bullets = block.bullets ?? [];

  return (
    <article id={slugify(block.title)} className="gsap-reveal scroll-mt-28 overflow-hidden rounded-[2.2rem] border border-[#171550]/10 bg-white shadow-[0_24px_90px_rgba(11,29,92,0.07)]" data-aos="fade-up">
      <div className="grid gap-0 xl:grid-cols-[0.72fr_1.28fr]">
        <div className="bg-[#090b2d] p-6 text-white sm:p-8">
          <SmartIllustration icon={icon} index={index} dark />
          <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-[#ffb8c2]">Astikan detail section</p>
          <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] sm:text-3xl">{block.title}</h3>
          {block.body ? <p className="mt-4 leading-8 text-white/70">{block.body}</p> : null}
        </div>
        <div className="p-6 sm:p-8">
          <div className="grid gap-3 sm:grid-cols-2">
            {bullets.map((item, itemIndex) => (
              <div key={`${item}-${itemIndex}`} className="group rounded-3xl border border-[#171550]/10 bg-[#fbf9ff] p-4 transition hover:-translate-y-1 hover:border-[#e7354c]/25 hover:bg-white hover:shadow-[0_16px_55px_rgba(123,43,189,0.10)]" data-aos="zoom-in" data-aos-delay={itemIndex * 35}>
                <div className="flex gap-3">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-r from-[#e7354c] to-[#7b2bbd] text-xs font-black text-white">✓</span>
                  <p className="text-sm font-bold leading-6 text-[#343a65]">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function NarrativeBlock({ block, index, icon }: { block: PdfContentBlock; index: number; icon: string }) {
  const reverse = index % 2 === 1;

  return (
    <article id={slugify(block.title)} className="gsap-reveal scroll-mt-28 rounded-[2.2rem] border border-[#171550]/10 bg-white p-5 shadow-[0_20px_70px_rgba(11,29,92,0.055)] sm:p-7" data-aos="fade-up">
      <div className={`grid items-center gap-7 lg:grid-cols-[0.9fr_1.1fr] ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <SmartIllustration icon={icon} index={index} />
        <div>
          <div className="mb-5 inline-flex rounded-full border border-[#e7354c]/15 bg-[#fff0f3] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#e7354c]">Detailed content</div>
          <h3 className="text-balance text-2xl font-black tracking-[-0.045em] text-[#090b2d] sm:text-4xl">{block.title}</h3>
          {block.body ? <p className="mt-5 text-base leading-8 text-[#5c6380] sm:text-lg">{block.body}</p> : null}
        </div>
      </div>
    </article>
  );
}

function StatementBlock({ block, index, icon }: { block: PdfContentBlock; index: number; icon: string }) {
  return (
    <article id={slugify(block.title)} className="gsap-reveal scroll-mt-28 overflow-hidden rounded-[2.2rem] bg-[#090b2d] text-white shadow-[0_30px_110px_rgba(9,11,45,0.25)]" data-aos="fade-up">
      <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(231,53,76,0.34),transparent_30%),radial-gradient(circle_at_82%_60%,rgba(123,43,189,0.36),transparent_34%)]" />
        <div className="relative z-10">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#ffb8c2]">Important Astikan content</p>
          <h3 className="mt-4 text-balance text-3xl font-black tracking-[-0.05em] sm:text-5xl">{block.title}</h3>
          {block.body ? <p className="mt-6 text-lg leading-8 text-white/72">{block.body}</p> : null}
          {block.bullets?.length ? (
            <div className="mt-7 flex flex-wrap gap-3">
              {block.bullets.slice(0, 8).map((item) => (
                <span key={item} className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs font-bold text-white/82 backdrop-blur">{item}</span>
              ))}
            </div>
          ) : null}
        </div>
        <div className="relative z-10">
          <SmartIllustration icon={icon} index={index} dark />
        </div>
      </div>
    </article>
  );
}

function InlineCta({ page }: { page: SitePageData }) {
  return (
    <div className="gsap-reveal rounded-[2rem] border border-[#e7354c]/15 bg-gradient-to-r from-[#fff4f6] via-white to-[#f3efff] p-5 shadow-[0_20px_70px_rgba(123,43,189,0.08)] sm:p-7" data-aos="fade-up">
      <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e7354c]">Need guided support?</p>
          <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#090b2d]">Talk to Astikan Health about {page.navLabel.toLowerCase()}.</h3>
          <p className="mt-2 leading-7 text-[#606783]">Use call, WhatsApp or callback so the support team can guide the next healthcare step clearly.</p>
        </div>
        <CTAButtons compact whatsappText={`Hi Astikan Health, I need help with ${page.navLabel}.`} />
      </div>
    </div>
  );
}

export default function DeepContent({ page }: { page: SitePageData }) {
  const blocks = (pdfContentBySlug[page.slug] ?? []).filter((block) => block.title || block.body || block.bullets?.length);
  if (!blocks.length) return null;

  const icon = pageIcons[page.slug] ?? "✚";
  const toc = blocks.slice(0, 14);

  return (
    <section className="relative overflow-hidden bg-[#f8f7ff] py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_10%,rgba(231,53,76,0.10),transparent_26%),radial-gradient(circle_at_94%_8%,rgba(11,29,92,0.12),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#e7354c]">Full page content system</p>
            <h2 className="mt-4 text-balance text-3xl font-black tracking-[-0.055em] text-[#090b2d] sm:text-5xl">Every important point from the Astikan content document, designed as modern sections.</h2>
          </div>
          <p className="text-lg leading-8 text-[#606783]">This page expands the uploaded SEO content into multiple animated content widgets, service cards, checklists, CTA panels, policy blocks and patient-focused explanations instead of repeating the same short copy.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[2rem] border border-[#171550]/10 bg-white/84 p-5 shadow-[0_18px_70px_rgba(11,29,92,0.07)] backdrop-blur-xl">
              <div className="flex items-center gap-3 border-b border-[#171550]/10 pb-4">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-r from-[#e7354c] to-[#7b2bbd] text-lg font-black text-white">{icon}</span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#e7354c]">Page map</p>
                  <h3 className="text-lg font-black text-[#090b2d]">{page.navLabel}</h3>
                </div>
              </div>
              <nav className="mt-4 grid gap-2" aria-label={`${page.navLabel} detailed page navigation`}>
                {toc.map((block, index) => (
                  <a key={`${block.title}-${index}`} href={`#${slugify(block.title)}`} className="group rounded-2xl px-3 py-2.5 text-sm font-bold leading-5 text-[#555d7b] transition hover:bg-[#fff0f3] hover:text-[#e7354c]">
                    <span className="mr-2 text-xs font-black text-[#aab0c5] group-hover:text-[#e7354c]">{String(index + 1).padStart(2, "0")}</span>
                    {block.title.length > 58 ? `${block.title.slice(0, 58)}…` : block.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="grid gap-7">
            {blocks.map((block, index) => {
              const hasBullets = Boolean(block.bullets?.length);
              const useStatement = index % 7 === 0;
              return (
                <div key={`${block.title}-${index}`} className="grid gap-7">
                  {useStatement ? (
                    <StatementBlock block={block} index={index} icon={icon} />
                  ) : hasBullets ? (
                    <ChecklistBlock block={block} index={index} icon={icon} />
                  ) : (
                    <NarrativeBlock block={block} index={index} icon={icon} />
                  )}
                  {(index + 1) % 6 === 0 && index < blocks.length - 1 ? <InlineCta page={page} /> : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
