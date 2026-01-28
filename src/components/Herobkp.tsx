import { motion } from 'motion/react';
import { Star, ChevronDown } from 'lucide-react';

export function Herobkp() {
    const scrollToAbout = () => {
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="hero"
            className="relative flex items-center justify-center overflow-hidden"
            style={{
                backgroundColor: '#000000',
                color: '#ffffff',
                paddingTop: '20px',
                paddingBottom: '90px',
                height: 'auto'
            }}
        >
            {/* Grid Overlay - matching screenshot's grid pattern */}
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

            {/* Subtle gradient overlay */}
            <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))' }}
            />

            {/* Content */}
            <div className="relative z-10 container h-full mt-[100px] text-center">
                {/* Badge - matching screenshot style */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block mx-auto items-center px-6 py-1 mb-4 md:mb-5 rounded-full transition-colors"
                    style={{

                        backgroundColor: 'rgba(0,0,0,0.3)',
                        border: '2px solid #10b981',
                        boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)'
                    }}
                >
                    <Star className="w-3 h-3 inline-block mr-2" color="#facc15" fill="#facc15" />
                    <span className="text-sm font-medium inline-block" style={{ color: '#ffffff' }}>
                        Welcome to my World
                    </span>
                </motion.div>

                {/* Main Headline - matching screenshot's exact style */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold mb-3 md:mb-4 tracking-tight leading-none"
                >
                    <span style={{ color: '#34d399' }}>Frontend Developer</span>
                    <br />
                    <span style={{ color: '#ffffff' }}>& Creative </span>
                    <span style={{ color: '#34d399' }}>Technologist</span>
                </motion.h1>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-xl md:text-2xl text-gray-400 mb-3 md:mb-4 max-w-xl mx-auto leading-relaxed"
                >
                    <p>
                        Blending design and engineering to craft
                        fast, interactive, and visually compelling digital products.
                    </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mx-auto"
                >
                    <button
                        onClick={scrollToAbout}
                        className="group gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
                        style={{
                            backgroundColor: '#34d399',
                            color: '#000000',
                            boxShadow: '0 10px 15px -3px rgba(52, 211, 153, 0.5)'
                        }}
                    >
                        Get Started </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ChevronDown className="w-6 h-6" />
            </motion.div>
        </section>
    );
}