import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import heroTemple1 from '@/assets/hero-temple-1.jpg';
import heroTemple2 from '@/assets/hero-temple-2.jpg';
import heroTemple3 from '@/assets/hero-temple-3.jpg';
import goddessStatue from '@/assets/goddess-statue.jpg';
import templeConstruction from '@/assets/temple-construction.jpg';

const images = [
    { src: heroTemple1, alt: 'Temple front view' },
    { src: heroTemple2, alt: 'Sanctum area' },
    { src: heroTemple3, alt: 'Evening aarti' },
    { src: goddessStatue, alt: 'Divine statue' },
    { src: templeConstruction, alt: 'Construction progress' },
];

const GallerySection = () => {
    const { language } = useLanguage();
    const [selected, setSelected] = useState<number | null>(null);

    const content = {
        en: {
            title: 'Sacred Gallery',
            subtitle: 'Glimpses of the Divine Temple and Its Journey',
            img_alts: [
                'Temple front view',
                'Sanctum area',
                'Evening aarti',
                'Divine statue',
                'Construction progress'
            ]
        },
        te: {
            title: 'పవిత్ర గ్యాలరీ',
            subtitle: 'దివ్య ఆలయ విశేషాలు',
            img_alts: [
                'ఆలయ ముందు భాగం',
                'గర్భగుడి ప్రాంతం',
                'సాయంత్రం హారతి',
                'దివ్య విగ్రహం',
                'నిర్మాణ పురోగతి'
            ]
        },
        hi: {
            title: 'पवित्र गैलरी',
            subtitle: 'दिव्य मंदिर और उसकी यात्रा की झलकियाँ',
            img_alts: [
                'मंदिर का अग्र दृश्य',
                'गर्भगृह क्षेत्र',
                'संध్యా आरती',
                'दिव्य मूर्ति',
                'निर्माण प्रगति'
            ]
        }
    }[language];

    const localizedImages = images.map((img, i) => ({
        ...img,
        alt: content.img_alts[i] || img.alt
    }));

    return (
        <section id="gallery" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-4xl text-temple-gold block mb-4">ॐ</span>
                    <h2 className="font-sacred text-3xl md:text-4xl text-temple-gold mb-4">{content.title}</h2>
                    <div className="sacred-divider"><span className="text-temple-gold text-sm">✦</span></div>
                    <p className="font-body text-temple-cream mt-4">{content.subtitle}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {localizedImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="golden-border rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                            onClick={() => setSelected(i)}
                        >
                            <img src={img.src} alt={img.alt} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selected !== null && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 z-[100] bg-temple-stone/95 flex items-center justify-center p-4"
                    onClick={() => setSelected(null)}
                >
                    <button className="absolute top-6 right-6 text-temple-cream hover:text-temple-gold" onClick={() => setSelected(null)}>
                        <X className="w-8 h-8" />
                    </button>
                    <img src={localizedImages[selected].src} alt={localizedImages[selected].alt} className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" />
                </motion.div>
            )}
        </section>
    );
};

export default GallerySection;
