// pages/contact.js
// Contact and Book Appointment Page with Full Booking Form, Map Embed, and Client Reviews

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import siteConfig from '../lib/site';

const contactReviews = [
  {
    name: 'Ritu Kapoor',
    service: 'Complete Bridal Package',
    rating: 5,
    text: 'Every single member of the team was so warm and attentive. They made my wedding day preparations completely stress-free!',
  },
  {
    name: 'Divya Sen',
    service: 'Facial and Hair Spa',
    rating: 5,
    text: 'Hands down the most hygienic and relaxing parlour in town. Very clean tools and honest product advice.',
  },
  {
    name: 'Meenakshi Iyer',
    service: 'Party Makeup',
    rating: 5,
    text: 'My makeup stayed fresh from afternoon till late night reception without any cakey feeling. Will always recommend them.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Makeup',
    eventDate: '',
    preferredTime: 'Morning',
    message: '',
    website: '', // honeypot
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please provide your full name.';
    const digitsOnly = formData.phone.replace(/\D/g, '');
    const cleanPhone = digitsOnly.length > 10 && digitsOnly.startsWith('91') ? digitsOnly.slice(2) : digitsOnly;
    if (!cleanPhone || cleanPhone.length !== 10) {
      errors.phone = 'Please provide a valid 10-digit phone number.';
    }
    if (!formData.service) errors.service = 'Please select a service.';
    if (!formData.eventDate) errors.eventDate = 'Please select your preferred date.';
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
        body: JSON.stringify({ ...formData, source: 'contact' }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: 'Makeup',
          eventDate: '',
          preferredTime: 'Morning',
          message: '',
          website: '',
        });
      } else {
        setSubmitError(data.message || 'Failed to submit booking. Please try again.');
      }
    } catch (err) {
      setSubmitError('Unable to connect to booking system. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>{`Contact and Book Appointment | ${siteConfig.rawName}`}</title>
        <meta
          name="description"
          content={`Call, WhatsApp or visit ${siteConfig.rawName} in ${siteConfig.city}. Find our address, opening hours and booking form, and reserve your appointment today.`}
        />
        <link rel="canonical" href={`${siteConfig.siteUrl}/contact`} />
        <meta property="og:title" content={`Contact and Book Appointment | ${siteConfig.rawName}`} />
        <meta
          property="og:description"
          content={`Call, WhatsApp or visit ${siteConfig.rawName} in ${siteConfig.city}. Find our address, opening hours and booking form.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteConfig.siteUrl}/contact`} />
      </Head>

      {/* SECTION 1: PAGE BANNER */}
      <div className="page-banner">
        {/* IMAGE: A banner at the top, size 1920 x 400 px */}
        <div className="page-banner-bg" />
        <div className="container page-banner-content">
          <div className="page-breadcrumb">
            <Link href="/">Home</Link> / <span>Contact Us</span>
          </div>
          <h1>Contact {siteConfig.rawName}</h1>
          <p>Call, message or visit us. We are happy to help you choose the right service.</p>
        </div>
      </div>

      {/* SECTION 2 & 3: TWO COLUMNS (CONTACT INFO + BOOKING FORM) */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left Column: Stacked Contact Details */}
            <div className="contact-info-list">
              <div className="section-header text-left" style={{ marginBottom: '24px' }}>
                <span className="section-eyebrow">Get in Touch</span>
                <h2 className="section-title">Visit or Contact Us</h2>
                <div className="section-divider" />
              </div>

              {/* Address Card */}
              <div className="contact-info-card">
                <div className="icon-circle">
                  <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div>
                  <div className="contact-card-label">Address</div>
                  <div className="contact-card-value">{siteConfig.fullAddress}</div>
                  <div className="contact-card-sub">{siteConfig.city} - {siteConfig.pinCode}</div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="contact-info-card">
                <div className="icon-circle">
                  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <div>
                  <div className="contact-card-label">Phone Numbers</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="contact-card-value">
                      {siteConfig.phone}
                    </a>
                    <a href={`tel:${siteConfig.phone2.replace(/\s+/g, '')}`} className="contact-card-value">
                      {siteConfig.phone2}
                    </a>
                  </div>
                  <div className="contact-card-sub">Mon-Sun, 10:00 AM - 8:00 PM</div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="contact-info-card">
                <div className="icon-circle" style={{ backgroundColor: '#E8F8EE', color: 'var(--whatsapp)' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-card-label">WhatsApp Chat</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-card-value"
                    >
                      {siteConfig.phone} (Direct Chat)
                    </a>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp2.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-card-value"
                    >
                      {siteConfig.phone2} (Support)
                    </a>
                  </div>
                  <div className="contact-card-sub">Instant messaging & consult</div>
                </div>
              </div>

              {/* Email Card */}
              <div className="contact-info-card">
                <div className="icon-circle">
                  <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <div>
                  <div className="contact-card-label">Email Address</div>
                  <a href={`mailto:${siteConfig.email}`} className="contact-card-value">
                    {siteConfig.email}
                  </a>
                  <div className="contact-card-sub">Enquiries & feedback</div>
                </div>
              </div>

              {/* Opening Hours & Bridal Card */}
              <div className="contact-info-card">
                <div className="icon-circle">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                </div>
                <div>
                  <div className="contact-card-label">Opening Hours</div>
                  <div className="contact-card-value">{siteConfig.openingHours}</div>
                  <div className="contact-card-sub" style={{ color: 'var(--rose)', fontWeight: 600 }}>
                    Bridal Bookings: {siteConfig.bridalBookingNote}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Booking and Enquiry Form */}
            <div className="contact-form-card">
              <div className="section-header text-left" style={{ marginBottom: '24px' }}>
                <span className="section-eyebrow">Online Reservation</span>
                <h2 className="section-title">Book an Appointment</h2>
                <div className="section-divider" />
              </div>

              {submitSuccess ? (
                <div className="form-success-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    Thank you. We have received your request and will call you shortly to confirm your appointment.
                  </span>
                </div>
              ) : null}

              {submitError ? (
                <div className="form-error" style={{ marginBottom: '16px', fontSize: '0.95rem' }}>
                  {submitError}
                </div>
              ) : null}

              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot field */}
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
                  <label className="form-label" htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`form-input ${formErrors.name ? 'has-error' : ''}`}
                    placeholder="Enter your full name"
                    required
                  />
                  {formErrors.name && <div className="form-error">{formErrors.name}</div>}
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-phone">Phone Number *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`form-input ${formErrors.phone ? 'has-error' : ''}`}
                      placeholder="10-digit phone number"
                      required
                    />
                    {formErrors.phone && <div className="form-error">{formErrors.phone}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Email (Optional)</label>
                    <input
                      id="contact-email"
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
                    <label className="form-label" htmlFor="contact-service">Service *</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`form-select ${formErrors.service ? 'has-error' : ''}`}
                      required
                    >
                      <option value="Makeup">Makeup</option>
                      <option value="Facial">Facial</option>
                      <option value="Hair">Hair</option>
                      <option value="Hair Removal">Hair Removal</option>
                      <option value="Massage">Massage</option>
                      <option value="Mani-Pedi">Mani-Pedi</option>
                      <option value="Academy">Academy</option>
                    </select>
                    {formErrors.service && <div className="form-error">{formErrors.service}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-date">Preferred Date *</label>
                    <input
                      id="contact-date"
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className={`form-input ${formErrors.eventDate ? 'has-error' : ''}`}
                      required
                    />
                    {formErrors.eventDate && <div className="form-error">{formErrors.eventDate}</div>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-time">Preferred Time</label>
                  <select
                    id="contact-time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="Morning">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon">Afternoon (1:00 PM - 5:00 PM)</option>
                    <option value="Evening">Evening (5:00 PM - 8:00 PM)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="form-textarea"
                    placeholder="Any specific hairstyle, skin requirements or bridal notes..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-block"
                >
                  {isSubmitting ? 'Sending Request...' : 'Send Enquiry'}
                </button>

                <p className="form-notice-note">
                  Your details are used only to contact you about your booking.
                </p>
              </form>
            </div>
          </div>

          {/* SECTION 4: GOOGLE MAP EMBED */}
          <div className="map-container">
            <div className="section-header">
              <span className="section-eyebrow">Find Our Parlour</span>
              <h2 className="section-title">Our Location</h2>
              <div className="section-divider" />
            </div>

            <div className="map-frame-wrapper">
              {/* GOOGLE MAP EMBED: Paste your Google Maps <iframe> code here */}
              <div className="map-placeholder-box">
                <img
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  style={{
                    width: '88px',
                    height: '88px',
                    borderRadius: '50%',
                    border: '3px solid var(--gold)',
                    objectFit: 'cover',
                    boxShadow: '0 6px 20px rgba(201, 162, 77, 0.3)',
                    margin: '0 auto 16px auto',
                  }}
                />
                <h3>{siteConfig.rawName}</h3>
                <p style={{ color: 'var(--gold)', fontWeight: 600, marginTop: '-4px', marginBottom: '8px' }}>
                  Managed by {siteConfig.ownerName}
                </p>
                <p>{siteConfig.fullAddress}</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${siteConfig.rawName} ${siteConfig.city}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* SECTION 5: WHAT OUR CLIENTS SAY */}
          <div style={{ marginTop: '96px' }}>
            <div className="section-header">
              <span className="section-eyebrow">Client Feedback</span>
              <h2 className="section-title">What Our Clients Say</h2>
              <div className="section-divider" />
            </div>

            {/* 3 Client Reviews */}
            <div className="reviews-grid">
              {contactReviews.map((review, idx) => (
                <div key={idx} className="review-card">
                  <div className="review-quote-icon">“</div>
                  <p className="review-text">"{review.text}"</p>
                  <div className="review-stars">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                  </div>
                  <div className="review-client">
                    <div className="review-avatar-placeholder">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="review-client-name">{review.name}</div>
                      <div className="review-client-service">{review.service}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 3 Review Screenshot Image Placeholders */}
            <div className="review-screenshots-grid">
              {[...Array(3)].map((_, idx) => (
                <div key={idx} className="review-screenshot-card">
                  {/* IMAGE: 3 client review images under What Our Clients Say (each 500 x 300 px) */}
                  <div className="image-placeholder">
                    <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    <span className="placeholder-label">Add review screenshot</span>
                    <span className="placeholder-dim">500 x 300 px</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              {/* LINK: Google reviews page link */}
              <a
                href={siteConfig.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Read More Reviews on Google
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
