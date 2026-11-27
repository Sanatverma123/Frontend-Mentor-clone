
import UnlokPro from "./UnlokPro";

import HeroSection from "./HeroSection";
import Practice from "./Practice";
import Portfolio from "./Portfolio";
import Featured from "./Featured";
import Works from "./Works";
import Choose from "./Choose";
import ForCompanies from "./ForCompanies";
import GetFeedback from "./GetFeedback";
import Community from "./Community";
import Challenges from "./Challenges";
import AnimatedSection from "../../component/AnimatedSection";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 transition-colors duration-300">
    <AnimatedSection>    <HeroSection />   </AnimatedSection>
      <AnimatedSection>  <UnlokPro />     </AnimatedSection>
     <AnimatedSection>   <Challenges />   </AnimatedSection>
      <AnimatedSection>  <Practice />     </AnimatedSection>
      <AnimatedSection>  <Featured />     </AnimatedSection>
     <AnimatedSection>   <Works />        </AnimatedSection>
     <AnimatedSection>   <Choose />       </AnimatedSection>
      <AnimatedSection>  <GetFeedback />   </AnimatedSection>
      <AnimatedSection>  <ForCompanies />  </AnimatedSection>
     <AnimatedSection>   <Community />     </AnimatedSection>
     <AnimatedSection>   <Portfolio />    </AnimatedSection>
    </div>
  );
};

export default Home;
