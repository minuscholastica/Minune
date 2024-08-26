import "@/app/globals.css";
import "@/app/tokyo-night-dark.css";
import "@/app/callout.css";
import { Metadata } from "next";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "MinunÊ",
  description: "Untimely Meditations at MinunÊ",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

// In layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ClientLayout>
          <main className="max-w-none">{children}</main>
        </ClientLayout>
      </body>
    </html>
  );
}
