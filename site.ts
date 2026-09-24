// =====================================================================
// BAYISSA HOTEL — SITE CONFIGURATION
// The hotel owner can easily change phone, WhatsApp, rates, and
// photos by editing the values in this file only.
// =====================================================================

export const siteConfig = {
  name: 'Bayissa Hotel',
  tagline: 'Your Home in Dukem',
  location: 'Dukem, Ethiopia',
  address: 'Dukem, Oromia, Ethiopia',

  // --- Contact Info (CHANGE THESE to your real numbers) ---
  phone: '+251 911 234 567',          // ← Change to your real phone
  phoneDisplay: '+251 911 234 567',   // ← Same number, how it shows on website
  whatsapp: '251911234567',           // ← Digits only, no + or spaces (example: 2519XXXXXXXX)
  email: 'info@bayissahotel.com',

  // --- Social Media ---
  tiktok: 'https://www.tiktok.com/@bayissa.hotel',
  tiktokHandle: '@bayissa.hotel',
  facebook: '#',                      // ← Add your Facebook link later
  instagram: '#',                     // ← Add your Instagram link later

  // --- Hero Image (change URL to swap the main photo) ---
  heroImage: 'https://images.pexels.com/photos/14011664/pexels-photo-14011664.jpeg?auto=compress&cs=tinysrgb&w=1600',

  // --- About Section ---
  aboutImage: 'https://images.pexels.com/photos/19689227/pexels-photo-19689227.jpeg?auto=compress&cs=tinysrgb&w=1200',
  aboutText:
    'Bayissa Hotel is a welcoming retreat in the heart of Dukem, Ethiopia. We combine warm Ethiopian hospitality with modern comfort to make every guest feel at home. Whether you are visiting for business or leisure, our dedicated team ensures a restful and memorable stay.',

  // --- Room Types (change names, descriptions, photos, and prices here) ---
  rooms: [
    {
      name: 'Standard Room',
      description: 'A cozy, comfortable room with a queen bed, private bathroom, and all essential amenities for a restful stay.',
      image: 'https://images.pexels.com/photos/28011238/pexels-photo-28011238.jpeg?auto=compress&cs=tinysrgb&w=900',
      price: 800,
    },
    {
      name: 'Deluxe Room',
      description: 'Spacious room with a king bed, modern decor, balcony access, and complimentary breakfast.',
      image: 'https://images.pexels.com/photos/7745929/pexels-photo-7745929.jpeg?auto=compress&cs=tinysrgb&w=900',
      price: 1200,
    },
    {
      name: 'Executive Suite',
      description: 'An elegant suite with a separate living area, premium furnishings, and panoramic views of Dukem.',
      image: 'https://images.pexels.com/photos/24461266/pexels-photo-24461266.jpeg?auto=compress&cs=tinysrgb&w=900',
      price: 1800,
    },
    {
      name: 'Family Room',
      description: 'A large, comfortable room designed for families with multiple beds and extra space for everyone.',
      image: 'https://images.pexels.com/photos/6394574/pexels-photo-6394574.jpeg?auto=compress&cs=tinysrgb&w=900',
      price: 1500,
    },
  ],

  // --- Rates (prices in ETB per night; change these to update all prices) ---
  rates: [
    { roomType: 'Standard Room', pricePerNight: 800, includes: 'Free Wi-Fi, Private bathroom, TV' },
    { roomType: 'Deluxe Room', pricePerNight: 1200, includes: 'Free Wi-Fi, Breakfast, Balcony, TV' },
    { roomType: 'Executive Suite', pricePerNight: 1800, includes: 'Free Wi-Fi, Breakfast, Living area, Minibar' },
    { roomType: 'Family Room', pricePerNight: 1500, includes: 'Free Wi-Fi, Breakfast, Extra beds, TV' },
  ],

  // --- Restaurant ---
  restaurantImage: 'https://images.pexels.com/photos/6327536/pexels-photo-6327536.jpeg?auto=compress&cs=tinysrgb&w=1200',
  restaurantText:
    'Our restaurant serves a delightful mix of traditional Ethiopian cuisine and international favorites. Enjoy freshly prepared dishes in a warm, inviting atmosphere — perfect for breakfast, lunch, or dinner.',

  // --- Spa & Wellness ---
  spaImage: 'https://images.pexels.com/photos/38407790/pexels-photo-38407790.jpeg?auto=compress&cs=tinysrgb&w=1200',
  spaServices: [
    { name: 'Full Body Massage', description: 'Relaxing massage to relieve tension and stress.' },
    { name: 'Foot Massage', description: 'Soothing foot therapy for ultimate comfort.' },
    { name: 'Sauna', description: 'Traditional sauna for detoxification and relaxation.' },
    { name: 'Facial Treatment', description: 'Rejuvenating facial care for healthy, glowing skin.' },
  ],

  // --- Gallery Images (add or change photo URLs here) ---
  gallery: [
    'https://images.pexels.com/photos/14011664/pexels-photo-14011664.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/28011238/pexels-photo-28011238.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6327536/pexels-photo-6327536.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/38407790/pexels-photo-38407790.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/9119782/pexels-photo-9119782.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/7745929/pexels-photo-7745929.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/24461266/pexels-photo-24461266.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/14036253/pexels-photo-14036253.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/7627408/pexels-photo-7627408.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
};

export type SiteConfig = typeof siteConfig;
