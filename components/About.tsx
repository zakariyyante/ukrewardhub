export default function About() {
  return (
    <section className="py-20 bg-black/20" id="guide">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
          How We Rate <span className="text-primary">Casino</span> Sites
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Why Our Reviews Stand Out */}
          <div className="casino-card-bg p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-primary">♠️</span> Why Our Reviews Stand Out
            </h3>
            <ul className="space-y-4">
              {[
                "Unbiased expert analysis of every platform",
                "Verification of UKGC licensing and security",
                "Real-world testing of withdrawal speeds",
                "Exclusive bonus deals negotiated for our users",
                "Mobile compatibility and app performance checks"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="text-accent mt-1">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible Gambling */}
          <div className="casino-card-bg p-8 border-accent/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-primary">🛡️</span> Responsible Gambling
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              We are committed to supporting responsible gambling. Gambling should be a form of entertainment, not a way to make money. If you feel you are losing control, please use the resources below.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="font-bold text-white mb-1">GamStop</div>
                <div className="text-[10px] text-white/40 uppercase">Self-Exclusion</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="font-bold text-white mb-1">GamCare</div>
                <div className="text-[10px] text-white/40 uppercase">Support & Advice</div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-white/10">
              <p className="text-[11px] text-white/50 italic leading-relaxed mb-4">
                We operate as an independent online comparison and information website. Some operators listed on our site may be commercial partners, which means we may receive a commission if a user clicks through and signs up. We only list brands that we understand to be licensed for the UK market, and we aim to keep all information accurate, clear, and responsible.
              </p>
              <p className="text-[11px] text-white/50 italic leading-relaxed mb-2">
                Jake Scott Anderson is the publisher and site operator for ukrewardhub.com. He operates this site in connection with ukrewardhub.com, including commercial and affiliate relationships reflected in the content and offers on this domain.
              </p>
              <p className="text-[10px] text-white/30">
                9365 49th St NE, Crary, North Dakota 58327-9257, United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
