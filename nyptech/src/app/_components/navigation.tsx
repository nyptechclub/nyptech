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
import { BookOpen, Component, Home, HomeIcon, ShoppingBag } from "lucide-react"

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
    <NavigationMenu className="flex container py-5">
      <NavigationMenuList>
        <NavigationMenuItem className="btn btn-ghost hover:btn">
          <NavigationMenuTrigger><div className="hidden sm:flex">Getting started</div><Home/></NavigationMenuTrigger>
          <NavigationMenuContent className="bg-base-100">
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <HomeIcon className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Main Page
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                     Join us and be part of the future.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
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
          <NavigationMenuTrigger><div className="hidden sm:flex">Components</div><Component/></NavigationMenuTrigger>
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
        <NavigationMenuItem className="btn btn-ghost hover:btn">
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}><div className="hidden sm:flex">
            Documentation
            </div>
              <BookOpen/>
            </NavigationMenuLink>
          </Link>
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
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-base-300 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
