"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Calendar, Send, Sparkles, Heart, MessageCircle, Repeat2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ParticlesBg from "./particles-bg";

function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateY: -10 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative mx-auto w-[260px] sm:w-[300px] md:w-[320px]"
    >
      {/* Glow */}
      <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-[3rem] blur-3xl" />

      {/* Phone frame */}
      <div className="relative rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-gray-900 to-gray-950 p-2.5 sm:p-3 shadow-2xl shadow-purple-500/10">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-24 sm:h-6 sm:w-28 bg-black rounded-b-2xl z-10" />

        {/* Screen */}
        <div className="rounded-[1.5rem] sm:rounded-[2rem] bg-[#0a0a1a] overflow-hidden">
          {/* Status bar */}
          <div className="flex justify-between items-center px-5 sm:px-6 pt-7 sm:pt-8 pb-2 text-[10px] text-white/50">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 rounded-sm border border-white/30" />
            </div>
          </div>

          {/* App content */}
          <div className="px-3 sm:px-4 pb-3 sm:pb-4 space-y-2.5 sm:space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-white text-xs sm:text-sm font-semibold">Schedule Tweet</h3>
              <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
              </div>
            </div>

            {/* Tweet compose */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="rounded-xl bg-white/5 border border-white/10 p-2.5 sm:p-3 space-y-2"
            >
              <div className="flex gap-2">
                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 shrink-0" />
                <p className="text-[10px] sm:text-[11px] text-white/80 leading-relaxed">
                  Just shipped our new AI feature! The future of content creation is here. 🚀
                </p>
              </div>
              <div className="flex items-center gap-3 text-white/30">
                <Heart className="h-3 w-3" />
                <MessageCircle className="h-3 w-3" />
                <Repeat2 className="h-3 w-3" />
              </div>
            </motion.div>

            {/* Schedule time */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="flex items-center gap-2 rounded-lg bg-purple-500/10 border border-purple-500/20 px-2.5 sm:px-3 py-1.5 sm:py-2"
            >
              <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-purple-400" />
              <span className="text-[10px] sm:text-[11px] text-purple-300">Today, 2:30 PM</span>
              <Badge className="ml-auto text-[8px] bg-green-500/20 text-green-400 border-green-500/30 px-1.5 py-0">
                AI Pick
              </Badge>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="grid grid-cols-2 gap-1.5 sm:gap-2"
            >
              <button className="flex items-center justify-center gap-1 sm:gap-1.5 rounded-lg bg-white/5 border border-white/10 py-1.5 sm:py-2 text-[9px] sm:text-[10px] text-white/70">
                <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-purple-400" />
                AI Rewrite
              </button>
              <button className="flex items-center justify-center gap-1 sm:gap-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 py-1.5 sm:py-2 text-[9px] sm:text-[10px] text-white font-medium">
                <Send className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                Schedule
              </button>
            </motion.div>

            {/* Upcoming */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9 }}
              className="space-y-1 sm:space-y-1.5"
            >
              <p className="text-[9px] sm:text-[10px] text-white/40 font-medium uppercase tracking-wider">Upcoming</p>
              {[
                { time: "3:00 PM", text: "Thread about AI tools..." },
                { time: "5:30 PM", text: "Product launch..." },
              ].map((item) => (
                <div
                  key={item.time}
                  className="flex items-center gap-1.5 sm:gap-2 rounded-lg bg-white/[0.03] border border-white/5 px-2 sm:px-3 py-1.5 sm:py-2"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                  <span className="text-[9px] sm:text-[10px] text-white/40">{item.time}</span>
                  <span className="text-[9px] sm:text-[10px] text-white/60 truncate">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <ParticlesBg />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600/15 rounded-full blur-[128px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="outline"
                className="mb-4 sm:mb-6 border-purple-500/30 bg-purple-500/10 text-purple-300 px-3 py-1 sm:px-4 sm:py-1.5 text-xs"
              >
                <Sparkles className="h-3 w-3 mr-1.5" />
                Now in Early Access
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
            >
              Automate Your{" "}
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                Social Media
              </span>{" "}
              with AI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-md sm:max-w-lg mx-auto lg:mx-0"
            >
              Generate AI captions, schedule posts, and automatically publish to
              Twitter from one mobile app.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button
                render={<a href="#cta" />}
                nativeButton={false}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all text-sm sm:text-base px-6 sm:px-8"
              >
                Get Early Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                render={<a href="#how-it-works" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="border-white/10 bg-white/5 hover:bg-white/10 text-sm sm:text-base px-6 sm:px-8"
              >
                <Play className="mr-2 h-4 w-4" />
                View Demo
              </Button>
            </motion.div>
          </div>

          {/* Right - Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
