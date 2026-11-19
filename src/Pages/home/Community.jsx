
import { useRef } from "react";
import { ArrowRight, Quote, Star } from "lucide-react";
import Button from "../../component/Button";

function Community() {
  const sliderRef = useRef(null);

  const reviews = [
    {
      text: "Frontend Mentor transformed me from a newbie to a professional developer, enabling me to create flawless, responsive, accessible websites. It’s a superb platform for feedback with a supportive community backing your growth. Through it, I evolved from a frontend to a full-stack developer.",
    },
    {
      text: "Frontend Mentor eliminated the hurdle of sourcing designs, letting me focus on development. Their professional projects, especially in the Pro subscription, challenge me to create complex, multi-page websites. With a supportive community and feedback from advanced programmers, my skills have been elevated to new heights.",
    },
    {
      text: "As a backend developer, I sought to improve my frontend skills. Frontend Mentor provided beautifully designed challenges, allowing me to progress from simple components to advanced responsive web pages. Enough can’t be said about the community members. Their feedback has been invaluable in my journey to becoming a better developer.",
    },
    {
      text: "Frontend Mentor offers invaluable real-world web development challenges, sharpening my HTML, CSS, and JavaScript skills. The structured feedback, solutions, and vibrant community have significantly impacted my learning and growth. It’s both a skill-building platform and a community hub for web developers.",
    },
    {
      text: "I began my frontend journey with Frontend Mentor’s newbie challenges and progressed to more complex projects. Some of the complex ones are now even in my portfolio! The supportive community and the dedication of the Frontend Mentor team are unmatched. I highly recommend it for newcomers and those keen on improving their skills.",
    },
  ];

  const scrollCards = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left:
          direction === "right"
            ? sliderRef.current.clientWidth
            : -sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="community"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-16"
    >
      {/* HEADING AND ARROW BUTTONS */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 sm:mb-10 md:mb-12 gap-5 md:gap-6">

        <div className="w-full text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
            A little from our community
          </h2>

          <p className="mt-3 text-sm sm:text-base md:text-base text-slate-500 leading-relaxed">
            See what developers are saying about their journey.
          </p>

          <div className="w-16 h-1 bg-blue-500 rounded-full mt-4 mx-auto md:mx-0"></div>
        </div>

        {/* ARROW BUTTONS */}
        <div className="flex justify-center md:justify-end items-center gap-3 shrink-0">
          <Button
            onClick={() => scrollCards("left")}
            ariaLabel="Previous reviews"
            className="w-10 h-10 md:w-11 md:h-11 !p-0"
          >
            <ArrowRight size={19} className="rotate-180" />
          </Button>

          <Button
            onClick={() => scrollCards("right")}
            ariaLabel="Next reviews"
            className="w-10 h-10 md:w-11 md:h-11 !p-0"
          >
            <ArrowRight size={19} />
          </Button>
        </div>
      </div>

      {/* REVIEW CARDS SLIDER */}
      <div
        ref={sliderRef}
        className="flex gap-4 sm:gap-5 md:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pt-4 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex-none w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] snap-start"
          >
            <div className="group h-full min-w-0 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-4 sm:p-5 md:p-5 lg:p-6 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">

              {/* TOP */}
              <div className="flex justify-between items-center mb-5 gap-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                  <Quote size={20} />
                </div>

                <div className="flex gap-1 text-amber-400 shrink-0">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={15} fill="currentColor" />
                  ))}
                </div>
              </div>

              {/* REVIEW TEXT */}
              <p className="text-slate-600 leading-relaxed text-sm sm:text-sm md:text-sm lg:text-base">
                {review.text}
              </p>

              {/* BOTTOM */}
              <div className="mt-6 pt-4 border-t border-blue-100 flex items-center gap-3">

                <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-sm sm:text-sm md:text-base text-slate-900">
                    Community Member
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500">
                    Frontend Developer
                  </p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Community;
