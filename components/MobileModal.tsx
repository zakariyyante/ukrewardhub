"use client";

import { useEffect, useState } from "react";
import { brands } from "@/app/data/brands";
import BrandCard from "./BrandCard";
import Image from "next/image";
import Disclaimer from "./Disclaimer";

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
        {/* Simple Compact Header */}
        <div className="sticky top-0 z-[110] bg-background/95 backdrop-blur-md border-b border-white/10 px-4 py-3 flex items-center justify-between">
          <div className="relative w-32 h-8">
            <Image
              src="/ukrewardhub.png"
              alt="UK Reward Hub Logo"
              fill
              className="object-contain object-left"
            />
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <main className="flex-grow">
          <section className="py-8 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-black uppercase tracking-tight">
                  Exclusive <span className="text-primary">Mobile</span> Offers
                </h2>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1 font-bold">
                  Hand-picked for your device
                </p>
              </div>

              <div className="grid grid-cols-1 gap-10">
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
        </main>

        <div className="mt-auto">
          <Disclaimer />
          <div className="bg-black/40 py-6 text-center border-t border-white/5">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">
              UKREWARDHUB.COM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
