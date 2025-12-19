import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';
import AnimatedCounter from './AnimatedCounter';
import MagneticButton from './MagneticButton';
import '../styles/GoldTheme.css';
import '../styles/animations.css';
import '../styles/performance.css';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [parallaxRef, parallaxOffset] = useParallax(0.3);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      ref={parallaxRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 100%)',
        padding: '120px 7.6923% 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decorative Elements with parallax */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
        animate={{
          y: parallaxOffset * 0.5,
          scale: [1, 1.1, 1],
        }}
        transition={{
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
        animate={{
          y: parallaxOffset * -0.3,
          scale: [1, 1.15, 1],
        }}
        transition={{
          scale: {
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      />

      <div className="luxury-container" style={{ width: '100%', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          {/* Left Content with Framer Motion animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'var(--bg-overlay)',
                border: '1px solid var(--border-gold)',
                borderRadius: '24px',
                marginBottom: '24px',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Zap size={16} color="var(--gold-primary)" />
              </motion.div>
              <span style={{ fontSize: '14px', color: 'var(--gold-primary)', fontWeight: 600 }}>Profesyonel Altın - Döviz Ticaret Sistemi</span>
            </motion.div>

            {/* Main Headline with gradient animation */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: '56px',
                fontWeight: 700,
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                marginBottom: '24px',
                letterSpacing: '-1px',
              }}
            >
              Altın- Döviz Ticaretinizde
              <br />
              <motion.span
                style={{
                  background: 'var(--gold-metallic)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200% auto',
                }}
                className="gradient-animation"
              >
                Yeni Dönem
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: '20px',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                marginBottom: '40px',
                maxWidth: '540px',
              }}
            >
              RFID teknolojisi, gerçek zamanlı borsa analizi ve güvenli finansal yönetimle altın ticaretinizi profesyonel seviyeye taşıyın.
            </motion.p>

            {/* CTA Buttons with magnetic effect */}
            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <MagneticButton className="btn-gold-primary" onClick={scrollToContact} strength={0.4}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Profesyonel Erişim
                  <ArrowRight size={20} />
                </span>
              </MagneticButton>
              <MagneticButton className="btn-gold-secondary" strength={0.3}>
                Özellikleri İncele
              </MagneticButton>
            </motion.div>

            {/* Stats with animated counters */}
            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '40px', marginTop: '60px' }}>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
                <div style={{ fontSize: '36px', fontWeight: 700, color: 'var(--gold-primary)', marginBottom: '8px' }}>
                  <AnimatedCounter end={99.9} duration={2500} suffix="%" prefix="" />
                </div>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Doğruluk Oranı</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
                <div style={{ fontSize: '36px', fontWeight: 700, color: 'var(--gold-primary)', marginBottom: '8px' }}>24/7</div>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Teknik Destek</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
                <div style={{ fontSize: '36px', fontWeight: 700, color: 'var(--gold-primary)', marginBottom: '8px' }}>
                  <AnimatedCounter end={100} duration={2000} suffix="%" />
                </div>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Güvenli</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Dashboard Image with 3D effects */}
          <motion.div
            style={{ position: 'relative' }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="perspective-image gpu-accelerated"
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '12px',
                boxShadow: 'var(--shadow-xl)',
              }}
              whileHover={{
                rotateY: -2,
                rotateX: 1,
                scale: 1.02,
              }}
              transition={{ type: 'spring', stiffness: 200 }}
              variants={floatingVariants}
              animate="float"
            >
              <motion.img
                src="/assets/masterpieces/hero_dashboard.png"
                alt="Gold Trading Dashboard"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  display: 'block',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
                loading="eager"
              />
            </motion.div>

            {/* Floating Cards with enhanced animations */}
            <motion.div
              className="glass-card gpu-accelerated"
              style={{
                position: 'absolute',
                top: '10%',
                right: '-10%',
                padding: '20px',
                width: '200px',
              }}
              initial={{ opacity: 0, scale: 0, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
              transition={{
                opacity: { delay: 1, duration: 0.5 },
                scale: { delay: 1, type: 'spring', stiffness: 200 },
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  <TrendingUp size={24} color="var(--gold-primary)" />
                </motion.div>
                <span style={{ fontSize: '24px', fontWeight: 700, color: 'var(--gold-primary)' }}>+45%</span>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>Verimlilik Artışı</p>
            </motion.div>

            <motion.div
              className="glass-card gpu-accelerated"
              style={{
                position: 'absolute',
                bottom: '15%',
                left: '-8%',
                padding: '20px',
                width: '180px',
              }}
              initial={{ opacity: 0, scale: 0, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
              transition={{
                opacity: { delay: 1.3, duration: 0.5 },
                scale: { delay: 1.3, type: 'spring', stiffness: 200 },
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }
              }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Shield size={24} color="var(--gold-primary)" />
                </motion.div>
                <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>Güvenli</span>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>256-bit Şifreleme</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          section > div > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          h1 {
            font-size: 42px !important;
          }
          .perspective-image {
            transform: perspective(1000px) rotateY(-4deg) rotateX(2deg) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;