import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: {
    default: "Sorayia",
    template: "%s | Sorayia",
  },
  description:
    "Elevate your brand with Sorayia's virtual influencers. Create 3D avatars with voice recognition and NLP. Engage clients uniquely and boost product promotions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <>{children}</>
      </body>
    </html>
  );
}
