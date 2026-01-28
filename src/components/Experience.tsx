import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import experiences from '../data/experience.json';

export function Experience() {

    return (
        <section id="experience" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent leading-[1.5]">
                        My Experience
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        A timeline of my professional journey and the key roles I've played in delivering impactful digital solutions.
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-16`}
                        >
                            {/* Photo Gallery - Mobile: Top (First in DOM), Desktop: Right for odd (reversed), Left for even (normal) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-[16/10] flex justify-center items-center"
                            >
                                {exp.images.map((img, imgIndex) => (
                                    <motion.div
                                        key={imgIndex}
                                        className={`absolute rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 w-[60%] aspect-video object-cover
                            ${imgIndex === 0 ? 'z-10 -translate-x-[30%] -translate-y-[30%] rotate-[-6deg]' : 'z-20 translate-x-[30%] translate-y-[30%] rotate-[6deg]'}
                        `}
                                        animate={{
                                            y: [0, -10, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: imgIndex * 0.5
                                        }}
                                    >
                                        <ImageWithFallback src={img} alt="Award" className="w-full h-full object-cover" />
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Experience Card */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="w-full md:w-1/2"
                            >
                                <div className="p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-fuchsia-400 transition-colors">
                                                {exp.company}
                                            </h3>
                                            <p className="text-lg text-rose-400 font-medium">{exp.designation}</p>
                                        </div>
                                        <span className="inline-block self-start sm:self-center px-4 py-1.5 text-sm font-semibold text-gray-300 bg-black/40 rounded-full border border-gray-700 whitespace-nowrap">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <ul className="space-y-3">
                                        {exp.roles.map((role, i) => (
                                            <li key={i} className="flex items-start text-gray-300">
                                                <span className="mr-3 mt-1.5 min-w-[6px] h-[6px] rounded-full bg-fuchsia-500"></span>
                                                <span className="leading-relaxed">{role}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
