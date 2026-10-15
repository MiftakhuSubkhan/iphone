import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "iBypass Hub | iPhone Bypass WiFi Only - 100% Original Apple Murah & Bergaransi",
  description:
    "Dapatkan iPhone original dengan harga terjangkau khusus varian WiFi Only. Tersedia iPhone 13, 14, 15 Pro Max. Bebas restart untethered, garansi fungsi toko, siap kirim COD & Rekber.",
  keywords: [
    "iphone bypass",
    "iphone wifi only",
    "jual iphone murah",
    "iphone 13 bypass",
    "iphone 14 pro bypass",
    "iphone 15 pro max bypass",
    "ibypass hub",
  ],
  openGraph: {
    title: "iBypass Hub | iPhone Bypass WiFi Only - 100% Original Apple",
    description:
      "Performa maksimal, kamera sinematik, gaming lancar dengan harga lebih hemat jutaan rupiah.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakarta.variable} font-sans h-full antialiased w-full max-w-full overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans w-full max-w-full overflow-x-hidden relative">
        {children}
      </body>
    </html>
  );
}
