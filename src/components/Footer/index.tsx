import * as T from "@/styles/typography";
import Link from "next/link";
import { FooterData } from "@/config/Footer";


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
         <p>Instagram</p>
         <p>Behance</p>
         <p>Dribble</p>
         <p>Twitter</p>
      </div>

      <div className="flex justify-end p-4">
        <Link href={'/404'}>
        <p>p.404</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
