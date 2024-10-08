import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import styles from "./layout/layout.module.css";

const baiJamjuree = Bai_Jamjuree({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai"],
});

export const metadata: Metadata = {
  title: "Infinite Technical Solutions",
  description:
    "We provide the most affordable and reliable Dental and Medical Equipment Repair and Maintenance of all brands and health care products. Every day we do our best to be your partner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={baiJamjuree.className}>
        <Header />
        <div className={styles.container}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
