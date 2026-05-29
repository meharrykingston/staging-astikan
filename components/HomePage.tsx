import Image from "next/image";
import type { ElementType } from "react";
import {
  FaAmbulance,
  FaArrowRight,
  FaBrain,
  FaCalendarCheck,
  FaCheckCircle,
  FaEnvelope,
  FaFemale,
  FaFlask,
  FaHeartbeat,
  FaHospital,
  FaMicroscope,
  FaPills,
  FaPhoneAlt,
  FaProcedures,
  FaRupeeSign,
  FaShieldAlt,
  FaStethoscope,
  FaUserMd,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa";
import { Bone, ClipboardCheck, Headphones, HeartHandshake, MenuSquare, ShieldCheck, UserRoundCheck } from "lucide-react";
import AstikanAnimations from "./AstikanAnimations";
import Header from "./Header";
import Footer from "./Footer";

type Tone = "violet" | "pink" | "green" | "blue" | "red" | "indigo" | "orange";
type IconComponent = ElementType<{ className?: string }>;

type IconCard = {
  title: string;
  body: string;
  href?: string;
  icon: IconComponent;
  tone: Tone;
};

const stats = [
  { value: "60,000+", label: "Happy Patients", icon: FaUsers, tone: "violet" as Tone },
  { value: "100+", label: "Partner Hospitals", icon: FaHospital, tone: "pink" as Tone },
  { value: "24/7", label: "Support Available", icon: Headphones, tone: "blue" as Tone },
  { value: "Up to 40%", label: "Savings on Care", icon: ShieldCheck, tone: "red" as Tone },
];

const services: IconCard[] = [
  { title: "Find Doctors", body: "Consult experienced doctors online across all specialties.", icon: FaUserMd, href: "/doctors", tone: "violet" },
  { title: "Lab Tests", body: "Book lab tests and health packages from trusted partners.", icon: FaFlask, href: "/lab-tests", tone: "pink" },
  { title: "Medicines", body: "Order genuine medicines with doorstep support.", icon: FaPills, href: "/medicines", tone: "green" },
  { title: "Medical Finance", body: "Get financial support for treatments and surgeries.", icon: FaRupeeSign, href: "/medical-finance", tone: "blue" },
  { title: "Surgeries", body: "Expert care for a wide range of surgical procedures.", icon: FaProcedures, href: "/surgery", tone: "red" },
  { title: "Insurance", body: "Health insurance and TPA assistance for you.", icon: FaShieldAlt, href: "/insurance", tone: "indigo" },
];

const consultationBenefits = [
  { label: "Consult 100+ Specialists", icon: FaUserMd },
  { label: "Secure & Confidential", icon: FaShieldAlt },
  { label: "Quick Appointments", icon: FaCalendarCheck },
  { label: "Prescription & Follow-up", icon: ClipboardCheck },
];

const treatments: IconCard[] = [
  { title: "Heart & Cardiac Care", body: "Advanced cardiac treatments and expert cardiology care.", icon: FaHeartbeat, href: "/surgery", tone: "red" },
  { title: "Women's Healthcare", body: "Maternity, fertility, gynecology and complete wellness support.", icon: FaFemale, href: "/doctors", tone: "pink" },
  { title: "Neurology Treatments", body: "Expert care for neurological disorders and therapies.", icon: FaBrain, href: "/doctors", tone: "violet" },
  { title: "Orthopedic Treatments", body: "Joint replacement, bone care and rehabilitation services.", icon: Bone, href: "/surgery", tone: "blue" },
  { title: "Diagnostics & Pharmacy", body: "Accurate diagnostics and genuine medicine support.", icon: FaMicroscope, href: "/lab-tests", tone: "green" },
];

const steps = [
  { title: "Register Online", body: "Create your account in just a few minutes", icon: UserRoundCheck, tone: "violet" as Tone },
  { title: "Choose Service", body: "Select the service you need — we’re here to help", icon: MenuSquare, tone: "pink" as Tone },
  { title: "Book & Confirm", body: "Book your appointment securely and get confirmed", icon: FaCalendarCheck, tone: "green" as Tone },
  { title: "Get Care & Support", body: "Receive quality care and ongoing support", icon: HeartHandshake, tone: "blue" as Tone },
];

const faqs = [
  "How can I book a doctor online?",
  "Is online consultation available for emergencies?",
  "Can I get medicines delivered at home?",
  "Is medical finance available for all treatments?",
  "How can I get emergency support?",
  "How can I cancel or reschedule my appointment?",
];

function cnTone(tone: Tone) {
  const map: Record<Tone, string> = {
    violet: "bg-[#f1e9ff] text-[#7834d1]",
    pink: "bg-[#fff0f7] text-[#e73583]",
    green: "bg-[#eafff2] text-[#0b9d54]",
    blue: "bg-[#edf5ff] text-[#1f74ff]",
    red: "bg-[#fff0f3] text-[#e7354c]",
    indigo: "bg-[#eef0ff] text-[#4255df]",
    orange: "bg-[#fff5e6] text-[#f28b21]",
  };
  return map[tone];
}

function SectionHeading({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10" data-aos="fade-up">
      <h2 className="text-2xl font-black tracking-[-0.045em] text-[#101249] sm:text-4xl">{title}</h2>
      {sub ? <p className="mt-2 text-sm font-medium text-[#606783] sm:text-base">{sub}</p> : null}
    </div>
  );
}

function IconBubble({ icon: Icon, tone, className = "" }: { icon: IconComponent; tone: Tone; className?: string }) {
  return (
    <span className={`grid place-items-center rounded-2xl ${cnTone(tone)} ${className}`}>
      <Icon className="h-[1em] w-[1em]" aria-hidden="true" />
    </span>
  );
}

function BookingCard() {
  return (
    <div className="gsap-hero-card rounded-[1.8rem] border border-[#171550]/10 bg-white p-5 shadow-[0_28px_90px_rgba(11,29,92,0.11)] sm:p-6">
      <div className="flex items-center gap-3">
        <IconBubble icon={FaStethoscope} tone="violet" className="h-10 w-10 text-lg" />
        <div>
          <h3 className="text-xl font-black tracking-[-0.035em] text-[#101249]">Book Consultation</h3>
          <p className="text-sm font-semibold text-[#69708c]">Consult a doctor 24/7</p>
        </div>
      </div>
      <form className="mt-5 grid gap-4">
        <select aria-label="Select specialization" className="h-12 rounded-xl border border-[#171550]/10 bg-white px-4 text-sm font-semibold text-[#69708c] outline-none transition focus:border-[#7b2bbd]">
          <option>Select Specialization</option>
          <option>General Physician</option>
          <option>Cardiologist</option>
          <option>Gynecologist</option>
          <option>Pediatrician</option>
        </select>
        <select aria-label="Select doctor" className="h-12 rounded-xl border border-[#171550]/10 bg-white px-4 text-sm font-semibold text-[#69708c] outline-none transition focus:border-[#7b2bbd]">
          <option>Select Doctor / Specialist</option>
          <option>Available Specialist</option>
          <option>First Available Doctor</option>
        </select>
        <label className="grid gap-2 text-sm font-black text-[#101249]">
          Select Date
          <input type="date" className="h-12 rounded-xl border border-[#171550]/10 bg-white px-4 text-sm font-semibold text-[#69708c] outline-none transition focus:border-[#7b2bbd]" />
        </label>
        <a href="tel:+919990071792" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7b2bbd] to-[#e7354c] px-5 py-4 text-sm font-black text-white shadow-lg shadow-pink-900/10 transition hover:-translate-y-0.5">
          Book Now <FaArrowRight className="text-xs" />
        </a>
      </form>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex -space-x-2">
          <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-[#ffe2e8] text-xs font-black text-[#e7354c]">D</span>
          <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-[#e8f0ff] text-xs font-black text-[#1f74ff]">P</span>
          <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-[#efe7ff] text-xs font-black text-[#7b2bbd]">S</span>
        </div>
        <div>
          <p className="text-sm font-black text-[#101249]">10,000+ Consultations</p>
          <p className="text-xs font-semibold text-[#69708c]">This Month</p>
        </div>
      </div>
    </div>
  );
}

function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#171550]/8 bg-[linear-gradient(135deg,#ffffff_0%,#fcf9ff_52%,#fff7fa_100%)] pt-20">
      <div className="absolute left-[45%] top-20 hidden h-[420px] w-[420px] rounded-full bg-[#8b35d1]/10 blur-3xl md:block" />
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-9 sm:px-6 md:grid-cols-[0.95fr_0.92fr] lg:grid-cols-[0.92fr_0.9fr_0.68fr] lg:px-8 lg:py-16">
        <div className="relative z-10">
          <div className="gsap-hero-kicker inline-flex items-center gap-2 rounded-full bg-[#f5edff] px-4 py-2 text-xs font-black text-[#7133be] shadow-sm">
            <FaShieldAlt className="text-[#7133be]" /> Trusted by thousands of families in India
          </div>
          <h1 className="gsap-hero-title mt-5 max-w-xl text-balance text-4xl font-black leading-[1.04] tracking-[-0.065em] text-[#101249] sm:text-5xl lg:text-6xl">
            Affordable Healthcare for <span className="bg-gradient-to-r from-[#7038d1] to-[#e7354c] bg-clip-text text-transparent">Every Indian Family</span>
          </h1>
          <p className="gsap-hero-copy mt-5 max-w-xl text-base font-medium leading-8 text-[#4e5674] sm:text-lg">
            Astikan Health makes it easier and affordable for families to access trusted healthcare. Book doctor consultations, lab tests, health checkups, surgeries and more — all in one place.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="gsap-hero-card flex items-start gap-2">
                <IconBubble icon={stat.icon} tone={stat.tone} className="h-8 w-8 shrink-0 text-sm" />
                <div>
                  <p className="text-lg font-black tracking-[-0.03em] text-[#101249] sm:text-xl">{stat.value}</p>
                  <p className="mt-1 text-xs font-bold text-[#69708c]">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:flex">
            <a href="tel:+919990071792" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7b2bbd] to-[#e7354c] px-7 py-4 text-sm font-black text-white shadow-[0_18px_45px_rgba(123,43,189,0.2)] transition hover:-translate-y-0.5">
              Book Doctor Consultation <FaArrowRight className="text-xs" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#171550]/14 bg-white px-7 py-4 text-sm font-black text-[#101249] transition hover:border-[#7b2bbd]/40 hover:bg-[#f8f4ff]">
              Explore Services <FaArrowRight className="text-xs" />
            </a>
          </div>
        </div>

        <div className="relative z-0 mx-auto flex w-full max-w-[440px] items-end justify-center md:max-w-[520px]" data-aos="zoom-in" data-aos-delay="120">
          <Image src="/home/doctor-hero.png" alt="Astikan doctor consultation support" width={900} height={1100} priority className="mx-auto h-[360px] w-full object-contain object-bottom drop-shadow-[0_28px_50px_rgba(123,43,189,0.08)] sm:h-[430px] lg:h-[520px]" />
        </div>

        <div className="relative z-10 md:col-span-2 lg:col-span-1" data-aos="fade-left" data-aos-delay="200">
          <BookingCard />
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our Healthcare Services" sub="Comprehensive healthcare solutions for you and your family" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {services.map((service, index) => (
            <a key={service.title} href={service.href} className="gsap-reveal group rounded-[1.45rem] border border-[#171550]/10 bg-white p-6 shadow-[0_18px_55px_rgba(11,29,92,0.045)] transition duration-300 hover:-translate-y-1 hover:border-[#7b2bbd]/25 hover:shadow-[0_24px_70px_rgba(123,43,189,0.11)]" data-aos="fade-up" data-aos-delay={index * 45}>
              <IconBubble icon={service.icon} tone={service.tone} className="h-14 w-14 text-2xl transition group-hover:scale-110" />
              <h3 className="mt-7 text-lg font-black tracking-[-0.035em] text-[#101249]">{service.title}</h3>
              <p className="mt-3 min-h-[72px] text-sm font-medium leading-6 text-[#606783]">{service.body}</p>
              <span className={`mt-5 grid h-7 w-7 place-items-center rounded-full ${cnTone(service.tone)}`}><FaArrowRight className="text-xs" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultationStrip() {
  return (
    <section className="bg-white py-2 sm:py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 overflow-hidden rounded-[1.8rem] bg-[#f9f4ff] p-5 sm:grid-cols-[0.38fr_1fr_auto] sm:p-7" data-aos="fade-up">
          <Image src="/home/consultation.png" alt="Online doctor consultation illustration" width={520} height={420} className="h-36 w-full rounded-2xl object-cover sm:h-44" />
          <div>
            <h2 className="text-2xl font-black tracking-[-0.04em] text-[#101249]">Online Doctor Consultation & Patient Support</h2>
            <p className="mt-2 max-w-2xl text-sm font-medium leading-7 text-[#606783] sm:text-base">Connect with experienced doctors from the comfort of your home. Get medical advice, prescriptions and follow-up support online.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {consultationBenefits.map((item) => (
                <span key={item.label} className="flex items-center gap-2 text-xs font-black text-[#4f5572]"><item.icon className="text-[#7b2bbd]" /> {item.label}</span>
              ))}
            </div>
          </div>
          <a href="tel:+919990071792" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7b2bbd] to-[#e7354c] px-7 py-4 text-sm font-black text-white shadow-lg shadow-purple-900/10"><FaPhoneAlt /> Book Consultation</a>
        </div>
      </div>
    </section>
  );
}

function EmergencyStrip() {
  return (
    <section className="bg-white py-5 sm:py-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-5 rounded-[1.8rem] bg-gradient-to-r from-[#fff6f8] to-[#fff0f3] p-5 sm:grid-cols-[0.2fr_1fr_0.35fr] lg:p-6" data-aos="fade-up">
          <Image src="/home/emergency.png" alt="Emergency support siren" width={380} height={360} className="h-24 w-full rounded-2xl object-cover sm:h-28" />
          <div>
            <h2 className="flex items-center gap-3 text-2xl font-black tracking-[-0.04em] text-[#7f1d2d]"><FaAmbulance className="text-[#e7354c]" /> Emergency Healthcare Support – 24/7</h2>
            <p className="mt-2 text-sm font-medium leading-7 text-[#6b4950] sm:text-base">We are available 24/7 to assist you in medical emergencies with hospital admission, ICU coordination and urgent care needs. Call our helpline anytime.</p>
          </div>
          <a href="tel:+919990071792" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e7354c]/35 bg-white px-6 py-4 text-sm font-black text-[#e7354c] transition hover:bg-[#e7354c] hover:text-white"><FaPhoneAlt /> Get Emergency Help</a>
        </div>
      </div>
    </section>
  );
}

function Treatments() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Specialized Healthcare Treatments" sub="Advanced care for critical and specialized health conditions" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {treatments.map((item, index) => (
            <a key={item.title} href={item.href} className="gsap-reveal group rounded-[1.5rem] border border-[#171550]/10 bg-white p-6 text-center shadow-[0_18px_55px_rgba(11,29,92,0.045)] transition hover:-translate-y-1 hover:border-[#e7354c]/25" data-aos="fade-up" data-aos-delay={index * 50}>
              <IconBubble icon={item.icon} tone={item.tone} className="mx-auto h-16 w-16 text-3xl transition group-hover:scale-110" />
              <h3 className="mt-5 text-base font-black tracking-[-0.03em] text-[#101249]">{item.title}</h3>
              <p className="mt-3 min-h-[66px] text-sm font-medium leading-6 text-[#606783]">{item.body}</p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#7b2bbd]">Learn More <FaArrowRight className="text-xs" /></p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="How Astikan Health Works" sub="Simple steps to better healthcare" />
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="gsap-reveal relative rounded-[1.5rem] border border-[#171550]/10 bg-white p-6 text-center shadow-[0_18px_55px_rgba(11,29,92,0.04)]" data-aos="fade-up" data-aos-delay={index * 70}>
              {index < steps.length - 1 ? <span className="absolute left-[76%] top-12 hidden h-px w-[48%] border-t border-dashed border-[#b5b9d1] lg:block" /> : null}
              <span className={`mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br ${step.tone === "violet" ? "from-[#7b2bbd] to-[#8b5cf6]" : step.tone === "pink" ? "from-[#e73583] to-[#e7354c]" : step.tone === "green" ? "from-[#0b9d54] to-[#21c77a]" : "from-[#1f74ff] to-[#27a3ff]"} text-2xl text-white shadow-lg shadow-purple-900/10`}>
                <step.icon className="h-7 w-7" />
              </span>
              <p className="mt-5 text-xs font-black text-[#69708c]">Step {index + 1}</p>
              <h3 className="mt-1 text-lg font-black tracking-[-0.035em] text-[#101249]">{step.title}</h3>
              <p className="mt-3 text-sm font-medium leading-6 text-[#606783]">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustNetwork() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-[1fr_1.25fr_0.85fr] lg:px-8">
        <div className="rounded-[1.5rem] bg-[#f9f7ff] p-7" data-aos="fade-up">
          <h3 className="text-xl font-black tracking-[-0.035em] text-[#101249]">Why Thousands Trust Astikan Health</h3>
          <ul className="mt-5 grid gap-3 text-sm font-bold text-[#4d5571]">
            {["Trusted by 60,000+ families across India", "100+ Partner Hospitals & Experienced Doctors", "Up to 40% Savings on Healthcare Services", "Quick, Transparent & Technology-driven platform"].map((item) => (
              <li key={item} className="flex gap-3"><FaCheckCircle className="mt-1 shrink-0 text-[#7b2bbd]" />{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[1.5rem] border border-[#171550]/10 bg-white p-7 text-center shadow-[0_18px_55px_rgba(11,29,92,0.04)]" data-aos="fade-up" data-aos-delay="80">
          <h3 className="flex items-center justify-center gap-2 text-base font-black text-[#101249]"><FaHospital className="text-[#7b2bbd]" /> Our Trusted Hospital Partners</h3>
          <div className="mt-7 overflow-hidden rounded-2xl border border-[#171550]/10 bg-white p-3">
            <Image src="/home/partners-strip.png" alt="Apollo, Max Healthcare, Fortis and Metro hospital partners" width={900} height={280} className="mx-auto h-auto w-full object-contain" />
          </div>
          <a href="/hospital-partners" className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[#7b2bbd]/25 px-6 py-3 text-sm font-black text-[#7b2bbd]">View All Partners <FaArrowRight className="text-xs" /></a>
        </div>
        <div className="relative overflow-hidden rounded-[1.5rem] bg-[#f5edff] p-7" data-aos="fade-up" data-aos-delay="120">
          <h3 className="flex items-center gap-2 text-xl font-black tracking-[-0.035em] text-[#101249]"><ShieldCheck className="h-6 w-6 text-[#7b2bbd]" /> Healthcare Savings</h3>
          <p className="mt-5 text-base font-bold text-[#4f5572]">Save up to</p>
          <p className="mt-2 text-6xl font-black tracking-[-0.07em] text-[#7b2bbd]">40%</p>
          <p className="mt-1 text-base font-bold text-[#4f5572]">on healthcare services</p>
          <ShieldCheck className="absolute bottom-6 right-6 h-28 w-28 text-white/70" />
        </div>
      </div>
    </section>
  );
}

function FAQAndHelp() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <SectionHeading title="Frequently Asked Questions" sub="Find answers to common questions" />
          <div className="grid gap-2">
            {faqs.map((faq) => (
              <details key={faq} className="group rounded-xl border border-[#171550]/10 bg-white px-5 py-4 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-black text-[#101249]">
                  {faq}
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#f7f6ff] text-lg transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 border-t border-[#171550]/8 pt-3 text-sm font-medium leading-6 text-[#606783]">Astikan Health support team can guide you through the right healthcare service, booking process and next step.</p>
              </details>
            ))}
          </div>
          <a href="/faq" className="mx-auto mt-5 flex w-max items-center gap-2 rounded-xl border border-[#7b2bbd]/25 px-6 py-3 text-sm font-black text-[#7b2bbd]">View All FAQs <FaArrowRight className="text-xs" /></a>
        </div>
        <div className="self-end rounded-[1.8rem] bg-[#fbf9ff] p-6 shadow-[0_18px_55px_rgba(11,29,92,0.045)]" data-aos="fade-left">
          <div className="grid items-center gap-5 sm:grid-cols-[1fr_0.8fr] lg:grid-cols-1 xl:grid-cols-[1fr_0.85fr]">
            <div>
              <h3 className="text-2xl font-black tracking-[-0.04em] text-[#101249]">Need Help? We’re Here!</h3>
              <p className="mt-3 text-sm font-medium leading-7 text-[#606783]">Our support team is ready to assist you anytime you need.</p>
              <div className="mt-5 grid gap-3 text-sm font-black text-[#4f5572]">
                <a href="tel:+919990071792" className="flex items-center gap-3"><FaPhoneAlt className="text-[#7b2bbd]" /> +91 99900 71792</a>
                <a href="mailto:care@astikan.com" className="flex items-center gap-3"><FaEnvelope className="text-[#e7354c]" /> care@astikan.com</a>
                <span className="flex items-center gap-3"><FaWhatsapp className="text-[#13a760]" /> 24/7 Customer Support</span>
              </div>
            </div>
            <Image src="/home/support-agent.png" alt="Astikan support agent" width={420} height={640} className="ml-auto h-56 w-full rounded-2xl object-contain object-bottom" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="bg-white px-4 pb-0 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-5 rounded-t-[1.8rem] bg-gradient-to-r from-[#7834d1] via-[#b935a8] to-[#e7354c] px-6 py-7 text-white sm:grid-cols-[1fr_0.9fr] lg:px-10" data-aos="fade-up">
        <div className="flex items-center gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white/16 text-2xl"><FaEnvelope /></span>
          <div>
            <h2 className="text-2xl font-black tracking-[-0.04em]">Stay Healthy, Stay Informed</h2>
            <p className="mt-1 text-sm font-medium text-white/80">Subscribe to our newsletter for health tips, updates and special offers.</p>
          </div>
        </div>
        <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <input type="email" placeholder="Enter your email" className="h-12 rounded-xl border border-white/20 bg-white px-4 text-sm font-semibold text-[#101249] outline-none" />
          <button className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 text-sm font-black text-[#7b2bbd]" type="button">Subscribe <FaArrowRight className="text-xs" /></button>
        </form>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <AstikanAnimations />
      <Header />
      <main className="overflow-hidden bg-white text-[#101249]">
        <HomeHero />
        <Services />
        <ConsultationStrip />
        <EmergencyStrip />
        <Treatments />
        <HowItWorks />
        <TrustNetwork />
        <FAQAndHelp />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
