import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import Button from "../../component/Button";
import GuidesCard from "./GuidesCard";

import {
  Code,
  Rocket,
  ClipboardCheck,
  Route,
  MessageCircle,
    Gem,
  BriefcaseBusiness,
  Award,
  Settings,
  FileText,
} from "lucide-react";

const guides = [
  {
    title: "Getting Started",
    description:
      "Create your account, navigate your dashboard, pick your first challenge, and understand the difference between free and Pro plans.",
    link: "/guides/welcome-to-frontend-mentor",
    icon: Rocket,
  },
  {
    title: "Working with Challenges",
    description:
      "Use your starter files, translate designs into code using JPEGs or Figma, interpret the challenge brief, and host your finished solution.",
    link: "/guides/how-to-start-a-challenge",
    icon: Code,
  },
  {
    title: "Getting Started",
    description:
      "Walk through the submission process, write a great retrospective that attracts quality feedback, and tag your solution with the right technologies.",
    link: "/guides/how-to-submit-solutions",
    icon: Rocket,
  },
  {
    title: "Solution Reports",
    description:
      "Every submission receives automated reports on accessibility, HTML, CSS, and JavaScript. Learn what each report checks for and how to act on the feedback.",
    link: "/guides/solution-reports-overview",
    icon: ClipboardCheck,
  },
  {
    title: "Learning Paths",
    description:
      "Enroll in curated sequences of articles and challenges designed to build your skills progressively, including peer review to solidify your learning.",
    link: "/guides/what-are-learning-paths",
    icon: Route,
  },
  {
    title: "Community and Feedback",
    description:
      "Give constructive feedback on other developers' solutions, explore community solutions for ideas, and follow creators who inspire you.",
    link: "/guides/giving-quality-feedback",
    icon: MessageCircle,
  },
  {
  title: "Pro Subscription",
  description:
    "Explore what's included with Pro, from premium challenges and Figma files to AI-enhanced reports. Compare free vs. Pro features and manage your billing.",
  link: "/guides/whats-included-with-pro",
  icon: Gem,
},
{
  title: "Talent Profile",
  description:
    "Get noticed by recruiters on our Hiring Platform. Earn the required points, set up your professional profile, and showcase your best projects.",
  link: "/guides/what-is-the-talent-profile",
  icon: BriefcaseBusiness,
},
{
  title: "Points, Badges, and Wall of Fame",
  description:
    "Earn points for completing challenges and helping others, unlock badges and achievements, and climb the Wall of Fame leaderboards.",
  link: "/guides/understanding-mentor-score",
  icon: Award,
},
{
  title: "Account Settings",
  description:
    "Update your profile information, avatar, and notification preferences. Find out how to delete your account if needed.",
  link: "/guides/update-your-profile",
  icon: Settings,
},
{
  title: "Licensing and Usage",
  description:
    "Learn how you can use Frontend Mentor challenges in your portfolio, live streams, and educational content, including what requires permission and how commercial licensing works.",
  link: "/guides/use-challenges-in-your-portfolio",
  icon: FileText,
},
];
function Guides() {
  return (
    <main className="min-h-screen bg-white">
      {/* BREADCRUMB */}
      <div className="bg-gradient-to-br from-blue-100 via-white to-sky-100 border-y border-blue-200 px-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="inline-block border-x border-blue-100 px-5 py-3 font-bold uppercase tracking-wider">
            GUIDES
          </span>

          <div className="min-w-0 ml-auto">
            <button className="bg-white border border-neutral-200 flex gap-2 items-center rounded px-4 py-2 text-neutral-800 w-80 h-14 tablet:min-w-[16rem]">
              <Search size={26} />
              <span>
                Search
                <span className="hidden desktop:inline"> guides</span>
                ...
              </span>
            </button>
          </div>
        </div>
      </div>

      <section className="container-xl flex flex-col gap-6 py-8 items-center text-center">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="guides-heading-small italic uppercase text-[#4059a5]">
            Frontend Mentor Guides
          </h1>

          <h2 className="guides-heading-main max-w-[theme(containerWidth.md)]">
            Everything you need to learn,
            <br /> build and grow, step by step.
          </h2>
        </div>
        <p className="guides-description max-w-prose text-neutral-500">
          Whether you're just getting started or ready to level up, these guides
          will help you understand the platform, improve your coding skills, and
          get the most out of every challenge.
        </p>

        <Button>
          <Link to="/guides/welcome-to-frontend-mentor">Get started</Link>
        </Button>
      </section>

      <div className="w-full px-8 py-8 mt-[60px]">
        <ul className="max-w-7xl mx-auto gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide, index) => (
            <GuidesCard key={index} {...guide} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Guides;
