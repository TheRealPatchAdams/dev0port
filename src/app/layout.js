import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Portfolio Redesign",
  description: "A clean, interactive portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Header />
        {children}
      </body>
    </html>
  );
}
