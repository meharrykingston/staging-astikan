"use client";

import Image from "next/image";
import { FaBars, FaChevronDown, FaPhoneAlt, FaTimes, FaUser, FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { hrefForSlug, navGroups, pageMap } from "@/data/site-data";

const topNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Find Doctors", href: "/doctors" },
  { label: "Lab Tests", href: "/lab-tests" },
  { label: "Medical Finance", href: "/medical-finance" },
  { label: "Health Packages", href: "/health-packages" },
  { label: "Surgery", href: "/surgery" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#171550]/8 bg-white/92 shadow-[0_8px_30px_rgba(11,29,92,0.04)] backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="relative h-10 w-32 shrink-0 overflow-hidden sm:w-36" aria-label="Astikan Health home">
          <Image src="/astikan-logo.png" alt="Astikan Healthcare" fill priority className="object-contain object-left" sizes="144px" />
        </a>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
          {topNav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname === item.href;
            return (
              <a key={item.href} href={item.href} className={`relative text-sm font-black transition ${active ? "text-[#7834d1]" : "text-[#101249] hover:text-[#7834d1]"}`}>
                {item.label}
                {active ? <span className="absolute -bottom-5 left-1/2 h-0.5 w-7 -translate-x-1/2 rounded-full bg-[#7834d1]" /> : null}
              </a>
            );
          })}
          <div className="group relative">
            <button type="button" className="text-sm font-black text-[#101249] transition hover:text-[#7834d1]">
              More <FaChevronDown className="inline text-[10px]" />
            </button>
            <div className="invisible absolute right-0 top-[calc(100%+22px)] w-[820px] translate-y-2 rounded-[2rem] border border-[#171550]/10 bg-white p-5 opacity-0 shadow-[0_30px_100px_rgba(9,11,45,0.18)] transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid gap-5 md:grid-cols-4">
                {navGroups.map((group) => (
                  <div key={group.title}>
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#e7354c]">{group.title}</p>
                    <div className="grid gap-1.5">
                      {group.links.map((slug) => {
                        const item = pageMap.get(slug);
                        if (!item) return null;
                        return (
                          <a key={slug} href={hrefForSlug(slug)} className="rounded-2xl px-3 py-2 text-sm font-bold text-[#444b70] transition hover:bg-[#fff0f3] hover:text-[#e7354c]">
                            {item.navLabel}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="/login" className="inline-flex items-center gap-2 rounded-xl border border-[#e7354c]/25 bg-white px-5 py-2.5 text-sm font-black text-[#e7354c] transition hover:bg-[#fff0f3]">
            <FaUser className="text-xs" /> Login
          </a>
          <a href="tel:+919990071792" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7b2bbd] to-[#e7354c] px-5 py-2.5 text-sm font-black text-white shadow-[0_16px_35px_rgba(231,53,76,0.18)] transition hover:-translate-y-0.5">
            <FaPhoneAlt className="text-xs" /> Book Consultation
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a href="/login" className="grid h-10 w-10 place-items-center rounded-xl border border-[#e7354c]/20 text-[#e7354c]" aria-label="Login"><FaUser /></a>
          <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-xl border border-[#171550]/10 bg-white text-[#101249] shadow-sm xl:hidden" aria-label="Toggle menu" aria-expanded={open}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-[#171550]/10 bg-white px-4 py-5 shadow-2xl xl:hidden">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {navGroups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#e7354c]">{group.title}</p>
                <div className="grid gap-2">
                  {group.links.map((slug) => {
                    const item = pageMap.get(slug);
                    if (!item) return null;
                    return (
                      <a key={slug} href={hrefForSlug(slug)} onClick={() => setOpen(false)} className="rounded-2xl bg-[#f7f6ff] px-4 py-3 text-sm font-black text-[#171550] transition hover:bg-[#fff0f3] hover:text-[#e7354c]">
                        {item.navLabel}
                      </a>
                    );
                  })}
                </div>
              </nav>
            ))}
          </div>
          <div className="mx-auto mt-5 flex max-w-7xl flex-col gap-3 sm:flex-row">
            <a href="tel:+919990071792" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7b2bbd] to-[#e7354c] px-5 py-3 text-center text-sm font-black text-white"><FaPhoneAlt className="inline text-xs" /> Book Consultation</a>
            <a href="https://wa.me/919990071792" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#171550]/12 px-5 py-3 text-center text-sm font-black text-[#171550]"><FaWhatsapp className="inline text-xs" /> WhatsApp</a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
