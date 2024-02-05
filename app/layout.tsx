import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { cn } from "@/lib/utils";

const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NyayHelp - Legal Help for All",
  description: "NyayHelp is a platform that provides legal education to all",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(inter.className, "relative flex flex-col min-h-screen")}
      >
        <Header />
        <main className="md:mt-[10vh] w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
