"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  BarChart3,
  TrendingUp,
  CalendarDays,
  CheckCircle2,
  ArrowUp,
} from "lucide-react";

function ScreenShell({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-[220px] sm:w-[240px]">
        {/* Glow */}
        <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-[2.5rem] blur-2xl" />

        {/* Phone frame */}
        <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-gray-900 to-gray-950 p-2.5 shadow-xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-24 bg-black rounded-b-xl z-10" />
          <div className="rounded-[1.5rem] bg-[#0a0a1a] overflow-hidden">
            <div className="pt-7 px-3 pb-3">{children}</div>
          </div>
        </div>
      </div>
      <span className="text-xs text-muted-foreground font-medium">{label}</span>
    </div>
  );
}

export default function AppPreview() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-border overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-purple-400 font-medium">
            App Preview
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Beautiful on{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              every screen
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {/* Scheduling Screen */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            <ScreenShell label="Scheduling">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <CalendarDays className="h-4 w-4 text-purple-400" />
                  <span className="text-[11px] text-white font-medium">March 2026</span>
                </div>
                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1 text-[8px] text-white/40 text-center mb-2">
                  {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                    <span key={i}>{d}</span>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 31 }, (_, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-md flex items-center justify-center text-[9px] ${
                        [4, 7, 11, 15, 19, 23].includes(i)
                          ? "bg-purple-500/20 text-purple-300 font-medium"
                          : "text-white/40"
                      } ${i === 11 ? "ring-1 ring-purple-500" : ""}`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
                <div className="mt-2 space-y-1.5">
                  {["9:00 AM - Thread", "2:30 PM - Tweet"].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-1.5"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                      <span className="text-[9px] text-white/60">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScreenShell>
          </motion.div>

          {/* Tweet Preview Screen */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-0 lg:mt-8"
          >
            <ScreenShell label="Tweet Preview">
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-4 w-4 text-violet-400" />
                  <span className="text-[11px] text-white font-medium">AI Generated</span>
                </div>
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="rounded-xl bg-white/5 border border-white/[0.06] p-2.5 space-y-2"
                  >
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 shrink-0" />
                      <div className="space-y-1">
                        <div className="h-2 w-24 rounded bg-white/10" />
                        <div className="h-2 w-32 rounded bg-white/[0.06]" />
                        <div className="h-2 w-20 rounded bg-white/[0.06]" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3 text-white/20">
                        <span className="text-[8px]">24 likes</span>
                        <span className="text-[8px]">8 RTs</span>
                      </div>
                      <CheckCircle2 className="h-3 w-3 text-green-400/60" />
                    </div>
                  </div>
                ))}
              </div>
            </ScreenShell>
          </motion.div>

          {/* Analytics Screen */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <ScreenShell label="Analytics">
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 className="h-4 w-4 text-blue-400" />
                  <span className="text-[11px] text-white font-medium">This Week</span>
                </div>
                {/* Chart bars */}
                <div className="flex items-end gap-1.5 h-24 px-1">
                  {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t bg-gradient-to-t from-purple-600 to-blue-500 transition-all"
                        style={{ height: `${h}%` }}
                      />
                      <span className="text-[7px] text-white/30">
                        {["M", "T", "W", "T", "F", "S", "S"][i]}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Stats */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Impressions", value: "12.4K", change: "+23%" },
                    { label: "Engagement", value: "3.2%", change: "+8%" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg bg-white/5 p-2"
                    >
                      <p className="text-[8px] text-white/40">{stat.label}</p>
                      <p className="text-sm font-bold text-white">{stat.value}</p>
                      <div className="flex items-center gap-0.5">
                        <ArrowUp className="h-2 w-2 text-green-400" />
                        <span className="text-[8px] text-green-400">{stat.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-green-500/10 border border-green-500/20 px-2.5 py-1.5">
                  <TrendingUp className="h-3 w-3 text-green-400" />
                  <span className="text-[9px] text-green-300">Growing 2x faster</span>
                </div>
              </div>
            </ScreenShell>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
