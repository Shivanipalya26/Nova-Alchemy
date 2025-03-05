import { forwardRef, ReactNode } from "react";

export const H1 = forwardRef<
  HTMLHeadingElement,
  {
    children: ReactNode;
    className?: string;
  } & React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <h1
    ref={ref}
    className={`text-5xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl font-pop ${className}`}
    {...props}
  >
    {children}
  </h1>
));
H1.displayName = "H1";

export const H2 = forwardRef<
  HTMLHeadingElement,
  {
    children: ReactNode;
    className?: string;
  } & React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <h2
    ref={ref}
    className={`text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-pop ${className}`}
    {...props}
  >
    {children}
  </h2>
));
H2.displayName = "H2";

export const H3 = forwardRef<
  HTMLHeadingElement,
  {
    children: ReactNode;
    className?: string;
  } & React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-pop ${className}`}
    {...props}
  >
    {children}
  </h3>
));

H3.displayName = "H3";

export const H4 = forwardRef<
  HTMLHeadingElement,
  {
    children: ReactNode;
    className?: string;
  } & React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <h4
    ref={ref}
    className={`text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-pop ${className}`}
    {...props}
  >
    {children}
  </h4>
));
H4.displayName = "H4";

export const H5 = forwardRef<
  HTMLHeadingElement,
  {
    children: ReactNode;
    className?: string;
  } & React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <h5
    ref={ref}
    className={`text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-pop ${className}`}
    {...props}
  >
    {children}
  </h5>
));
H5.displayName = "H5";

export const H6 = forwardRef<
  HTMLHeadingElement,
  {
    children: ReactNode;
    className?: string;
  } & React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <h6
    ref={ref}
    className={`text-md sm:text-md md:text-lg lg:text-lg xl:text-xl font-pop   ${className}`}
    {...props}
  >
    {children}
  </h6>
));
H6.displayName = "H6";

export const P = forwardRef<
  HTMLParagraphElement,
  {
    children: ReactNode;
    className?: string;
  } & React.HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => (
  <p
    ref={ref}
    className={`font-pop tracking-wide text-sm md:text-md xl:text-lg md:leading-6 ${className}`}
    {...props}
  >
    {children}
  </p>
));
P.displayName = "P";
