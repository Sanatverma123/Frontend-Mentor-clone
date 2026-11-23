
import { Crown, ThumbsUp } from "lucide-react";

const topUsers = [
  {
    rank: 1,
    name: "Abdelrhman Abdelaal",
    username: "@MrBlackvanta",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_80/Avatars/hh4ovz2fap438qb2gt7h.png",
    points: 25000,
    level: 10,
    color: "bg-amber-300 text-amber-800",
    badge: "bg-red-500",
  },
  {
    rank: 2,
    name: "Delfin FERNANDEZ",
    username: "@delfinjfb",
    image: "https://avatars.githubusercontent.com/u/1277866?v=4",
    points: 21500,
    level: 9,
    color: "bg-slate-300 text-slate-700",
    badge: "bg-yellow-400",
  },
  {
    rank: 3,
    name: "Samarth Varpe",
    username: "@samarthvarpe515",
    image: "https://avatars.githubusercontent.com/u/135849322?v=4",
    points: 18900,
    level: 8,
    color: "bg-orange-300 text-orange-800",
    badge: "bg-green-500",
  },
];

const otherUsers = [
  {
    rank: 4,
    name: "Cacti",
    username: "@nottohave",
    image: "https://avatars.githubusercontent.com/u/37563705?v=4",
    points: 16500,
    level: 7,
    badge: "bg-yellow-400",
    pro: true,
  },
  {
    rank: 5,
    name: "Eslam Ashraf",
    username: "@e5lama5hraf",
    image: "https://avatars.githubusercontent.com/u/170796617?v=4",
    points: 14200,
    level: 7,
    badge: "bg-green-500",
  },
  {
    rank: 6,
    name: "hossamnabilelgedy",
    username: "@hossamelgendy101",
    image: "https://avatars.githubusercontent.com/u/80179247?v=4",
    points: 12800,
    level: 6,
    badge: "bg-green-500",
    pro: true,
  },
  {
    rank: 7,
    name: "sojib ahmed",
    username: "@sojib-hasan04",
    image: "https://avatars.githubusercontent.com/u/217063747?v=4",
    points: 11500,
    level: 6,
    badge: "bg-cyan-400",
  },
  {
    rank: 8,
    name: "Isaac",
    username: "@filiuslupus",
    image: "https://avatars.githubusercontent.com/u/337903191?v=4",
    points: 9800,
    level: 5,
    badge: "bg-cyan-400",
  },
];

function AllTime() {
  return (
    <div className="flex flex-col gap-6 w-full">

      {/* Top 3 Users */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {topUsers.map((user) => (
          <div
            key={user.rank}
            className="relative bg-white border border-neutral-200 rounded-xl p-5 flex flex-col items-center text-center gap-3"
          >
            <div
              className={`absolute top-0 right-0 px-4 py-3 text-sm font-bold ${user.color}`}
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%)",
              }}
            >
              <span className="ml-3">#{user.rank}</span>
            </div>

            <div className="relative">
              <img
                src={user.image}
                alt={user.name}
                className="w-20 h-20 rounded-full object-cover"
              />

              {user.rank === 1 && (
                <Crown className="absolute -top-4 -left-3 text-amber-500" />
              )}
            </div>

            <div>
              <h3 className="font-semibold text-blue-900">
                {user.name}
              </h3>
              <p className="text-sm text-neutral-500">
                {user.username}
              </p>
            </div>

            <p className="font-bold text-blue-900">
              {user.points.toLocaleString()} points
            </p>

            <span
              className={`${user.badge} text-white text-xs font-bold px-3 py-1 rounded`}
            >
              Level {user.level}
            </span>
          </div>
        ))}
      </div>

      {/* Other Users */}
      <div className="flex flex-col border border-neutral-200 rounded-xl overflow-hidden bg-white">
        {otherUsers.map((user) => (
          <div
            key={user.rank}
            className="flex items-center gap-3 px-4 py-4 border-b border-neutral-200 last:border-0"
          >
            <span className="w-7 text-neutral-500 font-semibold">
              {user.rank}
            </span>

            <img
              src={user.image}
              alt={user.name}
              className="w-11 h-11 rounded-full object-cover"
            />

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-blue-900">
                  {user.name}
                </span>

                {user.pro && (
                  <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">
                    PRO
                  </span>
                )}
              </div>

              <p className="text-sm text-neutral-500">
                {user.username}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2">
              <span className="font-semibold text-blue-900 whitespace-nowrap">
                {user.points.toLocaleString()} pts
              </span>

              <span
                className={`${user.badge} text-white text-xs font-bold px-2 py-1 rounded whitespace-nowrap`}
              >
                Level {user.level}
              </span>
            </div>
          </div>
        ))}

        {/* Rank 9 */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-neutral-200">
          <span className="w-7 text-neutral-500 font-semibold">9</span>

          <div className="w-11 h-11 rounded-full bg-neutral-100 flex items-center justify-center">
            <ThumbsUp className="text-neutral-400" />
          </div>

          <div className="flex-1">
            <p className="font-semibold text-blue-900">Open spot</p>
            <p className="text-sm text-neutral-500">
              Give feedback to earn points
            </p>
          </div>

          <span className="text-blue-600 font-semibold text-sm">
            Give feedback
          </span>
        </div>

        {/* Rank 10 */}
        <div className="flex items-center gap-3 px-4 py-4">
          <span className="w-7 text-neutral-500 font-semibold">10</span>
          <div className="w-11 h-11 rounded-full bg-neutral-100" />
          <p className="font-semibold text-blue-900">Open spot</p>
        </div>
      </div>
    </div>
  );
}

export default AllTime;
