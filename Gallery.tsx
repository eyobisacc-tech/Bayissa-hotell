import { siteConfig } from '@/config/site';

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="section-subtitle">Photo Gallery</p>
          <h2 className="section-title">Gallery</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {siteConfig.gallery.map((image, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-sm shadow-sm cursor-pointer group ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={image}
                alt={`Bayissa Hotel gallery ${i + 1}`}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                  i === 0 ? 'h-full min-h-[300px] md:min-h-[400px]' : 'h-40 md:h-56'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
