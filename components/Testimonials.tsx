"use client";

import React from "react";
import { TESTIMONIALS } from "@/data/products";
import { Star, CheckCircle2 } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimoni" className="py-16 sm:py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-[11px] font-semibold uppercase tracking-widest text-cyan-400 mb-3">
            <Star className="h-3.5 w-3.5 fill-cyan-400" />
            <span>Kisah Pembeli Nyata</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Pengalaman Belanja di <span className="text-cyan-400">iBypass Hub</span>
          </h2>
          <p className="mt-2.5 text-sm sm:text-base lg:text-lg text-slate-300">
            Lihat bagaimana para gamer, konten kreator, dan profesional menghemat jutaan rupiah dengan unit bypass kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 sm:space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 bg-slate-950/60 px-2.5 py-1 rounded-full border border-slate-800">
                    {item.date}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-cyan-950/50 border border-cyan-800/50 text-xs font-semibold text-cyan-300">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{item.unit}</span>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-slate-800/80">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-cyan-500/30 shrink-0"
                  />
                  <div>
                    <div className="font-bold text-white text-sm">{item.name}</div>
                    <div className="text-slate-400 text-xs">{item.location}</div>
                  </div>
                </div>

                <div className="sm:text-right bg-slate-950/60 sm:bg-transparent p-2.5 sm:p-0 rounded-xl border border-slate-800/60 sm:border-0">
                  <span className="text-[10px] text-slate-400 block">Kebutuhan:</span>
                  <span className="text-xs font-semibold text-emerald-400">
                    {item.useCase}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
