import React from 'react';
import { motion } from 'framer-motion';
import { SplineScene } from './ui/spline-scene';
import { Spotlight } from './ui/spotlight';
import { SpotlightAceternity } from './ui/spotlight-aceternity';
import { Card } from './ui/card';
import '../styles/animations.css';
import '../styles/GoldTheme.css';

export function InteractiveRobotSection() {
    return (
        <section
            id="interactive-robot"
            className="section-padding"
            style={{
                background: 'var(--bg-secondary)', // Consistent light theme
                position: 'relative',
                overflow: 'hidden',
                minHeight: '600px',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <div className="luxury-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <Card
                    style={{
                        width: '100%',
                        height: '600px',
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-gold)',
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: '24px',
                        boxShadow: 'var(--shadow-xl)'
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '-20%',
                        width: '200%',
                        height: '200%',
                        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 60%)',
                        pointerEvents: 'none'
                    }} />

                    <div style={{ display: 'flex', height: '100%' }}>
                        {/* Sol içerik */}
                        <motion.div
                            style={{
                                flex: 1,
                                padding: '48px',
                                position: 'relative',
                                zIndex: 10,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.h1
                                style={{
                                    fontSize: '48px',
                                    fontWeight: 700,
                                    color: 'var(--text-primary)',
                                    marginBottom: '16px',
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <span style={{
                                    background: 'var(--gold-metallic)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    backgroundSize: '200% auto'
                                }}>İnteraktif 3D</span> Deneyim
                            </motion.h1>
                            <motion.p
                                style={{
                                    marginTop: '16px',
                                    color: 'var(--text-secondary)',
                                    maxWidth: '500px',
                                    fontSize: '18px',
                                    lineHeight: '1.6',
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                UI'nızı güzel 3D sahnelerle hayata geçirin. Dikkat çeken ve tasarımınızı
                                geliştiren sürükleyici deneyimler yaratın. Mouse ile robotu hareket ettirin!
                            </motion.p>

                            <motion.div
                                style={{ marginTop: '32px' }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                    {[
                                        { icon: '✨', text: 'Mouse Takip' },
                                        { icon: '🤖', text: '3D Robot' },
                                        { icon: '🎨', text: 'İnteraktif' }
                                    ].map((item, index) => (
                                        <div key={index} style={{
                                            padding: '8px 16px',
                                            background: 'var(--bg-overlay)',
                                            border: '1px solid var(--border-gold)',
                                            borderRadius: '8px',
                                            color: 'var(--gold-primary)',
                                            fontSize: '14px',
                                            fontWeight: 600,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        }}>
                                            <span>{item.icon}</span>
                                            {item.text}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Sağ içerik - 3D Robot */}
                        <motion.div
                            style={{ flex: 1, position: 'relative', minHeight: '400px' }}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <SplineScene
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full"
                            />
                        </motion.div>
                    </div>
                </Card>
            </div>

            <style>{`
        .loader-ring {
          width: 48px;
          height: 48px;
          border: 4px solid rgba(212, 175, 55, 0.2);
          border-top: 4px solid var(--gold-primary);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 1024px) {
          #interactive-robot .luxury-container > div > div {
            flex-direction: column !important;
            height: auto !important;
          }
          
          #interactive-robot .luxury-container > div > div > div:first-child {
            padding: 32px !important;
          }
          
          #interactive-robot h1 {
            font-size: 36px !important;
          }
        }
      `}</style>
        </section>
    );
}

export default InteractiveRobotSection;
