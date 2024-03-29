"use client";

import {
  ProjectHero,
  ProjectImages,
  ProjectInfo,
  ProjectSlider,
} from "@/components";

import { ProjectsData } from "../data/ProjectsData";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function ProjectDetails({
  params,
}: {
  params: { name: string };
}) {
  const data = ProjectsData[params.name];

  if (!data) {
    redirect("/404");
  }

  useEffect(() => {
    const lenis = new Lenis({ duration: 2.5 });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <ProjectHero heroData={data.head} />
      <ProjectInfo desc={data.desc} links={data.links} />
      <ProjectImages images={data.images} />
      <ProjectSlider currPage={params.name} />
    </div>
  );
}
