import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";

export const metadata ={
  title: 'InnovNest',
  description: 'A Next.js 14 App'
};

const inter = Inter({ subsets: ['latin']});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
            <Topbar />

            <main className="flex flex-row">
                <LeftSidebar />
                    <section className="main-container">
                      <div className="w-full max-w-4xl">
                        {children}
                      </div>
                    </section>
            </main>

            <Bottombar />
          </body>
        </html>
      </ClerkProvider>
  );
}
