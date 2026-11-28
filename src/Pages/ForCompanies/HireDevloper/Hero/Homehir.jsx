import HiringNavbar from "./HiringNavbar";
import AnimatedSection from "../../../../component/AnimatedSection";
import HireDevelopers from "./HireDevelopers";
import Why from "./Why";
import Accelerate from "./Accelerate";
import FooterForCompanies from "./FooterForCompanies";
import Wemake from "./Wemake";
import See from "./See";
import TheFrontend from "./TheFrontend";
import ReadyToHire from "./ReadyToHire";
const Homehir = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 transition-colors duration-300">
      <HiringNavbar />

      <AnimatedSection>
        <HireDevelopers />
      </AnimatedSection>

      <AnimatedSection>
        <Why />
      </AnimatedSection>

      <AnimatedSection>
        <Accelerate />
      </AnimatedSection>

      <AnimatedSection>
        <Wemake />
      </AnimatedSection>

      <AnimatedSection>
        <See />
      </AnimatedSection>

      <AnimatedSection>
        <TheFrontend />
      </AnimatedSection>

      <AnimatedSection>
        <ReadyToHire />
      </AnimatedSection>

      {/* Hiring Page Footer */}
      <FooterForCompanies />
    </div>
  );
};

export default Homehir;
