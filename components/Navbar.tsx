"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm font-semibold tracking-tight"
        >
          TG
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="p-2"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
