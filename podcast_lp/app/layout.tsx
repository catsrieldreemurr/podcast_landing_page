import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubicFont = Rubik({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Landingpage Page",
  description: "school ass",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={rubicFont.className}
      >
        {children}
      </body>
    </html>
  );
}
