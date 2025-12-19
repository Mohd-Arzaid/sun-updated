import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const Countries = () => {
  return (
    <div className="bg-white pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16 border-2 border-neutral-100">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-6">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-geist text-neutral-600 max-w-xs sm:max-w-md md:max-w-xl mx-auto px-4 sm:px-2 md:px-0">
            Glimpse of the Countries we have Served In, Delivering excellence
            everywhere.
          </p>
        </div>

        <div className="flex gap-4 items-center justify-center">
          <button className="rounded-full w-[40px] h-[40px] md:w-[48px] md:h-[48px] flex items-center justify-center border-2 border-neutral-800">
            <ChevronLeft className="hidden md:block text-neutral-800" />
            <ChevronLeft className="block md:hidden size-5 text-neutral-800" />
          </button>

          <button className="rounded-full w-[40px] h-[40px] md:w-[48px] md:h-[48px] flex items-center justify-center bg-neutral-800 border-2 border-neutral-800">
            <ChevronRight className="hidden md:block text-white" />
            <ChevronRight className="block md:hidden size-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Countries;
