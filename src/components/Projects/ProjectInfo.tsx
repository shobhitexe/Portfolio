"use client";

import Label, { labelColors } from "../ui/Label/Label";

type ProjectInfoProps = {
  desc: { descHead: string; descPara: string };
  links: { liveSite?: string; github?: string };
};

export default function ProjectInfo({ desc, links }: ProjectInfoProps) {
  return (
    <div className="w-[95%] mx-auto mt-10 flex flex-col gap-5">
      <h1 className="text-whiteShade font-satoshi md:text-[40px] sm:text-[30px] text-[20px] font-medium uppercase">
        {desc.descHead}
      </h1>
      <div className="w-full flex gap-5 justify-end">
        <div className="w-full"></div>
        <div className="flex flex-col gap-5">
          <p className="text-whiteShade font-general md:text-[18px] sm:text-[15px] text-[12px]">
            {desc.descPara}
          </p>
          <div className="flex gap-2">
            {Boolean(links.liveSite) && (
              <Label
                title="Visit Site"
                labelBg={labelColors.green}
                href={links.liveSite}
                padding="px-5 py-2"
              />
            )}
            {Boolean(links.github) && (
              <Label
                title="Github"
                labelBg={labelColors.green}
                href={links.github}
                padding="px-5 py-2"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
