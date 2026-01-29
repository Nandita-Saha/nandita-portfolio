import React from 'react';
import { motion } from 'motion/react';
import { Star, ChevronDown } from 'lucide-react';
import AnimatedBorderButton from './AnimatedBorderButton';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Nandita-Saha-Resume-26.pdf';
    link.download = 'Nandita-Saha-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        paddingTop: '20px',
        paddingBottom: '90px',
        height: 'auto'
      }}
    >

      {/* Content */}
      <div className="relative z-10 container h-full mt-[100px] text-center">
        {/* Badge - matching screenshot style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mx-auto items-center px-6 py-1 mb-4 md:mb-5 rounded-full transition-colors bg-black/30
  border-2 border-fuchsia-500
  shadow-[0_0_20px_rgba(244,63,94,0.3)] cursor-default">
          <Star className="w-3 h-3 inline-block mr-2" color="#facc15" fill="#facc15" />
          <span className="text-sm text-white font-medium inline-block">
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
          <span className='bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent'>Frontend Developer</span>
          <br />
          <span className='text-white'>& Creative </span>
          <span className='bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent'>Technologist</span>
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-400 mb-3 md:mb-4 max-w-3xl mx-auto leading-relaxed"
        >
          <p>
            Blending design and engineering to craft
            fast, interactive, and visually compelling digital products.
          </p>
        </motion.div>

        {/* CTA Buttons - Updated */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
        >
          <AnimatedBorderButton onClick={scrollToAbout}>
            Explore My World
          </AnimatedBorderButton>

          {/* <AnimatedBorderButton>
            Download CV
          </AnimatedBorderButton> */}

          <button
            onClick={downloadCV}
            className="group gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 bg-fuchsia-800 text-white border-1 border-white cursor-pointer"
            style={{ boxShadow: '0 10px 15px -3px rgba(249,67,222, 0.5)' }}
          >
            Download CV </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
        style={{ zIndex: 10 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}