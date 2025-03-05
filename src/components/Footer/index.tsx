import * as T from "@/styles/typography";
import Link from "next/link";
import { FooterData } from "@/config/Footer";

const FooterLink = [
  {
    title: "Instagram",
    link: "/instagram",
  },
  {
    title: "Behance",
    link: "/behance",
  },
  {
    title: "Dribble",
    link: "/dribble",
  },
  {
    title: "Twitter",
    link: "/twitter",
  },
];

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="flex justify-between items-center pt-2">
        {FooterData.map((item, index) => (
          <Link key={index} href={item.link}>
            <T.H2 className="" key={index}>
              {item.text}
            </T.H2>
          </Link>
        ))}
      </div>

      <div className="flex gap-8 py-20 justify-center">
        {FooterLink.map((item, index) => (
          <Link key={index} href={item.link}>
            <div key={index}>
              <p className="hover:underline">{item.title}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-end p-4">
        <Link href={"/404"}>
          <p className="hover:underline">p.404</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
