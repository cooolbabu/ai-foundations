import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Foundations",
  description:
    "This web-site is for Generative AI application developer. It gives them a birds-eye view of areas to cover in their Generative AI Learning journey. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
