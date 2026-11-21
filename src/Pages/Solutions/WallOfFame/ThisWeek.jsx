
function ThisWeek() {
  const topUsers = [
    {
      rank: "1st",
      name: "Abdelrhman Abdelaal",
      username: "@MrBlackvanta",
      image:
        "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_80/Avatars/hh4ovz2fap438qb2gt7h.png",
      points: 150,
      level: 5,
      border: "border-amber-300",
      medal: "bg-amber-300 text-amber-800",
      levelColor: "bg-red-500",
    },
    {
      rank: "2nd",
      name: "Delfin FERNANDEZ",
      username: "@delfinjfb",
      image: "https://avatars.githubusercontent.com/u/1277866?v=4",
      points: 26,
      level: 3,
      border: "border-slate-300",
      medal: "bg-slate-300 text-slate-800",
      levelColor: "bg-yellow-400",
    },
    {
      rank: "3rd",
      name: "Samarth Varpe",
      username: "@samarthvarpe515",
      image: "https://avatars.githubusercontent.com/u/135849322?v=4",
      points: 8,
      level: 2,
      border: "border-yellow-600",
      medal: "bg-yellow-600 text-yellow-950",
      levelColor: "bg-green-500",
    },
  ];

  const otherUsers = [
    {
      rank: 4,
      name: "Cacti",
      username: "@nottohave",
      image: "https://avatars.githubusercontent.com/u/37563705?v=4",
      points: 5,
      level: 3,
      levelColor: "bg-yellow-400",
      pro: true,
    },
    {
      rank: 5,
      name: "Eslam Ashraf",
      username: "@e5lama5hraf",
      image: "https://avatars.githubusercontent.com/u/170796617?v=4",
      points: 5,
      level: 2,
      levelColor: "bg-green-500",
    },
    {
      rank: 6,
      name: "hossamnabilelgedy",
      username: "@hossamelgendy101",
      image: "https://avatars.githubusercontent.com/u/80179247?v=4",
      points: 3,
      level: 2,
      levelColor: "bg-green-500",
      pro: true,
    },
    {
      rank: 7,
      name: "sojib ahmed",
      username: "@sojib-hasan04",
      image: "https://avatars.githubusercontent.com/u/217063747?v=4",
      points: 3,
      level: 1,
      levelColor: "bg-cyan-500",
    },
    {
      rank: 8,
      name: "Isaac",
      username: "@filiuslupus",
      image: "https://avatars.githubusercontent.com/u/337903191?v=4",
      points: 3,
      level: 1,
      levelColor: "bg-cyan-500",
    },
  ];

  return (
    <div className="w-full flex flex-col">

      {/* Top 3 Users */}
      <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

        {topUsers.map((user) => (
          <li
            key={user.rank}
            className={`bg-white isolate rounded-2xl w-full border-2 flex flex-col gap-3 items-center mb-5 overflow-hidden px-5 py-6 relative text-center ${user.border}`}
          >
            <div
              className={`absolute top-0 right-0 [clip-path:polygon(0_0,100%_100%,100%_0)] font-bold font-secondary pr-1 pt-1 pl-5 pb-5 text-sm ${user.medal}`}
            >
              {user.rank}
            </div>

            <div className="relative w-20">
              <img
                src={user.image}
                alt={user.name}
                className="w-20 h-20 rounded-full object-cover"
              />

              <span
                className={`absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded px-2 py-1 text-sm text-white font-bold italic ${user.levelColor}`}
              >
                LVL {user.level}
              </span>
            </div>

            <div className="flex flex-col gap-1 items-center min-w-0 w-full mt-1">
              <span className="font-secondary font-semibold truncate max-w-full">
                {user.name}
              </span>
              <span className="text-neutral-500 text-sm truncate max-w-full">
                {user.username}
              </span>
            </div>

            <span className="flex gap-2 items-end mt-auto">
              <span className="font-bold font-secondary italic text-blue-500 text-2xl leading-none">
                {user.points}
              </span>
              <span className="font-secondary text-neutral-500">pts</span>
            </span>
          </li>
        ))}

      </ol>

      {/* Rank 4 to 8 */}
      <ol className="flex flex-col">

        {otherUsers.map((user) => (
          <li
            key={user.rank}
            className="border border-b-0 last:border-b col-span-full flex gap-3 items-center px-4 py-3 sm:gap-5 bg-white border-neutral-200"
          >
            <span className="font-secondary font-semibold shrink-0 text-neutral-500 w-6">
              #{user.rank}
            </span>

            <div className="flex gap-3 h-[3.85rem] items-center text-sm min-w-0">

              <div className="relative w-[3.125rem] shrink-0">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-[3.125rem] h-[3.125rem] rounded-full object-cover"
                />

                {user.pro && (
                  <span
                    title={`${user.name} is a PRO member`}
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center"
                  >
                    P
                  </span>
                )}

                <span
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded px-1 py-[2px] text-[11px] text-white font-bold italic ${user.levelColor}`}
                >
                  LVL {user.level}
                </span>
              </div>

              <div className="flex flex-col min-w-0 overflow-hidden">
                <span className="font-bold font-secondary truncate">
                  {user.name}
                </span>
                <span className="text-neutral-500 truncate">
                  {user.username}
                </span>
              </div>
            </div>

            <span className="flex gap-2 items-center ml-auto shrink-0">
              <span className="font-bold font-secondary italic text-blue-500 text-lg">
                {user.points}
              </span>
              <span className="font-secondary text-neutral-500 text-sm">
                pts
              </span>
            </span>
          </li>
        ))}

        {/* Rank 9 */}
        <li className="border border-b-0 flex gap-3 px-4 py-4 sm:gap-5 bg-white border-neutral-200 items-start md:items-center">
          <span className="font-secondary font-semibold shrink-0 text-neutral-500 w-6">
            #9
          </span>

          <div className="flex flex-1 gap-3 items-center min-w-0">
            <span className="hidden sm:flex border-2 border-dashed border-neutral-300 items-center justify-center rounded-full shrink-0 w-[3.125rem] h-[3.125rem] text-blue-500 text-lg">
              <i className="fa-solid fa-thumbs-up" />
            </span>

            <div className="flex flex-1 flex-col gap-3 min-w-0 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-1">
                <p className="font-secondary font-semibold">
                  This spot is open
                </p>
                <p className="text-neutral-500 text-sm max-w-prose">
                  Give feedback on someone's solution this week. When the
                  author marks it helpful, you earn points and a place here.
                </p>
              </div>

              <a
                href="/Frontend-Mentor-clone/solutions"
                className="bg-blue-500 border border-blue-500 hover:bg-blue-600 text-white font-bold font-secondary italic px-5 py-3 rounded-full uppercase text-center text-sm whitespace-nowrap w-fit"
              >
                Give feedback
              </a>
            </div>
          </div>
        </li>

        {/* Rank 10 */}
        <li className="border border-dashed border-neutral-300 flex gap-3 items-center px-4 py-3">
          <span className="font-secondary font-semibold text-neutral-500 w-6">
            #10
          </span>
          <span className="font-secondary text-neutral-500 text-sm">
            Open spot
          </span>
        </li>

      </ol>
    </div>
  );
}

export default ThisWeek;
