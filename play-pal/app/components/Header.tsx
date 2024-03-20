"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { SlGameController } from "react-icons/sl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import getGenre from "@/lib/getGenre";

interface Genre {
  id: number;
  name: string;
}

const Header = () => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await getGenre();
        setGenres(data);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <>
      <header className="flex flex-col items-center border-b-4 border-black">
        <div className="w-full flex justify-between items-center">
          <div className="flex-1"></div>
          <div className="text-3xl flex-1 flex justify-center">
            <SlGameController />
            <Link className="border-2" href="/">
              Play-Pal
            </Link>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>Genres</DropdownMenuTrigger>
              <DropdownMenuContent>
                {genres.map((genre) => (
                  <DropdownMenuItem key={genre.id}>
                    {genre.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="text-xl flex-1 flex justify-end pr-6 pt-8">
            <Link href="/">Profile</Link>
          </div>
        </div>
        <p className="w-full text-center pb-4">
          Tired of playing with yourself, now find others to play with.
        </p>
      </header>
    </>
  );
};

export default Header;
