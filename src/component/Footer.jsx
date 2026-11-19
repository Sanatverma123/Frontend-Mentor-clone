
import { Link } from "react-router-dom";
import Button from "../component/Button";

function Footer() {
  return (
    <footer
      id="about"
      className="bg-gradient-to-br from-blue-50 via-white to-sky-50 text-slate-900 border-t border-blue-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-16">

        {/* FOOTER CONTENT */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 sm:gap-x-6 md:gap-x-7 lg:gap-8 gap-y-8">

          {/* NEWSLETTER */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">

            <h2 className="text-xl sm:text-2xl md:text-2xl font-extrabold text-slate-900">
              <span className="text-blue-600">Stay up to date</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-sm leading-relaxed">
              With new challenges, featured solutions, selected articles, and
              our latest news.
            </p>

            <form
              className="mt-5 flex flex-col sm:flex-row gap-2 max-w-md"
              onSubmit={(e) => {
                e.preventDefault();
                const email = e.currentTarget.email.value;
                alert(`Thank you for subscribing: ${email}`);
                e.currentTarget.reset();
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full min-w-0 px-4 py-2.5 text-sm rounded-full border border-blue-200 bg-white text-slate-900 outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              />

              <Button type="submit" icon className="w-full sm:w-auto shrink-0">
                Subscribe
              </Button>
            </form>
          </div>

          {/* FRONTEND MENTOR */}
          <div>
            <h3 className="font-extrabold text-slate-900 mb-4 text-sm sm:text-base">
              Frontend Mentor
            </h3>

            <div className="flex flex-col gap-3 text-xs sm:text-sm text-slate-600">
              <a href="#" className="hover:text-blue-600 transition">Unlock Pro</a>
              <a href="#" className="hover:text-blue-600 transition">Contact us</a>
              <a href="#" className="hover:text-blue-600 transition">FAQs</a>
              <a href="#" className="hover:text-blue-600 transition">Become a partner</a>
              <a href="#" className="hover:text-blue-600 transition">Use cases</a>
              <a href="#" className="hover:text-blue-600 transition">Technologies</a>
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <h3 className="font-extrabold text-slate-900 mb-4 text-sm sm:text-base">
              Explore
            </h3>

            <div className="flex flex-col gap-3 text-xs sm:text-sm text-slate-600">
              <Link to="/challenges" className="hover:text-blue-600 transition">Challenges</Link>
              <Link to="/portfolio" className="hover:text-blue-600 transition">Solutions</Link>
              <Link to="/practice" className="hover:text-blue-600 transition">Articles</Link>
              <Link to="/practice" className="hover:text-blue-600 transition">Guides</Link>
            </div>
          </div>

          {/* COMMUNITY */}
          <div>
            <h3 className="font-extrabold text-slate-900 mb-4 text-sm sm:text-base">
              Community
            </h3>

            <div className="flex flex-col gap-3 text-xs sm:text-sm text-slate-600">
              <a href="#" className="hover:text-blue-600 transition">Discord</a>
              <a href="#" className="hover:text-blue-600 transition">Guidelines</a>
            </div>
          </div>

          {/* COMPANIES */}
          <div>
            <h3 className="font-extrabold text-slate-900 mb-4 text-sm sm:text-base">
              For companies
            </h3>

            <div className="flex flex-col gap-3 text-xs sm:text-sm text-slate-600">
              <a href="#" className="hover:text-blue-600 transition">Hire developers</a>
              <a href="#" className="hover:text-blue-600 transition">Train developers</a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-blue-200 mt-8 sm:mt-10 md:mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-500">

          <p className="text-center md:text-left">
            © Frontend Mentor 2019 - 2026
          </p>

          <div className="flex flex-wrap justify-center gap-x-3 sm:gap-x-4 gap-y-3">
            <a href="#" className="hover:text-blue-600 transition">Terms</a>
            <a href="#" className="hover:text-blue-600 transition">Cookie Policy</a>
            <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition">License</a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
