
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOVA Creative Studio | Digital Experiences That Matter",
  description:
    "NOVA is an independent creative agency focused on UI/UX design, web development, brand identity and digital strategy.",
  keywords: [
    "Creative Agency",
    "UI UX Design",
    "Web Development",
    "Branding",
    "Digital Strategy",
  ],
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
