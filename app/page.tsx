import Hero from "@/components/Hero";
import BrandCard from "@/components/BrandCard";
import Disclaimer from "@/components/Disclaimer";
import About from "@/components/About";
import MobileView from "@/components/MobileView";
import { brands } from "@/app/data/brands";
import { headers } from "next/headers";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const gclid = Array.isArray(params.gclid) ? params.gclid[0] : (typeof params.gclid === 'string' ? params.gclid : undefined);
  
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);

  // If user is on mobile AND has a GCLID, show the permanent Mobile View
  if (isMobile && gclid) {
    return <MobileView gclid={gclid} />;
  }

  // Otherwise, show the standard main page with non-mobile brands
  const filteredBrands = brands.filter(b => !b.isMobile);

  return (
    <>
      <Hero />
      
      <section className="py-10" id="brands">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-8 md:mb-16 text-center">
            <h2 className="text-2xl md:text-6xl font-black tracking-tighter uppercase md:normal-case">
              Top Rated <span className="text-primary">UK</span> Brands
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
            {filteredBrands.map((brand, index) => (
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
      
      <div className="hidden md:block">
        <About />
      </div>
    </>
  );
}
