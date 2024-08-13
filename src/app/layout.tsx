import Footer from "@/components/footer";
import "./globals.css";
import Navigate from "@/components/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigate />
        {children}
        <Footer />
      </body>
    </html>
  );
}
