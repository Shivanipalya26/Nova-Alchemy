"use client";

import { HomeArrow } from "@/styles/icons";
import * as T from "@/styles/typography";

const HomeHeroSection = () => {
  return (
    <section className="min-h-screen">
      <div className="grid grid-cols-[1.5fr_2fr] gap-4">
        <div className="flex items-end">
          <HomeArrow />
        </div>
        <div className="">
          <video
            src="/videos/homeBackground.mp4"
            muted
            autoPlay
            loop
            width={5000}
            height={5000}
            className="w-full h-full object-cover rounded-3xl"
          ></video>
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-[1.5fr_2fr] pt-10">
          <T.P>House of digital aesthetics ©</T.P>
          <div className="grid grid-cols-2 gap-8">
            <T.P>Place where well-crafted web projects are born.</T.P>
            <T.P>We provide end-to-end web development and design services.</T.P>
          </div>
        </div>
        <hr />
        <p className="text-xs pt-4">©2025</p>
      </div>
    </section>
  );
};

export default HomeHeroSection;
