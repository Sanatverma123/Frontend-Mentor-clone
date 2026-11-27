
import { Code, BadgeCheck, Rocket } from "lucide-react";
function WhyHireSection() {
  return (
    <section className="container-xl flex flex-col gap-6 items-center tablet:gap-8">
      <h2 className="font-secondary text-3xl tablet:text-5xl leading-tight tablet:max-w-[30ch] tablet:text-center">
        Why hire through Frontend Mentor?
      </h2>
      <ul className="grid grid-cols-3 tablet:grid-cols-2 px-40 pb-16 gap-5 w-full max-w-none">
        {/* Card 1 */}
        <li className="bg-white border border-neutral-200 isolate relative rounded-2xl w-full flex flex-col gap-4 p-5">
          <span className="aspect-square bg-blue-100 pt-4 flex-center rounded-lg w-[4.5rem]">
            <Code aria-hidden="true" className="text-blue-500 w-full h-12" />
          </span>

          <h3 className="font-secondary text-xl">Real-world skills</h3>

          <p className="text-neutral-500">
            Our developers have completed many professionally designed,
            industry-standard projects, not just coding exercises. Review their
            code and finished work to quickly gauge their capabilities in HTML,
            CSS, JavaScript, and modern frameworks.
          </p>
        </li>

        {/* Card 2 */}
        <li className="bg-white border border-neutral-200 isolate relative rounded-2xl w-full flex flex-col gap-4 p-5">
          <span className="aspect-square bg-blue-100 pt-4 flex-center rounded-lg w-[4.5rem]">
            <BadgeCheck aria-hidden="true" className="text-blue-500 w-full h-12" />
          </span>

          <h3 className="font-secondary text-xl">Proven project experience</h3>

          <p className="text-neutral-500">
            Skip guesswork. Quickly evaluate candidates by exploring live
            projects they’ve built. See how they handle responsive design,
            accessibility, and performance before starting a conversation.
          </p>
        </li>

        {/* Card 3 */}
        <li className="bg-white border border-neutral-200 isolate relative rounded-2xl w-full flex flex-col gap-4 p-5">
          <span className="aspect-square bg-blue-100 pt-4 flex-center rounded-lg w-[4.5rem]">
             <Rocket aria-hidden="true" className="text-blue-500 w-full h-12" />
          </span>

          <h3 className="font-secondary text-xl">Self-motivated talent</h3>

          <p className="text-neutral-500">
            Our community attracts developers who voluntarily engage in
            continuous learning and skill enhancement. They are proactive,
            passionate, and ready to contribute from day one.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default WhyHireSection;
