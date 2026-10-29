// pages/services/hair.js
// Service Detail: Hair Salon Services Page

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import siteConfig from '../../lib/site';

const hairServicesList = [
  {
    title: 'Haircuts and styling',
    desc: "Trim, layers, step cut, U-cut, fringe, bob and kids' haircuts, followed by blow-dry or curls.",
  },
  {
    title: 'Hair colour',
    desc: 'Global colour, root touch-up, highlights, balayage and fashion shades, using ammonia-free options on request.',
  },
  {
    title: 'Hair spa and treatments',
    desc: 'Deep conditioning spa, anti-dandruff care, hair fall control, keratin and smoothing.',
  },
  {
    title: 'Hair straightening and curling',
    desc: 'Rebonding, smoothening and temporary curls or waves.',
  },
  {
    title: 'Occasion hairstyles',
    desc: 'Bridal buns, braids, updos and party styles.',
  },
];

const hairPrices = [
  { service: 'Haircut (women)', price: 'Rs. 400' },
  { service: 'Haircut (girls under 12)', price: 'Rs. 250' },
  { service: 'Trim', price: 'Rs. 200' },
  { service: 'Fringe or bangs', price: 'Rs. 150' },
  { service: 'Blow-dry', price: 'Rs. 300' },
  { service: 'Hair spa', price: 'Rs. 900' },
  { service: 'Anti-dandruff treatment', price: 'Rs. 1,200' },
  { service: 'Root touch-up', price: 'Rs. 800' },
  { service: 'Global hair colour', price: 'From Rs. 2,500' },
  { service: 'Highlights (per streak)', price: 'Rs. 300' },
  { service: 'Keratin treatment', price: 'From Rs. 4,500' },
  { service: 'Hair smoothening', price: 'From Rs. 4,000' },
  { service: 'Party hairstyle', price: 'Rs. 800' },
  { service: 'Bridal hairstyle', price: 'Rs. 3,500' },
];

const hairTips = [
  'Oil your hair once or twice a week and wash with a mild shampoo.',
  'Trim split ends every 2 to 3 months.',
  'Use heat tools sparingly and apply a heat protectant.',
  'After colour or keratin, use a sulphate-free shampoo as advised by your stylist.',
];

const hairFaqs = [
  {
    q: 'How long does hair colour last?',
    a: 'It depends on the shade and hair care, usually 4 to 8 weeks, with roots needing touch-up earlier.',
  },
  {
    q: 'Will keratin or smoothening damage my hair?',
    a: 'When done properly and followed by correct aftercare, hair stays smooth and manageable. We will check your hair health first.',
  },
  {
    q: 'How often should I get a hair spa?',
    a: 'Once every 3 to 4 weeks, or as advised by your stylist.',
  },
  {
    q: "Do you do kids' haircuts?",
    a: 'Yes, in a calm, patient manner.',
  },
];

export default function HairPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <Head>
        <title>{`Hair Salon in ${siteConfig.city} for Cut and Colour | ${siteConfig.rawName}`}</title>
        <meta
          name="description"
          content={`Haircuts, colour, hair spa, keratin and smoothening for women in ${siteConfig.city}. Book with expert stylists at ${siteConfig.rawName} for healthy, shiny hair.`}
        />
        <link rel="canonical" href={`${siteConfig.siteUrl}/services/hair`} />
        <meta property="og:title" content={`Hair Salon in ${siteConfig.city} for Cut and Colour | ${siteConfig.rawName}`} />
        <meta
          property="og:description"
          content={`Haircuts, colour, hair spa, keratin and smoothening for women in ${siteConfig.city}.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteConfig.siteUrl}/services/hair`} />
      </Head>

      {/* SECTION 1: PAGE BANNER */}
      <div className="page-banner">
        {/* IMAGE: Banner with a hairstyle or stylist at work, size 1920 x 500 px */}
        <div className="page-banner-bg" />
        <div className="container page-banner-content">
          <div className="page-breadcrumb">
            <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span>Hair Services</span>
          </div>
          <h1>Hair Salon Services in {siteConfig.city} for Cut, Colour and Care</h1>
          <p>Healthy, shiny and well-styled hair, from a simple trim to a complete makeover.</p>
          <div className="page-banner-actions">
            <Link href="/contact" className="btn btn-primary">
              Book Hair Service
            </Link>
            <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="btn btn-light">
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 2: INTRODUCTION */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="services-intro-box reveal reveal-up">
            Your hair says a lot about your style. Our stylists suggest cuts, colours and treatments after checking
            your hair type, length, texture and daily routine, so the result looks good and is easy to manage at home.
          </div>
        </div>
      </section>

      {/* SECTION 3: HAIR SERVICES WE OFFER */}
      <section className="section-padding bg-blush">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Specialties</span>
            <h2 className="section-title">Hair Services We Offer</h2>
            <div className="section-divider" />
          </div>

          <div className="zigzag-showcase reveal reveal-up">
            {hairServicesList.map((item, idx) => (
              <div key={idx} className="zigzag-row">
                <div className="zigzag-media">
                  <div className="image-placeholder" style={{ background: 'var(--blush)' }}>
                    <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    <span className="placeholder-label">{item.title}</span>
                  </div>
                </div>
                <div className="zigzag-text">
                  <span className="section-eyebrow">Service 0{idx + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HAIR PRICE LIST */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Rate Card</span>
            <h2 className="section-title">Hair Price List</h2>
            <div className="section-divider" />
          </div>

          <div className="menu-price-container reveal reveal-up">
            <div className="menu-price-list">
              {hairPrices.map((item, idx) => (
                <div key={idx} className="menu-price-item">
                  <div className="menu-price-header">
                    <span className="menu-price-name">{item.service}</span>
                    <span className="menu-price-dots" />
                    <span className="menu-price-val">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="price-note" style={{ textAlign: 'center', marginTop: '24px' }}>
              Final colour and chemical treatment prices depend on hair length and thickness.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: HAIR CARE TIPS */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Stylist Advice</span>
            <h2 className="section-title">Hair Care Tips</h2>
            <div className="section-divider" />
          </div>

          <div className="icon-feature-row cols-4 reveal reveal-up">
            {hairTips.map((tip, idx) => (
              <div key={idx} className="icon-feature-item">
                <div className="icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h4>Tip 0{idx + 1}</h4>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: BEFORE-AND-AFTER GALLERY */}
      <section className="section-padding bg-blush">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Results</span>
            <h2 className="section-title">Hair Transformations</h2>
            <div className="section-divider" />
          </div>

          <div className="masonry-showcase reveal reveal-stagger">
            {[...Array(8)].map((_, idx) => (
              <div key={idx} className="masonry-item">
                {/* IMAGE: 6 to 8 photos in a grid, each 768 x 960 px */}
                <div className="image-placeholder">
                  <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  <span className="placeholder-label">Add hairstyle photo</span>
                  <span className="placeholder-dim">768 x 960 px</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Answers</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="section-divider" />
          </div>

          <div className="faq-list reveal reveal-up">
            {hairFaqs.map((faq, idx) => {
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

      {/* SECTION 8: CALL TO ACTION */}
      <section className="cta-band reveal reveal-up">
        <div className="container">
          <div className="cta-band-content">
            <h2>Ready to Transform Your Hair?</h2>
            <p>Book your haircut, styling, or colour session with our expert stylists today.</p>
            <div className="cta-band-buttons">
              <Link href="/contact" className="btn btn-primary" style={{ border: '2px solid var(--white)' }}>
                Book Hair Service
              </Link>
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="btn btn-light">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
