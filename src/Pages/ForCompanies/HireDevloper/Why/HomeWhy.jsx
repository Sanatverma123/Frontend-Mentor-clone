import HiringNavbar from "../Hero/HiringNavbar";
import AnimatedSection from "../../../../component/AnimatedSection";
import WhyUs from "./WhyUs";
import FooterForCompanies from "../Hero/FooterForCompanies";
import Access from "./Access";

const HomeWhy = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 transition-colors duration-300">
      <HiringNavbar />

      <AnimatedSection>
        <WhyUs />
      </AnimatedSection>
      <AnimatedSection>
        <Access />
      </AnimatedSection>

      {/* Hiring Page Footer */}
      <FooterForCompanies />
    </div>
  );
};

export default HomeWhy;
