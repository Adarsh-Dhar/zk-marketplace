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

interface RewardCardProps {
    rewardTitle: string; // Title of the reward
    rewardDescription : string;
    amount: string; // Reward amount or value (e.g., "$10 Discount")
    status: "active" | "claimed" | "expired"; // Status of the reward
    expirationDate: string; // Reward expiration date 
  }

export default function ProductCard({ 
  rewardTitle,
  rewardDescription,
  amount,
  status,
  expirationDate
}: RewardCardProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{rewardTitle}</CardTitle>
        <CardDescription>{rewardDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="price">Amount</Label>
              <div className="text-md">{amount}</div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="stock">Status</Label>
              <div className="text-md">{status}</div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="seller">Expiration Date</Label>
              <div className="text-md">{expirationDate}</div>
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