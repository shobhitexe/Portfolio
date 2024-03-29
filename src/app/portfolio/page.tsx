"use client";

import { ContactSection, AllWorks, PortfolioHero } from "@/components";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 2.5 });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className={`mt-[100px]`}>
      <PortfolioHero />
      <AllWorks />
      <ContactSection />
    </div>
  );
}
