import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import '../styles/GoldTheme.css';
import '../styles/animations.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${isScrolled ? 'var(--border-gold)' : 'var(--border-light)'}`,
        padding: '20px 7.6923%',
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
      }}
      className="gpu-accelerated"
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo with animation */}
        <motion.div
          style={{
            fontSize: '28px',
            fontWeight: 700,
            background: 'var(--gold-metallic)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            cursor: 'pointer',
            backgroundSize: '200% auto',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
          className="gradient-animation"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="/assets/masterpieces/gold-iconn.ico"
            alt="Gold Icon"
            style={{
              height: '32px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
          HASKASA
        </motion.div>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="desktop-nav">
          <NavLink onClick={() => scrollToSection('features')}>Özellikler</NavLink>
          <NavLink onClick={() => scrollToSection('technology')}>Teknoloji</NavLink>
          <NavLink onClick={() => scrollToSection('free-trial')}>Deneme Sürümü</NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>İletişim</NavLink>
          <motion.button
            className="btn-gold-primary"
            onClick={() => scrollToSection('contact')}
            style={{ padding: '12px 28px', fontSize: '16px' }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(212, 175, 55, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Hemen Başla
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--gold-primary)',
          }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMobileMenuOpen ? 'close' : 'open'}
              initial={{ rotate: 0 }}
              animate={{ rotate: 180 }}
              exit={{ rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '20px',
              marginTop: '20px',
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.98)',
              borderRadius: '12px',
              boxShadow: 'var(--shadow-lg)',
              overflow: 'hidden',
            }}
          >
            <motion.a
              onClick={() => scrollToSection('features')}
              style={{ color: 'var(--text-secondary)', fontSize: '16px', cursor: 'pointer' }}
              whileTap={{ scale: 0.95 }}
            >
              Özellikler
            </motion.a>
            <motion.a
              onClick={() => scrollToSection('technology')}
              style={{ color: 'var(--text-secondary)', fontSize: '16px', cursor: 'pointer' }}
              whileTap={{ scale: 0.95 }}
            >
              Teknoloji
            </motion.a>
            <motion.a
              onClick={() => scrollToSection('free-trial')}
              style={{ color: 'var(--text-secondary)', fontSize: '16px', cursor: 'pointer' }}
              whileTap={{ scale: 0.95 }}
            >
              Deneme Sürümü
            </motion.a>
            <motion.a
              onClick={() => scrollToSection('contact')}
              style={{ color: 'var(--text-secondary)', fontSize: '16px', cursor: 'pointer' }}
              whileTap={{ scale: 0.95 }}
            >
              İletişim
            </motion.a>
            <motion.button
              className="btn-gold-primary"
              onClick={() => scrollToSection('contact')}
              style={{ width: '100%' }}
              whileTap={{ scale: 0.95 }}
            >
              Hemen Başla
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-menu {
            display: flex !important;
          }
        }
      `}</style>
    </motion.header>
  );
};

// Animated nav link component
const NavLink = ({ onClick, children }) => {
  return (
    <motion.a
      onClick={onClick}
      style={{
        color: 'var(--text-secondary)',
        fontSize: '16px',
        fontWeight: 500,
        cursor: 'pointer',
        position: 'relative',
      }}
      whileHover={{ color: 'var(--gold-primary)' }}
      transition={{ duration: 0.2 }}
    >
      {children}
      <motion.div
        style={{
          position: 'absolute',
          bottom: -4,
          left: 0,
          right: 0,
          height: 2,
          background: 'var(--gold-primary)',
          transformOrigin: 'left',
        }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
};

export default Header;