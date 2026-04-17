"use client";

import { SessionProvider } from "next-auth/react";
import Header from "../components/Header";
// import Footer from "../components/Footer";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Header />
      {children}
      {/* <Footer /> */}
    </SessionProvider>
  );
}
