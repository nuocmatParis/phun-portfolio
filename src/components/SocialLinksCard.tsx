import {
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
  TelegramIcon,
} from "@/components/icons";

const socialLinks = [
  {
    label: "email",
    href: "mailto:raexera@gmail.com",
    Icon: EmailIcon,
  },
  {
    label: "linkedin",
    href: "https://linkedin.com/in/rayhankafipratama",
    Icon: LinkedinIcon,
  },
  {
    label: "github",
    href: "https://github.com/raexera",
    Icon: GithubIcon,
  },
  {
    label: "telegram",
    href: "https://t.me/raexera",
    Icon: TelegramIcon,
  },
] as const;

export function SocialLinksCard() {
  return (
    <div className="surface-card flex items-center justify-center p-6 sm:p-8 md:col-span-1">
      <div className="grid w-full grid-cols-4 gap-4 md:grid-cols-2">
        {socialLinks.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} link`}
            className="group flex aspect-square items-center justify-center rounded-2xl border border-border bg-background transition-colors duration-150 hover:border-border/80 hover:bg-muted/50"
          >
            <Icon className="size-6 text-muted-foreground transition-colors duration-150 group-hover:text-foreground md:size-8" />
          </a>
        ))}
      </div>
    </div>
  );
}
