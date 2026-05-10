import ultrabook14 from "@/assets/products/ultrabook-14.jpg";
import budsPro from "@/assets/products/buds-pro.jpg";
import mech75 from "@/assets/products/mech-75.jpg";
import power30k from "@/assets/products/power-30k.jpg";
import watchActive from "@/assets/products/watch-active.jpg";
import usbCHub from "@/assets/products/usb-c-hub.jpg";
import studio16 from "@/assets/products/studio-16.jpg";
import budsLite from "@/assets/products/buds-lite.jpg";

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  shortDescription: string;
  description: string;
  specs: { label: string; value: string }[];
  inStock: boolean;
  warranty: string;
  delivery: string;
  image: string;
  badge?: string;
};

export const CATEGORIES = [
  "Laptops",
  "Earbuds",
  "Keyboards",
  "Power Banks",
  "Smartwatches",
  "Accessories",
];

export const PRODUCTS: Product[] = [
  {
    slug: "provic-ultrabook-14",
    name: "Provic Ultrabook 14",
    category: "Laptops",
    price: 850000,
    oldPrice: 950000,
    shortDescription: "Lightweight 14\" ultrabook for developers and creators.",
    description:
      "A premium ultrabook engineered for speed, productivity and creativity. 14-inch 2.8K display, all-day battery and a backlit keyboard for long focus sessions.",
    specs: [
      { label: "Processor", value: "Intel Core i7 (12th Gen)" },
      { label: "RAM", value: "16GB DDR5" },
      { label: "Storage", value: "512GB NVMe SSD" },
      { label: "Display", value: "14\" 2.8K IPS, 120Hz" },
      { label: "Battery", value: "Up to 12 hours" },
    ],
    inStock: true,
    warranty: "12 months official warranty",
    delivery: "Nationwide delivery in 1–4 business days",
    image: ultrabook14,
    badge: "Best Seller",
  },
  {
    slug: "provic-airpods-pro",
    name: "Provic Buds Pro",
    category: "Earbuds",
    price: 65000,
    oldPrice: 85000,
    shortDescription: "ANC wireless earbuds with studio-grade audio.",
    description:
      "Active noise cancellation, transparency mode and crisp adaptive audio for music, calls and study sessions.",
    specs: [
      { label: "Driver", value: "11mm dynamic" },
      { label: "ANC", value: "Adaptive, –35dB" },
      { label: "Battery", value: "8h + 30h case" },
      { label: "Bluetooth", value: "5.3 multipoint" },
    ],
    inStock: true,
    warranty: "6 months warranty",
    delivery: "Same-day in Lagos, 1–3 days nationwide",
    image: budsPro,
  },
  {
    slug: "provic-mech-keyboard-75",
    name: "Provic Mech 75",
    category: "Keyboards",
    price: 95000,
    shortDescription: "75% hot-swappable mechanical keyboard with RGB.",
    description:
      "A premium typing experience built for developers — gasket-mount construction, PBT keycaps and per-key RGB.",
    specs: [
      { label: "Layout", value: "75% (84 keys)" },
      { label: "Switches", value: "Hot-swappable" },
      { label: "Connection", value: "USB-C / 2.4G / BT" },
      { label: "Battery", value: "4000mAh" },
    ],
    inStock: true,
    warranty: "12 months",
    delivery: "1–4 business days",
    image: mech75,
    badge: "New",
  },
  {
    slug: "provic-power-30k",
    name: "Provic Power 30K",
    category: "Power Banks",
    price: 35000,
    shortDescription: "30,000mAh power bank with 65W fast charging.",
    description:
      "A travel-grade power bank that fast-charges laptops, phones and tablets simultaneously.",
    specs: [
      { label: "Capacity", value: "30,000mAh" },
      { label: "Output", value: "65W PD + 22.5W QC" },
      { label: "Ports", value: "2x USB-C, 1x USB-A" },
    ],
    inStock: true,
    warranty: "12 months",
    delivery: "1–3 days",
    image: power30k,
  },
  {
    slug: "provic-watch-active",
    name: "Provic Watch Active",
    category: "Smartwatches",
    price: 78000,
    shortDescription: "Smartwatch with AMOLED display & health tracking.",
    description:
      "A premium smartwatch with health tracking, GPS and a 1.78\" AMOLED display tuned for clarity in sunlight.",
    specs: [
      { label: "Display", value: "1.78\" AMOLED" },
      { label: "Sensors", value: "HR, SpO2, ECG" },
      { label: "Water rating", value: "5ATM" },
      { label: "Battery", value: "Up to 10 days" },
    ],
    inStock: true,
    warranty: "12 months",
    delivery: "1–4 business days",
    image: watchActive,
  },
  {
    slug: "provic-usb-c-hub",
    name: "Provic 9-in-1 USB-C Hub",
    category: "Accessories",
    price: 42000,
    shortDescription: "Expand your laptop with HDMI, USB, SD & PD passthrough.",
    description:
      "A premium aluminum hub built for MacBooks and modern laptops — HDMI 4K, USB-A 3.0, SD/microSD and 100W passthrough.",
    specs: [
      { label: "Ports", value: "HDMI, 3x USB-A, USB-C PD, SD, TF, RJ45" },
      { label: "HDMI", value: "4K @ 60Hz" },
      { label: "Passthrough", value: "100W PD" },
    ],
    inStock: true,
    warranty: "6 months",
    delivery: "1–3 days",
    image: usbCHub,
  },
  {
    slug: "provic-studio-laptop-16",
    name: "Provic Studio 16",
    category: "Laptops",
    price: 1450000,
    shortDescription: "Creator laptop with discrete GPU and 16\" mini-LED.",
    description:
      "Built for video editors, 3D artists and ML developers. Discrete GPU, 32GB RAM and a 16\" mini-LED display.",
    specs: [
      { label: "Processor", value: "Intel Core i9 (13th Gen)" },
      { label: "GPU", value: "RTX 4070 8GB" },
      { label: "RAM", value: "32GB DDR5" },
      { label: "Storage", value: "1TB NVMe SSD" },
      { label: "Display", value: "16\" Mini-LED, 165Hz" },
    ],
    inStock: true,
    warranty: "24 months",
    delivery: "2–5 business days",
    image: studio16,
    badge: "Pro",
  },
  {
    slug: "provic-buds-lite",
    name: "Provic Buds Lite",
    category: "Earbuds",
    price: 28000,
    shortDescription: "Affordable wireless earbuds with crisp sound.",
    description:
      "Daily-driver earbuds for students and commuters — long battery, comfortable fit and clear calls.",
    specs: [
      { label: "Battery", value: "6h + 24h case" },
      { label: "Bluetooth", value: "5.3" },
    ],
    inStock: true,
    warranty: "6 months",
    delivery: "1–3 days",
    image: budsLite,
  },
];

export const formatNaira = (n: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(n);
