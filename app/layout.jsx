'use client';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../app/globals.css"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <ParallaxProvider>
        <main>{children}</main>
        </ParallaxProvider>
        <Footer />
      </body>
    </html>
  );
}
