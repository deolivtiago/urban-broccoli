import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { sans } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Clarx",
  description: "Clarx Platform",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", sans.variable)}>
        {children}
      </body>
    </html>
  )
}
