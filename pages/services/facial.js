// pages/services/facial.js
// Service Detail: Facial and Skin Care Treatments Page

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import siteConfig from '../../lib/site';

const skinTypesData = [
  { type: 'Dry', signs: 'Tight, flaky, rough patches', suggested: 'Hydrating or fruit facial' },
  { type: 'Oily', signs: 'Shiny face, large pores, frequent breakouts', suggested: 'Deep cleansing facial' },
  { type: 'Combination', signs: 'Oily T-zone, dry cheeks', suggested: 'Glow facial' },
  { type: 'Sensitive', signs: 'Redness, reacts to new products', suggested: 'Gentle cleanup, after patch test' },
  { type: 'Tanned or dull', signs: 'Uneven tone, no glow', suggested: 'De-tan or skin polishing facial' },
];

const facialPrices = [
  { treatment: 'Cleanup', bestFor: 'Quick refresh, oily skin', price: 'Rs. 550' },
  { treatment: 'Fruit Facial', bestFor: 'Dry and normal skin', price: 'Rs. 600' },
  { treatment: 'Basic Facial', bestFor: 'Everyday maintenance', price: 'Rs. 650' },
  { treatment: 'Deep Cleansing Facial', bestFor: 'Blackheads, clogged pores', price: 'Rs. 700' },
  { treatment: 'Glow Facial', bestFor: 'Dull skin', price: 'Rs. 750' },
  { treatment: 'De-Tan Facial', bestFor: 'Tan removal', price: 'Rs. 900' },
  { treatment: 'Skin Polishing Facial', bestFor: 'Smooth, even texture', price: 'Rs. 900' },
  { treatment: 'Gold Facial', bestFor: 'Instant glow before events', price: 'Rs. 1,500' },
  { treatment: 'Bridal Glow Facial', bestFor: 'Pre-wedding skin prep', price: 'Rs. 1,500' },
  { treatment: 'Diamond Facial', bestFor: 'Brightening and luxury care', price: 'Rs. 1,700' },
  { treatment: 'O3 Facial', bestFor: 'Advanced glow and anti-pigmentation care', price: 'Rs. 1,700' },
];

const facialSteps = [
  { num: '1', title: 'Skin check and cleansing', text: 'Gentle analysis of your skin followed by deep surface cleansing.' },
  { num: '2', title: 'Scrub or exfoliation', text: 'Gentle removal of dead skin cells suited specifically to your skin sensitivity.' },
  { num: '3', title: 'Steam & blackhead removal', text: 'Warm steam to soften pores and precise extraction of impurities.' },
  { num: '4', title: 'Massage with cream / gel', text: 'Relaxing lymphatic facial massage promoting blood flow and glow.' },
  { num: '5', title: 'Face pack & sunscreen', text: 'Nutrient-rich mask sealed with protective moisturiser and sun protection.' },
];

const facialBenefits = [
  'Deep cleansing of pores and removal of blackheads and dirt',
  'Better hydration and a softer, smoother feel',
  'Reduced dullness and tan, with a fresh glow',
  'Relaxing massage that relieves facial tension',
  'Preparation of the skin before makeup or a special event',
];

const aftercareTips = [
  'Avoid direct sun and heavy makeup for a few hours after the facial.',
  'Use sunscreen daily.',
  'Do not scrub or pick your skin for 24 hours.',
  'Drink plenty of water and keep a regular cleansing routine.',
];

const facialFaqs = [
  {
    q: 'How often should I get a facial?',
    a: 'Once every 3 to 4 weeks suits most skin types.',
  },
  {
    q: 'Is a facial safe for sensitive skin?',
    a: 'Yes, with suitable products. Please tell us about allergies, and we can do a patch test first.',
  },
  {
    q: 'When should a bride get a facial?',
    a: 'Start a few weeks before the wedding, with the last facial 3 to 5 days before the event.',
  },
  {
    q: 'Can I get a facial during my periods or pregnancy?',
    a: 'Please tell our beautician. Some treatments may need to be changed or avoided, and for pregnancy we suggest checking with your doctor first.',
  },
];

export default function FacialPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <Head>
        <title>{`Facial and Skin Care in ${siteConfig.city} | ${siteConfig.rawName}`}</title>
        <meta
          name="description"
          content={`Get a glow, de-tan or deep cleansing facial in ${siteConfig.city} at ${siteConfig.rawName}. Treatments chosen for your skin type, with prices listed clearly.`}
        />
        <link rel="canonical" href={`${siteConfig.siteUrl}/services/facial`} />
        <meta property="og:title" content={`Facial and Skin Care in ${siteConfig.city} | ${siteConfig.rawName}`} />
        <meta
          property="og:description"
          content={`Get a glow, de-tan or deep cleansing facial in ${siteConfig.city} at ${siteConfig.rawName}.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteConfig.siteUrl}/services/facial`} />
      </Head>

      {/* SECTION 1: PAGE BANNER */}
      <div className="page-banner">
        {/* IMAGE: Banner with a facial in progress or a glowing skin close-up, size 1920 x 500 px */}
        <div className="page-banner-bg" />
        <div className="container page-banner-content">
          <div className="page-breadcrumb">
            <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span>Facial & Skin Care</span>
          </div>
          <h1>Facial and Skin Care Treatments in {siteConfig.city}</h1>
          <p>Clean, glowing and healthy-looking skin, with treatments chosen for your skin type.</p>
          <div className="page-banner-actions">
            <Link href="/contact" className="btn btn-primary">
              Book Facial
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
          <div className="service-intro-grid">
            <div className="service-intro-text">
              <div className="section-header text-left" style={{ marginBottom: '24px' }}>
                <span className="section-eyebrow">Personalized Skin Care</span>
                <h2 className="section-title">Healthy Skin Starts With Care</h2>
                <div className="section-divider" />
              </div>
              <p>
                Your skin changes with weather, stress, diet and age. A regular facial removes dirt and dead cells,
                improves texture and helps your skin absorb care products better. At {siteConfig.rawName}, every facial
                begins with a quick skin check so we can choose the right products and steps for you.
              </p>
            </div>

            <div className="service-intro-media">
              {/* IMAGE: One photo beside this introduction (face mask or facial treatment), size 800 x 600 px */}
              <div className="image-placeholder">
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                <span className="placeholder-label">Add facial photo</span>
                <span className="placeholder-dim">800 x 600 px</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: BENEFITS */}
      <section className="section-padding bg-blush">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Why It Matters</span>
            <h2 className="section-title">Benefits of a Professional Facial</h2>
            <div className="section-divider" />
          </div>

          <div className="checklist-card">
            <ul className="tips-grid">
              {facialBenefits.map((benefit, idx) => (
                <li key={idx} className="tip-item">
                  <div className="icon-circle" style={{ width: '36px', height: '36px' }}>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 4: FIND YOUR SKIN TYPE */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Skin Analysis</span>
            <h2 className="section-title">Find Your Skin Type</h2>
            <div className="section-divider" />
            <p className="section-subtitle">Identify your skin's unique needs to select the most effective treatment.</p>
          </div>

          <div className="price-table-container">
            <table className="price-table">
              <thead>
                <tr>
                  <th>Skin Type</th>
                  <th>Common Signs</th>
                  <th>Facial We Suggest</th>
                </tr>
              </thead>
              <tbody>
                {skinTypesData.map((row, idx) => (
                  <tr key={idx}>
                    <td className="service-name">{row.type}</td>
                    <td>{row.signs}</td>
                    <td style={{ color: 'var(--rose)', fontWeight: 600 }}>{row.suggested}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5: FACIAL PRICE LIST */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Rate Card</span>
            <h2 className="section-title">Facial Price List</h2>
            <div className="section-divider" />
          </div>

          <div className="price-table-container">
            <table className="price-table">
              <thead>
                <tr>
                  <th>Treatment</th>
                  <th>Best For</th>
                  <th className="price-col">Price</th>
                </tr>
              </thead>
              <tbody>
                {facialPrices.map((item, idx) => (
                  <tr key={idx}>
                    <td className="service-name">{item.treatment}</td>
                    <td style={{ color: 'var(--muted)' }}>{item.bestFor}</td>
                    <td className="price-col">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 6: HOW A FACIAL SESSION WORKS */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">The Experience</span>
            <h2 className="section-title">How a Facial Session Works</h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              A facial takes about 45 to 75 minutes, depending on the treatment.
            </p>
          </div>

          <div className="process-timeline">
            {facialSteps.map((step) => (
              <div key={step.num} className="process-step-card">
                <div className="process-step-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: AFTERCARE TIPS */}
      <section className="section-padding bg-blush">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Post-Care</span>
            <h2 className="section-title">Aftercare Tips</h2>
            <div className="section-divider" />
          </div>

          <div className="checklist-card">
            <ul className="tips-grid">
              {aftercareTips.map((tip, idx) => (
                <li key={idx} className="tip-item">
                  <div className="icon-circle" style={{ width: '36px', height: '36px' }}>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Answers</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="section-divider" />
          </div>

          <div className="faq-list">
            {facialFaqs.map((faq, idx) => {
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

      {/* SECTION 9: CALL TO ACTION */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-band-content">
            <h2>Ready to Refresh Your Skin?</h2>
            <p>Book your facial today and give your skin the hydration and care it deserves.</p>
            <div className="cta-band-buttons">
              <Link href="/contact" className="btn btn-primary" style={{ border: '2px solid var(--white)' }}>
                Book Facial
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
