import { FaArrowRight, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

type CTAButtonsProps = {
  align?: "left" | "center";
  compact?: boolean;
  whatsappText?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-black tracking-tight transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e7354c]";

export default function CTAButtons({ align = "left", compact = false, whatsappText }: CTAButtonsProps) {
  const sizeClass = compact ? "px-4 py-3" : "px-5 py-3.5 sm:px-6 sm:py-4";
  const whatsAppHref = `https://wa.me/919990071792?text=${encodeURIComponent(whatsappText ?? "Hi Astikan Health, I need healthcare support.")}`;

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${align === "center" ? "items-center justify-center" : "items-stretch sm:items-center"}`}>
      <a
        href="tel:+919990071792"
        className={`${base} ${sizeClass} bg-gradient-to-r from-[#e7354c] via-[#7b2bbd] to-[#0b1d5c] text-white shadow-[0_20px_55px_rgba(123,43,189,0.24)] hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(231,53,76,0.28)]`}
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-white/16"><FaPhoneAlt className="h-3.5 w-3.5" /></span>
        Call Now
      </a>
      <a
        href={whatsAppHref}
        target="_blank"
        rel="noreferrer"
        className={`${base} ${sizeClass} border border-[#e7354c]/20 bg-white/90 text-[#171550] shadow-[0_16px_45px_rgba(11,29,92,0.10)] backdrop-blur hover:-translate-y-1 hover:border-[#7b2bbd]/30 hover:bg-[#fff5f7]`}
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#171550] text-white"><FaWhatsapp className="h-4 w-4" /></span>
        Book on WhatsApp
      </a>
      <a
        href="#callback"
        className={`${base} ${sizeClass} border border-[#171550]/10 bg-[#f7f6ff]/90 text-[#171550] hover:-translate-y-1 hover:border-[#e7354c]/25 hover:bg-white`}
      >
        Request Callback <FaArrowRight className="h-3 w-3" />
      </a>
    </div>
  );
}
