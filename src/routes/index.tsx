import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import int1 from "@/assets/red-int-1.jpg";
import int2 from "@/assets/red-int-2.jpg";
import int3 from "@/assets/red-int-3.jpg";
import int4 from "@/assets/red-int-4.jpg";
import int5 from "@/assets/red-int-5.jpg";
import int6 from "@/assets/red-int-6.jpg";
import food1 from "@/assets/red-photo-1.jpg";
import food2 from "@/assets/red-photo-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RED Vasant Vihar | Pan-Asian Restaurant in Basant Lok, New Delhi" },
      {
        name: "description",
        content:
          "RED Vasant Vihar is a Pan-Asian restaurant in Basant Lok, New Delhi. View the menu, hours, address, phone number, reservations links, and Instagram profile.",
      },
      {
        name: "keywords",
        content:
          "RED Vasant Vihar, RED Basant Lok, Pan-Asian restaurant Vasant Vihar, Basant Lok restaurant, RED menu, RED contact, RED reservations",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#551b1f" },
      { property: "og:title", content: "RED Vasant Vihar" },
      {
        property: "og:description",
        content:
          "Pan-Asian restaurant in Basant Lok, Vasant Vihar, New Delhi. Address, hours, menu sections, contact details, and reservations links.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: food1 },
      { property: "og:site_name", content: "RED Vasant Vihar" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "RED Vasant Vihar" },
      {
        name: "twitter:description",
        content:
          "Pan-Asian restaurant in Basant Lok, Vasant Vihar, New Delhi. Menu, hours, phone number, and reservations.",
      },
      { name: "twitter:image", content: food1 },
    ],
  }),
  component: Index,
});

const img1 = int1;
const img3 = int4;
const photos = [int1, int2, int3, int5, int6, food1, food2];

function Index() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md"
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
              "A modern-day restaurant inspired by Robatayaki and global cuisine, serving food and beverages with a natural charcoal aroma.",
            telephone: "+918527274562",
            address: {
              "@type": "PostalAddress",
              streetAddress: "24, Community center, Main Market, Basant Lok",
              addressLocality: "Vasant Vihar",
              addressRegion: "New Delhi, Delhi",
              postalCode: "110057",
              addressCountry: "IN",
            },
            servesCuisine: ["Pan-Asian"],
            priceRange: "₹2,000+",
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
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.4",
              reviewCount: "175",
            },
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
          <Marquee />
          <About />
          <Gallery />
          <Menu />
          <Visit />
        </main>
        <Footer />
        <CursorGlow />
      </div>
    </>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-5 md:px-10 py-4 flex items-center justify-between backdrop-blur-md bg-background/30 border-b border-border/40">
      <a href="#top" className="font-display text-2xl tracking-[0.3em] neon" aria-label="RED Home">
        RED
      </a>
      <nav className="hidden md:flex gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <a href="#about" className="hover:text-accent transition">
          About
        </a>
        <a href="#gallery" className="hover:text-accent transition">
          Gallery
        </a>
        <a href="#menu" className="hover:text-accent transition">
          Menu
        </a>
        <a href="#visit" className="hover:text-accent transition">
          Visit
        </a>
        <a href="/contact" className="hover:text-accent transition">
          Contact
        </a>
      </nav>
      <div className="hidden md:flex gap-3">
        <a
          href="https://www.instagram.com/red_vasantvihar"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] border border-border/60 text-muted-foreground px-4 py-2 rounded-full hover:border-accent hover:text-accent transition"
          aria-label="Instagram"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
          </svg>
          Instagram
        </a>
        <a
          href="https://www.eazydiner.com/delhi-ncr/red-vasant-vihar-south-delhi-687583"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] border border-accent/60 text-accent px-4 py-2 rounded-full hover:bg-accent hover:text-accent-foreground transition"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
          </svg>
          Reserve
        </a>
      </div>
      <button onClick={() => setOpen(!open)} className="md:hidden text-accent" aria-label="Toggle menu">
        <div className="w-6 h-px bg-current mb-1.5" />
        <div className="w-6 h-px bg-current mb-1.5" />
        <div className="w-4 h-px bg-current ml-auto" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border md:hidden"
          >
            <div className="flex flex-col p-6 gap-4 font-display text-2xl">
              {[
                ["About", "#about"],
                ["Gallery", "#gallery"],
                ["Menu", "#menu"],
                ["Visit", "#visit"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-border/40 pb-3">
                  {label}
                </a>
              ))}
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
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative h-screen min-h-[640px] overflow-hidden flex items-center justify-center">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img src={img1} alt="RED Vasant Vihar interior" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-script text-3xl md:text-5xl text-accent mb-4"
        >
          it can be any colour
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-display text-[22vw] md:text-[18rem] leading-[0.85] tracking-tighter neon"
        >
          RED
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="font-script text-3xl md:text-5xl text-accent mt-2"
        >
          as long as it&apos;s red.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground"
        >
          <span>Pan-Asian Restaurant</span>
          <span className="text-accent">·</span>
          <span>Basant Lok</span>
          <span className="text-accent">·</span>
          <span>Vasant Vihar</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Dim Sums",
    "★",
    "Sushi",
    "★",
    "Crispy Noodles",
    "★",
    "Cocktails",
    "★",
    "Live Music",
    "★",
    "Wi-Fi",
    "★",
  ];

  return (
    <div className="overflow-hidden border-y border-border/40 py-6 bg-card/30">
      <div className="flex marquee-track whitespace-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <span key={index} className="font-display text-3xl md:text-5xl mx-8 text-accent/80 italic">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <p className="font-script text-4xl text-accent mb-4">about red</p>
          <h2 className="font-display text-5xl md:text-7xl leading-none mb-8">
            A modern-day
            <br />
            restaurant.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl">
            A modern-day restaurant that pays homage to the age-old culinary traditions of Japanese fishermen.
            Inspired by Robatayaki, a method of cooking over hot charcoal with global cuisine, RED combines
            seasonal and local produce with artisan skill to offer food and beverages with a natural charcoal
            aroma.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-xl">
            From flame meat to seafood skewers to smoked appetisers, the robata grills are used to serve a
            diverse range of shareable plates, as well as different drinks with smoked ingredients.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            {[
              ["4.4", "Google Rating"],
              ["175", "Google Reviews"],
              ["6.3K+", "Instagram Followers"],
            ].map(([value, label]) => (
              <div key={label} className="border border-border/40 rounded p-3">
                <div className="font-display text-2xl text-accent">{value}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <motion.div style={{ y: yImg }} className="relative aspect-[3/4] overflow-hidden rounded-sm">
          <img src={img3} alt="RED Vasant Vihar booth seating" className="w-full h-full object-cover" />
          <div className="absolute inset-0 ring-1 ring-accent/30 mix-blend-overlay" />
        </motion.div>
      </div>
    </section>
  );
}

function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const positions = [
    { top: "5%", left: "5%", rotate: -6, w: "min(60vw, 280px)" },
    { top: "10%", left: "55%", rotate: 4, w: "min(55vw, 260px)" },
    { top: "45%", left: "30%", rotate: -2, w: "min(65vw, 320px)" },
    { top: "55%", left: "5%", rotate: 5, w: "min(50vw, 240px)" },
    { top: "60%", left: "60%", rotate: -8, w: "min(50vw, 230px)" },
  ];

  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden">
      <div className="text-center px-6 mb-10 md:mb-16">
        <p className="font-script text-4xl text-accent">gallery</p>
        <h2 className="font-display text-5xl md:text-7xl mt-2">Inside RED.</h2>
      </div>

      <div ref={containerRef} className="relative h-[600px] md:h-[700px] mx-4 md:mx-12 dotted-bg rounded-lg border border-border/40 overflow-hidden">
        {positions.map((position, index) => (
          <motion.div
            key={index}
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            whileDrag={{ scale: 1.05, zIndex: 30, rotate: 0 }}
            initial={{ opacity: 0, scale: 0.8, rotate: position.rotate }}
            whileInView={{ opacity: 1, scale: 1, rotate: position.rotate }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring" }}
            style={{ top: position.top, left: position.left, width: position.w }}
            className="absolute cursor-grab active:cursor-grabbing bg-card p-2 pb-8 shadow-2xl"
          >
            <img src={photos[index]} alt="" draggable={false} className="w-full aspect-[4/5] object-cover pointer-events-none" />
            <p className="font-script text-accent text-center text-xl mt-1">red.{String(index + 1).padStart(2, "0")}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

type Dish = { name: string; desc: string; price: string; tag?: string };

const menuSections: { label: string; script: string; items: Dish[] }[] = [
  {
    label: "Snackers",
    script: "to begin",
    items: [
      { name: "Crackling Spinach", desc: "sesame, thai chilli", price: "225" },
      {
        name: "Mushroom & Truffle Roll",
        desc: "king oyster mushroom, ginger, chives & truffle oil",
        price: "575",
        tag: "★",
      },
      { name: "Charred Corn Ribs", desc: "paprika butter, yuzu sauce", price: "375" },
      { name: "Garlic King Prawns", desc: "sichuan chilli, sweet pepper", price: "725" },
    ],
  },
  {
    label: "Dimsums",
    script: "the heart",
    items: [
      { name: "Edamame & Truffle", desc: "steamed Japanese beans with truffle oil", price: "525" },
      { name: "Cream Cheese", desc: "cream cheese with shitake mushroom & pinenuts", price: "525" },
      { name: "Har Gow Prawn", desc: "classic prawn dim sum, sesame oil and fish roe", price: "525" },
      { name: "Chicken Kung Bao", desc: "spicy chicken with chilli mayo", price: "475" },
    ],
  },
  {
    label: "Sushi",
    script: "from the sea",
    items: [
      { name: "Tempura Asparagus & Cucumber", desc: "kewpie mayo, teriyaki sauce", price: "695" },
      { name: "Crab and Tuna", desc: "avocado, spicy kewpie mayo", price: "825", tag: "★" },
      { name: "Dynamite Shrimp Taco", desc: "fried shrimp, chilli mayo, wasabi & kikkoman soy", price: "825" },
    ],
  },
  {
    label: "From the Wok",
    script: "fire & smoke",
    items: [
      { name: "Wok Tossed Asparagus", desc: "butter garlic sauce", price: "525" },
      { name: "Roasted Pork Ribs", desc: "plum sauce, steamed pancake, scallion, cucumber", price: "795", tag: "★" },
      { name: "Xinjiang Cumin Lamb", desc: "cumin, onion, coriander", price: "725" },
      { name: "Sichuan Chilli Chicken", desc: "dried red chilli, sichuan peppercorn", price: "525" },
    ],
  },
  {
    label: "Sharing Plates",
    script: "all the red you need",
    items: [
      { name: "Hong Kong Clay Pot Rice", desc: "steamed jasmine rice, seasonal greens, mushroom", price: "695" },
      { name: "Nasi Goreng", desc: "chicken / prawns", price: "795" },
      { name: "Hong Kong Crispy Noodle", desc: "seasonal veg & shitake / chicken / prawn", price: "695" },
      { name: "Dan Dan Noodles", desc: "served with peanut broth & sichuan pickle chilli", price: "695" },
    ],
  },
  {
    label: "Sweet Sweet",
    script: "the encore",
    items: [
      { name: "Oreo Cheese Cake", desc: "white chocolate, cream cheese", price: "425" },
      { name: "Pistachio Chocolate Paradise", desc: "truffle, cream cheese, biscoff", price: "525", tag: "★" },
      { name: "Panna Cotta", desc: "mandarin panna", price: "375" },
    ],
  },
];

function Menu() {
  const [active, setActive] = useState(0);
  const section = menuSections[active];

  return (
    <section id="menu" className="relative py-24 md:py-32 px-5 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-script text-4xl text-accent">the menu</p>
          <h2 className="font-display text-5xl md:text-7xl mt-2">Selected Dishes.</h2>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-3 -mx-5 px-5 md:justify-center scrollbar-thin mb-10">
          {menuSections.map((sectionItem, index) => (
            <button
              key={sectionItem.label}
              onClick={() => setActive(index)}
              className={`shrink-0 px-5 py-2 rounded-full border text-xs uppercase tracking-[0.2em] transition ${
                active === index
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border/60 text-muted-foreground hover:border-accent/60 hover:text-accent"
              }`}
            >
              {sectionItem.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-card/40 backdrop-blur border border-border/40 rounded-lg p-6 md:p-12"
          >
            <div className="text-center mb-8 border-b border-border/40 pb-6">
              <p className="font-script text-3xl text-accent">{section.script}</p>
              <h3 className="font-display text-4xl md:text-5xl italic">{section.label}</h3>
            </div>

            <ul className="space-y-6">
              {section.items.map((dish, index) => (
                <motion.li
                  key={dish.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="group flex gap-4 items-baseline border-b border-dashed border-border/30 pb-4"
                >
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      {dish.tag && <span className="text-accent text-xs">{dish.tag}</span>}
                      <h4 className="font-display text-xl md:text-2xl group-hover:text-accent transition">
                        {dish.name}
                      </h4>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">{dish.desc}</p>
                  </div>
                  <div className="font-display text-xl md:text-2xl text-accent tabular-nums">₹{dish.price}</div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        <p className="text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70 mt-8">
          all prices exclusive of taxes
        </p>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="relative py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-script text-4xl text-accent">visit</p>
          <h2 className="font-display text-5xl md:text-7xl mt-2">Plan Your Visit.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div whileHover={{ y: -4 }} className="bg-card/50 border border-border/40 rounded-lg p-8">
            <p className="font-script text-2xl text-accent mb-2">address</p>
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
              Open in Maps
            </a>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="bg-card/50 border border-border/40 rounded-lg p-8">
            <p className="font-script text-2xl text-accent mb-2">details</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex justify-between gap-4">
                <span className="uppercase tracking-[0.2em]">Hours</span>
                <span className="text-right text-foreground">Open · Closes 1 am</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="uppercase tracking-[0.2em]">Lunch</span>
                <span className="text-right text-foreground">1 PM - 4 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="uppercase tracking-[0.2em]">Dinner</span>
                <span className="text-right text-foreground">6 PM - 1 AM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="uppercase tracking-[0.2em]">Phone</span>
                <a href="tel:+918527274562" className="text-right text-foreground hover:text-accent transition">
                  085272 74562
                </a>
              </li>
              <li className="flex justify-between gap-4">
                <span className="uppercase tracking-[0.2em]">Price</span>
                <span className="text-right text-foreground">₹2,000+</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="uppercase tracking-[0.2em]">Service</span>
                <span className="text-right text-foreground">Reservations required</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="uppercase tracking-[0.2em]">Features</span>
                <span className="text-right text-foreground">Live music · Wi-Fi</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              <a href="tel:+918527274562" className="text-xs uppercase tracking-[0.2em] bg-primary text-primary-foreground px-4 py-2 rounded-full">
                Call
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 px-6 text-center">
      <p className="font-display text-6xl md:text-8xl neon">RED</p>
      <p className="font-script text-2xl text-accent mt-2">Vasant Vihar</p>
      <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mt-6">
        Basant Lok · New Delhi · @red_vasantvihar
      </p>

      <div className="flex justify-center gap-4 mt-6">
        <a
          href="https://www.instagram.com/red_vasantvihar"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full border border-accent/60 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition group"
          aria-label="Instagram"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
          </svg>
        </a>
        <a
          href="https://www.zomato.com/ncr/red-vasant-vihar-new-delhi"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full border border-accent/60 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition"
          aria-label="Zomato"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm-1 11.5h-2v-2h2v2zm0-3.5h-2v-4h2v4z" />
          </svg>
        </a>
        <a
          href="https://www.eazydiner.com/delhi-ncr/red-vasant-vihar-south-delhi-687583"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full border border-accent/60 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition"
          aria-label="EazyDiner"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
          </svg>
        </a>
        <a
          href="https://www.district.in/dining/ncr/red-vasant-vihar-new-delhi"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full border border-accent/60 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition"
          aria-label="District by Zomato"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </a>
        <a
          href="tel:+918527274562"
          className="w-12 h-12 rounded-full border border-accent/60 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition"
          aria-label="Phone"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
      </div>

      <div className="mt-8 pt-8 border-t border-border/40">
        <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <a href="/privacy" className="hover:text-accent transition">
            Privacy
          </a>
          <a href="/terms" className="hover:text-accent transition">
            Terms
          </a>
          <a href="/contact" className="hover:text-accent transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

function CursorGlow() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const x = useSpring(mouse.x, { stiffness: 120, damping: 20 });
  const y = useSpring(mouse.y, { stiffness: 120, damping: 20 });

  if (typeof window !== "undefined") {
    window.onmousemove = (event) => setMouse({ x: event.clientX - 160, y: event.clientY - 160 });
  }

  return (
    <motion.div
      style={{ x, y }}
      className="pointer-events-none fixed top-0 left-0 z-30 h-80 w-80 rounded-full bg-primary/10 blur-3xl hidden md:block"
    />
  );
}
