import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

interface ScrollOptions {
  target: string | number;
  duration?: number;
  offsetY?: number;
}

export const scrollToSection = (
  e: React.MouseEvent,
  { target, duration = 1, offsetY = 0 }: ScrollOptions
) => {
  e.preventDefault();

  gsap.to(window, {
    duration,
    scrollTo: {
      y: target,
      offsetY,
    },
    ease: "power2.out",
  });
};
