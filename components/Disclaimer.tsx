import Link from "next/link";

export default function Disclaimer() {
  return (
    <div className="w-full bg-black/40 border-y border-white/5 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold text-xs">
              18+
            </span>
            <span className="font-bold text-white uppercase tracking-wider text-sm">
              For adults 18+ only.
            </span>
          </div>
          
          <p className="text-xs text-white/60 max-w-2xl">
            Please gamble responsibly. For help and support, visit{" "}
            <Link href="https://www.begambleaware.org" className="text-primary hover:underline" target="_blank">
              BeGambleAware.org
            </Link>{" "}
            or call the National Gambling Helpline on 0808 8020 133.
          </p>
        </div>
      </div>
    </div>
  );
}
