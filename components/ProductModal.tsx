"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { formatIDR, createWhatsAppProductLink } from "@/lib/constants";
import {
  X,
  CheckCircle2,
  Package,
  MessageCircle,
  Sparkles,
} from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  selectedColorName?: string;
  onClose: () => void;
}

export function ProductModal({
  product,
  selectedColorName,
  onClose,
}: ProductModalProps) {
  if (!product) return null;

  const currentColor =
    product.colors.find((c) => c.name === selectedColorName) || product.colors[0];
  const savings = product.originalPrice - product.price;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-4 sm:p-8 text-white">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-20"
          aria-label="Tutup detail"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
          <div className="md:col-span-5 flex flex-col items-center justify-center bg-slate-950/70 p-3 sm:p-4 rounded-2xl border border-slate-800">
            <div className="relative w-full h-52 sm:h-80 rounded-2xl overflow-hidden border border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-slate-950 p-2 sm:p-3 shadow-md flex items-center justify-center">
              <div className="absolute w-36 h-36 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />
              <Image
                src={
                  (product.colorImages && product.colorImages[currentColor.name]) ||
                  product.image ||
                  "/images/products/iphone-13.jpg"
                }
                alt={product.name}
                fill
                unoptimized
                className="object-contain p-2 drop-shadow-2xl"
              />
            </div>
            <div className="mt-2.5 text-center">
              <span className="text-xs text-slate-400">Varian Warna: </span>
              <span className="font-semibold text-cyan-400 text-xs">{currentColor.name}</span>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-[11px] font-semibold text-cyan-300">
                <Sparkles className="h-3 w-3" />
                <span>{product.tag || "Pilihan Terbaik"}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-2 text-white">
                {product.name}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Kondisi Fisik 98-99% Mulus Like New • 100% Original Apple
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-[11px] text-slate-400 line-through">
                  Harga Resmi: {formatIDR(product.originalPrice)}
                </div>
                <div className="text-2xl font-black text-white">
                  {formatIDR(product.price)}
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                  Hemat {formatIDR(savings)}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <div className="text-slate-400 text-[10px]">Penyimpanan</div>
                <div className="font-semibold text-white mt-0.5">{product.storage}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <div className="text-slate-400 text-[10px]">Chipset Engine</div>
                <div className="font-semibold text-white mt-0.5 truncate">{product.chipset}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <div className="text-slate-400 text-[10px]">Layar Display</div>
                <div className="font-semibold text-white mt-0.5 truncate">{product.screen}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <div className="text-slate-400 text-[10px]">Battery Health</div>
                <div className="font-semibold text-emerald-400 mt-0.5">{product.batteryHealth}</div>
              </div>
            </div>

            <div className="space-y-1.5 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>3uTools Score 100% Hijau (Part original belum pernah diganti)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Face ID & True Tone Aktif Normal</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Status Bypass Untethered (Bebas Restart & Baterai Habis)</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs">
              <div className="font-semibold text-cyan-300 flex items-center gap-1.5 mb-1">
                <Package className="h-4 w-4" />
                <span>Kelengkapan Dalam Box:</span>
              </div>
              <p className="text-slate-300 text-[11px]">
                Unit iPhone + Box OEM + Kabel Data Fast Charging + <strong className="text-emerald-400">Panduan Perawatan Bypass</strong> + <strong className="text-emerald-400">Akses Bantuan Teknisi Toko</strong>.
              </p>
            </div>

            <a
              href={createWhatsAppProductLink(
                product.name,
                product.storage,
                product.price,
                currentColor.name
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-400 shadow-xl shadow-emerald-500/25 transition-all"
            >
              <MessageCircle className="h-5 w-5 fill-white" />
              <span>Pesan Unit Ini via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
