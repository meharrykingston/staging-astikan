import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CTAButtons from "@/components/CTAButtons";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fbf9ff] px-4 pt-32 text-center text-[#101249]">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-[#171550]/10 bg-white p-8 shadow-[0_24px_80px_rgba(11,29,92,0.08)]">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#e7354c]">Page not found</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">This Astikan page is not available.</h1>
          <p className="mt-5 text-lg leading-8 text-[#606783]">Return to the healthcare homepage or connect with the support team for help.</p>
          <div className="mt-8">
            <CTAButtons align="center" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
