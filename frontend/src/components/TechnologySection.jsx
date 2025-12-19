import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Lock, Zap, Cloud, Cpu } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/GoldTheme.css';
import '../styles/animations.css';
import '../styles/performance.css';

import { SplineScene } from './ui/spline-scene';

const TechnologySection = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [splineRef, splineVisible] = useScrollAnimation(0.1);

  const technologies = [
    {
      icon: <Server size={28} />,
      title: 'RFID Entegrasyonu',
      description: 'Akıllı RFID okuyucular ile hızlı ve doğru ürün takibi',
    },
    {
      icon: <Database size={28} />,
      title: 'Veritabanı Yönetimi',
      description: 'Güvenli ve ölçeklenebilir veri depolama altyapısı',
    },
    {
      icon: <Lock size={28} />,
      title: 'Güvenlik Katmanı',
      description: '256-bit şifreleme ve çok faktörlü kimlik doğrulama',
    },
    {
      icon: <Zap size={28} />,
      title: 'Gerçek Zamanlı Analiz',
      description: 'Anlık veri işleme ve borsa fiyat güncellemeleri',
    },
    {
      icon: <Cloud size={28} />,
      title: 'Bulut Altyapısı',
      description: 'Her yerden erişim ve otomatik yedekleme sistemi',
    },
    {
      icon: <Cpu size={28} />,
      title: 'Yapay Zeka',
      description: 'Akıllı tahminleme ve otomatik raporlama',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="technology" className="section-padding" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* Background Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(212, 175, 55, 0.03) 1px, rgba(212, 175, 55, 0.03) 40px),
            repeating-linear-gradient(-90deg, transparent, transparent 1px, rgba(212, 175, 55, 0.03) 1px, rgba(212, 175, 55, 0.03) 40px)
          `,
          pointerEvents: 'none',
        }}
      />

      <div className="luxury-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          {/* Left - 3D Spline with animation */}
          {/* Left - 3D Spline with animation */}
          <motion.div
            ref={splineRef}
            style={{ position: 'relative', height: '700px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            initial={{ opacity: 0, x: -50 }}
            animate={splineVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="gpu-accelerated"
          >
            <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', borderRadius: '24px' }}>
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-[110%] h-[110%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />

              {/* Floating Currency Elements - Asymmetric Cloud */}
              {/* 1. Gold - Top Left Large */}
              <motion.img
                src="/assets/currency/gold_coin.png"
                alt="Gold"
                style={{
                  position: 'absolute',
                  top: '15%',
                  left: '8%',
                  width: '85px',
                  height: '85px',
                  filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.4))',
                  zIndex: 10,
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
                animate={{
                  y: [0, -25, 0],
                  rotate: [0, 15, -10, 0]
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* 2. Euro - Top Right Medium */}
              <motion.img
                src="/assets/currency/euro_coin.png"
                alt="Euro"
                style={{
                  position: 'absolute',
                  top: '12%',
                  right: '12%',
                  width: '65px',
                  height: '65px',
                  filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.3))',
                  zIndex: 10,
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -8, 8, 0]
                }}
                transition={{
                  duration: 5.2,
                  delay: 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* 3. TL - Bottom Left Large */}
              <motion.img
                src="/assets/currency/tl_coin.png"
                alt="TL"
                style={{
                  position: 'absolute',
                  bottom: '20%',
                  left: '12%',
                  width: '75px',
                  height: '75px',
                  filter: 'drop-shadow(0 0 15px rgba(200, 200, 200, 0.3))',
                  zIndex: 10,
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
                animate={{
                  y: [0, -18, 0],
                  rotate: [0, 6, -6, 0]
                }}
                transition={{
                  duration: 4.8,
                  delay: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* 4. Silver - Bottom Right Medium */}
              <motion.img
                src="/assets/currency/silver_coin.png"
                alt="Silver"
                style={{
                  position: 'absolute',
                  bottom: '25%',
                  right: '8%',
                  width: '55px',
                  height: '55px',
                  filter: 'drop-shadow(0 0 15px rgba(192, 192, 192, 0.3))',
                  zIndex: 10,
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -12, 12, 0]
                }}
                transition={{
                  duration: 3.8,
                  delay: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* 5. Gold - Top Left Inner Small */}
              <motion.img
                src="/assets/currency/gold_coin.png"
                alt="Gold"
                style={{
                  position: 'absolute',
                  top: '28%',
                  left: '25%',
                  width: '45px',
                  height: '45px',
                  filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.3))',
                  zIndex: 9,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  opacity: 0.9
                }}
                animate={{
                  y: [0, -12, 0],
                  x: [0, 5, 0],
                  rotate: [0, 20, 0]
                }}
                transition={{
                  duration: 6,
                  delay: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* 6. Euro - Bottom Right Inner Small */}
              <motion.img
                src="/assets/currency/euro_coin.png"
                alt="Euro"
                style={{
                  position: 'absolute',
                  bottom: '15%',
                  right: '28%',
                  width: '40px',
                  height: '40px',
                  filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))',
                  zIndex: 9,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  opacity: 0.85
                }}
                animate={{
                  y: [0, -10, 0],
                  x: [0, -5, 0],
                  rotate: [0, -15, 0]
                }}
                transition={{
                  duration: 5.5,
                  delay: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* 7. TL - Middle Right Small */}
              <motion.img
                src="/assets/currency/tl_coin.png"
                alt="TL"
                style={{
                  position: 'absolute',
                  top: '45%',
                  right: '5%',
                  width: '50px',
                  height: '50px',
                  filter: 'drop-shadow(0 0 10px rgba(200, 200, 200, 0.2))',
                  zIndex: 9,
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
                animate={{
                  y: [0, 25, 0],
                  rotate: [0, 45, 0]
                }}
                transition={{
                  duration: 7,
                  delay: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* 8. Silver - Middle Left Small */}
              <motion.img
                src="/assets/currency/silver_coin.png"
                alt="Silver"
                style={{
                  position: 'absolute',
                  bottom: '45%',
                  left: '5%',
                  width: '42px',
                  height: '42px',
                  filter: 'drop-shadow(0 0 10px rgba(192, 192, 192, 0.2))',
                  zIndex: 9,
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, -30, 0]
                }}
                transition={{
                  duration: 6.5,
                  delay: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* 9. Gold - Bottom Center Tiny */}
              <motion.img
                src="/assets/currency/gold_coin.png"
                alt="Gold"
                style={{
                  position: 'absolute',
                  bottom: '10%',
                  left: '35%',
                  width: '30px',
                  height: '30px',
                  filter: 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.2))',
                  zIndex: 8,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  opacity: 0.8
                }}
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  delay: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* 10. TL - Top Center Tiny */}
              <motion.img
                src="/assets/currency/tl_coin.png"
                alt="TL"
                style={{
                  position: 'absolute',
                  top: '10%',
                  right: '35%',
                  width: '35px',
                  height: '35px',
                  filter: 'drop-shadow(0 0 5px rgba(200, 200, 200, 0.2))',
                  zIndex: 8,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  opacity: 0.8
                }}
                animate={{
                  y: [0, 8, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 4.5,
                  delay: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, x: 50 }}
            animate={headerVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: 'var(--bg-overlay)',
                border: '1px solid var(--border-gold)',
                borderRadius: '24px',
                marginBottom: '16px',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <span style={{ fontSize: '14px', color: 'var(--gold-primary)', fontWeight: 600 }}>TEKNOLOJİ</span>
            </motion.div>

            <h2
              style={{
                fontSize: '48px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '20px',
                letterSpacing: '-0.5px',
              }}
            >
              Gelişmiş
              <br />
              <span
                style={{
                  background: 'var(--gold-metallic)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200% auto',
                }}
                className="gradient-animation"
              >
                Teknoloji Altyapısı
              </span>
            </h2>

            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: 1.6 }}>
              En son teknolojilerle donatılmış, güvenilir ve ölçeklenebilir bir sistem
            </p>

            {/* Technology Grid with stagger animation */}
            <motion.div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '24px',
              }}
              variants={containerVariants}
              initial="hidden"
              animate={headerVisible ? 'visible' : 'hidden'}
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="glass-card gpu-accelerated"
                  variants={itemVariants}
                  style={{
                    padding: '24px',
                    cursor: 'pointer',
                  }}
                  whileHover={{
                    y: -6,
                    borderColor: 'var(--gold-primary)',
                    boxShadow: '0 10px 30px rgba(212, 175, 55, 0.2)',
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      background: 'var(--bg-overlay)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--gold-primary)',
                      marginBottom: '12px',
                    }}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>{tech.title}</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>{tech.description}</p>
                </motion.div>
              ))}
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
          section > div > div > div:first-child {
            height: 500px !important;
          }
          section > div > div > div:first-child > div > div {
            width: 500px !important;
            height: 500px !important;
          }
          h2 {
            font-size: 36px !important;
          }
          section > div > div > div:last-child > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TechnologySection;
