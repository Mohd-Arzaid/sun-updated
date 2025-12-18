import { BlurIn } from "@/components/ui/blur-in";
import { FadeText } from "@/components/ui/fade-text";
import WordPullUp from "@/components/ui/word-pull-up";
import { Link } from "react-router-dom";

const HeroImage = "/hero-images/hero-image.webp";
const HeroImageMobile = "/hero-images/hero-mobile.svg";

const DesktopHero = () => {
  return (
    <div
      style={{
        background: "radial-gradient(circle, #EBF3F5 7%, #C5E2F0 100%)",
      }}
      className="relative pb-24 pt-12 overflow-x-hidden"
    >
      {/* Background gradient */}
      <div
        style={{
          background: "radial-gradient(circle, #D8E6EF 8%, #C5E2F0 100%)",
        }}
        className="absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 "
      ></div>

      {/* Hero Content */}
      <div className="max-w-[84rem] w-full mx-auto">
        <div className="flex flex-col items-start">
          <div className="relative px-8 z-20">
            <img
              src={HeroImage}
              alt="Sun Certifications India - Professional Certification Services for BIS, LMPC, EPR, and WPC"
              title="Sun Certifications India - Professional Certification Services for BIS, LMPC, EPR, and WPC"
              className="shadow-[0_5px_40px_-12px_rgba(0,0,0,0.3)] w-full max-w-[740px] h-auto object-cover"
              width="740"
              height="480"
              fetchPriority="high"
              loading="eager"
            />

            <div className="absolute inset-0 flex items-center justify-center transform translate-x-[575px]">
              <div className="py-6 px-8 bg-white/80 backdrop-blur-md w-[650px] h-[380px] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                <div className="relative max-w-[600px]">
                  <h1 className="text-5xl font-bold font-playfair text-left text-black leading-[52px]">
                    Sun Certifications India
                  </h1>
                </div>

                <p className="mt-5 text-sm sm:text-xl text-zinc-500 tracking-wide mb-7 font-inter text-left max-w-2xl">
                  Sun Certifications was founded in 2013, and for more than a
                  decade, we have been assisting companies to comply with
                  various kinds of Indian certifications like BIS certificate
                  for Indian manufacturers, BIS certification for foreign/global
                  manufacturers, BIS Scheme X certification, LMPC certificate,
                  EPR certificate, WPC certificate, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileHero = () => {
  const buttonLinks = [
    { to: "/about", text: "About Us", primary: true },
    { to: "/contact", text: "Contact Us", primary: false },
  ];

  return (
    <div className="flex flex-col gap-5 w-full">
      <div
        style={{
          background: "radial-gradient(circle, #F5F9FA 7%, #E8F4F8 100%)",
        }}
        className=" w-full flex flex-col justify-center p-4"
      >
        <div className="flex justify-between flex-col items-center w-full m-auto pb-12">
          <div className="flex flex-col gap-8 mt-10 mb-16">
            <WordPullUp
              words="Sun Certifications India"
              className="text-4xl text-black font-geist font-bold text-left max-w-3xl break-words"
            />

            <div className="max-w-2xl mb-2">
              <FadeText
                text="Sun Certifications was founded in 2013, and for more than a decade, we have been assisting companies to comply with various kinds of Indian certifications like BIS certificate for Indian manufacturers, BIS certification for foreign/global manufacturers, BIS Scheme X certification, LMPC certificate, EPR certificate, WPC certificate, etc."
                className="font-inter text-base text-gray-600"
                direction="left"
              />
            </div>

            <div className="flex gap-3 flex-wrap items-center">
              {buttonLinks.map(({ to, text, primary }) => (
                <Link key={to} to={to}>
                  <BlurIn
                    word={text}
                    className={
                      primary
                        ? "bg-black text-white text-sm font-inter py-3 rounded-md flex gap-2 justify-center items-center px-8"
                        : "border font-inter text-sm bg-white text-black flex justify-center gap-4 items-center py-3 rounded-md px-8"
                    }
                  />
                </Link>
              ))}
            </div>
          </div>

          <img
            src={HeroImageMobile}
            alt="Sun Certifications India - Professional Certification Services for BIS, LMPC, EPR, and WPC"
            title="Sun Certifications India - Professional Certification Services for BIS, LMPC, EPR, and WPC"
            className="w-80 h-auto drop-shadow-xl"
            width="320"
            height="240"
            fetchPriority="high"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <>
      {/* Desktop Hero - Hidden on mobile */}
      <div className="hidden md:block">
        <DesktopHero />
      </div>

      {/* Mobile Hero - Hidden on desktop */}
      <div className="block md:hidden">
        <MobileHero />
      </div>
    </>
  );
};

export default Hero;
