# Radha Roop Nikhar Beauty Parlour

Modern, fully responsive website for **Radha Roop Nikhar Beauty Parlour** (managed and founded by **Meenakshi**). Built with Next.js (Pages Router), plain CSS, and MongoDB (Mongoose).

## Business Information

- **Parlour Name:** Radha Roop Nikhar Beauty Parlour
- **Owner / Founder:** Meenakshi
- **Contact Numbers:** +91 85600 03316 / +91 94626 83646
- **WhatsApp:** +91 85600 03316
- **Email:** radharoopnikhar6@gmail.com
- **Logo:** `public/image.png`

## Tech Stack

- **Framework:** Next.js (Pages Router)
- **Language:** JavaScript
- **Styling:** Plain external CSS files in `styles/` (imported in `pages/_app.js`)
- **Backend:** Next.js API Routes (`pages/api/`)
- **Database:** MongoDB via Mongoose

## Key Routes & Pages

- `/` – Home page (Hero, Welcome, Why Choose Us, Services, Packages, Counters, Portfolio, Reviews, FAQ)
- `/about` – About Us (Our Story, Founder Note from Meenakshi, Vision & Mission, Team, Hygiene Promise)
- `/services` – Services Overview
- `/services/makeup` – Bridal and Party Makeup
- `/services/facial` – Facial and Skin Care Treatments
- `/services/hair` – Hair Salon, Styling & Treatments
- `/services/hair-removal` – Waxing and Threading
- `/services/massage` – Relaxing Massage
- `/services/mani-pedi` – Manicure, Pedicure & Nails
- `/academy` – Beauty Academy (Courses, Admission, Enquiry Form)
- `/gallery` – Work Gallery with Category Filters & Lightbox Modal
- `/contact` – Contact, Google Map, and Online Booking Form
- `/api/health` – Database Connectivity Check
- `/api/enquiry` – Booking and Course Enquiry API

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Verify `.env.local` contains your MongoDB URI:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/beauty-parlour
```

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.
