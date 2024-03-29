"use client";

import { ContactSection, AboutHead, AboutDesc, Values } from "@/components";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function About() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 2.5 });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="sm:mt-[190px] mt-[250px]">
      <AboutHead />
      <AboutDesc />
      <Values />
      <ContactSection />
    </div>
  );
}
