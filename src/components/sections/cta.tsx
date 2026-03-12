"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section id="cta" className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 via-purple-600/10 to-blue-600/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[600px] h-[300px] sm:h-[500px] lg:h-[600px] bg-purple-600/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 mb-6 sm:mb-8 shadow-lg shadow-purple-500/20">
            <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Start Growing on Twitter{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Automatically
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
            Join hundreds of creators who are saving hours every week with
            AI-powered social media automation.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all text-sm sm:text-base px-6 sm:px-10"
            >
              Get Early Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs text-muted-foreground">
            No credit card required. Free 14-day trial.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
