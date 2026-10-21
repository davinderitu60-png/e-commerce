
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full bg-white px-5 pb-12 pt-16 sm:px-10 lg:px-24 lg:pb-24 lg:pt-20">

      {/* Hero Heading */}
      <div className="mb-1 ">
        <p className="mb-1 text-sm font-bold uppercase tracking-[0.15em] text-[#88001f]">
          The Castra Edit
        </p>

        <h1 className="mb-1 text-3xl font-bold tracking-tight text-[#111111] sm:text-2xl lg:text-[35px]">
          Offers
        </h1>

        <p className="text-base leading-relaxed text-[#666666] sm:text-xl lg:text-1xl">
          Explore currently configured household offers.
        </p>

      </div>
      
    </section>
  );
}
 