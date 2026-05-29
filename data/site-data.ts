export type Button = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

export type Card = {
  title: string;
  body: string;
  icon?: string;
  href?: string;
  tag?: string;
};

export type Section = {
  eyebrow?: string;
  title: string;
  body?: string;
  bullets?: string[];
  cards?: Card[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export type SitePageData = {
  slug: string;
  navLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroText: string;
  badge?: string;
  primaryCta?: Button;
  secondaryCta?: Button;
  stats?: { value: string; label: string }[];
  highlights?: string[];
  sections: Section[];
  process?: Card[];
  faqs?: FAQ[];
  policy?: boolean;
};

export const contact = {
  phonePrimary: "+91 99900 71792",
  phoneSecondary: "+91 73033 34931",
  emergencyPhone: "+91 80762 57344",
  emailPrimary: "care@astikan.com",
  emailSecondary: "letstalk@astikan.com",
  financeEmail: "finance@astikan.com",
  registeredOffice: "B-45, Sector 56, Noida, Uttar Pradesh, India – 201301",
  branchOffice: "C-22, Sector 62, Noida, Uttar Pradesh, India – 201309",
  whatsapp: "https://wa.me/919990071792?text=Hi%20Astikan%20Health%2C%20I%20need%20healthcare%20support.",
};

export const serviceCards: Card[] = [
  { title: "Doctors", body: "Consult verified doctors online and offline with guided healthcare support.", icon: "🩺", href: "/doctors" },
  { title: "Lab Tests", body: "Book diagnostic tests and preventive health checkups with home sample collection.", icon: "🧪", href: "/lab-tests" },
  { title: "Medicines", body: "Order genuine medicines with prescription upload and refill assistance.", icon: "💊", href: "/medicines" },
  { title: "Surgery", body: "Get surgery guidance, hospital coordination and specialist support.", icon: "🏥", href: "/surgery" },
  { title: "Insurance", body: "Understand cashless treatment support and insurance-related coordination.", icon: "🛡️", href: "/insurance" },
  { title: "Medical Finance", body: "Explore medical EMI support and healthcare financing assistance.", icon: "₹", href: "/medical-finance" },
  { title: "Health Packages", body: "Affordable full body checkups and preventive wellness packages.", icon: "❤️", href: "/health-packages" },
  { title: "Partners", body: "Hospitals, doctors, labs and pharmacies can grow with Astikan Health.", icon: "🤝", href: "/partner-with-us" },
];

export const pages: SitePageData[] = [
  {
    slug: "home",
    navLabel: "Home",
    title: "Home",
    metaTitle: "Online Doctor Consultation & Healthcare Plans in India | Astikan Health",
    metaDescription: "Astikan Health provides online doctor consultations, lab test booking, medicine delivery, surgeries, medical finance, insurance support, healthcare memberships and AI-powered healthcare assistance in India.",
    eyebrow: "Your trusted digital healthcare partner in India",
    heroTitle: "Complete digital healthcare for every Indian family.",
    heroText: "Astikan Health brings doctor consultations, lab tests, medicine delivery, surgeries, insurance guidance, medical finance and preventive health plans into one patient-friendly healthcare platform.",
    badge: "60,000+ happy customers • 100+ partner hospitals",
    primaryCta: { label: "Get Healthcare Support", href: "#callback", variant: "primary" },
    secondaryCta: { label: "Explore Services", href: "#services", variant: "secondary" },
    stats: [
      { value: "60K+", label: "People benefited" },
      { value: "100+", label: "Partner hospitals" },
      { value: "24/7", label: "Customer support" },
      { value: "40%", label: "Potential savings" },
    ],
    highlights: ["Online doctor consultation", "Lab test booking", "Medicine delivery", "Health Pocket membership", "Emergency coordination"],
    sections: [
      {
        eyebrow: "Complete care ecosystem",
        title: "Affordable healthcare services across India",
        body: "Astikan Health combines advanced technology, experienced healthcare professionals and affordable healthcare plans to deliver better healthcare experiences across India.",
        cards: serviceCards,
      },
      {
        eyebrow: "Astikan AI",
        title: "AI-powered health assistance with human healthcare support",
        body: "Astikan AI helps users understand symptoms, track health conditions and access support quickly, while the healthcare team guides patients toward consultations, tests, medicines and emergency support.",
        bullets: ["AI symptom checker", "Instant health guidance", "Health tracking and monitoring", "Emergency consultation support", "Smart healthcare recommendations"],
      },
      {
        eyebrow: "Health Pocket Card",
        title: "One digital membership for multiple healthcare services",
        body: "The Health Pocket Card is designed to reduce medical expenses and simplify healthcare access through teleconsultation benefits, discounts, wallet rewards, cashless support and app-based management.",
        cards: [
          { title: "Silver Plan", body: "Affordable healthcare membership with teleconsultation benefits, wellness support, lab test discounts and emergency assistance.", icon: "S" },
          { title: "Gold Plan", body: "Enhanced healthcare coverage with additional consultations, insurance benefits and medical finance support.", icon: "G", tag: "Popular" },
          { title: "Platinum Plan", body: "Comprehensive healthcare plan with premium healthcare benefits, advanced medical support and higher coverage limits.", icon: "P" },
        ],
      },
      {
        eyebrow: "Emergency healthcare",
        title: "Healthcare support during critical situations",
        body: "Astikan Health helps families with emergency hospital admissions, ICU coordination, trauma support and 24/7 patient assistance.",
        bullets: ["Emergency hospital admissions", "ICU and critical care coordination", "Trauma and accident support", "Emergency medical assistance", "24/7 patient support"],
      },
    ],
    process: [
      { title: "Register Online", body: "Create your healthcare account and share the support you need.", icon: "01" },
      { title: "Choose Your Service", body: "Select consultation, lab test, medicine, surgery, finance or membership support.", icon: "02" },
      { title: "Get Guided Support", body: "Astikan’s healthcare team helps you with coordination, booking and next steps.", icon: "03" },
      { title: "Use Benefits", body: "Access discounts, support, reports, consultations and healthcare services easily.", icon: "04" },
    ],
    faqs: [
      { question: "What is Astikan Health?", answer: "Astikan Health is a digital healthcare platform offering online doctor consultations, telemedicine, lab test booking, medicine delivery, healthcare memberships and medical finance services across India." },
      { question: "Can I consult doctors online through Astikan Health?", answer: "Yes. Astikan Health offers secure online doctor consultation support with experienced healthcare professionals." },
      { question: "Does Astikan Health provide online lab test booking?", answer: "Yes. Users can book pathology and diagnostic tests through trusted diagnostic partners." },
      { question: "Is Astikan Health available across India?", answer: "Astikan Health provides telemedicine and healthcare support across multiple cities in India." },
    ],
  },
  {
    slug: "about-us",
    navLabel: "About Us",
    title: "About Us",
    metaTitle: "About Astikan Healthcare | Affordable Healthcare Services in Delhi NCR",
    metaDescription: "Learn about Astikan Healthcare, a trusted digital healthcare platform helping families access affordable healthcare services, teleconsultation, diagnostics, surgery support, medical finance and health membership benefits.",
    eyebrow: "About Astikan Healthcare",
    heroTitle: "Making healthcare affordable, accessible and digital for every family.",
    heroText: "Astikan Healthcare is a trusted digital healthcare platform providing affordable and accessible healthcare services across Delhi NCR, including Noida, Ghaziabad, Greater Noida, Meerut and nearby cities.",
    badge: "Trusted by 60,000+ users",
    stats: [
      { value: "60K+", label: "Happy customers" },
      { value: "20+", label: "Reputed hospital partners" },
      { value: "40%", label: "Potential medical savings" },
      { value: "24/7", label: "Healthcare support" },
    ],
    highlights: ["Transparent billing", "Trusted doctors", "Hospital network", "Secure records", "Cashless support"],
    sections: [
      {
        eyebrow: "Why choose Astikan",
        title: "Smart healthcare solutions for patient-first care",
        body: "Astikan helps individuals and families reduce medical expenses through teleconsultation services, diagnostics, surgery support, medical finance assistance and digital membership benefits.",
        cards: [
          { title: "Affordable Healthcare Solutions", body: "Access quality healthcare services at discounted prices with transparent billing and no hidden charges.", icon: "₹" },
          { title: "Trusted Network", body: "Consult experienced doctors and connect with hospitals, diagnostic labs, pharmacies and healthcare providers.", icon: "🏥" },
          { title: "Save on Medical Expenses", body: "Reduce healthcare costs on doctor consultations, lab tests, medicines, surgeries and treatments.", icon: "↓" },
          { title: "24/7 Healthcare Support", body: "Dedicated support for consultations, treatment coordination, emergency support, insurance guidance and healthcare assistance.", icon: "☎" },
        ],
      },
      {
        eyebrow: "Health Card",
        title: "Astikan Health Card for complete medical support",
        body: "The Astikan Health Card is a digital healthcare membership card designed to provide healthcare support and financial protection for individuals and families.",
        bullets: ["Up to 40% discount on diagnostics and medicines", "Online doctor consultation and telemedicine support", "OPD and IPD assistance", "Health insurance and TPA support", "Coverage benefits up to ₹50,000", "Secure cloud-based digital verification"],
      },
      {
        eyebrow: "Vision and mission",
        title: "A connected healthcare network built on trust",
        body: "Astikan’s vision is to make quality healthcare accessible and affordable for every household in India through innovation, transparency and connected healthcare services.",
        bullets: ["Make affordable healthcare accessible for every Indian family", "Simplify healthcare through digital technology", "Build India’s most trusted healthcare network", "Promote preventive healthcare and wellness awareness", "Provide reliable and transparent healthcare support"],
      },
    ],
    faqs: [
      { question: "What is Astikan Health Card?", answer: "Astikan Health Card is a digital healthcare membership card that provides discounts, healthcare support, teleconsultation services and medical benefits for individuals and families." },
      { question: "How does Astikan Healthcare help reduce medical expenses?", answer: "Astikan offers discounted healthcare services, diagnostics, medicines, consultations and surgery support that help users reduce medical costs." },
      { question: "Which areas does Astikan Healthcare serve?", answer: "Astikan Healthcare serves Delhi NCR including Noida, Ghaziabad, Greater Noida, Meerut and nearby regions across India." },
    ],
  },
  {
    slug: "contact-us",
    navLabel: "Contact Us",
    title: "Contact Us",
    metaTitle: "Contact Astikan Health | 24/7 Healthcare Support in India",
    metaDescription: "Contact Astikan Health for online doctor consultation, lab tests, medicines, medical finance, surgery support, preventive healthcare and telemedicine services in India.",
    eyebrow: "Get in touch with Astikan Health",
    heroTitle: "24/7 healthcare support for patients and families.",
    heroText: "Speak with Astikan Health for appointment booking, healthcare guidance, diagnostic services, treatment financing and emergency support.",
    badge: "Response time within 24 hours",
    stats: [
      { value: "24/7", label: "Emergency support" },
      { value: "2", label: "Noida offices" },
      { value: "9AM", label: "Customer care opens" },
      { value: "India", label: "Healthcare support" },
    ],
    highlights: ["Call support", "Email support", "Live chat", "Callback form", "Office locations"],
    sections: [
      {
        eyebrow: "Contact information",
        title: "Reach the healthcare support team quickly",
        cards: [
          { title: contact.phonePrimary, body: "Primary healthcare support number for consultations, lab tests, medicines and general assistance.", icon: "☎", href: "tel:+919990071792" },
          { title: contact.phoneSecondary, body: "Secondary support number for appointment and healthcare coordination support.", icon: "☎", href: "tel:+917303334931" },
          { title: contact.emailPrimary, body: "Email support for customer support, inquiries and healthcare assistance.", icon: "✉", href: "mailto:care@astikan.com" },
          { title: contact.emailSecondary, body: "Business, partnership and healthcare communication support.", icon: "✉", href: "mailto:letstalk@astikan.com" },
        ],
      },
      {
        eyebrow: "Office locations",
        title: "Astikan Health offices in Noida",
        cards: [
          { title: "Registered Office", body: contact.registeredOffice, icon: "📍" },
          { title: "Branch Office", body: contact.branchOffice, icon: "📍" },
        ],
      },
      {
        eyebrow: "Healthcare support services",
        title: "Get assistance across every healthcare need",
        bullets: ["Online doctor consultations", "Specialist appointments and video consultations", "Diagnostic lab test bookings", "Home sample collection", "Medical finance and EMI support", "Surgery and hospital assistance", "Emergency healthcare support"],
      },
    ],
    faqs: [
      { question: "How can I book an online doctor consultation?", answer: "You can contact Astikan Health through phone, email, WhatsApp or live chat to schedule an online doctor consultation." },
      { question: "Does Astikan Health provide home sample collection?", answer: "Yes. Home sample collection support is available for diagnostic lab tests and preventive health checkups in selected locations." },
      { question: "Is customer support available 24/7?", answer: "Emergency healthcare support is available 24/7 for urgent patient assistance." },
    ],
  },
  {
    slug: "careers",
    navLabel: "Careers",
    title: "Careers",
    metaTitle: "Careers at Astikan Health | Build the Future of Healthcare",
    metaDescription: "Join Astikan Health and build a meaningful career in healthcare, technology, product, marketing, operations, customer support and partnerships.",
    eyebrow: "Careers at Astikan Health",
    heroTitle: "Build the future of patient-focused healthcare in India.",
    heroText: "Astikan Health is building a platform that makes healthcare more accessible, affordable and technology-driven. Join a team solving real healthcare problems.",
    badge: "Healthcare • Technology • Growth",
    stats: [
      { value: "5+", label: "Career tracks" },
      { value: "India", label: "Healthcare impact" },
      { value: "Digital", label: "Healthcare innovation" },
      { value: "Growth", label: "Learning culture" },
    ],
    highlights: ["Healthcare roles", "Product and tech", "Marketing", "Operations", "Partnerships"],
    sections: [
      {
        eyebrow: "Why work with us",
        title: "Meaningful work with healthcare impact",
        body: "At Astikan Health, every role contributes toward improving healthcare accessibility and patient support across India.",
        bullets: ["Solve real healthcare challenges", "Improve patient experiences", "Build innovative healthcare solutions", "Work in a fast-growing healthcare environment", "Create meaningful healthcare impact"],
      },
      {
        eyebrow: "Career opportunities",
        title: "Teams hiring across healthcare and growth",
        cards: [
          { title: "Healthcare Professionals", body: "Doctors, healthcare coordinators, patient support executives, advisors and medical support teams.", icon: "🩺" },
          { title: "Technology & Product", body: "Digital healthcare platforms, AI-driven healthcare solutions, product development and healthcare automation systems.", icon: "💻" },
          { title: "Marketing & Growth", body: "SEO specialists, content writers, digital marketers, branding professionals and healthcare communication experts.", icon: "📈" },
          { title: "Operations & Customer Support", body: "Healthcare operations, customer support, patient engagement, coordination and process management.", icon: "🎧" },
          { title: "Business Development", body: "Healthcare partnerships, strategic collaborations, expansion opportunities and network development.", icon: "🤝" },
        ],
      },
      {
        eyebrow: "Life at Astikan",
        title: "A collaborative and innovation-driven healthcare culture",
        bullets: ["Learning and professional development", "Meaningful patient-focused work", "Collaborative work culture", "Innovation-driven environment", "Career development opportunities"],
      },
    ],
    faqs: [
      { question: "Who should apply to Astikan Health?", answer: "People passionate about healthcare, innovation, patient-focused solutions, communication, problem-solving and meaningful impact should apply." },
      { question: "Which teams does Astikan Health hire for?", answer: "Astikan Health hires across healthcare, technology, product, marketing, operations, customer support and business development." },
    ],
  },
  {
    slug: "partner-with-us",
    navLabel: "Partner With Us",
    title: "Partner With Us",
    metaTitle: "Partner With Astikan Health | Healthcare Partnerships in India",
    metaDescription: "Partner with Astikan Health to improve healthcare accessibility, patient engagement, preventive healthcare services and digital healthcare support across India.",
    eyebrow: "Partner with Astikan Health",
    heroTitle: "Build a connected healthcare ecosystem with Astikan Health.",
    heroText: "Hospitals, clinics, doctors, diagnostic centers, pharmacies, startups, wellness brands and insurance providers can collaborate with Astikan Health to improve patient access and digital healthcare reach.",
    badge: "Healthcare partnerships across India",
    stats: [
      { value: "Hospitals", label: "Healthcare partners" },
      { value: "Doctors", label: "Specialists and clinics" },
      { value: "Labs", label: "Diagnostic centers" },
      { value: "Digital", label: "Healthcare support" },
    ],
    highlights: ["Patient engagement", "Digital reach", "Healthcare accessibility", "Technology support", "Long-term growth"],
    sections: [
      {
        eyebrow: "Why partner",
        title: "Patients need faster, clearer and more affordable healthcare access",
        body: "Astikan Health helps healthcare partners improve patient engagement, healthcare accessibility, preventive healthcare awareness and digital healthcare reach through an integrated healthcare platform.",
        bullets: ["Faster access to healthcare services", "Trusted medical guidance", "Better treatment coordination", "Affordable healthcare solutions", "Transparent patient experiences"],
      },
      {
        eyebrow: "Partnership opportunities",
        title: "Healthcare organizations that can partner with Astikan Health",
        cards: [
          { title: "Hospitals & Clinics", body: "Improve patient engagement, healthcare coordination, appointment accessibility and digital support.", icon: "🏥" },
          { title: "Doctors & Specialists", body: "Expand online healthcare presence and connect with patients seeking trusted consultation.", icon: "🩺" },
          { title: "Diagnostic Centers", body: "Support preventive healthcare awareness, lab test accessibility and diagnostic services.", icon: "🧪" },
          { title: "Pharmacies", body: "Help patients access medicines and healthcare assistance more conveniently.", icon: "💊" },
          { title: "Insurance & Finance Providers", body: "Support patients with affordable treatment options and healthcare affordability programs.", icon: "🛡️" },
          { title: "Corporate Healthcare", body: "Promote employee wellness programs and preventive healthcare awareness initiatives.", icon: "🏢" },
        ],
      },
      {
        eyebrow: "How partnership works",
        title: "Simple collaboration, onboarding and long-term growth",
        body: "Share your healthcare services, discuss collaboration, complete onboarding and grow together through patient engagement and healthcare accessibility initiatives.",
      },
    ],
    process: [
      { title: "Connect With Our Team", body: "Share healthcare services, business details and partnership goals.", icon: "01" },
      { title: "Partnership Discussion", body: "Evaluate collaboration opportunities based on patient care and accessibility.", icon: "02" },
      { title: "Integration & Onboarding", body: "Get support with onboarding and operational coordination.", icon: "03" },
      { title: "Grow Together", body: "Collaborate on patient engagement and long-term healthcare growth.", icon: "04" },
    ],
    faqs: [
      { question: "Who can partner with Astikan Health?", answer: "Hospitals, clinics, doctors, pharmacies, diagnostic centers, healthcare startups, wellness brands, insurance providers and healthcare organizations can explore partnerships." },
      { question: "Does Astikan Health work only with large organizations?", answer: "No. Astikan welcomes healthcare providers and healthcare businesses of different sizes." },
    ],
  },
  {
    slug: "faq",
    navLabel: "FAQ",
    title: "FAQ",
    metaTitle: "Frequently Asked Questions | Astikan Health",
    metaDescription: "Find answers about Astikan Health, online doctor consultations, medicines, lab tests, health packages, surgery support, insurance and medical finance assistance.",
    eyebrow: "Frequently asked questions",
    heroTitle: "Clear answers about Astikan Health services.",
    heroText: "Healthcare can feel confusing. This FAQ helps patients and families understand consultations, medicines, lab tests, surgeries, health packages, insurance support and medical finance guidance.",
    badge: "Patient support made simple",
    highlights: ["General questions", "Doctor consultations", "Medicines", "Lab tests", "Finance and insurance"],
    sections: [
      {
        eyebrow: "General questions",
        title: "What patients ask before using Astikan Health",
        body: "Astikan Health supports individuals, families, senior citizens, working professionals and patients looking for trusted healthcare services in India.",
      },
    ],
    faqs: [
      { question: "What is Astikan Health?", answer: "Astikan Health is an online healthcare platform in India that helps patients connect with doctors, medicines, diagnostic services, surgeries, preventive health checkups, insurance support and healthcare assistance services." },
      { question: "How does Astikan Health work?", answer: "Astikan Health simplifies healthcare through online consultations, healthcare guidance, diagnostic support, medicine assistance, treatment coordination and preventive healthcare solutions." },
      { question: "Can I consult doctors online?", answer: "Yes. Astikan Health helps patients connect with qualified healthcare professionals for online doctor consultations and healthcare guidance." },
      { question: "Can I order medicines online?", answer: "Yes. Astikan Health helps patients access medicine delivery support and prescription medicine assistance." },
      { question: "Can Astikan help me choose the right health package?", answer: "Yes. The healthcare support team helps patients choose preventive packages based on age, goals and wellness requirements." },
      { question: "Does Astikan provide surgery support?", answer: "Yes. Astikan Health helps patients access surgery guidance, treatment support, hospital coordination and consultation support." },
      { question: "Can I explore medical finance options?", answer: "Yes. Patients can receive support related to healthcare affordability, treatment planning and medical finance assistance." },
    ],
  },
  {
    slug: "lab-tests",
    navLabel: "Lab Tests",
    title: "Lab Tests",
    metaTitle: "Book Lab Tests Online in Delhi NCR with Home Sample Collection | Astikan Health",
    metaDescription: "Book affordable lab tests, blood tests and full body checkups online in Delhi NCR with home sample collection, fast digital reports and trusted diagnostic partners.",
    eyebrow: "Online lab tests and diagnostics",
    heroTitle: "Book lab tests online in Delhi NCR with home sample collection.",
    heroText: "Astikan Health offers trusted diagnostic and pathology services with fast report delivery and convenient home sample collection across Delhi, Noida, Greater Noida, Ghaziabad, Gurugram and Faridabad.",
    badge: "Fast digital reports • Trusted diagnostic partners",
    stats: [
      { value: "24–48h", label: "Most report timelines" },
      { value: "Delhi NCR", label: "Service coverage" },
      { value: "Home", label: "Sample collection" },
      { value: "100+", label: "Popular tests" },
    ],
    highlights: ["Home sample collection", "Affordable packages", "Fast reports", "Trusted labs", "Doctor support"],
    sections: [
      {
        eyebrow: "Popular categories",
        title: "Diagnostic tests for everyday and preventive healthcare",
        cards: [
          { title: "Full Body Checkups", body: "Comprehensive health packages to monitor wellness and detect risks early.", icon: "❤️" },
          { title: "Diabetes Tests", body: "Fasting blood sugar, random blood sugar, HbA1c and diabetes screening packages.", icon: "🩸" },
          { title: "Thyroid Tests", body: "TSH, T3, T4 and complete thyroid profile with quick online reports.", icon: "🧬" },
          { title: "Liver Function Test", body: "Liver enzyme and bilirubin testing for preventive liver health monitoring.", icon: "🧪" },
          { title: "Kidney Function Test", body: "Creatinine, urea, uric acid and kidney function profile tests.", icon: "💧" },
          { title: "Women’s Health", body: "Pregnancy tests, hormonal profiles, PCOS screening and women wellness checkups.", icon: "♀" },
        ],
      },
      {
        eyebrow: "Why choose Astikan",
        title: "Reliable lab test booking with healthcare support",
        bullets: ["Trusted diagnostic partners", "Home sample collection", "Affordable lab test prices", "Fast online reports", "Easy online booking", "Healthcare support after reports"],
      },
      {
        eyebrow: "Available tests",
        title: "Popular lab tests available through Astikan Health",
        bullets: ["CBC", "Blood Sugar Test", "HbA1c Test", "Thyroid Profile", "LFT", "KFT", "Lipid Profile", "Vitamin D", "Vitamin B12", "Dengue Test", "Fever Panel", "Pregnancy Test"],
      },
    ],
    faqs: [
      { question: "How can I book a lab test online in Delhi NCR?", answer: "Select your required test, choose a preferred time slot and schedule home sample collection through Astikan Health support." },
      { question: "Is home sample collection available?", answer: "Yes. Home sample collection is available across Delhi, Noida, Greater Noida, Ghaziabad, Gurugram and Faridabad." },
      { question: "How long does it take to receive reports?", answer: "Most digital reports are available within 24–48 hours depending on the test type." },
    ],
  },
  {
    slug: "doctors",
    navLabel: "Doctors",
    title: "Doctors",
    metaTitle: "Online Doctor Consultation in India | Verified Doctors | Astikan Health",
    metaDescription: "Consult verified doctors online with Astikan Health. Book specialist appointments, digital prescriptions, medicines and healthcare services across India.",
    eyebrow: "Online doctor consultation",
    heroTitle: "Consult verified doctors online across India.",
    heroText: "Astikan Health helps patients connect with experienced and verified doctors for general physician consultations, specialist advice, preventive guidance, second opinions and follow-up treatment support.",
    badge: "Online and offline consultation support",
    stats: [
      { value: "24/7", label: "Consultation support" },
      { value: "10+", label: "Specialties" },
      { value: "India", label: "Telemedicine access" },
      { value: "Secure", label: "Digital privacy" },
    ],
    highlights: ["Verified doctors", "Easy booking", "Affordable care", "Digital prescriptions", "Follow-up support"],
    sections: [
      {
        eyebrow: "Specialties",
        title: "Medical specialties available at Astikan Health",
        cards: [
          { title: "General Physician", body: "Fever, infections, digestive problems, body pain, seasonal illness and routine concerns.", icon: "🩺" },
          { title: "Gynecology", body: "Pregnancy care, PCOS, menstrual health, hormonal concerns and preventive care.", icon: "♀" },
          { title: "Pediatrics", body: "Newborn care, vaccination guidance, nutrition, fever treatment and child development.", icon: "👶" },
          { title: "Orthopedics", body: "Arthritis, fractures, sports injuries, knee pain, joint disorders and back pain.", icon: "🦴" },
          { title: "Dermatology", body: "Acne, pigmentation, allergies, hair fall, fungal infections and skin concerns.", icon: "✨" },
          { title: "Cardiology", body: "Blood pressure management, chest discomfort, preventive cardiac care and heart monitoring.", icon: "❤️" },
        ],
      },
      {
        eyebrow: "Why choose Astikan",
        title: "Convenient healthcare access from home",
        bullets: ["Verified doctors", "Easy appointment booking", "Affordable healthcare services", "Online and offline support", "Personalized healthcare guidance", "Integrated services from doctors to medicines and labs"],
      },
      {
        eyebrow: "Benefits",
        title: "Online consultation saves time and improves healthcare access",
        bullets: ["Convenient access from home", "Faster medical guidance", "Easy follow-ups", "Digital prescription support", "Better healthcare management", "Improved access to specialist doctors"],
      },
    ],
    faqs: [
      { question: "How can I book a doctor appointment?", answer: "You can book a consultation through Astikan Health by selecting a medical specialty and consultation type or contacting support." },
      { question: "Are doctors on Astikan Health verified?", answer: "Yes. Astikan works with qualified and verified healthcare professionals across multiple specialties." },
      { question: "Do doctors provide digital prescriptions?", answer: "Doctors may provide digital prescriptions and treatment guidance after consultation depending on the medical condition." },
    ],
  },
  {
    slug: "medicines",
    navLabel: "Medicines",
    title: "Medicines",
    metaTitle: "Order Genuine Medicines Online with Astikan Health",
    metaDescription: "Order genuine medicines online with Astikan Health. Easy prescription upload, monthly refills, chronic care medicine support and trusted healthcare assistance across India.",
    eyebrow: "Trusted online medicine delivery across India",
    heroTitle: "Order genuine medicines online without stress.",
    heroText: "Astikan Health helps patients and families buy medicines safely, conveniently and affordably with easy prescription upload, chronic care support, urgent medicine assistance and monthly refill help.",
    badge: "Genuine medicines • Prescription upload • Refill support",
    stats: [
      { value: "4-step", label: "Ordering flow" },
      { value: "24/7", label: "Healthcare support" },
      { value: "Family", label: "Caregiver friendly" },
      { value: "India", label: "Delivery support" },
    ],
    highlights: ["Genuine medicines", "Easy prescription upload", "Regular refill support", "Emergency medicine help", "Patient-friendly support"],
    sections: [
      {
        eyebrow: "Online medicine delivery made simple",
        title: "Avoid fake medicines, delays and confusing apps",
        body: "Many patients struggle with out-of-stock medicines, delayed delivery, difficult prescription uploads, multiple pharmacy visits and unclear availability. Astikan simplifies the journey through assisted medicine support.",
        bullets: ["Medicines being out of stock", "Delayed medicine delivery", "Fake or low-quality medicine concerns", "Difficult prescription uploads", "Confusing healthcare apps", "Multiple pharmacy visits"],
      },
      {
        eyebrow: "Why patients trust Astikan",
        title: "Medicine assistance designed for reliability and patient safety",
        cards: [
          { title: "Genuine Medicines", body: "Patient safety comes first with medicine reliability and trusted healthcare assistance.", icon: "✓" },
          { title: "Easy Prescription Upload", body: "Upload your doctor’s prescription online quickly and get support throughout the process.", icon: "⇧" },
          { title: "Fast Assistance", body: "Avoid long pharmacy queues and searching multiple medical stores.", icon: "⚡" },
          { title: "Chronic Care Support", body: "Get help for diabetes, blood pressure, thyroid, heart care and long-term medicines.", icon: "∞" },
        ],
      },
      {
        eyebrow: "Family support",
        title: "Support for monthly refills, urgent needs and long-term treatment",
        bullets: ["Monthly medicine refills", "Emergency medicine support", "Long-term treatment medicines", "Post-surgery medicine requirements", "Prescription medicine assistance", "Healthcare guidance and support"],
      },
    ],
    process: [
      { title: "Upload Your Prescription", body: "Share your doctor’s prescription through WhatsApp or Astikan’s healthcare support platform.", icon: "01" },
      { title: "Get Medicine Assistance", body: "The support team reviews your medicine requirements and helps with guidance.", icon: "02" },
      { title: "Confirm Your Order", body: "Receive support for availability, order confirmation and next steps.", icon: "03" },
      { title: "Stay Connected", body: "Get ongoing support whenever you need assistance with medicines.", icon: "04" },
    ],
    faqs: [
      { question: "How can I order medicines online?", answer: "Upload your prescription online or share it on WhatsApp, then Astikan’s healthcare support team assists you with medicine requirements." },
      { question: "Are medicines from Astikan Health genuine?", answer: "Astikan Health focuses on trusted healthcare support and medicine reliability for patient safety and convenience." },
      { question: "Does Astikan support monthly medicine refills?", answer: "Yes. Astikan supports recurring healthcare assistance and chronic care medicine requirements." },
      { question: "Can I get help finding unavailable medicines?", answer: "Yes. The healthcare support team assists patients with medicine-related queries and support." },
    ],
  },
  {
    slug: "surgery",
    navLabel: "Surgery",
    title: "Surgery",
    metaTitle: "Affordable Surgery Care & Trusted Healthcare Support in India | Astikan Health",
    metaDescription: "Get surgery guidance, hospital coordination, specialist support, surgery cost guidance, medical finance assistance and post-treatment support through Astikan Health.",
    eyebrow: "Surgery care and patient support",
    heroTitle: "Affordable surgery guidance with trusted healthcare support.",
    heroText: "Astikan Health simplifies the surgical journey by helping patients connect with specialists, trusted hospitals, affordable options and personalized healthcare support across India.",
    badge: "Before • During • After surgery support",
    stats: [
      { value: "Multi", label: "Specialty surgery support" },
      { value: "EMI", label: "Finance assistance" },
      { value: "24/7", label: "Patient support" },
      { value: "India", label: "Hospital network" },
    ],
    highlights: ["Surgeon guidance", "Cost clarity", "Hospital coordination", "Finance support", "Post-surgery care"],
    sections: [
      {
        eyebrow: "Patient challenges",
        title: "Many patients delay treatment because surgery feels confusing and expensive",
        bullets: ["High surgery costs", "Difficulty finding trusted surgeons", "Lack of treatment guidance", "Hospital confusion", "Insurance and finance concerns", "Fear of complications", "Long waiting times"],
      },
      {
        eyebrow: "Specialties",
        title: "Surgery support across multiple medical specialties",
        cards: [
          { title: "General Surgery", body: "Hernia, appendix, gallbladder, piles and other general surgical procedures.", icon: "🏥" },
          { title: "Orthopedic Surgery", body: "Joint replacement, fractures, sports injuries, ligament problems and bone care.", icon: "🦴" },
          { title: "Gynecology Procedures", body: "Women’s healthcare treatment support and gynecological surgical assistance.", icon: "♀" },
          { title: "ENT Surgery", body: "Sinus surgery, ear conditions, throat procedures and ENT treatment guidance.", icon: "👂" },
          { title: "Urology Procedures", body: "Kidney stone treatment, urinary disorders and urology-related surgical care.", icon: "💧" },
          { title: "Minimally Invasive Surgery", body: "Advanced procedures focused on faster recovery, reduced pain and shorter hospital stays.", icon: "⚡" },
        ],
      },
      {
        eyebrow: "Finance and recovery",
        title: "Complete support before, during and after surgery",
        bullets: ["Specialist consultation support", "Treatment planning assistance", "Hospital coordination", "Patient care coordination", "Follow-up healthcare support", "Recovery guidance", "Medicine and diagnostic assistance"],
      },
    ],
    faqs: [
      { question: "How does Astikan Health help surgery patients?", answer: "Astikan provides surgery guidance, specialist consultation support, hospital coordination and healthcare navigation support." },
      { question: "Can Astikan help with surgery costs?", answer: "Yes. Patients can explore cost guidance, medical finance assistance and treatment planning support." },
      { question: "Is post-surgery support available?", answer: "Yes. Astikan provides follow-up healthcare guidance, recovery support and medicine assistance." },
    ],
  },
  {
    slug: "insurance",
    navLabel: "Insurance",
    title: "Insurance",
    metaTitle: "Health Insurance Support & Cashless Treatment Assistance | Astikan Health",
    metaDescription: "Astikan Health helps patients with insurance-related guidance, cashless treatment coordination, hospital support, treatment cost understanding and healthcare assistance.",
    eyebrow: "Insurance and treatment support",
    heroTitle: "Simpler health insurance and cashless treatment guidance.",
    heroText: "Astikan Health helps patients and families understand treatment options, hospital coordination, healthcare expenses and insurance-related support for a smoother medical journey.",
    badge: "Cashless guidance • Hospital coordination • Patient support",
    stats: [
      { value: "Cashless", label: "Treatment guidance" },
      { value: "Hospital", label: "Coordination" },
      { value: "Cost", label: "Understanding" },
      { value: "Emergency", label: "Assistance" },
    ],
    highlights: ["Cashless treatment guidance", "Hospital coordination", "Cost clarity", "Emergency support", "Patient-centered assistance"],
    sections: [
      {
        eyebrow: "Common concerns",
        title: "Insurance and hospital paperwork should not overwhelm patients",
        bullets: ["Understanding health insurance coverage", "Cashless hospitalization confusion", "Delayed claim approvals", "Treatment cost uncertainty", "Hospital coordination issues", "Medical paperwork stress", "Emergency healthcare expenses"],
      },
      {
        eyebrow: "Support services",
        title: "Healthcare insurance support services",
        cards: [
          { title: "Cashless Treatment Guidance", body: "Support related to cashless treatment processes and hospital assistance.", icon: "🛡️" },
          { title: "Hospital Coordination", body: "Healthcare communication support between providers and patients.", icon: "🏥" },
          { title: "Treatment Cost Understanding", body: "Guidance around estimated healthcare expenses and treatment planning.", icon: "₹" },
          { title: "Emergency Healthcare Assistance", body: "Quick support during urgent medical situations.", icon: "🚑" },
        ],
      },
      {
        eyebrow: "How it works",
        title: "Share your requirement and get coordinated support",
        body: "Patients can connect with Astikan, get healthcare guidance, understand treatment expenses and move forward with consultations, surgeries, lab tests, medicines or treatment coordination support.",
      },
    ],
    faqs: [
      { question: "Does Astikan provide insurance-related support?", answer: "Yes. Astikan helps patients with healthcare guidance and insurance-related assistance for smoother coordination." },
      { question: "Is cashless treatment support available?", answer: "Cashless treatment coordination support may be available depending on the hospital and healthcare provider." },
      { question: "Can I access other healthcare services?", answer: "Yes. Astikan also provides doctors, medicines, surgeries, lab tests, health packages and medical finance support." },
    ],
  },
  {
    slug: "medical-finance",
    navLabel: "Medical Finance",
    title: "Medical Finance",
    metaTitle: "Medical Finance & Healthcare EMI in India | Astikan Health",
    metaDescription: "Get medical finance, healthcare EMI solutions, instant surgery loan support, flexible repayment options and treatment financing assistance through Astikan Health.",
    eyebrow: "Medical finance and healthcare EMI",
    heroTitle: "Do not delay treatment because of financial pressure.",
    heroText: "Astikan Health offers affordable medical finance and healthcare EMI assistance for surgeries, hospital bills, diagnostics, IVF, dental care and advanced medical procedures across India.",
    badge: "Flexible EMI plans from 3 to 36 months",
    stats: [
      { value: "₹50Cr+", label: "Healthcare financing approved" },
      { value: "50K+", label: "Happy patients" },
      { value: "200+", label: "Partner hospitals" },
      { value: "3–36", label: "Month EMI options" },
    ],
    highlights: ["Instant digital approval", "Minimal documentation", "Flexible EMI", "Transparent rates", "Cashless support"],
    sections: [
      {
        eyebrow: "What is medical finance",
        title: "Pay for treatment through easy monthly EMIs",
        body: "Medical finance allows patients to pay for surgeries, hospital bills and medical procedures through easy monthly EMIs instead of paying the full amount upfront.",
      },
      {
        eyebrow: "Treatments covered",
        title: "Healthcare financing support across 500+ treatments",
        cards: [
          { title: "Cardiac Surgery", body: "Heart surgery, angioplasty, bypass surgery, pacemaker procedures and emergency heart treatments.", icon: "❤️" },
          { title: "Orthopedic Surgery", body: "Knee replacement, hip replacement, spine surgery, fractures and sports injuries.", icon: "🦴" },
          { title: "IVF & Fertility", body: "IVF, IUI, fertility consultations, pregnancy care, delivery and maternity packages.", icon: "👶" },
          { title: "Dental Treatment", body: "Dental implants, braces, root canal, smile makeover and cosmetic dentistry.", icon: "🦷" },
          { title: "Eye Care & LASIK", body: "LASIK, cataract, retina, glaucoma and vision correction procedures.", icon: "👁️" },
          { title: "Neurology & Spine", body: "Brain surgery, spine procedures, neurological disorders and advanced neurosurgery.", icon: "🧠" },
        ],
      },
      {
        eyebrow: "Benefits",
        title: "Finance support built for urgent and planned healthcare needs",
        bullets: ["Instant medical loan approval", "Affordable healthcare EMI plans", "Cashless treatment support", "Minimal documentation", "No hidden charges", "Secure digital process"],
      },
    ],
    process: [
      { title: "Apply Online", body: "Submit your medical finance application in a few simple steps.", icon: "01" },
      { title: "Upload Documents", body: "Share basic KYC documents such as Aadhaar, PAN and income proof.", icon: "02" },
      { title: "Instant Verification", body: "The finance team verifies eligibility and treatment details quickly.", icon: "03" },
      { title: "Start Treatment", body: "Choose an EMI plan and begin treatment with disbursal support.", icon: "04" },
    ],
    faqs: [
      { question: "What is a medical loan?", answer: "A medical loan helps patients pay for hospital bills, surgeries, treatments and diagnostics through easy monthly EMI plans." },
      { question: "Which treatments are covered?", answer: "Astikan provides finance assistance for surgeries, IVF, dental care, maternity, diagnostics, orthopedics, cardiac care and more." },
      { question: "What documents are required?", answer: "Basic KYC documents including Aadhaar, PAN, income proof and hospital estimates may be required." },
    ],
  },
  {
    slug: "health-packages",
    navLabel: "Health Packages",
    title: "Health Packages",
    metaTitle: "Affordable Health Packages & Full Body Checkups | Astikan Health",
    metaDescription: "Book affordable health packages, full body checkups, diabetes screening, heart health assessments and preventive wellness packages with Astikan Health.",
    eyebrow: "Preventive healthcare packages",
    heroTitle: "Affordable health packages and full body checkups.",
    heroText: "Astikan Health provides affordable preventive health packages designed for individuals, families, working professionals and senior citizens who want reliable healthcare monitoring.",
    badge: "Preventive care • Full body checkups • Family wellness",
    stats: [
      { value: "Annual", label: "Wellness screening" },
      { value: "Family", label: "Package support" },
      { value: "Senior", label: "Citizen checkups" },
      { value: "Digital", label: "Reports and guidance" },
    ],
    highlights: ["Full body checkups", "Diabetes screening", "Women’s health", "Men’s health", "Heart health"],
    sections: [
      {
        eyebrow: "Why regular checkups matter",
        title: "Detect health risks early and stay proactive",
        body: "Many health conditions develop silently. Regular preventive checkups help monitor wellness, identify risks early and support informed healthcare decisions.",
        bullets: ["Blood sugar levels", "Blood pressure", "Heart health", "Cholesterol levels", "Thyroid function", "Liver and kidney health", "Vitamin deficiencies"],
      },
      {
        eyebrow: "Packages",
        title: "Affordable health checkup packages for every need",
        cards: [
          { title: "Full Body Checkup", body: "Comprehensive diagnostic screening for overall wellness and preventive healthcare.", icon: "❤️" },
          { title: "Diabetes Screening", body: "Monitor blood sugar and diabetes-related health concerns.", icon: "🩸" },
          { title: "Women’s Health", body: "Screening for wellness, hormonal balance, thyroid, anemia and preventive care.", icon: "♀" },
          { title: "Men’s Health", body: "Lifestyle-related health monitoring, fitness assessment and wellness management.", icon: "♂" },
          { title: "Senior Citizen Checkups", body: "Monitoring designed for elderly healthcare needs and chronic condition screening.", icon: "👵" },
          { title: "Heart Health", body: "Cardiac wellness focused on cholesterol, blood pressure, ECG and heart assessment.", icon: "💓" },
        ],
      },
      {
        eyebrow: "Problems solved",
        title: "Make preventive healthcare transparent and patient-friendly",
        bullets: ["Confusion about necessary tests", "Expensive diagnostic packages", "Delayed health screenings", "Difficulty understanding reports", "Lack of trusted guidance", "Managing healthcare for parents and family members"],
      },
    ],
    faqs: [
      { question: "Why are preventive health checkups important?", answer: "Regular checkups help monitor wellness, detect concerns early and support preventive healthcare management." },
      { question: "Can Astikan help me choose the right package?", answer: "Yes. Astikan helps patients choose health packages based on age, lifestyle, goals and healthcare needs." },
      { question: "Are packages useful for senior citizens?", answer: "Yes. Regular health monitoring is especially important for elderly patients and chronic disease management." },
    ],
  },
  {
    slug: "blogs",
    navLabel: "Blogs",
    title: "Blogs",
    metaTitle: "Astikan Health Blogs | Trusted Healthcare Insights for a Healthier Life",
    metaDescription: "Read Astikan Health blogs for trusted healthcare insights, preventive care tips, online consultation guidance, diagnostics, medicines, surgery support and healthcare finance awareness.",
    eyebrow: "Astikan Health Blogs",
    heroTitle: "Trusted healthcare insights for a healthier life.",
    heroText: "Good health starts with the right information. Astikan Health blogs help patients and families understand preventive care, diagnostics, consultations, medicines and healthcare support.",
    badge: "Healthcare education • Preventive care • Patient support",
    highlights: ["Preventive care", "Diagnostics", "Medicines", "Doctor consultation", "Healthcare finance"],
    sections: [
      {
        eyebrow: "Featured topics",
        title: "Helpful healthcare content for patients and families",
        cards: [
          { title: "How to Choose a Full Body Checkup", body: "Understand what to look for in preventive health packages and when to book them.", icon: "01" },
          { title: "When to Consult a Doctor Online", body: "Learn where telemedicine helps and when urgent in-person care is needed.", icon: "02" },
          { title: "Managing Monthly Medicines", body: "Tips for prescription uploads, refills and chronic care medicine planning.", icon: "03" },
          { title: "Understanding Medical EMI", body: "A patient-friendly guide to healthcare finance, eligibility and repayment planning.", icon: "04" },
          { title: "Lab Reports Made Simple", body: "Know why regular diagnostic monitoring matters and how to act on reports.", icon: "05" },
          { title: "Surgery Planning Checklist", body: "Questions to ask before choosing a hospital, surgeon or treatment plan.", icon: "06" },
        ],
      },
      {
        eyebrow: "Patient education",
        title: "Healthcare should feel clear before it becomes urgent",
        body: "The blog section is designed to support SEO and patient trust by answering real healthcare questions in simple language.",
        bullets: ["Wellness tips", "Preventive care insights", "Healthcare service explainers", "Medical finance awareness", "Doctor consultation guidance", "Family health education"],
      },
    ],
    faqs: [
      { question: "Does Astikan Health blog provide medical advice?", answer: "Blog content is for general healthcare awareness and does not replace consultation with licensed healthcare professionals." },
      { question: "Can I contact Astikan after reading a blog?", answer: "Yes. You can call, WhatsApp or request a callback for personalized healthcare support." },
    ],
  },
  {
    slug: "testimonials",
    navLabel: "Testimonials",
    title: "Testimonials",
    metaTitle: "Patient Testimonials | Trusted Healthcare Experiences with Astikan Health",
    metaDescription: "Read patient testimonials about Astikan Health’s healthcare support, doctor consultations, medicines, lab tests, surgery guidance, medical finance and patient assistance.",
    eyebrow: "Patient testimonials",
    heroTitle: "Trusted healthcare experiences with Astikan Health.",
    heroText: "Choosing a healthcare platform is an important decision. Patient testimonials show how Astikan Health helps families access support with clarity, affordability and care.",
    badge: "Patient stories built on trust",
    stats: [
      { value: "60K+", label: "People benefited" },
      { value: "24/7", label: "Support appreciated" },
      { value: "Family", label: "Healthcare support" },
      { value: "Trust", label: "Patient-first care" },
    ],
    highlights: ["Easy access", "Responsive support", "Affordable care", "Better guidance", "Family assistance"],
    sections: [
      {
        eyebrow: "What patients appreciate",
        title: "Support that makes healthcare feel less confusing",
        cards: [
          { title: "Easy Access to Healthcare Services", body: "Patients appreciate being able to connect with healthcare services through one platform.", icon: "✓" },
          { title: "Helpful Support Team", body: "Families value responsive guidance during consultations, medicine ordering and diagnostic bookings.", icon: "☎" },
          { title: "Better Treatment Clarity", body: "Astikan helps patients understand options, costs and next steps before making decisions.", icon: "💡" },
          { title: "Family Healthcare Support", body: "Caregivers and senior citizens benefit from simplified assistance across multiple healthcare needs.", icon: "👨‍👩‍👧" },
        ],
      },
      {
        eyebrow: "Real feedback themes",
        title: "Healthcare support that patients remember",
        bullets: ["Simplifying healthcare processes", "Improving healthcare accessibility", "Supporting informed healthcare decisions", "Reducing treatment-related confusion", "Building trust through better healthcare experiences"],
      },
    ],
    faqs: [
      { question: "What do patients appreciate about Astikan Health?", answer: "Patients appreciate accessible healthcare services, responsive support, affordable guidance and connected healthcare assistance." },
      { question: "Can I share my Astikan experience?", answer: "Yes. Patients can contact the support team to share feedback or success stories." },
    ],
  },
  {
    slug: "success-stories",
    navLabel: "Success Stories",
    title: "Success Stories",
    metaTitle: "Success Stories | Real Healthcare Journeys with Astikan Health",
    metaDescription: "Explore Astikan Health success stories showing patient journeys, doctor consultation support, lab test assistance, medicine access, surgery guidance and healthcare finance coordination.",
    eyebrow: "Success stories",
    heroTitle: "Real healthcare journeys made simpler with Astikan Health.",
    heroText: "Behind every healthcare decision is a patient, a family and a journey. Astikan Health supports patients with guidance, coordination and healthcare access at every stage.",
    badge: "Patient journeys • Healthcare outcomes • Family support",
    highlights: ["Doctor consultations", "Lab tests", "Medicines", "Surgery planning", "Finance guidance"],
    sections: [
      {
        eyebrow: "Stories of support",
        title: "How Astikan helps patients move forward with confidence",
        cards: [
          { title: "Simplified Doctor Consultations", body: "Patients connect with healthcare professionals more conveniently through digital support and guided booking.", icon: "🩺" },
          { title: "Faster Diagnostic Access", body: "Families book tests and preventive checkups with clearer support and report guidance.", icon: "🧪" },
          { title: "Medicine Assistance", body: "Recurring medicine needs and urgent requirements become easier to manage with prescription support.", icon: "💊" },
          { title: "Surgery Planning", body: "Patients receive guidance around specialists, hospitals, costs and finance options.", icon: "🏥" },
        ],
      },
      {
        eyebrow: "Who benefits",
        title: "Healthcare support for many patient journeys",
        bullets: ["Individuals managing daily healthcare needs", "Families seeking preventive healthcare support", "Senior citizens requiring regular health monitoring", "Patients needing surgery and treatment guidance", "People seeking medical finance and affordability support"],
      },
    ],
    faqs: [
      { question: "What kind of success stories does Astikan Health highlight?", answer: "Astikan highlights patient journeys around healthcare access, consultations, medicines, diagnostics, surgery support and affordability guidance." },
      { question: "Can Astikan help during surgery planning?", answer: "Yes. Astikan helps patients access healthcare guidance and treatment-related support during surgery planning." },
    ],
  },
  {
    slug: "hospital-partners",
    navLabel: "Hospital Partners",
    title: "Hospital Partners",
    metaTitle: "Trusted Hospital Partners & Healthcare Network in India | Astikan Health",
    metaDescription: "Astikan Health connects patients with trusted hospital partners, healthcare support, treatment coordination, surgery guidance, medical finance and integrated patient services.",
    eyebrow: "Trusted hospital partners",
    heroTitle: "A healthcare network built for better patient coordination.",
    heroText: "Astikan Health helps patients and families find trusted healthcare support, quality treatment guidance, affordability and a smoother hospital experience.",
    badge: "Hospitals • Specialists • Patient support",
    stats: [
      { value: "100+", label: "Partner hospitals" },
      { value: "Apollo", label: "Hospital network" },
      { value: "MAX", label: "Healthcare partners" },
      { value: "Metro", label: "Network support" },
    ],
    highlights: ["Hospital coordination", "Treatment guidance", "Surgery support", "Finance assistance", "Patient care"],
    sections: [
      {
        eyebrow: "Network support",
        title: "Helping patients navigate hospitals with clarity",
        body: "Astikan Health connects patients to medical support services, healthcare guidance and treatment coordination across a trusted hospital network.",
        bullets: ["Doctor consultations", "Lab tests and diagnostics", "Surgery assistance", "Medical finance support", "Insurance guidance", "Healthcare support"],
      },
      {
        eyebrow: "Partner examples",
        title: "Associated with trusted healthcare institutions",
        cards: [
          { title: "Apollo Hospitals", body: "Trusted hospital network for surgeries, diagnostics and advanced treatments.", icon: "A" },
          { title: "Max Healthcare", body: "Multi-specialty healthcare support and patient coordination.", icon: "M" },
          { title: "Metro Hospitals", body: "Hospital partner support across healthcare needs.", icon: "M" },
          { title: "IHLD Group", body: "Healthcare institution collaboration for patient support services.", icon: "I" },
        ],
      },
    ],
    faqs: [
      { question: "How does Astikan support patients with hospitals?", answer: "Astikan helps patients with healthcare guidance, hospital coordination, treatment planning and integrated medical support services." },
      { question: "Can hospitals partner with Astikan Health?", answer: "Yes. Hospitals can connect with Astikan Health through the partnership team." },
    ],
  },
  {
    slug: "diagnostic-centers",
    navLabel: "Diagnostic Centers",
    title: "Diagnostic Centers",
    metaTitle: "Diagnostic Centers & Lab Support with Astikan Health",
    metaDescription: "Astikan Health helps patients access trusted diagnostic centers, lab test booking, preventive health checkups, home sample collection and digital reports.",
    eyebrow: "Diagnostic centers",
    heroTitle: "Trusted lab and diagnostic support with Astikan Health.",
    heroText: "Finding reliable diagnostic services can feel confusing. Astikan Health helps patients access diagnostic support, preventive healthcare and wellness monitoring with patient-friendly guidance.",
    badge: "Diagnostics • Preventive care • Reports",
    highlights: ["Lab test support", "Wellness monitoring", "Home collection", "Digital reports", "Doctor guidance"],
    sections: [
      {
        eyebrow: "Diagnostic support",
        title: "Testing support for different healthcare needs",
        cards: [
          { title: "Preventive Checkups", body: "Full body health packages and wellness screening for individuals and families.", icon: "❤️" },
          { title: "Routine Blood Tests", body: "CBC, thyroid, diabetes, liver, kidney, lipid and vitamin deficiency tests.", icon: "🩸" },
          { title: "Women’s Health", body: "Pregnancy, hormonal, PCOS and women wellness diagnostics.", icon: "♀" },
          { title: "Child Health", body: "Pediatric blood tests and nutritional assessment support.", icon: "👶" },
        ],
      },
      {
        eyebrow: "Common concerns",
        title: "Problems patients face with diagnostic services",
        bullets: ["Unclear test selection", "Expensive packages", "Delayed reports", "Difficulty understanding medical reports", "Lack of trusted lab guidance", "Managing family checkups"],
      },
    ],
    faqs: [
      { question: "What diagnostic services does Astikan support?", answer: "Astikan helps patients access preventive healthcare, wellness monitoring, diagnostic testing and healthcare support services." },
      { question: "Can I book full body checkups?", answer: "Yes. Full body checkups and preventive health packages are available through Astikan Health support." },
    ],
  },
  {
    slug: "privacy-policy",
    navLabel: "Privacy Policy",
    title: "Privacy Policy",
    metaTitle: "Privacy Policy | Astikan Health",
    metaDescription: "Read the Astikan Health Privacy Policy covering patient privacy, data protection, secure healthcare support and information handling practices.",
    eyebrow: "Privacy Policy",
    heroTitle: "Patient privacy and healthcare data protection matter.",
    heroText: "Astikan Health values patient privacy, data protection and secure healthcare support. This policy explains how information may be collected, used and protected.",
    badge: "Effective Date: May 28, 2026",
    policy: true,
    highlights: ["Patient privacy", "Data security", "Secure systems", "Transparency", "Healthcare confidentiality"],
    sections: [
      {
        title: "Information we may collect",
        body: "Astikan Health may collect information shared by users while accessing healthcare support, requesting appointments, using forms or communicating with the support team.",
        bullets: ["Name and contact details", "Healthcare service requirements", "Appointment and booking information", "Payment and transaction details where applicable", "Browser type, IP address and website activity data"],
      },
      {
        title: "How information may be used",
        body: "Information may be used to provide healthcare support, coordinate services, improve website experience, communicate with users and maintain service quality.",
        bullets: ["Healthcare support and appointment assistance", "Lab test, medicine, surgery and finance coordination", "Customer support communication", "Website functionality and improvement", "Legal and regulatory requirements"],
      },
      {
        title: "Security and transparency",
        body: "Astikan Health works to maintain reasonable technical and organizational safeguards to help protect personal and healthcare information from unauthorized access, misuse or disclosure.",
      },
      {
        title: "Healthcare disclaimer",
        body: "Users should consult licensed healthcare professionals for medical advice, diagnosis and treatment. In emergencies, users should contact emergency healthcare services or visit the nearest hospital.",
      },
    ],
  },
  {
    slug: "terms-and-conditions",
    navLabel: "Terms & Conditions",
    title: "Terms & Conditions",
    metaTitle: "Terms & Conditions | Astikan Health",
    metaDescription: "Read Astikan Health Terms & Conditions for use of the website, digital healthcare support, services, limitations, user responsibilities and healthcare guidance.",
    eyebrow: "Terms & Conditions",
    heroTitle: "Terms for using Astikan Health services and website.",
    heroText: "By accessing or using the Astikan Health website, digital healthcare platform or related healthcare support services, users agree to these terms and conditions.",
    badge: "Website and healthcare support terms",
    policy: true,
    highlights: ["User responsibilities", "Healthcare support", "Service limitations", "Third-party providers", "Emergency guidance"],
    sections: [
      {
        title: "Healthcare support scope",
        body: "Astikan Health works to improve patient convenience and healthcare accessibility. Healthcare outcomes and treatment results may vary depending on individual conditions and healthcare provider decisions.",
      },
      {
        title: "Medical responsibility",
        body: "Medical consultations, diagnoses and treatment recommendations remain the responsibility of licensed healthcare professionals. Astikan encourages users to consult qualified doctors for medical advice and treatment.",
      },
      {
        title: "User responsibilities",
        bullets: ["Provide accurate information", "Review appointment details before confirming bookings", "Follow healthcare provider instructions", "Contact emergency services during medical emergencies", "Use the website responsibly"],
      },
      {
        title: "Limitation of liability",
        body: "Astikan Health strives to provide reliable healthcare support and accessibility services but is not liable for outcomes, delays or third-party provider actions beyond its reasonable control.",
      },
    ],
  },
  {
    slug: "refund-policy",
    navLabel: "Refund Policy",
    title: "Refund Policy",
    metaTitle: "Refund Policy | Astikan Health",
    metaDescription: "Read Astikan Health Refund Policy covering healthcare service refunds, consultation refunds, diagnostic bookings, cancellations, third-party providers and refund timelines.",
    eyebrow: "Refund Policy",
    heroTitle: "A transparent refund policy for healthcare services.",
    heroText: "Astikan Health is committed to providing a smooth, transparent and patient-friendly healthcare experience. Refund eligibility depends on the nature and status of the healthcare service.",
    badge: "Transparent and patient-friendly",
    policy: true,
    highlights: ["Refund eligibility", "Consultations", "Diagnostics", "Third-party providers", "Timelines"],
    sections: [
      {
        title: "Refund eligibility",
        body: "Refund eligibility may depend on service type, appointment status, provider policy, service utilization and healthcare coordination status.",
      },
      {
        title: "Services that may not be eligible",
        bullets: ["Completed doctor consultations", "Healthcare services already initiated", "Confirmed diagnostic appointments after provider cut-off", "Surgery or hospital services started by third-party providers", "Non-refundable provider charges"],
      },
      {
        title: "Refund timelines",
        body: "Actual refund timelines may vary depending on the payment method used during the transaction and applicable banking procedures.",
      },
      {
        title: "Third-party healthcare providers",
        body: "Healthcare services coordinated through Astikan Health may involve hospitals, doctors, diagnostic centers, healthcare professionals and treatment coordinators with separate policies.",
      },
    ],
    faqs: [
      { question: "Can I get a refund for cancelled healthcare services?", answer: "Refund eligibility depends on healthcare coordination status, appointment confirmation, service utilization and provider policy." },
    ],
  },
  {
    slug: "cancellation-policy",
    navLabel: "Cancellation Policy",
    title: "Cancellation Policy",
    metaTitle: "Cancellation Policy | Astikan Health",
    metaDescription: "Read Astikan Health Cancellation Policy for appointment cancellations, diagnostic bookings, healthcare service cancellations, rescheduling and emergency situations.",
    eyebrow: "Cancellation Policy",
    heroTitle: "Flexible cancellation guidance for healthcare services.",
    heroText: "Medical appointments, healthcare services and treatment schedules may need cancellation or rescheduling due to personal, medical or emergency situations.",
    badge: "Appointments • Diagnostics • Healthcare services",
    policy: true,
    highlights: ["Appointment cancellation", "Rescheduling", "Diagnostic bookings", "Provider policies", "Emergency situations"],
    sections: [
      {
        title: "Cancellation requests",
        body: "Users should raise cancellation or rescheduling requests as early as possible so Astikan Health can coordinate with doctors, hospitals, clinics, diagnostic centers or other healthcare partners.",
      },
      {
        title: "Approval may vary",
        body: "Cancellation approval may vary depending on the policies of doctors, hospitals, clinics or healthcare partners associated with the booking.",
      },
      {
        title: "Diagnostic test cancellation",
        body: "Diagnostic cancellation rules may depend on sample collection status, time slot, partner policy and whether services have already been initiated.",
      },
      {
        title: "User responsibilities",
        bullets: ["Review appointment details carefully", "Inform support early", "Follow provider cancellation windows", "Keep booking details available", "Contact emergency services during urgent medical situations"],
      },
    ],
  },
  {
    slug: "cookie-policy",
    navLabel: "Cookie Policy",
    title: "Cookie Policy",
    metaTitle: "Cookie Policy | Astikan Health",
    metaDescription: "Read Astikan Health Cookie Policy explaining how cookies and similar technologies may be used to improve website functionality, healthcare accessibility and user experience.",
    eyebrow: "Cookie Policy",
    heroTitle: "How Astikan Health uses cookies to improve website experience.",
    heroText: "This Cookie Policy explains how Astikan Health uses cookies and similar technologies to improve website functionality, healthcare accessibility and overall digital experience.",
    badge: "Website functionality and analytics",
    policy: true,
    highlights: ["Essential cookies", "Analytics", "Functionality", "Preferences", "Third-party tools"],
    sections: [
      {
        title: "What cookies do",
        body: "Cookies help websites remember preferences, support secure functionality, analyze usage and improve user experience across healthcare pages and services.",
      },
      {
        title: "Types of cookies",
        bullets: ["Essential cookies for website functionality", "Analytics cookies to understand website usage", "Functionality cookies to improve user experience", "Preference cookies to remember settings", "Third-party cookies from integrated service providers"],
      },
      {
        title: "Managing cookie preferences",
        body: "Users may manage cookie preferences through browser settings. Blocking certain cookies may affect website functionality or service experience.",
      },
      {
        title: "Changes to cookie policy",
        body: "Astikan Health may update this policy due to website functionality updates, technology improvements or regulatory requirements.",
      },
    ],
  },
  {
    slug: "disclaimer",
    navLabel: "Disclaimer",
    title: "Disclaimer",
    metaTitle: "Disclaimer | Astikan Health",
    metaDescription: "Read Astikan Health Disclaimer about healthcare information, medical advice, third-party services, technology usage, payments and emergency guidance.",
    eyebrow: "Disclaimer",
    heroTitle: "Healthcare information and support disclaimer.",
    heroText: "The information, healthcare content, digital healthcare support and services available through Astikan Health are intended for general informational and healthcare assistance purposes only.",
    badge: "Informational support only",
    policy: true,
    highlights: ["Not medical advice", "Consult licensed doctors", "Emergency care", "Third-party providers", "Technology usage"],
    sections: [
      {
        title: "Not a substitute for medical advice",
        body: "Astikan Health content and support are not a substitute for consultation, diagnosis or treatment by licensed healthcare professionals.",
      },
      {
        title: "Healthcare information accuracy",
        body: "Medical consultations, diagnoses and treatment recommendations remain the responsibility of licensed healthcare professionals. Users should verify information before making healthcare decisions.",
      },
      {
        title: "Third-party providers",
        body: "Astikan Health may coordinate healthcare support with doctors, hospitals, diagnostic centers, pharmacies, finance providers and other third-party partners. Their services may be governed by separate policies.",
      },
      {
        title: "Emergency situations",
        body: "In medical emergencies, users should immediately contact emergency healthcare services or visit the nearest hospital.",
      },
    ],
  },
];

export const pageMap = new Map(pages.map((page) => [page.slug, page]));

export const canonicalPages = pages.filter((page) => page.slug !== "home");

export const navGroups = [
  {
    title: "Company",
    links: ["home", "about-us", "contact-us", "careers", "partner-with-us"],
  },
  {
    title: "Healthcare",
    links: ["lab-tests", "doctors", "medicines", "surgery", "insurance", "medical-finance", "health-packages"],
  },
  {
    title: "Trust",
    links: ["faq", "blogs", "testimonials", "success-stories", "hospital-partners", "diagnostic-centers"],
  },
  {
    title: "Legal",
    links: ["privacy-policy", "terms-and-conditions", "refund-policy", "cancellation-policy", "cookie-policy", "disclaimer"],
  },
];

export function hrefForSlug(slug: string) {
  return slug === "home" ? "/" : `/${slug}`;
}

export function getPage(slug: string) {
  return pageMap.get(slug);
}
