"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-brown text-cream fixed top-0 w-full z-50 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/assets/logo-kopi.png" className="w-8 h-8" />
          <span className="font-ribeye font-bold text-lg">
            THE RETRO BEAN CAFE
          </span>
        </div>

        <div className="hidden md:flex gap-6 font-tinos text-lg">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="flex flex-col mt-4 gap-3 md:hidden font-tinos">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}
