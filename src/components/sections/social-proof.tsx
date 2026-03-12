"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10k+", label: "Scheduled Posts" },
  { value: "500+", label: "Active Creators" },
  { value: "98%", label: "Uptime" },
  { value: "4.9/5", label: "User Rating" },
];

export default function SocialProof() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs sm:text-sm uppercase tracking-widest text-muted-foreground mb-8 sm:mb-10"
        >
          Built for creators, marketers and founders
        </motion.p>

        {/* Avatars */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="flex -space-x-2 sm:-space-x-3">
            {[
              "from-purple-400 to-pink-400",
              "from-blue-400 to-cyan-400",
              "from-violet-400 to-purple-400",
              "from-indigo-400 to-blue-400",
              "from-fuchsia-400 to-purple-400",
            ].map((gradient, i) => (
              <div
                key={i}
                className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br ${gradient} border-2 border-background flex items-center justify-center text-[10px] sm:text-xs font-bold text-white`}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/10 border-2 border-background flex items-center justify-center text-[10px] sm:text-xs text-white/60">
              +495
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
