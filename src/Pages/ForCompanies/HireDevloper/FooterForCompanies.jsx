
import { Link } from "react-router-dom";

function FooterForCompanies() {
  const hiringLinks = [
    { name: "Why us", path: "/why-us" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact us", path: "/contact" },
    { name: "Become a partner", path: "/become-a-partner" },
  ];

  const useCases = [
    { name: "Recruitment agencies", path: "/use-cases/recruitment-agencies" },
    { name: "Talent acquisition", path: "/use-cases/talent-acquisition" },
    { name: "Startups", path: "/use-cases/startups" },
    { name: "Scaleups", path: "/use-cases/scaleups" },
    { name: "Small businesses", path: "/use-cases/small-businesses" },
    { name: "Remote hiring", path: "/use-cases/remote-hiring" },
  ];

  const companiesLinks = [
    { name: "Train developers", path: "/train-developers" },
    { name: "Hire developers", path: "/hire-developers" },
  ];

  const developerLinks = [
    { name: "Take challenges", path: "/challenges" },
  ];

  const linkClass =
    "text-neutral-500 text-sm sm:text-base hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-400 transition-colors";

  const headingClass =
    "font-extrabold tracking-widest uppercase text-base sm:text-lg text-neutral-900 dark:text-white";

  const renderLinks = (links) => (
    <ul className="flex flex-col gap-2">
      {links.map((item) => (
        <li key={item.path}>
          <Link to={item.path} className={linkClass}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="w-full bg-white dark:bg-gray-900 transition-colors duration-300">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="flex flex-col items-center gap-10 py-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">

          {/* LOGO */}
          <Link to="/" aria-label="Home page" className="shrink-0">
            <img
              src="https://hiring.frontendmentor.io/static/logo-desktop.svg"
              alt="Frontend Mentor"
              className="w-40 sm:w-48 lg:w-52 h-auto object-contain"
            />
          </Link>

          {/* FOOTER LINKS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 w-full lg:w-auto text-center lg:text-left">

            {/* HIRING */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <h2 className={headingClass}>Hiring</h2>
              {renderLinks(hiringLinks)}
            </div>

            {/* USE CASES */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <h2 className={headingClass}>Use cases</h2>
              {renderLinks(useCases)}
            </div>

            {/* FOR COMPANIES */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <h2 className={headingClass}>For companies</h2>
              {renderLinks(companiesLinks)}
            </div>

            {/* FOR DEVELOPERS */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <h2 className={headingClass}>For developers</h2>
              {renderLinks(developerLinks)}
            </div>

          </div>
        </div>
      </div>

      {/* COPYRIGHT + LEGAL LINKS */}
      <div className="border-t border-neutral-200 dark:border-gray-700">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5 flex flex-col items-center justify-center gap-4 text-center text-sm text-neutral-600 dark:text-neutral-400 md:flex-row md:justify-between">

          <p>
            © Frontend Mentor 2019 - 2026
          </p>

          {/* LEGAL LINKS */}
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <li>
              <a
                className="hover:underline"
                href="https://www.iubenda.com/terms-and-conditions/68783624"
                target="_blank"
                rel="noreferrer"
              >
                Terms
              </a>
            </li>

            <li>
              <a
                className="hover:underline"
                href="https://www.iubenda.com/privacy-policy/68783624/cookie-policy"
                target="_blank"
                rel="noreferrer"
              >
                Cookie policy
              </a>
            </li>

            <li>
              <a
                className="hover:underline"
                href="https://www.iubenda.com/privacy-policy/68783624"
                target="_blank"
                rel="noreferrer"
              >
                Privacy policy
              </a>
            </li>
          </ul>

        </div>
      </div>

    </footer>
  );
}

export default FooterForCompanies;
