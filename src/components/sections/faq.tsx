"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is my Twitter account safe?",
    answer:
      "Absolutely. We use OAuth 2.0 for authentication, which means we never see or store your password. You can revoke access at any time from your Twitter settings. Your data is encrypted at rest and in transit.",
  },
  {
    question: "How does scheduling work?",
    answer:
      "Simply compose your tweet (or let AI generate one), pick a date and time, and we'll publish it automatically. Our smart scheduling feature can also suggest the best times to post based on your audience's activity patterns.",
  },
  {
    question: "Can I manage multiple accounts?",
    answer:
      "Yes! Our Pro plan supports up to 5 Twitter accounts, and the Growth plan offers unlimited accounts. You can easily switch between accounts and manage them all from a single dashboard.",
  },
  {
    question: "Does it use the official Twitter API?",
    answer:
      "Yes, Sociova uses the official Twitter API v2. All operations are performed through authorized API endpoints, ensuring full compliance with Twitter's terms of service and platform guidelines.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no questions asked. Your access will continue until the end of your current billing period. No long-term contracts or hidden fees.",
  },
  {
    question: "What kind of AI is used for caption generation?",
    answer:
      "We use state-of-the-art large language models fine-tuned for social media content. The AI learns your writing style and brand voice to generate captions that sound authentically like you.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm uppercase tracking-widest text-purple-400 font-medium">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
            Frequently asked{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              questions
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 data-[open]:bg-white/[0.04] transition-colors"
              >
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
