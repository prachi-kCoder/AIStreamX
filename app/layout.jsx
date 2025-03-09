'use client';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../app/globals.css"
import { SessionProvider } from "next-auth/react";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider> {/* ✅ Wrap the entire app in SessionProvider */}
          <ParallaxProvider>
            <main>{children}</main>
          </ParallaxProvider>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
