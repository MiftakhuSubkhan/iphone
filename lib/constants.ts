export const WHATSAPP_NUMBER = "6285624015416";
export const SELLER_NAME = "iBypass Hub";

export function formatIDR(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount).replace('Rp', 'Rp ');
}

export function createWhatsAppProductLink(
  productName: string,
  storage: string,
  price: number,
  selectedColor?: string,
  customPhone: string = WHATSAPP_NUMBER
): string {
  const formattedPrice = formatIDR(price);
  const colorText = selectedColor ? ` warna ${selectedColor}` : "";
  const message = `Halo Admin iBypass Hub, saya tertarik pesan unit ${productName} ${storage}${colorText} seharga ${formattedPrice}. Apakah stok masih tersedia?`;
  return `https://wa.me/${customPhone}?text=${encodeURIComponent(message)}`;
}

export function createWhatsAppConsultLink(
  topic?: string,
  customPhone: string = WHATSAPP_NUMBER
): string {
  const message = topic
    ? `Halo Admin iBypass Hub, saya mau konsultasi tentang: ${topic}. Boleh minta info detail & stok ready?`
    : `Halo Admin iBypass Hub, saya mau tanya-tanya rekomendasi iPhone Bypass WiFi Only yang cocok untuk kebutuhan saya. Boleh bantu?`;
  return `https://wa.me/${customPhone}?text=${encodeURIComponent(message)}`;
}
