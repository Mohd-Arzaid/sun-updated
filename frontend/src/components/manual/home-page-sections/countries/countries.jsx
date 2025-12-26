import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Countries = () => {
  // All countries data - 22 countries
  const countries = [
    { name: "Thailand", img: "/countries-images/Thailand.webp" },
    { name: "Vietnam", img: "/countries-images/Vietnam.webp" },
    { name: "Canada", img: "/countries-images/Canada.webp" },
    { name: "China", img: "/countries-images/China.webp" },
    { name: "Italy", img: "/countries-images/Italy.webp" },
    { name: "Colombia", img: "/countries-images/Colombia.webp" },
    { name: "Qatar", img: "/countries-images/Qatar.webp" },
    { name: "India", img: "/countries-images/India.webp" },
    { name: "Indonesia", img: "/countries-images/Indonesia.webp" },
    { name: "Malaysia", img: "/countries-images/Malaysia.webp" },
    { name: "Russia", img: "/countries-images/Russia.webp" },
    { name: "Bahrain", img: "/countries-images/Bahrain.webp" },
    { name: "UAE", img: "/countries-images/UAE.webp" },
    { name: "Nepal", img: "/countries-images/Nepal.webp" },
    { name: "Sri Lanka", img: "/countries-images/SriLanka.webp" },
    { name: "France", img: "/countries-images/France.webp" },
    { name: "Germany", img: "/countries-images/Germany.webp" },
    { name: "Sweden", img: "/countries-images/Sweden.webp" },
    { name: "Slovenia", img: "/countries-images/Slovenia.webp" },
    { name: "Austria", img: "/countries-images/Austria.webp" },
    { name: "USA", img: "/countries-images/USA.webp" },
    { name: "Denmark", img: "/countries-images/Denmark.webp" },
  ];

  const [api, setApi] = React.useState(null);

  return (
    <div className="bg-white pt-8 pb-10 sm:pt-10 sm:pb-12 md:pt-12 md:pb-14 border-2 border-neutral-100">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 md:px-12 flex flex-col">
        {/* Heading */}
        <div className="text-center mb-3 md:mb-6">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-geist text-neutral-600 max-w-xs sm:max-w-md md:max-w-xl mx-auto px-4 sm:px-2 md:px-0">
            Glimpse of the Countries we have Served In, Delivering excellence
            everywhere
          </p>
        </div>

        <div className="flex gap-4 mb-6 md:mb-8 items-center justify-center">
          <button
            onClick={() => api?.scrollPrev()}
            aria-label="Previous countries"
            className="rounded-full w-[35px] h-[35px] md:w-[45px] md:h-[45px] flex items-center justify-center border-2 border-neutral-300 hover:border-neutral-400 transition-colors"
          >
            <ChevronLeft className="hidden md:block text-neutral-600" />
            <ChevronLeft className="block md:hidden size-4 md:size-5 text-neutral-600" />
          </button>

          <button
            onClick={() => api?.scrollNext()}
            aria-label="Next countries"
            className="rounded-full w-[35px] h-[35px] md:w-[45px] md:h-[45px] flex items-center justify-center border-2 border-neutral-300 hover:border-neutral-400 transition-colors"
          >
            <ChevronRight className="hidden md:block text-neutral-600" />
            <ChevronRight className="block md:hidden size-4 md:size-5 text-neutral-600" />
          </button>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {countries.map((country) => (
              <CarouselItem
                key={country.name}
                className="pl-2 sm:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="w-full max-w-[280px] sm:max-w-[300px] h-[280px] md:h-[300px] bg-neutral-100 rounded-xl overflow-hidden flex flex-col mx-auto">
                  {/* Image Container - Fixed Height */}
                  <div className="h-[220px]  md:h-[240px] w-full flex items-center justify-center px-4 md:px-6 py-2">
                    <img
                      src={country.img}
                      alt={country.name}
                      width="240"
                      height="240"
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* Country Name - Fixed at Bottom */}
                  <div className="h-[60px] w-full flex items-center px-4 md:px-6 border-t border-neutral-200 bg-neutral-100">
                    <span className="flex items-center justify-center font-bold gap-2">
                      <Star
                        className="fill-current text-neutral-800 flex-shrink-0"
                        size={20}
                      />
                      <div className="text-base md:text-lg font-geist text-neutral-800 tracking-wide uppercase">
                        {country.name}
                      </div>
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Countries;
