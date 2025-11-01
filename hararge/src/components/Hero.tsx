"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Welcome Hararge Students to University Life",
    subtitle:
      "Begin your academic journey where knowledge meets opportunity. At Hararge University, students from every corner of the zone come together to learn, grow, and lead change.",
    image: "/hero/hararge1.png",
    buttonText: "Start Your Journey",
    accent: "Pride of Hararge",
  },
  {
    id: 2,
    title: "Empowering the Next Generation of Innovators",
    subtitle:
      "We nurture ambition and creativity — providing world-class education, hands-on research, and an environment that inspires success and community impact.",
    image: "/hero/hararge2.png",
    buttonText: "Explore Programs",
    accent: "Education • Innovation • Excellence",
  },
  {
    id: 3,
    title: "Building the Future Together",
    subtitle:
      "Join thousands of bright minds shaping the future of Hararge and Ethiopia. From campus to community — your dreams start here.",
    image: "/hero/hararge3.png",
    buttonText: "Join Us Today",
    accent: "Together We Grow",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const bgImage = slides[current].image || "/hero/default-hero.jpg";

  return (
    <div className="relative h-[90vh] overflow-hidden bg-[#0b0b0b]">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center space-y-6 px-8">
            <motion.span
              key={slides[current].accent}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="text-blue-300 text-lg font-semibold tracking-widest uppercase"
            >
              {slides[current].accent}
            </motion.span>

            <motion.h2
              key={slides[current].title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg"
            >
              {slides[current].title}
            </motion.h2>

            <motion.p
              key={slides[current].subtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="max-w-2xl text-lg leading-relaxed text-gray-200"
            >
              {slides[current].subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button asChild>
                <Link
                  href="/signup"
                  className="bg-primary rounded-none px-8 py-6"
                >
                  {slides[current].buttonText}
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              current === index
                ? "bg-primary scale-110 ring-2 ring-white"
                : "bg-gray-400/70 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
