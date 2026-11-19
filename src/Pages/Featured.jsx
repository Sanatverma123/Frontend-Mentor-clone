
import Fcard from "../assets/Fcard.png";
import Fcard2 from "../assets/Fcard2.png";
import Fcard3 from "../assets/Fcard3.png";

function Featured() {
  return (
    <section
      id="featured"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-16"
    >
      {/* HEADING */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
          As featured on...
        </h2>

        <div className="w-14 sm:w-16 h-1 bg-blue-500 rounded-full mx-auto mt-4 sm:mt-5"></div>
      </div>

      {/* FEATURED CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">

        {/* CARD 1 */}
        <div className="min-w-0 bg-gradient-to-br from-blue-50 to-white h-20 sm:h-24 md:h-24 lg:h-28 rounded-2xl border border-blue-100 p-4 sm:p-5 md:p-6 flex items-center justify-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <img
            src={Fcard}
            alt="CSS Tricks"
            className="w-full h-full object-contain"
          />
        </div>

        {/* CARD 2 */}
        <div className="min-w-0 bg-gradient-to-br from-blue-50 to-white h-20 sm:h-24 md:h-24 lg:h-28 rounded-2xl border border-blue-100 p-4 sm:p-5 md:p-6 flex items-center justify-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <img
            src={Fcard2}
            alt="Stack Overflow"
            className="w-full h-full object-contain"
          />
        </div>

        {/* CARD 3 */}
        <div className="min-w-0 bg-gradient-to-br from-blue-50 to-white h-20 sm:h-24 md:h-24 lg:h-28 rounded-2xl border border-blue-100 p-4 sm:p-5 md:p-6 flex items-center justify-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <img
            src={Fcard3}
            alt="Product Hunt"
            className="w-full h-full object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default Featured;
