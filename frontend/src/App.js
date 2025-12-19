import React, { Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";

// Code splitting for better performance
const Header = lazy(() => import("./components/Header"));
const HeroSection = lazy(() => import("./components/HeroSection"));
const FeaturesSection = lazy(() => import("./components/FeaturesSection"));
const TechnologySection = lazy(() => import("./components/TechnologySection"));
const ProductShowcaseSection = lazy(() => import("./components/ProductShowcaseSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const Footer = lazy(() => import("./components/Footer"));
const FreeTrialSection = lazy(() => import("./components/FreeTrialSection"));

// Loading component
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'var(--bg-primary)'
  }}>
    <motion.div
      style={{
        width: '60px',
        height: '60px',
        border: '4px solid rgba(212, 175, 55, 0.2)',
        borderTop: '4px solid var(--gold-primary)',
        borderRadius: '50%',
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  </div>
);

// Animated page wrapper
const AnimatedPage = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const Home = () => {
  return (
    <div style={{ background: 'var(--bg-primary)' }}>
      <Suspense fallback={<div style={{ height: '80px' }} />}>
        <Header />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div style={{ height: '200px' }} />}>
        <FreeTrialSection />
      </Suspense>
      <Suspense fallback={<div style={{ height: '200px' }} />}>
        <FeaturesSection />
      </Suspense>
      <Suspense fallback={<div style={{ height: '200px' }} />}>
        <TechnologySection />
      </Suspense>
      <Suspense fallback={<div style={{ height: '200px' }} />}>
        <ProductShowcaseSection />
      </Suspense>
      <Suspense fallback={<div style={{ height: '200px' }} />}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<div style={{ height: '100px' }} />}>
        <Footer />
      </Suspense>
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

