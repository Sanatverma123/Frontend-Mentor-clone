import { useState } from "react";
import { Link } from "react-router-dom";
import TagCard from "./TagsCard";
import TagsCard2 from "./TagsCard2";

const technologies = [
  {
    title: "What is Angular?",
    description:
      "Angular is a TypeScript web framework from Google. It ships with routing, forms and an HTTP client, so most Angular apps follow the same structure.",
    href: "/tags/angular",
  },
  {
    title: "What is Bootstrap?",
    description:
      "Bootstrap is a free CSS and JavaScript toolkit with a 12-column grid and ready-made components like navbars, modals and carousels.",
    href: "/tags/bootstrap",
  },
  {
    title: "What is Next.js?",
    description:
      "Next.js is a React framework for full-stack web apps. Its App Router turns folders into routes and renders pages as React Server Components by default.",
    href: "/tags/next",
  },
  {
    title: "What is Node.js?",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 engine. It runs JavaScript outside the browser, so you can write servers and APIs.",
    href: "/tags/node",
  },
  {
    title: "What is React?",
    description:
      "React is a JavaScript library for building user interfaces from components. You write them in JSX, and React keeps the page in sync.",
    href: "/tags/react",
  },
  {
    title: "What is Redux?",
    description:
      "Redux is a library for managing global state in JavaScript apps. Redux Toolkit is the official way to write it.",
    href: "/tags/redux",
  },
  {
    title: "What is Tailwind CSS?",
    description:
      "Tailwind CSS is a utility-first CSS framework. You style elements with small classes like px-4 and md:flex.",
    href: "/tags/tailwind-css",
  },
  {
    title: "What is TypeScript?",
    description:
      "TypeScript is JavaScript with syntax for types, made by Microsoft. It checks your code before it runs.",
    href: "/tags/typescript",
  },
  {
    title: "What is Vue.js?",
    description:
      "Vue is a JavaScript framework for building user interfaces. You write components in .vue files.",
    href: "/tags/vue",
  },
];

const allTags = [
  {
    id: 1,
    tag: "accessibility",
    description:
      "Web accessibility is the practice of making websites usable by as wide a range of people as possible. This includes people with disabilities, but can also include other factors, like a slow internet connection.",
  },
  {
    id: 2,
    tag: "airtable",
    description:
      "Airtable is a versatile, cloud-based spreadsheet-database hybrid platform that simplifies data organization and collaboration. With an API for web developers, Airtable enables seamless integration of dynamic, real-time data into web applications, streamlining workflows.",
  },
  {
    id: 3,
    tag: "angular",
    description:
      "Angular is a TypeScript web framework from Google. It ships with routing, forms and an HTTP client, so most Angular apps follow the same structure.",
  },
  {
    id: 4,
    tag: "animation",
    description:
      "Animations can add a nice layer of polish to web pages. Various libraries exist, but it can also be done with plain CSS and JavaScript.",
  },
  {
    id: 5,
    tag: "bootstrap",
    description:
      "Bootstrap is a free CSS and JavaScript toolkit with a 12-column grid and ready-made components like navbars, modals and carousels, applied with classes.",
  },
  {
    id: 6,
    tag: "javascript",
    description:
      "JSS (JavaScript Stylesheets) is a library for creating and managing styles in JavaScript applications. It allows developers to define styles in a declarative and dynamic way using a simple and intuitive API.",
  },
  {
    id: 7,
    tag: "react",
    description:
      "React is a JavaScript library used to build interactive user interfaces. It allows developers to create reusable UI components for web applications. React uses a virtual DOM to update pages efficiently. It makes building dynamic and modern websites easier.",
  },
  {
    id: 8,
    tag: "tailwind-css",
    description:
      "Tailwind CSS is a utility-first CSS framework used to design modern and responsive websites. It provides ready-made classes for styling HTML elements directly. It makes web development faster and easier without writing much custom CSS..",
  },
  {
    id: 9,
    tag: "zustand",
    description:
      "Zustand is a lightweight, minimal state management library for React applications. It offers a simple API for creating and managing global or local state without the need for reducers or actions, making it an ideal choice for small to medium-sized projects that require a more straightforward approach.",
  },
];

function Technologies() {
  const [search, setSearch] = useState("");
  const [followedTags, setFollowedTags] = useState([]);

  const handleFollow = (id) => {
    setFollowedTags((prev) =>
      prev.includes(id) ? prev.filter((tagId) => tagId !== id) : [...prev, id],
    );
  };

  const filteredTags = allTags.filter((item) =>
    item.tag.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="technologies-page relative bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 min-h-screen">
      <div className=" w-full bg-gradient-to-br from-blue-100 via-white to-sky-100 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 border-y border-blue-200 px-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="inline-block border-x border-blue-100 px-5 py-3 font-bold dark:text-white uppercase tracking-wider">
            SOLUTIONS
          </span>

          <div className="flex items-center gap-6 text-lg font-medium text-gray-600">
            <div className="flex items-center gap-6 text-lg font-medium text-gray-600">
              <Link
                to="/solutions"
                className="hover:text-blue-600 hover:underline underline-offset-4"
              >
                Solutions
              </Link>

              <Link
                to="/tags"
                className="hover:text-blue-600 hover:underline underline-offset-4"
              >
                Tags
              </Link>

              <Link
                to="/wall"
                className="hover:text-blue-600 hover:underline underline-offset-4"
              >
                Wall of Fame
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-8 space-y-6">
        {/* <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 px-5 py-8"> */}
        {/* Heading */}
        <div className="flex flex-col gap-6 py-8 mb-20 items-center text-center">
          <h1 className="font-secondary text-3xl tablet:text-5xl max-w-[theme(containerWidth.lg)] text-blue-900 dark:text-blue-400">
            Technologies
          </h1>

          <p className="max-w-prose text-lg text-neutral-500 dark:text-neutral-200">
            Find out what a technology does, then practice it on real projects.
          </p>
        </div>

        {/* Technology Guides */}
        <section className="flex flex-col gap-6 ">
          <h2 className="font-secondary dark:text-white text-xl tablet:text-2xl">
            Technology guides
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((item) => (
              <TagCard
                key={item.href}
                title={item.title}
                description={item.description}
                href={item.href}
              />
            ))}
          </div>
        </section>

        {/* All Tags */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-row items-center justify-between gap-5">
            <h2 className="font-secondary dark:text-neutral-300 text-xl tablet:text-2xl whitespace-nowrap">
              All tags
            </h2>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tags..."
              className="block p-2 placeholder-neutral-500 rounded w-80 border border-neutral-200 bg-white"
            />
          </div>
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTags.map((item) => (
              <TagsCard2
                key={item.id}
                tag={item.tag}
                description={item.description}
                isFollowing={followedTags.includes(item.id)}
                onFollow={() => handleFollow(item.id)}
              />
            ))}
          </div>

          {filteredTags.length === 0 && (
            <p className="text-neutral-500 text-center py-8">No tags found.</p>
          )}
        </section>
      </div>
    </main>
  );
}

export default Technologies;
