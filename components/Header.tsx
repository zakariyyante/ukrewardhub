"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-32 h-12">
            <Image
              src="/ukrewardhub.png"
              alt="UK Reward Hub Logo"
              fill
              className="object-contain object-left"
            />
          </div>
          <div className="hidden sm:flex flex-col border-l border-white/10 pl-4">
            <span className="text-white font-black text-xl tracking-tighter">
              UKREWARDHUB<span className="text-primary">.COM</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold leading-none">
              PREMIER CASINO HUB
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link href="/#brands" className="text-sm font-medium hover:text-primary transition-colors">Brands</Link>
          <Link href="/#guide" className="text-sm font-medium hover:text-primary transition-colors">Guide</Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About Us</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact Us</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-card-bg border-b border-white/10 py-4 px-4 flex flex-col gap-4">
          <Link href="/" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/#brands" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Brands</Link>
          <Link href="/#guide" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Guide</Link>
          <Link href="/about" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link href="/contact" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}
