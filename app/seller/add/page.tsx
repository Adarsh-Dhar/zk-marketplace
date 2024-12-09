"use client"
import Navbar from "@/components/Navbar"
import { useState } from "react"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ChevronUp, ChevronDown } from "lucide-react"

export default function AddProducts() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [quantity, setQuantity] = useState(1)

  const handleQuantityIncrease = () => {
    setQuantity(prev => prev + 1)
  }

  const handleQuantityDecrease = () => {
    setQuantity(prev => Math.max(1, prev - 1))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Here you would typically handle form submission
    // For now, we'll just log the form data
    console.log({
      title,
      description,
      amount: parseFloat(amount),
      quantity
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar />
      <div className="flex justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Add New Product</CardTitle>
            <CardDescription>Enter details for your new product</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="title">Title</Label>
                  <Input 
                    id="title" 
                    placeholder="Title of the product" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Description</Label>
                  <Input 
                    id="description" 
                    placeholder="Description of the product" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="amount">Amount ($)</Label>
                  <Input 
                    id="amount" 
                    type="number"
                    step="0.01"
                    placeholder="Price of the product" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="quantity">Quantity</Label>
                  <div className="flex items-center space-x-2">
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="icon"
                      onClick={handleQuantityDecrease}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                    <Input 
                      id="quantity"
                      type="number"
                      value={quantity}
                      readOnly
                      className="w-20 text-center"
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="icon"
                      onClick={handleQuantityIncrease}
                    >
                      <ChevronUp className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <CardFooter className="flex justify-between p-0 mt-6">
                <Button type="submit" className="w-full">Add Product</Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}