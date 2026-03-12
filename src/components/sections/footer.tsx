"use client";

import { Separator } from "@/components/ui/separator";
import SociovaIcon from "@/components/sociova-icon";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Twitter", href: "#" },
      { label: "Contact", href: "mailto:hello@sociova.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <SociovaIcon size={28} className="sm:w-8 sm:h-8" />
              <span className="text-base sm:text-lg font-bold tracking-tight">
                Sociova
              </span>
            </a>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xs">
              Automate your social media with AI. Built for creators, marketers, and founders.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4">{group.title}</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-6 sm:my-8 bg-white/[0.06]" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-[10px] sm:text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Sociova. All rights reserved.
          </p>
          <p className="text-[10px] sm:text-xs text-muted-foreground">
            Made with passion for creators everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
