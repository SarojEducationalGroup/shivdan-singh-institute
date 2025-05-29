import React, { useState } from 'react';
import Layout from '../../components/Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    college: 'SSITM', // This value will be sent to the sheet
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

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

    console.log("Submitting form with data:", formData); // Log formData to see what's being sent

    setSubmissionStatus('submitting');

    try {
      const data = new FormData();
      // Manually append each field from formData state to the FormData object
      for (const key in formData) {
        data.append(key, formData[key]);
      }

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: data,
        // No headers needed for FormData, fetch sets Content-Type automatically
      });

      const result = await response.json();

      if (result.result === 'success') {
        setSubmissionStatus('success');
        setFormData({
          college: 'SSITM', // Reset college to default
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error(result.error || 'Unknown submission error from Apps Script.');
      }
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
    admissionsEmail: ' admission.cell@seglko.org',
  };

  // Ensure this URL is correctly configured for your Google Apps Script Web App
  // It should be the "Execute as: Me" and "Who has access to the app: Anyone" URL.
  // For security, you might want to restrict access if not publicly accessible.
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.12644260029!2d78.0772093150242!3d27.917454282672323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a44f9402c525%3A0x67a3b3e2a2c2b3e!2sSSITM%20Aligarh!5e0!3m2!1sen!2sin!4v1678912345678!5m2!1sen!2sin";


  return (
    <Layout>
      {/* Hero Section - Navy Blue Background */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* These SVG elements are for decorative background patterns */}
            <rect x="0" y="0" width="10" height="10" fill="currentColor" transform="rotate(45 5 5) translate(10 10)" />
            <circle cx="90" cy="10" r="8" fill="currentColor" />
            <polygon points="50,0 60,20 40,20" fill="currentColor" transform="scale(0.8) translate(10 10)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            Get In Touch With <span className="text-orange-300">SSITM</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up">
            We're here to answer all your questions. Reach out to us through the form, phone, or visit our campus.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section - Light Orange Background */}
      <section className="bg-orange-50 bg-opacity-70 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-orange-200">
            <h2 className="text-3xl font-bold text-orange-700 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Hidden input for college name. It's in the formData state and will be appended. */}
              {/* <input type="hidden" name="college" value={formData.college} />  No longer strictly necessary if appending from state*/}

              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border border-orange-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border border-orange-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="shadow appearance-none border border-orange-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="shadow appearance-none border border-orange-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={submissionStatus === 'submitting'}
                className="bg-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-lg
                          hover:bg-orange-600 transition-colors duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
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

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-orange-200">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Contact Details</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-orange-700 mb-2">Address:</h3>
                <p className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{contactInfo.address}</span>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-orange-700 mb-2">Phone Numbers:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="h-6 w-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.103 6.103l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a href={`tel:${contactInfo.phone1}`} className="hover:underline">{contactInfo.phone1}</a>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-6 w-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.103 6.103l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a href={`tel:${contactInfo.phone2}`} className="hover:underline">{contactInfo.phone2}</a>
                  </li>
                  <li className="flex items-center font-bold text-orange-700">
                    <svg className="h-6 w-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.103 6.103l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>Toll Free: {contactInfo.tollFree}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-orange-700 mb-2">Email Addresses:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="h-6 w-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a href={`mailto:${contactInfo.admissionsEmail}`} className="hover:underline">{contactInfo.admissionsEmail}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section - Blue Background */}
      <section className="bg-blue-900 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 sm:mb-12 relative pb-2 text-center">
            <span className="border-l-4 border-orange-400 pl-4">FIND US ON <span className="text-orange-300">MAP</span></span>
          </h2>
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