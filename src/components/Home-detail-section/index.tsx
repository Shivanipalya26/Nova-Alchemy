"use client";
import * as T from "@/styles/typography";

const HomeDetailSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center text-white p-8 md:p-28">
      <div>
        <T.H2>
          Together with you, we create new stories. Modern, technological,
          successful.
        </T.H2>
      </div>

      <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start gap-8 pt-8 md:pt-16">
        <div className="w-20 h-20 md:w-30 md:h-30 flex-shrink-0 rounded-full overflow-hidden">
          <video
            src="/videos/box.mp4"
            muted
            autoPlay
            loop
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <p className="text-[10px] md:text-xs tracking-wide uppercase text-gray-400">
            We deliver what we&apos;re responsible for:
          </p>
          <T.H4>
            Engaging experiences, world-class web design, and standout brand
            identity..
          </T.H4>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-18 text-gray-300 text-center sm:text-left w-full max-w-4xl ">
        <T.P>
          Our clients receive top digital products built for the future, with
          timeless designs.
        </T.P>
        <T.P>
          We make it possible as 10+ years of experience in the digital world
          doesn’t go unnoticed.
        </T.P>
        <T.P>
          Gathering the best talents—engineers in minds helps us craft the best
          thought-out solutions.
        </T.P>
      </div>
    </section>
  );
};

export default HomeDetailSection;
