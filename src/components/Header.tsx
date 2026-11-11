import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

type Props = {
  /** Sits on the yellow home hero instead of a white bar. */
  onHero?: boolean;
};

const Header = ({ onHero = false }: Props) => {
  return (
    <header
      className={cn(
        "z-40 py-4",
        onHero
          ? "bg-brand-yellow"
          : "sticky top-0 border-b bg-white/90 backdrop-blur"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
