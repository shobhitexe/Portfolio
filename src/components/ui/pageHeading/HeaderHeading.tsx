"use client";

import { RootState } from "@/store/rootReducer";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

type HeaderHeadingProps = {
  HeroHeadingText: string;
  startHighlight?: number;
  endHighlight?: number;
  textSize?: string;
};

export default function HeaderHeading({
  HeroHeadingText,
  startHighlight = 0,
  endHighlight = 3,
  textSize = "text-[7vw]",
}: HeaderHeadingProps) {
  const isNavOpen = useSelector((state: RootState) => state.isNavOpen.isOpen);

  return (
    <div
      className={`w-full flex sm:gap-5 gap-2 flex-wrap text-whiteShade overflow-hidden font-satoshi ${textSize} mt-5 leading-[0.8] font-semibold ${
        isNavOpen && "-z-50"
      }`}
    >
      {" "}
      {HeroHeadingText.split(" ").map((text, idx) => {
        return (
          <div
            className={`${
              idx <= startHighlight || idx >= endHighlight
                ? "text-green-500"
                : "text-whiteShade"
            } flex`}
            key={idx}
          >
            {Array.from(text).map((txt, idx) => (
              <motion.div
                layout
                initial={{ translateY: -3 * idx, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{
                  delay: 0.05 * idx,
                  duration: 1,
                  stiffness: 50,
                  damping: 6,
                  type: "spring",
                }}
                key={idx}
              >
                {txt}
              </motion.div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
