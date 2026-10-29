// pages/gallery.js
// Gallery Page: Real Client Transformations with Category Filter & Lightbox Modal

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import siteConfig from '../lib/site';

// 24 Gallery Items configured as an editable array
const initialGalleryItems = [
  { id: 1, category: 'Bridal', title: 'Royal HD Bridal Look', alt: 'HD Bridal makeup by professional artist in City' },
  { id: 2, category: 'Bridal', title: 'Traditional Red Bridal Makeover', alt: 'Traditional bridal makeup look' },
  { id: 3, category: 'Bridal', title: 'Pastel Lehenga Bridal Makeup', alt: 'Contemporary pastel bridal makeover' },
  { id: 4, category: 'Bridal', title: 'Airbrush Reception Look', alt: 'Airbrush bridal reception makeup' },
  { id: 5, category: 'Party Makeup', title: 'Evening Glam & Smokey Eye', alt: 'Evening cocktail party makeup' },
  { id: 6, category: 'Party Makeup', title: 'Soft Nude Glow Makeup', alt: 'Natural soft glam makeup' },
  { id: 7, category: 'Party Makeup', title: 'Sangeet Shimmer Glam', alt: 'Festive sangeet makeup look' },
  { id: 8, category: 'Party Makeup', title: 'Haldi Fresh Dewy Glow', alt: 'Yellow haldi event dewy makeup' },
  { id: 9, category: 'Hair', title: 'Balayage Hair Colour', alt: 'Golden caramel balayage hair transformation' },
  { id: 10, category: 'Hair', title: 'Keratin Smoothing Finish', alt: 'Keratin silky hair smoothening' },
  { id: 11, category: 'Hair', title: 'Bridal Floral Bun Hairstyle', alt: 'Intricate bridal updo with real flowers' },
  { id: 12, category: 'Hair', title: 'Soft Waves & Highlights', alt: 'Textured soft beach waves' },
  { id: 13, category: 'Hair', title: 'Feather Layer Cut & Blowdry', alt: 'Feather layer haircut with volume blowdry' },
  { id: 14, category: 'Skin and Facial', title: 'O3+ Luxury Radiant Glow', alt: 'Glowing skin treatment after O3 facial' },
  { id: 15, category: 'Skin and Facial', title: 'Bridal Skin Polish Result', alt: 'Hydrated polished skin before wedding' },
  { id: 16, category: 'Skin and Facial', title: 'Deep Cleansing & De-Tan', alt: 'De-tan facial rejuvenation' },
  { id: 17, category: 'Skin and Facial', title: 'Diamond Brightening Treatment', alt: 'Diamond facial skin rejuvenation' },
  { id: 18, category: 'Nails', title: 'Bridal French Ombre Gel Nails', alt: 'Bridal French ombre nail extensions' },
  { id: 19, category: 'Nails', title: 'Chrome Mirror Nail Art', alt: 'Chrome rose gold gel polish nails' },
  { id: 20, category: 'Nails', title: 'Glitter Accent Acrylic Extensions', alt: 'Acrylic nail extensions with sparkle art' },
  { id: 21, category: 'Bridal', title: 'South Indian Muhurtham Look', alt: 'Temple jewellery bridal makeover' },
  { id: 22, category: 'Party Makeup', title: 'Classic Winged Liner & Bold Red Lip', alt: 'Timeless cocktail glam makeup' },
  { id: 23, category: 'Hair', title: 'Mermaid Braid for Engagement', alt: 'Messy mermaid braid with baby breath' },
  { id: 24, category: 'Nails', title: 'Minimalist Floral Nail Art', alt: 'Delicate hand-painted botanical nail art' },
];

const filterCategories = ['All', 'Bridal', 'Party Makeup', 'Hair', 'Skin and Facial', 'Nails'];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems =
    activeFilter === 'All'
      ? initialGalleryItems
      : initialGalleryItems.filter((item) => item.category === activeFilter);

  // Close lightbox on Escape key & keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <>
      <Head>
        <title>{`Our Work Gallery | ${siteConfig.rawName}, ${siteConfig.city}`}</title>
        <meta
          name="description"
          content={`See real bridal, party, hair, nail and skin care results from ${siteConfig.rawName}, ${siteConfig.city}. Get inspired and book your own look with us.`}
        />
        <link rel="canonical" href={`${siteConfig.siteUrl}/gallery`} />
        <meta property="og:title" content={`Our Work Gallery | ${siteConfig.rawName}, ${siteConfig.city}`} />
        <meta
          property="og:description"
          content={`See real bridal, party, hair, nail and skin care results from ${siteConfig.rawName}, ${siteConfig.city}.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteConfig.siteUrl}/gallery`} />
      </Head>

      {/* SECTION 1: PAGE BANNER */}
      <div className="page-banner">
        {/* IMAGE: Page banner background, size 1920 x 400 px */}
        <div className="page-banner-bg" />
        <div className="container page-banner-content">
          <div className="page-breadcrumb">
            <Link href="/">Home</Link> / <span>Gallery</span>
          </div>
          <h1>Our Work Gallery</h1>
          <p>Real looks, real clients, real results.</p>
        </div>
      </div>

      {/* SECTION 2 & 3: FILTER TABS & MASONRY GRID */}
      <section className="section-padding bg-ivory">
        <div className="container">
          {/* Filter Tabs */}
          <div className="gallery-filters reveal reveal-up">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`gallery-filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 24 Image Placeholder Masonry Grid */}
          <div className="masonry-showcase reveal reveal-stagger">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="gallery-item"
                onClick={() => setLightboxIndex(index)}
                role="button"
                tabIndex="0"
                aria-label={`View ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setLightboxIndex(index);
                }}
              >
                {/* IMAGE: portrait photo, 768 x 960 px */}
                <div className="image-placeholder">
                  <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  <span className="placeholder-label">{item.category}</span>
                  <span className="placeholder-dim">768 x 960 px</span>
                </div>

                {/* Hover Plum Overlay with View Icon */}
                <div className="gallery-overlay">
                  <div className="gallery-overlay-icon">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                  </div>
                  <span className="gallery-category-chip">{item.category}</span>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FULL-WIDTH CTA STRIP */}
      <section className="cta-band reveal reveal-up">
        <div className="container">
          <div className="cta-band-content">
            <h2>Like What You See?</h2>
            <p>Book your makeover or beauty treatment with our expert team today.</p>
            <div className="cta-band-buttons">
              <Link href="/contact" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem', border: '2px solid var(--white)' }}>
                Book Your Look
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: LIGHTBOX MODAL */}
      {currentItem && (
        <div className="lightbox-backdrop" onClick={() => setLightboxIndex(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close Lightbox"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>

            <button
              type="button"
              className="lightbox-nav-btn lightbox-prev"
              onClick={handlePrev}
              aria-label="Previous Image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            </button>

            <button
              type="button"
              className="lightbox-nav-btn lightbox-next"
              onClick={handleNext}
              aria-label="Next Image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>

            <div className="lightbox-image-box">
              {/* LARGE LIGHTBOX IMAGE PLACEHOLDER */}
              <div className="image-placeholder" style={{ height: '100%', background: '#25101f' }}>
                <svg viewBox="0 0 24 24" style={{ stroke: 'var(--gold)', width: '48px', height: '48px' }}><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                <span className="placeholder-label" style={{ color: 'var(--white)', fontSize: '1.1rem' }}>{currentItem.title}</span>
                <span className="placeholder-dim" style={{ background: 'var(--gold)', color: 'var(--plum)' }}>{currentItem.category}</span>
              </div>
            </div>

            <div className="lightbox-caption">
              <h4>{currentItem.title}</h4>
              <p>{currentItem.category} Portfolio</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
