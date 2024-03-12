import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
  } from "@/components/ui/card"
  import Image from 'next/image'

function GameCard() {
  return (
    <Card>
    <CardTitle></CardTitle>
    <CardDescription>Card Description</CardDescription>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <Image />
</Card>

  )
}

export default GameCard