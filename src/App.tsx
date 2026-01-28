import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Highlight } from './components/Highlight';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { ContactMe } from './components/ContactMe';
import { Footer } from './components/Footer';
import { Layout } from './components/Layout';

export default function App() {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <Highlight />
      <Experience />
      <Projects />
      <TechStack />
      <ContactMe />
      <Footer />
    </Layout>
  );
}