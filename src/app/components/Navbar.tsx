import Link from "next/link";
import React from "react";

const data = [
  { name: "swap", link: "/swap" },
  { name: "bridge", link: "/bridge" },
  { name: "aidrop", link: "/aidrop" },
  { name: "leaderboard", link: "/leaderboard" },
];

const Navbar = () => {
  return (
    <>
      <nav className="h-28 w-full flex items-center justify-center z-1000">
        <ul className="flex items-center justify-center max-w-2xl space-x-28 text-2xl">
          {data.map((item) => (
            <li key={item.name} className="relative">
              <Link
                href={item.link}
                className="px-2 py-1 hover:border-yellowBlast-300 hover:text-white transition-all duration-200 border-transparent border-2"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
