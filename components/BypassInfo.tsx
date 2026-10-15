"use client";

import React from "react";
import {
  Wifi,
  Camera,
  Download,
  Gamepad2,
  Tv,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  Radio,
  Info,
} from "lucide-react";

export function BypassInfo() {
  const allowedFeatures = [
    {
      icon: Wifi,
      title: "WiFi & Hotspot Tethering",
      desc: "Koneksi internet cepat & stabil via WiFi rumah, kantor, atau hotspot dari HP Android / iPhone lain.",
    },
    {
      icon: Camera,
      title: "Kamera & Video Sinematik",
      desc: "Foto 48MP tajam, 4K 60fps video, Cinematic Mode, dan stabilizer Action Mode 100% original Apple.",
    },
    {
      icon: Download,
      title: "App Store & Apple ID",
      desc: "Bisa login akun Apple ID pribadi di App Store untuk download & update ribuan aplikasi tanpa kendala.",
    },
    {
      icon: Gamepad2,
      title: "Gaming Berat Super Lancar",
      desc: "Chipset A15/A16/A17 Pro siap libas Mobile Legends, Genshin Impact, PUBG, dan eFootball di setting rata kanan.",
    },
    {
      icon: Tv,
      title: "Streaming & Media Sosial",
      desc: "Nonton YouTube 4K, Netflix HDR, scroll TikTok, Reels, dan live streaming dengan visual jernih & audio stereo.",
    },
    {
      icon: RotateCcw,
      title: "Bebas Restart (Untethered)",
      desc: "Bebas matikan HP, bebas kehabisan baterai, atau reboot normal tanpa takut status bypass hilang.",
    },
  ];

  const restrictions = [
    {
      icon: Radio,
      title: "Tanpa Sinyal SIM Card",
      desc: "Slot kartu SIM dinonaktifkan. Unit tidak bisa membaca kartu Telkomsel, Indosat, XL, dll. Internet wajib via WiFi/Hotspot.",
    },
    {
      icon: AlertTriangle,
      title: "Jangan Update iOS & Jangan Reset",
      desc: "Dilarang melakukan 'Pembaruan Perangkat Lunak' atau 'Reset Pabrik / Hapus Semua Konten' agar status bypass tidak ter-reset.",
    },
    {
      icon: XCircle,
      title: "Bukan untuk Telepon Pulsa Biasa",
      desc: "Tidak bisa SMS atau panggilan pulsa seluler biasa. Komunikasi harian lancar menggunakan WhatsApp Call, FaceTime, Telegram, atau Line.",
    },
  ];

  return (
    <section id="edukasi" className="py-16 sm:py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] h-[300px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-[11px] font-semibold uppercase tracking-widest text-cyan-400 mb-3">
            <Info className="h-3.5 w-3.5" />
            <span>Kenali Fitur & Batasan Unit</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Apa yang Bisa Dipakai &{" "}
            <span className="text-cyan-400">Apa yang Tidak?</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-base lg:text-lg text-slate-300">
            Transparansi 100% tanpa ada yang ditutupi. iPhone bypass WiFi Only tetap bisa
            digunakan untuk berbagai kebutuhan penting, namun ada beberapa batasan yang perlu kamu ketahui.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/80 border-2 border-cyan-500/30 p-4 sm:p-8 backdrop-blur-xl shadow-2xl shadow-cyan-950/50 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-60 h-60 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 pb-4 sm:pb-6 border-b border-slate-800">
                <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-inner shrink-0">
                  <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div>
                  <h3 className="text-base sm:text-2xl font-bold text-white flex items-center gap-2">
                    FITUR YANG BISA DIPAKAI
                  </h3>
                  <p className="text-[11px] sm:text-sm text-emerald-400 font-medium">
                    ✓ Tetap bisa digunakan maksimal seperti iPhone normal!
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6">
                {allowedFeatures.map((feat, i) => (
                  <div
                    key={i}
                    className="p-3 sm:p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5 sm:mb-2">
                      <div className="p-1.5 sm:p-2 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                        <feat.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {feat.title}
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] sm:text-xs text-cyan-300 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
              <span>Semua aplikasi perbankan & e-wallet yang support iOS dapat berjalan normal.</span>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl bg-slate-900/80 border-2 border-rose-500/30 p-4 sm:p-8 backdrop-blur-xl shadow-2xl shadow-rose-950/40 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 pb-4 sm:pb-6 border-b border-slate-800">
                <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/40 shadow-inner shrink-0">
                  <XCircle className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div>
                  <h3 className="text-base sm:text-2xl font-bold text-white flex items-center gap-2">
                    BATASAN UNIT
                  </h3>
                  <p className="text-[11px] sm:text-sm text-rose-400 font-medium">
                    ✕ Ada beberapa hal yang tidak boleh dilakukan:
                  </p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
                {restrictions.map((item, i) => (
                  <div
                    key={i}
                    className="p-3 sm:p-4 rounded-2xl bg-slate-950/60 border border-rose-500/20 hover:border-rose-500/40 transition-colors"
                  >
                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <div className="p-1.5 sm:p-2 rounded-xl bg-rose-500/10 text-rose-400 shrink-0 mt-0.5">
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-rose-300 mb-0.5 sm:mb-1">
                          {item.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-rose-950/30 border border-rose-800/40 text-xs text-slate-300 space-y-1">
              <div className="font-semibold text-rose-300 flex items-center gap-1.5">
                <AlertTriangle className="h-3.5 w-3.5" />
                <span>Tips Aman dari Tim Teknisi iBypass Hub:</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Kami sudah mematikan menu auto-update iOS dan memasang perlindungan profil sistem sebelum unit dikirimkan ke tangan Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
