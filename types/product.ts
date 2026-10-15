export interface Product {
  id: string;
  name: string;
  series: 'iPhone 13' | 'iPhone 14' | 'iPhone 15';
  storage: string;
  screen: string;
  chipset: string;
  camera: string;
  price: number;
  originalPrice: number;
  colors: {
    name: string;
    hex: string;
    borderHex?: string;
  }[];
  tag?: string;
  features: string[];
  batteryHealth: string;
  rating: number;
  soldCount: number;
  image?: string;
  colorImages?: Record<string, string>;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Dasar' | 'Teknis' | 'Garansi' | 'Pengiriman';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  unit: string;
  rating: number;
  comment: string;
  useCase: string;
  date: string;
}
