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

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  stock: string;
  seller: string;
}

export default function ProductCard({ 
  title, 
  description, 
  price, 
  stock, 
  seller 
}: ProductCardProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="price">Price</Label>
              <div className="text-md">{price}</div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="stock">Stock</Label>
              <div className="text-md">{stock}</div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="seller">Seller</Label>
              <div className="text-md">{seller}</div>
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