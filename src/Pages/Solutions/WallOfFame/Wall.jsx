import { useState } from "react";
import { Link } from "react-router-dom";
import { Info, ThumbsUp } from "lucide-react";
import ThisWeek from "./ThisWeek";
import ThisMonth from "./ThisMonth";
import ThisYear from "./ThisYear";
import AllTime from "./AllTime";

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
            {/* Heading */}
            <h1 className="font-secondary text-xl md:text-2xl whitespace-nowrap">
              Wall of Fame
            </h1>

            {/* Mobile Select */}
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="sm:hidden border border-neutral-300 rounded-lg px-4 py-2 bg-white"
            >
              {timeframes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>

            {/* Desktop Tabs */}
            <div className="hidden sm:flex items-center border-b border-neutral-200">
              {timeframes.map((time) => (
                <button
                  key={time}
                  onClick={() => setActiveTab(time)}
                  className={`font-secondary font-semibold px-4 py-3 relative whitespace-nowrap ${
                    activeTab === time
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-neutral-500 hover:text-blue-500"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Info Button */}
          <button className="flex gap-2 items-center text-lg font-secondary font-semibold hover:opacity-60 sm:ml-auto">
            Learn about our Wall of Fame
            <Info size={17} className="text-cyan-500" />
          </button>

          {/* Selected Timeframe Page */}
          {activeTab === "This week" && <ThisWeek />}
          {activeTab === "This month" && <ThisMonth />}
          {activeTab === "This year" && <ThisYear />}
          {activeTab === "All time" && <AllTime />}
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
