import Header from '@/components/Header.tsx';
import Hero from '@/components/Hero.tsx';
import About from '@/components/About.tsx';
import Rooms from '@/components/Rooms.tsx';
import Rates from '@/components/Rates.tsx';
import Restaurant from '@/components/Restaurant.tsx';
import Spa from '@/components/Spa.tsx';
import Reviews from '@/components/Reviews.tsx';
import Gallery from '@/components/Gallery.tsx';
import Contact from '@/components/Contact.tsx';
import Footer from '@/components/Footer.tsx';

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
