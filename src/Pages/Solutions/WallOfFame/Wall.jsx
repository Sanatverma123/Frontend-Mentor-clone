
import { useState } from "react";
import { Link } from "react-router-dom";
import { Info, ThumbsUp } from "lucide-react";
import ThisWeek from "./ThisWeek";

const topUsers = [
  {
    rank: "1st",
    name: "Abdelrhman Abdelaal",
    username: "@MrBlackvanta",
    points: 150,
    level: 5,
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_80/Avatars/hh4ovz2fap438qb2gt7h.png",
    color: "border-amber-300",
    badge: "bg-red-500",
  },
  {
    rank: "2nd",
    name: "Delfin FERNANDEZ",
    username: "@delfinjfb",
    points: 26,
    level: 3,
    image: "https://avatars.githubusercontent.com/u/1277866?v=4",
    color: "border-slate-300",
    badge: "bg-yellow-400",
  },
  {
    rank: "3rd",
    name: "Samarth Varpe",
    username: "@samarthvarpe515",
    points: 8,
    level: 2,
    image: "https://avatars.githubusercontent.com/u/135849322?v=4",
    color: "border-yellow-600",
    badge: "bg-green-500",
  },
];

const otherUsers = [
  {
    name: "Cacti",
    username: "@nottohave",
    points: 5,
    level: 3,
    image: "https://avatars.githubusercontent.com/u/37563705?v=4",
  },
  {
    name: "Eslam Ashraf",
    username: "@e5lama5hraf",
    points: 5,
    level: 2,
    image: "https://avatars.githubusercontent.com/u/170796617?v=4",
  },
  {
    name: "hossamnabilelgedy",
    username: "@hossamelgendy101",
    points: 3,
    level: 2,
    image: "https://avatars.githubusercontent.com/u/80179247?v=4",
  },
  {
    name: "sojib ahmed",
    username: "@sojib-hasan04",
    points: 3,
    level: 1,
    image: "https://avatars.githubusercontent.com/u/217063747?v=4",
  },
  {
    name: "Isaac",
    username: "@filiuslupus",
    points: 3,
    level: 1,
    image: "https://avatars.githubusercontent.com/u/337903191?v=4",
  },
];

const timeframes = ["This week", "This month", "This year", "All time"];

function WallOfFame() {
  const [activeTab, setActiveTab] = useState("This week");

  const levelColors = {
    1: "bg-cyan-500",
    2: "bg-green-500",
    3: "bg-yellow-400",
    4: "bg-orange-500",
    5: "bg-red-500",
  };

  return (
    <main className="flex flex-col grow bg-white">

      {/* Solutions Navigation */}
      <div className="bg-neutral-50 border-y border-neutral-200 px-5">
        <div className="max-w-7xl mx-auto flex items-center">
          <span className="border-x border-neutral-200 font-bold font-secondary tracking-wider px-5 py-3 uppercase">
            Solutions
          </span>

          <div className="ml-auto flex gap-5 items-center overflow-x-auto p-3">
            <Link
              to="/solutions"
              className="font-secondary whitespace-nowrap hover:text-blue-500"
            >
              Solutions
            </Link>

            <Link
              to="/tags"
              className="font-secondary whitespace-nowrap hover:text-blue-500"
            >
              Tags
            </Link>

            <Link
              to="/wall-of-fame"
              className="font-secondary whitespace-nowrap text-blue-500 border-b-2 border-blue-500"
            >
              Wall of Fame
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 px-5 py-6">

        {/* Heading and Timeframe */}
        <div className="max-w-7xl w-full mx-auto flex flex-col gap-5">

          <div className="flex flex-col gap-5 w-full sm:flex-row sm:items-center sm:justify-between">
            <h1 className="font-secondary text-xl md:text-2xl whitespace-nowrap">
              Wall of Fame
            </h1>

            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="sm:hidden border border-neutral-300 rounded-lg px-4 py-2 bg-white"
            >
              {timeframes.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
          </div>

          {/* Timeframe Tabs */}
          <div className="hidden sm:flex border-b border-neutral-200 items-center">
            {timeframes.map((time) => (
              <button
                key={time}
                onClick={() => setActiveTab(time)}
                className={`font-secondary font-semibold px-4 py-2 relative ${
                  activeTab === time
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-neutral-500 hover:text-blue-500"
                }`}
              >
                {time}
              </button>
            ))}
          </div>

          {/* Info Button */}
          <button className="flex gap-2 items-center text-sm font-secondary font-semibold hover:opacity-60 sm:ml-auto">
            Learn about our Wall of Fame
            <Info size={17} className="text-cyan-500" />
          </button>

          {/* Top 3 Cards */}
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {topUsers.map((user, index) => (
              <li
                key={user.username}
                className={`bg-white rounded-2xl border-2 ${user.color} flex flex-col gap-3 items-center px-5 py-8 relative text-center overflow-hidden ${
                  index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Rank Badge */}
                <div
                  className={`absolute right-0 top-0 [clip-path:polygon(0_0,100%_100%,100%_0)] font-bold font-secondary pr-2 pt-1 pl-6 pb-6 text-sm ${
                    index === 0
                      ? "bg-amber-300 text-amber-800"
                      : index === 1
                      ? "bg-slate-300 text-slate-800"
                      : "bg-yellow-600 text-yellow-950"
                  }`}
                >
                  {user.rank}
                </div>

                {/* Profile Image */}
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-20 h-20 rounded-full object-cover"
                />

                {/* Level */}
                <span
                  className={`${user.badge} text-white text-sm font-bold italic rounded px-2 py-1`}
                >
                  LVL {user.level}
                </span>

                {/* User Details */}
                <div className="flex flex-col gap-1 items-center">
                  <span className="font-secondary font-semibold hover:underline">
                    {user.name}
                  </span>

                  <span className="text-neutral-500 text-sm">
                    {user.username}
                  </span>
                </div>

                {/* Points */}
                <div className="flex gap-2 items-end mt-auto">
                  <span className="font-bold font-secondary italic text-blue-500 text-2xl">
                    {user.points}
                  </span>
                  <span className="font-secondary text-neutral-500">
                    pts
                  </span>
                </div>
              </li>
            ))}

            {/* Other Users */}
            {otherUsers.map((user, index) => (
              <li
                key={user.username}
                className="border border-neutral-200 bg-white rounded-lg col-span-full flex gap-3 sm:gap-5 items-center px-4 py-3"
              >
                <span className="font-secondary font-semibold text-neutral-500 w-6 shrink-0">
                  #{index + 4}
                </span>

                <div className="flex gap-3 items-center min-w-0">
                  <div className="relative shrink-0">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />

                    <span
                      className={`${levelColors[user.level]} absolute -bottom-1 left-1/2 -translate-x-1/2 rounded px-1 text-white text-xs font-bold whitespace-nowrap`}
                    >
                      LVL {user.level}
                    </span>
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className="font-secondary font-semibold truncate">
                      {user.name}
                    </span>

                    <span className="text-neutral-500 text-sm truncate">
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

            {/* Open Feedback Spot */}
            <li className="border border-neutral-200 rounded-lg col-span-full flex flex-col sm:flex-row gap-4 sm:gap-5 items-center px-4 py-5">
              <span className="font-secondary font-semibold text-neutral-500 w-6">
                #9
              </span>

              <div className="flex flex-col sm:flex-row flex-1 gap-4 items-center justify-between w-full">
                <div className="flex gap-3 items-center">
                  <span className="hidden sm:flex border-2 border-dashed border-neutral-300 rounded-full w-12 h-12 items-center justify-center">
                    <ThumbsUp className="text-blue-500" />
                  </span>

                  <div>
                    <p className="font-secondary font-semibold">
                      This spot is open
                    </p>
                    <p className="text-neutral-500 text-sm max-w-prose">
                      Give feedback on someone's solution this week. When the
                      author marks it helpful, you earn points and a place here.
                    </p>
                  </div>
                </div>

                <Link
                  to="/solutions"
                  className="bg-blue-500 border border-blue-500 hover:bg-blue-600 text-white font-bold font-secondary italic px-5 py-3 rounded-full uppercase whitespace-nowrap"
                >
                  Give feedback
                </Link>
              </div>
            </li>

            {/* Open Spot */}
            <li className="border border-dashed border-neutral-300 rounded-lg col-span-full flex gap-3 items-center px-4 py-3">
              <span className="font-secondary font-semibold text-neutral-500 w-6">
                #10
              </span>
              <span className="font-secondary text-neutral-500 text-sm">
                Open spot
              </span>
            </li>
          </ol>
        </div>

        {/* Discord Banner */}
        
        <div className="max-w-7xl w-full mx-auto bg-blue-800  rounded-xl px-5 py-10 flex flex-col gap-6 items-center text-center text-white">
          <h2 className="font-bold uppercase tracking-widest text-xl">
            Join our Discord community
          </h2>

          <p className="max-w-prose text-lg md:text-xl">
            Join thousands of Frontend Mentor community members taking the
            challenges, sharing resources, helping each other, and chatting
            about all things front-end!
          </p>

          <a
            href="https://discord.gg/UAfh3qzhYb"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-blue-600 hover:bg-neutral-100 font-bold font-secondary italic px-5 py-3 rounded-full uppercase"
          >
            Join our Discord
          </a>
        </div>
      </div>
    </main>
  );
}

export default WallOfFame;
