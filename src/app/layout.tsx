import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Moch Yunus - Full Stack Developer",
  description: "Portfolio website of Moch Yunus, a passionate Full Stack Developer specializing in modern web technologies like React, Next.js, Laravel, and more.",
  keywords: ["Moch Yunus", "Full Stack Developer", "Web Developer", "React", "Next.js", "Laravel", "Portfolio"],
  authors: [{ name: "Moch Yunus", url: "https://github.com/mchyns" }],
  creator: "Moch Yunus",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mochyunus.dev",
    title: "Moch Yunus - Full Stack Developer",
    description: "Portfolio website of Moch Yunus, a passionate Full Stack Developer specializing in modern web technologies.",
    siteName: "Moch Yunus Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moch Yunus - Full Stack Developer",
    description: "Portfolio website of Moch Yunus, a passionate Full Stack Developer specializing in modern web technologies.",
    creator: "@mchynss",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
