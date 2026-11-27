import Button from "../../../component/Button";

function HireDevelopers() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fafafa] px-5 pt-24 pb-32">
      
      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full flex-col items-center gap-6 text-center">
        <h1 className=" text-4xl leading-tight text-blue-900 sm:text-5xl lg:text-[56px] lg:leading-[1.3] max-w-[1000px]">
          Hire exceptional, project-proven early-career developers
        </h1>

        <p className="max-w-[850px] text-lg leading-9 text-neutral-500 md:text-[22px]">
          Tap into the largest project-based learning community for
          developers—Frontend Mentor. Quickly discover talented junior front-end
          and full-stack developers who’ve honed their skills building
          real-world projects.
        </p>

        <Button to="/register">Start your free trial</Button>

        <p className="max-w-prose text-base italic text-neutral-500 md:text-lg">
          14-day free trial with 10 message credits—no credit card required.
        </p>
      </div>
      {/* Hero Image */}
<div className="mt-24 flex justify-center w-full">
  <img
    alt=""
    width="1980"
    height="1000"
    className="max-w-[68rem] px-5 w-full"
    src="https://hiring.frontendmentor.io/_next/image?url=%2Fstatic%2Fhome-hero.webp&w=3840&q=75"
  />
</div>
    </section>

  );
}

export default HireDevelopers;
