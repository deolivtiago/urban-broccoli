import { Fira_Code, Lora, Poppins } from "next/font/google"

const sans = Poppins({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})

const serif = Lora({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
})

const mono = Fira_Code({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
})

export { mono, sans, serif }
