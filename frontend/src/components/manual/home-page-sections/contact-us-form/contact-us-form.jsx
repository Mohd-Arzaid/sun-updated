import React from "react";

const ContactUsForm = () => {
  return (
    <div className="bg-white pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        <div className="w-1/2">
          <div className="flex flex-col">
            <h2 className="font-playfair tracking-tight text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 drop-shadow-lg mb-2 sm:mb-3">
              Contact Us
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-geist text-neutral-600">
              Want to contact our team and book a call?{" "}
              <span className="text-neutral-900 font-medium">Try it now</span>
            </p>
          </div>

          <form className="mt-6 flex flex-col gap-4">
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
      </div>
    </div>
  );
};

export default ContactUsForm;
