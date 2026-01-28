import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import GridDots from './GridDots';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button when page is scrolled down by 50% of the viewport height
            if (window.scrollY > window.innerHeight / 2) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="relative min-h-screen">
            {/* Fixed Background Layer */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" style={{ backgroundColor: '#000000' }}>
                {/* Grid Overlay */}
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
            `,
                        backgroundSize: '2cm 2cm'
                    }}
                />

                {/* Grid Dots */}
                <GridDots />

                {/* Subtle gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))', zIndex: 2 }}
                />
            </div>

            {/* Content Layer */}
            <div className="relative z-10">
                {children}
            </div>

            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 z-50 p-4 bg-fuchsia-800 rounded-full text-white shadow-lg border-2 border-fuchsia-600 hover:bg-fuchsia-900 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowUp size={24} />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};
