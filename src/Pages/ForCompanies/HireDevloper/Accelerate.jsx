
function Accelerate() {
  return (
    <section className="container-sm mx-auto flex flex-col gap-8 px-5 py-16 desktop:container-xl desktop:gap-9">

      {/* Heading */}
      <div className="flex flex-col gap-5 tablet:items-center tablet:text-center">
        <h2 className="font-secondary text-3xl tablet:text-5xl">
          Accelerate your hiring
        </h2>

        <p className="max-w-prose text-lg text-neutral-500">
          Our features make it easy for you to find, analyze, and contact
          developers who meet your exact hiring needs. No mountains of resumes required.
        </p>
      </div>

      {/* Feature sections */}
      <div className="flex flex-col gap-8 desktop:gap-9">

        {/* 1. Advanced candidate search */}
        <div className="flex flex-col gap-6 w-full desktop:flex-row desktop:gap-8 desktop:items-center">

          <img
            alt="Advanced candidate search"
            loading="lazy"
            width="1040"
            height="800"
            className="w-full object-contain desktop:w-1/2"
            src="https://hiring.frontendmentor.io/_next/image?url=%2Fstatic%2Fhome-advanced-search.webp&w=3840&q=75"
          />

          <div className="flex flex-col gap-5 desktop:w-1/2">
            <h3 className="font-secondary text-2xl tablet:text-3xl">
              Advanced candidate search
            </h3>

            <p className="text-lg text-neutral-500">
              Narrow down candidates by skills, experience level, location,
              and salary expectations to find your ideal match—fast.
            </p>
          </div>
        </div>

        {/* 2. Featured projects */}
        <div className="flex flex-col gap-6 w-full desktop:flex-row-reverse desktop:gap-8 desktop:items-center">

          <img
            alt="Talent profiles with featured projects"
            loading="lazy"
            width="1040"
            height="800"
            className="w-full object-contain desktop:w-1/2"
            src="https://hiring.frontendmentor.io/_next/image?url=%2Fstatic%2Fhome-featured-projects.webp&w=3840&q=75"
          />

          <div className="flex flex-col gap-5 desktop:w-1/2">
            <h3 className="font-secondary text-2xl tablet:text-3xl">
              Talent profiles with featured projects
            </h3>

            <p className="text-lg text-neutral-500">
              View each candidate’s best work upfront. Verify their skill
              level and project experience before making the first contact.
            </p>
          </div>
        </div>

        {/* 3. Direct messaging */}
        <div className="flex flex-col gap-6 w-full desktop:flex-row desktop:gap-8 desktop:items-center">

          <img
            alt="Message candidates directly"
            loading="lazy"
            width="1040"
            height="800"
            className="w-full object-contain desktop:w-1/2"
            src="https://hiring.frontendmentor.io/_next/image?url=%2Fstatic%2Fhome-message-directly.webp&w=3840&q=75"
          />

          <div className="flex flex-col gap-5 desktop:w-1/2">
            <h3 className="font-secondary text-2xl tablet:text-3xl">
              Message candidates directly
            </h3>

            <p className="text-lg text-neutral-500">
              Reach out to promising candidates directly through our platform.
              Quickly set up calls to get them started with your interview process.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Accelerate;
