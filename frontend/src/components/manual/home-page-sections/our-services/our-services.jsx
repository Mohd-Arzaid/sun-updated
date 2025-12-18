import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SERVICES_DATA = [
  {
    id: 1,
    image: "/services-images/bis-logo.webp",
    imageAlt: "BIS Logo",
    imageTitle: "BIS Logo",
    title: "BIS Mark (ISI License) for Foreign Manufacturers",
    description:
      "Comprehensive ISI licensing solution for foreign manufacturers looking to enter the Indian market with quality-certified products.",
    path: "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
  },
  {
    id: 2,
    image: "/services-images/bis-crs-logo.webp",
    imageAlt: "Scheme X Logo",
    imageTitle: "Scheme X Logo",
    title: "Scheme X",
    description:
      "Specialized certification program for specific product categories requiring compliance with advanced quality and safety standards.",
    path: "/indian-bis-certification-under-scheme-x",
  },
  {
    id: 3,
    image: "/services-images/isi-mark-logo.webp",
    imageAlt: "ISI Mark Logo",
    imageTitle: "ISI Mark Logo",
    title: "ISI Mark BIS for Indian Manufacturers",
    description:
      "Domestic certification for Indian manufacturers ensuring products meet Bureau of Indian Standards quality and safety requirements.",
    path: "/a-guide-to-bis-certification-indian-bis",
  },
  {
    id: 4,
    image: "/services-images/bis-crs-logo.webp",
    imageAlt: "BIS CRS Logo",
    imageTitle: "BIS CRS Logo",
    title: "BIS CRS Registration",
    description:
      "Compulsory Registration Scheme certification for electronic and IT products ensuring safety and quality compliance.",
    path: "/what-is-crs-bis-or-crs-registration",
  },
  {
    id: 5,
    image: "/services-images/cdsco-logo.webp",
    imageAlt: "CDSCO Logo",
    imageTitle: "CDSCO Logo",
    title: "CDSCO Registration Certification",
    description:
      "Central Drugs Standard Control Organization approval for medical devices and pharmaceuticals in India.",
    path: "/cdsco-registration-certification",
  },
  {
    id: 6,
    image: "/services-images/plastic-waste-management-logo.webp",
    imageAlt: "Plastic Waste Management Logo",
    imageTitle: "Plastic Waste Management Logo",
    title: "Plastic Waste Management",
    description:
      "Comprehensive solutions for plastic waste management compliance, helping businesses meet environmental regulations.",
    path: "/epr-certificate-for-plastic-waste-management-pwm",
  },
  {
    id: 7,
    image: "/services-images/epr-certificate-logo.webp",
    imageAlt: "EPR Certificate Logo",
    imageTitle: "EPR Certificate Logo",
    title: "EPR Certificate",
    description:
      "Extended Producer Responsibility certification for sustainable waste management and environmental compliance.",
    path: "/a-guide-on-how-to-obtain-epr-certificate",
  },
  {
    id: 8,
    image: "/services-images/lmpc-logo.webp",
    imageAlt: "LMPC Logo",
    imageTitle: "LMPC Logo",
    title: "LMPC Certificate",
    description:
      "Legal Metrology Packaged Commodities certification ensuring accurate measurement and proper labeling of packaged goods.",
    path: "/a-guide-on-how-to-obtain-lmpc-certificate",
  },
];

const ServicesCarouselDesktop = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % SERVICES_DATA.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + SERVICES_DATA.length) % SERVICES_DATA.length
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const handleServiceNavigation = (path) => {
    navigate(path);
  };

  const slideTransform = {
    transform: `translateX(-${activeIndex * 100}%)`,
  };

  return (
    <div className="relative hidden md:block">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        aria-label="Previous service"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 rounded-full w-[48px] h-[48px] flex items-center justify-center border border-[#1A8781] bg-white hover:bg-[#1A8781]/5 transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-sm"
      >
        <ChevronLeft className="w-7 h-7 text-[#1A8781]" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        aria-label="Next service"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-30 rounded-full w-[48px] h-[48px] flex items-center justify-center border border-[#1A8781] bg-white hover:bg-[#1A8781]/5 transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-sm"
      >
        <ChevronRight className="w-7 h-7 text-[#1A8781]" />
      </button>

      <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] bg-gradient-to-br from-[#1A8781]/5 to-[#1A8781]/20 border border-[#1A8781]/30">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={slideTransform}
        >
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="min-w-full h-full grid grid-cols-2 gap-12 items-center p-12"
            >
              {/* Left Side */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-center bg-white/80 w-24 h-24 rounded-2xl shadow-lg">
                  <img
                    src={service.image}
                    srcSet={`${service.image} 1x, ${service.image} 2x`}
                    sizes="80px"
                    alt={service.imageAlt}
                    title={service.imageTitle}
                    width="80"
                    height="80"
                    className={`object-contain size-20 ${
                      service.id === 1
                        ? "scale-150"
                        : service.id === 7
                        ? "scale-125"
                        : "scale-100"
                    }`}
                  />
                </div>

                <div className="font-playfair text-4xl font-bold text-neutral-800">
                  {service.title}
                </div>
                <p className="font-inter text-xl text-neutral-600 max-w-lg">
                  {service.description}
                </p>
                <button
                  onClick={() => handleServiceNavigation(service.path)}
                  className="flex items-center gap-3 bg-[#1A8781] text-white py-3 px-6 rounded-full shadow-lg hover:bg-[#125E5A] transition-all duration-300 w-fit mt-2 group"
                >
                  <span className="font-medium font-inter text-base">
                    Learn More
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30">
                    <div className="w-2 h-2 border-t-2 border-r-2 border-white rotate-45"></div>
                  </div>
                </button>
              </div>

              {/* Right Side */}
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#1A8781]/10 rounded-full"></div>
                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#1A8781]/15 rounded-full"></div>

                <div className="bg-white/90 rounded-2xl p-8 shadow-xl border border-[#1A8781]/20 relative z-10 h-[350px] flex items-center justify-center">
                  <img
                    src={service.image}
                    srcSet={`${service.image} 1x, ${service.image} 2x`}
                    sizes="192px"
                    alt={service.imageAlt}
                    title={service.imageTitle}
                    width="192"
                    height="192"
                    className={`w-48 h-48 object-contain ${
                      service.id === 1
                        ? "scale-150"
                        : service.id === 7
                        ? "scale-125"
                        : "scale-100"
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-8 gap-3">
        {SERVICES_DATA.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to service ${idx + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === idx
                ? "bg-[#1A8781] w-10"
                : "bg-[#1A8781]/30 hover:bg-[#1A8781]/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

const OurServices = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-[84rem] mx-auto px-12">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="font-playfair text-5xl font-bold text-neutral-800 drop-shadow-lg mb-3">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-inter text-neutral-600 max-w-xl mx-auto">
            We offer end-to-end solutions for all your certification needs to
            enter and thrive in the Indian market.
          </p>
        </div>

        {/* Services Carousel - Hidden on Mobile , Displayed on Desktop */}
        <ServicesCarouselDesktop />
      </div>
    </div>
  );
};

export default OurServices;
