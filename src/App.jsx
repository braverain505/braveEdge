import { useCallback, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ValueBar from './components/ValueBar.jsx';
import Services from './components/Services.jsx';
import Products from './components/Products.jsx';
import Process from './components/Process.jsx';
import WhyUs from './components/WhyUs.jsx';
import RoiCalculator from './components/RoiCalculator.jsx';
import Faq from './components/Faq.jsx';
import CTA from './components/CTA.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import BackToTop from './components/BackToTop.jsx';

export default function App() {
  /**
   * Draft text handed from the ROI calculator to the contact form.
   * `at` is a timestamp so repeat clicks are treated as new drafts.
   */
  const [draft, setDraft] = useState(null);

  const handleSendEstimate = useCallback((text) => {
    setDraft({ text, at: Date.now() });
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <ValueBar />
        <Services />
        <Products />
        <Process />
        <WhyUs />
        <RoiCalculator onSendEstimate={handleSendEstimate} />
        <Faq />
        <CTA />
        <Contact draft={draft} />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
