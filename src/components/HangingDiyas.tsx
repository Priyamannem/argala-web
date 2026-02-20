import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import hangDiyaImg from '@/assets/hang-diya.png';

interface HangingDiyasProps {
    isHomePage?: boolean;
    footerRef?: React.RefObject<HTMLElement | null>;
}

const HangingDiyas = ({ isHomePage = false, footerRef }: HangingDiyasProps) => {
    const { language } = useLanguage();
    const [diyaMaxHeight, setDiyaMaxHeight] = useState<string>(isHomePage ? '90vh' : '50vh');

    const content = {
        en: { left: 'Hanging Diya Left', right: 'Hanging Diya Right' },
        te: { left: 'తొడిగే దీపం ఎడమ', right: 'తొడిగే దీపం కుడి' },
        hi: { left: 'लटकता हुआ दीया बाएं', right: 'लटकता हुआ दीया दाएं' }
    }[language];

    useEffect(() => {
        const handleScroll = () => {
            const viewportHeight = window.innerHeight;
            const scrollY = window.scrollY;

            // Base percentage logic
            let basePercent = 50;
            if (isHomePage) {
                basePercent = scrollY < viewportHeight * 0.5 ? 90 : 50;
            }

            let targetHeight = (basePercent * viewportHeight) / 100;

            // Footer avoidance logic
            if (footerRef?.current) {
                const footerRect = footerRef.current.getBoundingClientRect();
                const footerTop = footerRect.top;
                const topOffset = 40;

                if (footerTop < viewportHeight) {
                    const availableHeight = Math.max(0, footerTop - topOffset);
                    targetHeight = Math.min(targetHeight, availableHeight);
                }
            }

            setDiyaMaxHeight(`${targetHeight}px`);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [isHomePage, footerRef]);

    return (
        <>
            <div className="fixed top-10 md:top-12 left-0 z-40 pointer-events-none transform -translate-x-1/4 md:-translate-x-1/3 transition-all duration-300 ease-out hidden md:block">
                <img
                    src={hangDiyaImg}
                    alt={content.left}
                    className="w-auto animate-sway opacity-90 transition-all duration-300 ease-out"
                    style={{ height: diyaMaxHeight, maxHeight: isHomePage ? '90vh' : '50vh' }}
                />
            </div>

            <div className="fixed top-10 md:top-12 right-0 z-40 pointer-events-none transform translate-x-1/4 md:translate-x-1/3 transition-all duration-300 ease-out hidden md:block">
                <img
                    src={hangDiyaImg}
                    alt={content.right}
                    className="w-auto animate-sway opacity-90 transition-all duration-300 ease-out"
                    style={{ height: diyaMaxHeight, maxHeight: isHomePage ? '90vh' : '50vh' }}
                />
            </div>
        </>
    );
};

export default HangingDiyas;
