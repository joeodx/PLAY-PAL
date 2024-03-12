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
        <Card key={img.id}>
          <CardTitle>{img.title}</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          {/* <Image /> */}
        </Card>
      ))}
    </>
  );
}

export default GameCard;
