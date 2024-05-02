import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar/NavBar";
import Categories from "./components/NavBar/Categories";
import { Nunito } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PantipRedesign",
  description: "redesign",
};


const font = Nunito(
  {subsets: ['latin'] }
)


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        
        <Navbar/>
        <main>
          {children}
        </main>
       
      </body>
    </html>
  );
}
