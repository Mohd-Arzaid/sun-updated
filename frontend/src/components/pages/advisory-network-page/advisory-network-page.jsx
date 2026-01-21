import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  SlashIcon,
  Users,
  FileCheck,
  Package,
  Globe,
  Briefcase,
  Star,
  MapPin,
  Handshake,
  MailPlus,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "@/components/common/container/container";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AdvisoryNetworkPage = () => {
  return (
    <>
      <MetaTags />
      <BreadcrumbContent />
      <HeroSection />
      <AdvisoryCardsSection />
      <FaqsSection />
    </>
  );
};

export default AdvisoryNetworkPage;

const MetaTags = () => {
  const title =
    "Advisory Network | Independent Former BIS Experts | Sun Certifications India";
  const description =
    "Meet our vetted network of independent former BIS specialists who guide BIS audits, documentation, inspections, and corrective action support — no government affiliation, no employees.";
  const ogTitle =
    "Advisory Network of Independent Former BIS Experts | Sun Certifications India";
  const twitterTitle =
    "Independent Former BIS Experts Advisory Network | Sun Certifications India";
  const ogDescription =
    "Discover Sun Certifications India' vetted advisory network of independent former BIS specialists supporting audits, documentation, inspections, and compliance guidance—no employees, no government affiliation.";
  const twitterDescription =
    "A vetted network of independent former BIS professionals supporting BIS audits, documentation, and compliance.";
  const keywords =
    "Advisory Network BIS, Independent Former BIS Experts, BIS Documentation Guidance, BIS Certification Expert Support";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content="website" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
    </Helmet>
  );
};

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
                    Advisory Network Page
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
    <div className="border-b border-neutral-200 pb-16">
      <Container>
        <div className="py-14">
          <h1 className="mb-4 text-center font-playfair text-3xl font-bold text-neutral-800 drop-shadow-lg sm:text-4xl md:mb-6 md:text-5xl">
            Advisory Network Page
          </h1>
          <p className="mx-auto max-w-xl text-center font-geist text-sm text-neutral-600 sm:max-w-2xl sm:text-base md:max-w-4xl md:text-lg">
            We collaborate with a vetted network of independent former BIS
            professionals who provide technical guidance on audits,
            documentation, inspections, and corrective actions. These advisors
            are not employees of Sun Certifications India and do not represent
            BIS.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 border border-neutral-200 bg-neutral-50">
          <div className="border-b border-neutral-200 px-6 py-8 md:border-b-0 md:border-r">
            <div class="flex items-center justify-center gap-3">
              <div class="flex h-14 w-14 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100 p-1">
                <div class="flex h-full w-full items-center justify-center rounded-lg bg-neutral-50 shadow-input">
                  <Users className="text-black" size={24} />
                </div>
              </div>
              <p class="font-geist text-3xl font-bold text-neutral-800">25+</p>
            </div>

            <p class="mt-4 font-geist text-base text-neutral-600">
              Independent former BIS advisors
            </p>
          </div>
          <div className="border-b border-neutral-200 px-6 py-8 md:border-b-0 md:border-r">
            <div class="flex items-center justify-center gap-3">
              <div class="flex h-14 w-14 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100 p-1">
                <div class="flex h-full w-full items-center justify-center rounded-lg bg-neutral-50 shadow-input">
                  <FileCheck className="text-black" size={24} />
                </div>
              </div>
              <p class="font-geist text-3xl font-bold text-neutral-800">300+</p>
            </div>

            <p class="mt-4 font-geist text-base text-neutral-600">
              Audits supported across Industries
            </p>
          </div>
          <div className="border-b border-neutral-200 px-6 py-8 md:border-b-0 md:border-r">
            <div class="flex items-center justify-center gap-3">
              <div class="flex h-14 w-14 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100 p-1">
                <div class="flex h-full w-full items-center justify-center rounded-lg bg-neutral-50 shadow-input">
                  <Package className="text-black" size={24} />
                </div>
              </div>
              <p class="font-geist text-3xl font-bold text-neutral-800">100+</p>
            </div>

            <p class="mt-4 font-geist text-base text-neutral-600">
              Product Categories Covered
            </p>
          </div>
          
          <div className="border-b border-neutral-200 px-6 py-8 md:border-b-0">
            <div class="flex items-center justify-center gap-3">
              <div class="flex h-14 w-14 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100 p-1">
                <div class="flex h-full w-full items-center justify-center rounded-lg bg-neutral-50 shadow-input">
                  <Globe className="text-black" size={24} />
                </div>
              </div>
              <p class="font-geist text-3xl font-bold text-neutral-800">20+</p>
            </div>

            <p class="mt-4 font-geist text-base text-neutral-600">
              Countries Served (Global Support)
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

const AdvisoryCardsSection = () => {
  const advisorsData = [
    {
      id: 1,
      formerRole: "Former BIS Scientist B (2011–2020)",
      specialties: "FMCS, Electrical Products, Toys",
      region: "North Zone / PAN-India",
      clientSupport:
        "Pre-audit gap analysis, sampling plan, lab coordination, corrective action advice",
    },
    {
      id: 2,
      formerRole: "Former BIS Lab Officer (2010–2018)",
      specialties: "Cables & Wires, Transformers, Safety Standards",
      region: "Western & Southern India",
      clientSupport:
        "Lab test alignment, specification interpretation, document review",
    },
    {
      id: 3,
      formerRole: "Former BIS Audit Lead (2012–2019)",
      specialties: "Quality system audits, non-conformity prioritization",
      region: "PAN-India + Export markets",
      clientSupport: "Audit readiness roadmaps, NC closure guidance",
    },
    {
      id: 4,
      formerRole: "Former BIS Scientist B (2011–2020)",
      specialties: "FMCS, Electrical Products, Household Appliances",
      region: "North Zone / PAN-India",
      clientSupport:
        "Pre-audit gap analysis, audit readiness checklist, corrective action planning",
    },
    {
      id: 5,
      formerRole: "Former BIS Laboratory Officer (2010–2018)",
      specialties: "Cables & Wires, Transformers, Safety Testing",
      region: "West & South India",
      clientSupport:
        "Lab coordination, test sample planning, test report interpretation",
    },
    {
      id: 6,
      formerRole: "Former BIS Certification Officer (2012–2019)",
      specialties: "ISI Mark Scheme, Factory Inspection Readiness",
      region: "PAN-India",
      clientSupport:
        "Factory audit preparation, documentation verification, NC closure guidance",
    },
    {
      id: 7,
      formerRole: "Former BIS Scientist C (2009–2017)",
      specialties: "Toys, Furniture, Consumer Products",
      region: "North & Central India",
      clientSupport:
        "Product standard interpretation, compliance gap identification, audit preparation",
    },
    {
      id: 8,
      formerRole: "Former BIS FMCS Auditor (2013–2021)",
      specialties: "Foreign Manufacturers Certification Scheme (FMCS)",
      region: "Global / Export Markets",
      clientSupport:
        "FMCS documentation support, audit simulation, inspection preparedness",
    },
    {
      id: 9,
      formerRole: "Former BIS Lab & Inspection Officer (2011–2019)",
      specialties: "Steel Products, Pipes & Tubes, Industrial Materials",
      region: "East & North India",
      clientSupport:
        "Sampling methodology, test coordination, specification clarification",
    },
  ];

  return (
    <div className="pb-12 pt-8 sm:pb-14 sm:pt-10 md:pb-16 md:pt-12">
      <Container>
        <h1 className="mb-4 text-center font-playfair text-3xl font-bold text-neutral-800 drop-shadow-lg sm:text-4xl md:mb-6 md:text-5xl">
          Our Advisor Micro-Profiles
        </h1>
        <p className="mx-auto max-w-xl text-center font-geist text-sm text-neutral-600 sm:max-w-2xl sm:text-base md:max-w-3xl md:text-lg">
          Below are representative examples of the types of specialists in our
          network. Actual advisors are engaged per assignment and verified prior
          to engagement.
        </p>

        <div className="mt-12 grid grid-cols-3 gap-5">
          {advisorsData.map((advisor) => (
            <div
              key={advisor.id}
              className="rounded-3xl border border-neutral-200 bg-neutral-50 p-2"
            >
              <div className="h-full rounded-2xl bg-white px-8 py-8 shadow-input">
                <div className="flex items-center gap-2">
                  <Briefcase className="text-neutral-800" size={18} />
                  <h3 className="font-geist text-lg font-semibold text-neutral-800">
                    Former Role
                  </h3>
                </div>
                <p className="font-geist text-base text-neutral-600">
                  {advisor.formerRole}
                </p>

                <Separator className="my-5 border border-neutral-200" />

                <div className="flex items-center gap-2">
                  <Star className="text-neutral-800" size={18} />
                  <h3 className="font-geist text-lg font-semibold text-neutral-800">
                    Specialties
                  </h3>
                </div>
                <p className="font-geist text-base text-neutral-600">
                  {advisor.specialties}
                </p>

                <Separator className="my-5 border border-neutral-200" />

                <div className="flex items-center gap-2">
                  <MapPin className="text-neutral-800" size={18} />
                  <h3 className="font-geist text-lg font-semibold text-neutral-800">
                    Region
                  </h3>
                </div>
                <p className="font-geist text-base text-neutral-600">
                  {advisor.region}
                </p>

                <Separator className="my-5 border border-neutral-200" />

                <div className="flex items-center gap-2">
                  <MailPlus className="text-neutral-800" size={18} />
                  <h3 className="font-geist text-lg font-semibold text-neutral-800">
                    Client Support
                  </h3>
                </div>
                <p className="font-geist text-base text-neutral-600">
                  {advisor.clientSupport}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

const FaqsSection = () => {
  const faqs = [
    {
      question: "Are these BIS officers employees of Sun Consultants?",
      answer:
        "No. They are independent consultants engaged on an assignment basis. They are not our employees and do not represent BIS.",
    },
    {
      question: "How are advisors verified?",
      answer:
        "Advisors undergo credential checks, conflict checks, NDA signing, and quality reviews before engagement.",
    },
    {
      question: "Will they speak on behalf of BIS?",
      answer:
        "No. Advisors provide guidance only; they cannot represent or speak for BIS or any government body.",
    },
    {
      question: "Are your advisors currently associated with BIS?",
      answer:
        "No. All advisors are former BIS professionals and have no current affiliation with BIS or any government authority.",
    },
    {
      question:
        "Do advisors directly interact with BIS officials on behalf of clients?",
      answer:
        "No. Advisors provide technical guidance only. All formal communication, applications, and submissions are handled by the applicant or through official BIS portals, as per regulations.",
    },
  ];
  return (
    <div className="border-t border-neutral-200 pb-12 pt-8 sm:pb-14 sm:pt-10 md:pb-16 md:pt-12">
      <Container>
        <h1 className="mb-4 text-center font-playfair text-3xl font-bold text-neutral-800 drop-shadow-lg sm:text-4xl md:mb-3 md:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto max-w-xl text-center font-geist text-sm text-neutral-600 sm:max-w-2xl sm:text-base md:max-w-3xl md:text-xl">
          Can&apos;t find the answer you are looking for?{" "}
          <a
            href="/contact"
            className="font-medium text-neutral-800 underline underline-offset-4 transition-colors hover:text-neutral-900"
          >
            Reach out to us!
          </a>
        </p>

        <div className="mx-auto mt-6 max-w-5xl md:mt-8">
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
