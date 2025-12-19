import React from 'react';
import { motion } from 'framer-motion';
import { Radio, FileText, Shield, BarChart3, Clock, Lock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/GoldTheme.css';
import '../styles/animations.css';
import '../styles/performance.css';

const FeaturesSection = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);

  const features = [
    {
      icon: <Radio size={32} />,
      title: 'RFID Teknolojisi',
      description: 'Akıllı RFID takip sistemi ile altın ürünlerinizi anında tanımlayın, stok kontrolünü otomatikleştirin ve insan hatasını minimize edin.',
      image: '/assets/masterpieces/zebra_terminal.png',
    },
    {
      icon: <FileText size={32} />,
      title: 'Finansal Kontrol',
      description: 'Gerçek zamanlı defter kayıtları, günlük raporlar ve detaylı finansal analiz araçları ile işletmenizin tam kontrolünü elinize alın.',
      image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg',
    },
    {
      icon: <Shield size={32} />,
      title: 'Güvenlik Sistemi',
      description: 'Güvenli kullanıcı oturumları, şifreli işlem geçmişi ve çok katmanlı güvenlik protokolleri ile verilerinizi koruyun.',
      image: 'https://images.unsplash.com/photo-1659200501439-f090553a4fc2',
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Borsa Analizi',
      description: 'Canlı borsa verileri, trend analizleri ve otomatik fiyat güncellemeleri ile piyasanın nabzını tutun.',
      image: 'https://images.unsplash.com/photo-1614562183717-a01aa7a16723',
    },
    {
      icon: <Clock size={32} />,
      title: 'Gerçek Zamanlı Takip',
      description: 'Anlık stok durumu, hareketler ve işlemleri 7/24 takip edin. Her an her yerden erişim imkanı.',
      image: 'https://images.unsplash.com/photo-1628903920207-836a62ac9f6a',
    },
    {
      icon: <Lock size={32} />,
      title: 'Veri Güvenliği',
      description: 'Bankacılık standartlarında şifreleme, yedekleme sistemleri ve güvenli bulut altyapısı.',
      image: 'https://images.pexels.com/photos/7723554/pexels-photo-7723554.jpeg',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.15,
      rotate: 2,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="features" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="luxury-container">
        {/* Section Header with animation */}
        <motion.div
          ref={headerRef}
          style={{ textAlign: 'center', marginBottom: '80px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
            animate={headerVisible ? { y: [0, -5, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span style={{ fontSize: '14px', color: 'var(--gold-primary)', fontWeight: 600 }}>ÖZELLİKLER</span>
          </motion.div>
          <motion.h2
            style={{
              fontSize: '48px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '20px',
              letterSpacing: '-0.5px',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Profesyonel Araçlar,
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
              Üstün Performans
            </motion.span>
          </motion.h2>
          <motion.p
            style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}
            initial={{ opacity: 0 }}
            animate={headerVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Altın ticaretinizi bir üst seviyeye taşıyan teknolojiler
          </motion.p>
        </motion.div>

        {/* Features Grid with stagger animation */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} cardVariants={cardVariants} imageVariants={imageVariants} />
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          h2 {
            font-size: 36px !important;
          }
          .glass-card {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

// Separate component for better performance
const FeatureCard = ({ feature, index, cardVariants, imageVariants }) => {
  const [cardRef, cardVisible] = useScrollAnimation(0.1);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      className="glass-card gpu-accelerated"
      style={{
        padding: '32px',
        cursor: 'pointer',
      }}
      whileHover={{
        y: -12,
        boxShadow: '0 20px 60px rgba(212, 175, 55, 0.3)',
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Feature Image with advanced hover effect */}
      <motion.div
        style={{
          width: '100%',
          height: '200px',
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '24px',
          position: 'relative',
        }}
        whileHover="hover"
      >
        <motion.img
          src={feature.image}
          alt={feature.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          variants={imageVariants}
          loading="lazy"
        />
        {/* Gradient Overlay with animation */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(to top, rgba(212, 175, 55, 0.3), transparent)',
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Icon with pulse animation */}
      <motion.div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '12px',
          background: 'var(--bg-overlay)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          color: 'var(--gold-primary)',
        }}
        whileHover={{
          rotate: [0, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
      >
        <motion.div
          animate={cardVisible ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
        >
          {feature.icon}
        </motion.div>
      </motion.div>

      {/* Title with reveal animation */}
      <motion.h3
        style={{
          fontSize: '24px',
          fontWeight: '700',
          color: 'var(--text-primary)',
          marginBottom: '12px',
        }}
        initial={{ opacity: 0, x: -20 }}
        animate={cardVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ delay: 0.2 }}
      >
        {feature.title}
      </motion.h3>

      {/* Description */}
      <motion.p
        style={{
          fontSize: '16px',
          lineHeight: 1.6,
          color: 'var(--text-secondary)',
          margin: 0,
        }}
        initial={{ opacity: 0 }}
        animate={cardVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3 }}
      >
        {feature.description}
      </motion.p>
    </motion.div>
  );
};

export default FeaturesSection;