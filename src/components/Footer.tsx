import Logo from "./Logo";
import Wave from "./Wave";

type Props = {
  /** Background colour of whatever sits directly above the footer curve. */
  above?: string;
};

const Footer = ({ above = "bg-white" }: Props) => {
  return (
    <footer>
      {/* Curve into the dark footer; the white above is the page background. */}
      <div className={above}>
        <Wave className="text-brand-ink" />
      </div>
      <div className="-mt-px bg-brand-ink py-10 text-white">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Logo light />
            <span className="text-sm text-white/60">
              Nigerian meals, delivered to your door.
            </span>
          </div>
          <div className="flex gap-6 text-sm font-semibold text-white/80">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
