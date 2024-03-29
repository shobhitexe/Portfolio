export type AllWorksType = {
  title: string;
  image: string;
  alt: string;
};

const WorksBaseUrl: string = "/images/showcase";

export const AllWorksData: AllWorksType[] = [
  {
    title: "FundYourTrading",
    image: `${WorksBaseUrl}/fyt.avif`,
    alt: "fundyourtrading",
  },
  {
    title: "SLEEK CUSTOM",
    image: `${WorksBaseUrl}/sleekcustom.avif`,
    alt: "sleekcustom",
  },
  {
    title: "TradeBox",
    image: `${WorksBaseUrl}/tradebox.avif`,
    alt: "tradebox",
  },
  {
    title: "VPN WIZARD",
    image: `${WorksBaseUrl}/vpnwizard.avif`,
    alt: "vpnwizard",
  },
  {
    title: "BlockEstate",
    image: `${WorksBaseUrl}/blockestate.avif`,
    alt: "blockestate",
  },
  {
    title: "Master memecoin",
    image: `${WorksBaseUrl}/master.avif`,
    alt: "master",
  },
];
