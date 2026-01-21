import Container from "@/components/common/container/container";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Link } from "react-router-dom";

const PlusIcon = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
};

const AboutUs = () => {
  return (
    <>
      <BreadcrumbContent />
      <HeroSection />
    </>
  );
};

export default AboutUs;

const BreadcrumbContent = () => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-3 z-30 w-full md:top-5">
        <Container>
          <div className="scrollbar-hide w-full overflow-x-auto">
            <Breadcrumb>
              <BreadcrumbList className="flex-nowrap font-geist">
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    About Us
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </Container>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <Container>
      {/* Heading */}
      <div className="space-y-4 py-14 md:space-y-6">
        <h1 className="text-center font-playfair text-3xl font-bold text-neutral-800 drop-shadow-lg sm:text-4xl md:text-5xl">
          About Us
        </h1>
        <p className="mx-auto max-w-xl text-center font-geist text-sm text-neutral-600 sm:max-w-2xl sm:text-base md:max-w-4xl md:text-lg">
          Sun Certifications was founded in 2013 with a view to simplify the
          complex regulatory compliance framework in India. For more than 10
          years, we've been empowering local and international businesses to
          satisfy their Indian certification and license obligations with ease –
          resulting in smoother market access and long-term success.
        </p>
      </div>

      <div className="relative grid grid-cols-2 border border-neutral-200 bg-neutral-50">
        <PlusIcon className="absolute left-[-11.5px] top-[-12.5px] z-10 size-6" />
        <PlusIcon className="absolute right-[-11.5px] top-[-12.5px] z-10 size-6" />
        <PlusIcon className="absolute bottom-[-12.5px] left-[-11.5px] z-10 size-6" />
        <PlusIcon className="absolute bottom-[-12.5px] right-[-11.5px] z-10 size-6" />

        <div className="pointer-events-none absolute -inset-y-12 left-0 -z-10 w-px border-l border-dashed border-neutral-300"></div>
        <div className="pointer-events-none absolute -inset-y-12 right-0 -z-10 w-px border-r border-dashed border-neutral-300"></div>
        <div className="pointer-events-none absolute -inset-x-12 top-0 -z-10 h-px border-t border-dashed border-neutral-300"></div>
        <div className="pointer-events-none absolute -inset-x-12 bottom-0 -z-10 h-px border-b border-dashed border-neutral-300"></div>

        <div className="space-y-5 border-b border-neutral-200 p-8 font-geist text-lg text-neutral-600 md:border-b-0 md:border-r">
          <p>
            Sun Certification India is ISO 10002:2018, ISO 20000-1:2018 and ISO
            27001:2022 certified, which ensures that our company provides top
            notch information and services with high expertise in a systematized
            manner.
          </p>
          <p>
            We have in-detail SOP's for each task that is done to ensure that
            the timelines are met and the clients get the best service possible.
            We have well segmented teams with a clear hierarchy which helps in
            clear communication and efficient and effective implementation of
            our SOP's.
          </p>
        </div>

        <div className="space-y-5 border-b border-neutral-200 p-8 font-geist text-lg text-neutral-600 md:border-b-0">
          <p>
            We are the first Indian company to be recognized by multiple
            bilateral chambers of commerce namely Indo-French, Indo-German,
            Indo-American, Indo-Vietnamese and Indo-Italian Chambers of
            Commerce, which serves as the benchmark or the credibility for
            international companies looking to find a reliable Indian partner
            for their certification work.
          </p>
          <p>
            We have served more than 1,200 clients, for a total of more than
            4,900 certifications in various fields, which gives an assurance of
            our service capability and we are the world's leading consulting
            firm for any kind of certifications required for Indian market.
          </p>
        </div>
      </div>

      <div className="py-14"></div>
    </Container>
  );
};
