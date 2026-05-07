import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms | RED Vasant Vihar" },
      {
        name: "description",
        content:
          "Basic website terms for RED Vasant Vihar and notice about third-party reservation and listing platforms.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 right-0 z-40 px-5 md:px-10 py-4 backdrop-blur-md bg-background/30 border-b border-border/40">
        <a href="/" className="font-display text-2xl tracking-[0.3em] neon">
          RED
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 md:px-12 pt-32 pb-20"
      >
        <div className="mb-12">
          <h1 className="font-display text-5xl md:text-7xl mb-4">Terms</h1>
          <p className="font-script text-3xl text-accent">Website use</p>
        </div>

        <div className="space-y-8 text-muted-foreground">
          <section className="bg-card/50 border border-border/40 rounded-lg p-8">
            <p className="leading-relaxed">
              This website is for sharing business information for RED Vasant Vihar, including menu sections,
              address, hours, contact number, and links to external platforms.
            </p>
          </section>

          <section className="bg-card/50 border border-border/40 rounded-lg p-8">
            <h2 className="font-display text-2xl text-foreground mb-4">External platforms</h2>
            <p className="leading-relaxed">
              Reservations, reviews, directions, and social content may be available on external platforms such as
              Instagram, Zomato, EazyDiner, District, and Google Maps. Their terms apply when you use those
              services.
            </p>
          </section>

          <section className="bg-card/50 border border-border/40 rounded-lg p-8">
            <h2 className="font-display text-2xl text-foreground mb-4">Business details</h2>
            <p className="leading-relaxed">
              RED Vasant Vihar
              <br />
              24, Community center, Main Market, Basant Lok, Vasant Vihar, New Delhi, Delhi 110057
              <br />
              Phone: 085272 74562
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
