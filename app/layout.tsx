import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond, Amiri, Tangerine } from "next/font/google";
import { RepositoryProvider } from "@/lib/data-access/RepositoryProvider";
import { GuestAuthProvider } from "@/lib/auth/GuestAuthProvider";
import { ProgressProvider } from "@/lib/progression/ProgressContext";
import "./globals.css";

const headingSerif = Cormorant_Garamond({
  variable: "--font-heading-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const bodySerif = EB_Garamond({
  variable: "--font-body-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const arabicNaskh = Amiri({
  variable: "--font-arabic-naskh",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const cursiveDisplay = Tangerine({
  variable: "--font-cursive",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Le Palais du Darija",
  description:
    "Une aventure narrative immersive pour apprendre le darija marocain — explore un palais oublié et révèle son secret.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${headingSerif.variable} ${bodySerif.variable} ${arabicNaskh.variable} ${cursiveDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivoire text-nuit">
        <RepositoryProvider>
          <GuestAuthProvider>
            <ProgressProvider>{children}</ProgressProvider>
          </GuestAuthProvider>
        </RepositoryProvider>
      </body>
    </html>
  );
}
