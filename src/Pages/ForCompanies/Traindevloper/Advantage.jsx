import {
  Share2,
  TrendingUp,
  BadgeDollarSign,
} from "lucide-react";

function TrainDeveloper() {
  const advantages = [
    {
      icon: <Share2 />,
      title: "Largest project-based learning community",
      description:
        "Hire from a large community of developers who practice by building, sharing, and refining real projects—ensuring a continuous stream of proven talent.",
    },
    {
      icon: <TrendingUp />,
      title: "High growth potential",
      description:
        "Invest in enthusiastic developers eager to grow with your company, bringing fresh perspectives and a passion for continuous improvement.",
    },
    {
      icon: <BadgeDollarSign />,
      title: "Cost-effective hiring",
      description:
        "Find highly skilled developers who may offer more affordable options compared to those with more extensive professional experience.",
    },
  ];

  return (
    <section className="px-5 py-8 tablet:py-9">
      <div className="container-xl flex flex-col gap-6 items-center tablet:gap-8">

        {/* Heading */}
        <h2 className="font-secondary text-3xl tablet:text-5xl leading-tight tablet:max-w-[30ch] tablet:text-center">
          The Frontend Mentor advantage
        </h2>

        {/* Cards */}
        <ul className="flex flex-col gap-5 max-w-prose tablet:grid tablet:grid-cols-2 tablet:max-w-none desktop:grid-cols-3">
          {advantages.map((advantage, index) => (
            <li
              key={index}
              className="bg-white border border-neutral-200 isolate relative rounded-2xl w-full flex flex-col gap-4 p-5"
            >
              {/* Icon */}
              <span className="aspect-square bg-blue-100 flex items-center justify-center rounded-lg w-[4.5rem]">
                <span className="text-blue-500 [&>svg]:w-6 [&>svg]:h-6">
                  {advantage.icon}
                </span>
              </span>

              {/* Title */}
              <h3 className="font-secondary text-xl">
                {advantage.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-500">
                {advantage.description}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

export default TrainDeveloper;