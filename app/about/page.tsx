export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-black mb-8">About Us</h1>
      
      <div className="prose prose-invert max-w-none space-y-8 text-white/70">
        <section className="casino-card-bg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="leading-relaxed mb-4">
            At UK Reward Hub, our mission is to provide players in the United Kingdom with the most accurate, up-to-date, and comprehensive information about online casinos. We understand that the world of online gambling can be overwhelming, which is why we dedicated ourselves to testing and reviewing every platform we list.
          </p>
          <p className="leading-relaxed italic border-l-2 border-primary pl-4 py-1">
            We operate as an independent online comparison and information website. Some operators listed on our site may be commercial partners, which means we may receive a commission if a user clicks through and signs up. We only list brands that we understand to be licensed for the UK market, and we aim to keep all information accurate, clear, and responsible.
          </p>
        </section>

        <section className="casino-card-bg p-8 border-accent/20">
          <h2 className="text-2xl font-bold text-white mb-4">Publisher Information</h2>
          <p className="leading-relaxed mb-4">
            Jake Scott Anderson is the publisher and site operator for ukrewardhub.com. He operates this site in connection with ukrewardhub.com, including commercial and affiliate relationships reflected in the content and offers on this domain.
          </p>
          <div className="text-sm text-white/50">
            <p className="font-bold text-white/70 uppercase text-xs mb-1">Registered Address:</p>
            <p>9365 49th St NE</p>
            <p>Crary, North Dakota 58327-9257</p>
            <p>United States</p>
          </div>
        </section>

        <section className="casino-card-bg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">How We Work</h2>
          <p className="leading-relaxed">
            Our team of experts evaluates each casino based on a strict set of criteria, including licensing (UKGC), security protocols, game variety, withdrawal speeds, and the quality of customer support. We also negotiate exclusive bonuses to ensure our users get the best possible value.
          </p>
        </section>

        <section className="casino-card-bg p-8 border-primary/20">
          <h2 className="text-2xl font-bold text-white mb-4">Responsible Gambling</h2>
          <p className="leading-relaxed mb-6">
            We are strong advocates for responsible gambling. We believe that gambling should always be a form of entertainment and never a source of financial stress. We provide links and resources to organizations like GamStop, GamCare, and BeGambleAware to help our users stay in control.
          </p>
          <div className="flex gap-4">
            <a href="https://www.begambleaware.org" target="_blank" className="text-primary hover:underline font-bold">BeGambleAware</a>
            <span className="text-white/20">|</span>
            <a href="https://www.gamstop.co.uk" target="_blank" className="text-primary hover:underline font-bold">GamStop</a>
          </div>
        </section>
      </div>
    </div>
  );
}
