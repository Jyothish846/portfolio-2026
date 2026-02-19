import { ThemeProvider } from "next-themes";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400..900&display=swap"
          rel="stylesheet"
        />
      </head>
<body className="antialiased">
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <div className="maison-law-overlay" />
    
    <div className="relative z-10">
      {children}
    </div>
  </ThemeProvider>
</body>
    </html>
  );
}