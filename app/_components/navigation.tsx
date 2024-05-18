"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "../../lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { BookOpen, Component, Home, HomeIcon, Lock, ShoppingBag } from "lucide-react"
import { UserButton } from "@clerk/nextjs"
import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
import { Button } from "@/components/ui/button"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Components",
    href: "https://nyptech.vercel.app/docs/components",
    description:
      "A list of components used on the main page.",
  },
  {
    title: "Timeline",
    href: "/docs/components#activity",
    description:
      "Responsive timeline component, from DaisyUI",
  },
  {
    title: "Project Card",
    href: "/docs/components#exco",
    description:
      "A card format with no background and picture placeholder.",
  },
  {
    title: "Socials",
    href: "/docs/components#socials",
    description:
      "Using Svg in Json with on hover effects as well as the nyptech-go service",
  },
  {
    title: "Hero",
    href: "/docs/components#hero",
    description: "Using carousell for shadcn with Json",
  },
]

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu className="flex container py-5 items-center">
      <NavigationMenuList>
        <NavigationMenuItem className="btn btn-ghost hover:btn">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}><div className="hidden sm:flex">
              Main Page
            </div>&nbsp;
              <Home />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="btn btn-ghost hover:btn">
          <NavigationMenuTrigger><div className="hidden sm:flex">Documentation</div>&nbsp;<BookOpen /></NavigationMenuTrigger>
          <NavigationMenuContent className="bg-base-100">
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/blog" title="Blog">
                Find out more about us
              </ListItem>
              {/* <ListItem href="/docs/Todo" title="Backlog">
                Find out more upcoming features and vote for them!
              </ListItem> */}
              <ListItem href="/docs/introduction" title="Introduction">
                Understanding the tech-stack that we use.
              </ListItem>
              <ListItem href="/docs/introduction#installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/introduction#hello-world" title="Hello World">
                Create your first app
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="btn btn-ghost hover:btn">
          <NavigationMenuTrigger><div className="hidden sm:flex">Components</div>&nbsp;<Component /></NavigationMenuTrigger>
          <NavigationMenuContent className="bg-base-100">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <Button className="btn btn-ghost hover:btn"><Lock/>Sign In</Button>
        </SignInButton>
      </SignedOut>
        </NavigationMenuItem>
      </NavigationMenuList>
      
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="text-base-content">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-base-300 hover:text-accent-foreground",
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
