import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const VideoSection = () => {
  const [api, setApi] = React.useState(null);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const videos = [
    {
      id: 1,
      description:
        "BIS Certification Overview For Indian and Foreign Manufacturers",
      url: "https://www.youtube.com/embed/iafdcHwzojY",
    },
    {
      id: 2,
      description:
        "Details about BIS Certification for Tables & Desks as per IS 17633:2022 for manufacturers.!!",
      url: "https://www.youtube.com/embed/wcMNd8KWRBc",
    },
    {
      id: 3,
      description: "BIS Certifications for Slugging Wrenches IS 4508",
      url: "https://www.youtube.com/embed/4JDVsoWSY3I",
    },
    {
      id: 4,
      description: "BIS Certification for Ring Wrenches IS 2029",
      url: "https://www.youtube.com/embed/_LBccl6LiOM",
    },
    {
      id: 5,
      description: "BIS Certification for Cutting Pliers IS 3650",
      url: "https://www.youtube.com/embed/JxYwTtj4wfQ",
    },
    {
      id: 6,
      description: "BIS Certification for Pipe Wrenches IS 4003",
      url: "https://www.youtube.com/embed/H1tawJliSx4",
    },
    {
      id: 7,
      description: "BIS Certification Adjustable Wrenches - IS 6149:1984",
      url: "https://www.youtube.com/embed/r1FF4cld4F4",
    },
  ];

  React.useEffect(() => {
    if (!api) return;

    const updateScrollState = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    updateScrollState();
    api.on("select", updateScrollState);
    api.on("reInit", updateScrollState);

    return () => {
      api.off("select", updateScrollState);
    };
  }, [api]);

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

  return (
    <div className="bg-white pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-3 md:mb-6">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-geist text-neutral-600 max-w-xs sm:max-w-md md:max-w-xl mx-auto px-4 sm:px-2 md:px-0">
            Explore our in-depth certification guides and expert insights
            through engaging video showcase
          </p>
        </div>

        <div className="flex gap-4 mb-6 md:mb-8 items-center justify-center">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="rounded-full w-[35px] h-[35px] md:w-[45px] md:h-[45px] flex items-center justify-center border-2 border-neutral-300 hover:border-neutral-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="hidden md:block text-neutral-600" />
            <ChevronLeft className="block md:hidden size-4 md:size-5 text-neutral-600" />
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="rounded-full w-[35px] h-[35px] md:w-[45px] md:h-[45px] flex items-center justify-center border-2 border-neutral-300 hover:border-neutral-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="hidden md:block text-neutral-600" />
            <ChevronRight className="block md:hidden size-4 md:size-5 text-neutral-600" />
          </button>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: false,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {videos.map((video) => (
              <CarouselItem
                key={video.id}
                className="pl-2 sm:pl-4 basis-full sm:basis-1/2 md:basis-1/3"
              >
                <div className="flex flex-col gap-2 sm:gap-4">
                  <iframe
                    className="rounded-xl w-full h-[200px] sm:h-[220px] md:h-[250px]"
                    src={video.url}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <span className="max-w-sm text-xs sm:text-sm md:text-normal text-neutral-600 font-geist px-1 sm:px-0">
                    {video.description}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default VideoSection;
