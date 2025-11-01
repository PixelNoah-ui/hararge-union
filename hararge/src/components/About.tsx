"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full  py-20  border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <Image
            src="/logo.png"
            alt="Hararge University Students"
            width={600}
            height={400}
            className=" shadow-xl rounded-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 space-y-5"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Empowering Hararge Students to Succeed at Jimma university
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This platform is built by senior students of{" "}
            <span className="font-semibold text-primary">Jimma University</span>{" "}
            to guide, support, and inspire new students joining our academic
            community. We understand the challenges of starting university life
            — and we’re here to make your journey easier.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From navigating campus life and understanding academic processes to
            discovering opportunities for growth, our goal is to help every
            Hararge student feel confident, connected, and ready to thrive.
          </p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="pt-2"
          >
            <Link href="/signup">
              <Button className="px-6 py-6 cursor-pointer">
                Join the Community
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
