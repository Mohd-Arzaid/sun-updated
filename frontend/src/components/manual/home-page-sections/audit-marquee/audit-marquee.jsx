import React from "react";
import Container from "@/components/common/container/container";

const AuditsMarquee = () => {
  // Gallery images
  const galleryImages = [
    {
      id: 1,
      image: "/auditImages/Bahrain.webp",
      title: "Bahrain Audit",
      description:
        "Successful Audit and Grant of BIS License on Aluminium Products under IS 617 and 2590 for one of the world's leading manufacturer in Bahrain",
    },
    {
      id: 2,
      image: "/auditImages/Vietnam.webp",
      title: "Vietnam Audit",
      description:
        "Successful Audit and Grant of BIS License on Toys under IS 9873 for one of the world's leading manufacturer in Vietnam",
    },
    {
      id: 3,
      image: "/auditImages/Indonesia.webp",
      title: "Indonesia Audit",
      description:
        "Successful Audit and Grant of BIS License on Toys under IS 9873 for one of the world's leading manufacturer in Indonesia",
    },
    {
      id: 4,
      image: "/auditImages/Vietnam-2.webp",
      title: "Vietnam Audit",
      description:
        "Successful Audit and Grant of BIS License on Toys under IS 9873 for one of the world's leading manufacturer in Vietnam",
    },
    {
      id: 5,
      image: "/auditImages/Italy-2.webp",
      title: "Italy Audit",
      description:
        "Successful Audit and Grant of BIS License on Footwear under IS 6721 for one of the world's leading manufacturer in Italy",
    },
    {
      id: 6,
      image: "/auditImages/Vietnam-3.webp",
      title: "Vietnam Audit",
      description:
        "Successful Audit and Grant of BIS License on Sewing Machines under IS 15449 for one of the world's leading manufacturer in Vietnam",
    },
    {
      id: 7,
      image: "/auditImages/Malaysia.webp",
      title: "Malaysia Audit",
      description:
        "Successful Audit and Grant of BIS License on Toys under IS 9873 for one of the world's leading manufacturer in Malaysia",
    },
    {
      id: 8,
      image: "/auditImages/Slovenia.webp",
      title: "Slovenia Audit",
      description:
        "Successful Audit and Grant of BIS License on Hinges under IS 18297 for one of the world's leading manufacturer in Slovenia",
    },
    {
      id: 9,
      image: "/auditImages/Vietnam-4.webp",
      title: "Vietnam Audit",
      description:
        "Successful Audit and Grant of BIS License on Steel Products under IS 6911 for one of the world's leading manufacturer in Vietnam",
    },
    {
      id: 10,
      image: "/auditImages/Thailand.webp",
      title: "Thailand Audit",
      description:
        "Successful Audit and Grant of BIS License on Toys under IS 9873 for one of the world's leading manufacturer in Thailand",
    },
    {
      id: 11,
      image: "/auditImages/USA.webp",
      title: "USA Audit",
      description:
        "Successful Audit and Grant of BIS License on Steel Products under IS 6911 for one of the world's leading manufacturer in USA",
    },
    {
      id: 12,
      image: "/auditImages/Spain.webp",
      title: "Spain Audit",
      description:
        "Successful Audit and Grant of BIS License on Aluminium Products under IS 1285 and IS 733 for one of the world's leading manufacturer in Spain",
    },
    {
      id: 13,
      image: "/auditImages/Turkey.webp",
      title: "Turkey Audit",
      description:
        "Successful Audit and Grant of BIS License on Footwear under IS 6721 and IS 17043 Part 2 for one of the world's leading manufacturer in Turkey",
    },
    {
      id: 14,
      image: "/auditImages/bis-certification-inspection-malaysia.webp",
      title: "Malaysia Audit",
      description:
        "Successful Audit and Grant of BIS License on Measuring Tape under IS 1269 Part 2 for one of the world's leading manufacturer in Malaysia",
    },
  ];

  const duplicated = [...galleryImages, ...galleryImages];

  return (
    <div className="bg-white pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16 border-2 border-neutral-100">
      <Container>
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg text-center mb-10 md:mb-12 text-neutral-800">
          International Audit Glimpse
        </h2>
        {/* Infinite scroll for audit images */}
        <div className="marquee-container overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track flex-nowrap items-center gap-3 sm:gap-4 md:gap-6">
            {duplicated.map((item, i) => (
              <div
                key={`audit-${i}`}
                className="group relative overflow-hidden rounded-xl transition-all duration-500 bg-white shrink-0 w-[350px] sm:w-[375px] md:w-[400px]"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.description}
                    title={item.description}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6">
                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-playfair font-bold transition-all duration-500 group-hover:scale-105">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AuditsMarquee;
