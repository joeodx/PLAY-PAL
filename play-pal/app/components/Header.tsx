import React from "react";
import Link from "next/link";



const Header = () => {
  return (
    <header className="flex flex-col items-center border-b-4 border-black ">
      <div className="w-full flex justify-between items-center">
        <div className="flex-1"></div> {/* Empty div for spacing */}
        <div className="text-3xl flex-1 flex justify-center">
          <Link href="/">Play-Pal</Link>
        </div>
        <div className="text-xl flex-1 flex justify-end pr-4 pt-8">
          <Link href="/">Profile</Link>
        </div>
      </div>
      <p className="w-full text-center pb-4">
        Tired of playing with yourself, now find others to play with.
      </p>
    </header>
  );
};

export default Header;


