"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/products";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { createWhatsAppConsultLink } from "@/lib/constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] h-[350px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-[11px] font-semibold uppercase tracking-widest text-cyan-400 mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Pertanyaan yang Sering Diajukan</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            FAQ Seputar <span className="text-cyan-400">iPhone Bypass</span>
          </h2>
          <p className="mt-2 text-xs sm:text-base text-slate-300">
            Semua jawaban jujur dan transparan untuk kenyamanan dan keamanan transaksi Anda.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-slate-900 border-cyan-500/50 shadow-xl shadow-cyan-950/40"
                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3.5 pr-3 sm:pr-4">
                    <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-800 text-cyan-300 border border-slate-700 w-fit shrink-0">
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-lg font-bold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-12 p-5 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Masih punya pertanyaan yang belum terjawab?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Tim spesialis kami siap menjawab semua pertanyaan teknis secara ramah.
            </p>
          </div>
          <a
            href={createWhatsAppConsultLink("Tanya Seputar FAQ & Penjelasan Teknis")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 whitespace-nowrap transition-all"
          >
            <MessageCircle className="h-4 w-4 fill-white" />
            <span>Tanya Admin Langsung</span>
          </a>
        </div>
      </div>
    </section>
  );
}
