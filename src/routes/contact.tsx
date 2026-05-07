import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | RED Vasant Vihar" },
      {
        name: "description",
        content:
          "Contact RED Vasant Vihar for address, phone number, hours, reservations links, and Instagram.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: Contact,
});

function Contact() {
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
        className="max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-20"
      >
        <div className="mb-12">
          <h1 className="font-display text-5xl md:text-7xl mb-4">Contact</h1>
          <p className="font-script text-3xl text-accent">RED Vasant Vihar</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card/50 border border-border/40 rounded-lg p-8">
            <p className="font-script text-2xl text-accent mb-3">address</p>
            <p className="font-display text-2xl leading-snug">
              24, Community center,
              <br />
              Main Market, Basant Lok,
              <br />
              Vasant Vihar, New Delhi,
              <br />
              Delhi 110057
            </p>
            <a
              href="https://maps.google.com/?q=Red+Vasant+Vihar"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 text-xs uppercase tracking-[0.2em] border border-accent/60 text-accent px-4 py-2 rounded-full hover:bg-accent hover:text-accent-foreground transition"
            >
              Get Directions
            </a>
          </div>

          <div className="bg-card/50 border border-border/40 rounded-lg p-8">
            <p className="font-script text-2xl text-accent mb-3">details</p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex justify-between gap-4">
                <span className="uppercase tracking-[0.2em]">Phone</span>
                <a href="tel:+918527274562" className="text-foreground hover:text-accent transition">
                  085272 74562
                </a>
              </div>
              <div className="flex justify-between gap-4">
                <span className="uppercase tracking-[0.2em]">Hours</span>
                <span className="text-right text-foreground">Open · Closes 1 am</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="uppercase tracking-[0.2em]">Lunch</span>
                <span className="text-right text-foreground">1 PM - 4 PM</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="uppercase tracking-[0.2em]">Dinner</span>
                <span className="text-right text-foreground">6 PM - 1 AM</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="uppercase tracking-[0.2em]">Price</span>
                <span className="text-right text-foreground">₹2,000+</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://www.instagram.com/red_vasantvihar"
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-[0.2em] border border-accent/60 text-accent px-4 py-2 rounded-full hover:bg-accent hover:text-accent-foreground transition"
              >
                Instagram
              </a>
              <a
                href="https://www.zomato.com/ncr/red-vasant-vihar-new-delhi"
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-[0.2em] border border-border px-4 py-2 rounded-full hover:border-accent"
              >
                Zomato
              </a>
              <a
                href="https://www.eazydiner.com/delhi-ncr/red-vasant-vihar-south-delhi-687583"
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-[0.2em] border border-border px-4 py-2 rounded-full hover:border-accent"
              >
                EazyDiner
              </a>
              <a
                href="https://www.district.in/dining/ncr/red-vasant-vihar-new-delhi"
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-[0.2em] border border-border px-4 py-2 rounded-full hover:border-accent"
              >
                District
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
