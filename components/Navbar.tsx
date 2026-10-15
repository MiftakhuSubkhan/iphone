"use client";

import React, { useState, useEffect } from "react";
import { AppleLogo } from "./AppleLogo";
import { MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";
import { createWhatsAppConsultLink } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Beranda", href: "#hero" },
    { label: "Edukasi & Fitur", href: "#edukasi" },
    { label: "Katalog Produk", href: "#katalog" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 shadow-inner group-hover:border-cyan-400/60 transition-colors">
              <AppleLogo className="h-5 w-5 text-white transition-transform group-hover:scale-110" />
              <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-cyan-400 ring-2 ring-slate-950 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                iBypass <span className="text-cyan-400 font-extrabold">Hub</span>
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                WiFi Only Specialist
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href={createWhatsAppConsultLink("Konsultasi via Navbar")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-400/30"
            >
              <MessageCircle className="h-4 w-4 fill-white" />
              <span>Chat via WhatsApp</span>
            </a>
          </div>

          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-300 hover:text-white rounded-xl bg-slate-900/90 border border-slate-800 active:scale-95 transition-transform"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 mt-2 space-y-1.5 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2.5 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900 rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800/80">
            <a
              href={createWhatsAppConsultLink("Konsultasi via Mobile Drawer")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/25 active:scale-98 transition-transform"
            >
              <MessageCircle className="h-4 w-4 fill-white" />
              <span>Chat via WhatsApp (Fast Response)</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
