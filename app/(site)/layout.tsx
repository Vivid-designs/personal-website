import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { poppins } from "../fonts";
import SmoothScrollingWrapper from "@/components/smooth-scrolling-wrapper";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: { default: "LarioSpence.co.za", template: `%s - LarioSpence.co.za` },

  description:
    "Explore the intersection of technology and imagination as we embark on a journey to transform concepts into powerful, user-centric experiences. Let's build the future together – one line of code at a time.",
  keywords: ["Lario", "Spence", "LarioSpence", "spence.co.za", "personal", "website"],
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {},
  metadataBase: new URL("https://spence.co.za"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} !bg-background`}>
        <ThemeProvider>
          <Navbar />
          <SmoothScrollingWrapper>
            <div vaul-drawer-wrapper="">{children}</div>
          </SmoothScrollingWrapper>
          <Footer />
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
