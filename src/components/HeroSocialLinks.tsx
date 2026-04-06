import { MailIcon } from "@/components/icons";
import { ManagedImage } from "@/components/ManagedImage";
import type { SocialLink } from "@/types/portfolio";

interface HeroSocialLinksProps {
  socials: SocialLink[];
}

function SocialIcon({ icon }: Pick<SocialLink, "icon">) {
  if (icon === "mail") {
    return <MailIcon className="lucide-icon" />;
  }

  return (
    <ManagedImage
      className="social-brand-icon"
      src={
        icon === "linkedin"
          ? "/linkedin.svg"
          : icon === "dribbble"
            ? "/dribbble.svg"
            : "/uil_behance.svg"
      }
      alt=""
    />
  );
}

export function HeroSocialLinks({ socials }: HeroSocialLinksProps) {
  return (
    <div className="hero-socials" data-reveal>
      {socials.map((social) => (
        <a
          key={social.label}
          className="social-chip"
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
        >
          <SocialIcon icon={social.icon} />
          <span>{social.text}</span>
        </a>
      ))}
    </div>
  );
}
