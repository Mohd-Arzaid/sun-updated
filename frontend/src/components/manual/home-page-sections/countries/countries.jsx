import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import React, { useState } from "react";

const Countries = () => {
  // All countries data - 22 countries
  const countries = [
    { name: "India", img: "/countries-images/India.webp" },
    { name: "Austria", img: "/countries-images/Austria.webp" },
    { name: "Bahrain", img: "/countries-images/Bahrain.webp" },
    { name: "Canada", img: "/countries-images/Canada.webp" },
    { name: "China", img: "/countries-images/China.webp" },
    { name: "Colombia", img: "/countries-images/Colombia.webp" },
    { name: "Denmark", img: "/countries-images/Denmark.webp" },
    { name: "France", img: "/countries-images/France.webp" },
    { name: "Germany", img: "/countries-images/Germany.webp" },
    { name: "Indonesia", img: "/countries-images/Indonesia.webp" },
    { name: "Italy", img: "/countries-images/Italy.webp" },
    { name: "Malaysia", img: "/countries-images/Malaysia.webp" },
    { name: "Nepal", img: "/countries-images/Nepal.webp" },
    { name: "Qatar", img: "/countries-images/Qatar.webp" },
    { name: "Russia", img: "/countries-images/Russia.webp" },
    { name: "Slovenia", img: "/countries-images/Slovenia.webp" },
    { name: "Sri Lanka", img: "/countries-images/SriLanka.webp" },
    { name: "Sweden", img: "/countries-images/Sweden.webp" },
    { name: "Thailand", img: "/countries-images/Thailand.webp" },
    { name: "UAE", img: "/countries-images/UAE.webp" },
    { name: "USA", img: "/countries-images/USA.webp" },
    { name: "Vietnam", img: "/countries-images/Vietnam.webp" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 4;

  // Handle previous button
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? countries.length - 1 : prev - 1));
  };

  // Handle next button
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === countries.length - 1 ? 0 : prev + 1));
  };

  // Get current 4 countries to display with circular logic
  const currentCountries = [];
  for (let i = 0; i < cardsPerView; i++) {
    const index = (currentIndex + i) % countries.length;
    currentCountries.push(countries[index]);
  }

  return (
    <div className="bg-white pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16 border-2 border-neutral-100">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 md:px-12 flex flex-col">
        {/* Heading */}
        <div className="text-center mb-3 md:mb-6">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-geist text-neutral-600 max-w-xs sm:max-w-md md:max-w-xl mx-auto px-4 sm:px-2 md:px-0">
            Glimpse of the Countries we have Served In, Delivering excellence
            everywhere.
          </p>
        </div>

        <div className="flex gap-4 mb-4 md:mb-8 items-center justify-center">
          <button
            onClick={handlePrev}
            aria-label="Previous countries"
            className="rounded-full w-[35px] h-[35px] md:w-[45px] md:h-[45px] flex items-center justify-center border-2 border-neutral-300 hover:border-neutral-400 transition-colors"
          >
            <ChevronLeft className="hidden md:block text-neutral-600" />
            <ChevronLeft className="block md:hidden size-4 md:size-5 text-neutral-600" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next countries"
            className="rounded-full w-[35px] h-[35px] md:w-[45px] md:h-[45px] flex items-center justify-center border-2 border-neutral-300 hover:border-neutral-400 transition-colors"
          >
            <ChevronRight className="hidden md:block text-neutral-600" />
            <ChevronRight className="block md:hidden size-4 md:size-5 text-neutral-600" />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {currentCountries.map((country, index) => (
            <div
              key={`${country.name}-${index}`}
              className="w-full h-[300px] bg-neutral-100 rounded-xl overflow-hidden flex flex-col"
            >
              {/* Image Container - Fixed Height */}
              <div className="h-[240px] w-full flex items-center justify-center px-6 py-2">
                <img
                  src={country.img}
                  alt={country.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Country Name - Fixed at Bottom */}
              <div className="h-[60px] w-full flex items-center px-6 border-t border-neutral-200 bg-neutral-100">
                <span className="flex items-center justify-center font-bold gap-2">
                  <Star
                    className="fill-current text-neutral-800 flex-shrink-0"
                    size={20}
                  />
                  <div className="text-lg font-geist text-neutral-800 tracking-wide uppercase">
                    {country.name}
                  </div>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
