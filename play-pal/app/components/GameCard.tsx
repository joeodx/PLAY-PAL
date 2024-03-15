'use client' 
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import getGames from "@/lib/getGames";

interface GameData {
  id: number;
  name: string;
  background_image: string;
}

const GameCard = () => {
  const [games, setGames] = useState<GameData[]>([]); // Initialize state to hold your games

  useEffect(() => {
    const fetchGames = async () => {
      const data = await getGames(); // Fetch your games using the `getGames` function
      setGames(data); // Update the state with the fetched games
    };

    fetchGames();
  }, []); // The empty array means this effect runs once after the initial render

  return (
    <>
      {games.map((game) => (
        <Card key={game.id}> {/* Use the game's id as a key for React's list rendering */}
          <CardTitle className="pl-14">{game.name}</CardTitle>
          {/* <CardDescription className="pl-14">{game.background_image}</CardDescription> */}
          <CardContent className="pl-14">
            <p>Online Multiplayer Game</p>
          </CardContent>
          {/* Uncomment and correct the Image component usage as needed */}
          <Image src={game.background_image} alt={game.name} width={500} height={500} layout="responsive" />
        </Card>
      ))}
    </>
  );
}

export default GameCard;
