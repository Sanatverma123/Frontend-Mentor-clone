
import Button from "../../../component/Button";

function TagsCard2({ tag, description, onFollow, isFollowing = false }) {
  return (
    <div className="bg-white border border-neutral-200 isolate relative rounded-2xl w-full flex flex-col gap-4 items-start p-5">

      {/* TAG NAME */}
      <span className="font-secondary font-semibold text-lg">
        #{tag}
      </span>

      {/* DESCRIPTION */}
      <span className="text-neutral-500 mb-auto">
        {description}
      </span>

      {/* DIVIDER */}
      <span className="bg-neutral-200 border-none h-[1px] min-h-[1px] w-full"></span>

      {/* FOLLOW BUTTON */}
      <div className="flex flex-wrap gap-x-1 gap-y-3 justify-between w-full">
        <Button
          onClick={onFollow}
          className={`border flex font-bold font-secondary italic items-center justify-center px-5 py-3 text-center text-base tracking-wider transition-colors rounded-full uppercase w-fit leading-none text-white ${
            isFollowing
              ? "bg-neutral-500 border-neutral-500 hover:bg-neutral-600"
              : "bg-blue-500 border-blue-500 hover:bg-blue-600"
          }`}
        >
          {isFollowing ? "Following" : "Follow"}
        </Button>
      </div>

    </div>
  );
}

export default TagsCard2;
