"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Clock,
  Send,
  CalendarDays,
  BarChart3,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Caption Generator",
    description: "Generate engaging tweets using AI that matches your unique voice and style.",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description: "Schedule posts for the best engagement time based on your audience analytics.",
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    icon: Send,
    title: "Auto Posting",
    description: "Automatically publish tweets without manual work. Set it and forget it.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: CalendarDays,
    title: "Content Calendar",
    description: "Visual calendar to manage upcoming posts and plan your content strategy.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Track impressions, engagement growth, and optimize your posting strategy.",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Multi Account Support",
    description: "Manage multiple Twitter accounts easily from a single dashboard.",
    gradient: "from-teal-500 to-emerald-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-20 lg:py-32">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-purple-600/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-xs sm:text-sm uppercase tracking-widest text-purple-400 font-medium">
            Features
          </span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              grow on Twitter
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
            Powerful AI tools that automate your social media workflow from
            content creation to publishing.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-xl sm:rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-6 hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div
                  className={`inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
                >
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>

                <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold">{feature.title}</h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
