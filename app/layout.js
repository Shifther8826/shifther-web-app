import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Ascent & Becoming App",
  description: "Ascent & Becoming devotional and prayer app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
