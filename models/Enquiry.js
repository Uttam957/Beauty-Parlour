// models/Enquiry.js
// Mongoose schema and model for customer booking enquiries and course applications

import mongoose from 'mongoose';

const EnquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your full name'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    phone: {
      type: String,
      required: [true, 'Please provide your phone number'],
      trim: true,
      maxlength: [20, 'Phone number cannot exceed 20 characters'],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      maxlength: [120, 'Email cannot exceed 120 characters'],
    },
    service: {
      type: String,
      trim: true,
      maxlength: [100, 'Service name cannot exceed 100 characters'],
    },
    course: {
      type: String,
      trim: true,
      maxlength: [100, 'Course name cannot exceed 100 characters'],
    },
    eventDate: {
      type: String,
      trim: true,
    },
    preferredTime: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      trim: true,
      maxlength: [1000, 'Message cannot exceed 1000 characters'],
    },
    source: {
      type: String,
      trim: true,
      default: 'contact',
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'booked', 'closed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

// Prevent mongoose model re-compilation error in Next.js hot-reload development
export default mongoose.models.Enquiry || mongoose.model('Enquiry', EnquirySchema);
