import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";

function GuidesCard({ title, description, link, icon: Icon = Rocket }) {
  return (
    <li className="bg-white border border-neutral-200 isolate relative rounded-2xl w-full flex flex-col items-start overflow-hidden">

      <div className="bg-[#AFC4E8] flex gap-2 items-center justify-center w-full px-5 py-6">
        <Icon size={24} className="text-blue-500" />
      </div>

      <div className="flex flex-col gap-2 p-4">
        <Link to={link} className="hover:underline">
          <h2 className="font-secondary text-xl">{title}</h2>
        </Link>

        <p className="text-neutral-500 mb-auto">
          {description}
        </p>
      </div>

    </li>
  );
}

export default GuidesCard;