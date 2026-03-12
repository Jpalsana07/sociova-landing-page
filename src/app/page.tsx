import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import SocialProof from "@/components/sections/social-proof";
import Features from "@/components/sections/features";
import HowItWorks from "@/components/sections/how-it-works";
import AppPreview from "@/components/sections/app-preview";
import Pricing from "@/components/sections/pricing";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <AppPreview />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
