import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Props = {
  children: React.ReactNode;
  /** Home page style: yellow header, full-bleed sections (page owns its layout). */
  showHero?: boolean;
};

const Layout = ({ children, showHero = false }: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header onHero={showHero} />
      {showHero ? (
        <main className="flex-1">{children}</main>
      ) : (
        <main className="container mx-auto flex-1 py-8 md:py-10">
          {children}
        </main>
      )}
      <Footer above={showHero ? "bg-brand-mint" : "bg-white"} />
    </div>
  );
};

export default Layout;
