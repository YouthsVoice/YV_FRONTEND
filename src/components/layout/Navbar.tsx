"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/constants/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/">
            <div className="text-2xl font-bold text-primary">
              <Image src="/logo/YV.webp" alt="YV LOGO" width={200} height={100} />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button className="bg-primary cursor-pointer text-white px-5 py-2 rounded-xl">
              Donate
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            <Menu size={28} />
          </button>
        </div>

        {open && (
          <div className="lg:hidden py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}