import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger aria-label="Open menu" className="rounded-full p-2 hover:bg-black/5">
        <Menu className="text-primary" />
      </SheetTrigger>
      <SheetContent className="space-y-3 rounded-l-3xl">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2 min-w-0 pr-6">
              <CircleUserRound className="text-primary shrink-0" />
              <span className="truncate text-base">{user?.email}</span>
            </span>
          ) : (
            <span className="text-xl font-extrabold">Welcome to EatGo!</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              onClick={() => loginWithRedirect()}
              size="lg"
              className="flex-1"
            >
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
