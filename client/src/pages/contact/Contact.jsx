import React, { useState } from 'react';
import Layout from '../../components/Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    college: 'SSITM',
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState('idle');

  const SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form with data:", formData);
    setSubmissionStatus('submitting');

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Needed for Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // No way to confirm success in no-cors, so assume success
      setSubmissionStatus('success');
      setFormData({
        college: 'SSITM',
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmissionStatus('error');
    }
  };

  const contactInfo = {
    address: '10th KM Stone, Aligarh, Mathura Road, Aligarh, Uttar Pradesh, India, 202001',
    phone1: '+91- 9555699988',
    phone2: '+91- 09810054878',
    tollFree: '1800-180-7686',
    admissionsEmail: 'admission.cell@seglko.org',
  };

  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.367399847364!2d78.020294!3d27.8092116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a48b1dc2b28f%3A0x23c4fb820ec1cf4!2sShivdan%20Singh%20Institute%20of%20Technology%20and%20Management!5e0!3m2!1sen!2sin!4v1717060000000!5m2!1sen!2sin";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Get In Touch With <span className="text-orange-300">SSITM</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
            We're here to answer all your questions. Reach out to us through the form, phone, or visit our campus.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-orange-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-orange-200">
            <h2 className="text-3xl font-bold text-orange-700 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow border border-orange-200 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow border border-orange-200 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="shadow border border-orange-200 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="shadow border border-orange-200 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={submissionStatus === 'submitting'}
                className="bg-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-orange-600 transition disabled:opacity-50"
              >
                {submissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {submissionStatus === 'success' && (
                <p className="mt-4 text-center text-green-600">Thank you for your message! We will get back to you shortly.</p>
              )}
              {submissionStatus === 'error' && (
                <p className="mt-4 text-center text-red-600">Error sending message. Please try again or contact us directly.</p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-orange-200">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Contact Details</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-orange-700 mb-2">Address:</h3>
                <p>{contactInfo.address}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-orange-700 mb-2">Phone Numbers:</h3>
                <ul className="space-y-1">
                  <li><a href={`tel:${contactInfo.phone1}`} className="hover:underline">{contactInfo.phone1}</a></li>
                  <li><a href={`tel:${contactInfo.phone2}`} className="hover:underline">{contactInfo.phone2}</a></li>
                  <li><strong>Toll Free: {contactInfo.tollFree}</strong></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-orange-700 mb-2">Email:</h3>
                <a href={`mailto:${contactInfo.admissionsEmail}`} className="hover:underline">{contactInfo.admissionsEmail}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-white mb-8 text-center">FIND US ON <span className="text-orange-300">MAP</span></h2>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-orange-200">
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SSITM Location on Google Maps"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
