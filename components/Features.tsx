"use client";

import React from "react";
import {
  ShieldCheck,
  RotateCw,
  Truck,
  CreditCard,
  CheckCircle2,
} from "lucide-react";
import { AppleLogo } from "./AppleLogo";

export function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Garansi Toko Terpercaya",
      desc: "Setiap unit melewati 28 titik QC ketat (kamera, speaker, layar, baterai). Tersedia garansi toko tukar unit jika ada kendala.",
    },
    {
      icon: RotateCw,
      title: "Bantuan Teknis & Re-Bypass",
      desc: "Tidak perlu khawatir jika tidak sengaja reset atau terkunci. Tim teknisi kami siap memberikan pendampingan panduan dan layanan re-bypass kapan saja.",
    },
    {
      icon: Truck,
      title: "Pengiriman Super Aman",
      desc: "Packing berlapis bubble wrap tebal + kardus khusus anti guncangan. Dijamin unit sampai ke tangan Anda dalam kondisi mulus sempurna.",
    },
    {
      icon: CreditCard,
      title: "Bayar Aman (COD & Rekber)",
      desc: "Bisa COD (Bayar di Tempat) untuk area tertentu, atau gunakan Rekening Bersama (Rekber) via Marketplace resmi agar dana Anda 100% aman.",
    },
  ];

  return (
    <section id="keunggulan" className="py-16 sm:py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-5 sm:p-8 md:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Kenapa Belanja di <span className="text-cyan-400">iBypass Hub?</span>
            </h2>
            <p className="mt-2 text-slate-300 text-xs sm:text-base">
              Kami berkomitmen memberikan produk terbaik dengan transparansi penuh dan layanan purna jual terpercaya.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white mb-0.5 sm:mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="relative p-5 sm:p-6 rounded-3xl bg-slate-950/90 border border-slate-700/80 shadow-2xl w-full max-w-sm sm:max-w-[320px] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <AppleLogo className="h-5 w-5 text-white" />
                    <span className="text-xs font-bold text-white tracking-wide">
                      iBypass Certified
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                    QC Passed
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-300">Skor 3uTools</span>
                    <span className="font-bold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      100% Hijau
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-300">Status Bypass</span>
                    <span className="font-bold text-cyan-400">Untethered (Bebas Restart)</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-300">Dukungan Teknis</span>
                    <span className="font-bold text-slate-200">Lifetime Support</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-center text-slate-400">
                  Unit siap pakai langsung konek WiFi tanpa setting ribet
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
