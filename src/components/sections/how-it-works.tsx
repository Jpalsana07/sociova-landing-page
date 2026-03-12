"use client";

import { motion } from "framer-motion";
import { Link2, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect Your Account",
    description: "Connect your Twitter account securely with OAuth. Your credentials are never stored.",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Create with AI",
    description: "Create or generate content using our AI engine. Get captions, threads, and ideas instantly.",
    gradient: "from-violet-500 to-blue-500",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Schedule & Publish",
    description: "Schedule posts and let the app publish automatically at the optimal time for engagement.",
    gradient: "from-blue-500 to-cyan-500",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-16 sm:py-20 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-xs sm:text-sm uppercase tracking-widest text-purple-400 font-medium">
            How it Works
          </span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Three steps to{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              autopilot
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-purple-500/30 to-transparent" />
              )}

              <div className="relative inline-flex flex-col items-center">
                <span className="text-4xl sm:text-5xl font-bold text-white/[0.04] absolute -top-3 sm:-top-4">
                  {step.number}
                </span>
                <div
                  className={`relative h-14 w-14 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg shadow-purple-500/10`}
                >
                  <step.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
              </div>

              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
