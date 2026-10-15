"use client";

import React from "react";
import { Wifi, BatteryMedium } from "lucide-react";

interface DeviceMockupProps {
  modelName: string;
  colorHex?: string;
  hasDynamicIsland?: boolean;
  className?: string;
  screenContent?: React.ReactNode;
}

export function DeviceMockup({
  modelName,
  colorHex = "#1f242b",
  hasDynamicIsland = false,
  className = "",
  screenContent,
}: DeviceMockupProps) {
  return (
    <div
      className={`relative mx-auto rounded-[46px] p-[10px] shadow-2xl transition-all duration-500 ${className}`}
      style={{
        backgroundColor: colorHex,
        boxShadow: `0 25px 60px -15px ${colorHex}55, 0 0 20px 2px rgba(255,255,255,0.06) inset`,
        border: "1.5px solid rgba(255,255,255,0.18)",
      }}
    >
      <div className="absolute -left-[3px] top-[90px] h-[34px] w-[3px] rounded-l-md bg-slate-400/40" />
      <div className="absolute -left-[3px] top-[135px] h-[48px] w-[3px] rounded-l-md bg-slate-400/40" />
      <div className="absolute -left-[3px] top-[192px] h-[48px] w-[3px] rounded-l-md bg-slate-400/40" />
      <div className="absolute -right-[3px] top-[125px] h-[72px] w-[3px] rounded-r-md bg-slate-400/40" />

      <div className="relative overflow-hidden rounded-[38px] bg-black p-[5px] ring-1 ring-white/10">
        <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[34px] bg-gradient-to-b from-slate-900 via-slate-950 to-black select-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-600/30 via-slate-950/60 to-black pointer-events-none" />
          <div className="absolute -top-16 -left-10 h-44 w-44 rounded-full bg-blue-500/20 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-10 h-44 w-44 rounded-full bg-cyan-400/20 blur-2xl pointer-events-none" />

          <div className="relative z-20 flex items-center justify-between px-6 pt-3 text-[11px] font-semibold text-white/90">
            <span>09:41</span>

            {hasDynamicIsland ? (
              <div className="absolute left-1/2 top-2.5 -translate-x-1/2 flex items-center justify-between px-2.5 h-[22px] w-[78px] rounded-full bg-black border border-white/10 shadow-md">
                <div className="h-2 w-2 rounded-full bg-slate-950 border border-slate-700/60" />
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500/60 animate-pulse" />
              </div>
            ) : (
              <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[20px] w-[100px] rounded-b-2xl bg-black border-b border-white/10 flex items-center justify-center">
                <div className="h-1 w-10 rounded-full bg-white/20 mb-1" />
              </div>
            )}

            <div className="flex items-center gap-1.5 text-white/90">
              <Wifi className="h-3 w-3 text-cyan-400" />
              <BatteryMedium className="h-3.5 w-3.5 text-emerald-400" />
            </div>
          </div>

          <div className="relative z-10 flex h-[calc(100%-36px)] flex-col justify-between p-4">
            {screenContent ? (
              screenContent
            ) : (
              <>
                <div className="mt-8 text-center">
                  <div className="text-[10px] font-medium uppercase tracking-widest text-cyan-400/90">
                    WiFi Only Unit
                  </div>
                  <div className="mt-1 text-2xl font-bold tracking-tight text-white drop-shadow-md">
                    {modelName}
                  </div>
                  <div className="mt-1 text-[11px] text-slate-300">
                    A-Series Bionic Engine
                  </div>
                </div>

                <div className="rounded-xl bg-slate-900/80 p-2.5 border border-slate-700/60 backdrop-blur-md">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-300 font-medium">Status Bypass</span>
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-semibold text-emerald-400 border border-emerald-500/30">
                      Bebas Restart
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-2 text-[10px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    WiFi Connected • App Store Aktif
                  </div>
                </div>

                <div className="flex justify-center pb-1">
                  <div className="h-1 w-28 rounded-full bg-white/40" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
