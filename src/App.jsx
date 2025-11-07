import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { AboutSection, SoCoSection, ServicesSection, BlogContactSection } from './components/Sections';

function App() {
  return (
    <div className="font-inter text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <SoCoSection />
        <ServicesSection />
        <BlogContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
