import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sahan4648@gmail.com',
      href: 'mailto:sahan4648@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9876543210',
      href: 'tel:+919876543210',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/janedeveloper',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/janedeveloper',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/janedeveloper',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/janedeveloper',
    },
  ];

  return (
    <footer id="contact" className="text-white py-12 bg-black/90 backdrop-blur-sm relative z-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-10">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-3">Nandita Saha</h3>
            <p className="text-gray-400 mb-3">
              Designer and Frontend Developer passionate about creating beautiful, performant web experiences.
              Let's build something amazing together!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-fuchsia-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-3">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <contact.icon size={20} className="mt-1 flex-shrink-0 group-hover:text-indigo-400" />
                  <div>
                    <p className="text-sm text-gray-500">{contact.label}</p>
                    <p className="font-medium">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Tech Stack'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase().replace(' ', '-'));
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-6 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Nandita Saha. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}