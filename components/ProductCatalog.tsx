"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { PRODUCTS } from "@/data/products";
import { formatIDR, createWhatsAppProductLink } from "@/lib/constants";
import { ProductModal } from "./ProductModal";
import {
  MessageCircle,
  Eye,
  Search,
  Sparkles,
} from "lucide-react";

export function ProductCatalog() {
  const [activeTab, setActiveTab] = useState<string>("Semua Seri");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">("default");

  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const filterTabs = [
    "Semua Seri",
    "iPhone 13 Series",
    "iPhone 14 Series",
    "iPhone 15 Series",
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesTab =
        activeTab === "Semua Seri" ||
        (activeTab === "iPhone 13 Series" && item.series === "iPhone 13") ||
        (activeTab === "iPhone 14 Series" && item.series === "iPhone 14") ||
        (activeTab === "iPhone 15 Series" && item.series === "iPhone 15");

      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.storage.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.chipset.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return 0;
    });
  }, [activeTab, searchQuery, sortBy]);

  const handleColorSelect = (productId: string, colorName: string) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: colorName,
    }));
  };

  return (
    <section id="katalog" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-[850px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-[11px] font-semibold uppercase tracking-widest text-cyan-400 mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Katalog Produk Terlengkap</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Pilih iPhone <span className="text-cyan-400">Favoritmu</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-base lg:text-lg text-slate-300">
            Semua unit 100% original Apple, kondisi mulus 98-99% like new, siap pakai!
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 sm:mb-10 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1.5 md:pb-0 w-full md:w-auto sm:justify-center">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                  activeTab === tab
                    ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30 scale-105"
                    : "bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto">
            <div className="relative flex-1 md:w-60">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Cari tipe, memori..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="py-2 px-2.5 sm:px-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-cyan-400 cursor-pointer shrink-0"
            >
              <option value="default">Urutan Standar</option>
              <option value="price-asc">Harga Termurah</option>
              <option value="price-desc">Harga Tertinggi</option>
            </select>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800">
            <p className="text-slate-400 text-sm">Tidak ada produk yang sesuai dengan pencarian Anda.</p>
            <button
              onClick={() => {
                setActiveTab("Semua Seri");
                setSearchQuery("");
              }}
              className="mt-3 text-xs text-cyan-400 underline font-medium"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const activeColorName = selectedColors[product.id] || product.colors[0].name;
              const savings = product.originalPrice - product.price;

              return (
                <div
                  key={product.id}
                  className="rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div className="relative p-4 sm:p-6 pb-3 sm:pb-4 bg-gradient-to-b from-slate-900 to-slate-950/80 flex flex-col items-center">
                    <div className="flex items-center justify-between w-full gap-2 mb-2 z-10">
                      {product.tag ? (
                        <div className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-cyan-950/90 border border-cyan-800/80 text-[10px] font-bold uppercase tracking-wider text-cyan-300 shadow-sm truncate max-w-[190px] sm:max-w-[210px]">
                          {product.tag}
                        </div>
                      ) : (
                        <div />
                      )}
                      <div className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-800/90 border border-slate-700 text-[10px] sm:text-[11px] font-extrabold text-white shadow-sm shrink-0">
                        {product.storage}
                      </div>
                    </div>

                    {(() => {
                      const displayImage =
                        (product.colorImages && product.colorImages[activeColorName]) ||
                        product.image ||
                        "/images/products/iphone-13.jpg";

                      return (
                        <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden my-1 sm:my-2 border border-slate-800/80 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950 flex items-center justify-center p-2.5 sm:p-3 shadow-inner group-hover:border-cyan-500/40 transition-all duration-300">
                          <div className="absolute w-40 h-40 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />

                          <Image
                            src={displayImage}
                            alt={product.name}
                            fill
                            unoptimized
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-contain p-2 group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                          />

                          <div className="absolute bottom-2.5 left-3 text-[10px] font-semibold text-cyan-300 bg-slate-900/90 px-2.5 py-0.5 rounded-full border border-cyan-500/30 backdrop-blur-md shadow-md">
                            {product.series} Original Apple
                          </div>
                        </div>
                      );
                    })()}

                    <div className="w-full mt-1.5 p-2.5 sm:p-3 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[10px] sm:text-[11px] font-medium text-slate-400">Pilihan Warna:</span>
                        <span className="text-[10px] sm:text-[11px] font-bold text-cyan-300 flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{activeColorName} (Aktif)</span>
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5">
                        {product.colors.map((color) => {
                          const isSelected = activeColorName === color.name;
                          return (
                            <button
                              key={color.name}
                              onClick={() => handleColorSelect(product.id, color.name)}
                              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs transition-all cursor-pointer border ${
                                isSelected
                                  ? "bg-slate-800 border-cyan-400 text-white font-semibold ring-1 ring-cyan-400/50 shadow-md scale-105"
                                  : "bg-slate-900/80 border-slate-700/80 text-slate-300 hover:text-white hover:border-slate-500"
                              }`}
                            >
                              <span
                                className="h-2.5 w-2.5 rounded-full border border-white/20 shrink-0"
                                style={{ backgroundColor: color.hex }}
                              />
                              <span className="text-[10px] sm:text-[11px]">{color.name}</span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="pt-1.5 border-t border-slate-800/60 text-[10px] text-slate-400 flex items-center justify-between gap-2">
                        <span className="text-emerald-400 font-medium shrink-0">✓ Ready Siap Kirim:</span>
                        <span className="text-slate-300 font-semibold truncate text-right">
                          {product.colors.map((c) => c.name).join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 pt-2 sm:pt-3 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {product.name}
                      </h3>

                      <div className="mt-2.5 grid grid-cols-2 gap-1.5 sm:gap-2 text-xs">
                        <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/80">
                          <div className="text-[10px] text-slate-400">Layar</div>
                          <div className="font-semibold text-slate-200 truncate mt-0.5">{product.screen}</div>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/80">
                          <div className="text-[10px] text-slate-400">Chipset</div>
                          <div className="font-semibold text-slate-200 truncate mt-0.5">{product.chipset}</div>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/80">
                          <div className="text-[10px] text-slate-400">Kamera</div>
                          <div className="font-semibold text-slate-200 truncate mt-0.5">{product.camera}</div>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/80">
                          <div className="text-[10px] text-slate-400">Kondisi Baterai</div>
                          <div className="font-semibold text-emerald-400 truncate mt-0.5">{product.batteryHealth}</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2.5 border-t border-slate-800/80">
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-[10px] sm:text-[11px] text-slate-500 line-through">
                          Resmi {formatIDR(product.originalPrice)}
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                          Hemat {formatIDR(savings)}
                        </span>
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        {formatIDR(product.price)}
                      </div>
                    </div>

                    <div className="grid grid-cols-5 gap-2 pt-1">
                      <button
                        onClick={() => setModalProduct(product)}
                        className="col-span-2 py-2.5 sm:py-3 px-2 sm:px-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-slate-700/60"
                        title="Lihat Detail Spek & Garansi"
                      >
                        <Eye className="h-4 w-4" />
                        <span>Detail</span>
                      </button>

                      <a
                        href={createWhatsAppProductLink(
                          product.name,
                          product.storage,
                          product.price,
                          activeColorName
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="col-span-3 py-2.5 sm:py-3 px-3 sm:px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-xs font-bold text-white flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] border border-emerald-400/30"
                      >
                        <MessageCircle className="h-4 w-4 fill-white" />
                        <span>Beli via WA</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {modalProduct && (
        <ProductModal
          product={modalProduct}
          selectedColorName={selectedColors[modalProduct.id]}
          onClose={() => setModalProduct(null)}
        />
      )}
    </section>
  );
}
