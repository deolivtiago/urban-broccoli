"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { MenuIcon } from "lucide-react"
import Link from "next/link"

export function HeaderBar() {
  const menus = [
    { title: "Blog", path: "/" },
    { title: "About", path: "/" },
    { title: "Contact", path: "/" },
  ]

  return (
    <header className="flex flex-col items-center justify-start p-2 shadow dark:shadow-neutral-800">
      <div className="grid w-full max-w-5xl grid-cols-2 sm:grid-cols-5 md:grid-cols-10">
        <div className="col-start-1 flex items-center justify-start sm:col-end-3 md:col-end-4">
          <Button variant="ghost" className="pb-7 pr-1 pt-5" asChild>
            <Link href="/" className="flex items-center justify-center space-x-2">
              <div className="grid grid-cols-4">
                <div className="col-span-3">
                  <span className="font-serif text-2xl font-semibold uppercase leading-none">
                    Clarx
                  </span>
                  <span className="font-serif text-4xl leading-none text-primary">.</span>
                </div>
                <div className="col-span-3 col-start-2 hidden sm:inline-block">
                  <span className="font-mono text-[8pt] leading-none">Thats all folks</span>
                </div>
              </div>
            </Link>
          </Button>
        </div>

        <div className="hidden items-center sm:col-start-3 sm:col-end-5 sm:flex sm:justify-end md:col-start-4 md:col-end-8 md:justify-center">
          <NavigationMenu className="hidden items-center justify-center sm:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" asChild>
                      <Link href="/">Destinations</Link>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="mt-3 grid grid-cols-2 p-1">
                    <DropdownMenuGroup className="p-1">
                      <Carousel orientation="vertical">
                        <CarouselContent className="-mt-1 h-36">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="pt-1 md:basis-1/2">
                              <div className="p-1">
                                <Card>
                                  <CardContent className="flex items-center justify-center p-6">
                                    <span className="text-3xl font-semibold">{index + 1}</span>
                                  </CardContent>
                                </Card>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    </DropdownMenuGroup>
                    <DropdownMenuGroup className="col-start-2 w-96 space-y-2 p-1">
                      {Array.from(Array(5).keys()).map((idx) => {
                        return (
                          <DropdownMenuItem className="border" key={idx}>
                            <Link href="/">
                              <div className="flex flex-col items-start justify-center space-y-2">
                                <h3 className="text-sm font-medium leading-none">Sydney</h3>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  Beautifully designed components that you can copy and paste into
                                  your apps. Accessible. Customizable. Open Source.
                                </p>
                              </div>
                            </Link>
                          </DropdownMenuItem>
                        )
                      })}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>

              {menus.map((m, idx) => (
                <NavigationMenuItem key={idx}>
                  <Link href={m.path} legacyBehavior passHref>
                    <Button variant="ghost" asChild>
                      <NavigationMenuLink>{m.title}</NavigationMenuLink>
                    </Button>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="col-start-2 flex items-center justify-end space-x-2 sm:col-start-5 md:col-start-8 md:col-end-11">
          <ThemeToggle />

          <Button className="hidden sm:flex">
            <Link href="/" passHref>
              <span className="font-semibold uppercase">Login</span>
            </Link>
          </Button>

          {/* <MobileDropdownMenu menus={menus} /> */}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="sm:hidden">
                <MenuIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-3 w-screen sm:hidden">
              <NavigationMenu className="max-w-full">
                <NavigationMenuList className="grid w-full grid-cols-1 p-2 outline outline-1 outline-red-500">
                  <NavigationMenuItem className="w-full p-2">
                    <NavigationMenuLink asChild>
                      <Button variant="ghost" className="w-full" asChild>
                        <Link href="/">About</Link>
                      </Button>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <Button variant="ghost" asChild>
                    <Link href="/">About</Link>
                  </Button>
                  <NavigationMenuItem>
                    <Button variant="ghost" className="w-full">
                      Contact
                    </Button>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
