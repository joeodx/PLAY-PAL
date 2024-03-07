import React from "react";
import Link from "next/link";
import Profile from "./Profile";

const Header = () => {
  return (
    <>
      <header className="border-double: solid border black p-5">
        <div className="flex place-content-center text-xl ">
          <Link href="/">Play-Pal</Link>
          <div>
            <Profile />
          </div>
        </div>
        <div>
          <p className="flex place-content-center">
            Tired of playing with yourself, now find others to play with.
          </p>
        </div>{" "}
        {/* </header>Play-Pal</h1> */}
      </header>
    </>
  );
};

export default Header;
