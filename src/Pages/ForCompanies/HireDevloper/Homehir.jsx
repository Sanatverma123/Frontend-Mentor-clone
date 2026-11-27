import AnimatedSection from "../../../component/AnimatedSection";
import HireDevelopers from "./HireDevelopers";
import Why from "./Why";


const Homehir = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 transition-colors duration-300">

      <AnimatedSection>
        <HireDevelopers />
      </AnimatedSection>

      <AnimatedSection>
        <Why />
      </AnimatedSection>


    </div>
  );
};

export default Homehir;