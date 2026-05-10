import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Link href="/" className="flex flex-col items-center gap-4 group mb-8">
            <div className="relative w-48 h-16">
              <Image
                src="/ukrewardhub.png"
                alt="UK Reward Hub Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white font-black text-2xl tracking-tighter">
                UKREWARDHUB<span className="text-primary">.COM</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold leading-none mt-1">
                PREMIER CASINO HUB
              </span>
            </div>
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl text-center md:text-left">
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="/" className="hover:text-primary">Home</Link></li>
                <li><Link href="/#brands" className="hover:text-primary">Best Brands</Link></li>
                <li><Link href="/#guide" className="hover:text-primary">How We Rate</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Legal</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-primary">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Support</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
                <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Compliance</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="https://www.begambleaware.org" target="_blank" className="hover:text-primary">BeGambleAware</Link></li>
                <li><Link href="https://www.gamstop.co.uk" target="_blank" className="hover:text-primary">GamStop</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col items-center">
          <p className="text-[10px] text-white/40 text-center max-w-3xl mb-4 leading-relaxed">
            UK Reward Hub is an independent review site that receives advertising fees from the gambling companies featured here. We are not a gambling operator. All offers are subject to terms and conditions. Please gamble responsibly. Regulated by the UK Gambling Commission (UKGC) through our partners.
          </p>
          <p className="text-[10px] text-white/40 text-center max-w-3xl mb-4 leading-relaxed italic">
            We may receive a commission from some of the brands listed on this website when users click through and create an account. This does not affect our commitment to presenting information clearly, responsibly, and in line with UK advertising standards.
          </p>
          <p className="text-[10px] text-white/30 text-center mb-8">
            9365 49th St NE, Crary, North Dakota 58327-9257, United States
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
            <div className="relative w-10 h-10">
              <Image src="/brands/18plus.png" alt="18+" fill className="object-contain" />
            </div>
            <div className="relative w-24 h-10">
              <Image src="/ukgc.svg" alt="UKGC" fill className="object-contain" />
            </div>
            <div className="relative w-24 h-10">
              <Image src="/brands/gamestop.png" alt="GamStop" fill className="object-contain" />
            </div>
            <div className="relative w-24 h-10">
              <Image src="/brands/gambleaware.png" alt="BeGambleAware" fill className="object-contain" />
            </div>
            <div className="relative w-24 h-10">
              <Image src="/brands/gamcare.png" alt="GamCare" fill className="object-contain" />
            </div>
          </div>

          <div className="text-[10px] text-white/20 uppercase tracking-widest">
            © {currentYear} UKREWARDHUB.COM. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
