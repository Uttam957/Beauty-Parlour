// pages/about.js
// About Us page: Story, Founder note, Vision & Mission, Values, Team, Hygiene Promise

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import siteConfig from '../lib/site';

const valuesData = [
  {
    title: 'Hygiene first',
    desc: 'Sterilised tools, clean linen and disposable items where required.',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
  },
  {
    title: 'Honest advice',
    desc: 'We recommend only what your skin, hair or occasion really needs.',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
    ),
  },
  {
    title: 'Skill and training',
    desc: 'Our team keeps learning new techniques and trends.',
    icon: (
      <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
    ),
  },
  {
    title: 'Respect and privacy',
    desc: 'A ladies-only space where you can relax without worry.',
    icon: (
      <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
    ),
  },
  {
    title: 'Value for money',
    desc: 'Clear prices and packages for every budget.',
    icon: (
      <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
    ),
  },
];

const teamData = [
  { name: 'Kavita Verma', role: 'Senior Makeup Artist', exp: '8+ years experience' },
  { name: 'Meera Sen', role: 'Senior Hair Stylist', exp: '7+ years experience' },
  { name: 'Pooja Nair', role: 'Skin Care Specialist', exp: '6+ years experience' },
  { name: 'Sunita Joshi', role: 'Nail & Spa Therapist', exp: '5+ years experience' },
];

const hygienePoints = [
  'Tools are cleaned and sterilised after every client.',
  'Fresh towels and disposable spatulas, strips and gloves are used for waxing and facials.',
  'Work stations are sanitised between appointments.',
  'Staff wash and sanitise their hands before every service.',
  'Products are stored properly and used before their expiry date.',
];

export default function AboutPage() {
  const [counts, setCounts] = useState({ clients: 0, services: 0, brides: 0, years: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const countersRef = useRef(null);

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

  return (
    <>
      <Head>
        <title>{`About Us | ${siteConfig.rawName}, Ladies Parlour in ${siteConfig.city}`}</title>
        <meta
          name="description"
          content={`Meet the team behind ${siteConfig.rawName}. Learn about our experience, hygiene standards and our promise of safe, honest beauty care for every woman.`}
        />
        <link rel="canonical" href={`${siteConfig.siteUrl}/about`} />
        <meta property="og:title" content={`About Us | ${siteConfig.rawName}, Ladies Parlour in ${siteConfig.city}`} />
        <meta
          property="og:description"
          content={`Meet the team behind ${siteConfig.rawName}. Learn about our experience, hygiene standards and our promise of safe, honest beauty care.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteConfig.siteUrl}/about`} />
      </Head>

      {/* SECTION 1: PAGE BANNER */}
      <div className="page-banner">
        {/* IMAGE: Page banner background, size 1920 x 500 px */}
        <div className="page-banner-bg" />
        <div className="container page-banner-content">
          <div className="page-breadcrumb">
            <Link href="/">Home</Link> / <span>About Us</span>
          </div>
          <h1>About {siteConfig.rawName}</h1>
          <p>A trusted ladies beauty parlour in {siteConfig.city}, built on skill, hygiene and honest care.</p>
        </div>
      </div>

      {/* SECTION 2: OUR STORY (EDITORIAL NARRATIVE SPLIT) */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="section-header reveal reveal-up">
            <span className="section-eyebrow">Our Journey</span>
            <h2 className="section-title">Our Story</h2>
            <div className="section-divider" />
          </div>

          <div className="story-content reveal reveal-up" style={{ maxWidth: '840px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.8' }}>
            <p>
              {siteConfig.rawName} began with a simple idea: every woman deserves a beauty experience that feels
              personal, safe and unhurried. What started as a small studio has grown into a full-service parlour trusted
              by brides, families and regular clients across {siteConfig.city}.
            </p>
            <p>
              Over the years we have invested in training, better products and a cleaner, more comfortable space, because
              we know that good results come from good habits. Many of our clients now come to us for every occasion,
              from a simple haircut to their own wedding day.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: MEET THE FOUNDER (ASYMMETRICAL IMAGE & BIO QUOTE SPOTLIGHT) */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="founder-grid">
            {/* Founder Photo */}
            <div className="founder-image-wrap reveal reveal-left">
              <div className="founder-gold-frame" />
              <div className="founder-image-box">
                {/* IMAGE: Founder portrait beside the note, size 640 x 1024 px (portrait) */}
                <div className="image-placeholder" style={{ height: '100%', minHeight: '440px', background: 'linear-gradient(135deg, #fff0f3 0%, #faedf0 100%)' }}>
                  <img
                    src={siteConfig.logo}
                    alt={siteConfig.ownerName}
                    loading="lazy"
                    width="140"
                    height="140"
                    style={{
                      width: '140px',
                      height: '140px',
                      borderRadius: '50%',
                      border: '3px solid var(--gold)',
                      objectFit: 'cover',
                      boxShadow: '0 8px 24px rgba(201, 162, 77, 0.3)',
                      marginBottom: '16px',
                    }}
                  />
                  <span className="placeholder-label" style={{ fontWeight: 600, color: 'var(--plum)', fontSize: '1rem' }}>
                    {siteConfig.ownerName}
                  </span>
                  <span className="placeholder-dim">Founder & Head Beautician</span>
                </div>
              </div>
            </div>

            {/* Note & Highlighted Quote */}
            <div className="founder-text-wrap reveal reveal-right">
              <div className="section-header text-left" style={{ marginBottom: '24px' }}>
                <span className="section-eyebrow">Leadership</span>
                <h2 className="section-title">A Note from Our Founder</h2>
                <div className="section-divider" />
              </div>

              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '28px' }}>
                {siteConfig.ownerName} has 12 years of experience in bridal makeup, hair styling and skin care. After
                working with leading salons and training under senior artists, she started {siteConfig.rawName} to offer
                professional beauty care in a warm, respectful setting.
              </p>

              <div className="founder-quote-box">
                <div className="founder-quote-mark">“</div>
                <div className="founder-quote-text">
                  "My goal is that every client leaves feeling like the best version of herself, and comes back because
                  she trusts us."
                </div>
                <div className="founder-author">— {siteConfig.ownerName}, Founder, {siteConfig.rawName}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: VISION AND MISSION (ALTERNATING ZIG-ZAG ROWS) */}
      <section className="section-padding bg-blush">
        <div className="container">
          <div className="section-header reveal reveal-up">
            <span className="section-eyebrow">Guiding Principles</span>
            <h2 className="section-title">Vision and Mission</h2>
            <div className="section-divider" />
          </div>

          <div className="zigzag-showcase reveal reveal-up">
            {/* Our Vision */}
            <div className="zigzag-row">
              <div className="zigzag-media">
                {/* IMAGE: One photo beside Our Vision, 800 x 600 px */}
                <div className="image-placeholder" style={{ height: '100%' }}>
                  <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  <span className="placeholder-label">Add image here</span>
                  <span className="placeholder-dim">800 x 600 px</span>
                </div>
              </div>
              <div className="zigzag-text">
                <h3>Our vision</h3>
                <p>
                  To be the most trusted beauty destination for women in {siteConfig.city}, known for quality, hygiene and
                  genuine care.
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div className="zigzag-row">
              <div className="zigzag-media">
                {/* IMAGE: One photo beside Our Mission, 800 x 600 px */}
                <div className="image-placeholder" style={{ height: '100%' }}>
                  <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  <span className="placeholder-label">Add image here</span>
                  <span className="placeholder-dim">800 x 600 px</span>
                </div>
              </div>
              <div className="zigzag-text">
                <h3>Our mission</h3>
                <p>
                  To deliver professional beauty services using skilled people, safe products and modern techniques, while
                  helping every client feel confident and valued.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR VALUES (ICON ROW WITH THIN DIVIDERS) */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="section-header reveal reveal-up">
            <span className="section-eyebrow">What Drives Us</span>
            <h2 className="section-title">Our Values</h2>
            <div className="section-divider" />
          </div>

          <div className="icon-feature-row cols-6 reveal reveal-up">
            {valuesData.map((val, idx) => (
              <div key={idx} className="icon-feature-item">
                <div className="icon-circle">{val.icon}</div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR TEAM (CIRCULAR PORTRAITS WITH NAMES & HOVER DETAILS) */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header reveal reveal-up">
            <span className="section-eyebrow">Skilled Professionals</span>
            <h2 className="section-title">Meet Our Experts</h2>
            <div className="section-divider" />
          </div>

          <div className="team-circular-grid reveal reveal-stagger">
            {teamData.map((member, idx) => (
              <div key={idx} className="team-circular-item">
                <div className="team-circular-avatar">
                  {/* IMAGE: One portrait per team member, each 400 x 500 px */}
                  <div className="image-placeholder">
                    <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    <span className="placeholder-label">Add team photo</span>
                    <span className="placeholder-dim">400 x 500 px</span>
                  </div>
                </div>
                <div className="team-circular-name">{member.name}</div>
                <div className="team-circular-role">{member.role}</div>
                <div className="team-circular-exp">{member.exp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: OUR HYGIENE PROMISE (2-COLUMN CLEAN CHECKLIST STRIP) */}
      <section className="section-padding bg-blush">
        <div className="container">
          <div className="section-header reveal reveal-up">
            <span className="section-eyebrow">Your Safety First</span>
            <h2 className="section-title">Our Hygiene Promise</h2>
            <div className="section-divider" />
          </div>

          <div className="checklist-strip reveal reveal-up">
            {hygienePoints.map((point, idx) => (
              <div key={idx} className="checklist-strip-item">
                <div className="icon-circle" style={{ width: '32px', height: '32px' }}>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: COUNTERS & CALL TO ACTION (HORIZONTAL STAT STRIP & ACTION) */}
      <section className="counters-section reveal reveal-up" ref={countersRef}>
        <div className="container">
          <div className="counters-grid" style={{ marginBottom: '56px' }}>
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

          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'var(--white)', marginBottom: '24px' }}>Ready to visit us?</h2>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
