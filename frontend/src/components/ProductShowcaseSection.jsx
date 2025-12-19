import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import '../styles/GoldTheme.css';

// Reusing the same image for the "double photo" requirement as placeholders
const ProductCard = ({ step, title, description, image, align, isSymmetrical, onSelect }) => {
    // text-align logic based on alignment
    const wrapperClass = align === 'left' ? 'text-right pr-8' : (align === 'right' ? 'text-left pl-8' : '');
    const isLeft = align === 'left';

    // For symmetrical cards (Step 3 & 4), text should align towards the center line
    // Step 3 (Left side) -> Text Align Right (towards center)
    // Step 4 (Right side) -> Text Align Left (towards center)
    const textAlign = isSymmetrical
        ? (isLeft ? 'text-right' : 'text-left')
        : (isLeft ? 'text-right' : 'text-left');

    const paddingClass = isSymmetrical
        ? (isLeft ? 'pr-8' : 'pl-8')
        : (isLeft ? 'pr-8' : 'pl-8');

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative flex flex-col ${textAlign} ${paddingClass} mb-12 last:mb-0 w-full`}
        >
            {/* Connection Node */}
            <div className={`absolute top-8 ${isLeft ? '-right-3' : '-left-3'} w-6 h-6 rounded-full border-2 border-gold-primary bg-white z-20 shadow-[0_0_15px_rgba(212,175,55,0.5)] flex items-center justify-center`}>
                <div className="w-2 h-2 rounded-full bg-gold-primary"></div>
            </div>

            {/* Step Number */}
            <span className="text-gold-primary font-bold tracking-widest text-sm mb-2 font-inter">
                ADIM 0{step}
            </span>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-inter leading-tight">
                {title}
            </h3>

            {/* Card */}
            <div className="glass-card p-2 rounded-2xl group transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl border border-white/40">
                <div className="h-48 overflow-hidden rounded-xl bg-white/50 backdrop-blur-sm p-2 relative">
                    {/* Single Image Layout */}
                    <motion.div
                        layoutId={`image-${step}`}
                        onClick={() => onSelect({ step, title, description, image })}
                        className="w-full h-full overflow-hidden rounded-lg relative cursor-zoom-in"
                    >
                        <motion.img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    </motion.div>
                </div>

                <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed font-inter">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const ProductShowcaseSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const [selectedId, setSelectedId] = React.useState(null);

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const steps = [
        {
            step: 1,
            image: "/assets/masterpieces/program-1.png",
            title: "Genel Bakış Dashboard",
            description: "Tüm finansal verilerinizi, kurları ve özet raporları tek bir ekrandan anlık olarak takip edin. Merkezi ve güçlü yönetim paneli.",
            align: 'left',
            isSymmetrical: false
        },
        {
            step: 2,
            image: "/assets/masterpieces/program-2.png",
            title: "Anlık Kur Takibi",
            description: "Kullanıcı dostu arayüz ile anlık kuru takip etme . Esnek ve hızlı altyapı .",
            align: 'right',
            isSymmetrical: false
        }
    ];

    const symmetricalSteps = [
        {
            step: 3,
            image: "/assets/masterpieces/program-3.png",
            title: "RFİD Entegrasyonu",
            description: "RFİD barkod entegrasyonu ile stoklarınız her zaman kontrol altında.",
            align: 'left'
        },
        {
            step: 4,
            image: "/assets/masterpieces/program-4.png",
            title: "Akıllı Defter entegrasyonu",
            description: "Akıllı defter ile Alacak Verecek ve Emanet gibi işlemlerini kayıt altında tutun .",
            align: 'right'
        }

    ];



    return (
        <section
            id="product-showcase"
            ref={containerRef}
            className="relative py-24 overflow-hidden bg-slate-50"
        >
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-40"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold-light rounded-full blur-[120px] opacity-30"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-gold-primary text-sm font-bold tracking-[0.3em] mb-4 uppercase">
                            Premium Özellikler
                        </h2>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
                            4 Adımda <span className="bg-clip-text text-transparent bg-[linear-gradient(135deg,#D4AF37,#F4E4C1,#D4AF37)] bg-[length:200%_auto] animate-gradient">Mükemmellik</span>
                        </h2>
                        <p className="text-gray-500 text-lg">
                            İş akışınızı optimize eden, estetik ve fonksiyonelliğin buluştuğu hibrit mimari.
                        </p>
                    </motion.div>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2  h-full w-1 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="w-full h-full bg-gradient-to-b from-gold-primary via-gold-light to-gold-primary"
                        />
                    </div>

                    {/* Steps 1 & 2: Zig Zag Lazyout */}
                    <div className="space-y-24 mb-24">
                        {/* Step 1: Left */}
                        <div className="flex items-center w-full">
                            <div className="w-1/2 pr-12">
                                <ProductCard {...steps[0]} onSelect={setSelectedId} />
                            </div>
                            <div className="w-1/2 pl-12"></div>
                        </div>

                        {/* Step 2: Right */}
                        <div className="flex items-center w-full">
                            <div className="w-1/2 pr-12"></div>
                            <div className="w-1/2 pl-12">
                                <ProductCard {...steps[1]} onSelect={setSelectedId} />
                            </div>
                        </div>
                    </div>

                    {/* Steps 3 & 4: Symmetrical Side-by-Side - Ayna Efekti */}
                    <div className="flex items-start w-full relative pt-12">
                        {/* Horizontal Connection Line for Symmetry */}
                        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-primary rounded-full z-30 shadow-[0_0_20px_rgba(212,175,55,0.8)] border-4 border-white"></div>

                        {/* Left Side (Step 3) */}
                        <div className="w-1/2 pr-12 border-r-0 border-gray-200">
                            <ProductCard
                                {...symmetricalSteps[0]}
                                isSymmetrical={true}
                                onSelect={setSelectedId}
                            />
                        </div>

                        {/* Right Side (Step 4) */}
                        <div className="w-1/2 pl-12">
                            <ProductCard
                                {...symmetricalSteps[1]}
                                isSymmetrical={true}
                                onSelect={setSelectedId}
                            />
                        </div>
                    </div>

                </div>
            </div>

            <AnimatePresence>
                {selectedId && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            layoutId={`image-${selectedId.step}`}
                            className="relative w-full max-w-5xl aspect-video bg-white rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.img
                                src={selectedId.image}
                                alt={selectedId.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                                <h3 className="text-3xl font-bold font-playfair mb-2">{selectedId.title}</h3>
                                <p className="text-gray-200 text-lg font-inter">{selectedId.description}</p>
                            </div>
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors pointer-events-auto"
                            >
                                ✕
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProductShowcaseSection;
