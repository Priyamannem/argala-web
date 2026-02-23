import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { getComponentContent } from '@/lang';
import heroTemple1 from '@/assets/hero-temple-1.jpg';
import heroTemple2 from '@/assets/hero-temple-2.jpg';
import heroTemple3 from '@/assets/hero-temple-3.jpg';
import goddessStatue from '@/assets/goddess-statue.jpg';

const images = [
    { url: heroTemple1, title: 'Temple Front View' },
    { url: heroTemple2, title: 'Temple Arch' },
    { url: heroTemple3, title: 'Evening View' },
    { url: goddessStatue, title: 'Divine Statue' },
];

const GallerySection = () => {
    const { language } = useLanguage();
    const content = getComponentContent(language).StotramSection;

    const localizedImages = images.map((img, i) => ({
        ...img,
        alt: content.img_alts[i] || img.title
    }));

    return (
        <section className="py-24 px-4 bg-transparent min-h-screen flex flex-col justify-center overflow-hidden">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {localizedImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-temple-gold/30 hover:border-temple-gold transition-all duration-500 shadow-2xl"
                        >
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-125"
                            />
                            {/* Overlay with Title on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                <p className="text-temple-gold font-sacred text-xl tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {image.alt}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
