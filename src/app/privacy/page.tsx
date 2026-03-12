import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Privacy Policy - Sociova",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <Button render={<a href="/" />} nativeButton={false} variant="ghost" className="mb-8 text-muted-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-12">
          Last updated: March 12, 2026
        </p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              When you use Sociova, we collect information you provide directly, such as your
              name, email address, and Twitter account information through OAuth authentication. We
              also collect usage data including scheduling preferences, content creation patterns, and
              analytics data to improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use your information to provide and improve our services, including scheduling posts,
              generating AI content, and providing analytics. We never sell your personal data to third
              parties. Your Twitter credentials are handled through OAuth and are never directly stored
              on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures to protect your data. All data is
              encrypted in transit using TLS and at rest using AES-256 encryption. We regularly audit
              our security practices and maintain compliance with applicable data protection regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sociova integrates with Twitter&apos;s API to provide scheduling and publishing
              functionality. When you connect your Twitter account, you authorize us to post on your
              behalf. We only access the permissions necessary to provide our core services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, correct, or delete your personal data at any time. You can
              revoke Twitter access from your Twitter settings. To request data deletion, contact us at
              privacy@sociova.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use essential cookies to maintain your session and preferences. We may also use
              analytics cookies to understand how our service is used. You can manage cookie
              preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material
              changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at
              privacy@sociova.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
