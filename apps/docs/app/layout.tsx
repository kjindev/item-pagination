import "./globals.css";
import type { Metadata } from "next";
import { roboto } from "../util/constant";
import RecoilRootProvider from "./_components/provider/RecoilRootProvider";
import NavBar from "./_components/global/NavBar";

export const metadata: Metadata = {
  title: "Item-Pagination",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`${roboto.className} text-zinc-900`}>
        <RecoilRootProvider>
          <NavBar />
          {children}
        </RecoilRootProvider>
      </body>
    </html>
  );
}
