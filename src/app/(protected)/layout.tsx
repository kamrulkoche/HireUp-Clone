// src/app/(protected)/layout.tsx
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import '../../styles/globals.css';

export const metadata = {
  title: 'Hire Up',
  description: 'Protected content layout',
};

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <main className="container mx-auto px-2 sm:px-4 lg:px-10 pt-2">
          <Header />
          <div className="pt-20">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
