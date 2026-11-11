import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { Receipt, Store, UserRound } from "lucide-react";

const linkClass =
  "flex items-center gap-3 rounded-2xl px-4 py-3 font-semibold text-brand-ink hover:bg-brand-mint";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link to="/order-status" className={linkClass}>
        <Receipt size={20} className="text-primary" />
        Order Status
      </Link>
      <Link to="/manage-restaurant" className={linkClass}>
        <Store size={20} className="text-primary" />
        My Restaurant
      </Link>
      <Link to="/user-profile" className={linkClass}>
        <UserRound size={20} className="text-primary" />
        User Profile
      </Link>
      <Button onClick={() => logout()} size="lg" className="mt-2">
        Log out
      </Button>
    </>
  );
};

export default MobileNavLinks;
