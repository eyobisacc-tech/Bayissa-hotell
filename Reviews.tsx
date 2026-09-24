import { useState } from 'react';
import { Star, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

// Sample reviews (owner can edit these in this file later)
const sampleReviews = [
  {
    id: '1',
    guest_name: 'Abebe Bekele',
    rating: 5,
    comment: 'Excellent service and very clean rooms. The staff made me feel at home. Highly recommended!',
    created_at: '2025-11-12',
  },
  {
    id: '2',
    guest_name: 'Sara Ahmed',
    rating: 4,
    comment: 'Great location in Dukem and the restaurant food was delicious. Will come back again.',
    created_at: '2025-12-03',
  },
  {
    id: '3',
    guest_name: 'John Smith',
    rating: 5,
    comment: 'Best hotel in Dukem! The spa treatment was wonderful and the staff very friendly.',
    created_at: '2026-01-18',
  },
];

export default function Reviews() {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');

  const avgRating =
    sampleReviews.length > 0
      ? (sampleReviews.reduce((sum, r) => sum + r.rating, 0) / sampleReviews.length).toFixed(1)
      : '0';

  const waNumber = siteConfig.whatsapp.replace(/[^0-9]/g, '');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
    const text = encodeURIComponent(
      `New Guest Review for Bayissa Hotel\n\nName: ${name.trim()}\nRating: ${stars} (${rating}/5)\n\nReview:\n${comment.trim()}`
    );

    // Opens WhatsApp with the review ready to send to the hotel
    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');

    // Clear form
    setName('');
    setRating(5);
    setComment('');
  }

  return (
    <section id="reviews" className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="section-subtitle">Testimonials</p>
          <h2 className="section-title">Guest Reviews & Ratings</h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < Math.round(Number(avgRating)) ? 'text-gold-400 fill-gold-400' : 'text-beige-300'}
                />
              ))}
            </div>
            <span className="text-brown-600 font-medium">{avgRating} out of 5</span>
            <span className="text-brown-400 text-sm">({sampleReviews.length} reviews)</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Reviews list */}
          <div className="space-y-5">
            {sampleReviews.map((review) => (
              <div key={review.id} className="bg-white p-5 rounded-sm shadow-sm border border-beige-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-400 text-white flex items-center justify-center font-serif font-bold text-lg">
                      {review.guest_name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium text-brown-800">{review.guest_name}</p>
                      <p className="text-xs text-brown-400">
                        {new Date(review.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < review.rating ? 'text-gold-400 fill-gold-400' : 'text-beige-300'}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-brown-600 text-sm leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>

          {/* Review form → sends to WhatsApp */}
          <div className="bg-white p-6 md:p-8 rounded-sm shadow-lg border border-beige-200 h-fit">
            <h3 className="font-serif text-2xl text-brown-800 font-semibold mb-2">Leave a Review</h3>
            <p className="text-brown-500 text-sm mb-6">
              Share your experience. Your review will be sent to us on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-brown-700 mb-1.5">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  maxLength={80}
                  className="w-full px-4 py-2.5 border border-beige-300 rounded-sm bg-cream-50 text-brown-800 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brown-700 mb-1.5">Your Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        size={28}
                        className={(hoverRating || rating) >= star ? 'text-gold-400 fill-gold-400' : 'text-beige-300'}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-brown-700 mb-1.5">Your Review</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-2.5 border border-beige-300 rounded-sm bg-cream-50 text-brown-800 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors resize-none"
                  placeholder="Tell us about your stay..."
                />
              </div>

              <button type="submit" className="btn-whatsapp w-full">
                <MessageCircle size={18} /> Send Review via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
