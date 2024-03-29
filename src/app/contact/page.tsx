"use client";

import { ContactLeft, ContactRight } from "@/components";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Contact() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 2.5 });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div
      className={`mt-[100px] flex md:flex-row flex-col max-md:gap-20 w-[90%] mx-auto`}
    >
      <ContactLeft />
      <ContactRight />
    </div>
  );
}
