import { createFileRoute } from "@tanstack/react-router";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Clock3, Instagram, MapPin, Phone, Sparkles } from "lucide-react";
import heroImage from "@/assets/red-int-1.jpg";
import loungeImage from "@/assets/red-int-2.jpg";
import dishImage from "@/assets/red-photo-3.jpg";
import cocktailImage from "@/assets/red-photo-4.jpg";
import logoMark from "@/assets/red-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RED Vasant Vihar | Cocktail Bar & Asian Kitchen" },
      {
        name: "description",
        content:
          "RED Vasant Vihar is a luxury cocktail bar and Asian kitchen in Basant Lok, New Delhi. Explore the space, selected dishes, reservations, hours, and location.",
      },
      {
        name: "keywords",
        content:
          "RED Vasant Vihar, RED Basant Lok, cocktail bar Vasant Vihar, Asian kitchen Vasant Vihar, RED menu, RED reservations",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#2d070d" },
      { property: "og:title", content: "RED Vasant Vihar" },
      {
        property: "og:description",
        content:
          "A cinematic cocktail bar and Asian kitchen in Basant Lok, Vasant Vihar, New Delhi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: cocktailImage },
      { property: "og:site_name", content: "RED Vasant Vihar" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "RED Vasant Vihar" },
      {
        name: "twitter:description",
        content: "Luxury cocktail bar and Asian kitchen in Basant Lok, Vasant Vihar, New Delhi.",
      },
      { name: "twitter:image", content: cocktailImage },
    ],
  }),
  component: Index,
});

type Dish = { name: string; desc: string; price: string; tag?: string };
type MenuSection = {
  label: string;
  script: string;
  image: string;
  note: string;
  items: Dish[];
};

const galleryImages = [
  {
    image: heroImage,
    title: "The Room",
    copy: "A saturated red dining room with soft light, stillness, and cinematic depth.",
  },
  {
    image: loungeImage,
    title: "The Bar",
    copy: "Curved lines, velvet mood, and a glow that feels intimate after dark.",
  },
  {
    image: cocktailImage,
    title: "The Pour",
    copy: "Precision-led cocktails presented with restraint, balance, and detail.",
  },
  {
    image: dishImage,
    title: "The Plate",
    copy: "Asian flavours presented with contrast, texture, and a clean visual finish.",
  },
];

const signatureMoments = [
  {
    eyebrow: "Spatial Design",
    title: "A room built around mood.",
    copy: "Everything is composed to feel immersive rather than loud, with deep crimson tones, soft pools of light, and intimate sightlines.",
    image: heroImage,
  },
  {
    eyebrow: "Bar Program",
    title: "Cocktails with a sharper visual identity.",
    copy: "The bar carries the same attitude as the room: dark, refined, and precise, with a presentation style that feels editorial.",
    image: cocktailImage,
  },
  {
    eyebrow: "Dining",
    title: "Asian plates with a polished finish.",
    copy: "The menu reads clean and curated, allowing the food to feel elevated without adding noise or gimmicky labels.",
    image: dishImage,
  },
];

const menuSections: MenuSection[] = [
  {
    label: "Snackers",
    script: "to begin",
    image: dishImage,
    note: "A tighter first impression with crisp, bold, high-contrast plates.",
    items: [
      { name: "Crackling Spinach", desc: "sesame, thai chilli", price: "225" },
      {
        name: "Mushroom & Truffle Roll",
        desc: "king oyster mushroom, ginger, chives & truffle oil",
        price: "575",
        tag: "Signature",
      },
      { name: "Charred Corn Ribs", desc: "paprika butter, yuzu sauce", price: "375" },
      { name: "Garlic King Prawns", desc: "sichuan chilli, sweet pepper", price: "725" },
    ],
  },
  {
    label: "Dimsums",
    script: "the heart",
    image: heroImage,
    note: "Comfort, texture, and soft presentation in a more refined frame.",
    items: [
      { name: "Edamame & Truffle", desc: "steamed Japanese beans with truffle oil", price: "525" },
      { name: "Cream Cheese", desc: "cream cheese with shitake mushroom & pinenuts", price: "525" },
      {
        name: "Har Gow Prawn",
        desc: "classic prawn dim sum, sesame oil and fish roe",
        price: "525",
      },
      { name: "Chicken Kung Bao", desc: "spicy chicken with chilli mayo", price: "475" },
    ],
  },
  {
    label: "Sushi",
    script: "from the sea",
    image: cocktailImage,
    note: "Sharper contrast and cleaner composition for the delicate side of the menu.",
    items: [
      { name: "Tempura Asparagus & Cucumber", desc: "kewpie mayo, teriyaki sauce", price: "695" },
      {
        name: "Crab and Tuna",
        desc: "avocado, spicy kewpie mayo",
        price: "825",
        tag: "Chef's Pick",
      },
      {
        name: "Dynamite Shrimp Taco",
        desc: "fried shrimp, chilli mayo, wasabi & kikkoman soy",
        price: "825",
      },
    ],
  },
  {
    label: "From the Wok",
    script: "fire & smoke",
    image: loungeImage,
    note: "Bolder flavours presented inside a darker, richer visual frame.",
    items: [
      { name: "Wok Tossed Asparagus", desc: "butter garlic sauce", price: "525" },
      {
        name: "Roasted Pork Ribs",
        desc: "plum sauce, steamed pancake, scallion, cucumber",
        price: "795",
        tag: "Popular",
      },
      { name: "Xinjiang Cumin Lamb", desc: "cumin, onion, coriander", price: "725" },
      {
        name: "Sichuan Chilli Chicken",
        desc: "dried red chilli, sichuan peppercorn",
        price: "525",
      },
    ],
  },
  {
    label: "Sharing Plates",
    script: "for the table",
    image: heroImage,
    note: "Designed for a slower table rhythm and stronger group ordering moments.",
    items: [
      {
        name: "Hong Kong Clay Pot Rice",
        desc: "steamed jasmine rice, seasonal greens, mushroom",
        price: "695",
      },
      { name: "Nasi Goreng", desc: "chicken / prawns", price: "795" },
      {
        name: "Hong Kong Crispy Noodle",
        desc: "seasonal veg & shitake / chicken / prawn",
        price: "695",
      },
      {
        name: "Dan Dan Noodles",
        desc: "served with peanut broth & sichuan pickle chilli",
        price: "695",
      },
    ],
  },
  {
    label: "Sweet Sweet",
    script: "the encore",
    image: cocktailImage,
    note: "A softer finish with a more sculpted visual tone.",
    items: [
      { name: "Oreo Cheese Cake", desc: "white chocolate, cream cheese", price: "425" },
      {
        name: "Pistachio Chocolate Paradise",
        desc: "truffle, cream cheese, biscoff",
        price: "525",
        tag: "Signature",
      },
      { name: "Panna Cotta", desc: "mandarin panna", price: "375" },
    ],
  },
];

function Index() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 rounded-md bg-primary px-4 py-2 text-primary-foreground"
      >
        Skip to main content
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "RED Vasant Vihar",
            description:
              "A luxury cocktail bar and Asian kitchen in Basant Lok, Vasant Vihar, New Delhi.",
            telephone: "+918527274562",
            address: {
              "@type": "PostalAddress",
              streetAddress: "24, Community center, Main Market, Basant Lok",
              addressLocality: "Vasant Vihar",
              addressRegion: "New Delhi, Delhi",
              postalCode: "110057",
              addressCountry: "IN",
            },
            servesCuisine: ["Asian", "Pan-Asian", "Cocktails"],
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "13:00",
                closes: "16:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "18:00",
                closes: "01:00",
              },
            ],
            sameAs: [
              "https://www.instagram.com/red_vasantvihar",
              "https://www.zomato.com/ncr/red-vasant-vihar-new-delhi",
              "https://www.eazydiner.com/delhi-ncr/red-vasant-vihar-south-delhi-687583",
              "https://www.district.in/dining/ncr/red-vasant-vihar-new-delhi",
            ],
          }),
        }}
      />

      <div className="grain vignette relative">
        <Nav />
        <main id="main">
          <Hero />
          <EditorialStrip />
          <Experience />
          <Gallery />
          <Menu />
          <Visit />
        </main>
        <Footer />
        <MobileActionDock />
        <CursorGlow />
      </div>
    </>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 py-4 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] px-4 py-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-6">
        <a href="#top" className="flex items-center gap-3" aria-label="RED Home">
          <img
            src={logoMark}
            alt="RED logo"
            className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10"
          />
          <div>
            <div className="font-display text-lg leading-none tracking-[0.35em] text-white md:text-xl">
              RED
            </div>
            <div className="mt-1 text-[9px] uppercase tracking-[0.32em] text-white/55 md:text-[10px]">
              Vasant Vihar
            </div>
          </div>
        </a>

        <nav className="hidden gap-8 text-[11px] uppercase tracking-[0.28em] text-white/65 md:flex">
          <a href="#experience" className="transition hover:text-white">
            Experience
          </a>
          <a href="#gallery" className="transition hover:text-white">
            Gallery
          </a>
          <a href="#menu" className="transition hover:text-white">
            Menu
          </a>
          <a href="#visit" className="transition hover:text-white">
            Visit
          </a>
          <a href="/contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LuxeLink
            href="https://www.instagram.com/red_vasantvihar"
            label="Instagram"
            icon={<Instagram className="h-3.5 w-3.5" />}
            variant="muted"
            external
          />
          <LuxeLink
            href="https://www.eazydiner.com/delhi-ncr/red-vasant-vihar-south-delhi-687583"
            label="Reserve"
            icon={<Sparkles className="h-3.5 w-3.5" />}
            external
          />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <div className="h-px w-5 bg-current" />
            <div className="h-px w-5 bg-current" />
            <div className="ml-auto h-px w-3 bg-current" />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-white/10 bg-[rgba(18,6,8,0.9)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-3 text-sm uppercase tracking-[0.24em] text-white/70">
              {[
                ["Experience", "#experience"],
                ["Gallery", "#gallery"],
                ["Menu", "#menu"],
                ["Visit", "#visit"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/6 px-4 py-4 transition hover:border-white/15 hover:bg-white/4 hover:text-white"
                >
                  {label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-3">
                <LuxeLink
                  href="https://www.instagram.com/red_vasantvihar"
                  label="Instagram"
                  icon={<Instagram className="h-3.5 w-3.5" />}
                  variant="muted"
                  external
                />
                <LuxeLink
                  href="https://www.eazydiner.com/delhi-ncr/red-vasant-vihar-south-delhi-687583"
                  label="Reserve"
                  icon={<Sparkles className="h-3.5 w-3.5" />}
                  external
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate min-h-screen overflow-hidden px-4 pb-10 pt-28 md:px-8 md:pb-16 md:pt-36"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImage}
          alt="RED dining room interior"
          className="h-full w-full object-cover object-center opacity-45"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(158,21,34,0.22),transparent_36%),linear-gradient(180deg,rgba(10,3,5,0.55),rgba(10,3,5,0.82)_55%,rgba(10,3,5,0.98))]" />
      <div className="absolute inset-x-0 top-28 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-2 shadow-[0_18px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            >
              <img
                src={logoMark}
                alt="RED insignia"
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-[10px] uppercase tracking-[0.34em] text-white/72">
                Cocktail Bar & Asian Kitchen
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="font-script text-4xl text-[#f2c2ba] md:text-6xl"
            >
              designed in shades of desire
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.9 }}
              className="mt-4 max-w-5xl font-display text-[clamp(4.5rem,16vw,11rem)] leading-[0.85] tracking-[-0.06em] text-white"
            >
              RED
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.85 }}
              className="mt-6 max-w-2xl text-base leading-7 text-white/68 md:text-lg"
            >
              A reputed destination for Asian food, well-balanced cocktails, music, and a room that
              feels deeply considered. Luxury here is quiet, immersive, and unmistakably red.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <LuxeLink
                href="https://www.eazydiner.com/delhi-ncr/red-vasant-vihar-south-delhi-687583"
                label="Reserve A Table"
                icon={<Sparkles className="h-3.5 w-3.5" />}
                external
              />
              <LuxeLink href="#menu" label="Explore Menu" variant="muted" />
              <LuxeLink
                href="tel:+918527274562"
                label="Call RED"
                icon={<Phone className="h-3.5 w-3.5" />}
                variant="ghost"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3"
            >
              <DetailPill
                icon={<MapPin className="h-4 w-4" />}
                label="Basant Lok"
                value="Vasant Vihar"
              />
              <DetailPill
                icon={<Clock3 className="h-4 w-4" />}
                label="Lunch & Dinner"
                value="1 PM till late"
              />
              <DetailPill
                icon={<Instagram className="h-4 w-4" />}
                label="Follow"
                value="@red_vasantvihar"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            className="relative"
          >
            <div className="grid gap-4 md:grid-cols-[0.8fr_1fr]">
              <ImagePanel
                image={cocktailImage}
                alt="Signature RED cocktail"
                label="Signature Cocktail"
                className="md:translate-y-12"
              />
              <ImagePanel image={loungeImage} alt="RED bar interior" label="After-Dark Bar" />
              <ImagePanel
                image={dishImage}
                alt="Plated dish at RED"
                label="Selected Plate"
                className="md:col-span-2"
              />
            </div>
            <div className="pointer-events-none absolute -left-10 bottom-12 hidden h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(203,80,86,0.3),transparent_70%)] blur-2xl md:block" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function EditorialStrip() {
  const items = [
    "Late-night destination",
    "Immersive red interiors",
    "Editorial cocktail presentation",
    "Asian kitchen",
    "Quiet luxury atmosphere",
    "Curated reservations flow",
  ];

  return (
    <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-5">
      <div className="marquee-track flex whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="mx-6 text-[11px] uppercase tracking-[0.38em] text-white/42 md:mx-10"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Experience"
          title="Luxury that feels cinematic, not crowded."
          copy="The interface now follows the same idea the venue already has in real life: stronger ambience, better pacing, cleaner imagery, and motion that feels expensive rather than busy."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {signatureMoments.map((moment, index) => (
            <motion.article
              key={moment.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.01 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.7 }}
              className="luxe-panel group overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="enhanced-image h-full w-full object-cover transition duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_30%)] opacity-70 transition duration-700 group-hover:opacity-100" />
              </div>
              <div className="relative p-6 md:p-7">
                <div className="text-[10px] uppercase tracking-[0.32em] text-white/42">
                  {moment.eyebrow}
                </div>
                <h3 className="mt-3 font-display text-3xl leading-none text-white md:text-[2.25rem]">
                  {moment.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{moment.copy}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <SectionHeading
            eyebrow="Gallery"
            title="An atmosphere you can feel before you walk in."
            copy="The visual system leans into architecture, ambience, material, and finish, using only the cleanest non-people images so the space remains the hero."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="grid gap-4 md:grid-cols-2"
          >
            {galleryImages.map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -10, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className={`luxe-panel group overflow-hidden ${index === 0 ? "md:col-span-2" : ""}`}
              >
                <div
                  className={`relative overflow-hidden ${index === 0 ? "aspect-[16/9]" : "aspect-[5/6]"}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="enhanced-image h-full w-full object-cover transition duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/10 to-transparent" />
                  <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_28%)]" />
                  <div className="pointer-events-none absolute inset-x-6 top-6 flex items-center justify-between">
                    <div className="rounded-full border border-white/12 bg-black/25 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-white/70 backdrop-blur-xl">
                      Visual Story
                    </div>
                    <div className="rounded-full border border-white/12 bg-black/25 p-2.5 text-white/75 backdrop-blur-xl">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-3xl leading-none text-white">{item.title}</h3>
                    <span className="text-[10px] uppercase tracking-[0.32em] text-white/35">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-3 max-w-md text-sm leading-7 text-white/60">{item.copy}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  const [active, setActive] = useState(0);
  const section = menuSections[active];

  return (
    <section id="menu" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Menu"
          title="A cleaner, more premium way to browse the menu."
          copy="Buttons now work like refined filters instead of generic chips. Each category feels like a chapter with its own pacing, image, and tone."
        />

        <div className="mt-12 flex gap-3 overflow-x-auto pb-2">
          {menuSections.map((sectionItem, index) => (
            <button
              key={sectionItem.label}
              onClick={() => setActive(index)}
              className={`shrink-0 rounded-full border px-5 py-3 text-[11px] uppercase tracking-[0.3em] transition ${
                active === index
                  ? "border-[#e6b5ad] bg-[linear-gradient(180deg,rgba(230,181,173,0.24),rgba(230,181,173,0.08))] text-white shadow-[0_0_0_1px_rgba(230,181,173,0.15)_inset,0_12px_40px_rgba(96,16,24,0.35)]"
                  : "border-white/10 bg-white/[0.03] text-white/55 hover:border-white/18 hover:text-white"
              }`}
            >
              {sectionItem.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={section.label}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]"
          >
            <div className="luxe-panel overflow-hidden">
              <div className="relative aspect-[5/6] overflow-hidden">
                <img
                  src={section.image}
                  alt={section.label}
                  className="enhanced-image h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_30%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <p className="font-script text-4xl text-[#f2c2ba]">{section.script}</p>
                  <h3 className="mt-2 font-display text-4xl leading-none text-white md:text-5xl">
                    {section.label}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-white/62">{section.note}</p>
                </div>
              </div>
            </div>

            <div className="luxe-panel p-6 md:p-8">
              <div className="mb-8 flex items-end justify-between gap-4 border-b border-white/8 pb-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.34em] text-white/38">
                    Current Selection
                  </div>
                  <h3 className="mt-2 font-display text-4xl leading-none text-white md:text-5xl">
                    {section.label}
                  </h3>
                </div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-white/38">
                  Curated View
                </div>
              </div>

              <ul className="space-y-5">
                {section.items.map((dish, index) => (
                  <motion.li
                    key={dish.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    className="group rounded-[1.6rem] border border-white/8 bg-white/[0.03] px-5 py-5 transition hover:border-white/16 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-display text-2xl leading-none text-white transition group-hover:text-[#f3c8c0]">
                            {dish.name}
                          </h4>
                          {dish.tag && (
                            <span className="rounded-full border border-[#e6b5ad]/30 bg-[#e6b5ad]/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.28em] text-[#f2c2ba]">
                              {dish.tag}
                            </span>
                          )}
                        </div>
                        <p className="mt-3 max-w-lg text-sm leading-7 text-white/55">{dish.desc}</p>
                      </div>
                      <div className="font-display text-2xl text-[#f2c2ba] md:text-3xl">
                        ₹{dish.price}
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <LuxeLink
                  href="tel:+918527274562"
                  label="Call To Reserve"
                  icon={<Phone className="h-3.5 w-3.5" />}
                  variant="ghost"
                />
                <LuxeLink
                  href="https://www.zomato.com/ncr/red-vasant-vihar-new-delhi"
                  label="View Listings"
                  variant="muted"
                  external
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="relative px-4 pb-24 pt-24 md:px-8 md:pb-32 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="luxe-panel p-6 md:p-8">
            <SectionHeading
              eyebrow="Visit RED"
              title="Everything important, without unnecessary clutter."
              copy="This section keeps only the details that matter when someone is ready to act: where it is, when it opens, and how to reserve."
            />

            <div className="mt-10 space-y-4">
              {[
                {
                  label: "Address",
                  value:
                    "24, Community Center, Main Market, Basant Lok, Vasant Vihar, New Delhi 110057",
                },
                { label: "Lunch", value: "1 PM - 4 PM" },
                { label: "Dinner", value: "6 PM - 1 AM" },
                { label: "Phone", value: "085272 74562", href: "tel:+918527274562" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-2 rounded-[1.4rem] border border-white/8 bg-white/[0.03] px-5 py-4 md:flex-row md:items-center md:justify-between"
                >
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/38">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm leading-7 text-white/78 transition hover:text-[#f2c2ba]"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="max-w-md text-sm leading-7 text-white/78">{item.value}</div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <LuxeLink
                href="https://maps.google.com/?q=Red+Vasant+Vihar"
                label="Get Directions"
                external
              />
              <LuxeLink
                href="https://www.eazydiner.com/delhi-ncr/red-vasant-vihar-south-delhi-687583"
                label="Reserve"
                icon={<Sparkles className="h-3.5 w-3.5" />}
                variant="muted"
                external
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="luxe-panel overflow-hidden"
          >
            <div className="relative h-full min-h-[520px]">
              <img
                src={loungeImage}
                alt="RED bar ambience"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.76))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_32%)]" />
              <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-[10px] uppercase tracking-[0.34em] text-white/72 backdrop-blur-xl">
                  <span>Reservations</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>

                <div className="max-w-xl">
                  <p className="font-script text-4xl text-[#f2c2ba] md:text-5xl">
                    after dark, done properly
                  </p>
                  <h3 className="mt-3 font-display text-4xl leading-none text-white md:text-6xl">
                    Your premium destination in Vasant Vihar.
                  </h3>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-white/68 md:text-base">
                    The site now drives users toward the actions that matter: reserve, call, get
                    directions, or browse the menu with confidence.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <LuxeLink
                      href="tel:+918527274562"
                      label="Call Now"
                      icon={<Phone className="h-3.5 w-3.5" />}
                    />
                    <LuxeLink
                      href="https://www.instagram.com/red_vasantvihar"
                      label="Instagram"
                      icon={<Instagram className="h-3.5 w-3.5" />}
                      variant="ghost"
                      external
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/8 px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-4">
            <img
              src={logoMark}
              alt="RED logo"
              className="h-12 w-12 rounded-full object-cover ring-1 ring-white/10"
            />
            <div>
              <div className="font-display text-5xl leading-none tracking-[-0.04em] text-white md:text-6xl">
                RED
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.36em] text-white/42">
                Vasant Vihar
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/52">
            A luxury cocktail bar and Asian kitchen shaped around mood, texture, and a stronger
            digital presence.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <LuxeLink href="/contact" label="Contact" variant="ghost" />
          <LuxeLink
            href="tel:+918527274562"
            label="Call"
            icon={<Phone className="h-3.5 w-3.5" />}
            variant="ghost"
          />
          <LuxeLink
            href="https://www.instagram.com/red_vasantvihar"
            label="Instagram"
            icon={<Instagram className="h-3.5 w-3.5" />}
            variant="muted"
            external
          />
        </div>
      </div>
    </footer>
  );
}

function LuxeLink({
  href,
  label,
  icon,
  external,
  variant = "solid",
}: {
  href: string;
  label: string;
  icon?: ReactNode;
  external?: boolean;
  variant?: "solid" | "muted" | "ghost";
}) {
  const styles = {
    solid:
      "border-[#e6b5ad]/35 bg-[linear-gradient(180deg,rgba(230,181,173,0.28),rgba(133,35,42,0.48))] text-white shadow-[0_14px_50px_rgba(117,22,29,0.35)] hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(117,22,29,0.45)]",
    muted:
      "border-white/12 bg-white/[0.05] text-white/80 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]",
    ghost:
      "border-white/10 bg-transparent text-white/70 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.04] hover:text-white",
  }[variant];

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`group inline-flex items-center gap-2 rounded-full border px-5 py-3 text-[11px] uppercase tracking-[0.28em] transition duration-300 will-change-transform ${styles}`}
    >
      {icon ? <span className="text-current/90">{icon}</span> : null}
      <span>{label}</span>
      <ArrowUpRight className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-[10px] uppercase tracking-[0.34em] text-white/38">{eyebrow}</div>
      <h2 className="mt-4 font-display text-4xl leading-[0.92] text-white md:text-6xl">{title}</h2>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-white/58 md:text-base">{copy}</p>
    </div>
  );
}

function DetailPill({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl">
      <div className="flex items-center gap-2 text-[#f2c2ba]">{icon}</div>
      <div className="mt-4 text-[10px] uppercase tracking-[0.3em] text-white/35">{label}</div>
      <div className="mt-2 text-sm text-white/78">{value}</div>
    </div>
  );
}

function ImagePanel({
  image,
  alt,
  label,
  className = "",
}: {
  image: string;
  alt: string;
  label: string;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={`luxe-panel group overflow-hidden ${className}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="enhanced-image h-full w-full object-cover transition duration-700 group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/15 to-transparent" />
        <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_28%)]" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="text-[10px] uppercase tracking-[0.32em] text-white/40">{label}</div>
        </div>
      </div>
    </motion.div>
  );
}

function MobileActionDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-3 rounded-[1.8rem] border border-white/10 bg-[rgba(14,4,6,0.88)] p-3 shadow-[0_-10px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <MobileDockLink
          href="tel:+918527274562"
          label="Call"
          icon={<Phone className="h-5 w-5" />}
        />
        <MobileDockLink
          href="https://www.instagram.com/red_vasantvihar"
          label="Instagram"
          icon={<Instagram className="h-5 w-5" />}
          external
        />
        <MobileDockLink
          href="https://www.eazydiner.com/delhi-ncr/red-vasant-vihar-south-delhi-687583"
          label="Reserve"
          icon={<Sparkles className="h-5 w-5" />}
          external
        />
      </div>
    </div>
  );
}

function MobileDockLink({
  href,
  label,
  icon,
  external,
}: {
  href: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex flex-col items-center justify-center gap-2 rounded-[1.2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-3 py-3 text-white transition active:scale-[0.98]"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b63542]/18 text-[#f2c2ba]">
        {icon}
      </span>
      <span className="text-[10px] uppercase tracking-[0.24em] text-white/72">{label}</span>
    </a>
  );
}

function CursorGlow() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const x = useSpring(mouse.x, { stiffness: 110, damping: 18, mass: 0.6 });
  const y = useSpring(mouse.y, { stiffness: 110, damping: 18, mass: 0.6 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setMouse({ x: event.clientX - 180, y: event.clientY - 180 });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-30 hidden h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(170,32,46,0.18),rgba(170,32,46,0)_68%)] blur-3xl md:block"
      />
      <div className="pointer-events-none fixed inset-0 z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_26%),radial-gradient(circle_at_80%_0%,rgba(188,46,60,0.14),transparent_30%)]" />
    </>
  );
}
