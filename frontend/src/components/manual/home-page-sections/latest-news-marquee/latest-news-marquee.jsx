import React from "react";
import { Link } from "react-router-dom";

const latestNews = [
  {
    id: 1,
    title: "📢 BIS certification for Chairs and stools",
  },
  {
    id: 2,
    title: "🆕 BIS Notification for Tables and desks",
  },
  {
    id: 3,
    title: "🔔 New QCO for Steel Products",
  },
  {
    id: 4,
    title: "📋 BIS License Update for Footwear",
  },
  {
    id: 5,
    title: "⚡ Latest BIS Standards for Electronics",
  },
];

const LatestNewsMarquee = () => {
  const duplicated = [...latestNews, ...latestNews];

  return (
    <div className="bg-white pt-8 pb-10 sm:pt-10 sm:pb-14 md:pt-12 md:pb-14">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-6 sm:mb-9">
          <h2 className="font-playfair tracking-tight text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg text-center text-neutral-800">
            Latest Updates
          </h2>
        </div>

        {/* Marquee for Latest News Titles */}
        <div className="bg-neutral-100 w-full py-3 md:py-5 border-2 border-neutral-100 marquee-container overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track flex-nowrap items-center gap-1 md:gap-6">
            {duplicated.map((item, i) => (
              <div
                key={`news-${i}`}
                className="flex items-center justify-center px-3 md:px-6 py-2 md:py-4 shrink-0"
              >
                <p className="text-base md:text-xl font-geist font-medium text-slate-800 whitespace-nowrap">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsMarquee;
