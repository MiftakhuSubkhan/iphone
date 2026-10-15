"use client";

import React from "react";
import { Smartphone, Video, ShieldCheck, ArrowRight } from "lucide-react";

export function HowToOrder() {
  const steps = [
    {
      num: "01",
      icon: Smartphone,
      title: "Pilih Seri & Varian",
      desc: "Pilih seri iPhone 13, 14, atau 15 favoritmu di katalog lengkap kami sesuai budget dan kapasitas memori yang kamu butuhkan.",
    },
    {
      num: "02",
      icon: Video,
      title: "Minta Video Real Unit",
      desc: "Klik tombol WhatsApp untuk terhubung dengan Admin. Kamu bisa minta video 360° fisik unit asli, cek Battery Health, dan skor 3uTools hijau.",
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: "Kirim / COD / Rekber",
      desc: "Transaksi 100% aman! Pilih opsi COD (area tertentu), pengiriman ekspedisi bergaransi bubble tebal, atau transaksi lewat Rekber Marketplace resmi.",
    },
  ];

  return (
    <section className="py-14 sm:py-16 md:py-24 relative border-t border-b border-slate-800/80 bg-slate-950/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-[11px] font-semibold uppercase tracking-widest text-slate-300 mb-3">
            <span>Alur Transaksi Transparan</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            3 Langkah Mudah <span className="text-cyan-400">Pesan Unit</span>
          </h2>
          <p className="mt-2 text-xs sm:text-base text-slate-400">
            Tanpa ribet, tanpa was-was. Buktikan kualitas unit sebelum kamu memutuskan membayar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="relative p-5 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="absolute top-4 right-5 sm:right-6 text-4xl sm:text-5xl font-black text-slate-800/40 group-hover:text-cyan-500/20 transition-colors pointer-events-none select-none">
                {step.num}
              </div>

              <div>
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-slate-600">
                  <ArrowRight className="h-5 w-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
