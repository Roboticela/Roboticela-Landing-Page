import Navbar from './Navbar';
import Footer from './Footer';

type SitePageLayoutProps = {
  children: React.ReactNode;
};

export default function SitePageLayout({ children }: SitePageLayoutProps) {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-full">
      <Navbar />
      <main className="pb-24 px-4">{children}</main>
      <Footer />
    </div>
  );
}
