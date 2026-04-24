import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "SHIFTHer App",
  description: "SHIFTHer devotional and prayer app",
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
