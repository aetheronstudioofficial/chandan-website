import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Jagdishpur Fitness Club | Transform Your Body. Transform Your Life.",
  description: "Experience premium fitness at Jagdishpur Fitness Club. Certified trainers, state-of-the-art strength and cardio equipment, yoga, boxing, and personalized diet plans to achieve your dream physique.",
  keywords: [
    "Jagdishpur Fitness Club",
    "JFC",
    "Gym in Jagdishpur",
    "Fitness Club Bihar",
    "Best gym Jagdishpur",
    "Personal Training",
    "Cardio",
    "Strength Training",
    "Yoga Jagdishpur",
    "CrossFit"
  ],
  authors: [{ name: "Jagdishpur Fitness Club" }],
  openGraph: {
    title: "Jagdishpur Fitness Club | Transform Your Body. Transform Your Life.",
    description: "Experience premium fitness at Jagdishpur Fitness Club. Certified trainers, state-of-the-art strength and cardio equipment.",
    url: "https://jagdishpurfitnessclub.com",
    siteName: "Jagdishpur Fitness Club",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagdishpur Fitness Club | Transform Your Body. Transform Your Life.",
    description: "Premium fitness center in Jagdishpur, Bihar.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${poppins.variable} dark scroll-smooth h-full antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full bg-[#0B0B0B] text-white font-body selection:bg-[#E63946] selection:text-white">
        {children}
      </body>
    </html>
  );
}
