import { motion } from 'motion/react';
import { Code2, Rocket, Users, Award } from 'lucide-react';

export function Highlight() {
  const highlights = [
    {
      icon: Code2,
      title: '4+ Years Experience',
      description: 'Building scalable and maintainable web applications',
    },
    {
      icon: Rocket,
      title: 'Performance Focused',
      description: 'Optimizing for speed, accessibility, and user experience',
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Mentoring junior developers and leading frontend initiatives',
    },
    {
      icon: Award,
      title: 'Best Practices',
      description: 'Following industry standards and modern development patterns',
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate frontend developer with a strong focus on creating exceptional digital experiences.
            With expertise in React, TypeScript, and modern web technologies, I transform complex problems into
            elegant, user-friendly solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-fuchsia-800 rounded-lg flex items-center justify-center mb-4">
                <highlight.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{highlight.title}</h3>
              <p className="text-gray-400">{highlight.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-fuchsia-600 to-fuchsia-800 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">My Approach</h3>
          <p className="text-lg mb-6 opacity-90">
            I believe in writing clean, maintainable code that scales. My development process emphasizes
            collaboration, continuous learning, and delivering value to users. I stay current with the latest
            frontend trends and best practices, ensuring that every project benefits from cutting-edge solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="opacity-90">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="opacity-90">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}