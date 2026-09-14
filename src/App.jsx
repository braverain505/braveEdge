import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ValueBar from './components/ValueBar.jsx';
import Services from './components/Services.jsx';
import Products from './components/Products.jsx';
import Process from './components/Process.jsx';
import WhyUs from './components/WhyUs.jsx';
import CTA from './components/CTA.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import BackToTop from './components/BackToTop.jsx';

export default function App() {
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
        <CTA />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
