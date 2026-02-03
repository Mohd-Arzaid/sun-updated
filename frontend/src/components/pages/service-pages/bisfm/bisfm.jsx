import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  Check,
  SlashIcon,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Container from "@/components/common/container/container";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Services from "@/components/common/services/services";
import { useEffect, useRef, useState } from "react";
import ServicesRightSideContentEng from "@/components/common/services-right-side-content/services-right-side-content-eng";

const BISFM = () => {
  return (
    <>
      <BreadcrumbContent />
      <HeroSection />
      <IndexSection />
      <MainContent />
      <FaqSection />
      <LanguageSelector />
      <Services />
    </>
  );
};

export default BISFM;

const BreadcrumbContent = () => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-3 w-full md:top-5">
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
                    BIS Mark (ISI License) for Foreign Manufacturers
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
    <Container className="relative flex flex-col items-center justify-center gap-10 py-16 md:flex-row md:gap-14 md:py-24">
      {/* Left Side */}
      <div className="flex w-full flex-col gap-6 md:max-w-xl md:gap-8">
        <div className="flex w-fit items-center gap-3 md:gap-4">
          <Separator className="h-0.5 w-12 bg-neutral-600 md:w-14" />
          <div className="font-geist text-xs font-medium uppercase tracking-wider text-neutral-600 md:text-sm">
            Certified Expertise
          </div>
        </div>

        <div className="font-playfair text-3xl font-bold text-neutral-800 sm:text-4xl md:text-5xl">
          Indian BIS Certification for Foreign Manufactures
        </div>

        <p className="max-w-lg font-geist text-base text-neutral-600 md:text-lg">
          Foreign manufacturers need ISI mark for exports to India. Covers 600+
          mandatory products and 20,000+ voluntary products.
        </p>

        <div className="group flex cursor-pointer items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full border-2 border-neutral-300 transition-all duration-300 group-hover:border-neutral-600 md:size-12">
            <div className="size-2.5 translate-x-[-1px] rotate-45 border-r-2 border-t-2 border-neutral-600 md:size-3"></div>
          </div>
          <div className="font-geist text-base text-neutral-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-neutral-800 md:text-lg">
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
    <div className="flex w-full flex-col gap-6 md:max-w-xl md:gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex w-fit items-center gap-3 md:gap-4">
          <div className="font-geist text-xs font-medium uppercase tracking-wider text-neutral-600 md:text-sm">
            Contact Us
          </div>
          <Separator className="h-0.5 w-12 bg-neutral-600 md:w-14" />
        </div>

        <div className="font-geist text-3xl font-bold text-neutral-800 sm:text-4xl md:text-5xl">
          Book an Appointment
        </div>

        <p className="font-geist text-base text-neutral-600 md:text-lg">
          Want to contact our team and schedule a call?{" "}
          <span className="font-medium text-neutral-900">Try Now</span>
        </p>
      </div>

      <form className="flex flex-col gap-4 md:gap-5">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-5">
          <input
            type="text"
            className="w-full rounded-lg border-2 border-neutral-400 bg-neutral-100 px-3.5 py-3 font-geist text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:ring-offset-0 md:px-4 md:py-3.5"
            placeholder="Full Name *"
          />
          <input
            type="text"
            className="w-full rounded-lg border-2 border-neutral-400 bg-neutral-100 px-3.5 py-3 font-geist text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:ring-offset-0 md:px-4 md:py-3.5"
            placeholder="Email Address *"
          />
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-5">
          <input
            type="text"
            className="w-full rounded-lg border-2 border-neutral-400 bg-neutral-100 px-3.5 py-3 font-geist text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:ring-offset-0 md:px-4 md:py-3.5"
            placeholder="Contact Number *"
          />
          <input
            type="text"
            className="w-full rounded-lg border-2 border-neutral-400 bg-neutral-100 px-3.5 py-3 font-geist text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:ring-offset-0 md:px-4 md:py-3.5"
            placeholder="Company Name *"
          />
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-5">
          <input
            type="text"
            className="w-full rounded-lg border-2 border-neutral-400 bg-neutral-100 px-3.5 py-3 font-geist text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:ring-offset-0 md:px-4 md:py-3.5"
            placeholder="Product Name *"
          />
          <input
            type="text"
            className="w-full rounded-lg border-2 border-neutral-400 bg-neutral-100 px-3.5 py-3 font-geist text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:ring-offset-0 md:px-4 md:py-3.5"
            placeholder="Required Certification*"
          />
        </div>
      </form>
      <button className="w-fit rounded-lg border-2 border-neutral-800 bg-neutral-800 px-6 py-3 font-geist font-medium text-white md:mt-1.5 md:px-8 md:py-3.5">
        Book Appointment
      </button>
    </div>
  );
};

const IndexSection = () => {
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef(null);

  const [activeSection, setActiveSection] = useState("Overview");

  // Sticky Detection
  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const rect = stickyRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 44);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <div
      ref={stickyRef}
      className={`sticky top-[44px] z-40 w-full border-2 border-neutral-200 py-7 ${
        isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-neutral-100"
      }`}
    >
      <Container className="flex items-center justify-between gap-2">
        {SECTIONS.map((item) => (
          <div key={item} className="group relative w-fit cursor-pointer">
            <div
              className={`font-geist text-base font-medium uppercase tracking-wider transition-colors duration-300 ${
                item === activeSection
                  ? "text-neutral-800"
                  : "text-neutral-700 group-hover:text-neutral-800"
              }`}
            >
              {item}
            </div>
            <div
              className={`absolute bottom-0 left-0 h-0.5 w-full origin-center bg-neutral-800 transition-transform duration-300 ${
                item === activeSection
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></div>
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
    <div className="flex flex-1 flex-col gap-6 font-geist">
      <h1 className="text-4xl font-semibold text-neutral-800">
        Complete Information on Indian BIS certification under FMCS Scheme
      </h1>
      <div className="font-geist text-xl font-semibold text-neutral-800">
        What is Indian BIS?
      </div>
      <p className="font-geist text-lg text-neutral-600">
        The Bureau of Indian Standards (BIS) is India's national standards body
        under the Ministry of Consumer Affairs, Food and Public Distribution.
        Established under the BIS Act 1986, and revised in 2016, BIS plays a
        pivotal role in standardization, marking, and quality certification of
        goods. It aims to ensure the quality, safety, and reliability of
        products offered to Indian consumers.
      </p>
      <p className="font-geist text-lg text-neutral-600">
        BIS operates through various schemes that include product certification,
        hallmarking for jewelry, testing services, and training programs.
        However, one of its most internationally significant frameworks is the
        Foreign Manufacturers Certification Scheme (FMCS).
      </p>

      <Separator className="my-3 bg-neutral-300" />

      <OverviewSection />
    </div>
  );
};

const OverviewSection = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex w-fit items-center gap-4">
          <div className="text-lg font-medium uppercase tracking-wider text-neutral-600">
            Overview
          </div>
          <Separator className="h-0.5 w-16 bg-neutral-600" />
        </div>
        <div className="text-4xl font-semibold text-neutral-800">
          What is BIS certificate under FMCS?
        </div>
      </div>

      <p className="font-geist text-lg text-neutral-600">
        Introduced in the year 2000, FMCS is a mechanism by which foreign
        manufacturers can be granted a BIS license to use the ISI mark on their
        products, indicating conformity with Indian standards. The certification
        process FMCS enables overseas entities to legally sell their products in
        India without establishing a local manufacturing unit.
      </p>

      <p className="font-geist text-lg text-neutral-600">
        As of now, more than 1,650 foreign manufacturers are operating in India
        under the BIS certification system through FMCS.
      </p>

      <div className="font-geist text-xl font-semibold text-neutral-800">
        Why BIS Certification is Crucial ?
      </div>

      <p className="font-geist text-lg text-neutral-600">
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

      <div className="font-geist text-xl font-semibold text-neutral-800">
        Scope of Products Covered in BIS
      </div>

      <p className="font-geist text-lg text-neutral-600">
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

      <p className="font-geist text-lg text-neutral-600">
        The growing list indicates the increasing scope and relevance of BIS
        certificate in global trade.
      </p>

      <div className="font-geist text-xl font-semibold text-neutral-800">
        Objectives or benefits of BIS Certification for Foreign Manufacturers
        under FMCS
      </div>

      <p className="font-geist text-lg text-neutral-600">
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

      <div className="font-geist text-xl font-semibold text-neutral-800">
        Key Features of BIS certificate for foreign manufacturers
      </div>
    </>
  );
};

const PointsSection = ({ points }) => {
  return (
    <>
      <div className="flex list-none flex-col gap-3">
        {points.map((point, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex flex-shrink-0 items-center justify-center rounded-full border-2 border-neutral-200 bg-neutral-100 p-1.5">
              <Check size={12} className="text-neutral-800" />
            </div>
            <p className="text-lg text-neutral-600">{point}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const FaqSection = () => {
  const faqs = [
    {
      question:
        "What is BIS certification and why is it important for foreign manufacturers to obtain Indian BIS?",
      answer:
        "BIS certification is a regulatory process conducted by the Bureau of Indian Standards to ensure products meet Indian standards. It is essential for foreign manufacturers to gain market access, customs clearance, and consumer trust in India.",
    },
    {
      question: "What does the ISI mark represent?",
      answer:
        "The ISI mark indicates conformity to a specific Indian Standard. It is mandatory for products under the BIS certification and must be printed on packaging and products.",
    },
    {
      question: "Is BIS certification mandatory for all imports to India?",
      answer:
        "No. BIS certification is mandatory for products listed under the mandatory Indian BIS certification scheme. However, voluntary certification is available for other products.",
    },
    {
      question: "Who can apply for BIS certification under FMCS?",
      answer:
        "Only actual foreign manufacturers (not importers or traders) can apply. An Authorized Indian Representative (AIR) is mandatory to represent them in India.",
    },
    {
      question: "How long does it take to get a BIS certificate?",
      answer:
        "The average BIS certification process under FMCS takes 120 days, depending on document readiness, audit scheduling, and testing turnaround times.",
    },
    {
      question: "What are the major costs involved in BIS certification?",
      answer:
        "Costs include application fees, audit charges, lab testing fees, license and marking fees, and a Performance Bank Guarantee (PBG) from an RBI-approved Indian bank.",
    },
    {
      question: "Can the BIS license be renewed?",
      answer:
        "Yes. The BIS license is generally valid for 1–2 years and can be renewed upon meeting compliance and document update requirements.",
    },
    {
      question: "What happens if the product fails during BIS lab testing?",
      answer:
        "If a product fails, BIS may allow corrective action and re-testing. Persistent failure can result in rejection of the application.",
    },
    {
      question: "Is it necessary to hire a BIS certification consultant?",
      answer:
        "It's not mandatory but highly recommended. A consultant helps reduce delays, manage compliance, and improve approval chances by ensuring full alignment with BIS protocols.",
    },
    {
      question: "Can a BIS license be suspended or cancelled?",
      answer:
        "Yes. BIS may suspend or cancel a license for non-compliance, product failure, misuse of the ISI logo, or audit discrepancies.",
    },
    {
      question: "What documents are needed for the BIS certification process?",
      answer:
        "Documents include the FMCS application form, test reports, equipment lists, calibration certificates, factory layout, AIR appointment letter, and proof of fee payment.",
    },
    {
      question: "Can one AIR represent multiple BIS applications?",
      answer:
        "Yes, provided they are authorized for each project and have the bandwidth to handle documentation, audits, and communication for each certification.",
    },
    {
      question: "What is the role of a Performance Bank Guarantee?",
      answer:
        "A PBG assures BIS that the manufacturer will comply with Indian standards. It is refundable upon license cancellation and mandatory for all FMCS applications obtaining Indian BIS.",
    },
    {
      question: "Is BIS certification recognized outside India?",
      answer:
        "While the BIS certificate is an Indian standard, it is respected in trade contexts in many regions that accept Indian compliance, especially in Asia and Africa.",
    },
    {
      question: "How do I know if my product requires BIS certification?",
      answer:
        "Check the updated list on the official BIS website or consult with a BIS consultant to verify whether your product falls under mandatory certification.",
    },
  ];

  return (
    <div className="border-t border-neutral-200 pb-14 pt-12">
      <Container>
        {/* Heading */}
        <div className="mb-6 text-center">
          <h2 className="mb-2 font-playfair text-3xl font-bold text-neutral-800 drop-shadow-lg sm:mb-3 sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-xs px-4 font-geist text-sm text-neutral-600 sm:max-w-md sm:px-2 sm:text-base md:max-w-xl md:px-0 md:text-lg lg:text-xl">
            Can&apos;t find the answer you are looking for?{" "}
            <a
              href="/contact"
              className="font-medium text-neutral-800 underline underline-offset-4 hover:text-neutral-900"
            >
              Reach out to us!
            </a>
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="font-geist text-base text-neutral-600 md:text-lg">
                  <div className="flex-1 text-left">
                    <span className="mr-2">{index + 1}.</span>
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="font-geist text-base text-neutral-600 md:text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

const LanguageSelector = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Helper function to get country name from flag URL
  const getCountryName = (flagUrl) => {
    const countryMap = {
      cn: "China",
      de: "Germany",
      nl: "Netherlands",
      jp: "Japan",
      kr: "South Korea",
      fr: "France",
      es: "Spain",
      th: "Thailand",
      id: "Indonesia",
      it: "Italy",
      sa: "Saudi Arabia",
      vn: "Vietnam",
      gb: "United Kingdom",
    };
    // Extract country code from URL (e.g., "cn" from "https://flagcdn.com/w320/cn.png")
    const match = flagUrl.match(/\/([a-z]{2})\.png$/);
    const countryCode = match ? match[1] : null;
    return countryMap[countryCode] || "Flag";
  };

  const languages = [
    // {
    //   code: "en",
    //   name: "English",
    //   flag: "https://flagcdn.com/w320/gb.png",
    //   path: "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
    // },
    {
      code: "zh",
      name: "Chinese",
      flag: "https://flagcdn.com/w320/cn.png",
      path: "/zh/wai-guo-sheng-chan-shang-yin-du-bis-ren-zheng-zhi-nan",
    },
    {
      code: "de",
      name: "German",
      flag: "https://flagcdn.com/w320/de.png",
      path: "/de/leitfaden-zur-bis-zertifizierung-fuer-auslaendische-hersteller-indisches-bis",
    },
    {
      code: "nl",
      name: "Dutch",
      flag: "https://flagcdn.com/w320/nl.png",
      path: "/nl/gids-voor-bis-certificering-voor-buitenlandse-fabrikanten-indiaas-bis",
    },
    {
      code: "ja",
      name: "Japanese",
      flag: "https://flagcdn.com/w320/jp.png",
      path: "/ja/bis-nintei-gaikoku-seizousha-no-tame-no-gaido-india-no-bis",
    },
    {
      code: "ko",
      name: "Korean",
      flag: "https://flagcdn.com/w320/kr.png",
      path: "/ko/indo-bis-waeoe-jejo-eopeul-wihan-bis-injeung-gaideu",
    },
    {
      code: "fr",
      name: "French",
      flag: "https://flagcdn.com/w320/fr.png",
      path: "/fr/guide-certification-bis-pour-fabricants-etrangers-bis-inde",
    },
    {
      code: "es",
      name: "Spanish",
      flag: "https://flagcdn.com/w320/es.png",
      path: "/es/guia-certificacion-bis-para-fabricantes-extranjeros-bis-indio",
    },
    {
      code: "th",
      name: "Thai",
      flag: "https://flagcdn.com/w320/th.png",
      path: "/th/khumanam-kanraprong-bis-samrab-puuphlit-thangchat-bis-india",
    },
    {
      code: "id",
      name: "Indonesian",
      flag: "https://flagcdn.com/w320/id.png",
      path: "/id/panduan-sertifikasi-bis-untuk-produsen-asing-bis-india",
    },
    {
      code: "it",
      name: "Italian",
      flag: "https://flagcdn.com/w320/it.png",
      path: "/it/guida-alla-certificazione-bis-per-produttori-stranieri-bis-indiano",
    },
    {
      code: "ar",
      name: "Arabic",
      flag: "https://flagcdn.com/w320/sa.png",
      path: "/ar/dalil-shahadat-bis-lilmusanein-alajnabiyin-bis-alhind",
    },
    {
      code: "vi",
      name: "Vietnamese",
      flag: "https://flagcdn.com/w320/vn.png",
      path: "/vi/huong-dan-chung-nhan-bis-cho-nha-san-xuat-nuoc-ngoai-bis-an-do",
    },
  ];

  const currentLanguage = languages.find((lang) => lang.path === currentPath);

  return (
    <Container className="flex flex-col items-center gap-6 border-t border-neutral-200 pb-14 pt-12 md:gap-8">
      {/* Heading */}
      <div className="flex flex-col items-center">
        <p className="text-center font-geist text-base text-neutral-800 drop-shadow-lg md:text-xl">
          View This Page in Your Language
        </p>
      </div>

      {/* Language Flags Grid */}
      <div className="mx-auto w-full">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {languages.map((language) => {
            const isActive = currentPath === language.path;
            return (
              <Link
                key={language.code}
                to={language.path}
                className="group relative flex flex-col items-center justify-center transition-all duration-300"
              >
                {/* Flag */}
                <div
                  className={`flex h-[28px] w-[42px] items-center justify-center transition-transform duration-300 md:h-[45px] md:w-[65px] ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                  }`}
                >
                  <img
                    src={language.flag}
                    alt={`${getCountryName(language.flag)} Flag`}
                    title={`${getCountryName(language.flag)} Flag`}
                    className="h-full w-full rounded-sm border border-neutral-500 object-cover"
                  />
                </div>
                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-[#1A8781]"></div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </Container>
  );
};


