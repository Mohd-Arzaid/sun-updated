import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Check, PhoneCall, SlashIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "@/components/common/container/container";

const BISFM = () => {
  return (
    <div className="relative">
      <BreadcrumbContent />
      <HeroSection />
      <IndexSection />
      <MainContent />
    </div>
  );
};

export default BISFM;

const BreadcrumbContent = () => {
  return (
    <div className="absolute top-3 md:top-5 left-0 w-full z-30">
      <Container>
        <div className="w-full overflow-x-auto scrollbar-hide">
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
                  BIS Mark (ISI License) for Foreign Manufacturers
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </Container>
    </div>
  );
};

const HeroSection = () => {
  return (
    <Container className="relative flex items-center justify-center gap-14 py-24">
      {/* Left Side */}
      <div className="flex flex-col gap-8 max-w-xl w-full">
        <div className="flex items-center gap-4 w-fit">
          <Separator className="h-0.5 w-14 bg-neutral-600" />
          <div className="text-neutral-600 font-geist text-sm font-medium tracking-wider uppercase">
            Certified Expertise
          </div>
        </div>

        <div className="font-playfair text-5xl font-bold text-neutral-800">
          Indian BIS Certification for Foreign Manufactures
        </div>

        <p className="max-w-lg text-neutral-600 font-geist text-lg">
          Foreign manufacturers need ISI mark for exports to India. Covers 600+
          mandatory products and 20,000+ voluntary products.
        </p>

        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-neutral-300 group-hover:border-neutral-600 transition-all duration-300">
            <div className="w-3 h-3 border-t-2 border-r-2 border-neutral-600 rotate-45 translate-x-[-1px]"></div>
          </div>
          <div className="font-geist text-neutral-600 text-lg group-hover:text-neutral-800 group-hover:translate-x-1 transition-all duration-300">
            View Services
          </div>
        </div>
      </div>

      {/* Right Side */}
      <ContactUsForm />
    </Container>
  );
};

const ContactUsForm = () => {
  return (
    <div className="max-w-xl w-full flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4 w-fit">
          <div className="text-neutral-600 font-geist text-sm font-medium tracking-wider uppercase">
            Contact Us
          </div>
          <Separator className="h-0.5 w-14 bg-neutral-600" />
        </div>

        <div className="font-geist text-5xl font-bold text-neutral-800">
          Book an Appointment
        </div>

        <p className="text-neutral-600 font-geist text-lg">
          Want to contact our team and schedule a call?{" "}
          <span className="text-neutral-900 font-medium">Try Now</span>
        </p>
      </div>

      <form className="flex flex-col gap-5">
        <div className="flex items-center justify-between gap-5">
          <input
            type="text"
            className="bg-neutral-100 border-2 w-full border-neutral-400 rounded-lg px-4 py-3.5 font-geist text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:ring-offset-0"
            placeholder="Full Name *"
          />
          <input
            type="text"
            className="bg-neutral-100 border-2 w-full border-neutral-400 rounded-lg px-4 py-3.5 font-geist text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:ring-offset-0"
            placeholder="Email Address *"
          />
        </div>
        <div className="flex items-center justify-between gap-5">
          <input
            type="text"
            className="bg-neutral-100 border-2 w-full border-neutral-400 rounded-lg px-4 py-3.5 font-geist text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:ring-offset-0"
            placeholder="Contact Number *"
          />
          <input
            type="text"
            className="bg-neutral-100 border-2 w-full border-neutral-400 rounded-lg px-4 py-3.5 font-geist text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:ring-offset-0"
            placeholder="Company Name *"
          />
        </div>
        <div className="flex items-center justify-between gap-5">
          <input
            type="text"
            className="bg-neutral-100 border-2 w-full border-neutral-400 rounded-lg px-4 py-3.5 font-geist text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:ring-offset-0"
            placeholder="Product Name *"
          />
          <input
            type="text"
            className="bg-neutral-100 border-2 w-full border-neutral-400 rounded-lg px-4 py-3.5 font-geist text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:ring-offset-0"
            placeholder="Required Certification*"
          />
        </div>
      </form>
      <button className="bg-neutral-800 border-2 border-neutral-800 mt-1.5 w-fit text-white font-geist font-medium px-8 py-3.5 rounded-lg">
        Book Appointment
      </button>
    </div>
  );
};

const IndexSection = () => {
  const SECTIONS = [
    "Overview",
    "Standardization",
    "Representation",
    "Document",
    "Process",
    "Costing",
    "Surveillance",
    "Facilitator",
  ];
  return (
    <div className="w-full py-7 border-2 border-neutral-200 bg-neutral-100">
      <Container className="flex items-center justify-between gap-2">
        {SECTIONS.map((section) => (
          <div key={section} className="relative cursor-pointer group w-fit">
            <div className="text-base font-medium tracking-wider text-neutral-800 font-geist uppercase">
              {section}
            </div>
            {section === "Overview" && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-800"></div>
            )}
          </div>
        ))}
      </Container>
    </div>
  );
};

const MainContent = () => {
  return (
    <Container className="flex items-start justify-between gap-6 py-12">
      <MainContentLeft />
      <ServicesRightSideContentEng />
    </Container>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 flex flex-col font-geist gap-6">
      <h1 className="text-4xl font-semibold text-neutral-800">
        Complete Information on Indian BIS certification under FMCS Scheme
      </h1>
      <div className="text-neutral-800 font-semibold font-geist text-xl">
        What is Indian BIS?
      </div>
      <p className="text-neutral-600 font-geist text-lg">
        The Bureau of Indian Standards (BIS) is India's national standards body
        under the Ministry of Consumer Affairs, Food and Public Distribution.
        Established under the BIS Act 1986, and revised in 2016, BIS plays a
        pivotal role in standardization, marking, and quality certification of
        goods. It aims to ensure the quality, safety, and reliability of
        products offered to Indian consumers.
      </p>
      <p className="text-neutral-600 font-geist text-lg">
        BIS operates through various schemes that include product certification,
        hallmarking for jewelry, testing services, and training programs.
        However, one of its most internationally significant frameworks is the
        Foreign Manufacturers Certification Scheme (FMCS).
      </p>

      <Separator className="bg-neutral-300 my-3" />

      <OverviewSection />
    </div>
  );
};

const OverviewSection = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4 w-fit">
          <div className="text-neutral-600 text-lg font-medium tracking-wider uppercase">
            Overview
          </div>
          <Separator className="h-0.5 w-16 bg-neutral-600" />
        </div>
        <div className="text-4xl font-semibold text-neutral-800">
          What is BIS certificate under FMCS?
        </div>
      </div>

      <p className="text-neutral-600 font-geist text-lg">
        Introduced in the year 2000, FMCS is a mechanism by which foreign
        manufacturers can be granted a BIS license to use the ISI mark on their
        products, indicating conformity with Indian standards. The certification
        process FMCS enables overseas entities to legally sell their products in
        India without establishing a local manufacturing unit.
      </p>

      <p className="text-neutral-600 font-geist text-lg">
        As of now, more than 1,650 foreign manufacturers are operating in India
        under the BIS certification system through FMCS.
      </p>

      <div className="text-neutral-800 font-semibold font-geist text-xl">
        Why BIS Certification is Crucial ?
      </div>

      <p className="text-neutral-600 font-geist text-lg">
        Obtaining a BIS certificate is more than a legal requirement—it's a
        gateway to India's vast consumer market. Here are a few key reasons why
        it's essential:
      </p>

      <PointsSection
        points={[
          "Legal Compliance: Products must comply with relevant Indian standards.",
          "Brand Credibility: The ISI mark serves as proof of quality and boosts consumer trust.",
          "Customs Clearance: Without a valid BIS licence, products may be rejected at customs.",
          "Market Access: Helps foreign brands gain seamless entry and widespread acceptance in India.",
          "Risk Mitigation: Ensures that products are safe, thus avoiding potential recalls and liability issues.",
        ]}
      />

      <div className="text-neutral-800 font-semibold font-geist text-xl">
        Scope of Products Covered in BIS
      </div>

      <p className="text-neutral-600 font-geist text-lg">
        BIS has listed over 600 products under mandatory certification, and over
        20,000 items are eligible for voluntary BIS certificate. These span a
        wide range of industries:
      </p>

      <PointsSection
        points={[
          "Electronics & IT hardware",
          "Automotive parts",
          "Household appliances",
          "Steel products",
          "Cement and construction materials etc.",
        ]}
      />

      <p className="text-neutral-600 font-geist text-lg">
        The growing list indicates the increasing scope and relevance of BIS
        certificate in global trade.
      </p>

      <div className="text-neutral-800 font-semibold font-geist text-xl">
        Objectives or benefits of BIS Certification for Foreign Manufacturers
        under FMCS
      </div>

      <p className="text-neutral-600 font-geist text-lg">
        The FMCS and BIS certificate regime aim to:
      </p>

      <PointsSection
        points={[
          "Use of the ISI mark without a valid BIS license is punishable by law.",
          "Certified products must display both the ISI logo and CM/L number (Certificate of Manufacturing License).",
          "Violators may face product bans, fines, or even criminal prosecution.",
          "Build trust between consumers and imported brands.",
          "Facilitate fair trade and a level playing field.",
        ]}
      />

      <div className="text-neutral-800 font-semibold font-geist text-xl">
        Key Features of BIS certificate for foreign manufacturers
      </div>
    </>
  );
};

const PointsSection = ({ points }) => {
  return (
    <>
      <div className="flex flex-col gap-3 list-none">
        {points.map((point, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="bg-neutral-100 border-2 border-neutral-200 p-1.5 rounded-full flex-shrink-0 flex items-center justify-center">
              <Check size={12} className="text-neutral-800" />
            </div>
            <p className="text-lg text-neutral-600">{point}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const ServicesRightSideContentEng = () => {
  return (
    <div className="max-w-sm w-full sticky top-36 p-6 rounded-lg shadow-input bg-neutral-100">
      <div className="flex gap-2 items-center">
        <PhoneCall className="text-neutral-800" />
        <div className="text-xl font-geist font-semibold text-neutral-800">
          Request a Free Callback
        </div>
      </div>
    </div>
  );
};
