import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import DonationSection from '@/components/DonationSection';
import Footer from '@/components/Footer';
import HangingDiyas from '@/components/HangingDiyas';
import homeBg from '@/assets/home.jpeg';
import toranamImg from '@/assets/toranam.png';

const Donate = () => {
    const footerRef = useRef<HTMLDivElement>(null);
    return (
        <div className="min-h-screen">
            <Navbar />
            <HangingDiyas isHomePage={false} footerRef={footerRef} />

            {/* Donation section with background - full page */}
            <div
                className="relative bg-cover bg-center bg-no-repeat bg-fixed bg-temple-stone min-h-screen pt-[calc(48px+3.5rem+1rem)] md:pt-[calc(56px+4.5rem+1rem)]"
                style={{ backgroundImage: `url(${homeBg})` }}
            >

                {/* Black Shade Overlay - Increased darkness */}
                <div className="absolute inset-0 bg-black/80" />

                {/* Content */}
                <div className="relative z-10">
                    <DonationSection />
                    <div ref={footerRef}>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;
