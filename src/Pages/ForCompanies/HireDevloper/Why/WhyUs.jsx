import Button from "../../../../component/Button";

function WhyChooseHiring() {
  return (
    <section className="isolate relative overflow-hidden flex flex-col gap-5 px-5 pt-8 w-full items-center text-center">

      {/* Heading */}
      <h1 className="font-secondary text-5xl tablet:text-5xl leading-tight max-w-[20ch] text-blue-800 dark:text-blue-500 mt-12">
        Why choose Frontend Mentor for Hiring?
      </h1>

      {/* Description */}
      <p className="max-w-prose text-2xl text-neutral-500 dark:text-gray-300">
        We don’t just offer you resumes—we connect you with a community of
        developers who’ve proven their skills on real projects. Working with us
        gives you a powerful advantage in finding hidden talent ready to hit the
        ground running.
      </p>

      {/* CTA Button */}
      <Button to="/register"
      className="mb-8">
        Start your free trial
      </Button>

    </section>
  );
}

export default WhyChooseHiring;