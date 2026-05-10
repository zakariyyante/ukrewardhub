"use client";

import { brands } from "@/app/data/brands";
import BrandCard from "./BrandCard";
import Disclaimer from "./Disclaimer";

interface MobileViewProps {
  gclid?: string;
}

export default function MobileView({ gclid }: MobileViewProps) {
  const mobileBrands = brands.filter(b => b.isMobile);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-grow">
        <section className="py-6 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-black uppercase tracking-tight">
                Exclusive <span className="text-primary">Mobile</span> Offers
              </h2>
              <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1 font-bold">
                Hand-picked for your device
              </p>
            </div>

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
      </main>

      <div className="mt-auto">
        <Disclaimer />
        <div className="bg-black/40 py-8 text-center border-t border-white/5">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">
            UKREWARDHUB.COM
          </p>
        </div>
      </div>
    </div>
  );
}
