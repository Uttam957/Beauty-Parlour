// pages/services/massage.js
// Service Detail: Relaxing Massage Services Page

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import siteConfig from '../../lib/site';

const massagePrices = [
  { service: 'Head and shoulder massage', duration: '20 min', price: 'Rs. 300' },
  { service: 'Foot reflexology massage', duration: '30 min', price: 'Rs. 400' },
  { service: 'Back and shoulder massage', duration: '30 min', price: 'Rs. 600' },
  { service: 'Aroma full body massage', duration: '60 min', price: 'Rs. 1,500' },
  { service: 'Deep relaxation body massage', duration: '60 min', price: 'Rs. 1,800' },
  { service: 'Pre-bridal body massage', duration: '60 min', price: 'Rs. 2,000' },
];

const massageBenefits = [
  'Helps release stress and tension',
  'Eases tight muscles in the neck, back and shoulders',
  'Supports better sleep and relaxation',
  'Leaves skin soft and refreshed',
];

const massageFaqs = [
  {
    q: 'What should I wear?',
    a: 'Comfortable clothing, and we will provide towels and privacy.',
  },
  {
    q: 'Is the massage done by female therapists?',
    a: 'Yes, ladies only.',
  },
  {
    q: 'How often can I get a massage?',
    a: 'Once every 2 to 4 weeks is common, depending on your needs.',
  },
];

export default function MassagePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <Head>
        <title>{`Body and Head Massage in ${siteConfig.city} | ${siteConfig.rawName}`}</title>
        <meta
          name="description"
          content={`Relax with a head, foot or full body massage at ${siteConfig.rawName}, ${siteConfig.city}. Ladies-only space, trained therapists and calm, private rooms.`}
        />
        <link rel="canonical" href={`${siteConfig.siteUrl}/services/massage`} />
        <meta property="og:title" content={`Body and Head Massage in ${siteConfig.city} | ${siteConfig.rawName}`} />
        <meta
          property="og:description"
          content={`Relax with a head, foot or full body massage at ${siteConfig.rawName}, ${siteConfig.city}.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteConfig.siteUrl}/services/massage`} />
      </Head>

      {/* SECTION 1: PAGE BANNER */}
      <div className="page-banner">
        {/* IMAGE: Banner with a relaxing massage scene, size 1920 x 500 px */}
        <div className="page-banner-bg" />
        <div className="container page-banner-content">
          <div className="page-breadcrumb">
            <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span>Massage</span>
          </div>
          <h1>Relaxing Massage Services in {siteConfig.city}</h1>
          <p>Ease stress, relax tired muscles and feel refreshed.</p>
          <div className="page-banner-actions">
            <Link href="/contact" className="btn btn-primary">
              Book Massage
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
            A good massage is more than a luxury. It helps you relax, improves comfort and gives you a peaceful break
            from a busy routine. Our therapists use gentle, steady techniques and quality oils, with pressure adjusted
            to your comfort.
          </div>
        </div>
      </section>

      {/* SECTION 3: MASSAGE OPTIONS AND PRICES */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Therapeutic Care</span>
            <h2 className="section-title">Massage Options and Prices</h2>
            <div className="section-divider" />
          </div>

          <div className="menu-price-container reveal reveal-up">
            <div className="menu-price-list">
              {massagePrices.map((row, idx) => (
                <div key={idx} className="menu-price-item">
                  <div className="menu-price-header">
                    <span className="menu-price-name">
                      {row.service}
                      <span className="menu-price-badge">{row.duration}</span>
                    </span>
                    <span className="menu-price-dots" />
                    <span className="menu-price-val">{row.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: BENEFITS */}
      <section className="section-padding bg-blush">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Wellness Benefits</span>
            <h2 className="section-title">Benefits</h2>
            <div className="section-divider" />
          </div>

          <div className="icon-feature-row cols-4 reveal reveal-up">
            {massageBenefits.map((benefit, idx) => (
              <div key={idx} className="icon-feature-item">
                <div className="icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h4>Wellness 0{idx + 1}</h4>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PLEASE NOTE */}
      <section className="section-padding bg-ivory" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="highlight-strip reveal reveal-up">
            <h3>Therapeutic Guidelines & Client Notice</h3>
            <p>
              Massage here is for relaxation and personal care, not medical treatment. If you have an injury,
              pregnancy, skin infection or health condition, please tell us first and check with your doctor.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Answers</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="section-divider" />
          </div>

          <div className="faq-list reveal reveal-up">
            {massageFaqs.map((faq, idx) => {
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

      {/* SECTION 7: CALL TO ACTION */}
      <section className="cta-band reveal reveal-up">
        <div className="container">
          <div className="cta-band-content">
            <h2>Take Time to Unwind and Relax</h2>
            <p>Treat yourself to a restorative session in a calm, private, ladies-only sanctuary.</p>
            <div className="cta-band-buttons">
              <Link href="/contact" className="btn btn-primary" style={{ border: '2px solid var(--white)' }}>
                Book Massage
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
