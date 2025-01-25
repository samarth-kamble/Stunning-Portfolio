import React, { Suspense } from "react";
import "./page.module.css";
import { LoadingProvider } from "@/context/LoadingProvider";
import MainContainer from "@/components/MainContainer";

const HomePage = () => {
  return (
    <LoadingProvider>
      <Suspense>
        <MainContainer>
          <Suspense></Suspense>
        </MainContainer>
      </Suspense>
    </LoadingProvider>
  );
};

export default HomePage;
