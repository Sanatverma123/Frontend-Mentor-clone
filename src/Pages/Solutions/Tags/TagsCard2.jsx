
import Button from "../../../component/Button";

function TagsCard2({ tag, description, onFollow, isFollowing = false }) {
  return (
    <div className="!bg-white dark:!bg-gray-800 border border-neutral-200 dark:border-gray-700 isolate relative rounded-2xl w-full flex flex-col gap-3 sm:gap-4 items-start p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300">

      {/* TAG NAME */}
      <span className="font-secondary font-semibold text-lg sm:text-xl text-gray-900 dark:text-white break-words">
        #{tag}
      </span>

      {/* DESCRIPTION */}
      <span className="text-sm sm:text-base leading-6 text-neutral-500 dark:text-gray-400 mb-auto">
        {description}
      </span>

      {/* DIVIDER */}
      <span className="bg-neutral-200 dark:bg-gray-700 border-none h-[1px] min-h-[1px] w-full"></span>

      {/* FOLLOW BUTTON */}
      <div className="flex flex-wrap gap-x-2 gap-y-3 justify-between w-full">
        <Button
          onClick={onFollow}
          className={`border flex font-bold font-secondary italic items-center justify-center px-5 py-3 text-center text-sm sm:text-base tracking-wider transition-colors rounded-full uppercase w-fit leading-none text-white ${
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
