"use client";

import React from "react";
import { AppleLogo } from "./AppleLogo";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { createWhatsAppConsultLink } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 pt-12 sm:pt-16 pb-10 sm:pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-900">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center h-9 w-9 rounded-xl bg-slate-900 border border-slate-800">
                <AppleLogo className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                iBypass <span className="text-cyan-400">Hub</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Spesialis penyedia iPhone original Apple varian WiFi Only (Bypass) berkualitas tinggi dengan garansi toko, pengujian 3uTools menyeluruh, dan layanan purna jual terpercaya di Indonesia.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Transparan, Amanah & Bergaransi Toko</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#edukasi" className="hover:text-cyan-400 transition-colors">
                  Fitur & Batasan Unit
                </a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-cyan-400 transition-colors">
                  Katalog iPhone 13 / 14 / 15
                </a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-cyan-400 transition-colors">
                  Keunggulan & Garansi
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  FAQ & Tips Perawatan
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Hubungi Kami
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Konsultasi gratis seputar pemilihan tipe iPhone dan cek ketersediaan stok fisik unit hari ini.
            </p>
            <div>
              <a
                href={createWhatsAppConsultLink("Konsultasi via Footer")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-emerald-500/30 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat Admin WhatsApp (Fast Response)</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 rounded-2xl bg-slate-900/40 border border-slate-900 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong>Disclaimer:</strong> Semua produk yang dijual berstatus <em>iPhone Bypass (WiFi Only)</em> tanpa fungsi jaringan seluler kartu SIM. Apple, iPhone, iOS, App Store, Retina, dan Dynamic Island adalah merek dagang terdaftar milik Apple Inc. Website ini dikelola secara independen oleh iBypass Hub untuk edukasi dan transaksi transparan bagi calon pembeli.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© 2026 iBypass Hub. Hak cipta dilindungi undang-undang.</p>
          <p className="flex items-center gap-1">
            <span>Dibuat dengan dedikasi untuk performa maksimal</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
