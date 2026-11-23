
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
    <div>
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
