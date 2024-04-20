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
import { ShoppingBag } from "lucide-react"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Components",
    href: "https://nyptech.vercel.app/docs/components",
    description:
      "A list of components used on the main page.",
  },
  {
    title: "Timeline",
    href: "https://nyptech.vercel.app/docs/components#activity",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Project Card",
    href: "https://nyptech.vercel.app/docs/components#exco",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Socials",
    href: "https://nyptech.vercel.app/docs/components#socials",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Hero",
    href: "https://nyptech.vercel.app/docs/components#hero",
    description: "Visually or semantically separates content.",
  },
]

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu className="flex container py-5">
      <NavigationMenuList>
        <NavigationMenuItem className="btn btn-ghost hover:btn">
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-base-100">
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <ShoppingBag className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Main Page
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="https://nyptech.vercel.app/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="https://nyptech.vercel.app/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="btn btn-ghost hover:btn-accent">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
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
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
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
