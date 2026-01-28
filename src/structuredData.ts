// JSON-LD Structured Data for SEO
// Add this to your React app (e.g., in App.tsx or a dedicated SEO component)

export const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nandita Saha",
    "jobTitle": "Frontend Developer and Creative Technologist",
    "description": "Passionate frontend developer specializing in React, TypeScript, and modern web technologies. Creating exceptional digital experiences with clean, scalable code.",
    "url": "https://nanditasaha.vercel.app/",
    "image": "https://nanditasaha.vercel.app/og-image.png",
    "sameAs": [
        "https://github.com/Nandita-Saha",
        "https://linkedin.com/in/nandita-saha",
        "https://youtube.com/@nanditasaha1609",
        "https://instagram.com/nandita_saha"
    ],
    "email": "sahan4648@gmail.com",
    "telephone": "+91-9876543210",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
    },
    "knowsAbout": [
        "React",
        "TypeScript",
        "JavaScript",
        "Frontend Development",
        "Web Development",
        "UI/UX Design",
        "Vite",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Responsive Design",
        "Web Performance Optimization"
    ],
    "alumniOf": {
        "@type": "Organization",
        "name": "Your University/College Name"
    },
    "worksFor": [
        {
            "@type": "Organization",
            "name": "Codeclouds Technology Solutions Pvt. Ltd.",
            "url": "https://codeclouds.com"
        }
    ]
};

// Usage in React component:
// Add this to your main App.tsx or create a dedicated SEO component

/*
import { useEffect } from 'react';
import { structuredData } from './structuredData';

function SEOStructuredData() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}

export default SEOStructuredData;
*/
