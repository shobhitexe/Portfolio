import { blockestateBaseUrl } from "@/app/projects/data/blockestate";
import { fytBaseUrl } from "@/app/projects/data/fundyourtrading";
import { masterBaseUrl } from "@/app/projects/data/master";
import { sleekcustomImageBaseUrl } from "@/app/projects/data/sleekcustom";
import { tradeboxBaseUrl } from "@/app/projects/data/tradebox";
import { vpnwizardBaseUrl } from "@/app/projects/data/vpnwizard";

export type showCaseImagesType = {
  image: string;
  alt: string;
};

const showCaseImagesBaseUrl: string = "/images/showcase";

export const showCaseImages: showCaseImagesType[] = [
  { image: `${showCaseImagesBaseUrl}/master.avif`, alt: "master" },
  { image: `${masterBaseUrl}/master2.avif`, alt: "master2" },
  { image: `${masterBaseUrl}/master3.avif`, alt: "master3" },
  { image: `${masterBaseUrl}/master4.avif`, alt: "master4" },

  { image: `${showCaseImagesBaseUrl}/blockestate.avif`, alt: "blockestate" },
  { image: `${blockestateBaseUrl}/blockestate2.avif`, alt: "blockestate2" },
  { image: `${blockestateBaseUrl}/blockestate3.avif`, alt: "blockestate3" },
  { image: `${blockestateBaseUrl}/blockestate4.avif`, alt: "blockestate4" },
  { image: `${blockestateBaseUrl}/blockestate5.avif`, alt: "blockestate5" },

  { image: `${showCaseImagesBaseUrl}/vpnwizard.avif`, alt: "vpnwizard" },
  { image: `${vpnwizardBaseUrl}/vpnwizard2.avif`, alt: "vpnwizard2" },
  { image: `${vpnwizardBaseUrl}/vpnwizard3.avif`, alt: "vpnwizard3" },
  { image: `${vpnwizardBaseUrl}/vpnwizard4.avif`, alt: "vpnwizard4" },

  { image: `${showCaseImagesBaseUrl}/sleekcustom.avif`, alt: "sleekcustom" },
  {
    image: `${sleekcustomImageBaseUrl}/sleekcustom2.avif`,
    alt: "sleekcustom2",
  },
  {
    image: `${sleekcustomImageBaseUrl}/sleekcustom3.avif`,
    alt: "sleekcustom3",
  },
  {
    image: `${sleekcustomImageBaseUrl}/sleekcustom4.avif`,
    alt: "sleekcustom4",
  },
  {
    image: `${sleekcustomImageBaseUrl}/sleekcustom5.avif`,
    alt: "sleekcustom5",
  },
  {
    image: `${sleekcustomImageBaseUrl}/sleekcustom6.avif`,
    alt: "sleekcustom6",
  },

  { image: `${showCaseImagesBaseUrl}/metadecrypt.avif`, alt: "metadecrypt" },
  { image: `${showCaseImagesBaseUrl}/secufin.avif`, alt: "secufin" },
  { image: `${showCaseImagesBaseUrl}/xtend.avif`, alt: "xtend" },

  { image: `${tradeboxBaseUrl}/tradebox.avif`, alt: "tradebox" },
  { image: `${tradeboxBaseUrl}/tradebox1.avif`, alt: "tradebox1" },

  { image: `${fytBaseUrl}/fyt.avif`, alt: "fundyourtrading" },
  { image: `${fytBaseUrl}/fyt1.avif`, alt: "fundyourtrading1" },
  { image: `${fytBaseUrl}/fyt2.avif`, alt: "fundyourtrading2" },
  { image: `${fytBaseUrl}/fyt3.avif`, alt: "fundyourtrading3" },
  { image: `${fytBaseUrl}/fyt4.avif`, alt: "fundyourtrading4" },
  { image: `${fytBaseUrl}/fyt5.avif`, alt: "fundyourtrading5" },
  { image: `${fytBaseUrl}/fyt6.avif`, alt: "fundyourtrading6" },
  { image: `${fytBaseUrl}/fyt7.avif`, alt: "fundyourtrading7" },
];
