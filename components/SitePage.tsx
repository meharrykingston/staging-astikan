import { FaArrowRight, FaCheckCircle, FaPlus } from "react-icons/fa";
import AstikanAnimations from "./AstikanAnimations";
import CTAButtons from "./CTAButtons";
import Footer from "./Footer";
import Header from "./Header";
import SectionIntro from "./SectionIntro";
import DeepContent from "./DeepContent";
import type { Card, SitePageData } from "@/data/site-data";
import { hrefForSlug } from "@/data/site-data";

function CardGrid({ cards, dark = false }: { cards: Card[]; dark?: boolean }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => {
        const content = (
          <>
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className={`grid h-12 w-12 place-items-center rounded-2xl text-lg font-black ${dark ? "bg-white text-[#171550]" : "bg-gradient-to-br from-[#fff0f3] to-[#f1edff] text-[#e7354c]"}`}>
                {card.icon ?? <FaPlus />}
              </span>
              {card.tag ? <span className="rounded-full bg-[#e7354c] px-3 py-1 text-xs font-black text-white">{card.tag}</span> : null}
            </div>
            <h3 className={`text-xl font-black tracking-[-0.035em] ${dark ? "text-white" : "text-[#101249]"}`}>{card.title}</h3>
            <p className={`mt-4 leading-7 ${dark ? "text-white/70" : "text-[#606783]"}`}>{card.body}</p>
            {card.href ? <p className={`mt-5 inline-flex items-center gap-2 text-sm font-black ${dark ? "text-[#ffb8c2]" : "text-[#e7354c]"}`}>Explore <FaArrowRight className="text-xs" /></p> : null}
          </>
        );

        const className = `gsap-reveal group rounded-[2rem] border p-6 transition duration-300 hover:-translate-y-1 ${dark ? "border-white/12 bg-white/10 backdrop-blur hover:bg-white/14" : "border-[#171550]/10 bg-white shadow-[0_20px_70px_rgba(11,29,92,0.06)] hover:border-[#e7354c]/22 hover:shadow-[0_24px_75px_rgba(123,43,189,0.11)]"}`;

        return card.href ? (
          <a key={card.title} href={card.href} className={className} data-aos="fade-up" data-aos-delay={index * 50}>
            {content}
          </a>
        ) : (
          <article key={card.title} className={className} data-aos="fade-up" data-aos-delay={index * 50}>
            {content}
          </article>
        );
      })}
    </div>
  );
}

function Bullets({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <div
          key={`${item}-${index}`}
          className={`rounded-2xl border p-4 text-sm font-extrabold leading-6 ${dark ? "border-white/12 bg-white/10 text-white/84" : "border-[#171550]/10 bg-white text-[#2e345e] shadow-sm"}`}
          data-aos="fade-up"
          data-aos-delay={index * 35}
        >
          <FaCheckCircle className={`mr-3 inline ${dark ? "text-[#ffb8c2]" : "text-[#e7354c]"}`} />
          {item}
        </div>
      ))}
    </div>
  );
}

function Hero({ page }: { page: SitePageData }) {
  const stats = page.stats ?? [];
  const highlights = page.highlights ?? [];

  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(231,53,76,0.20),transparent_32%),radial-gradient(circle_at_84%_0%,rgba(123,43,189,0.23),transparent_34%),linear-gradient(135deg,#ffffff_0%,#fbf7ff_46%,#fff5f7_100%)]" />
      <div className="absolute -right-28 top-28 -z-10 h-[420px] w-[420px] rounded-full bg-[#0b1d5c]/14 blur-3xl" />
      <div className="absolute -left-24 bottom-8 -z-10 h-[360px] w-[360px] rounded-full bg-[#e7354c]/13 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:px-8 lg:pb-24">
        <div>
          <div className="gsap-hero-kicker inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-[#e7354c]/18 bg-white/82 p-1 pr-4 text-xs font-black uppercase tracking-[0.22em] text-[#7b2bbd] shadow-sm backdrop-blur">
            <span className="rounded-full bg-[#171550] px-3 py-2 text-white">Astikan Health</span>
            {page.eyebrow}
          </div>

          <h1 className="gsap-hero-title mt-7 text-balance text-4xl font-black tracking-[-0.06em] text-[#090b2d] sm:text-6xl lg:text-7xl">
            {page.heroTitle}
          </h1>
          <p className="gsap-hero-copy mt-6 max-w-2xl text-lg leading-8 text-[#525a78] sm:text-xl">{page.heroText}</p>

          <div className="mt-8">
            <CTAButtons whatsappText={`Hi Astikan Health, I need help with ${page.navLabel}.`} />
          </div>

          {highlights.length ? (
            <div className="mt-9 flex flex-wrap gap-3">
              {highlights.slice(0, 6).map((item) => (
                <span key={item} className="gsap-hero-card rounded-full border border-[#171550]/10 bg-white/80 px-4 py-2 text-xs font-black text-[#171550] shadow-sm backdrop-blur">
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:mx-0" data-aos="zoom-in" data-aos-delay="120">
          <span className="gsap-orbit absolute -left-3 top-12 hidden rounded-full border border-white/70 bg-white/88 px-4 py-2 text-xs font-black text-[#171550] shadow-xl backdrop-blur md:block">
            {page.badge ?? "Healthcare support"}
          </span>
          <span className="gsap-orbit absolute right-0 top-24 hidden rounded-full border border-white/70 bg-white/88 px-4 py-2 text-xs font-black text-[#e7354c] shadow-xl backdrop-blur md:block">
            24/7 assistance
          </span>

          <div className="relative overflow-hidden rounded-[2.4rem] border border-white/80 bg-white/90 p-4 shadow-[0_34px_100px_rgba(11,29,92,0.16)] backdrop-blur-xl sm:p-6">
            <div className="rounded-[1.8rem] bg-gradient-to-br from-[#e7354c] via-[#7b2bbd] to-[#0b1d5c] p-6 text-white sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-white/62">Astikan care console</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">{page.navLabel} support</h2>
              <p className="mt-4 leading-7 text-white/72">Guided healthcare assistance designed to reduce confusion and help patients move faster.</p>

              <div className="mt-7 grid gap-3">
                {(highlights.length ? highlights : ["Healthcare guidance", "Patient support", "Digital care"]).slice(0, 3).map((item, index) => (
                  <div key={item} className="rounded-3xl border border-white/14 bg-white/12 p-4 backdrop-blur">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-black tracking-[-0.02em]">{item}</span>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-[#171550]">0{index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {stats.length ? (
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {stats.slice(0, 4).map((stat) => (
                  <div key={`${stat.value}-${stat.label}`} className="rounded-3xl border border-[#171550]/10 bg-[#fbf9ff] p-4 text-center">
                    <p className="text-2xl font-black text-[#171550]">{stat.value}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#666c89]">{stat.label}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process({ items }: { items: Card[] }) {
  return (
    <section className="relative overflow-hidden bg-[#090b2d] py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(231,53,76,0.32),transparent_31%),radial-gradient(circle_at_82%_50%,rgba(123,43,189,0.30),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionIntro light eyebrow="How it works" title="A simple assisted journey with Astikan Health." description="Every healthcare service is designed to feel clear, guided and patient-friendly." />
          <div className="grid gap-4 md:grid-cols-2">
            {items.map((item, index) => (
              <article key={item.title} className="rounded-[2rem] border border-white/12 bg-white/10 p-6 backdrop-blur" data-aos="fade-up" data-aos-delay={index * 70}>
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-black text-[#171550]">{item.icon ?? `0${index + 1}`}</div>
                <h3 className="text-xl font-black tracking-[-0.035em]">{item.title}</h3>
                <p className="mt-4 leading-7 text-white/70">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Callback({ page }: { page: SitePageData }) {
  return (
    <section id="callback" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-[#090b2d] text-white shadow-[0_34px_110px_rgba(9,11,45,0.25)]">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative p-7 sm:p-10 lg:p-14">
              <div className="absolute right-6 top-6 h-28 w-28 rounded-full bg-[#e7354c]/25 blur-2xl" />
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#ffb8c2]">Connect with Astikan Health today</p>
              <h2 className="mt-5 text-balance text-3xl font-black tracking-[-0.05em] sm:text-5xl">Need help with {page.navLabel.toLowerCase()}?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">Talk to Astikan’s healthcare support team for guidance, bookings, coordination and patient-friendly assistance.</p>
              <div className="mt-8">
                <CTAButtons whatsappText={`Hi Astikan Health, I need support for ${page.navLabel}.`} />
              </div>
            </div>

            <form className="bg-white p-6 text-[#171550] sm:p-8 lg:p-10" aria-label="Request callback form">
              <h3 className="text-2xl font-black tracking-[-0.04em] text-[#101249]">Request a callback</h3>
              <p className="mt-2 text-sm leading-6 text-[#606783]">Share your details and the healthcare support team can guide you with the next step.</p>
              <div className="mt-6 grid gap-4">
                <label className="grid gap-2 text-sm font-extrabold text-[#2e345e]">
                  Full name
                  <input className="rounded-2xl border border-[#171550]/12 bg-[#f8f7ff] px-4 py-3 outline-none transition focus:border-[#e7354c] focus:bg-white" placeholder="Enter your name" />
                </label>
                <label className="grid gap-2 text-sm font-extrabold text-[#2e345e]">
                  Mobile number
                  <input className="rounded-2xl border border-[#171550]/12 bg-[#f8f7ff] px-4 py-3 outline-none transition focus:border-[#e7354c] focus:bg-white" placeholder="+91" />
                </label>
                <label className="grid gap-2 text-sm font-extrabold text-[#2e345e]">
                  Service needed
                  <select className="rounded-2xl border border-[#171550]/12 bg-[#f8f7ff] px-4 py-3 outline-none transition focus:border-[#e7354c] focus:bg-white" defaultValue={page.navLabel}>
                    <option>{page.navLabel}</option>
                    <option>Doctor consultation</option>
                    <option>Lab test booking</option>
                    <option>Medicine support</option>
                    <option>Surgery guidance</option>
                    <option>Medical finance</option>
                    <option>Insurance support</option>
                  </select>
                </label>
                <a href="https://wa.me/919990071792?text=Hi%20Astikan%20Health%2C%20please%20call%20me%20back." target="_blank" rel="noreferrer" className="mt-2 rounded-full bg-gradient-to-r from-[#e7354c] via-[#7b2bbd] to-[#0b1d5c] px-6 py-4 text-center text-sm font-black text-white shadow-lg shadow-indigo-950/15 transition hover:-translate-y-1">
                  Submit Callback Request
                </a>
                <p className="text-xs leading-5 text-[#6a708d]">For urgent help, call or WhatsApp Astikan Health directly.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection({ faqs }: { faqs: NonNullable<SitePageData["faqs"]> }) {
  return (
    <section className="bg-[#f7f6ff] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
        <SectionIntro eyebrow="Frequently asked questions" title="Clear answers before you move ahead." description="Astikan Health keeps patient support simple, transparent and easy to understand." />
        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group rounded-3xl border border-[#171550]/10 bg-white p-5 shadow-[0_16px_45px_rgba(11,29,92,0.04)]" data-aos="fade-left" data-aos-delay={index * 45}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-black tracking-[-0.02em] text-[#101249]">
                {faq.question}
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#fff0f3] text-[#e7354c] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 border-t border-[#171550]/10 pt-4 leading-7 text-[#606783]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SitePage({ page }: { page: SitePageData }) {
  return (
    <>
      <AstikanAnimations />
      <Header />
      <main className="overflow-hidden bg-white text-[#101249]">
        <Hero page={page} />

        <section id="services" className="border-y border-[#171550]/10 bg-white py-10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 sm:px-6 lg:px-8">
            {page.highlights?.slice(0, 8).map((item) => (
              <span key={item} className="rounded-full border border-[#171550]/10 bg-[#f7f6ff] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#3d426b]">
                {item}
              </span>
            ))}
          </div>
        </section>

        {page.sections.map((section, index) => {
          const dark = index % 3 === 2 && !page.policy;
          return (
            <section key={`${section.title}-${index}`} className={`py-20 sm:py-24 ${dark ? "bg-[#090b2d] text-white" : index % 2 === 1 ? "bg-[#fbf9ff]" : "bg-white"}`}>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={section.cards || section.bullets ? "grid gap-10 lg:grid-cols-[0.82fr_1.18fr]" : "mx-auto max-w-4xl"}>
                  <SectionIntro
                    eyebrow={section.eyebrow}
                    title={section.title}
                    description={section.body}
                    light={dark}
                    align={section.cards || section.bullets ? "left" : "center"}
                  />

                  {section.cards ? <CardGrid cards={section.cards} dark={dark} /> : null}
                  {section.bullets ? <Bullets items={section.bullets} dark={dark} /> : null}
                </div>
              </div>
            </section>
          );
        })}

        <DeepContent page={page} />
        {page.process ? <Process items={page.process} /> : null}
        {page.faqs ? <FAQSection faqs={page.faqs} /> : null}
        <Callback page={page} />
      </main>
      <Footer />
    </>
  );
}
