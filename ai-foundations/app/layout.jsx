import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Foundations",
  description:
    "This web-site is for Generative AI application developer. It gives them a birds-eye view of areas to cover in their Generative AI Learning journey. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1 className="text-4xl font-extralight text-center justify-center mt-2">
          AI Foundations
        </h1>
        <NavBar></NavBar>
        <div className="flex flex-col px-4 py-4 min-h-screen">
          <header className=""></header>
          <main className="grow py-4">{children}</main>
          <footer className="text-xs border-t py-3">
            Copyright Sreenivas Angara - 2024
          </footer>
        </div>
      </body>
    </html>
  );
}
