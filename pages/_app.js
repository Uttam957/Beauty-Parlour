// pages/_app.js
// Custom App layout wrapping every page with Announcement Bar, Sticky Header, Footer, and Floating Action Buttons

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import siteConfig from '../lib/site';

// Import all application stylesheets (Pages Router global CSS requirement)
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/home.css';
import '../styles/about.css';
import '../styles/services.css';
import '../styles/service-page.css';
import '../styles/academy.css';
import '../styles/gallery.css';
import '../styles/contact.css';
import '../styles/not-found.css';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [router.asPath]);

  // Handle sticky header elevation on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const currentYear = new Date().getFullYear();
  const isServicesActive = router.pathname.startsWith('/services');

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href={siteConfig.logo} />
        {/* Preconnect and load Google Fonts: Playfair Display & Poppins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="announcement-bar">
        <span>
          Bridal bookings open for the wedding season. Call or WhatsApp{' '}
          <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>{siteConfig.phone}</a> /{' '}
          <a href={`tel:${siteConfig.phone2.replace(/\s+/g, '')}`}>{siteConfig.phone2}</a> to reserve your date.
        </span>
      </div>

      {/* 2. STICKY HEADER */}
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          {/* Logo Area (Logo Only) */}
          <Link href="/" className="site-logo" aria-label="RRN Beauty Parlour Home">
            <img src={siteConfig.logo} alt={siteConfig.name} className="site-logo-img" />
          </Link>

          {/* Right Group: Desktop Nav + Book Appointment */}
          <div className="header-nav-group">
            <nav className="desktop-nav" aria-label="Main Navigation">
              <Link href="/" className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
              <Link href="/about" className={`nav-link ${router.pathname === '/about' ? 'active' : ''}`}>
                About Us
              </Link>

              {/* Services Dropdown */}
              <div className="nav-dropdown-wrapper">
                <button
                  type="button"
                  className={`nav-dropdown-trigger ${isServicesActive ? 'active' : ''}`}
                  aria-haspopup="true"
                >
                  <span>Services</span>
                  <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div className="dropdown-menu">
                  <Link
                    href="/services"
                    className={`dropdown-item ${router.pathname === '/services' ? 'active' : ''}`}
                  >
                    All Services Overview
                  </Link>
                  <Link
                    href="/services/makeup"
                    className={`dropdown-item ${router.pathname === '/services/makeup' ? 'active' : ''}`}
                  >
                    Makeup (Bridal & Party)
                  </Link>
                  <Link
                    href="/services/facial"
                    className={`dropdown-item ${router.pathname === '/services/facial' ? 'active' : ''}`}
                  >
                    Facial & Skin Care
                  </Link>
                  <Link
                    href="/services/hair"
                    className={`dropdown-item ${router.pathname === '/services/hair' ? 'active' : ''}`}
                  >
                    Hair Salon & Styling
                  </Link>
                  <Link
                    href="/services/hair-removal"
                    className={`dropdown-item ${router.pathname === '/services/hair-removal' ? 'active' : ''}`}
                  >
                    Hair Removal (Waxing & Threading)
                  </Link>
                  <Link
                    href="/services/massage"
                    className={`dropdown-item ${router.pathname === '/services/massage' ? 'active' : ''}`}
                  >
                    Relaxing Massage
                  </Link>
                  <Link
                    href="/services/mani-pedi"
                    className={`dropdown-item ${router.pathname === '/services/mani-pedi' ? 'active' : ''}`}
                  >
                    Mani-Pedi & Nails
                  </Link>
                </div>
              </div>

              <Link href="/academy" className={`nav-link ${router.pathname === '/academy' ? 'active' : ''}`}>
                Academy
              </Link>
              <Link href="/gallery" className={`nav-link ${router.pathname === '/gallery' ? 'active' : ''}`}>
                Gallery
              </Link>
              <Link href="/contact" className={`nav-link ${router.pathname === '/contact' ? 'active' : ''}`}>
                Contact Us
              </Link>
            </nav>

            {/* Header Action Button */}
            <div className="header-action-btn">
              <Link href="/contact" className="btn btn-primary">
                Book Appointment
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className={`hamburger-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-drawer-backdrop ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <aside className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <ul className="mobile-nav-list">
          <li>
            <Link
              href="/"
              className={`mobile-nav-link ${router.pathname === '/' ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`mobile-nav-link ${router.pathname === '/about' ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="mobile-submenu-toggle"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              aria-expanded={isMobileServicesOpen}
            >
              <span>Services</span>
              <svg
                style={{
                  width: '18px',
                  height: '18px',
                  transform: isMobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s',
                }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {isMobileServicesOpen && (
              <ul className="mobile-submenu">
                <li>
                  <Link
                    href="/services"
                    className="mobile-submenu-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/makeup"
                    className="mobile-submenu-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Makeup
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/facial"
                    className="mobile-submenu-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Facial & Skin Care
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/hair"
                    className="mobile-submenu-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Hair Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/hair-removal"
                    className="mobile-submenu-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Hair Removal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/massage"
                    className="mobile-submenu-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Massage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/mani-pedi"
                    className="mobile-submenu-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Mani-Pedi
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/academy"
              className={`mobile-nav-link ${router.pathname === '/academy' ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Academy
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className={`mobile-nav-link ${router.pathname === '/gallery' ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`mobile-nav-link ${router.pathname === '/contact' ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="mobile-drawer-footer">
          <Link
            href="/contact"
            className="btn btn-primary btn-block"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      </aside>

      {/* MAIN CONTENT WRAPPER */}
      <Component {...pageProps} />

      {/* 3. SITE FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1: About */}
            <div className="footer-col">
              <div className="footer-logo-wrap">
                <img src={siteConfig.logo} alt={siteConfig.name} className="footer-logo-img" />
                <div>
                  <h3 className="footer-col-title" style={{ paddingBottom: 0, marginBottom: '4px' }}>
                    {siteConfig.rawName}
                  </h3>
                  <span style={{ color: 'var(--gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                    By {siteConfig.ownerName}
                  </span>
                </div>
              </div>
              <p className="footer-about-text">
                {siteConfig.rawName} is a ladies beauty parlour in {siteConfig.city}, offering bridal makeup, hair, skin
                care and beauty training with hygienic tools and trained professionals led by {siteConfig.ownerName}.
              </p>
              <div className="footer-socials">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Follow us on Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Follow us on Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Follow us on YouTube"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h3 className="footer-col-title">Quick Links</h3>
              <ul className="footer-links-list">
                <li>
                  <Link href="/" className="footer-link">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="footer-link">About Us</Link>
                </li>
                <li>
                  <Link href="/services" className="footer-link">Services</Link>
                </li>
                <li>
                  <Link href="/academy" className="footer-link">Academy</Link>
                </li>
                <li>
                  <Link href="/gallery" className="footer-link">Gallery</Link>
                </li>
                <li>
                  <Link href="/contact" className="footer-link">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="footer-col">
              <h3 className="footer-col-title">Our Services</h3>
              <ul className="footer-links-list">
                <li>
                  <Link href="/services/makeup" className="footer-link">Bridal and Party Makeup</Link>
                </li>
                <li>
                  <Link href="/services/facial" className="footer-link">Facial and Skin Care</Link>
                </li>
                <li>
                  <Link href="/services/hair" className="footer-link">Hair Services</Link>
                </li>
                <li>
                  <Link href="/services/hair-removal" className="footer-link">Waxing and Threading</Link>
                </li>
                <li>
                  <Link href="/services/massage" className="footer-link">Massage</Link>
                </li>
                <li>
                  <Link href="/services/mani-pedi" className="footer-link">Manicure and Pedicure</Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Hours */}
            <div className="footer-col">
              <h3 className="footer-col-title">Visit & Connect</h3>
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{siteConfig.fullAddress}, {siteConfig.city}</span>
              </div>
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>
                  <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>{siteConfig.phone}</a>
                  <br />
                  <a href={`tel:${siteConfig.phone2.replace(/\s+/g, '')}`}>{siteConfig.phone2}</a>
                </span>
              </div>
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>{siteConfig.openingHours} <br /><small style={{ color: 'var(--gold)' }}>({siteConfig.bridalBookingNote})</small></span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom-bar">
            <span>Copyright {currentYear} {siteConfig.rawName}. All rights reserved.</span>
            <div className="footer-legal-links">
              <Link href="#">Privacy Policy</Link>
              <span>·</span>
              <Link href="#">Terms</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* 4. FLOATING ACTION BUTTONS */}
      <div className="floating-actions" aria-label="Quick contact buttons">
        <a
          href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>

        <a
          href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
          className="floating-btn call"
          aria-label="Call Now"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </a>
      </div>
    </>
  );
}
