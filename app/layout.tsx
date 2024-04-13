import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Niko IT Academy",
  description: "Онлайн курси для розвитку твоєї кар’єри в IT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={onest.className}>{children}</body>
    </html>
  );
}
