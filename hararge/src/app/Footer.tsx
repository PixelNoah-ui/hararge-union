"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook } from "lucide-react";
import { FaTelegram } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok">("idle");

  const socials = [
    {
      icon: <Facebook className="w-5 h-5" />,
      link: "https://www.facebook.com/profile.php?id=61558169067452",
    },

    {
      icon: <FaTelegram className="w-5 h-5" />,
      link: "https://t.me/+CUlhu5NucikyZWVk",
    },
  ];

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("ok");
      setEmail("");
    }, 800);
  };

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          <div className="md:col-span-1 flex items-start gap-4">
            <Image
              src="/logo.png"
              alt="Hararge logo"
              width={48}
              height={48}
              className="object-contain rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold">Hararge Student Union</h3>
              <p className="mt-1 text-sm text-gray-400">
                Student-led community, events, advocacy and leadership programs.
              </p>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-semibold">Quick links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-semibold">Contact</h4>
            <p className="mt-3 text-sm text-gray-400">
              Phone:{" "}
              <a className="text-gray-200" href="tel:+251912345678">
                +251 911477218
              </a>
            </p>
            <p className="mt-1 text-sm text-gray-400">
              Email:{" "}
              <a className="text-gray-200" href="mailto:pixelnoah@gmail.com">
                pixelnoah@gmail.com
              </a>
            </p>
            <div className="mt-4 flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-semibold">Stay informed</h4>
            <p className="mt-2 text-sm text-gray-400">
              Subscribe for event updates and opportunities.
            </p>

            <form onSubmit={subscribe} className="mt-3 flex gap-2">
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@school.edu"
                className="w-full rounded-md bg-gray-800 border border-gray-700 px-3 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:brightness-95"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Subscribe"}
              </button>
            </form>
            {status === "ok" && (
              <p className="mt-2 text-sm text-green-400">
                Thanks — you are subscribed.
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} Hararge Student Union. All rights
            reserved.
          </div>
          <div>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-gray-200 mr-4"
            >
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-gray-200">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
