export default function Hero() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative pt-20 pb-10 overflow-hidden felt-texture hidden md:block">
      <div className="absolute inset-0 bg-linear-to-b from-accent/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-white/80">
            UK&apos;s Premier Casino Review Hub {currentYear}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          Find UK&apos;s Best <span className="gold-text">Casino</span> Sites
        </h1>

        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
          Expert-reviewed, exclusive bonuses, rapid payouts. We only list licensed and trusted platforms.
        </p>

        <div className="flex flex-row gap-3 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory justify-start md:justify-center max-w-full mx-auto px-4">
          {[
            { label: "Licensed", icon: "🛡️" },
            { label: "Expert Approved", icon: "✅" },
            { label: "Quick Withdrawals", icon: "⚡" }
          ].map((badge) => (
            <div key={badge.label} className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shrink-0 snap-center">
              <span className="text-xl">{badge.icon}</span>
              <span className="font-bold uppercase tracking-widest text-[10px] sm:text-xs text-white/90 whitespace-nowrap">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
