// ================= IMPORTS =================
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { motion } from "framer-motion";

// ================= ASSETS =================
// Hero Section Images
import slide_1_image from "/src/assets/hero-slide-1.webp";
import slide_2_image from "/src/assets/hero-slide-1.webp";
import slide_3_image from "/src/assets/hero-slide-1.webp";
// Featured Collections Images
import rose_cat from "/src/assets/roses-1.webp";
import lillies_cat from "/src/assets/roses-1.webp";
import orchid_cat from "/src/assets/roses-1.webp";

// About Section Image
import know_more from "/src/assets/know-more-1.webp";

// ================= HERO SLIDES DATA =================
type SlideItem = {
  name: string;
  desc: string;
  price: string;
  emoji: string;
  oldPrice?: string; // ✅ optional everywhere
};

type Slide = {
  id: number;
  title: string;
  description: string;
  price: string;
  featured: string;
  image: string;
  imageSize?: { width: number; height: number };
  promo: {
    title: string;
    discount: string;
    subtitle: string;
  };
  items: SlideItem[];
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Bloom & Bliss",
    description:
      "Where flowers speak the language of love. Handcrafted arrangements featuring the finest blooms, sourced with care and arranged with artistry. Each bouquet tells your unique story.",
    price: "From $45.00",
    featured: "Featured Collection",
    image: slide_1_image,
    imageSize: { width: 1200, height: 800 },
    promo: {
      title: "Seasonal Special",
      discount: "- 15% Off",
      subtitle: "Spring collection available now",
    },
    items: [
      {
        name: "Rose Bouquet",
        desc: "Classic elegance",
        oldPrice: "$65",
        price: "$55",
        emoji: "🌹",
      },
      {
        name: "Spring Mix",
        desc: "Seasonal favorites",
        price: "$42",
        emoji: "🌸",
      },
    ],
  },
  {
    id: 2,
    title: "Luxury Blooms",
    description:
      "Indulge in our premium flower arrangements designed to elevate every occasion with timeless beauty and charm.",
    price: "From $60.00",
    featured: "Luxury Collection",
    image: slide_2_image,
    promo: {
      title: "Exclusive Offer",
      discount: "Free Delivery",
      subtitle: "On all premium orders",
    },
    items: [
      {
        name: "Orchid Elegance",
        desc: "Luxury statement",
        price: "$120",
        emoji: "🌺",
      },
      {
        name: "Peony Perfection",
        desc: "Soft & elegant",
        price: "$95",
        emoji: "💮",
      },
    ],
  },
  {
    id: 3,
    title: "Pure Lilies",
    description:
      "Serene beauty for peaceful moments, crafted with elegance and care.",
    price: "From $40.00",
    featured: "Nature Collection",
    image: slide_3_image,
    promo: {
      title: "New Arrival",
      discount: "10% Off",
      subtitle: "This week only",
    },
    items: [
      { name: "Lily Charm", desc: "Peaceful vibes", price: "$48", emoji: "🌼" },
      {
        name: "White Lily Mix",
        desc: "Serene and soft",
        price: "$58",
        emoji: "🌿",
      },
    ],
  },
];

// ================= MAIN COMPONENT =================
const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-slide rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[activeSlide];

  // Featured collections
  const featuredCollections = [
    {
      title: "Romantic Roses",
      description: "Timeless elegance in soft pink and cream",
      image: rose_cat,
      link: "/#",
    },
    {
      title: "Pure Lilies",
      description: "Serene beauty for peaceful moments",
      image: lillies_cat,
      link: "/#",
    },
    {
      title: "Exotic Orchids",
      description: "Sophisticated grace for special occasions",
      image: orchid_cat,
      link: "/#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* ================= HEADER ================= */}
      <Header />
      <main>
        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden bg-background min-h-screen flex items-center animate-fadeIn">
          {/* Floating petals */}
          <div className="absolute inset-0 pointer-events-none opacity-30 hidden md:block">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="petal animate-petal-fall"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${12 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Hero Left Content */}
              <div className="lg:col-span-4 space-y-6 text-center lg:text-left order-2 lg:order-1 animate-slideInLeft">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  {current.title.split(" ")[0]}{" "}
                  <span className="text-primary block animate-bloom">
                    {current.title.split(" ")[1]}
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0 animate-fadeIn delay-300">
                  {current.description}
                </p>

                {/* Price and Featured Tag */}
                <div className="space-y-2 animate-fadeIn delay-500">
                  <div className="text-2xl font-heading font-bold text-foreground">
                    {current.price}
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2 text-lg text-muted-foreground">
                    <span className="font-bold text-foreground">
                      {String(current.id).padStart(2, "0")}
                    </span>
                    <span>/</span>
                    <span>{current.featured}</span>
                  </div>
                </div>

                {/* Hero Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center lg:justify-start animate-fadeIn delay-700">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full w-full sm:w-auto hover:scale-105 transition-transform duration-300"
                  >
                    <Link to="/#">Browse Flowers</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full w-full sm:w-auto hover:scale-105 transition-transform duration-300"
                  >
                    <Link to="/#">Create Bouquet</Link>
                  </Button>
                </div>
              </div>

              {/* Hero Center Image */}
              <div className="lg:col-span-4 flex justify-center order-1 lg:order-2 animate-float">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain drop-shadow-lg"
                />
              </div>

              {/* Hero Right Sidebar */}
              <div className="lg:col-span-4 space-y-4 order-3 animate-slideInRight">
                {/* Promo Card */}
                <Card className="bg-primary/10 border-primary/20 shadow-soft hover:shadow-bloom transition-all duration-500">
                  <CardContent className="p-4 sm:p-6 text-center lg:text-left space-y-2">
                    <h3 className="font-heading text-xl font-semibold text-primary">
                      {current.promo.title}
                    </h3>
                    <p className="text-lg text-primary/80 font-medium">
                      {current.promo.discount}
                    </p>
                    <p className="text-base text-muted-foreground">
                      {current.promo.subtitle}
                    </p>
                  </CardContent>
                </Card>

                {/* Slide Thumbnails */}
                <div className="space-y-3 animate-fadeIn delay-700">
                  {slides.map((slide, idx) => (
                    <Card
                      key={slide.id}
                      onClick={() => setActiveSlide(idx)}
                      className={`cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                        activeSlide === idx
                          ? "ring-2 ring-primary shadow-bloom"
                          : "bg-card"
                      }`}
                    >
                      <CardContent className="p-3 sm:p-4 flex items-center space-x-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-2xl animate-bloom">
                          {slide.items[0].emoji}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-base truncate">
                            {slide.items[0].name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {slide.items[0].desc}
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          {slide.items[0].oldPrice && (
                            <p className="text-sm text-muted-foreground line-through">
                              {slide.items[0].oldPrice}
                            </p>
                          )}
                          <p className="font-semibold text-primary text-base">
                            {slide.items[0].price}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Mobile Navigation Dots */}
                <div className="flex justify-center space-x-2 pt-2 sm:pt-4 lg:hidden">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeSlide === idx
                          ? "bg-primary scale-125"
                          : "bg-muted hover:bg-primary/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURED COLLECTIONS ================= */}

        <section className="py-12 sm:py-16 lg:py-20 bg-background relative overflow-hidden">
          {/* Floating background shapes */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <motion.div
              className="absolute top-10 left-1/4 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply blur-3xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="absolute bottom-10 right-1/3 w-56 h-56 bg-purple-300 rounded-full mix-blend-multiply blur-3xl"
              animate={{ y: [0, 25, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center space-y-3 sm:space-y-4 mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
                Featured Collections
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Discover our carefully curated seasonal arrangements and
                trending bouquets
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredCollections.map((collection, idx) => (
                <Link key={collection.title} to={collection.link}>
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: idx * 0.2,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03, y: -4 }}
                  >
                    <Card className="flower-card group cursor-pointer border-0 shadow-soft bg-card-gradient h-full overflow-hidden relative transition-all duration-700 ease-out">
                      <CardContent className="p-0 h-full flex flex-col items-center relative z-10">
                        {/* Image Container */}
                        <div className="relative flex justify-center items-center pt-8 sm:pt-12 w-full">
                          <motion.div
                            className="absolute w-24 h-24 sm:w-32 sm:h-32 bg-pink-200 rounded-full opacity-40 z-0"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          ></motion.div>
                          <motion.img
                            src={collection.image}
                            alt={collection.title}
                            className="w-32 sm:w-40 lg:w-48 h-auto object-contain z-10"
                            whileHover={{ scale: 1.1, y: -5 }}
                            transition={{ type: "spring", stiffness: 200 }}
                          />
                        </div>

                        {/* Collection Content */}
                        <div className="p-4 sm:p-6 space-y-2 sm:space-y-3 text-center">
                          <h3 className="font-heading text-xl sm:text-2xl font-semibold">
                            {collection.title}
                          </h3>
                          <p className="text-lg text-muted-foreground">
                            {collection.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ABOUT US ================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative w-full h-80 sm:h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={know_more}
                  alt="Our team creating floral arrangements"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-6 lg:space-y-8"
              >
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Know More <span className="text-primary">About Us</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  At{" "}
                  <span className="font-semibold text-primary">
                    Bloom & Bliss
                  </span>
                  , we believe flowers are more than just gifts – they are
                  emotions wrapped in petals. Our journey started with a passion
                  for creating moments of happiness through the timeless beauty
                  of nature.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Every bouquet is crafted with care, love, and artistry by our
                  expert florists. Whether it’s celebrating love, friendship, or
                  simply brightening someone’s day, we’re here to make it
                  unforgettable.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-6 sm:px-8 py-4 sm:py-6"
                >
                  <Link to="/#">Learn More</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default Index;
