import Link from 'next/link';
import type { ReactNode } from 'react';

interface TextLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
  arrow?: boolean;
  className?: string;
}

/**
 * Editorial text link: underline grows and the arrow nudges on hover
 * (styles live in globals.css under .text-link).
 */
export default function TextLink({
  href,
  children,
  external = false,
  arrow = true,
  className = '',
}: TextLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="arrow" aria-hidden="true">
          →
        </span>
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-link ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`text-link ${className}`}>
      {content}
    </Link>
  );
}
