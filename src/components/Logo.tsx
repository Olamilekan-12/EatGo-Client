import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** Light variant for dark backgrounds. */
  light?: boolean;
};

const Logo = ({ className, light }: Props) => (
  <Link
    to="/"
    className={cn(
      "inline-flex items-start text-3xl font-extrabold tracking-tight",
      light ? "text-white" : "text-primary",
      className
    )}
  >
    EatGo
    <MapPin
      size={16}
      strokeWidth={3}
      className={cn("mt-1 ml-0.5", light ? "text-brand-yellow" : "text-primary")}
    />
  </Link>
);

export default Logo;
