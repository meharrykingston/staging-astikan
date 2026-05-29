import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Online Doctor Consultation & Healthcare Plans in India | Astikan Health",
  description:
    "Astikan Health helps families access online doctor consultations, lab tests, medicines, surgeries, insurance support, medical finance and preventive healthcare services across India.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePage />;
}
