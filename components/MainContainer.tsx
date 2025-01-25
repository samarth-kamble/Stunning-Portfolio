"use client";

import setSplitText from "@/utils/spiltText";
import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            {/* <Landing>{!isDesktopView && children}</Landing> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
