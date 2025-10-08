import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}