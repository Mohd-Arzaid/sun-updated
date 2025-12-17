import AuditMarquee from "@/components/manual/home-page-sections/audit-marquee/audit-marquee";
import Hero from "@/components/manual/home-page-sections/hero/hero";
import LogoTicker from "@/components/manual/home-page-sections/logo-ticker/logo-ticker";
import OurServices from "@/components/manual/home-page-sections/our-services/our-services";

export const Home = () => {
  return (
    <main>
      <section aria-label="Hero Section">
        <Hero />
      </section>
      {/* <section aria-label="Partner Logos -Top">
        <LogoTicker />
      </section>
      <section aria-label="Our Services">
        <OurServices />
      </section>
      <section aria-label="Audits Marquee">
        <AuditMarquee />
      </section> */}
    </main>
  );   
};
