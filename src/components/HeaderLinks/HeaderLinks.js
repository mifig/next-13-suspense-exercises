import React from 'react';
import Link from 'next/link';
import { getNavLinks } from '@/helpers/web-base-helpers';

async function HeaderLinks() {
  const navLinks = await getNavLinks();

  return (
    <nav>
      <ol className="header-nav-links">
        {navLinks.map(
          ({ slug, label, href, type }) => (
            <li key={slug}>
              <Link
                href={href}
                className={`header-nav-link ${type}`}
              >
                {label}
              </Link>
            </li>
          )
        )}
      </ol>
    </nav>
  );
}

export default HeaderLinks;
