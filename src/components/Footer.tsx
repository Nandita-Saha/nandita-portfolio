import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, Twitter, Instagram, Youtube } from 'lucide-react';
import contactData from '../data/contact.json';

const iconMap: { [key: string]: any } = {
  Mail, Phone, Linkedin, Github, Twitter, Instagram, Youtube
};

export function Footer() {
  const contactInfo = contactData.contactInfo.map(item => ({
    ...item,
    icon: iconMap[item.icon]
  }));

  const socialLinks = contactData.socialLinks.map(item => ({
    ...item,
    icon: iconMap[item.icon]
  }));

  return (
    <footer id="contact" className="text-white py-12 bg-black/90 backdrop-blur-sm relative z-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
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