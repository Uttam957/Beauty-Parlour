// pages/index.js
// Home Page: Complete Ladies Beauty Parlour Homepage

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import siteConfig from '../lib/site';

// Data Arrays for Home Page
const featuresList = [
  {
    title: 'Safety and hygiene',
    desc: 'Tools are sterilised after every client, and disposable items are used for waxing and facials.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Experienced beauticians',
    desc: 'Our team is trained in bridal, party and everyday beauty services.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Personal consultation',
    desc: 'We suggest looks and treatments that suit your skin type, face shape and outfit.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    title: 'Quality products',
    desc: 'We use trusted professional brands, patch-tested where needed.',
    icon: (
      <svg viewBox="0 0 24 24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Fair, clear pricing',
    desc: 'Price list is shared before the service starts, with no surprise charges.',
    icon: (
      <svg viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Comfortable space',
    desc: 'Private, clean and calm, for ladies only.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

const servicePreviews = [
  {
    title: 'Makeup',
    desc: 'Bridal, engagement, party and everyday looks, designed for your outfit and skin tone.',
    link: '/services/makeup',
    tag: 'Bridal & Party',
  },
  {
    title: 'Facial and skin care',
    desc: 'Cleanups, glow facials and advanced treatments to refresh dull, tired skin.',
    link: '/services/facial',
    tag: 'Skin Glow',
  },
  {
    title: 'Hair',
    desc: 'Haircuts, colour, spa, smoothing and styling for every occasion.',
    link: '/services/hair',
    tag: 'Styling & Spa',
  },
  {
    title: 'Hair removal',
    desc: 'Gentle waxing and precise threading for clean, smooth skin.',
    link: '/services/hair-removal',
    tag: 'Smooth Skin',
  },
  {
    title: 'Massage',
    desc: 'Relaxing head, body and foot massages that ease stress and tension.',
    link: '/services/massage',
    tag: 'Relaxation',
  },
  {
    title: 'Mani-pedi',
    desc: 'Manicure and pedicure care for soft hands and neat, healthy nails.',
    link: '/services/mani-pedi',
    tag: 'Nail Care',
  },
];

const popularPackages = [
  {
    name: 'Glow Starter',
    inclusions: ['Cleanup', 'Eyebrow threading', 'Upper lip threading'],
    price: 'Rs. 799',
    popular: false,
  },
  {
    name: 'Party Ready',
    inclusions: ['Party makeup', 'Hairstyle', 'Draping help'],
    price: 'Rs. 3,499',
    popular: false,
  },
  {
    name: 'Pre-Bridal Care',
    inclusions: ['Facial', 'Waxing', 'Mani-pedi', 'Hair spa (over 2 to 3 visits)'],
    price: 'Rs. 9,999',
    popular: true,
  },
  {
    name: 'Complete Bridal',
    inclusions: ['HD bridal makeup', 'Hairstyle', 'Draping', 'Trial look'],
    price: 'Rs. 24,999',
    popular: false,
  },
];

const bookingSteps = [
  {
    num: '1',
    title: 'Choose your service',
    text: 'Call, WhatsApp or fill the form and tell us what you need.',
  },
  {
    num: '2',
    title: 'Pick a date and time',
    text: 'We confirm your slot, including early morning slots for brides.',
  },
  {
    num: '3',
    title: 'Relax and enjoy',
    text: 'Arrive at the parlour, or book our home-visit service for bridal makeup.',
  },
];

const reviewsList = [
  {
    name: 'Priya Sharma',
    service: 'Bridal Makeup',
    text: 'Booked bridal makeup for my wedding. The look stayed fresh all day, and the team was calm and patient.',
  },
  {
    name: 'Ananya Mehra',
    service: 'Facial & Hair Spa',
    text: 'The facial left my skin glowing for days! Absolutely spotless hygiene and polite staff. Will definitely visit again.',
  },
  {
    name: 'Sneha Rao',
    service: 'Party Makeup & Draping',
    text: 'Got my makeup and saree draping done for a family reception. Everyone complimented my look. Very gentle and natural finish.',
  },
];

const homeFaqs = [
  {
    q: 'Do I need to book in advance?',
    a: 'Walk-ins are welcome for small services, but we recommend booking 2 to 3 days ahead for facials, hair and makeup. For brides, book at least 1 to 2 months before the wedding.',
  },
  {
    q: 'Do you offer home-visit service?',
    a: 'Yes, bridal and party makeup can be done at your home or venue. A travel charge may apply.',
  },
  {
    q: 'Are your products safe for sensitive skin?',
    a: 'We use professional products and can do a patch test on request. Please tell us about any allergies before the service.',
  },
  {
    q: 'Can I get a trial before my wedding?',
    a: 'Yes, a bridal trial is available so you can finalise your look in advance.',
  },
  {
    q: 'Which payment methods do you accept?',
    a: 'Cash, UPI and cards.',
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [counts, setCounts] = useState({ clients: 0, services: 0, brides: 0, years: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeReview, setActiveReview] = useState(0);
  const countersRef = useRef(null);

  const nextReview = () => setActiveReview((prev) => (prev + 1) % reviewsList.length);
  const prevReview = () => setActiveReview((prev) => (prev - 1 + reviewsList.length) % reviewsList.length);

  // Animated Count-up with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1600;
          const steps = 30;
          const intervalTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            setCounts({
              clients: Math.floor(progress * 5000),
              services: Math.floor(progress * 10000),
              brides: Math.floor(progress * 500),
              years: Math.floor(progress * 10),
            });

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts({ clients: 5000, services: 10000, brides: 500, years: 10 });
            }
          }, intervalTime);
        }
      },
      { threshold: 0.3 }
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Structured Data (JSON-LD) for LocalBusiness & FAQ
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: siteConfig.rawName,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      postalCode: siteConfig.pinCode,
      addressCountry: 'IN',
    },
    openingHours: 'Mo-Su 10:00-20:00',
    priceRange: '₹₹',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const currentReview = reviewsList[activeReview];

  return (
    <>
      <Head>
        <title>{`Best Ladies Beauty Parlour in ${siteConfig.city} | ${siteConfig.rawName}`}</title>
        <meta
          name="description"
          content={`Visit ${siteConfig.rawName}, a trusted ladies parlour in ${siteConfig.city}, for bridal makeup, facials, hair and waxing by trained experts. Book your slot today.`}
        />
        <link rel="canonical" href={siteConfig.siteUrl} />
        <meta property="og:title" content={`Best Ladies Beauty Parlour in ${siteConfig.city} | ${siteConfig.rawName}`} />
        <meta
          property="og:description"
          content={`Visit ${siteConfig.rawName}, a trusted ladies parlour in ${siteConfig.city}, for bridal makeup, facials, hair and waxing by trained experts.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.siteUrl} />
        <meta property="og:site_name" content={siteConfig.rawName} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Head>

      {/* SECTION 1: HERO (FIRST SCREEN - IMMEDIATE LOAD, NO REVEAL DELAY) */}
      <section className="hero-section">
        {/* IMAGE: hero background, 1920 x 900 */}
        <div className="hero-placeholder-bg" />
        <div className="hero-bg-overlay" />

        <div className="container">
          <div className="hero-content">
            <span className="hero-eyebrow">Welcome to {siteConfig.rawName}</span>
            <h1 className="hero-title">Ladies Beauty Parlour in {siteConfig.city} for Bridal Makeup, Hair and Skin Care</h1>
            <p className="hero-subtitle">
              Look and feel your best with trained beauticians, branded products and a clean, comfortable space.
            </p>

            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary">
                Book Appointment
              </Link>
              <Link href="/services" className="btn btn-secondary" style={{ borderColor: 'var(--gold)', color: 'var(--white)' }}>
                View Services
              </Link>
            </div>

            <div className="hero-trust-row">
              <div className="hero-trust-chip">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>10+ years of experience</span>
              </div>
              <div className="hero-trust-chip">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>Hygienic tools for every client</span>
              </div>
              <div className="hero-trust-chip">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                <span>Home-visit service for brides</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WELCOME INTRO (ASYMMETRICAL IMAGE & TEXT SIDE-BY-SIDE) */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="welcome-grid">
            {/* Image Side with Gold Offset Frame */}
            <div className="welcome-image-wrap reveal reveal-left">
              <div className="welcome-gold-frame" />
              <div className="welcome-image-box">
                {/* IMAGE: One photo beside this text, size 800 x 900 px */}
                <div className="image-placeholder" style={{ height: '100%', minHeight: '400px', background: 'radial-gradient(circle at center, #ffffff 0%, #faedf0 100%)' }}>
                  <img
                    src={siteConfig.logo}
                    alt={siteConfig.name}
                    loading="lazy"
                    width="180"
                    height="180"
                    style={{
                      width: '180px',
                      height: '180px',
                      borderRadius: '50%',
                      border: '3px solid var(--gold)',
                      objectFit: 'cover',
                      boxShadow: '0 12px 30px rgba(201, 162, 77, 0.35)',
                      marginBottom: '16px',
                    }}
                  />
                  <span className="placeholder-label" style={{ fontWeight: 600, color: 'var(--plum)', fontSize: '1.1rem' }}>
                    {siteConfig.rawName}
                  </span>
                  <span className="placeholder-dim">Founded by {siteConfig.ownerName}</span>
                </div>
              </div>
              <div className="welcome-badge">
                <span className="welcome-badge-num">10+</span>
                <span className="welcome-badge-text">Years of<br />experience</span>
              </div>
            </div>

            {/* Text Side */}
            <div className="welcome-text reveal reveal-right">
              <div className="section-header text-left" style={{ marginBottom: '24px' }}>
                <span className="section-eyebrow">About Our Parlour</span>
                <h2 className="section-title">Welcome to {siteConfig.rawName}</h2>
                <div className="section-divider" />
              </div>
              <p>
                At {siteConfig.rawName}, we believe good beauty care starts with listening. Every client gets a short
                consultation first, so we understand your skin, hair, occasion and budget before we begin. From a quick
                eyebrow clean-up to a full bridal transformation, our team works with care, patience and attention to
                detail.
              </p>
              <p>
                We use trusted professional products, sterilised tools and fresh disposable items wherever needed, so that
                you can relax and enjoy the experience.
              </p>
              <div style={{ marginTop: '28px' }}>
                <Link href="/about" className="btn btn-primary">
                  Know More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE US (ICON ROW WITH THIN DIVIDERS) */}
      <section className="section-padding bg-blush">
        <div className="container">
          <div className="section-header reveal reveal-up">
            <span className="section-eyebrow">Our Commitment</span>
            <h2 className="section-title">Why Women Choose {siteConfig.rawName}</h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Experience the standard of ladies care that has made us the trusted beauty salon across {siteConfig.city}.
            </p>
          </div>

          <div className="icon-feature-row cols-6 reveal reveal-up">
            {featuresList.map((item, idx) => (
              <div key={idx} className="icon-feature-item">
                <div className="icon-circle">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR SERVICES (THE ONE CARD GRID ON THIS PAGE) */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="section-header reveal reveal-up">
            <span className="section-eyebrow">What We Offer</span>
            <h2 className="section-title">Our Services</h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Everything you need to look and feel confident, under one roof.
            </p>
          </div>

          <div className="services-grid reveal reveal-stagger">
            {servicePreviews.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card-media">
                  {/* IMAGE: One image on top of each of the 6 service cards: makeup, hair, facial, hair removal, massage, mani-pedi */}
                  <div className="image-placeholder">
                    <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    <span className="placeholder-label">Add image here</span>
                    <span className="placeholder-dim">600 x 450 px</span>
                  </div>
                  <span className="service-card-chip">{service.tag}</span>
                </div>
                <div className="service-card-body">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <Link href={service.link} className="service-card-link">
                    <span>Learn more</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }} className="reveal reveal-up">
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: POPULAR PACKAGES (MENU-STYLE PRICE LIST WITH DOTTED LINES) */}
      <section className="section-padding bg-blush">
        <div className="container">
          <div className="section-header reveal reveal-up">
            <span className="section-eyebrow">Curated Specials</span>
            <h2 className="section-title">Popular Packages</h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Value bundles designed for celebrations, special occasions, and complete bridal glow.
            </p>
          </div>

          <div className="menu-price-container reveal reveal-up">
            <div className="menu-price-list">
              {popularPackages.map((pkg, idx) => (
                <div key={idx} className="menu-price-item">
                  <div className="menu-price-header">
                    <span className="menu-price-name">
                      {pkg.name}
                      {pkg.popular && <span className="menu-price-badge">Most Popular</span>}
                    </span>
                    <span className="menu-price-dots" />
                    <span className="menu-price-val">{pkg.price}</span>
                  </div>
                  <div className="menu-price-details">
                    <p className="menu-price-desc">
                      <strong>Includes: </strong>
                      {pkg.inclusions.join(' • ')}
                    </p>
                    <Link
                      href="/contact"
                      className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}
                      style={{ padding: '8px 20px', fontSize: '0.88rem' }}
                    >
                      Book Package
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: COUNTERS (MINIMALIST HORIZONTAL STAT STRIP) */}
      <section className="counters-section reveal reveal-up" ref={countersRef}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>Our Work in Numbers</h2>
            <div className="section-divider" />
          </div>

          <div className="counters-grid">
            <div className="counter-item">
              <div className="counter-number">{counts.clients.toLocaleString()}+</div>
              <div className="counter-label">happy clients</div>
            </div>
            <div className="counter-item">
              <div className="counter-number">{counts.services.toLocaleString()}+</div>
              <div className="counter-label">beauty services completed</div>
            </div>
            <div className="counter-item">
              <div className="counter-number">{counts.brides.toLocaleString()}+</div>
              <div className="counter-label">bridal makeovers</div>
            </div>
            <div className="counter-item">
              <div className="counter-number">{counts.years.toLocaleString()}+</div>
              <div className="counter-label">years of experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: GALLERY PREVIEW (DYNAMIC STAGGERED MASONRY GRID) */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="section-header reveal reveal-up">
            <span className="section-eyebrow">Portfolio</span>
            <h2 className="section-title">Our Recent Work</h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              A look at some of the makeovers, hairstyles and skin transformations we are proud of.
            </p>
          </div>

          <div className="masonry-showcase reveal reveal-stagger">
            {[...Array(8)].map((_, idx) => (
              <div key={idx} className="masonry-item">
                {/* IMAGE: portrait photo, 768 x 960 px */}
                <div className="image-placeholder">
                  <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  <span className="placeholder-label">Add image here</span>
                  <span className="placeholder-dim">768 x 960 px</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }} className="reveal reveal-up">
            <Link href="/gallery" className="btn btn-secondary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: HOW BOOKING WORKS (NUMBERED HORIZONTAL TIMELINE) */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header reveal reveal-up">
            <span className="section-eyebrow">Simple Process</span>
            <h2 className="section-title">Book Your Appointment in 3 Easy Steps</h2>
            <div className="section-divider" />
          </div>

          <div className="timeline-track reveal reveal-up">
            {bookingSteps.map((step) => (
              <div key={step.num} className="timeline-step">
                <div className="timeline-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: CLIENT REVIEWS (LARGE FEATURED QUOTE SPOTLIGHT WITH SLIDER) */}
      <section className="section-padding bg-blush">
        <div className="container">
          <div className="section-header reveal reveal-up">
            <span className="section-eyebrow">Client Love</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="section-divider" />
          </div>

          <div className="quote-spotlight reveal reveal-up">
            <div className="quote-spotlight-mark">“</div>
            <p className="quote-spotlight-text">"{currentReview.text}"</p>
            <div className="quote-spotlight-stars">
              {[...Array(5)].map((_, s) => (
                <svg key={s} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
            </div>
            <div className="quote-spotlight-author">
              <div className="quote-spotlight-avatar">
                {currentReview.name.charAt(0)}
              </div>
              <div style={{ textAlign: 'left' }}>
                <div className="quote-spotlight-name">{currentReview.name}</div>
                <div className="quote-spotlight-service">{currentReview.service}</div>
              </div>
            </div>

            <div className="quote-spotlight-controls">
              <button
                type="button"
                className="quote-nav-btn"
                onClick={prevReview}
                aria-label="Previous review"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <div className="quote-dots">
                {reviewsList.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`quote-dot ${activeReview === idx ? 'active' : ''}`}
                    onClick={() => setActiveReview(idx)}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                className="quote-nav-btn"
                onClick={nextReview}
                aria-label="Next review"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS (ACCORDION LIST) */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="section-header reveal reveal-up">
            <span className="section-eyebrow">Common Queries</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="section-divider" />
          </div>

          <div className="faq-list reveal reveal-up">
            {homeFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-trigger"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <div className="faq-icon-wrap">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                  </button>
                  {isOpen && <div className="faq-answer">{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 11: FINAL CALL TO ACTION (FULL-WIDTH BANNER STRIP) */}
      <section className="cta-band reveal reveal-up">
        <div className="container">
          <div className="cta-band-content">
            <h2>Ready for Your New Look?</h2>
            <p>Book your appointment today and let our team take care of the rest.</p>
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
              <Link href="/contact" className="btn btn-primary" style={{ border: '2px solid var(--white)' }}>
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
