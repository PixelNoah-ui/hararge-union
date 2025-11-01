"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Building2,
  HeartHandshake,
  Trophy,
  GraduationCap,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      title: "Academic Excellence",
      desc: "Comprehensive academic programs and guidance to help students reach their full potential.",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Student Community",
      desc: "A diverse and inclusive environment where students from all zones come together to learn and grow.",
    },
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "Modern Facilities",
      desc: "Access to libraries, labs, and technology centers designed to support innovation and creativity.",
    },
    {
      icon: <HeartHandshake className="w-12 h-12 text-primary" />,
      title: "Support & Mentorship",
      desc: "Guidance from senior students, academic advisors, and professional mentors throughout your journey.",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      title: "Clubs & Activities",
      desc: "Join student-led clubs, cultural associations, and events that enhance campus life and leadership skills.",
    },
    {
      icon: <Trophy className="w-12 h-12 text-primary" />,
      title: "Career Development",
      desc: "Workshops, internships, and training opportunities to prepare you for life after graduation.",
    },
  ];

  return (
    <section className=" py-20">
      <div className="max-w-7xl space-y-6 mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary ">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-8 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-blue-100 rounded-full p-5 mb-5 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-stone-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
