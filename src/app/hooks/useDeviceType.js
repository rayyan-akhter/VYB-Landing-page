import { useState, useEffect } from "react";

export function useDeviceType(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  console.log(isMobile, "isMobileisMobile", breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile ? "mobile" : "desktop";
}
