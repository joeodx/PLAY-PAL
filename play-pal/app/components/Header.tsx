import React from "react";
import Link from "next/link";


const Header = () => {
  return (
    <>
      <header className="flex-row border-double: solid border black p-1">
        <div className="flex place-content-center text-xl ">
          <Link href="/">Play-Pal</Link>
          
        </div>
        <div className="flex place-content-right text-xl">
          <Link href="/">
            Profile
          </Link>
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
