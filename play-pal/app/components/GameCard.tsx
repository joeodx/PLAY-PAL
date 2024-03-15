import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import getGames from "@/lib/getGames";

interface gameData {
  id: number;
  title: string;
  background_image: string;
}

async function GameCard() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  // const data: img[] = await res.json();

  return (
    <>
      {data.map((getGames()) => (
        <Card key={(gameData.id = 0)}>
          <CardTitle className="pl-14">{gameData.title}</CardTitle>
          <CardDescription className="pl-14">{img.url}</CardDescription>
          <CardContent className="pl-14">
            <p>Online Mutiplayer Game</p>
          </CardContent>
          {/* <Image src={img.url} alt={img.title} width={500} height={500} /> */}
        </Card>
      ))}
    </>
  );
}

export default GameCard;
