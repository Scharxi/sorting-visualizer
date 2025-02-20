import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sortieralgorithmen Visualisierung",
  description: "Eine interaktive Visualisierung von Sortieralgorithmen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <nav className="border-b">
              <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-lg font-semibold">
                  Sortieralgorithmen
                </h1>
                <ThemeToggle />
              </div>
            </nav>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
