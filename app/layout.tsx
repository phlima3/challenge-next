import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "challenge-next",
  authors: [
    { name: "Pedro Lima", url: "https://www.linkedin.com/in/pedrolima15/" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterSignOutUrl={"/sign-in"}
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="pt-br">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            forcedTheme="dark"
            storageKey="theme"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
