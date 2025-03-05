"use client";
import * as T from "@/styles/typography";
import HoverText from "../HoverText";

const HomeHeroHeadings = () => {
  return (
    <section>
      <div className="text-center pt-0 p-[150px]">
        <div>
          <HoverText scaleRatio={12} href="/work">
            <T.H2>Work</T.H2>
          </HoverText>
        </div>
        <div>
          <HoverText scaleRatio={16} href="/connect">
            <T.H2>NovaKonnect</T.H2>
          </HoverText>
        </div>
        <hr />
        <div>
          <HoverText scaleRatio={20} href="/xe">
            <T.H2>Xe.works</T.H2>
          </HoverText>
        </div>
        <hr />
        <div>
          <HoverText scaleRatio={10} href="startup">
            <T.H2>Start Up</T.H2>
          </HoverText>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroHeadings;
