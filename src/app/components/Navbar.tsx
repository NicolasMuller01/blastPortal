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
      <nav className="h-28">
        <ul className="flex items-center justify-between px-4">
          {data.map((item) => (
            <li key={item.name}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
