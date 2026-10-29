// pages/academy.js
// Beauty Academy Page: Vocational Beauty, Makeup and Hair Training Courses

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import siteConfig from '../lib/site';

const coursesList = [
  {
    name: 'Basic beauty course',
    duration: '1 month',
    learn: 'Cleanups, threading, waxing, basic facial, mani-pedi',
    fees: 'Rs. 12,000',
  },
  {
    name: 'Professional makeup course',
    duration: '1 month',
    learn: 'Party, engagement and HD bridal makeup, product knowledge',
    fees: 'Rs. 25,000',
  },
  {
    name: 'Hair course',
    duration: '1 month',
    learn: 'Cuts, blow-dry, styling, colour basics, hair spa',
    fees: 'Rs. 20,000',
  },
  {
    name: 'Advanced beauty and makeup',
    duration: '3 months',
    learn: 'Skin care, advanced makeup, hairstyling, saree draping',
    fees: 'Rs. 55,000',
  },
  {
    name: 'Master course',
    duration: '6 months',
    learn: 'All services plus parlour management',
    fees: 'Rs. 90,000',
  },
];

const whyLearnPoints = [
  'Experienced trainers who work in the industry',
  'Live practice on real models',
  'Small batches for personal attention',
  'Course certificate on completion',
  'Guidance on starting your own parlour or freelance work',
  'Placement support, where available',
];

const admissionSteps = [
  { num: '1', title: 'Fill form or call', text: 'Fill the enquiry form or call us directly to book your counselling.' },
  { num: '2', title: 'Counselling session', text: 'Visit for a counselling session and course selection with mentors.' },
  { num: '3', title: 'Reserve your batch', text: 'Pay the admission fee and reserve your batch timing.' },
  { num: '4', title: 'Start your classes', text: 'Begin practical hands-on training on live models.' },
];

const academyFaqs = [
  {
    q: 'Will I get a certificate?',
    a: 'Yes, on completing the course and assessment.',
  },
  {
    q: 'Do I need to bring my own kit?',
    a: 'A starter kit can be included or offered separately. Practice materials are provided during classes.',
  },
  {
    q: 'Are there weekend or evening batches?',
    a: 'Yes, morning batches (10:00 AM – 1:00 PM) and afternoon batches (2:00 PM – 5:00 PM) are available with flexible schedules for working women.',
  },
  {
    q: 'Can I pay fees in instalments?',
    a: 'Yes, instalment plans are available for our 3-month and 6-month diploma courses.',
  },
];

export default function AcademyPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState('Basic beauty course');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'Basic beauty course',
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

  const handleEnquireClick = (courseName) => {
    setSelectedCourse(courseName);
    setFormData((prev) => ({ ...prev, course: courseName }));
    const formElement = document.getElementById('academy-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
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
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    const digitsOnly = formData.phone.replace(/\D/g, '');
    const cleanPhone = digitsOnly.length > 10 && digitsOnly.startsWith('91') ? digitsOnly.slice(2) : digitsOnly;
    if (!cleanPhone || cleanPhone.length !== 10) {
      errors.phone = 'Please provide a valid 10-digit phone number.';
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
        body: JSON.stringify({ ...formData, source: 'academy' }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          course: 'Basic beauty course',
          message: '',
          website: '',
        });
      } else {
        setSubmitError(data.message || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err) {
      setSubmitError('Unable to send application right now. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>{`Beauty Academy in ${siteConfig.city} | Makeup and Hair Courses`}</title>
        <meta
          name="description"
          content={`Join practical makeup, hair and beauty courses at ${siteConfig.rawName} in ${siteConfig.city}. Small batches, live practice and certificate on completion.`}
        />
        <link rel="canonical" href={`${siteConfig.siteUrl}/academy`} />
        <meta property="og:title" content={`Beauty Academy in ${siteConfig.city} | Makeup and Hair Courses`} />
        <meta
          property="og:description"
          content={`Join practical makeup, hair and beauty courses at ${siteConfig.rawName} in ${siteConfig.city}.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteConfig.siteUrl}/academy`} />
      </Head>

      {/* SECTION 1: PAGE BANNER */}
      <div className="page-banner">
        {/* IMAGE: Banner with students practising in class, size 1920 x 500 px */}
        <div className="page-banner-bg" />
        <div className="container page-banner-content">
          <div className="page-breadcrumb">
            <Link href="/">Home</Link> / <span>Beauty Academy</span>
          </div>
          <h1>Beauty Academy in {siteConfig.city}: Learn Makeup, Hair and Skin Care</h1>
          <p>Practical, hands-on training to start a career or your own parlour.</p>
          <div className="page-banner-actions">
            <a href="#academy-form" className="btn btn-primary">
              Enquire Now
            </a>
            {/* LINK: PDF Course brochure download link placeholder */}
            <button
              type="button"
              className="btn btn-secondary"
              style={{ color: 'var(--white)', borderColor: 'var(--gold)' }}
              onClick={() => alert('Brochure download will be available shortly. Please submit an enquiry to receive syllabus by WhatsApp/Email.')}
            >
              Download Course Details
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 2: ABOUT THE ACADEMY (EDITORIAL LEAD INTRO) */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="services-intro-box reveal reveal-up">
            Our academy is for students, homemakers and working women who want to learn professional beauty skills.
            Classes are practical and small-batch, so every student gets personal attention and plenty of practice on
            models.
          </div>
        </div>
      </section>

      {/* SECTION 3: COURSES (MENU-STYLE COURSE CATALOG WITH DOTTED LINES & BADGES) */}
      <section className="section-padding bg-blush">
        <div className="container">
          <div className="section-header reveal reveal-up">
            <span className="section-eyebrow">Professional Curriculum</span>
            <h2 className="section-title">Courses</h2>
            <div className="section-divider" />
          </div>

          <div className="menu-price-container reveal reveal-up">
            <div className="menu-price-list">
              {coursesList.map((course, idx) => (
                <div key={idx} className="menu-price-item">
                  <div className="menu-price-header">
                    <span className="menu-price-name">
                      {course.name}
                      <span className="menu-price-badge">{course.duration}</span>
                    </span>
                    <span className="menu-price-dots" />
                    <span className="menu-price-val">{course.fees}</span>
                  </div>
                  <div className="menu-price-details">
                    <p className="menu-price-desc">
                      <strong>What you learn: </strong>
                      {course.learn}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleEnquireClick(course.name)}
                      className="btn btn-secondary"
                      style={{ padding: '8px 20px', fontSize: '0.88rem' }}
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY LEARN WITH US (ICON ROW WITH THIN DIVIDERS) */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header reveal reveal-up">
            <span className="section-eyebrow">Student Advantages</span>
            <h2 className="section-title">Why Learn With Us</h2>
            <div className="section-divider" />
          </div>

          <div className="icon-feature-row cols-6 reveal reveal-up">
            {whyLearnPoints.map((point, idx) => (
              <div key={idx} className="icon-feature-item">
                <div className="icon-circle" style={{ width: '42px', height: '42px' }}>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h4>Advantage {idx + 1}</h4>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHO CAN JOIN (FULL-WIDTH HIGHLIGHT STRIP) */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="highlight-strip reveal reveal-up" style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-eyebrow" style={{ display: 'block', marginBottom: '8px' }}>Eligibility</span>
            <h3 style={{ marginBottom: '12px' }}>Who Can Join</h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text)' }}>
              Any woman aged 16 and above, with basic reading skills. No previous experience is needed for beginner
              courses.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: ADMISSION PROCESS (NUMBERED HORIZONTAL TIMELINE) */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header reveal reveal-up">
            <span className="section-eyebrow">How to Enroll</span>
            <h2 className="section-title">Admission Process</h2>
            <div className="section-divider" />
          </div>

          <div className="timeline-track reveal reveal-up">
            {admissionSteps.map((step) => (
              <div key={step.num} className="timeline-step">
                <div className="timeline-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: STUDENT RESULTS (DYNAMIC STAGGERED MASONRY GRID - THE ONE VISUAL GRID) */}
      <section className="section-padding bg-blush">
        <div className="container">
          <div className="section-header reveal reveal-up">
            <span className="section-eyebrow">Student Success</span>
            <h2 className="section-title">Student Results</h2>
            <div className="section-divider" />
            <p className="section-subtitle">A glimpse of our students practicing and receiving their certifications.</p>
          </div>

          <div className="masonry-showcase reveal reveal-stagger">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="masonry-item">
                {/* IMAGE: 4 to 6 student photos or certificate photos, each 600 x 600 px */}
                <div className="image-placeholder">
                  <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  <span className="placeholder-label">Add student/certificate photo</span>
                  <span className="placeholder-dim">600 x 600 px</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ (ACCORDION LIST) */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header reveal reveal-up">
            <span className="section-eyebrow">Course FAQs</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="section-divider" />
          </div>

          <div className="faq-list reveal reveal-up">
            {academyFaqs.map((faq, idx) => {
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

      {/* SECTION 9: ENQUIRY FORM (SPLIT LAYOUT: INFO/PERKS LEFT + FORM RIGHT) */}
      <section className="section-padding bg-blush" id="academy-form">
        <div className="container">
          <div className="section-header reveal reveal-up">
            <span className="section-eyebrow">Apply Today</span>
            <h2 className="section-title">Course Enquiry</h2>
            <div className="section-divider" />
          </div>

          <div className="contact-layout-grid reveal reveal-up">
            {/* Left Column: Academy Counseling Details & Perks */}
            <div className="contact-info-list">
              <div className="highlight-strip" style={{ marginBottom: '20px' }}>
                <h4 style={{ color: 'var(--plum)', marginBottom: '8px' }}>Personal Counseling Session</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--muted)' }}>
                  Visit our academy in {siteConfig.city} for a 1-on-1 counseling session with senior mentors to choose the right syllabus and batch timings for you.
                </p>
              </div>

              <div className="contact-info-card">
                <div className="icon-circle">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <div className="contact-card-label">Batch Schedules</div>
                  <div className="contact-card-value">Morning (10 AM - 1 PM) & Afternoon (2 PM - 5 PM)</div>
                  <div className="contact-card-sub">Flexible schedules available for working women</div>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="icon-circle">
                  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <div className="contact-card-label">Direct Counselor Call</div>
                  <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="contact-card-value">
                    {siteConfig.phone}
                  </a>
                  <div className="contact-card-sub">Mon-Sun 10:00 AM - 8:00 PM</div>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="icon-circle" style={{ backgroundColor: '#E8F8EE', color: 'var(--whatsapp)' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-card-label">WhatsApp Syllabus Request</div>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card-value"
                  >
                    Chat on WhatsApp
                  </a>
                  <div className="contact-card-sub">Get course PDF and fees breakdown</div>
                </div>
              </div>
            </div>

            {/* Right Column: Application Form */}
            <div className="contact-form-card" style={{ padding: '36px 32px' }}>
              {submitSuccess ? (
                <div className="form-success-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Thank you. We have received your request and will call you shortly to confirm your course registration.</span>
                </div>
              ) : null}

              {submitError ? (
                <div className="form-error" style={{ marginBottom: '16px', fontSize: '0.95rem' }}>
                  {submitError}
                </div>
              ) : null}

              <form onSubmit={handleSubmit} noValidate>
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
                  <label className="form-label" htmlFor="acad-name">Full Name *</label>
                  <input
                    id="acad-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`form-input ${formErrors.name ? 'has-error' : ''}`}
                    placeholder="Enter your name"
                    required
                  />
                  {formErrors.name && <div className="form-error">{formErrors.name}</div>}
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="acad-phone">Phone Number *</label>
                    <input
                      id="acad-phone"
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
                    <label className="form-label" htmlFor="acad-email">Email (Optional)</label>
                    <input
                      id="acad-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="acad-course">Select Course *</label>
                  <select
                    id="acad-course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    {coursesList.map((item, idx) => (
                      <option key={idx} value={item.name}>
                        {item.name} ({item.duration} - {item.fees})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="acad-msg">Message / Batch Preference</label>
                  <textarea
                    id="acad-msg"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="form-textarea"
                    placeholder="Tell us about your timing preference or any questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-block"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Submit Course Enquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
