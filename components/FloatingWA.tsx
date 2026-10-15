"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { createWhatsAppConsultLink } from "@/lib/constants";

export function FloatingWA() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900/95 border border-emerald-500/40 py-2 px-3.5 rounded-2xl shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-semibold text-slate-200">
            Admin Online • Cek Stok Ready
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-500 hover:text-slate-300 ml-1"
            aria-label="Tutup info"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}

      <a
        href={createWhatsAppConsultLink("Halo Admin, saya mau tanya stok ready")}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white shadow-2xl shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-emerald-300/40 cursor-pointer"
        aria-label="Chat via WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30 pointer-events-none" />
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 fill-white relative z-10 transition-transform group-hover:rotate-12" />
      </a>
    </div>
  );
}
