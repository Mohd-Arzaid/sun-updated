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
  return (
    <div className="bg-white w-full py-3 md:py-5">
      <div className="max-w-[84rem] mx-auto px-4">
        <div className="flex flex-row items-center gap-4 md:gap-6">
          {/* Heading on Left */}
          <div className="shrink-0 hidden md:block">
            <Link to="/bis-qco-updates">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800">
                Latest{" "}
                <span className="bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent">
                  Updates
                </span>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 511.995 511.995"
                  xmlSpace="preserve"
                  className="hidden md:inline-block w-12 h-12 md:w-16 md:h-16 ml-1 md:ml-2"
                >
                  <g>
                    <path
                      className="fill-[#522087]"
                      d="M386.05,181.439c11.98,10.72,21.281,25.537,26.167,37.832c9.616,24.118,11.507,51.862,2.523,76.768 c-5.833,16.079-10.877,24.591-23.487,39.566l15.606,15.133c32-29.32,40.197-78.976,33.103-116.493 c-1.419-7.093-3.94-15.921-7.093-23.33c-7.409-17.183-15.764-30.424-31.369-45.399l-15.29,15.921h-0.158V181.439z M321.734,227.31 c20.019,20.177,18.443,51.862,2.049,66.05l15.764,15.448c25.064-22.542,26.325-70.779-2.838-97.576l-14.818,16.079h-0.157V227.31z M353.892,204.453c31.212,29.478,32.946,76.138,3.468,110.345l15.606,15.133c17.813-14.187,28.216-48.709,27.429-71.566 c-0.946-23.33-11.35-54.069-31.685-69.99L353.892,204.453z"
                    ></path>
                    <path
                      className="fill-[#522087]"
                      d="M420.414,258.049c0.473,12.769-1.419,25.695-5.833,37.832c-5.833,16.079-10.877,24.591-23.487,39.566 l15.606,15.133c25.537-23.33,35.941-59.744,35.468-92.532h-21.596L420.414,258.049L420.414,258.049z M335.921,258.049h22.069 c1.104,19.389-5.517,38.778-18.759,50.758l-15.764-15.448C332.611,285.321,337.182,271.921,335.921,258.049z M378.168,258.049 h21.911v0.158c0.946,22.857-9.458,57.379-27.271,71.566l-15.606-15.133c14.66-17.024,21.596-37.202,21.123-56.749L378.168,258.049z"
                    ></path>
                    <path
                      className="fill-[#ffffff]"
                      d="M131.468,197.518h55.488v105.773c0,6.148-5.044,11.192-11.192,11.192h-44.295 c-6.148,0-11.192-5.044-11.192-11.192v-94.581C120.276,202.562,125.32,197.518,131.468,197.518z"
                    ></path>
                    <path
                      className="fill-[#522087]"
                      d="M120.276,303.921C92.532,303.763,69.833,282.325,69.833,256l0,0c0-26.325,22.7-47.763,50.443-47.921 C120.276,208.078,120.276,303.921,120.276,303.921z"
                    ></path>
                    <path
                      className="fill-[#522087]"
                      d="M259.783,132.413l-72.67,65.103v116.966l72.67,65.103c6.306,5.674,34.207,8.197,34.207,1.261V130.995 c0-6.936-27.901-4.414-34.207,1.261V132.413z"
                    ></path>
                    <path
                      className="fill-[#ffffff]"
                      d="M186.956,255.999v47.921c0,5.833-5.044,10.561-11.192,10.561h-44.295 c-6.148,0-11.192-4.729-11.192-10.561V256L186.956,255.999L186.956,255.999z"
                    ></path>
                    <g>
                      <path
                        className="fill-[#522087]"
                        d="M120.276,303.921C92.532,303.763,69.833,282.325,69.833,256l0,0h50.443 C120.276,256,120.276,303.921,120.276,303.921z"
                      ></path>
                      <path
                        className="fill-[#522087]"
                        d="M186.956,255.999v58.483l72.67,65.103c6.306,5.674,34.207,8.197,34.207,1.261V255.842H186.798 L186.956,255.999z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </h2>
            </Link>
          </div>

          {/* Latest News Marquee on Right */}
          <div className="flex-1 min-w-0">
            <div className="marquee-container overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="marquee-track flex-nowrap items-center gap-1 md:gap-6">
                {[...latestNews, ...latestNews].map((item, i) => (
                  <div
                    key={`news-${i}`}
                    className="flex items-center justify-center px-3 md:px-6 py-2 md:py-4 shrink-0"
                  >
                    <p className="text-lg md:text-xl font-geist font-medium text-neutral-800 whitespace-nowrap">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsMarquee;
