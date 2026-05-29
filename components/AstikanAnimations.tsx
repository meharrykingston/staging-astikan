"use client";

import { useEffect } from "react";

export default function AstikanAnimations() {
  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const boot = async () => {
      const [{ default: AOS }, gsapModule, scrollTriggerModule] = await Promise.all([
        import("aos"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      const gsap = gsapModule.gsap ?? gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger ?? scrollTriggerModule.default;

      gsap.registerPlugin(ScrollTrigger);

      AOS.init({
        duration: 850,
        easing: "ease-out-cubic",
        once: true,
        offset: 76,
      });

      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".gsap-hero-kicker",
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, ease: "power3.out" },
        );

        gsap.fromTo(
          ".gsap-hero-title",
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, delay: 0.08, ease: "power3.out" },
        );

        gsap.fromTo(
          ".gsap-hero-copy",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, delay: 0.18, ease: "power3.out" },
        );

        gsap.fromTo(
          ".gsap-hero-card",
          { y: 28, rotate: -1.5, opacity: 0 },
          { y: 0, rotate: 0, opacity: 1, duration: 0.9, delay: 0.26, stagger: 0.08, ease: "back.out(1.4)" },
        );

        gsap.to(".gsap-orbit", {
          y: -14,
          duration: 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: 0.24,
        });

        (gsap.utils.toArray(".gsap-reveal") as HTMLElement[]).forEach((node) => {
          gsap.fromTo(
            node,
            { y: 36, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.72,
              ease: "power2.out",
              scrollTrigger: {
                trigger: node,
                start: "top 86%",
              },
            },
          );
        });
      });

      cleanup = () => ctx.revert();
    };

    boot().catch(() => undefined);

    return () => {
      cleanup?.();
    };
  }, []);

  return null;
}
