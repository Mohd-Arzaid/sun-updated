import { ArrowRight, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { MailPlus } from "lucide-react";
import Container from "@/components/common/container/container";

const Footer = () => {
  return (
    <>
      <div className="border-2 border-neutral-100 bg-white py-10 sm:py-12 md:py-12">
        <Container>
          {/* Heading Section */}
          <div className="text-center">
            <h2 className="mb-2 font-playfair text-3xl font-bold text-neutral-800 drop-shadow-lg sm:mb-3 sm:text-4xl md:text-5xl">
              Want to know more?
            </h2>
            <p className="mx-auto max-w-xs px-4 font-geist text-sm text-neutral-600 sm:max-w-md sm:px-2 sm:text-base md:max-w-xl md:px-0 md:text-lg lg:text-xl">
              Email us at{" "}
              <span className="font-medium text-neutral-800 underline underline-offset-4">
                admin@bis-certifications.com
              </span>{" "}
              or use one of the options below. We usually get back within 24
              hours.
            </p>

            <div className="mx-auto my-4 flex max-w-xs items-center px-4 sm:my-8 sm:max-w-md sm:px-2 md:max-w-xl md:px-0">
              <div className="h-px w-full bg-neutral-600"></div>
              <span className="px-4 text-center font-geist text-sm text-neutral-600 md:text-xl">
                or
              </span>
              <div className="h-px w-full bg-neutral-600"></div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href="https://wa.me/918766262463"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="size-7 text-neutral-800 transition-colors hover:text-neutral-800"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                </svg>
                <span className="sr-only">WhatsApp</span>
              </a>

              <a
                href="tel:+918010505057"
                rel="noreferrer noopener"
                aria-label="Call us at +91 80105 05057"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="size-8 text-neutral-800 transition-colors hover:text-neutral-800"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.9-4-8.9-9-8.9v2c3.9 0 7 3.1 7 6.9zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3 1.3 3 3z"></path>
                </svg>
                <span className="sr-only">Call</span>
              </a>

              <a
                href="https://www.linkedin.com/company/sun-consultants-engineers/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="size-7 text-neutral-800 transition-colors hover:text-neutral-800"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-neutral-200 bg-neutral-50">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
            <div className="text-center md:text-left">
              <p className="font-geist text-xl text-neutral-800">
                Subscribe to our newsletter
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-md border border-neutral-300 bg-neutral-100 px-4 py-3 pr-12 font-geist text-sm text-neutral-800 placeholder-neutral-500 focus:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-800 sm:w-80"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded bg-neutral-200 p-2 transition-colors">
                  <ArrowRight className="h-4 w-4 text-neutral-800" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="border-t border-neutral-50 bg-gradient-to-b from-neutral-50 to-white py-10 sm:py-12 md:py-12">
        <Container className="pb-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
            {/* Company Logo and Name */}
            <div className="col-span-2">
              <Link to="/" className="flex items-center gap-2.5">
                <img
                  src="/company-logo/company-logo.webp"
                  alt="Sun Certifications India logo"
                  title="Sun Certifications India logo"
                  className="h-10 w-10 flex-shrink-0 object-contain lg:h-12 lg:w-12"
                />
                <div className="mt-0.5 text-center">
                  <div className="font-geist text-base font-semibold uppercase text-neutral-800 lg:text-xl">
                    Sun Certifications India
                  </div>
                  <div className="-mt-0.5 font-geist text-xs font-medium uppercase tracking-tight text-neutral-600 lg:text-sm">
                    Simplifying Certifications
                  </div>
                </div>
              </Link>

              {/* Address Info */}
              <div className="my-8 max-w-sm font-geist text-neutral-600">
                ITL Twin Tower, Netaji Subhash Place , Pitampura Delhi -
                110034{" "}
              </div>
            </div>

            <div className="space-y-6">
              <div className="font-geist text-lg font-semibold text-neutral-800">
                Our Services
              </div>
              <ul className="space-y-3">
                {[
                  {
                    name: "TEC",
                    href: "/information-about-tec-certificate-mtcte",
                  },
                  {
                    name: "ISI MARK",
                    href: "/a-guide-to-bis-certification-indian-bis",
                  },
                  { name: "CE CERTIFICATION", href: "/ce-certification" },
                  {
                    name: "EPR",
                    href: "/a-guide-on-how-to-obtain-epr-certificate",
                  },
                  {
                    name: "ROHS",
                    href: "/restriction-of-hazardous-substance-rohs-certificate",
                  },
                  {
                    name: "WPC",
                    href: "/information-about-wpc-certificate-eta-approval",
                  },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group flex items-center font-geist text-sm uppercase text-neutral-600 transition-colors hover:text-neutral-800"
                    >
                      <ChevronRight className="mr-2 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      <span className="transition-transform group-hover:translate-x-1">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="font-geist text-lg font-semibold text-neutral-800">
                Company
              </div>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "#" },
                  { name: "Contact Us", href: "#" },
                  { name: "FAQ's", href: "#" },
                  { name: "Sitemap", href: "#" },
                ].map((category) => (
                  <li key={category.name}>
                    <a
                      href={category.href}
                      className="group flex items-center font-geist text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                    >
                      <ChevronRight className="mr-2 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      <span className="transition-transform group-hover:translate-x-1">
                        {category.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="font-geist text-lg font-semibold text-neutral-800">
                News & Notifications
              </div>
              <ul className="space-y-3">
                {[
                  {
                    name: "Blogs",
                    href: "/Blogs",
                  },
                  { name: "Latest Updates", href: "/latest-updates" },
                  { name: "Ministry Updates", href: "/ministry-updates" },
                  { name: "Webinar Updates", href: "/webinar-updates" },
                  { name: "Gallery", href: "/gallery" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group flex items-center font-geist text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                    >
                      <ChevronRight className="mr-2 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      <span className="transition-transform group-hover:translate-x-1">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <div className="border-t border-neutral-200 bg-neutral-50 py-4">
        <Container>
          <div className="mb-4 mt-6 flex flex-col items-center gap-4 md:mt-4 md:flex-row md:justify-between md:gap-0">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://www.linkedin.com/company/sun-certifications-india/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our GitHub profile"
              >
                <LinkedInLogoIcon className="h-5 w-6 cursor-pointer text-neutral-600 duration-200 hover:-translate-y-2 hover:text-neutral-800 md:h-6 md:w-8" />
                <span className="sr-only">linkedin</span>
              </a>

              <a
                href="mailto:admin@bis-certifications.com?body=Hello"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send us an email"
              >
                <MailPlus className="h-5 w-6 cursor-pointer text-neutral-600 duration-200 hover:-translate-y-2 hover:text-neutral-800 md:h-6 md:w-8" />
                <span className="sr-only">Email</span>
              </a>

              <a
                href="https://www.instagram.com/suncertificationsindia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <InstagramLogoIcon className="h-5 w-6 cursor-pointer text-neutral-600 duration-200 hover:-translate-y-2 hover:text-neutral-800 md:h-6 md:w-8" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>

            <span className="text-center font-geist text-[13px] text-neutral-600 md:text-base">
              Copyright © 2025 Sun Certifications India. All Rights Reserved.
            </span>

            <div className="flex items-center gap-2 md:hidden">
              <Link
                to="/privacy-policy"
                className="font-geist text-[13px] text-neutral-600 hover:text-neutral-800 hover:underline md:text-base"
              >
                Privacy Policy
              </Link>
              <div className="size-1.5 shrink-0 rounded-full bg-neutral-400 md:size-2"></div>
              <Link
                to="/terms-and-conditions"
                className="font-geist text-[13px] text-neutral-600 hover:text-neutral-800 hover:underline md:text-base"
              >
                Terms of Service
              </Link>
            </div>

            <div className="hidden size-2 shrink-0 rounded-full bg-neutral-400 md:block"></div>

            <Link
              to="/privacy-policy"
              className="hidden font-geist text-neutral-600 hover:text-neutral-800 hover:underline md:block"
            >
              Privacy Policy
            </Link>

            <div className="hidden size-2 shrink-0 rounded-full bg-neutral-400 md:block"></div>

            <Link
              to="/terms-and-conditions"
              className="hidden font-geist text-neutral-600 hover:text-neutral-800 hover:underline md:block"
            >
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
