import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500 px-5 lg:px-0'>
      <div className='w-full max-w-lg bg-white shadow-lg rounded-lg p-8'>
        <h3 className='text-gray-800 text-3xl font-bold mb-4 text-center'>
          Contact Us
        </h3>
        <p className='text-gray-600 mb-6 text-center'>
          Got a technical issue? Want to contact us? Fill out the form below!
        </p>
        <form onSubmit={handleSubmit} className='space-y-5'>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Email Address
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleInputChange}
              required
              className='w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm'
            />
          </div>
          <div>
            <label htmlFor='subject' className='block text-sm font-medium text-gray-700'>
              Subject
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              placeholder='Enter the subject'
              value={formData.subject}
              onChange={handleInputChange}
              required
              className='w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm'
            />
          </div>
          <div>
            <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              placeholder='Enter your message'
              value={formData.message}
              onChange={handleInputChange}
              required
              rows='5'
              className='w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm'
            ></textarea>
          </div>
          <div>
            <button
              type='submit'
              className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
