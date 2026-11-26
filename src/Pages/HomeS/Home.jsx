
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

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 transition-colors duration-300">
    
      <HeroSection />
      <UnlokPro />
      <Challenges />
      <Practice />
      <Featured />
      <Works />
      <Choose />
      <GetFeedback />
      <ForCompanies />
      <Community />
      <Portfolio />
    </div>
  );
};

export default Home;
