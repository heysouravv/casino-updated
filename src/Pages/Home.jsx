import React, { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Hero from "../Components/Hero/Hero";
import Experience from "../Components/AboutExperience/Experience";

// Lazy load components
const Gallery = lazy(() => import("../Components/Gallery/Gallery"));
const WhatPeopleSay = lazy(() => import("../Components/Testimonials/WhatPeopleSay"));
const Entertainment = lazy(() => import("../Components/Entertainement/Entertainment"));
const Journey = lazy(() => import("../Components/Journey/Journey"));
const Packages = lazy(() => import("../Components/Packages/PackagesComponent"));
const Cta = lazy(() => import("../Components/CTA/Cta"));
const Footer = lazy(() => import("../Components/Footer/Footer"));

// Fallback component for loading state
const LoadingFallback = () => <div>Loading...</div>;

// Error fallback component
const ErrorFallback = ({ error }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
  </div>
);

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-start w-full max-w-full min-h-screen">
      <Hero />
      <div className="relative flex flex-col items-center justify-start w-full h-full max-w-full overflow-x-hidden">
        <Experience />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingFallback />}>
            <Gallery />
            <WhatPeopleSay />
            <Journey />
            <Entertainment />
            <Packages />
            <Cta />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Home;