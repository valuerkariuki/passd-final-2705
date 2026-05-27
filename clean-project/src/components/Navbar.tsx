"use main"
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Landmark } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 font-black text-lg tracking-tight hover:opacity-90 transition">
          <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950">
            <Landmark className="w-4 h-4" />
          </div>
          <span>PASSD<span className="text-amber-400">.NET</span></span>
        </Link>

        {/* DESKTOP MATRIX LINK CONFIGURATION */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-300">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/about" className="hover:text-white transition">About Us</Link>
          <a href="#packages" className="hover:text-white transition">Packages</a>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
          <Link href="/apply-for-counsellor" className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg transition">
            Get a Counsellor
          </Link>
        </div>

        {/* MOBILE RESPONSIVE HAMBURGER ACTION */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-slate-300 hover:text-white">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-6 space-y-4 flex flex-col text-sm font-bold tracking-wide">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white">Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white">About Us</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white">Contact Us</Link>
          <Link href="/apply-for-counsellor" onClick={() => setMenuOpen(false)} className="w-full text-center py-2.5 bg-amber-500 text-slate-950 rounded-xl block">
            Get a Counsellor
          </Link>
        </div>
      )}
    </nav>
  );
}