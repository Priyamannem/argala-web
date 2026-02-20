import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { getComponentContent } from '@/lang';
import heroTemple1 from '@/assets/hero-temple-1.jpg';
import heroTemple2 from '@/assets/hero-temple-2.jpg';
import heroTemple3 from '@/assets/hero-temple-3.jpg';
import goddessStatue from '@/assets/goddess-statue.jpg';
import galleryBg from '@/assets/gallery.jpeg';

const images = [
    { url: heroTemple1, title: 'Temple Front View' },
    { url: heroTemple2, title: 'Temple Arch' },
    { url: heroTemple3, title: 'Evening View' },
    { url: goddessStatue, title: 'Divine Statue' },
    { url: galleryBg, title: 'Temple Site' },
];

const GallerySection = () => {
    const { language } = useLanguage();
    const [selected, setSelected] = useState<number | null>(null);
    const content = getComponentContent(language).GallerySection;

    const localizedImages = images.map((img, i) => ({
        ...img,
        alt: content.img_alts[i] || img.title
    }));

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selected !== null) {
            setSelected((selected + 1) % localizedImages.length);
        }
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selected !== null) {
            setSelected((selected - 1 + localizedImages.length) % localizedImages.length);
        }
    };

    return (
        <section className="py-24 px-4 bg-transparent min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-sacred text-4xl md:text-5xl text-temple-gold mb-4 drop-shadow-sm">
                        {content.title}
                    </h2>
                    <p className="font-body text-temple-cream/80 text-lg italic">
                        {content.subtitle}
                    </p>
                    <div className="sacred-divider" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {localizedImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelected(index)}
                            className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer border-2 border-temple-gold/30 hover:border-temple-gold transition-all duration-500 shadow-2xl"
                        >
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <Maximize2 className="text-temple-gold w-10 h-10 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selected !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
                    >
                        <button
                            onClick={() => setSelected(null)}
                            className="absolute top-6 right-6 text-temple-gold hover:text-white transition-colors p-2"
                        >
                            <X size={40} />
                        </button>

                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-temple-gold hover:text-white transition-colors p-2 md:p-4"
                        >
                            <ChevronLeft size={60} />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-temple-gold hover:text-white transition-colors p-2 md:p-4"
                        >
                            <ChevronRight size={60} />
                        </button>

                        <motion.div
                            layoutId={`gallery-${selected}`}
                            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={localizedImages[selected].url}
                                alt={localizedImages[selected].alt}
                                className="w-full h-full object-contain rounded-lg shadow-2xl border border-temple-gold/20"
                            />
                            <p className="mt-6 text-temple-gold font-sacred text-2xl tracking-widest text-center">
                                {localizedImages[selected].alt}
                            </p>
                            <p className="mt-2 text-temple-cream/60 font-body text-sm">
                                Image {selected + 1} of {localizedImages.length}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default GallerySection;
