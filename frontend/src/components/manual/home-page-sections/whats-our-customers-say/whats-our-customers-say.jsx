import React from "react";

const WhatsOurCustomersSay = () => {
  return (
    <div className="bg-white pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16 border-2 border-neutral-100">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-playfair tracking-tight text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 drop-shadow-lg mb-2 sm:mb-3">
            Our Testimonials
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-geist text-neutral-600 max-w-xs sm:max-w-md md:max-w-xl mx-auto px-4 sm:px-2 md:px-0">
            What our clients have to say about us and our services
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatsOurCustomersSay;
