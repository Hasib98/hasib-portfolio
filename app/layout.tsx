import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "S. M. Hasib — Software Engineer & Mobile Developer",
  description: "Portfolio of S. M. Hasib — React Native developer building cross-platform apps with modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
