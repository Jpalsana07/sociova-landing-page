"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    name: "Starter",
    monthly: 9,
    yearly: 7,
    description: "Perfect for getting started with social media automation.",
    features: [
      "1 Twitter account",
      "50 scheduled posts per month",
      "AI caption generator",
      "Basic analytics",
    ],
    popular: false,
  },
  {
    name: "Pro",
    monthly: 19,
    yearly: 15,
    description: "For creators who want to grow their audience faster.",
    features: [
      "5 Twitter accounts",
      "Unlimited scheduled posts",
      "AI captions & rewrites",
      "Advanced analytics",
      "Best posting time suggestions",
    ],
    popular: true,
  },
  {
    name: "Growth",
    monthly: 39,
    yearly: 31,
    description: "For teams and agencies managing multiple brands.",
    features: [
      "Unlimited accounts",
      "Unlimited posts",
      "AI content ideas & threads",
      "Priority support",
      "Team collaboration",
    ],
    popular: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-16 sm:py-20 lg:py-32 border-t border-border">
      <div className="absolute top-1/2 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-xs sm:text-sm uppercase tracking-widest text-purple-400 font-medium">
            Pricing
          </span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Simple,{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              transparent
            </span>{" "}
            pricing
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground">
            Start free. Upgrade when you&apos;re ready.
          </p>

          {/* Toggle */}
          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3">
            <span className={`text-xs sm:text-sm ${!yearly ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <Switch checked={yearly} onCheckedChange={setYearly} />
            <span className={`text-xs sm:text-sm ${yearly ? "text-foreground" : "text-muted-foreground"}`}>
              Yearly
            </span>
            {yearly && (
              <Badge className="text-[10px] sm:text-xs bg-green-500/10 text-green-400 border-green-500/30">
                Save 20%
              </Badge>
            )}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-xl sm:rounded-2xl border p-4 sm:p-6 lg:p-8 ${
                plan.popular
                  ? "border-purple-500/30 bg-gradient-to-b from-purple-500/[0.08] to-transparent md:scale-[1.02]"
                  : "border-white/[0.06] bg-white/[0.02]"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
                  Most Popular
                </Badge>
              )}

              <div>
                <h3 className="text-base sm:text-lg font-semibold">{plan.name}</h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="mt-4 sm:mt-6">
                <span className="text-3xl sm:text-4xl font-bold">
                  ${yearly ? plan.yearly : plan.monthly}
                </span>
                <span className="text-sm sm:text-base text-muted-foreground">/month</span>
              </div>

              <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                    <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-purple-400 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                render={<a href="#cta" />}
                nativeButton={false}
                className={`mt-6 sm:mt-8 w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 shadow-lg shadow-purple-500/25"
                    : "bg-white/5 hover:bg-white/10 border border-white/10"
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
