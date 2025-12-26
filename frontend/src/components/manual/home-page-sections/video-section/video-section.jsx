import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const getThumbnailUrl = (videoId) =>
  `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

const VideoSection = () => {
  const [api, setApi] = React.useState(null);
  const [loadedVideos, setLoadedVideos] = React.useState(new Set());
  const observerRef = React.useRef(null);

  const videos = [
    {
      id: 1,
      description:
        "BIS Certification Overview For Indian and Foreign Manufacturers",
      videoId: "iafdcHwzojY",
    },
    {
      id: 2,
      description:
        "Details about BIS Certification for Tables & Desks as per IS 17633:2022 for manufacturers.!!",
      videoId: "wcMNd8KWRBc",
    },
    {
      id: 3,
      description: "BIS Certifications for Slugging Wrenches IS 4508",
      videoId: "4JDVsoWSY3I",
    },
    {
      id: 4,
      description: "BIS Certification for Ring Wrenches IS 2029",
      videoId: "_LBccl6LiOM",
    },
    {
      id: 5,
      description: "BIS Certification for Cutting Pliers IS 3650",
      videoId: "JxYwTtj4wfQ",
    },
    {
      id: 6,
      description: "BIS Certification for Pipe Wrenches IS 4003",
      videoId: "H1tawJliSx4",
    },
    {
      id: 7,
      description: "BIS Certification Adjustable Wrenches - IS 6149:1984",
      videoId: "r1FF4cld4F4",
    },
  ];

  // Lazy load videos when they enter viewport
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const videoId = entry.target.dataset.videoId;
            if (videoId) {
              setLoadedVideos((prev) => new Set([...prev, videoId]));
            }
          }
        });
      },
      { rootMargin: "50px", threshold: 0.1 }
    );

    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  const observeVideoRef = React.useCallback((el, videoId) => {
    if (el && observerRef.current) {
      observerRef.current.observe(el);
    }
  }, []);

  const handleVideoClick = (videoId) => {
    setLoadedVideos((prev) => new Set([...prev, videoId]));
  };

  return (
    <div className="bg-white py-8 sm:py-12 md:py-14">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-3 md:mb-6">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-geist text-neutral-600 max-w-xs sm:max-w-md md:max-w-xl mx-auto px-4 sm:px-2 md:px-0">
            Explore our in-depth certification guides through engaging video
            showcase
          </p>
        </div>

        <div className="flex gap-4 mb-6 md:mb-8 items-center justify-center">
          <button
            onClick={() => api?.scrollPrev()}
            aria-label="Previous video"
            className="rounded-full w-[35px] h-[35px] md:w-[45px] md:h-[45px] flex items-center justify-center border-2 border-neutral-300 hover:border-neutral-400 transition-colors"
          >
            <ChevronLeft
              className="hidden md:block text-neutral-600"
              aria-hidden="true"
            />
            <ChevronLeft
              className="block md:hidden size-4 md:size-5 text-neutral-600"
              aria-hidden="true"
            />
          </button>

          <button
            onClick={() => api?.scrollNext()}
            aria-label="Next video"
            className="rounded-full w-[35px] h-[35px] md:w-[45px] md:h-[45px] flex items-center justify-center border-2 border-neutral-300 hover:border-neutral-400 transition-colors"
          >
            <ChevronRight
              className="hidden md:block text-neutral-600"
              aria-hidden="true"
            />
            <ChevronRight
              className="block md:hidden size-4 md:size-5 text-neutral-600"
              aria-hidden="true"
            />
          </button>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {videos.map((video) => {
              const videoId = video.videoId;
              const shouldLoad = loadedVideos.has(videoId);
              const thumbnailUrl = getThumbnailUrl(videoId);

              return (
                <CarouselItem
                  key={video.id}
                  className="pl-2 sm:pl-4 basis-full sm:basis-1/2 md:basis-1/3"
                >
                  <div className="flex flex-col gap-2 sm:gap-4">
                    <div
                      ref={(el) => observeVideoRef(el, videoId)}
                      data-video-id={videoId}
                      className="relative rounded-xl w-full h-[200px] sm:h-[220px] md:h-[250px] overflow-hidden bg-neutral-100"
                    >
                      {shouldLoad ? (
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={`https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1`}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          loading="lazy"
                        ></iframe>
                      ) : (
                        <div
                          onClick={() => handleVideoClick(videoId)}
                          className="relative w-full h-full cursor-pointer group"
                        >
                          <img
                            src={thumbnailUrl}
                            alt={video.description}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            fetchPriority="low"
                            decoding="async"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                              <svg
                                className="w-6 h-6 md:w-8 md:h-8 text-white ml-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <span className="max-w-sm text-xs sm:text-sm md:text-normal text-neutral-600 font-geist px-1 sm:px-0">
                      {video.description}
                    </span>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default VideoSection;
