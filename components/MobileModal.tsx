"use client";

import { useEffect, useState } from "react";
import { brands } from "@/app/data/brands";
import BrandCard from "./BrandCard";
import Header from "./Header";
import Hero from "./Hero";
import Disclaimer from "./Disclaimer";
import Footer from "./Footer";

interface MobileModalProps {
  gclid?: string;
}

export default function MobileModal({ gclid }: MobileModalProps) {
  const [isOpen, setIsOpen] = useState(!!gclid && brands.some(b => b.isMobile));

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const mobileBrands = brands.filter(b => b.isMobile);

  return (
    <div className="fixed inset-0 z-[100] bg-background overflow-y-auto">
      <div className="relative min-h-screen flex flex-col">
        <button 
          onClick={() => setIsOpen(false)}
          className="fixed top-6 right-6 z-[110] w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <Header />
        
        <main className="flex-grow">
          <Hero />
          
          <section className="py-12 px-4">
            <div className="container mx-auto">
              <h2 className="text-2xl font-black text-center mb-8 uppercase tracking-widest">
                Exclusive <span className="text-primary">Mobile</span> Offers
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {mobileBrands.map((brand, index) => (
                  <BrandCard 
                    key={brand.id} 
                    brand={brand} 
                    index={index} 
                    gclid={gclid}
                  />
                ))}
              </div>
            </div>
          </section>

          <Disclaimer />
        </main>

        <Footer />
      </div>
    </div>
  );
}
