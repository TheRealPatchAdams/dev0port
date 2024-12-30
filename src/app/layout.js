import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer"; // Import the Footer component
import Head from "next/head"; // Import Next.js Head for <head> modifications

export const metadata = {
  title: "Div It Like It’s Hot",
  description: "A clean, interactive portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Google Fonts for Olde English */}
        <link
          href="https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        <Header />
        <main className="flex-grow">{children}</main> {/* Pushes footer to bottom */}
        <Footer /> {/* Global footer */}
      </body>
    </html>
  );
}
