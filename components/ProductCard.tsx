"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"


export default function ProductCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Title</Label>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Description</Label>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Price</Label>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Stock</Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Rewards</Button>
        <Button>Buy</Button>
      </CardFooter>
    </Card>
  )
}