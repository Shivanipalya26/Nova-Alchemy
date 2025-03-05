"use client";
import { FC, useEffect, useRef } from "react";
import gsap from "gsap";
import {
  IconPlus,
  IconMultiply,
  IconCircle,
  IconTriangle,
} from "@/styles/icons";

interface GSAPLoaderProps {
  duration?: number;
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
  onComplete?: () => void;
  children: React.ReactNode;
}

const PageLoadingAnimation: FC<GSAPLoaderProps> = ({
  duration = 3,
  primaryColor = "#ffffff",
  secondaryColor = "#757575",
  backgroundColor = "rgba(1,1,1,1)",
  onComplete,
  children,
}) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const plusRef = useRef<SVGSVGElement>(null);
  const multiplyRef = useRef<SVGSVGElement>(null);
  const circleRef = useRef<SVGSVGElement>(null);
  const triangleRef = useRef<SVGSVGElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const plus = plusRef.current;
    const multiply = multiplyRef.current;
    const circle = circleRef.current;
    const triangle = triangleRef.current;
    const progress = progressRef.current;

    if (!loader || !plus || !multiply || !circle || !triangle || !progress)
      return;

    gsap.set([plus, multiply, circle, triangle], {
      autoAlpha: 0,
      scale: 0.5,
      transformOrigin: "center center",
    });
    gsap.set(plus, { autoAlpha: 1 });
    gsap.set(progress, { width: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loader, {
          autoAlpha: 0,
          duration: 0.7,
          onComplete: onComplete,
        });
      },
    });

    tl.to(progress, { width: "100%", duration: 3.5, ease: "linear" }, 0);

    tl.to(
      plus,
      {
        autoAlpha: 1,
        scale: 1,
        rotation: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      },
      0
    )
      .to(plus, { rotation: 90, duration: 0.3, ease: "power1.inOut" }, 0.7)
      .to(
        plus,
        { autoAlpha: 0, scale: 1.5, duration: 0.3, ease: "power1.in" },
        0.9
      );

    tl.to(
      multiply,
      {
        autoAlpha: 1,
        scale: 1,
        rotation: -45,
        duration: 0.5,
        ease: "back.out(1.7)",
      },
      1
    )
      .to(multiply, { rotation: 0, duration: 0.3, ease: "power1.inOut" }, 1.7)
      .to(
        multiply,
        { autoAlpha: 0, scale: 1.5, duration: 0.3, ease: "power1.in" },
        1.9
      );

    tl.to(
      circle,
      { autoAlpha: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
      2
    )
      .to(
        circle,
        {
          scale: 0.8,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut",
        },
        2.3
      )
      .to(
        circle,
        { autoAlpha: 0, scale: 1.5, duration: 0.3, ease: "power1.in" },
        2.9
      );

    tl.to(
      triangle,
      {
        autoAlpha: 1,
        scale: 1,
        rotation: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      },
      3
    )
      .to(triangle, { rotation: 180, duration: 0.5, ease: "power1.inOut" }, 3.3)
      .to(
        triangle,
        { autoAlpha: 0, scale: 1.5, duration: 0.3, ease: "power1.in" },
        3.9
      );

    return () => {
      tl.kill();
    };
  }, [duration, onComplete]);

  return (
    <>
      <div
        ref={loaderRef}
        className="fixed inset-0 flex items-center justify-center z-50"
        style={{ backgroundColor }}
      >
        <div className="relative w-64 h-64 flex items-center justify-center">
          <IconPlus
            ref={plusRef}
            size={24}
            color={primaryColor}
            className="absolute"
            style={{ opacity: 1 }}
          />
          <IconMultiply
            ref={multiplyRef}
            size={24}
            color={secondaryColor}
            className="absolute"
            style={{ opacity: 0 }}
          />
          <IconCircle
            ref={circleRef}
            size={24}
            color={primaryColor}
            className="absolute"
            style={{ opacity: 0 }}
          />
          <IconTriangle
            ref={triangleRef}
            size={24}
            color={secondaryColor}
            className="absolute"
            style={{ opacity: 0 }}
          />
          <div className="absolute bottom-0 left-0 w-full">
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <div
                ref={progressRef}
                className="h-full"
                style={{ backgroundColor: primaryColor, width: "0%" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative">{children}</div>
    </>
  );
};

export default PageLoadingAnimation;
