import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Landmark, Heart, Users, Receipt, Sparkles, Star, ArrowRight } from 'lucide-react';
import HangingDiyas from '@/components/HangingDiyas';
import galleryBg from '@/assets/gallery.jpeg';
import templeConstruction from '@/assets/temple-construction.jpg';
import goddessStatue from '@/assets/goddess-statue.jpg';
import heroTemple2 from '@/assets/hero-temple-2.jpg';

import { getComponentContent } from '@/lang';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as const },
    }),
};

const About = () => {
    const { language } = useLanguage();
    const footerRef = useRef<HTMLDivElement>(null);
    const content = getComponentContent(language).AboutPage;

    return (
        <div className="min-h-screen">
            <Navbar />
            <HangingDiyas isHomePage={false} footerRef={footerRef} />

            <div
                className="relative pt-[calc(48px+3rem)] md:pt-[calc(56px+4rem)] bg-cover bg-center bg-no-repeat bg-fixed bg-temple-stone min-h-screen"
                style={{ backgroundImage: `url(${galleryBg})` }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/85" />

                <div className="relative z-10">
                    {/* Page Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center py-12 md:py-16"
                    >
                        <span className="text-4xl text-temple-gold block mb-4">ॐ</span>
                        <h1 className="font-sacred text-3xl md:text-5xl text-temple-gold mb-4 tracking-wider">
                            {content.header_title}
                        </h1>
                        <div className="sacred-divider">
                            <span className="text-temple-gold text-sm">✦</span>
                        </div>
                        <p className="font-body text-temple-cream/80 mt-4 italic text-lg max-w-2xl mx-auto px-4">
                            {content.header_subtitle}
                        </p>
                    </motion.div>

                    {/* Section 1: About the Kshetram */}
                    <div className="max-w-6xl mx-auto px-4 pb-16">
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <motion.div
                                custom={0}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <p className="font-body text-temple-cream/90 text-base md:text-lg leading-relaxed">
                                    <span className="font-sacred text-temple-gold text-xl">{content.temple_name}</span> {content.kshetram_para1}
                                </p>
                                <p className="font-body text-temple-cream/80 text-base leading-relaxed">
                                    {content.kshetram_para2}
                                </p>
                                <ul className="space-y-3">
                                    {content.kshetram_points.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            custom={i + 1}
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            className="flex items-start gap-3"
                                        >
                                            <Star className="w-4 h-4 text-temple-gold mt-1 flex-shrink-0" />
                                            <span className="font-body text-temple-cream/80 text-sm md:text-base">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                            <motion.div
                                custom={2}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="golden-border rounded-lg overflow-hidden shadow-2xl">
                                    <img
                                        src={goddessStatue}
                                        alt={content.img_alt_goddess}
                                        className="w-full h-[350px] md:h-[400px] object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-temple-gold/30 rounded-lg -z-10" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Sacred Quote Banner */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="relative py-12 md:py-16 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-temple-maroon/40 backdrop-blur-sm" />
                        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-4">
                            <Sparkles className="w-8 h-8 text-temple-gold mx-auto mb-2 animate-pulse" />
                            <p className="font-body text-temple-cream/90 text-base md:text-lg leading-relaxed italic">
                                {content.seat_of_shakti}
                            </p>
                        </div>
                    </motion.div>

                    {/* Section 2: Divine Beginning */}
                    <div className="max-w-6xl mx-auto px-4 py-16">
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <motion.div
                                custom={0}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="relative order-2 md:order-1"
                            >
                                <div className="golden-border rounded-lg overflow-hidden shadow-2xl">
                                    <img
                                        src={templeConstruction}
                                        alt={content.img_alt_construction}
                                        className="w-full h-[350px] md:h-[400px] object-cover"
                                    />
                                </div>
                                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-temple-gold/30 rounded-lg -z-10" />
                            </motion.div>
                            <motion.div
                                custom={1}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-6 order-1 md:order-2"
                            >
                                <h2 className="font-sacred text-2xl md:text-3xl text-temple-gold tracking-wide">
                                    {content.beginning_title}
                                </h2>
                                <p className="font-body text-temple-cream/90 text-base leading-relaxed">
                                    {content.beginning_para1}
                                </p>
                                <p className="font-body text-temple-cream/80 text-base leading-relaxed">
                                    {content.beginning_para2}
                                </p>
                                <p className="font-body text-temple-cream/80 text-base leading-relaxed italic">
                                    {content.beginning_para3}
                                </p>

                                <div className="bg-temple-maroon/30 border-l-4 border-temple-gold p-5 rounded-r-lg space-y-3">
                                    {content.beginning_points.map((item, i) => (
                                        <p key={i} className="font-body text-temple-cream/90 text-sm md:text-base flex items-start gap-2">
                                            <span className="text-temple-gold">✦</span> {item}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Section 3: Become a Founder-Devotee */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative py-16 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-temple-maroon/50 to-black/60 backdrop-blur-sm" />
                        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
                            <h2 className="font-sacred text-2xl md:text-3xl text-temple-gold tracking-wide">
                                {content.founder_title}
                            </h2>
                            <p className="font-body text-temple-cream/90 text-base md:text-lg leading-relaxed">
                                {content.founder_para1}
                            </p>
                            <p className="font-body text-temple-cream/80 text-base leading-relaxed">
                                {content.founder_para2}
                            </p>
                            <div className="pt-4 space-y-2">
                                <p className="font-sacred text-temple-gold text-lg tracking-wide">
                                    {content.founder_quote1}
                                </p>
                                <p className="font-body text-temple-cream/70 italic">
                                    {content.founder_quote2}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Section 4: Ways to Contribute */}
                    <div className="max-w-6xl mx-auto px-4 py-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-sacred text-2xl md:text-3xl text-temple-gold text-center mb-12 tracking-wide"
                        >
                            {content.ways_title}
                        </motion.h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <motion.div
                                custom={0}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="golden-border rounded-lg p-6 bg-black/40 backdrop-blur-md space-y-4 hover:bg-black/50 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-temple-gold/20 flex items-center justify-center group-hover:bg-temple-gold/30 transition-colors">
                                    <Landmark className="w-6 h-6 text-temple-gold" />
                                </div>
                                <h3 className="font-sacred text-lg text-temple-gold">{content.way1_title}</h3>
                                <ul className="space-y-2">
                                    {content.way1_points.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm font-body text-temple-cream/80">
                                            <ArrowRight className="w-3 h-3 text-temple-gold mt-1 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div
                                custom={1}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="golden-border rounded-lg p-6 bg-black/40 backdrop-blur-md space-y-4 hover:bg-black/50 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-temple-gold/20 flex items-center justify-center group-hover:bg-temple-gold/30 transition-colors">
                                    <Heart className="w-6 h-6 text-temple-gold" />
                                </div>
                                <h3 className="font-sacred text-lg text-temple-gold">{content.way2_title}</h3>
                                <p className="font-body text-temple-cream/80 text-sm leading-relaxed">
                                    {content.way2_desc}
                                </p>
                            </motion.div>

                            {/* Card 3 */}
                            <motion.div
                                custom={2}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="golden-border rounded-lg p-6 bg-black/40 backdrop-blur-md space-y-4 hover:bg-black/50 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-temple-gold/20 flex items-center justify-center group-hover:bg-temple-gold/30 transition-colors">
                                    <Users className="w-6 h-6 text-temple-gold" />
                                </div>
                                <h3 className="font-sacred text-lg text-temple-gold">{content.way3_title}</h3>
                                <p className="font-body text-temple-cream/80 text-sm leading-relaxed">
                                    {content.way3_desc}
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Tax Benefits */}
                    <motion.div
                        custom={0}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto px-4 pb-12"
                    >
                        <div className="golden-border rounded-lg p-6 md:p-8 bg-black/40 backdrop-blur-md flex items-start gap-4">
                            <Receipt className="w-8 h-8 text-temple-gold flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-sacred text-lg text-temple-gold mb-2">{content.tax_title}</h3>
                                <p className="font-body text-temple-cream/80 text-sm md:text-base leading-relaxed">
                                    {content.tax_desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Section 5: A Temple for Generations */}
                    <div className="max-w-6xl mx-auto px-4 py-16">
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <motion.div
                                custom={0}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <h2 className="font-sacred text-2xl md:text-3xl text-temple-gold tracking-wide">
                                    {content.generations_title}
                                </h2>
                                <p className="font-body text-temple-cream/90 text-base md:text-lg leading-relaxed">
                                    {content.generations_para1}
                                </p>
                                <ul className="space-y-3">
                                    {content.generations_points.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            custom={i + 1}
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            className="flex items-start gap-3"
                                        >
                                            <Sparkles className="w-4 h-4 text-temple-saffron mt-1 flex-shrink-0" />
                                            <span className="font-body text-temple-cream/80 text-sm md:text-base">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                <p className="font-body text-temple-cream/80 text-base leading-relaxed">
                                    {content.generations_para2}
                                </p>
                            </motion.div>
                            <motion.div
                                custom={2}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="golden-border rounded-lg overflow-hidden shadow-2xl">
                                    <img
                                        src={heroTemple2}
                                        alt={content.img_alt_vision}
                                        className="w-full h-[350px] md:h-[400px] object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-temple-gold/30 rounded-lg -z-10" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Final CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative py-20 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-temple-maroon/60 to-black/70 backdrop-blur-sm" />
                        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center space-y-6">
                            <h2 className="font-sacred text-2xl md:text-4xl text-temple-gold tracking-wide">
                                {content.journey_title}
                            </h2>
                            <p className="font-body text-temple-cream/90 text-lg md:text-xl">
                                {content.journey_subtitle}
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 text-temple-gold font-sacred text-lg tracking-widest uppercase">
                                {content.journey_words.map((word, i) => (
                                    <span key={i} className="flex items-center gap-4">
                                        {word}
                                        {i < content.journey_words.length - 1 && <span className="text-temple-cream/30">•</span>}
                                    </span>
                                ))}
                            </div>
                            <p className="font-sacred text-temple-saffron text-xl md:text-2xl pt-4 italic">
                                {content.journey_quote}
                            </p>
                            <div className="pt-6">
                                <a
                                    href="/donate"
                                    className="inline-block px-10 py-3 bg-temple-gold/80 text-temple-cream font-sacred text-sm tracking-widest uppercase rounded-sm hover:bg-temple-saffron transition-all duration-300 glow-gold"
                                >
                                    {content.journey_btn}
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Footer */}
                    <div ref={footerRef}>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
