"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Facebook, Twitter } from "lucide-react";
import { FaTelegram } from "react-icons/fa";
import Link from "next/link";

export default function ContactPage() {
  const contactInfo = [
    {
      id: 1,
      icon: (
        <div className="flex items-center space-x-3">
          <Facebook className="h-8 w-8 text-primary" />
          <Twitter className="h-8 w-8 text-primary" />
          <FaTelegram className="h-8 w-8 text-primary" />
        </div>
      ),
      title: "FOLLOW US",
      text: "Stay connected — events, news and community highlights.",
      info: null,
      social: true,
    },
    {
      id: 2,
      icon: <Phone className="h-10 w-10 text-primary" />,
      title: "CALL US",
      text: "Office hours: Mon—Fri, 9:00 — 17:00",
      info: "+251 911477218",
    },
    {
      id: 3,
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: "EMAIL",
      text: "For general inquiries, events and membership:",
      info: "pixelnoah8@gmail.com",
    },
  ];

  return (
    <section className="flex min-h-screen flex-col items-center bg-[#FAF7F2]">
      <div className="relative flex h-72 w-full flex-col items-center justify-center bg-gradient-to-r from-[#1E3A8A] to-[#0EA5A4] text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-2 text-5xl font-bold tracking-tight text-white"
        >
          Hararge Student Union — Contact
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-md text-center text-sm text-gray-200"
        >
          Have a question, idea, or want to volunteer? Drop us a message or
          connect on social — we are here to support Hararge students.
        </motion.p>
      </div>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 px-6 py-20 md:grid-cols-3">
        {contactInfo.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center  bg-white p-8 text-center shadow-md hover:shadow-lg"
          >
            {item.icon}
            <h2 className="mt-4 text-lg font-bold text-gray-800">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-gray-500">{item.text}</p>

            {item.social ? (
              <div className="mt-4 flex flex-col items-center space-y-2">
                <Link
                  href="https://www.facebook.com/profile.php?id=61558169067452"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <Facebook className="h-5 w-5 text-blue-600" />
                  <span>@HarargeUnion</span>
                </Link>
                <Link
                  href="https://t.me/+CUlhu5NucikyZWVk"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <FaTelegram className="h-5 w-5 text-sky-500" />
                  <span>@HarargeSU</span>
                </Link>
              </div>
            ) : (
              <p className="mt-3 font-semibold text-primary">{item.info}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
