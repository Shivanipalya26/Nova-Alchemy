"use client";
import * as T from "@/styles/typography";
import HoverText from "../HoverText";

const data = [
  {
    title: "Work",
    link: "/work",
  },
  {
    title: "NovaKonnect",
    link: "/connect",
  },
  {
    title: "Xe.works",
    link: "/xe",
  },
  {
    title: "Start Up",
    link: "/startup",
  },
];

const HomeHeroHeadings = () => {
  return (
    <section>
      <div className="text-center pt-0 px-4 py-6 pb-36 md:p-[150px]">
        {data.map((item, index) => (
          <div key={index}>
            <HoverText href={item.link}>
              <T.H2>{item.title}</T.H2>
            </HoverText>
            {index < data.length - 1 && <hr className="border-gray-500" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeHeroHeadings;
