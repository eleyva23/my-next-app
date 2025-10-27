
  import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Button Counter App',
  description: 'A simple Next.js app with a reusable counter component.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 flex flex-col items-center justify-center min-h-screen">
        {children}
      </body>
    </html>
  );
}
