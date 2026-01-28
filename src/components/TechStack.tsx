import { motion } from 'motion/react';

export function TechStack() {
  const techCategories = [
    {
      category: 'Frontend',
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Sass/SCSS',
        'Styled Components',
        'Material-UI',
        'Redux',
        'Zustand',
        'React Query',
        'Motion/Framer Motion',
        'Webpack',
        'Vite',
        'ESLint',
        'Prettier',
      ],
    },
    {
      category: 'Backend',
      technologies: [
        'Node.js',
        'Express.js',
        'REST APIs',
        'PostgreSQL',
        'MongoDB',
        'MySQL',
        'Firebase',
        'AWS (Lambda, S3, EC2)',
        'Docker',
        'CI/CD',
        'Jest',
      ],
    },
    {
      category: 'Tools & Others',
      technologies: [
        'Git',
        'GitHub',
        'GitLab',
        'Figma',
        'Adobe XD',
        'VS Code',
        'Postman',
        'Jira',
        'Vercel',
        'Netlify',
        'Linux',
        'Agile/Scrum',
        'WebSockets',
        'Microservices',
        'Responsive Design',
        'Web Accessibility (WCAG)',
        'Performance Optimization',
        'SEO',
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">Tech Stack</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to build robust, scalable applications.
          </p>
        </motion.div>

        <div className="space-y-12">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-indigo-600 rounded mr-3"></span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg text-gray-200 font-medium hover:shadow-md hover:shadow-indigo-500/20 transition-all cursor-default border border-gray-700"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I'm always exploring new technologies and staying up-to-date with the latest industry trends.
            Continuous learning is a key part of my professional development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}