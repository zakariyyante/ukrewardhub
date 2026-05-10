import Hero from "@/components/Hero";
import BrandCard from "@/components/BrandCard";
import Disclaimer from "@/components/Disclaimer";
import About from "@/components/About";
import MobileModal from "@/components/MobileModal";
import { brands } from "@/app/data/brands";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const gclid = typeof params.gclid === 'string' ? params.gclid : undefined;

  return (
    <>
      <MobileModal gclid={gclid} />
      
      <Hero />
      
      <section className="py-10" id="brands">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black">
              Top Rated <span className="text-primary">UK</span> Brands
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
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
      
      <About />
    </>
  );
}
