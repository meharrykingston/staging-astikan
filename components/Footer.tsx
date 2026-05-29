import Image from "next/image";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { contact, hrefForSlug, navGroups, pageMap } from "@/data/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-[#171550]/10 bg-[#090b2d] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_1.9fr] lg:px-8">
        <div>
          <div className="relative h-14 w-48 overflow-hidden rounded-2xl bg-white/5">
            <Image src="/astikan-logo.png" alt="Astikan Healthcare" fill className="object-contain object-left" sizes="192px" />
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/68">
            Astikan Health is a complete digital healthcare platform for doctor consultations, lab tests, medicines, surgeries, insurance support, medical finance and preventive care.
          </p>
          <div className="mt-6 grid gap-2 text-sm font-bold text-white/78">
            <span className="flex items-start gap-3"><FaMapMarkerAlt className="mt-1 shrink-0 text-[#ff9cac]" /> B-45, Sector 56, Noida, Uttar Pradesh, India</span>
            <a href="tel:+919990071792" className="flex items-center gap-3 hover:text-[#ffb8c2]"><FaPhoneAlt className="text-[#ff9cac]" />{contact.phonePrimary}</a>
            <a href="tel:+917303334931" className="flex items-center gap-3 hover:text-[#ffb8c2]"><FaWhatsapp className="text-[#1fd77b]" />{contact.phoneSecondary}</a>
            <a href="mailto:care@astikan.com" className="flex items-center gap-3 hover:text-[#ffb8c2]"><FaEnvelope className="text-[#ff9cac]" />{contact.emailPrimary}</a>
          </div>
          <div className="mt-6 flex gap-3">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, index) => (
              <a key={index} href="#" aria-label="Astikan social profile" className="grid h-9 w-9 place-items-center rounded-full bg-white/8 text-white transition hover:bg-[#e7354c]"><Icon className="h-3.5 w-3.5" /></a>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {navGroups.map((group) => (
            <nav key={group.title} aria-label={`${group.title} footer`}>
              <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[#ff9cac]">{group.title}</h3>
              <div className="mt-4 grid gap-3">
                {group.links.map((slug) => {
                  const page = pageMap.get(slug);
                  if (!page) return null;
                  return (
                    <a key={slug} href={hrefForSlug(slug)} className="text-sm font-semibold text-white/70 transition hover:text-white">
                      {page.navLabel}
                    </a>
                  );
                })}
              </div>
            </nav>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-xs text-white/52 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Astikan Healthcare Private Limited. All Rights Reserved.</p>
          <p>CIN: U74999UP2018PTC103568</p>
          <p>Made with <span className="text-[#e7354c]">♥</span> for a Healthier India</p>
        </div>
      </div>
    </footer>
  );
}
