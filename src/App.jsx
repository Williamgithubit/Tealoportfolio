import React, { Suspense } from "react";
import "./App.css";
import Routes from "./Router/Routes";
import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "react-error-boundary";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemePanel from "./components/ThemePanel";
import ScrollToTop from "./components/ScrollToTop";
import { useTranslation } from "react-i18next";

const ErrorFallback = ({ error }) => {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen items-center justify-center bg-red-50 p-4 dark:bg-red-900/10">
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-bold text-red-800 dark:text-red-200">
          {t('common.error.title')}
        </h2>
        <pre className="mb-4 rounded bg-red-100 p-4 text-red-700 dark:bg-red-900/30 dark:text-red-300">
          {error.message}
        </pre>
        <button
          onClick={() => window.location.reload()}
          className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
        >
          {t('common.error.tryAgain')}
        </button>
      </div>
    </div>
  );
};

const LoadingSpinner = () => (
  <div className="flex min-h-screen items-center justify-center bg-background-light-primary dark:bg-background-dark-primary">
    <div className="relative flex flex-col items-center">
      <div className="text-4xl font-bold tracking-wider text-brand">
        <span className="animate-fade-in-up inline-block" style={{ animationDelay: '0ms' }}>T</span>
        <span className="animate-fade-in-up inline-block" style={{ animationDelay: '150ms' }}>E</span>
        <span className="animate-fade-in-up inline-block" style={{ animationDelay: '300ms' }}>A</span>
        <span className="animate-fade-in-up inline-block" style={{ animationDelay: '450ms' }}>L</span>
        <span className="animate-fade-in-up inline-block" style={{ animationDelay: '600ms' }}>O</span>
      </div>
      <div className="mt-4 h-1 w-24 overflow-hidden rounded-full bg-background-light-secondary dark:bg-background-dark-secondary">
        <div className="h-full w-full animate-loading-bar bg-brand"></div>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider>
        <HelmetProvider>
          <div className="min-h-screen bg-background-light-primary dark:bg-background-dark-primary text-text-light-primary dark:text-text-dark-primary transition-colors duration-200">
            <ThemePanel />
            <ScrollToTop />
            <Suspense fallback={<LoadingSpinner />}>
              <AnimatePresence mode="wait">
                <Routes />
              </AnimatePresence>
            </Suspense>
          </div>
        </HelmetProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
