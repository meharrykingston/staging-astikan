import type { ReactNode } from "react";
import AstikanAnimations from "./AstikanAnimations";
import CTAButtons from "./CTAButtons";
import Header from "./Header";
import SectionIntro from "./SectionIntro";

const trustPoints = [
  "Genuine medicines support",
  "Easy prescription upload",
  "Regular refill assistance",
  "Patient-friendly support",
];

const patientProblems = [
  "Medicines being out of stock",
  "Delayed medicine delivery",
  "Fake or low-quality medicine worries",
  "Difficult prescription uploads",
  "Confusing healthcare apps",
  "Multiple pharmacy visits",
];

const trustCards = [
  {
    icon: "✓",
    title: "Genuine Medicines & Trusted Healthcare Support",
    body: "Patient safety comes first. Astikan Health focuses on medicine reliability and trusted healthcare assistance for every patient.",
  },
  {
    icon: "⇧",
    title: "Easy Prescription Upload",
    body: "Upload your doctor’s prescription online quickly and easily. Our healthcare support team assists you throughout the process.",
  },
  {
    icon: "⚡",
    title: "Fast & Convenient Medicine Assistance",
    body: "Avoid standing in long pharmacy queues or searching multiple medical stores for medicines.",
  },
  {
    icon: "∞",
    title: "Support for Chronic Care Medicines",
    body: "Get assistance for diabetes, blood pressure, thyroid, heart care and long-term treatment medicine requirements.",
  },
  {
    icon: "♡",
    title: "Healthcare Support for Families & Senior Citizens",
    body: "Astikan Health simplifies healthcare for busy professionals, families, caregivers, and elderly patients.",
  },
  {
    icon: "☏",
    title: "Human Support When You Need It",
    body: "Talk to a healthcare support team instead of being stuck inside confusing apps and uncertain checkout flows.",
  },
];

const careNeeds = [
  "Monthly medicine refills",
  "Emergency medicine support",
  "Long-term treatment medicines",
  "Post-surgery medicine requirements",
  "Prescription medicine assistance",
  "Healthcare guidance and support",
];

const steps = [
  {
    title: "Upload Your Prescription",
    body: "Share your doctor’s prescription online through WhatsApp or Astikan’s healthcare support flow.",
  },
  {
    title: "Get Medicine Assistance",
    body: "The support team reviews your medicine requirements and guides you with the next steps.",
  },
  {
    title: "Confirm Your Order",
    body: "Receive support for availability, medicine guidance, and order confirmation.",
  },
  {
    title: "Stay Connected",
    body: "Get continuous healthcare support whenever you need help with regular medicines or urgent requirements.",
  },
];

const serviceCards = [
  "Online Doctor Consultations",
  "Lab Tests",
  "Full Body Health Checkups",
  "Health Packages",
  "Medical Finance Support",
  "Surgery Assistance",
  "Insurance Support",
  "Healthcare Guidance",
];

const faqs = [
  {
    question: "How can I order medicines online from Astikan Health?",
    answer: "You can upload your prescription online and connect with Astikan’s healthcare support team for medicine assistance.",
  },
  {
    question: "Are medicines from Astikan Health genuine?",
    answer: "Astikan Health focuses on trusted healthcare support and medicine reliability for patient safety and convenience.",
  },
  {
    question: "Can I upload prescriptions online?",
    answer: "Yes. Patients can upload prescriptions online easily for healthcare assistance and medicine support.",
  },
  {
    question: "Does Astikan Health support monthly medicine refills?",
    answer: "Yes. Astikan Health supports recurring healthcare assistance and chronic care medicine requirements.",
  },
  {
    question: "Can I get help finding unavailable medicines?",
    answer: "Yes. The healthcare support team assists patients with medicine-related queries and healthcare support.",
  },
  {
    question: "Does Astikan Health only provide medicines?",
    answer: "No. Astikan Health also offers doctor consultations, lab tests, surgeries, insurance support, and other healthcare services.",
  },
];

function FloatingPill({ className, children }: { className: string; children: ReactNode }) {
  return <div className={`gsap-orbit absolute hidden rounded-full border border-white/70 bg-white/85 px-4 py-2 text-xs font-black text-[#063f36] shadow-xl backdrop-blur md:block ${className}`}>{children}</div>;
}

export default function MedicineLanding() {
  return (
    <>
      <AstikanAnimations />
      <Header />
      <main id="home" className="overflow-hidden bg-[#fbfffd] text-[#173b34]">
        <section className="relative isolate min-h-screen pt-28 sm:pt-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(0,168,132,0.18),transparent_34%),radial-gradient(circle_at_82%_8%,rgba(249,178,51,0.18),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f1fff9_58%,#ffffff_100%)]" />
          <div className="absolute left-1/2 top-24 -z-10 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-[#00a884]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
            <div>
              <div className="gsap-hero-kicker inline-flex flex-wrap items-center gap-2 rounded-full border border-[#00a884]/20 bg-white/80 p-1 pr-4 text-xs font-black uppercase tracking-[0.2em] text-[#007a65] shadow-sm backdrop-blur">
                <span className="rounded-full bg-[#063f36] px-3 py-2 text-white">Astikan Health</span>
                Trusted medicine delivery across India
              </div>

              <h1 className="gsap-hero-title mt-7 text-balance text-4xl font-black tracking-[-0.055em] text-[#052f28] sm:text-6xl lg:text-7xl">
                Order Genuine Medicines Online with Astikan Health
              </h1>
              <p className="gsap-hero-copy mt-6 max-w-2xl text-lg leading-8 text-[#4d655e] sm:text-xl">
                Buy prescription medicines, chronic care medicines, emergency healthcare support, and monthly refills safely with easy prescription upload and patient-first assistance.
              </p>

              <div className="mt-8">
                <CTAButtons />
              </div>

              <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label="Astikan medicine ordering benefits">
                {trustPoints.map((point, index) => (
                  <div
                    key={point}
                    className="gsap-float-card rounded-3xl border border-[#063f36]/10 bg-white/80 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.07)] backdrop-blur"
                  >
                    <div className="mb-3 grid h-9 w-9 place-items-center rounded-2xl bg-[#eafff8] text-sm font-black text-[#00a884]">0{index + 1}</div>
                    <p className="text-sm font-extrabold leading-5 text-[#123c34]">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:mx-0" data-aos="zoom-in" data-aos-delay="150">
              <FloatingPill className="-left-5 top-12">Prescription upload</FloatingPill>
              <FloatingPill className="right-0 top-24">Senior citizen support</FloatingPill>
              <FloatingPill className="bottom-20 left-0">Monthly refills</FloatingPill>

              <div className="relative rounded-[2.2rem] border border-white/80 bg-white/88 p-4 shadow-[0_30px_90px_rgba(6,63,54,0.16)] backdrop-blur-xl sm:p-6">
                <div className="rounded-[1.7rem] bg-gradient-to-br from-[#063f36] via-[#0a6d5a] to-[#00a884] p-5 text-white sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-white/65">Live Medicine Desk</p>
                      <h2 className="mt-2 text-2xl font-black tracking-[-0.04em]">Patient support active</h2>
                    </div>
                    <div className="grid h-14 w-14 place-items-center rounded-3xl bg-white/15 text-2xl">✚</div>
                  </div>

                  <div className="mt-7 grid gap-3">
                    {[
                      ["Upload received", "Prescription checked for medicine assistance", "Done"],
                      ["Availability support", "Helping with regular and urgent medicine needs", "Live"],
                      ["Family refill reminder", "Monthly chronic care medicines organized", "Ready"],
                    ].map(([title, body, badge]) => (
                      <div key={title} className="rounded-3xl border border-white/15 bg-white/12 p-4 backdrop-blur">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-black tracking-[-0.02em]">{title}</h3>
                            <p className="mt-1 text-sm leading-6 text-white/72">{body}</p>
                          </div>
                          <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-[#063f36]">{badge}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {[
                    ["24/7", "Support"],
                    ["4-step", "Ordering"],
                    ["India", "Delivery help"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-3xl border border-[#063f36]/10 bg-[#f6fffb] p-4 text-center">
                      <p className="text-2xl font-black text-[#063f36]">{value}</p>
                      <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#5f766f]">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="order" className="relative py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
            <SectionIntro
              eyebrow="Online medicine delivery made simple"
              title="Finding medicines should not feel stressful."
              description="Astikan Health helps simplify medicine ordering with trusted healthcare assistance and reliable patient support for you, your parents, children, and senior citizens."
            />

            <div className="grid gap-4 sm:grid-cols-2" data-aos="fade-left">
              {patientProblems.map((problem) => (
                <div key={problem} className="group rounded-3xl border border-[#063f36]/10 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-[#00a884]/25 hover:shadow-[0_22px_60px_rgba(0,168,132,0.10)]">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-2xl bg-[#fff7e7] text-sm font-black text-[#c47b00]">!</span>
                    <p className="font-extrabold leading-7 text-[#163d35]">{problem}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="trust" className="bg-[#f4fffb] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              align="center"
              eyebrow="Why patients trust Astikan Health"
              title="Medicine support designed around safety, clarity, and real human help."
              description="Astikan Health focuses on reliable medicine assistance, easy prescription upload, chronic care support, and a patient-friendly healthcare experience."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {trustCards.map((card, index) => (
                <article
                  key={card.title}
                  className="gsap-count-card rounded-[2rem] border border-[#063f36]/10 bg-white p-6 shadow-[0_20px_70px_rgba(6,63,54,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#00a884]/25"
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#eafff8] text-xl font-black text-[#00a884]">{card.icon}</div>
                  <h3 className="text-xl font-black tracking-[-0.03em] text-[#062c25]">{card.title}</h3>
                  <p className="mt-4 leading-7 text-[#536660]">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
            <div data-aos="fade-right">
              <SectionIntro
                eyebrow="Healthcare support for every family"
                title="Regular medicines, urgent needs, and long-term care in one simple flow."
                description="Our goal is to make healthcare simple, accessible, and patient-friendly, especially for families managing recurring medicines."
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {careNeeds.map((need) => (
                  <div key={need} className="rounded-2xl border border-[#063f36]/10 bg-white p-4 font-extrabold text-[#173b34] shadow-sm">
                    <span className="mr-3 text-[#00a884]">●</span>
                    {need}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#063f36]/10 bg-gradient-to-br from-[#fff7e7] to-[#eafff8] p-6 shadow-[0_30px_90px_rgba(6,63,54,0.10)]" data-aos="fade-left">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#007a65]">Chronic care focus</p>
              <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#062c25]">Support for diabetes, blood pressure, thyroid, heart care, and long-term treatments.</h3>
              <p className="mt-5 leading-8 text-[#536660]">Patients managing monthly medicines need clarity and continuity. Astikan turns repeat healthcare needs into a simple assisted ordering experience.</p>
              <div className="mt-7 rounded-3xl bg-white/80 p-5">
                <div className="flex items-center justify-between border-b border-[#063f36]/10 pb-4">
                  <span className="font-black text-[#063f36]">Monthly refill desk</span>
                  <span className="rounded-full bg-[#00a884] px-3 py-1 text-xs font-black text-white">Active</span>
                </div>
                <div className="grid gap-3 pt-4 text-sm font-bold text-[#506861]">
                  <span>✓ Prescription assistance</span>
                  <span>✓ Regular medicine support</span>
                  <span>✓ Family healthcare guidance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="relative bg-[#062c25] py-20 text-white sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,168,132,0.32),transparent_28%),radial-gradient(circle_at_85%_40%,rgba(249,178,51,0.18),transparent_30%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div data-aos="fade-up">
                <p className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#aaf5df]">How to order medicines</p>
                <h2 className="text-balance text-3xl font-black tracking-[-0.04em] sm:text-5xl">Upload, confirm, and stay connected with healthcare support.</h2>
                <p className="mt-5 text-lg leading-8 text-white/70">A simple 4-step assisted journey for ordering medicines online from Astikan Health.</p>
                <div className="mt-8">
                  <CTAButtons />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {steps.map((step, index) => (
                  <article key={step.title} className="rounded-[2rem] border border-white/12 bg-white/10 p-6 backdrop-blur" data-aos="fade-up" data-aos-delay={index * 70}>
                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-black text-[#063f36]">0{index + 1}</div>
                    <h3 className="text-xl font-black tracking-[-0.03em]">{step.title}</h3>
                    <p className="mt-4 leading-7 text-white/70">{step.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              align="center"
              eyebrow="More than an online medicine platform"
              title="One trusted platform for complete healthcare support."
              description="Astikan Health connects patients to medicine delivery assistance plus the wider care ecosystem families need."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {serviceCards.map((service, index) => (
                <a
                  key={service}
                  href="#callback"
                  className="group rounded-[1.6rem] border border-[#063f36]/10 bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-[#00a884]/25 hover:bg-[#f5fffb]"
                  data-aos="fade-up"
                  data-aos-delay={index * 40}
                >
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-[#eafff8] text-[#00a884] transition group-hover:scale-110">✚</div>
                  <h3 className="font-black tracking-[-0.02em] text-[#062c25]">{service}</h3>
                  <p className="mt-3 text-sm font-bold text-[#678078]">Get support →</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="faqs" className="bg-[#f4fffb] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
            <SectionIntro
              eyebrow="Frequently asked questions"
              title="Clear answers before you order medicines online."
              description="Use this section to support SEO and remove doubts around prescriptions, refills, unavailable medicines, and Astikan’s wider healthcare services."
            />
            <div className="grid gap-4">
              {faqs.map((faq, index) => (
                <details key={faq.question} className="group rounded-3xl border border-[#063f36]/10 bg-white p-5 shadow-[0_16px_45px_rgba(15,23,42,0.04)]" data-aos="fade-left" data-aos-delay={index * 45}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-black tracking-[-0.02em] text-[#062c25]">
                    {faq.question}
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#eafff8] text-[#00a884] transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 border-t border-[#063f36]/10 pt-4 leading-7 text-[#536660]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="callback" className="relative py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2.4rem] bg-[#062c25] text-white shadow-[0_30px_100px_rgba(6,44,37,0.22)]">
              <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative p-7 sm:p-10 lg:p-14">
                  <div className="absolute right-6 top-6 h-28 w-28 rounded-full bg-[#00a884]/25 blur-2xl" />
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#aaf5df]">Buy medicines online with confidence</p>
                  <h2 className="mt-5 text-balance text-3xl font-black tracking-[-0.04em] sm:text-5xl">Healthcare should feel supportive, not confusing.</h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">Whether you need prescription medicines, chronic care support, or healthcare assistance for your loved ones, Astikan Health is here to help.</p>
                  <div className="mt-8">
                    <CTAButtons />
                  </div>
                </div>

                <form className="bg-white p-6 text-[#173b34] sm:p-8 lg:p-10" aria-label="Request callback form">
                  <h3 className="text-2xl font-black tracking-[-0.04em] text-[#062c25]">Request a callback</h3>
                  <p className="mt-2 text-sm leading-6 text-[#536660]">Share your details and Astikan’s healthcare support team can help with medicine ordering.</p>
                  <div className="mt-6 grid gap-4">
                    <label className="grid gap-2 text-sm font-extrabold text-[#294c44]">
                      Full name
                      <input className="rounded-2xl border border-[#063f36]/12 bg-[#f8fffc] px-4 py-3 outline-none transition focus:border-[#00a884] focus:bg-white" placeholder="Enter your name" />
                    </label>
                    <label className="grid gap-2 text-sm font-extrabold text-[#294c44]">
                      Mobile number
                      <input className="rounded-2xl border border-[#063f36]/12 bg-[#f8fffc] px-4 py-3 outline-none transition focus:border-[#00a884] focus:bg-white" placeholder="+91" />
                    </label>
                    <label className="grid gap-2 text-sm font-extrabold text-[#294c44]">
                      What do you need?
                      <select className="rounded-2xl border border-[#063f36]/12 bg-[#f8fffc] px-4 py-3 outline-none transition focus:border-[#00a884] focus:bg-white">
                        <option>Prescription medicine assistance</option>
                        <option>Monthly refill support</option>
                        <option>Emergency medicine support</option>
                        <option>Doctor consultation / lab test help</option>
                      </select>
                    </label>
                    <button type="button" className="mt-2 rounded-full bg-[#00a884] px-6 py-4 text-sm font-black text-white shadow-lg shadow-emerald-900/15 transition hover:-translate-y-1 hover:bg-[#008f72]">
                      Submit Callback Request
                    </button>
                    <p className="text-xs leading-5 text-[#6a7f78]">For urgent help, call or WhatsApp Astikan Health directly.</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#063f36]/10 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-sm text-[#536660] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-lg font-black tracking-[-0.03em] text-[#062c25]">Astikan Health</p>
            <p className="mt-2">Trusted online medicine delivery and healthcare support across India.</p>
          </div>
          <div className="flex flex-wrap gap-4 font-bold">
            <a href="tel:+917303334931" className="hover:text-[#00a884]">+91 73033 34931</a>
            <a href="mailto:care@astikan.com" className="hover:text-[#00a884]">care@astikan.com</a>
            <a href="https://astikan.com" className="hover:text-[#00a884]">astikan.com</a>
          </div>
        </div>
      </footer>
    </>
  );
}
