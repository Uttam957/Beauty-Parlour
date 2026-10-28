// pages/404.js
// Custom 404 Page Not Found

import Head from 'next/head';
import Link from 'next/link';
import siteConfig from '../lib/site';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>{`Page Not Found | ${siteConfig.rawName}`}</title>
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="not-found-container">
        <div className="not-found-card">
          <div className="not-found-num">404</div>
          <h1>Page Not Found</h1>
          <p>
            The page or beauty service you are looking for might have been removed, had its name changed, or is
            temporarily unavailable.
          </p>

          <div>
            <Link href="/" className="btn btn-primary">
              Return to Home
            </Link>
          </div>

          <div className="not-found-services-title">Explore Our Top Services</div>
          <div className="not-found-chips">
            <Link href="/services/makeup" className="not-found-chip">
              Bridal & Party Makeup
            </Link>
            <Link href="/services/facial" className="not-found-chip">
              Facial & Skin Care
            </Link>
            <Link href="/services/hair" className="not-found-chip">
              Hair Salon & Spa
            </Link>
            <Link href="/services/hair-removal" className="not-found-chip">
              Waxing & Threading
            </Link>
            <Link href="/services/massage" className="not-found-chip">
              Relaxing Massage
            </Link>
            <Link href="/services/mani-pedi" className="not-found-chip">
              Mani-Pedi & Nails
            </Link>
            <Link href="/academy" className="not-found-chip">
              Beauty Academy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
