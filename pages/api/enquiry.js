// pages/api/enquiry.js
// Handles enquiry submissions from booking, makeup, and academy forms

import dbConnect from '../../lib/mongodb';
import Enquiry from '../../models/Enquiry';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
  }

  try {
    const {
      name,
      phone,
      email,
      service,
      course,
      eventDate,
      preferredTime,
      message,
      source,
      website, // Honeypot anti-spam field
    } = req.body || {};

    // 1. Honeypot check: If bot fills the hidden "website" field, silently accept without saving
    if (website && website.trim() !== '') {
      return res.status(200).json({ success: true, message: 'Enquiry received' });
    }

    // 2. Server-side validation
    const trimmedName = typeof name === 'string' ? name.trim() : '';
    const trimmedPhone = typeof phone === 'string' ? phone.trim() : '';
    const trimmedEmail = typeof email === 'string' ? email.trim() : '';
    const trimmedService = typeof service === 'string' ? service.trim() : '';
    const trimmedCourse = typeof course === 'string' ? course.trim() : '';
    const trimmedDate = typeof eventDate === 'string' ? eventDate.trim() : '';
    const trimmedTime = typeof preferredTime === 'string' ? preferredTime.trim() : '';
    const trimmedMessage = typeof message === 'string' ? message.trim() : '';
    const trimmedSource = typeof source === 'string' ? source.trim() : 'contact';

    // Validate name: characters only (letters and spaces), max 50 chars
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!trimmedName) {
      return res.status(400).json({ success: false, message: 'Please provide your full name.' });
    }
    if (!nameRegex.test(trimmedName)) {
      return res.status(400).json({ success: false, message: 'Name must contain only characters (letters and spaces).' });
    }
    if (trimmedName.length > 50) {
      return res.status(400).json({ success: false, message: 'Name must not exceed 50 characters.' });
    }

    if (!trimmedPhone) {
      return res.status(400).json({ success: false, message: 'Please provide your phone number.' });
    }

    // Validate 10-digit phone number (numbers only)
    const digitsOnly = trimmedPhone.replace(/\D/g, '');
    const cleanPhone = digitsOnly.length > 10 && digitsOnly.startsWith('91') ? digitsOnly.slice(2) : digitsOnly;
    if (cleanPhone.length !== 10) {
      return res.status(400).json({
        success: false,
        message: 'Phone number must be exactly 10 digits (numbers only).',
      });
    }

    // Validate email format and mandatory '@' symbol
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (trimmedSource === 'contact' || trimmedEmail) {
      if (!trimmedEmail) {
        return res.status(400).json({ success: false, message: 'Please provide your email address.' });
      }
      if (!trimmedEmail.includes('@') || !emailRegex.test(trimmedEmail)) {
        return res.status(400).json({
          success: false,
          message: "Email must contain '@' and be a valid email address.",
        });
      }
    }

    // Connect to MongoDB
    await dbConnect();

    // Create and save enquiry
    const enquiry = await Enquiry.create({
      name: trimmedName.slice(0, 100),
      phone: cleanPhone,
      email: trimmedEmail.slice(0, 120),
      service: trimmedService.slice(0, 100),
      course: trimmedCourse.slice(0, 100),
      eventDate: trimmedDate.slice(0, 50),
      preferredTime: trimmedTime.slice(0, 50),
      message: trimmedMessage.slice(0, 1000),
      source: trimmedSource.slice(0, 50),
      status: 'new',
    });

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your enquiry has been received.',
      id: enquiry._id,
    });
  } catch (error) {
    console.error('Enquiry submission error:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Unable to process your enquiry at this moment. Please call or WhatsApp us directly.',
    });
  }
}
