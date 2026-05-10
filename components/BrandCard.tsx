"use client";

import Image from "next/image";
import { Brand } from "@/app/data/brands";
import { track } from "@vercel/analytics";

interface BrandCardProps {
  brand: Brand;
  index: number;
  gclid?: string;
}

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => void;
  }
}

export default function BrandCard({ brand, index, gclid }: BrandCardProps) {
  const buildUrl = (url: string, gclidValue?: string) => {
    if (!gclidValue) return url;
    // Assuming the URL ends with clickid= or similar empty param
    return `${url}${gclidValue}`;
  };

  const handleCardClick = () => {
    const finalUrl = buildUrl(brand.url, gclid);
    
    // Track Vercel Analytics
    track('Brand Click', { brand: brand.name });

    // Track Google Ads Conversion if available
    if (typeof window !== 'undefined' && window.gtag_report_conversion) {
      window.gtag_report_conversion(finalUrl);
    }

    // Open in new tab
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  const getRankBadge = (idx: number) => {
    if (idx === 0) return { label: "UK LICENSED & VERIFIED", color: "from-yellow-500 to-yellow-700", text: "text-white" };
    if (idx === 1) return { label: "EXPERT CHOICE • TOP RATED", color: "from-slate-300 to-slate-500", text: "text-slate-900" };
    if (idx === 2) return { label: "FAST WITHDRAWALS • SECURE", color: "from-amber-600 to-amber-800", text: "text-white" };
    return null;
  };

  const badge = getRankBadge(index);

  return (
    <div className="relative group">
      {/* Rank Badge - Now outside and bigger */}
      {badge && (
        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r ${badge.color} ${badge.text} text-[10px] font-black px-6 py-2 rounded-full shadow-2xl z-20 whitespace-nowrap border border-white/20 tracking-[0.15em] flex items-center gap-2`}>
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          {badge.label}
        </div>
      )}

      <div 
        onClick={handleCardClick}
        className="relative casino-card-bg cursor-pointer hover:scale-[1.02] transition-transform duration-300 casino-glow mt-2"
      >
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-xl" />

        <div className="flex flex-col md:flex-row h-full items-stretch">
          {/* Left Col: Logo (Big) */}
          <div className="w-full md:w-[220px] p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5 bg-white/2 shrink-0">
            <div className="relative w-full aspect-[2/1]">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Center Col: Bonus */}
          <div className="flex-grow p-8 flex flex-col justify-center text-center md:text-left">
            <div className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-2">EXCLUSIVE WELCOME OFFER</div>
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
              {brand.bonus}
            </h3>
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex items-center gap-1.5 text-[10px] text-white/40 uppercase font-bold">
                <span className="text-accent text-xs">✓</span> UKGC Licensed
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-white/40 uppercase font-bold">
                <span className="text-accent text-xs">✓</span> Secure Payouts
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-white/40 uppercase font-bold">
                <span className="text-accent text-xs">✓</span> 24/7 Support
              </div>
            </div>
          </div>

          {/* Right Col: Rating + CTA */}
          <div className="w-full md:w-[280px] p-8 flex flex-col items-center justify-center gap-6 border-t md:border-t-0 md:border-l border-white/5 bg-linear-to-br from-transparent to-white/5 shrink-0">
            <div className="flex flex-col items-center">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-white">{brand.rating.toFixed(1)}</span>
                <span className="text-white/20 font-bold text-xl">/10</span>
              </div>
              <div className="flex gap-0.5 mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-base ${i < Math.floor(brand.rating / 2) ? 'text-yellow-400' : 'text-white/20'}`}>
                    ★
                  </span>
                ))}
              </div>
              <div className="text-[10px] text-white/40 mt-3 uppercase tracking-[0.2em] font-bold">
                {brand.votes.toLocaleString()} VERIFIED VOTES
              </div>
            </div>

            <button className="w-full py-4 rounded-xl bg-linear-to-r from-primary to-orange-600 text-white font-black uppercase tracking-widest text-sm shadow-xl shadow-primary/20 group-hover:shadow-primary/40 transition-all gold-shimmer hover:scale-[1.05] active:scale-95">
              Claim Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
