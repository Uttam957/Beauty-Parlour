// pages/services/mani-pedi.js
// Service Detail: Manicure, Pedicure and Extra Salon Services Page

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import siteConfig from '../../lib/site';

const nailPrices = [
  { service: 'Basic manicure', included: 'Nail shaping, cuticle care, hand massage', price: 'Rs. 400' },
  { service: 'Spa manicure', included: 'Scrub, mask, massage and polish', price: 'Rs. 700' },
  { service: 'Basic pedicure', included: 'Soak, scrub, nail shaping, foot massage', price: 'Rs. 500' },
  { service: 'Spa pedicure', included: 'Scrub, mask, deep massage, polish', price: 'Rs. 900' },
  { service: 'Gel polish', included: 'Long-lasting shine, per set', price: 'Rs. 600' },
  { service: 'Nail art', included: 'Simple designs, per nail', price: 'From Rs. 30' },
  { service: 'Nail extensions', included: 'Acrylic or gel, per set', price: 'From Rs. 1,800' },
];

const otherServicesList = [
  {
    title: 'Eyelash lift or tint',
    desc: 'Natural-looking curl and definition (on request).',
  },
  {
    title: 'Body polishing',
    desc: 'Exfoliation and glow for smoother skin.',
  },
  {
    title: 'Pre-bridal package',
    desc: 'A planned set of treatments before your wedding.',
  },
  {
    title: 'Saree draping',
    desc: 'Neat, secure draping for weddings and parties.',
  },
  {
    title: 'Kids and teens beauty',
    desc: 'Gentle haircuts and simple grooming.',
  },
];

const maniPediFaqs = [
  {
    q: 'How long does a pedicure take?',
    a: 'About 45 to 60 minutes.',
  },
  {
    q: 'How long does gel polish last?',
    a: 'Usually 2 to 3 weeks, with care.',
  },
  {
    q: 'Can I get nail art on short nails?',
    a: 'Yes, designs can be made to suit your nail length.',
  },
];

export default function ManiPediPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <Head>
        <title>{`Manicure and Pedicure in ${siteConfig.city} | ${siteConfig.rawName}`}</title>
        <meta
          name="description"
          content={`Treat your hands and feet to a spa manicure or pedicure in ${siteConfig.city}. Nail art and gel polish available at ${siteConfig.rawName}. Book online today.`}
        />
        <link rel="canonical" href={`${siteConfig.siteUrl}/services/mani-pedi`} />
        <meta property="og:title" content={`Manicure and Pedicure in ${siteConfig.city} | ${siteConfig.rawName}`} />
        <meta
          property="og:description"
          content={`Treat your hands and feet to a spa manicure or pedicure in ${siteConfig.city}.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteConfig.siteUrl}/services/mani-pedi`} />
      </Head>

      {/* SECTION 1: PAGE BANNER */}
      <div className="page-banner">
        {/* IMAGE: Banner with a manicure or pedicure in progress, size 1920 x 500 px */}
        <div className="page-banner-bg" />
        <div className="container page-banner-content">
          <div className="page-breadcrumb">
            <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span>Mani-Pedi</span>
          </div>
          <h1>Manicure, Pedicure and Nail Care in {siteConfig.city}</h1>
          <p>Soft hands, neat nails and refreshed feet, in a clean and relaxing setting.</p>
          <div className="page-banner-actions">
            <Link href="/contact" className="btn btn-primary">
              Book Mani-Pedi
            </Link>
            <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="btn btn-light">
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 2: SERVICES AND PRICES */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Nail Care Menu</span>
            <h2 className="section-title">Services and Prices</h2>
            <div className="section-divider" />
          </div>

          <div className="menu-price-container reveal reveal-up">
            <div className="menu-price-list">
              {nailPrices.map((row, idx) => (
                <div key={idx} className="menu-price-item">
                  <div className="menu-price-header">
                    <span className="menu-price-name">{row.service}</span>
                    <span className="menu-price-dots" />
                    <span className="menu-price-val">{row.price}</span>
                  </div>
                  <div className="menu-price-details">
                    <span className="menu-price-desc">{row.included}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 3: HYGIENE NOTE */}
          <div className="highlight-strip reveal reveal-up" style={{ marginTop: '48px' }}>
            <h3>Hygiene for Nail Services</h3>
            <p>
              Tools are sterilised for each client, and files and buffers are single-use or cleaned before reuse.
              Please tell us if you have cuts, fungal infection or diabetes before the service.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: OTHER SERVICES */}
      <section className="section-padding bg-blush">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Complementary Care</span>
            <h2 className="section-title">Other Services</h2>
            <div className="section-divider" />
          </div>

          <div className="occasions-grid reveal reveal-stagger">
            {otherServicesList.map((item, idx) => (
              <div key={idx} className="occasion-card">
                <div className="occasion-media" style={{ aspectRatio: '16 / 9' }}>
                  {/* IMAGE: small photo for each extra service card, size 600 x 400 px */}
                  <div className="image-placeholder">
                    <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    <span className="placeholder-label">{item.title}</span>
                    <span className="placeholder-dim">600 x 400 px</span>
                  </div>
                </div>
                <div className="occasion-body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Answers</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="section-divider" />
          </div>

          <div className="faq-list reveal reveal-up">
            {maniPediFaqs.map((faq, idx) => {
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

      {/* SECTION 6: CALL TO ACTION */}
      <section className="cta-band reveal reveal-up">
        <div className="container">
          <div className="cta-band-content">
            <h2>Pamper Your Hands & Feet Today</h2>
            <p>Step into our relaxed parlour for meticulous nail shaping, treatments, and lasting shine.</p>
            <div className="cta-band-buttons">
              <Link href="/contact" className="btn btn-primary" style={{ border: '2px solid var(--white)' }}>
                Book Mani-Pedi
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
