import { UtensilsCrossed } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Restaurant() {
  return (
    <section id="restaurant" className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={siteConfig.restaurantImage}
              alt="Bayissa Hotel Restaurant"
              className="rounded-sm shadow-xl w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-gold-400 text-white p-4 rounded-sm shadow-lg hidden md:block">
              <UtensilsCrossed size={28} />
            </div>
          </div>
          <div>
            <p className="section-subtitle">Dining</p>
            <h2 className="section-title mb-6">Restaurant</h2>
            <p className="text-brown-600 text-lg leading-relaxed mb-6">
              {siteConfig.restaurantText}
            </p>
            <ul className="space-y-3">
              {['Traditional Ethiopian dishes', 'International cuisine', 'Fresh breakfast daily', 'Room service available'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-brown-600">
                  <span className="w-2 h-2 bg-gold-400 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
