import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface img {
  id: number;
  title: string;
  url: string;
}

async function GameCard() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data: img[] = await res.json();

  return (
    <>
      {data.map((img) => (
        <Card key={(img.id = 0)}>
          <CardTitle className="pl-14">{img.title}</CardTitle>
          <CardDescription>{img.url}</CardDescription>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          {/* <Image src={img.url} alt={img.title} width={500} height={500} /> */}
        </Card>
      ))}
    </>
  );
}

export default GameCard;
