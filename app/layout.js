import "./globals.css";

import "@css/animate.css";
import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/magnific-popup.css";
import "@css/meanmenu.css";
import "@css/nice-select.css";
import "@css/swiper-bundle.min.css";
import "@css/main.css";

import Preloader from "@/components/Preloader";
import { DM_Sans, Montserrat } from "next/font/google";

const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const dm_sansFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Jeevijay Technology - Empowering Digital Solutions",
  description:
    "Official website of Jeevijay Technology – delivering innovative IT solutions, real-time applications, and secure digital services tailored for businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserratFont.variable} ${dm_sansFont.variable}`}
    >
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
