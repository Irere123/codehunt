import { useCallback, useEffect, useState } from "react";

export function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.screenY > threshold);
  }, [scrolled]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  //   also check on first load
  useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
}
