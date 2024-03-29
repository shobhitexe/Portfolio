"use client";

import {
  AboutSection,
  ContactSection,
  Expertise,
  Hero,
  Showcase,
  Skills,
  Values,
  Work,
} from "@/components";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
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
      <Hero />
      <Showcase />
      <AboutSection />
      <Skills />
      <Work />
      <Expertise />
      <Values />
      <ContactSection />
    </div>
  );
}
