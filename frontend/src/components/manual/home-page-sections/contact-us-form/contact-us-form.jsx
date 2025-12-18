import React from "react";

const ContactUsForm = () => {
  return (
    <div className="bg-white pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 md:px-12">
        {/* Heading Section */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-playfair tracking-tight text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 drop-shadow-lg mb-2 sm:mb-3">
            Contact Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-geist text-neutral-600 max-w-xl mx-auto">
            Want to contact our team and book a call?{" "}
            <span className="text-neutral-900 font-medium">Try it now</span>
          </p>
        </div>

        {/* Form and Map Section */}
        <div className="flex items-start justify-between gap-14">
          {/* Left Side - Form */}
          <div className="flex-1">
            <form className="flex flex-col gap-4">
              <input
                required
                type="text"
                name="fullName"
                className="w-full h-16 rounded-xl border-2 border-neutral-300 focus-visible:ring-1 focus-visible:ring-neutral-500 focus-visible:ring-offset-0 text-neutral-800 text-lg font-geist font-medium placeholder:text-neutral-500 placeholder:text-lg placeholder:font-geist placeholder:font-medium px-6 py-8 transition-all duration-300 hover:border-neutral-400 focus:outline-none"
                placeholder="Full Name *"
              />
              <input
                required
                type="text"
                name="email"
                className="w-full h-16 rounded-xl border-2 border-neutral-300 focus-visible:ring-1 focus-visible:ring-neutral-500 focus-visible:ring-offset-0 text-neutral-800 text-lg font-geist font-medium placeholder:text-neutral-500 placeholder:text-lg placeholder:font-geist placeholder:font-medium px-6 py-8 transition-all duration-300 hover:border-neutral-400 focus:outline-none"
                placeholder="Email Address *"
              />
              <input
                required
                type="text"
                name="phoneNumber"
                className="w-full h-16 rounded-xl border-2 border-neutral-300 focus-visible:ring-1 focus-visible:ring-neutral-500 focus-visible:ring-offset-0 text-neutral-800 text-lg font-geist font-medium placeholder:text-neutral-500 placeholder:text-lg placeholder:font-geist placeholder:font-medium px-6 py-8 transition-all duration-300 hover:border-neutral-400 focus:outline-none"
                placeholder="Phone Number *"
              />
              <input
                required
                type="text"
                name="message"
                className="w-full h-16 rounded-xl border-2 border-neutral-300 focus-visible:ring-1 focus-visible:ring-neutral-500 focus-visible:ring-offset-0 text-neutral-800 text-lg font-geist font-medium placeholder:text-neutral-500 placeholder:text-lg placeholder:font-geist placeholder:font-medium px-6 py-8 transition-all duration-300 hover:border-neutral-400 focus:outline-none"
                placeholder="Which Certification is required ? *"
              />
              <button
                type="submit"
                className="w-full mt-2 h-16 rounded-xl bg-[#0A4A45]/90 hover:bg-[#0A4A45] text-white text-xl font-geist font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1A8781]/50 focus:ring-offset-0 shadow-lg hover:shadow-xl"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Side - Map */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full bg-neutral-50 p-10 rounded-2xl overflow-hidden">
              <div className="font-geist text-base text-neutral-500 tracking-wide mb-8 text-center antialiased">
                We respond to all inquiries within 24 hours. Our team is here to
                guide you through every step. No more waiting around - we're
                serious about making your vision a reality.
              </div>

              <div className="relative flex w-full mx-auto items-center justify-center">
                <img
                  width="500"
                  height="500"
                  alt="world map"
                  className="w-full h-auto opacity-90 grayscale"
                  src="https://pro.aceternity.com/world.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
