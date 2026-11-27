

import { Link } from "react-router-dom";

function TagCard({ title, description, href }) {
  return (
    <li className="bg-white  border border-neutral-200 isolate relative rounded-2xl w-full flex flex-col gap-4 p-5">

      <Link to={href} className="hover:underline">
        <h3 className="font-secondary text-xl">
          {title}
        </h3>
      </Link>

      <p className="line-clamp-3 text-neutral-500">
        {description}
      </p>

    </li>
  );
}

export default TagCard;
