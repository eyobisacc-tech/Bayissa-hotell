import { siteConfig } from '@/config/site';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="section-subtitle">About Us</p>
            <h2 className="section-title mb-6">A Warm Welcome Awaits You</h2>
            <p className="text-brown-600 text-lg leading-relaxed mb-6">
              {siteConfig.aboutText}
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="font-serif text-3xl text-gold-500 font-bold">24/7</p>
                <p className="text-sm text-brown-500 uppercase tracking-wide">Front Desk</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl text-gold-500 font-bold">4</p>
                <p className="text-sm text-brown-500 uppercase tracking-wide">Room Types</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl text-gold-500 font-bold">100%</p>
                <p className="text-sm text-brown-500 uppercase tracking-wide">Comfort</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img
                src={siteConfig.aboutImage}
                alt="Bayissa Hotel interior"
                className="rounded-sm shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-gold-400 hidden md:block" />
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gold-400 hidden md:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
