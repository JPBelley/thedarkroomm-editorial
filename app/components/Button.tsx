import Link from "next/link";

type Variant = "primary" | "outline" | "ghost";

type Props = {
  variant?: Variant;
  href?: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

const base = "text-ui-button uppercase tracking-wider px-6 py-4 text-center";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-on-primary hover:opacity-80 transition-opacity duration-300",
  outline:
    "border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-all duration-300",
  ghost:
    "border border-primary text-primary hover:bg-primary hover:text-on-primary transition-all duration-300",
};

export default function Button({
  variant = "primary",
  href,
  className = "",
  children,
  target,
  rel,
  type = "button",
  onClick,
  disabled,
}: Props) {
  const cls = [base, variants[variant], className].filter(Boolean).join(" ");

  if (href) {
    const isExternal = /^https?:/.test(href);
    const isMailto = href.startsWith("mailto:");
    const isAnchor = href.startsWith("#");

    if (isExternal || isMailto || isAnchor) {
      return (
        <a
          href={href}
          className={cls}
          target={isExternal ? (target ?? "_blank") : target}
          rel={isExternal ? (rel ?? "noopener noreferrer") : rel}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={cls} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
