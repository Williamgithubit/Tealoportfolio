import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

// Lazy load components
const Home = React.lazy(() => import("../pages/Home"));
const Offline = React.lazy(() => import("../components/Offline"));

// Page transition wrapper
const PageWrapper = ({ children, title, description }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
};

// Loading component
const LoadingSpinner = () => (
  <div className="flex min-h-screen items-center justify-center bg-light dark:bg-dark">
    <div className="relative flex flex-col items-center">
      <div className="text-4xl font-bold tracking-wider text-[#fab702]">
        <span className="animate-fade-in-up inline-block" style={{ animationDelay: '0ms' }}>T</span>
        <span className="animate-fade-in-up inline-block" style={{ animationDelay: '150ms' }}>E</span>
        <span className="animate-fade-in-up inline-block" style={{ animationDelay: '300ms' }}>A</span>
        <span className="animate-fade-in-up inline-block" style={{ animationDelay: '450ms' }}>L</span>
        <span className="animate-fade-in-up inline-block" style={{ animationDelay: '600ms' }}>O</span>
      </div>
      <div className="mt-4 h-1 w-24 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <div className="h-full w-full animate-loading-bar bg-[#fab702]"></div>
      </div>
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <PageWrapper title="Portfolio | Home" description="Welcome to my portfolio showcasing my work and skills">
          <Home />
        </PageWrapper>
      </Suspense>
    ),
  },
  {
    path: "/offline",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <PageWrapper title="Portfolio | Offline" description="Offline page for the portfolio">
          <Offline />
        </PageWrapper>
      </Suspense>
    ),
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;