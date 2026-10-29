// pages/services/makeup.js
// Service Detail: Bridal and Party Makeup Page

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import siteConfig from '../../lib/site';

const makeupPrices = [
  { category: 'Bridal', service: 'HD Bridal Makeup', price: 'Rs. 21,000' },
  { category: 'Bridal', service: 'Airbrush Bridal Makeup', price: 'Rs. 28,000' },
  { category: 'Bridal', service: 'Reception Makeup', price: 'Rs. 11,000' },
  { category: 'Bridal', service: 'Pre-Wedding Shoot Makeup', price: 'Rs. 8,000' },
  { category: 'Pre-wedding', service: 'Engagement Makeup', price: 'Rs. 5,000' },
  { category: 'Pre-wedding', service: 'Haldi Makeup', price: 'Rs. 4,000' },
  { category: 'Pre-wedding', service: 'Mehndi Makeup', price: 'Rs. 4,000' },
  { category: 'Pre-wedding', service: 'Sangeet Makeup', price: 'Rs. 5,000' },
  { category: 'Party', service: 'Party Makeup', price: 'Rs. 2,500' },
  { category: 'Party', service: 'Evening / Cocktail Makeup', price: 'Rs. 3,000' },
  { category: 'Party', service: 'Wedding Guest Makeup', price: 'Rs. 2,500' },
  { category: 'Natural', service: 'Light / Nude Makeup', price: 'Rs. 2,000' },
  { category: 'Natural', service: 'No-Makeup Look', price: 'Rs. 2,500' },
];

const occasionBlocks = [
  {
    title: 'Bridal makeup',
    desc: 'Traditional, modern, HD and airbrush looks, with a trial session before the wedding.',
    hasImage: true,
  },
  {
    title: 'Engagement and reception makeup',
    desc: 'Elegant, camera-friendly looks that complement your outfit and jewellery.',
    hasImage: true,
  },
  {
    title: 'Party and cocktail makeup',
    desc: 'Bold or soft glam for birthdays, parties and evening events.',
    hasImage: true,
  },
  {
    title: 'Pre-wedding functions',
    desc: 'Haldi, mehndi and sangeet looks that are light, fresh and comfortable to wear.',
    hasImage: false,
  },
  {
    title: 'Natural and everyday makeup',
    desc: 'Minimal, nude and no-makeup looks for office, college and family functions.',
    hasImage: false,
  },
];

const processSteps = [
  { num: '1', title: 'Consultation', text: 'We discuss your outfit, theme, skin type and preferred look.' },
  { num: '2', title: 'Skin preparation', text: 'Cleansing, toning and priming for a smooth, lasting base.' },
  { num: '3', title: 'Makeup application', text: 'Base, eyes, lips and contouring, matched to your look.' },
  { num: '4', title: 'Hair and draping', text: 'Hairstyle, dupatta or saree draping and accessories setting.' },
  { num: '5', title: 'Final touch-up', text: 'Setting spray and a quick guide to touch-ups.' },
];

const bridalTips = [
  'Book your artist and trial at least 1 to 2 months ahead.',
  'Start a basic skin care routine and facials a few weeks before the wedding.',
  'Avoid trying new skin products in the last week.',
  'Drink enough water and sleep well the night before.',
  'Carry your outfit and jewellery photos to the trial.',
];

const makeupFaqs = [
  {
    q: 'How long does bridal makeup take?',
    a: 'Usually 2 to 3 hours, including hair and draping.',
  },
  {
    q: 'Do you offer a makeup trial?',
    a: 'Yes, a trial session helps finalise your look. The trial fee is usually adjusted if you confirm the booking.',
  },
  {
    q: 'Will the makeup last the whole day?',
    a: 'With proper skin prep and setting products, the look is designed to last through long functions. We also give touch-up tips.',
  },
  {
    q: 'Do you do makeup at my home or venue?',
    a: 'Yes, home-visit service is available for brides and parties. Please book early.',
  },
  {
    q: 'What advance do I need to pay?',
    a: 'A booking advance is taken to reserve your date. It is adjusted in the final bill.',
  },
];

export default function MakeupPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'HD Bridal Makeup',
    eventDate: '',
    message: '',
    website: '', // honeypot
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please enter your full name.';
    const digitsOnly = formData.phone.replace(/\D/g, '');
    const cleanPhone = digitsOnly.length > 10 && digitsOnly.startsWith('91') ? digitsOnly.slice(2) : digitsOnly;
    if (!cleanPhone || cleanPhone.length !== 10) {
      errors.phone = 'Please enter a valid 10-digit phone number.';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'makeup' }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: 'HD Bridal Makeup',
          eventDate: '',
          message: '',
          website: '',
        });
      } else {
        setSubmitError(data.message || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err) {
      setSubmitError('Unable to submit enquiry. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filtered Price Table Rows
  const categories = ['All', 'Bridal', 'Pre-wedding', 'Party', 'Natural'];
  const filteredPrices = activeTab === 'All' ? makeupPrices : makeupPrices.filter((p) => p.category === activeTab);

  return (
    <>
      <Head>
        <title>{`Bridal and Party Makeup Artist in ${siteConfig.city}`}</title>
        <meta
          name="description"
          content={`Book a professional bridal, engagement or party makeup artist in ${siteConfig.city}. HD and natural looks, trials and home visits available at ${siteConfig.rawName}.`}
        />
        <link rel="canonical" href={`${siteConfig.siteUrl}/services/makeup`} />
        <meta property="og:title" content={`Bridal and Party Makeup Artist in ${siteConfig.city}`} />
        <meta
          property="og:description"
          content={`Book a professional bridal, engagement or party makeup artist in ${siteConfig.city}. HD and natural looks, trials and home visits available.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteConfig.siteUrl}/services/makeup`} />
      </Head>

      {/* SECTION 1: PAGE BANNER */}
      <div className="page-banner">
        {/* IMAGE: Banner with a makeup artist at work or a finished bridal look, size 1920 x 600 px */}
        <div className="page-banner-bg" />
        <div className="container page-banner-content">
          <div className="page-breadcrumb">
            <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span>Makeup</span>
          </div>
          <h1>Best Makeup Artist in {siteConfig.city} for Bridal and Party Makeup</h1>
          <p>Flawless, long-lasting looks that suit your skin tone, outfit and style.</p>
          <div className="page-banner-actions">
            <a href="#enquiry-form" className="btn btn-primary">
              Book Makeup Appointment
            </a>
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
            <div className="service-intro-text reveal reveal-left">
              <div className="section-header text-left" style={{ marginBottom: '24px' }}>
                <span className="section-eyebrow">Artistry & Technique</span>
                <h2 className="section-title">Makeup That Enhances You</h2>
                <div className="section-divider" />
              </div>
              <p>
                Makeup should enhance your natural features, not hide them. At {siteConfig.rawName}, our artists first
                study your skin tone, undertone, face shape and outfit, then design a look that photographs well and stays
                fresh for hours.
              </p>
              <p>
                We use professional, skin-friendly products, and we prepare your skin properly before applying makeup,
                because a good base is the secret of a long-lasting finish.
              </p>
            </div>

            <div className="service-intro-media reveal reveal-right">
              {/* IMAGE: One large photo beside the introduction (makeup artist with a bride), size 800 x 800 px */}
              <div className="image-placeholder">
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                <span className="placeholder-label">Add makeup artist photo</span>
                <span className="placeholder-dim">800 x 800 px</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MAKEUP FOR EVERY OCCASION */}
      <section className="section-padding bg-blush">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Versatile Styles</span>
            <h2 className="section-title">Makeup for Every Occasion</h2>
            <div className="section-divider" />
          </div>

          <div className="zigzag-showcase reveal reveal-up">
            {occasionBlocks.map((item, idx) => (
              <div key={idx} className="zigzag-row">
                <div className="zigzag-media">
                  {item.hasImage ? (
                    <div className="image-placeholder">
                      <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                      <span className="placeholder-label">{item.title}</span>
                      <span className="placeholder-dim">700 x 700 px</span>
                    </div>
                  ) : (
                    <div className="image-placeholder" style={{ background: 'var(--blush)' }}>
                      <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                      <span className="placeholder-label">{item.title}</span>
                    </div>
                  )}
                </div>
                <div className="zigzag-text">
                  <span className="section-eyebrow">Look 0{idx + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW OUR MAKEUP PROCESS WORKS */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Step-by-step</span>
            <h2 className="section-title">How Our Makeup Process Works</h2>
            <div className="section-divider" />
          </div>

          <div className="timeline-track reveal reveal-up">
            {processSteps.map((step) => (
              <div key={step.num} className="timeline-step">
                <div className="timeline-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: MAKEUP PRICE LIST */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Rate Card</span>
            <h2 className="section-title">Makeup Price List</h2>
            <div className="section-divider" />
          </div>

          {/* Category Tabs */}
          <div className="gallery-filters reveal reveal-up" style={{ marginBottom: '32px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`gallery-filter-btn ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="menu-price-container reveal reveal-up">
            <div className="menu-price-list">
              {filteredPrices.map((row, idx) => (
                <div key={idx} className="menu-price-item">
                  <div className="menu-price-header">
                    <span className="menu-price-name">
                      {row.service}
                      <span className="menu-price-badge">{row.category}</span>
                    </span>
                    <span className="menu-price-dots" />
                    <span className="menu-price-val">{row.price}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="price-note" style={{ textAlign: 'center', marginTop: '24px' }}>
              Prices vary with the artist, products and home-visit distance. Confirm the final price when booking.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: BRIDAL TIPS */}
      <section className="section-padding bg-blush">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Preparation Guide</span>
            <h2 className="section-title">Bridal Makeup Tips Before Your Big Day</h2>
            <div className="section-divider" />
          </div>

          <div className="checklist-strip reveal reveal-up">
            {bridalTips.map((tip, idx) => (
              <div key={idx} className="checklist-strip-item">
                <div className="icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: GALLERY */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Real Transformations</span>
            <h2 className="section-title">Our Makeup Work</h2>
            <div className="section-divider" />
          </div>

          <div className="masonry-showcase reveal reveal-stagger">
            {[...Array(12)].map((_, idx) => (
              <div key={idx} className="masonry-item">
                {/* IMAGE: 12 photos in a masonry grid, each 768 x 960 px */}
                <div className="image-placeholder">
                  <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  <span className="placeholder-label">Add makeup photo</span>
                  <span className="placeholder-dim">768 x 960 px</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Got Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="section-divider" />
          </div>

          <div className="faq-list reveal reveal-up">
            {makeupFaqs.map((faq, idx) => {
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

      {/* SECTION 9: ENQUIRY FORM */}
      <section className="section-padding bg-blush" id="enquiry-form">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Reserve Your Date</span>
            <h2 className="section-title">Enquire About Makeup</h2>
            <div className="section-divider" />
          </div>

          <div className="contact-layout-grid reveal reveal-up">
            <div className="contact-info-col">
              <div className="contact-card">
                <div className="icon-circle">
                  <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </div>
                <h3>Bridal Trial Session</h3>
                <p>We recommend booking a trial session 4 to 6 weeks before your big day to test hairstyles and foundation shades.</p>
              </div>

              <div className="contact-card">
                <div className="icon-circle">
                  <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3>On-Venue Service</h3>
                <p>Home and venue visits are available across {siteConfig.city} and surrounding areas for weddings and group party bookings.</p>
              </div>

              <div className="contact-card">
                <div className="icon-circle">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
                </div>
                <h3>Instant Confirmation</h3>
                <p>Need urgent booking? Call us directly at <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} style={{ color: 'var(--rose)', fontWeight: 600 }}>{siteConfig.phone}</a>.</p>
              </div>
            </div>

            <div className="contact-form-col">
              <div className="service-form-wrapper" style={{ margin: 0, maxWidth: '100%' }}>
                {submitSuccess ? (
                  <div className="form-success-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Thank you. We have received your request and will call you shortly to confirm your appointment.</span>
                  </div>
                ) : null}

                {submitError ? (
                  <div className="form-error" style={{ marginBottom: '16px', fontSize: '0.95rem' }}>
                    {submitError}
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} noValidate>
                  {/* Anti-spam Honeypot Field */}
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="hidden-honeypot"
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  <div className="form-group">
                    <label className="form-label" htmlFor="makeup-name">Full Name *</label>
                    <input
                      id="makeup-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`form-input ${formErrors.name ? 'has-error' : ''}`}
                      placeholder="Your full name"
                      required
                    />
                    {formErrors.name && <div className="form-error">{formErrors.name}</div>}
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="makeup-phone">Phone Number *</label>
                      <input
                        id="makeup-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`form-input ${formErrors.phone ? 'has-error' : ''}`}
                        placeholder="10-digit mobile number"
                        required
                      />
                      {formErrors.phone && <div className="form-error">{formErrors.phone}</div>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="makeup-email">Email (Optional)</label>
                      <input
                        id="makeup-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="makeup-service">Select Makeup Look *</label>
                      <select
                        id="makeup-service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        {makeupPrices.map((item, idx) => (
                          <option key={idx} value={item.service}>
                            {item.service} ({item.price})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="makeup-date">Event Date</label>
                      <input
                        id="makeup-date"
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="makeup-msg">Message / Venue Details</label>
                    <textarea
                      id="makeup-msg"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="3"
                      className="form-textarea"
                      placeholder="Tell us about your event, venue location, or any specific styling requests..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-block"
                  >
                    {isSubmitting ? 'Sending Request...' : 'Send Enquiry'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
