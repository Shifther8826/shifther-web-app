import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Ascent & Becoming App",
  description: "Ascent & Becoming devotional and prayer app",
  openGraph: {
    title: "Ascent & Becoming App",
    description: "Daily devotionals, weekly decrees, prayer, resources, and encouragement for your journey of ascent and becoming.",
    images: ["/ascent-app-preview.png"],
  },
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
