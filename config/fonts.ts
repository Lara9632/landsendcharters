import { Saira_Extra_Condensed } from "next/font/google";
import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const saira = Saira_Extra_Condensed(
  { 
    subsets: ["latin"], 
    weight: ['400', '500', '600', '700', '800', '900']
  }
)
