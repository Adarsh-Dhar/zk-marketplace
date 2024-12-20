"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import ConnectWallet from "./ConnectWallet"
import {WalletContextProvider} from "./context/WalletContextProvider"


const buyerComponents: { title: string; href: string;  }[] = [
    {
      title: "Dashboard",
      href: "/docs/primitives/alert-dialog",      
    },
    {
      title: "My Rewards",
      href: "/docs/primitives/hover-card",      
    },
    {
      title: "My Products",
      href: "/docs/primitives/scroll-area",     
    },
    {
        title: "Buy Products",
        href: "/docs/primitives/scroll-area",     
    },
   
  ]


const sellerComponents: { title: string; href: string;}[] = [
    {
      title: "Dashboard",
      href: "/docs/primitives/alert-dialog",
    },
    {
      title: "Add Commodities",
      href: "/docs/primitives/hover-card",
    },
    {
      title: "Sales and Revenue",
      href: "/docs/primitives/scroll-area",
    },
    {
        title: "rewards section",
        href: "/docs/primitives/scroll-area",
      },
   
  ]

export default function Navbar() {
  return (
    <div className="w-full flex justify-end px-12">
    <WalletContextProvider>

      <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuTrigger>Sell</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-1 lg:w-[400px] px-20 ">
                {sellerComponents.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >

                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Buy</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-1 lg:w-[400px] px-20 ">
                {buyerComponents.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ConnectWallet />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </WalletContextProvider>

    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"