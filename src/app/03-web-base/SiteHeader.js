import React from 'react';
import Link from 'next/link';
import HeaderLinks from '@/components/HeaderLinks/HeaderLinks';

function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="" className="logo">
        WebBase
      </Link>
      <React.Suspense>
        <HeaderLinks />
      </React.Suspense>
    </header>
  );
}

export default SiteHeader;
