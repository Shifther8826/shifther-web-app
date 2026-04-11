export const metadata = {
  title: "SHIFTHer",
  description: "SHIFTHer web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
