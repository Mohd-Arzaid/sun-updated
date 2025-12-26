import AuditMarquee from "@/components/manual/home-page-sections/audit-marquee/audit-marquee";
import CertificationAndAchievements from "@/components/manual/home-page-sections/certifications-and-achievements/certifications-and-achievements";
import ContactUsForm from "@/components/manual/home-page-sections/contact-us-form/contact-us-form";
import Countries from "@/components/manual/home-page-sections/countries/countries";
import Hero from "@/components/manual/home-page-sections/hero/hero";
import LatestNewsMarquee from "@/components/manual/home-page-sections/latest-news-marquee/latest-news-marquee";
import LogoTicker from "@/components/manual/home-page-sections/logo-ticker/logo-ticker";
import OurServices from "@/components/manual/home-page-sections/our-services/our-services";
import VideoSection from "@/components/manual/home-page-sections/video-section/video-section";
import WebinarMarquee from "@/components/manual/home-page-sections/webinar-marquee/webinar-marquee";
import WhatsOurCustomersSay from "@/components/manual/home-page-sections/whats-our-customers-say/whats-our-customers-say";

const Home = () => {
  return (
    <main>
      <section aria-label="Hero Section">
        <Hero />
      </section>
      <section aria-label="Partner Logos - Top">
        <LogoTicker />
      </section>
      <section aria-label="Our Services">
        <OurServices />
      </section>
      <section aria-label="Audits Marquee">
        <AuditMarquee />
      </section>
      <section aria-label="Contact Form">
        <ContactUsForm />
      </section>
      <section aria-label="Webinar Marquee">
        <WebinarMarquee />
      </section>
      <section aria-label="Partner Logos - Bottom">
        <LatestNewsMarquee />
      </section>
      <section aria-label="Countries We Serve">
        <Countries />
      </section>
      <section aria-label="Certification and Achievements">
        <CertificationAndAchievements />
      </section>
      <section aria-label="What Our Customers Say">
        <WhatsOurCustomersSay />
      </section>
      <section aria-label="Partner Logos - Bottom">
        <LogoTicker />
      </section>
      {/* <section aria-label="Video Section">
        <VideoSection/>
      </section> */}
    </main>
  );
};

export default Home;