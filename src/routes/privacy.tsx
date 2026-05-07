import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy | RED Vasant Vihar" },
      {
        name: "description",
        content:
          "Privacy information for the RED Vasant Vihar website and links to third-party reservation platforms.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
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
          <h1 className="font-display text-5xl md:text-7xl mb-4">Privacy</h1>
          <p className="font-script text-3xl text-accent">Website information</p>
        </div>

        <div className="space-y-8 text-muted-foreground">
          <section className="bg-card/50 border border-border/40 rounded-lg p-8">
            <p className="leading-relaxed">
              This website shares publicly available business information for RED Vasant Vihar, including address,
              phone number, hours, menu items, and links to third-party platforms.
            </p>
          </section>

          <section className="bg-card/50 border border-border/40 rounded-lg p-8">
            <h2 className="font-display text-2xl text-foreground mb-4">Third-party links</h2>
            <p className="leading-relaxed">
              Reservations, menus, and social profiles linked from this website may be handled on Instagram,
              Zomato, EazyDiner, District, and Google Maps. Their privacy practices apply when you use those
              services.
            </p>
          </section>

          <section className="bg-card/50 border border-border/40 rounded-lg p-8">
            <h2 className="font-display text-2xl text-foreground mb-4">Contact</h2>
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
