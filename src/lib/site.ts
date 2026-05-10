export const SITE = {
  name: "Provic Technologies",
  hashtag: "@Provictech",
  // Single number for sales, orders & customer support
  whatsappSales: "2348068786708",
  whatsappSupport: "2348068786708",
  salesPhone: "+234 806 878 6708",
  supportPhone: "+234 806 878 6708",
  email: "hello@provictech.com",
  address: "Ashi, Bodija, Ibadan, Oyo State, Nigeria",
  hours: "Mon – Sat, 9:00 AM – 7:00 PM",
  mapEmbed:
    "https://www.google.com/maps?q=Ashi%20Bodija%2C%20Ibadan%2C%20Oyo%20State&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Ashi+Bodija+Ibadan+Oyo+State",
};

export const waLink = (number: string, message: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
