import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Netflix Clone",
  description: "Netflix Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className}  antialiased`}
        >
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
