
import Button from "../../component/Button";

function UnlokPro() {
  return (
    <section className="py-5 sm:py-6 md:py-8 lg:py-10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-5 lg:gap-8 bg-gradient-to-r from-blue-100 to-sky-50 dark:from-slate-900 dark:to-gray-800 p-5 sm:p-6 md:p-7 lg:p-9 rounded-2xl items-center border border-blue-200 dark:border-blue-900">

          {/* TEXT */}
          <div className="md:col-span-2 text-center md:text-left">

            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-slate-900 dark:text-slate-100 font-semibold leading-snug">
              Get an AI code review on every solution you submit
            </h2>

            <p className="text-sm sm:text-base md:text-sm lg:text-base text-slate-600 dark:text-slate-300 mt-3 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Free members get one review a month. Go Pro for a review on every
              submission and a skills profile that fills out as fast as you build.
            </p>

          </div>

          {/* BUTTON */}
          <div className="flex justify-center md:justify-end">
            <Button
              href="#"
              className="w-full sm:w-auto whitespace-nowrap"
            >
              UNLOCK PRO
            </Button>
          </div>

        </div>
      </div>

    </section>
  );
}

export default UnlokPro;
