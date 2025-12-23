import React from "react";

const CertificationAndAchievements = () => {
  return (
    <div className="bg-white pt-8 pb-10 sm:pt-10 sm:pb-12 md:pt-12 md:pb-14">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="font-playfair tracking-tight text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg text-center mb-6 md:mb-12 text-neutral-800">
          Certifications and Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-4">
          <div className="col-span-1 w-auto h-[260px] sm:h-[280px] md:h-[300px] rounded-3xl border border-neutral-200 bg-neutral-100 p-2">
            <img
              src="/home-page-certificate-img/Sun-Certifications-India-ISO-9001-page-0001.jpg"
              alt=""
              width="300"
              height="300"
              className="w-full h-full object-cover object-top shadow-input rounded-2xl"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="col-span-1 w-auto h-[260px] sm:h-[280px] md:h-[300px] rounded-3xl border border-neutral-200 bg-neutral-100 p-2">
            <img
              src="/home-page-certificate-img/Sun-Certifications-India-ISO-27001-page-0001.jpg"
              alt="ISO 27001 Certification"
              width="300"
              height="300"
              className="w-full h-full object-cover object-top shadow-input rounded-2xl"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="col-span-1 w-auto h-[260px] sm:h-[280px] md:h-[300px] rounded-3xl border border-neutral-200 bg-neutral-100 p-2">
            <img
              src="/home-page-certificate-img/Sun-Certifications-India-ISO-20000-page-0001.jpg"
              alt="ISO 20000 Certification"
              width="300"
              height="300"
              className="w-full h-full object-cover object-top shadow-input rounded-2xl"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="col-span-1 w-auto h-[260px] sm:h-[280px] md:h-[300px] rounded-3xl border border-neutral-200 bg-neutral-100 p-2">
            <img
              src="/home-page-certificate-img/Sun-Certifications-India-ISO-10002-page-0001.jpg"
              alt="ISO 10002 Certification"
              width="300"
              height="300"
              className="w-full h-full object-cover object-top shadow-input rounded-2xl"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationAndAchievements;
