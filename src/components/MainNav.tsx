import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";
import { CircleUserRound } from "lucide-react";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex items-center gap-4">
      {isAuthenticated ? (
        <>
          <Link
            to="/order-status"
            className="rounded-full px-3 py-2 text-sm font-semibold hover:bg-black/5"
          >
            Order Status
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button onClick={async () => await loginWithRedirect()}>
          <CircleUserRound size={18} className="mr-2" />
          Log in
        </Button>
      )}
    </span>
  );
};

export default MainNav;
