// pages/services/index.js
// Services Overview Page: Directory of all 6 beauty categories

import Head from 'next/head';
import Link from 'next/link';
import siteConfig from '../../lib/site';

const serviceCategories = [
  {
    title: 'Makeup',
    desc: 'Bridal, engagement, party, natural and HD makeup for every occasion.',
    link: '/services/makeup',
  },
  {
    title: 'Facial and skin care',
    desc: 'Cleanups, glow and anti-tan facials, and treatments for different skin types.',
    link: '/services/facial',
  },
  {
    title: 'Hair',
    desc: 'Cuts, colour, smoothing, spa and styling for all hair lengths.',
    link: '/services/hair',
  },
  {
    title: 'Hair removal',
    desc: 'Waxing, threading and facial hair removal with skin-friendly products.',
    link: '/services/hair-removal',
  },
  {
    title: 'Massage',
    desc: 'Head, back, foot and full body massages for relaxation and relief.',
    link: '/services/massage',
  },
  {
    title: 'Mani-pedi',
    desc: 'Manicure, pedicure and nail care that leave hands and feet soft and neat.',
    link: '/services/mani-pedi',
  },
];

const whyBookPoints = [
  {
    title: 'Trained Beauticians',
    desc: 'Experienced specialists trained in the latest salon and bridal techniques.',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
    ),
  },
  {
    title: 'Hygienic Tools',
    desc: 'Medical-grade sterilisation and single-use disposables for every appointment.',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
  },
  {
    title: 'Transparent Pricing',
    desc: 'Clear rate cards with upfront quotes and zero hidden charges.',
    icon: (
      <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>{`Beauty Services in ${siteConfig.city} | ${siteConfig.rawName}`}</title>
        <meta
          name="description"
          content={`Explore makeup, facials, hair, waxing, massage and mani-pedi at ${siteConfig.rawName}, ${siteConfig.city}. Trained beauticians, clean tools and clear pricing.`}
        />
        <link rel="canonical" href={`${siteConfig.siteUrl}/services`} />
        <meta property="og:title" content={`Beauty Services in ${siteConfig.city} | ${siteConfig.rawName}`} />
        <meta
          property="og:description"
          content={`Explore makeup, facials, hair, waxing, massage and mani-pedi at ${siteConfig.rawName}, ${siteConfig.city}.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteConfig.siteUrl}/services`} />
      </Head>

      {/* SECTION 1: PAGE BANNER */}
      <div className="page-banner">
        {/* IMAGE: Page banner background, size 1920 x 500 px */}
        <div className="page-banner-bg" />
        <div className="container page-banner-content">
          <div className="page-breadcrumb">
            <Link href="/">Home</Link> / <span>Services</span>
          </div>
          <h1>Our Beauty Services in {siteConfig.city}</h1>
          <p>Bridal makeup, hair, skin care and more, all handled by trained professionals.</p>
        </div>
      </div>

      {/* SECTION 2: INTRO (EDITORIAL LEAD TEXT STRIP) */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="services-intro-box reveal reveal-up">
            Whether you are preparing for a wedding, attending a party or simply taking time for yourself,{' '}
            {siteConfig.rawName} has a service for you. Our team of experienced beauticians works by appointment so you
            are never rushed. Choose a category below to see what we offer and the prices.
          </div>

          {/* SECTION 3: SERVICE CATEGORIES (VISUAL SERVICE CARDS - THE ONE CARD GRID ON THIS PAGE) */}
          <div className="overview-grid reveal reveal-stagger">
            {serviceCategories.map((cat, idx) => (
              <div key={idx} className="overview-card">
                <div className="overview-card-media">
                  {/* IMAGE: One image per category card */}
                  <div className="image-placeholder">
                    <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    <span className="placeholder-label">Add service image</span>
                    <span className="placeholder-dim">600 x 450 px</span>
                  </div>
                </div>
                <div className="overview-card-content">
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                  <div>
                    <Link href={cat.link} className="btn btn-secondary btn-block">
                      View Services
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SECTION 4: WHY BOOK WITH US (ICON ROW WITH THIN DIVIDERS) */}
          <div className="section-header reveal reveal-up" style={{ marginBottom: '32px' }}>
            <span className="section-eyebrow">The Salon Standard</span>
            <h2 className="section-title">Why Book With Us</h2>
            <div className="section-divider" />
          </div>

          <div className="icon-feature-row cols-3 reveal reveal-up">
            {whyBookPoints.map((item, idx) => (
              <div key={idx} className="icon-feature-item">
                <div className="icon-circle">{item.icon}</div>
                <h4>{item.title}</h4>
                <p className="muted" style={{ fontSize: '0.925rem', marginBottom: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CALL TO ACTION (FULL-WIDTH BANNER STRIP) */}
      <section className="cta-band reveal reveal-up">
        <div className="container">
          <div className="cta-band-content">
            <h2>Not sure which service is right for you?</h2>
            <p>Tell us about your skin, hair and occasion, and we will suggest the best option.</p>
            <div className="cta-band-buttons">
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="btn btn-light">
                Call Now
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
