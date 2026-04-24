import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "SHIFTHer",
  description: "SHIFTHer web app",
};

export default function RootLayout({ children }) {
  return (
     <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
