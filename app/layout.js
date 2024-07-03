import { FcMenu } from "react-icons/fc"; 
import { AiOutlineBell } from "react-icons/ai"; 
import { AiOutlineCompass } from "react-icons/ai"; 
import { RiChat1Line } from "react-icons/ri"; 
import { BiHomeAlt } from "react-icons/bi"; 
import { Inter } from "next/font/google";
import "./globals.css";

import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import NavBar from "@/components/NavBar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Offers Nearby",
  description: "Finds best offers for you in your area.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <main className="bg-gradient-to-b from-purple-200 via-white to-white min-h-screen">
            {/* <main className="bg-gradient-to-b from-slate-500 via-slate-700 to-white min-h-screen"> */}
            <NavBar />

            {/* <SearchBar/> */}
            {children}

            <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-between">
              <Link href="/">
                <BiHomeAlt className="text-purple-600 size-5" />
              </Link>
              <RiChat1Line className="text-gray-400 size-5"/>
              <AiOutlineCompass className="text-gray-400 size-5"/>
              <AiOutlineBell className="text-gray-400 size-5"/>
              <FcMenu className="text-gray-400 size-5"/>
            </footer>
          </main>
        </Theme>
      </body>
    </html>
  );
}
