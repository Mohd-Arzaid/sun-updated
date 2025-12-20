import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import React from "react";

const Countries = () => {
  return (
    <div className="bg-white pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16 border-2 border-neutral-100">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 md:px-12 flex flex-col">
        {/* Heading */}
        <div className="text-center mb-6">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-geist text-neutral-600 max-w-xs sm:max-w-md md:max-w-xl mx-auto px-4 sm:px-2 md:px-0">
            Glimpse of the Countries we have Served In, Delivering excellence
            everywhere.
          </p>
        </div>

        <div className="flex gap-4 mb-8 items-center justify-center">
          <button className="rounded-full w-[40px] h-[40px] md:w-[45px] md:h-[45px] flex items-center justify-center border-2 border-neutral-300 hover:border-neutral-400 transition-colors">
            <ChevronLeft className="hidden md:block text-neutral-600" />
            <ChevronLeft className="block md:hidden size-5 text-neutral-600" />
          </button>

          <button className="rounded-full w-[40px] h-[40px] md:w-[45px] md:h-[45px] flex items-center justify-center border-2 border-neutral-300 hover:border-neutral-400 transition-colors">
            <ChevronRight className="hidden md:block text-neutral-600" />
            <ChevronRight className="block md:hidden size-5 text-neutral-600" />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="w-full h-[300px] bg-neutral-100 rounded-xl"></div>
          <div className="w-full h-[300px] bg-neutral-100 rounded-xl"></div>
          <div className="w-full h-[300px] bg-neutral-100 rounded-xl"></div>
          <div className="w-full h-[300px] bg-neutral-100 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
