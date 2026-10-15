import { Product, FAQItem, Testimonial } from "@/types/product";

export const PRODUCTS: Product[] = [
  {
    id: "ip-13-basic",
    name: "iPhone 13 Basic",
    series: "iPhone 13",
    storage: "128 GB",
    screen: '6.1" Super Retina XDR OLED',
    chipset: "Apple A15 Bionic (5nm)",
    camera: "Dual 12MP (Cinematic 4K HDR)",
    price: 3510000,
    originalPrice: 10249000,
    image: "/images/iphone-13-basic-pink.png",
    colorImages: {
      "Pink": "/images/iphone-13-basic-pink.png",
      "Putih": "/images/iphone-13-basic-putih.png",
      "Midnight": "/images/iphone-13-basic-midnight.png",
    },
    colors: [
      { name: "Pink", hex: "#faddd7" },
      { name: "Putih", hex: "#f9f6ef" },
      { name: "Midnight", hex: "#1f242b" }
    ],
    tag: "Terlaris (Best Value)",
    features: ["Super Retina XDR", "Cinematic Mode", "Ceramic Shield", "Face ID Cepat"],
    batteryHealth: "88% - 95% (Original)",
    rating: 4.9,
    soldCount: 84
  },
  {
    id: "ip-13-pro",
    name: "iPhone 13 Pro",
    series: "iPhone 13",
    storage: "256 GB",
    screen: '6.1" 120Hz ProMotion XDR',
    chipset: "Apple A15 Bionic (5-core GPU)",
    camera: "Triple 12MP + LiDAR + 3x Telephoto",
    price: 4700000,
    originalPrice: 13999000,
    image: "/images/iphone-13-pro.jpeg",
    colors: [
      { name: "Silver", hex: "#e2e4e1" },
      { name: "Graphite", hex: "#4c4b49" },
      { name: "Sierra Blue", hex: "#9bb5ce" }
    ],
    tag: "Layar 120Hz Mulus",
    features: ["ProMotion 120Hz", "Macro Photography", "ProRes Video", "Stainless Steel Frame"],
    batteryHealth: "86% - 93% (Original)",
    rating: 4.9,
    soldCount: 62
  },
  {
    id: "ip-13-pro-max",
    name: "iPhone 13 Pro Max",
    series: "iPhone 13",
    storage: "256 GB",
    screen: '6.7" 120Hz Super Retina XDR',
    chipset: "Apple A15 Bionic (5-core GPU)",
    camera: "Triple 12MP + LiDAR + Sensor-shift OIS",
    price: 4900000,
    originalPrice: 15499000,
    image: "/images/iphone-13-promax.jpeg",
    colors: [
      { name: "Black", hex: "#323539" },
      { name: "Sierra Blue", hex: "#9bb5ce" },
      { name: "Silver", hex: "#e2e4e1" }
    ],
    tag: "Monster Baterai 4352mAh",
    features: ["Layar Luas 6.7 Inch", "Baterai Super Awet", "ProMotion 120Hz", "Cocok Gaming Berat"],
    batteryHealth: "87% - 94% (Original)",
    rating: 5.0,
    soldCount: 71
  },
  {
    id: "ip-14-pro-128",
    name: "iPhone 14 Pro (128GB)",
    series: "iPhone 14",
    storage: "128 GB",
    screen: '6.1" Always-On ProMotion 120Hz',
    chipset: "Apple A16 Bionic (4nm)",
    camera: "Triple 48MP Main + LiDAR + 3x Zoom",
    price: 5150000,
    originalPrice: 16499000,
    image: "/images/iphone-14-pro.jpeg",
    colors: [
      { name: "Deep Purple", hex: "#433d4f" },
      { name: "Gold", hex: "#fae7cf" },
      { name: "Silver", hex: "#f0f2f2" }
    ],
    tag: "Dynamic Island",
    features: ["Dynamic Island Interaktif", "Kamera 48MP Quad-Pixel", "Always-On Display", "Photonic Engine"],
    batteryHealth: "89% - 96% (Original)",
    rating: 4.9,
    soldCount: 53
  },
  {
    id: "ip-14-pro-256",
    name: "iPhone 14 Pro (256GB)",
    series: "iPhone 14",
    storage: "256 GB",
    screen: '6.1" Always-On ProMotion 120Hz',
    chipset: "Apple A16 Bionic (4nm)",
    camera: "Triple 48MP Main + LiDAR + 4K ProRes",
    price: 5000000,
    originalPrice: 17999000,
    image: "/images/iphone-14-promax.jpeg",
    colors: [
      { name: "Deep Purple", hex: "#433d4f" },
      { name: "Black", hex: "#262529" }
    ],
    tag: "Kapasitas Besar 256GB",
    features: ["Dynamic Island", "Penyimpanan Lega 256GB", "4K ProRes Recording", "A16 Bionic Kencang"],
    batteryHealth: "88% - 95% (Original)",
    rating: 5.0,
    soldCount: 47
  },
  {
    id: "ip-14-pro-max",
    name: "iPhone 14 Pro Max",
    series: "iPhone 14",
    storage: "256 GB",
    screen: '6.7" Dynamic Island ProMotion',
    chipset: "Apple A16 Bionic (4nm)",
    camera: "Triple 48MP Main + Action Mode + LiDAR",
    price: 5258000,
    originalPrice: 19499000,
    image: "/images/iphone-14-promax.jpeg",
    colors: [
      { name: "Deep Purple", hex: "#433d4f" },
      { name: "Gold", hex: "#fae7cf" },
      { name: "Silver", hex: "#f0f2f2" }
    ],
    tag: "Favorit Konten Kreator",
    features: ["Layar 6.7 Inch Jumbo", "Dynamic Island", "Action Mode Stabilizer", "Baterai Seharian Penuh"],
    batteryHealth: "90% - 97% (Original)",
    rating: 5.0,
    soldCount: 89
  },
  {
    id: "ip-15-basic",
    name: "iPhone 15 Basic",
    series: "iPhone 15",
    storage: "256 GB",
    screen: '6.1" Super Retina XDR OLED',
    chipset: "Apple A16 Bionic (4nm)",
    camera: "Dual 48MP (2x Optical Quality Telephoto)",
    price: 5400000,
    originalPrice: 15499000,
    image: "/images/iphone-15-basic.jpeg",
    colors: [
      { name: "Pink", hex: "#e8c8c8" },
      { name: "Black", hex: "#353839" }
    ],
    tag: "Port USB-C Praktis",
    features: ["Universal USB-C Port", "Dynamic Island Baru", "Kamera 48MP Ultra Tajam", "Back Glass Matte Halus"],
    batteryHealth: "92% - 99% (Original)",
    rating: 4.8,
    soldCount: 38
  },
  {
    id: "ip-15-pro",
    name: "iPhone 15 Pro",
    series: "iPhone 15",
    storage: "128 GB",
    screen: '6.1" ProMotion 120Hz Titanium',
    chipset: "Apple A17 Pro (3nm Hardware Ray Tracing)",
    camera: "Triple 48MP + Spatial Video + LiDAR",
    price: 5650000,
    originalPrice: 19499000,
    image: "/images/iphone-15-pro.jpeg",
    colors: [
      { name: "Grey (Natural)", hex: "#8c8780" },
      { name: "Silver (White)", hex: "#dbdedf" }
    ],
    tag: "Bodi Titanium Ringan",
    features: ["Titanium Aerospace-Grade", "Action Button Kustom", "Chipset A17 Pro Console Gaming", "Transfer USB 3 Kencang"],
    batteryHealth: "93% - 100% (Original)",
    rating: 5.0,
    soldCount: 65
  },
  {
    id: "ip-15-pro-max",
    name: "iPhone 15 Pro Max",
    series: "iPhone 15",
    storage: "256 GB",
    screen: '6.7" ProMotion 120Hz Titanium',
    chipset: "Apple A17 Pro (3nm)",
    camera: "Triple 48MP + 5x Optical Periscope Zoom",
    price: 6400000,
    originalPrice: 22999000,
    image: "/images/iphone-15-promax.jpeg",
    colors: [
      { name: "Silver (White)", hex: "#dbdedf" },
      { name: "Grey (Natural)", hex: "#8c8780" }
    ],
    tag: "Varian Tertinggi (The Ultimate)",
    features: ["5x Optical Telephoto Zoom", "Bodi Titanium Super Ringan", "Layar 6.7 Inch Tipis Bezel", "Gaming AAA Resident Evil"],
    batteryHealth: "94% - 100% (Original)",
    rating: 5.0,
    soldCount: 92
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "Dasar",
    question: "Apa itu iPhone Bypass (WiFi Only)?",
    answer: "iPhone Bypass WiFi Only adalah unit iPhone original Apple yang telah disesuaikan agar dapat digunakan tanpa jaringan SIM seluler. Anda dapat menikmati semua fitur iPhone original—seperti kamera sinematik, layar jernih, speaker stereo, game berat, App Store, dan media sosial—hanya saja koneksi internet menggunakan jaringan WiFi atau Hotspot Tethering dari HP lain/Modem MiFi."
  },
  {
    category: "Teknis",
    question: "Apakah bisa login Apple ID dan iCloud pribadi?",
    answer: "BISA! Anda dapat memasukkan Apple ID pribadi Anda di menu App Store untuk mengunduh aplikasi normal seperti WhatsApp, Instagram, TikTok, Mobile Legends, YouTube, dan Netflix, serta update aplikasi langsung dari App Store resmi tanpa masalah."
  },
  {
    category: "Teknis",
    question: "Apakah aman jika kehabisan baterai sampai mati total atau di-restart?",
    answer: "SANGAT AMAN! Semua unit di iBypass Hub berstatus 'Untethered'. Artinya unit bebas dimatikan, bebas restart normal, dan bebas kehabisan baterai tanpa takut status bypass hilang atau kembali ke layar aktivasi (Hello Screen)."
  },
  {
    category: "Teknis",
    question: "Bagaimana cara internetan saat bepergian ke luar rumah?",
    answer: "Sangat mudah dan praktis! Cukup aktifkan Personal Hotspot / Tethering dari HP Android / HP utama Anda, atau bawa modem MiFi kecil di tas/kantong. iPhone akan otomatis terhubung ke hotspot begitu Anda menyalakannya."
  },
  {
    category: "Dasar",
    question: "Apa saja pantangan utama dalam memakai iPhone bypass?",
    answer: "Ada 2 pantangan mutlak: (1) JANGAN melakukan 'Reset Pabrik / Hapus Semua Konten & Pengaturan', dan (2) JANGAN melakukan 'Pembaruan Perangkat Lunak (Update iOS)'. Kami sudah bantu mematikan fitur pembaruan otomatis di sistem sebelum unit dikirim agar tetap aman."
  },
  {
    category: "Garansi",
    question: "Bagaimana jika tidak sengaja ter-reset atau ter-update?",
    answer: "Tenang, jangan panik! iBypass Hub menyediakan Lifetime Support untuk semua pembeli kami. Jika unit Anda tidak sengaja terkunci kembali, kami siap membantu bypass ulang dengan panduan remote atau kirim kembali ke toko kami dengan biaya jasa khusus pelanggan yang sangat terjangkau."
  },
  {
    category: "Garansi",
    question: "Berapa lama garansi toko dan apa syarat klaimnya?",
    answer: "Kami memberikan Garansi Fungsi Toko selama 30 Hari penuh untuk kerusakan mesin/hardware non-human error (kamera, speaker, layar, tombol, baterai). Syarat klaim: segel garansi di unit utuh, bukan akibat jatuh/terkena air, dan bukan akibat melanggar pantangan (reset/update)."
  },
  {
    category: "Pengiriman",
    question: "Apakah bisa COD (Bayar di Tempat) atau lewat Rekber?",
    answer: "Tentu bisa! Kami melayani COD untuk area tertentu (tatap muka langsung cek fisik & 3uTools), serta transaksi aman melalui Rekening Bersama (Rekber) Marketplace resmi (Tokopedia / Shopee) sehingga dana Anda dijamin 100% aman hingga barang sampai di tangan."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-1",
    name: "Rian Pratama",
    location: "Jakarta Selatan",
    avatar: "/images/avatars/rian.jpg",
    unit: "iPhone 13 Pro (256GB)",
    rating: 5,
    useCase: "Kebutuhan Konten Video TikTok & IG Reels",
    comment: "Beli untuk live TikTok dan bikin video produk. Kualitas kameranya juara banget, 60fps mulus cinematic. Dibanding beli resmi 14 jutaan, beli bypass 4 jutaan ini hemat 10 juta! Tinggal tethering hotspot dari HP lama, beres.",
    date: "2 hari yang lalu"
  },
  {
    id: "testi-2",
    name: "Dimas Aditya",
    location: "Surabaya",
    avatar: "/images/avatars/dimas.jpg",
    unit: "iPhone 14 Pro (128GB)",
    rating: 5,
    useCase: "Gaming Berat Mobile Legends & Genshin",
    comment: "A16 Bionic emang gak ada obat. Main MLBB ultra 120Hz stabil gak pernah patah-patah. Dynamic Island aktif, bodi mulus banget 99% kayak baru. Seller ramah, minta video unit sebelum kirim langsung dikasih.",
    date: "1 minggu yang lalu"
  },
  {
    id: "testi-3",
    name: "Nadia Safitri",
    location: "Bandung",
    avatar: "/images/avatars/nadia.jpg",
    unit: "iPhone 13 Basic (128GB)",
    rating: 5,
    useCase: "Kamera & Estetika Mahasiswi",
    comment: "Warnanya pink lucu banget, beneran original Apple. Cek 3uTools semua part hijau 100%, battery health 92%. Kondisinya mulus banget, siap pakai tinggal konek WiFi. Rekomen banget buat yang mau iPhone murah tapi mewah!",
    date: "3 hari yang lalu"
  },
  {
    id: "testi-4",
    name: "Kevin Jonathan",
    location: "Tangerang",
    avatar: "/images/avatars/kevin.jpg",
    unit: "iPhone 15 Pro Max (256GB)",
    rating: 5,
    useCase: "Fotografi & Daily Entertainment",
    comment: "Awalnya ragu beli bypass, tapi pas datang packing bubble tebal banget dan unitnya bodi Titanium super enteng! Zoom 5x tajam parah. Transaksi via Rekber jadi tenang tanpa was-was.",
    date: "5 hari yang lalu"
  }
];
