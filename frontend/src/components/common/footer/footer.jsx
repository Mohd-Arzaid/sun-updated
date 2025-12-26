import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-white py-10 sm:py-12 md:py-12">
        <div className="max-w-[84rem] mx-auto px-4 sm:px-6 md:px-12">
          {/* Heading Section */}
          <div className="text-center">
            <h2 className="font-playfair tracking-tight text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 drop-shadow-lg mb-2 sm:mb-3">
              Want to know more?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-geist text-neutral-600 max-w-xs sm:max-w-md md:max-w-xl mx-auto px-4 sm:px-2 md:px-0">
              Email us at{" "}
              <span className="text-neutral-900 font-medium underline underline-offset-4">
                admin@bis-certifications.com
              </span>{" "}
              or use one of the options below. We usually get back within 24
              hours.
            </p>

            <div className="flex items-center max-w-xs sm:max-w-md md:max-w-xl mx-auto px-4 sm:px-2 md:px-0 my-4 sm:my-8">
              <div className="h-px w-full bg-neutral-600"></div>
              <span className="text-neutral-600 px-4 font-geist text-center text-sm md:text-xl">
                or
              </span>
              <div className="h-px w-full bg-neutral-600"></div>
            </div>

            <div className="flex gap-6 flex-wrap items-center justify-center">
              <a
                href="https://wa.me/918766262463"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="size-7 text-neutral-800 hover:text-neutral-900 transition-colors"
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
                  className="size-8 text-neutral-800 hover:text-neutral-900 transition-colors"
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
                  className="size-7 text-neutral-800 hover:text-neutral-900 transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
