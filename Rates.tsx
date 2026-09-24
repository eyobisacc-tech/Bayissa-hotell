import { Check, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Rates() {
  const telLink = `tel:${siteConfig.phone.replace(/\s/g, '')}`;

  return (
    <section id="rates" className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="section-subtitle">Pricing</p>
          <h2 className="section-title">Room Rates</h2>
          <p className="text-brown-500 mt-3 text-sm">Prices per night in Ethiopian Birr (ETB)</p>
        </div>

        <div className="overflow-hidden rounded-sm shadow-lg border border-beige-200">
          <table className="w-full bg-white">
            <thead>
              <tr className="bg-brown-800 text-cream-100">
                <th className="text-left py-4 px-6 font-serif text-lg font-semibold">Room Type</th>
                <th className="text-center py-4 px-6 font-serif text-lg font-semibold">Price / Night</th>
                <th className="text-left py-4 px-6 font-serif text-lg font-semibold hidden md:table-cell">Includes</th>
                <th className="text-right py-4 px-6 font-serif text-lg font-semibold">Book</th>
              </tr>
            </thead>
            <tbody>
              {siteConfig.rates.map((rate, i) => (
                <tr
                  key={rate.roomType}
                  className={i % 2 === 0 ? 'bg-cream-50' : 'bg-white'}
                >
                  <td className="py-4 px-6 font-medium text-brown-800">{rate.roomType}</td>
                  <td className="py-4 px-6 text-center">
                    <span className="font-serif text-xl text-gold-500 font-bold">{rate.pricePerNight.toLocaleString()}</span>
                    <span className="text-xs text-brown-400 ml-1">ETB</span>
                  </td>
                  <td className="py-4 px-6 text-sm text-brown-500 hidden md:table-cell">
                    <span className="flex items-center gap-1.5">
                      <Check size={14} className="text-gold-400" /> {rate.includes}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <a href={telLink} className="inline-flex items-center justify-center w-9 h-9 bg-gold-400 text-white rounded-sm hover:bg-gold-500 transition-colors" aria-label="Call to book">
                      <Phone size={15} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-sm text-brown-400 mt-6">
          All rates include free Wi-Fi and complimentary parking. Prices may vary during holidays.
        </p>
      </div>
    </section>
  );
}
