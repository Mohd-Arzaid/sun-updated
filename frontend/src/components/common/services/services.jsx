import React from 'react'
import Container from '../container/container'

// const SERVICES_DATA = [
//   {
//     id: 1,
//     image: "/services-images/bis-logo.webp",
//     imageAlt: "BIS Logo",
//     imageTitle: "BIS Logo",
//     title: "BIS Mark (ISI License) for Foreign Manufacturers",
//   },
//   {
//     id: 2,
//     image: "/services-images/bis-crs-logo.webp",
//     imageAlt: "Scheme X Logo",
//     imageTitle: "Scheme X Logo",
//     title: "Scheme X",
//   },
//   {
//     id: 3,
//     image: "/services-images/isi-mark-logo.webp",
//     imageAlt: "ISI Mark Logo",
//     imageTitle: "ISI Mark Logo",
//     title: "ISI Mark BIS for Indian Manufacturers",
//   },
//   {
//     id: 4,
//     image: "/services-images/bis-crs-logo.webp",
//     imageAlt: "BIS CRS Logo",
//     imageTitle: "BIS CRS Logo",
//     title: "BIS CRS Registration",
//   },
//   {
//     id: 5,
//     image: "/services-images/cdsco-logo.webp",
//     imageAlt: "CDSCO Logo",
//     imageTitle: "CDSCO Logo",
//     title: "CDSCO Registration Certification",
//   },
//   {
//     id: 6,
//     image: "/services-images/plastic-waste-management-logo.webp",
//     imageAlt: "Plastic Waste Management Logo",
//     imageTitle: "Plastic Waste Management Logo",
//     title: "Plastic Waste Management",
//   },
//   {
//     id: 7,
//     image: "/services-images/epr-certificate-logo.webp",
//     imageAlt: "EPR Certificate Logo",
//     imageTitle: "EPR Certificate Logo",
//     title: "EPR Certificate",
//   },
//   {
//     id: 8,
//     image: "/services-images/lmpc-logo.webp",
//     imageAlt: "LMPC Logo",
//     imageTitle: "LMPC Logo",
//     title: "LMPC Certificate",
//   },
// ];

const Services = () => {
  return (
    <div className="pt-12 pb-14 border-t border-neutral-200">
      <Container>
        <div className="text-center mb-6">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 drop-shadow-lg mb-2 sm:mb-3">
            Our Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-geist text-neutral-600 max-w-xs sm:max-w-md md:max-w-xl mx-auto px-4 sm:px-2 md:px-0">
            We offer end-to-end solutions for all your certification needs to
            enter and thrive in the Indian market
          </p>
        </div>

        <div className="mt-28 grid grid-cols-4 gap-x-8 gap-y-24">
          <div className='relative h-60 bg-neutral-100  rounded-2xl border-2 border-neutral-200 flex items-center justify-center'>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-32 border-2 border-neutral-200 bg-white rounded-full">
              <img src="/services-images/bis-logo.webp" alt="BIS Logo" className="object-contain scale-110 " />
            </div>

            <div className="text-lg px-5  text-center text-neutral-800 font-geist font-medium ">
              BIS Mark (ISI License) for Foreign Manufacture
            </div>
          </div>

          <div className='relative h-60 bg-neutral-100 rounded-2xl border-2 border-neutral-200 flex items-center justify-center'>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-32 border-2 border-neutral-200 bg-white rounded-full">
              <img src="/services-images/cdsco-logo.webp" alt="CDSCO Logo" className="object-contain scale-90" />
            </div>

            <div className="text-lg px-5  text-center text-neutral-800 font-geist font-medium ">
              CDSCO Registration Certification
            </div>
          </div>

          <div className='relative h-60 bg-neutral-100 rounded-2xl border-2 border-neutral-200 flex items-center justify-center'>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-32 border-2 border-neutral-200 bg-white rounded-full">
              <img src="/services-images/bis-crs-logo.webp" alt="BIS Logo" className="object-contain scale-75" />
            </div>

            <div className="text-lg px-5  text-center text-neutral-800 font-geist font-medium ">
              BIS (CRS) Registration
            </div>
          </div>


          <div className='relative h-60 bg-neutral-100 rounded-2xl border-2 border-neutral-200 flex items-center justify-center'>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-32 border-2 border-neutral-200 bg-white rounded-full">
              <img src="/services-images/plastic-waste-management-logo.webp" alt="Plastic Waste Management Logo" className="object-contain scale-90" />
            </div>

            <div className="text-lg px-5  text-center text-neutral-800 font-geist font-medium ">
              Plastic Waste Management
            </div>
          </div>

          <div className='relative h-60 bg-neutral-100 rounded-2xl border-2 border-neutral-200 flex items-center justify-center'>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-32 border-2 border-neutral-200 bg-white rounded-full">
              <img src="/services-images/epr-certificate-logo.webp" alt="EPR Certificate Logo" className="object-contain " />
            </div>

            <div className="text-lg px-5  text-center text-neutral-800 font-geist font-medium ">
              EPR Certificate certifications
            </div>
          </div>


          <div className='relative h-60 bg-neutral-100 rounded-2xl border-2 border-neutral-200 flex items-center justify-center'>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-32 border-2 border-neutral-200 bg-white rounded-full">
              <img src="/services-images/lmpc-logo.webp" alt="LMPC Logo" className="object-contain scale-75" />
            </div>

            <div className="text-lg px-5  text-center text-neutral-800 font-geist font-medium ">
              LMPC Certificate certifications
            </div>
          </div>



          <div className='relative h-60 bg-neutral-100 rounded-2xl border-2 border-neutral-200 flex items-center justify-center'>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-32 border-2 border-neutral-200 bg-white rounded-full">
              <img src="/services-images/bis-logo.webp" alt="BIS Logo" className="object-contain scale-110" />
            </div>

            <div className="text-lg px-5  text-center text-neutral-800 font-geist font-medium ">
              BIS Registration Certificate
            </div>
          </div>


          <div className='relative h-60 bg-neutral-100 rounded-2xl border-2 border-neutral-200 flex items-center justify-center'>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-32 border-2 border-neutral-200 bg-white rounded-full">
              <img src="/services-images/isi-mark-logo.webp" alt="ISI Mark Logo" className="object-contain scale-75" />
            </div>

            <div className="text-lg px-5  text-center text-neutral-800 font-geist font-medium ">
              ISI MARK (BIS) for Indian Manufactures
            </div>
          </div>


        </div>

      </Container>
    </div>
  )
}



export default Services