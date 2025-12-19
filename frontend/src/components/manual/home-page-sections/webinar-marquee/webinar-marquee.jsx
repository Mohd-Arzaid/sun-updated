import React from "react";

const WebinarMarquee = () => {
  // Gallery images
  const galleryImages = [
    {
      id: 1,
      image: "/seminarImages/Exhibition-1.webp",
      title: "Exhibition 1",
      description:
        "Medicall ( Kolkata ) exibition for BIS & CDSCO approval for  Medical Products.",
    },
    {
      id: 2,
      image: "/seminarImages/Exhibition-2.webp",
      title: "Exhibition 2",
      description:
        "Medicall ( Delhi ) exibition for BIS & CDSCO approval for  Medical Products.",
    },
    {
      id: 3,
      image: "/seminarImages/Exhibition-3.webp",
      title: "Exhibition 3",
      description: "Seminar / Training Session on BIS Regulations in Thailand ",
    },
    {
      id: 4,
      image: "/seminarImages/Seminar-4.webp",
      title: "Seminar 4",
      description:
        "Training for BIS Certification on Footwear for members of footwear association New Delhi",
    },
    {
      id: 5,
      image: "/seminarImages/Seminar-5.webp",
      title: "Seminar 5",
      description:
        "Medicall ( Chennai ) exibition for BIS & CDSCO approval for  Medical Products.",
    },
    {
      id: 6,
      image: "/seminarImages/Seminar-6.webp",
      title: "Seminar 6",
      description:
        "Training for BIS Certification to Footwear Import Association in New Delhi , India",
    },
    {
      id: 7,
      image: "/seminarImages/Seminar-6-2.webp",
      title: "Seminar 6-2",
      description: "Training sessions on BIS in Metal Industry",
    },
    {
      id: 8,
      image: "/seminarImages/Seminar-7.webp",
      title: "Seminar 7",
      description: "Participation in Footwear India Expo ( New Delhi )",
    },
    {
      id: 9,
      image: "/seminarImages/Seminar-7-2.webp",
      title: "Seminar 7-2",
      description:
        "Seminar on BIS Certification for Steel and Aluminium QCOs in Kolkata",
    },
    {
      id: 10,
      image: "/seminarImages/Seminar-8.webp",
      title: "Seminar 8",
      description: "Seminar on BIS Certification for Toys in Mumbai , India",
    },
    {
      id: 11,
      image: "/seminarImages/Seimar-8-2.webp",
      title: "Seminar 8-2",
      description:
        "Specialized training for footwear manufacturers and suppliers.",
    },
    {
      id: 12,
      image: "/seminarImages/Seminar-9.webp",
      title: "Seminar 9",
      description:
        "Participation in Footwear Conclave on BIS Certification at Agra",
    },
    {
      id: 13,
      image: "/seminarImages/Seminar-10.webp",
      title: "Seminar 10",
      description:
        "Invited by Malaysian Government to educate Malaysian Exporters about Indian BIS Regulations",
    },
    {
      id: 14,
      image: "/seminarImages/Seminar-10-2.webp",
      title: "Seminar 10-2",
      description:
        "Seminar on Indian BIS Certificate in Vietnam for Furniture Products",
    },
    {
      id: 15,
      image: "/seminarImages/Seminar-10-3.webp",
      title: "Seminar 10-3",
      description: "Certificate of appreciation from Malaysian Government.",
    },
    {
      id: 16,
      image: "/seminarImages/Seminar-11.webp",
      title: "Seminar 11",
      description:
        "Training sessions for members of Retailers Association of India (RAI)",
    },
  ];

  const duplicated = [...galleryImages, ...galleryImages];

  return (
    <div className="bg-white pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16 border-2 border-neutral-100">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="font-playfair tracking-tight text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg text-center mb-10 md:mb-12 text-neutral-800">
          Seminars/Exhibitions
        </h2>
        {/* Infinite scroll for audit images */}
        <div className="marquee-container overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track flex-nowrap items-center gap-3 sm:gap-4 md:gap-6">
            {duplicated.map((item, i) => (
              <div
                key={`audit-${i}`}
                className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl bg-white shrink-0 w-[350px] sm:w-[375px] md:w-[400px]"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarMarquee;
