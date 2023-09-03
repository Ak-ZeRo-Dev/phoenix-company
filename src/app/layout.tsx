import "~/global/global.css";
import "~/global/global.scss";
import "~/global/normalize.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Navbar from "@/components/navbar/Navbar";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phoenix Company",
  description: "شركة حديثة في مجال الزراعة عموما و الهندسة الزراعية خاصة",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
