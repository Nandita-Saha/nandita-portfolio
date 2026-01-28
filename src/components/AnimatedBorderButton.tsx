import React from 'react';
import { motion } from 'motion/react';

const AnimatedBorderButton = ({ children, onClick, className = '' }: { children: React.ReactNode, onClick?: () => void, className?: string }) => {
    return (
        <button
            onClick={onClick}
            className={`relative group px-8 py-4 rounded-full bg-black text-white font-bold text-lg overflow-hidden cursor-pointer ${className}`}
            style={{ boxShadow: '0 10px 15px -3px rgba(52, 211, 153, 0.2)' }}
        >
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <rect
                    width="100%"
                    height="100%"
                    rx="30"
                    fill="none"
                    stroke="#F94383"
                    strokeWidth="3"
                />
                <motion.rect
                    width="100%"
                    height="100%"
                    rx="30" // Approximate for rounded-full
                    fill="none"
                    stroke="#B943F9" // 2 shades darker than #F94383
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
            </svg>
            <span className="relative z-10">{children}</span>
        </button>
    );
};

export default AnimatedBorderButton;
