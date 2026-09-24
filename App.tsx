import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Rooms from '@/components/Rooms';
import Rates from '@/components/Rates';
import Restaurant from '@/components/Restaurant';
import Spa from '@/components/Spa';
import Reviews from '@/components/Reviews';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Rates />
        <Restaurant />
        <Spa />
        <Reviews />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
