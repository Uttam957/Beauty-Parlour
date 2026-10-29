// pages/services/hair-removal.js
// Service Detail: Waxing and Threading Services Page

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import siteConfig from '../../lib/site';

const whyHairRemoval = [
  {
    title: 'Hygienic Disposables',
    desc: 'Fresh, disposable spatulas and strips for each client.',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
  },
  {
    title: 'Skin-Friendly Products',
    desc: 'Skin-friendly wax suitable for different skin types, including sensitive skin options.',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
    ),
  },
  {
    title: 'Gentle & Quick',
    desc: 'Trained beauticians who work quickly and gently.',
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 14 14" /></svg>
    ),
  },
  {
    title: 'Post-Wax Soothing',
    desc: 'Soothing gel or lotion applied after waxing.',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>
    ),
  },
];

const waxingPrices = [
  { service: 'Underarms', regular: 'Rs. 80', rica: 'Rs. 150' },
  { service: 'Half arms', regular: 'Rs. 150', rica: 'Rs. 250' },
  { service: 'Full arms', regular: 'Rs. 250', rica: 'Rs. 400' },
  { service: 'Half legs', regular: 'Rs. 200', rica: 'Rs. 350' },
  { service: 'Full legs', regular: 'Rs. 350', rica: 'Rs. 600' },
  { service: 'Back or stomach', regular: 'Rs. 300', rica: 'Rs. 500' },
  { service: 'Bikini line', regular: 'Rs. 400', rica: 'Rs. 600' },
  { service: 'Full body', regular: 'Rs. 1,200', rica: 'Rs. 2,500' },
];

const threadingPrices = [
  { service: 'Eyebrows', price: 'Rs. 40' },
  { service: 'Upper lip', price: 'Rs. 20' },
  { service: 'Chin', price: 'Rs. 20' },
  { service: 'Forehead', price: 'Rs. 30' },
  { service: 'Side locks', price: 'Rs. 40' },
  { service: 'Full face threading', price: 'Rs. 150' },
  { service: 'Face bleach or de-tan', price: 'From Rs. 250' },
];

const comparisonData = [
  { feature: 'Best for', waxing: 'Arms, legs, underarms, large areas', threading: 'Eyebrows, upper lip, face' },
  { feature: 'Result lasts', waxing: 'About 3 to 4 weeks', threading: 'About 2 to 4 weeks' },
  { feature: 'Precision', waxing: 'Good', threading: 'Very high for shaping' },
  { feature: 'Time taken', waxing: 'Short for large areas', threading: 'Short for small areas' },
];

const hairRemovalFaqs = [
  {
    q: 'Does waxing hurt?',
    a: 'There may be brief discomfort, which reduces with regular waxing.',
  },
  {
    q: 'Can I wax during my periods?',
    a: 'The skin may feel more sensitive then, so many women prefer to wait.',
  },
  {
    q: 'How often should I wax?',
    a: 'Every 3 to 4 weeks is usual.',
  },
  {
    q: 'Is threading safe for sensitive skin?',
    a: 'Yes, it uses no chemicals, though redness can occur briefly.',
  },
];

export default function HairRemovalPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <Head>
        <title>{`Waxing and Threading in ${siteConfig.city} | ${siteConfig.rawName}`}</title>
        <meta
          name="description"
          content={`Gentle waxing and precise threading in ${siteConfig.city} with hygienic, disposable tools and skin-friendly products. Book your appointment at ${siteConfig.rawName}.`}
        />
        <link rel="canonical" href={`${siteConfig.siteUrl}/services/hair-removal`} />
        <meta property="og:title" content={`Waxing and Threading in ${siteConfig.city} | ${siteConfig.rawName}`} />
        <meta
          property="og:description"
          content={`Gentle waxing and precise threading in ${siteConfig.city} with hygienic, disposable tools and skin-friendly products.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteConfig.siteUrl}/services/hair-removal`} />
      </Head>

      {/* SECTION 1: PAGE BANNER */}
      <div className="page-banner">
        {/* IMAGE: Banner with a clean waxing or threading setup, size 1920 x 500 px */}
        <div className="page-banner-bg" />
        <div className="container page-banner-content">
          <div className="page-breadcrumb">
            <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span>Hair Removal</span>
          </div>
          <h1>Waxing and Threading Services in {siteConfig.city}</h1>
          <p>Smooth, clean skin with gentle products and a hygienic, comfortable process.</p>
          <div className="page-banner-actions">
            <Link href="/contact" className="btn btn-primary">
              Book Appointment
            </Link>
            <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="btn btn-light">
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 2: WHY CHOOSE OUR HAIR REMOVAL */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Hygiene & Comfort</span>
            <h2 className="section-title">Why Choose Our Hair Removal</h2>
            <div className="section-divider" />
          </div>

          <div className="icon-feature-row cols-4 reveal reveal-up">
            {whyHairRemoval.map((item, idx) => (
              <div key={idx} className="icon-feature-item">
                <div className="icon-circle">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WAXING SERVICES AND PRICES */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Waxing Rate Card</span>
            <h2 className="section-title">Waxing Services and Prices</h2>
            <div className="section-divider" />
          </div>

          <div className="menu-price-container reveal reveal-up">
            <div className="menu-price-list">
              {waxingPrices.map((row, idx) => (
                <div key={idx} className="menu-price-item">
                  <div className="menu-price-header">
                    <span className="menu-price-name">{row.service}</span>
                    <span className="menu-price-dots" />
                    <div className="menu-price-dual">
                      <span className="menu-price-subval">Regular: <strong>{row.regular}</strong></span>
                      <span className="menu-price-subval" style={{ color: 'var(--plum)' }}>Rica: <strong>{row.rica}</strong></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THREADING AND FACIAL HAIR REMOVAL */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Precision Shaping</span>
            <h2 className="section-title">Threading and Facial Hair Removal</h2>
            <div className="section-divider" />
          </div>

          <div className="menu-price-container reveal reveal-up">
            <div className="menu-price-list">
              {threadingPrices.map((row, idx) => (
                <div key={idx} className="menu-price-item">
                  <div className="menu-price-header">
                    <span className="menu-price-name">{row.service}</span>
                    <span className="menu-price-dots" />
                    <span className="menu-price-val">{row.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WAX OR THREAD: WHICH IS RIGHT FOR YOU? */}
      <section className="section-padding bg-blush">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Comparison</span>
            <h2 className="section-title">Wax or Thread: Which is Right for You?</h2>
            <div className="section-divider" />
          </div>

          <div className="comparison-cards-grid reveal reveal-stagger">
            <div className="comparison-card highlight">
              <span className="comparison-card-badge">Popular Body Care</span>
              <h3 className="comparison-card-title">Waxing Treatment</h3>
              <ul className="comparison-card-list">
                {comparisonData.map((row, idx) => (
                  <li key={idx} className="comparison-card-item">
                    <span className="comparison-card-feature">{row.feature}</span>
                    <span className="comparison-card-desc">{row.waxing}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="comparison-card">
              <h3 className="comparison-card-title">Threading Technique</h3>
              <ul className="comparison-card-list">
                {comparisonData.map((row, idx) => (
                  <li key={idx} className="comparison-card-item">
                    <span className="comparison-card-feature">{row.feature}</span>
                    <span className="comparison-card-desc">{row.threading}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: BEFORE AND AFTER CARE */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Care Guide</span>
            <h2 className="section-title">Before and After Care</h2>
            <div className="section-divider" />
          </div>

          <div className="checklist-strip reveal reveal-up" style={{ marginBottom: '32px' }}>
            <div className="checklist-strip-item">
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--plum)', marginBottom: '4px' }}>Before Waxing</strong>
                <span>Let hair grow to about a quarter inch, and keep skin clean and dry before your visit.</span>
              </div>
            </div>

            <div className="checklist-strip-item">
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--plum)', marginBottom: '4px' }}>After Waxing: Protection</strong>
                <span>Avoid sun, hot water, saunas and swimming for 24 hours.</span>
              </div>
            </div>

            <div className="checklist-strip-item">
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--plum)', marginBottom: '4px' }}>After Waxing: Comfort</strong>
                <span>Avoid tight clothes and heavy creams on the area.</span>
              </div>
            </div>

            <div className="checklist-strip-item">
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--plum)', marginBottom: '4px' }}>Exfoliation Maintenance</strong>
                <span>Gently exfoliate after 2 to 3 days to prevent ingrown hairs.</span>
              </div>
            </div>
          </div>

          <div className="notice-box reveal reveal-up">
            <svg className="notice-icon" viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            <div className="notice-content">
              <h4>Please Note</h4>
              <p>Please tell us about allergies, skin conditions, pregnancy or any medication before the service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Answers</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="section-divider" />
          </div>

          <div className="faq-list reveal reveal-up">
            {hairRemovalFaqs.map((faq, idx) => {
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
            <h2>Ready for Smooth, Radiant Skin?</h2>
            <p>Book your waxing or threading session today with our gentle, certified beauticians.</p>
            <div className="cta-band-buttons">
              <Link href="/contact" className="btn btn-primary" style={{ border: '2px solid var(--white)' }}>
                Book Appointment
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
