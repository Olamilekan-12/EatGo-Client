import { cn } from "@/lib/utils";

type Props = {
  /** Set the fill with a text colour class, e.g. "text-white". */
  className?: string;
  flip?: boolean;
};

/**
 * Curved section divider. It fills the area BELOW the curve with the given
 * colour, so place it at the bottom of a section with the next section's
 * colour, or at the top of a section with that section's own colour.
 */
const Wave = ({ className, flip }: Props) => (
  <svg
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    aria-hidden="true"
    className={cn(
      "block h-10 w-full fill-current sm:h-16 lg:h-24",
      flip && "-scale-x-100",
      className
    )}
  >
    <path d="M0,70 C220,130 430,10 720,52 C1010,94 1210,130 1440,36 L1440,121 L0,121 Z" />
  </svg>
);

export default Wave;
