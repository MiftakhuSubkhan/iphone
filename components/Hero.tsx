"use client";

import React from "react";
import Image from "next/image";
import { Zap, ShieldCheck, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { createWhatsAppConsultLink } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-[520px] sm:min-h-[620px] lg:min-h-[82vh] flex items-center"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/backgound-hero1-hd.png"
          alt="iPhone Bypass Hero Showcase Ultra-HD"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[75%_center] lg:object-[right_center] contrast-[1.03] brightness-[1.02]"
          style={{ imageRendering: "-webkit-optimize-contrast" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 sm:via-slate-950/75 sm:via-40% to-slate-950/40 lg:to-transparent lg:w-[60%]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 text-center lg:text-left space-y-5 sm:space-y-6 pt-2 pb-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-slate-900/80 border border-cyan-400/30 text-[11px] sm:text-sm font-medium text-cyan-300 shadow-[0_0_20px_-3px_rgba(6,182,212,0.25)] backdrop-blur-xl">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span>iPhone Bypass WiFi Only • 100% Original</span>
            </div>

            <div className="space-y-0.5 sm:space-y-1">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                iPhone Murah,
              </h1>
              <div className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.35)] leading-[1.15]">
                Performa Maksimal
              </div>
            </div>

            <p className="text-xs sm:text-base lg:text-lg text-slate-300/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal px-1 sm:px-0">
              Dapatkan iPhone original dengan harga lebih terjangkau, khusus WiFi Only.
              Cocok untuk kebutuhan gaming lancar, kamera jernih, dan hiburan tanpa batas!
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-0.5">
              <div className="flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/70 border border-slate-700/60 text-xs sm:text-sm text-slate-200 shadow-sm backdrop-blur-md hover:border-cyan-400/40 transition-colors">
                <Zap className="h-3.5 w-3.5 text-cyan-400" />
                <span>Performa Tangguh</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/70 border border-slate-700/60 text-xs sm:text-sm text-slate-200 shadow-sm backdrop-blur-md hover:border-cyan-400/40 transition-colors">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
                <span>iOS Stabil & Aman</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/70 border border-slate-700/60 text-xs sm:text-sm text-slate-200 shadow-sm backdrop-blur-md hover:border-cyan-400/40 transition-colors">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                <span>100% Original Apple</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 pt-1 max-w-xs sm:max-w-none mx-auto sm:mx-0 w-full">
              <a
                href="#katalog"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full text-xs sm:text-base font-semibold text-slate-950 bg-white hover:bg-slate-100 shadow-[0_10px_25px_-5px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>Pilih iPhone Favorit</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={createWhatsAppConsultLink("Konsultasi Rekomendasi Unit")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full text-xs sm:text-base font-semibold text-white bg-emerald-500 hover:bg-emerald-400 shadow-[0_10px_25px_-5px_rgba(16,185,129,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-emerald-400/30 backdrop-blur-md"
              >
                <MessageCircle className="h-4 w-4 fill-white" />
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-slate-800/60 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-lg sm:text-2xl font-bold text-white tracking-tight">Rp 3.5 Jt</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">Mulai dari</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-lg sm:text-2xl font-bold text-cyan-400 tracking-tight">100%</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">Original Apple</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-lg sm:text-2xl font-bold text-emerald-400 tracking-tight">Untethered</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">Bebas Restart</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-5 relative items-center justify-center min-h-[460px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
