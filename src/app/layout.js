import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MoonBase - A Blockchain Development Project",
  description:
    "It is a Design for a blockchain development. The name is Moonbase.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-secondary`}>
        <Navbar />
        <Tabs />
        {children}
      </body>
    </html>
  );
}
