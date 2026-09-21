import { cn } from "@/lib/utils";
import { getRuntimeBranding } from "@/lib/branding";

interface BrandIconProps {
  className?: string;
  alt?: string;
}

export function BrandIcon({ className, alt }: BrandIconProps) {
  const branding = getRuntimeBranding();

  if (
    branding.logoUrl &&
    branding.logoUrl !== "/striverai-icon.svg" &&
    branding.logoUrl !== "/goclaw-icon.svg"
  ) {
    return (
      <img
        src={branding.logoUrl}
        alt={alt ?? branding.appName}
        className={cn("dark:brightness-0 dark:invert transition-all", className)}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-black dark:text-white transition-colors duration-200 shrink-0", className)}
      aria-label={alt ?? branding.appName}
    >
      <path d="M 185.6 83.2 L 236.8 83.2 L 147.2 428.8 L 96.0 428.8 Z" />
      <path d="M 288.0 83.2 L 339.2 83.2 L 249.6 428.8 L 198.4 428.8 Z" />
      <path d="M 390.4 83.2 L 416.0 83.2 L 326.4 428.8 L 300.8 428.8 Z" />
    </svg>
  );
}
