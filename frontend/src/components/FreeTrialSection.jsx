import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Timer, CheckCircle, Star } from 'lucide-react';
import { Spotlight } from './ui/spotlight';
import { Button } from './ui/button'; // Assuming button exists or using custom styled button
import MagneticButton from './MagneticButton';
import '../styles/GoldTheme.css';

const FreeTrialSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const benefits = [
        "Tüm Premium Özelliklere Erişim",
        "Kredi Kartı Gerekmez",
        "7/24 Teknik Destek",
        "Anlık Veri Akışı",
        "Stok & Cari Yönetimi"
    ];

    return (
        <section
            id="free-trial"
            ref={sectionRef}
            className="relative overflow-hidden py-32 bg-gradient-to-b from-white to-gray-50"
            style={{
                minHeight: '600px',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            {/* Background Effects */}
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="rgba(212, 175, 55, 0.15)"
            />

            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-primary/30 bg-gold-primary/5 backdrop-blur-sm mb-6"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Star size={16} className="text-gold-primary fill-gold-primary animate-pulse" />
                            <span className="text-gold-primary text-sm font-semibold tracking-wide">SINIRLI SÜRE İÇİN</span>
                        </motion.div>

                        <h2 className="text-5xl md:text-7xl font-bold font-playfair text-gray-900 mb-6 leading-tight">
                            1 Hafta <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-primary via-yellow-500 to-gold-primary animate-gradient bg-[length:200%_auto]">
                                Ücretsiz Dene.
                            </span>
                        </h2>

                        <p className="text-gray-600 text-xl mb-8 leading-relaxed max-w-lg">
                            Profesyonel ticaret deneyimini sıfır risk ile keşfedin.
                            Memnun kalmazsanız hiçbir ücret ödemeden iptal edin.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <MagneticButton className="btn-gold-primary px-8 py-4 text-lg group" strength={0.3}>
                                <span className="flex items-center gap-3">
                                    Hemen Başla
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </MagneticButton>

                            <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm shadow-sm">
                                <Timer className="text-gold-primary" />
                                <div>
                                    <p className="text-xs text-gray-500">Teklif Bitiş:</p>
                                    <p className="text-gray-900 font-mono font-bold tracking-widest">04:23:15</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Visual Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                        animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.9, rotate: -5 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Glow Effect behind card */}
                        <div className="absolute inset-0 bg-gold-primary/10 blur-[80px] rounded-full transform rotate-12"></div>

                        <div className="relative glass-card border border-white/60 bg-white/40 backdrop-blur-xl p-8 rounded-3xl shadow-2xl">
                            <div className="absolute top-0 right-0 p-4">
                                <div className="w-20 h-20 bg-gold-primary/10 rounded-full flex items-center justify-center border border-gold-primary/20">
                                    <span className="text-3xl font-bold text-gold-primary">7</span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Premium Paket</h3>

                            <div className="space-y-4 mb-8">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                        transition={{ delay: 0.4 + (index * 0.1) }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-gold-primary/10 flex items-center justify-center shrink-0">
                                            <CheckCircle size={14} className="text-gold-primary" />
                                        </div>
                                        <span className="text-gray-700">{benefit}</span>
                                    </motion.div>
                                ))}


                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FreeTrialSection;
