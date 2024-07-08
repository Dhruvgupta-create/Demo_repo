import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <section className='min-h-screen flex items-center justify-center px-5 lg:px-0'>
      <div className='w-full max-w-md bg-white shadow-md rounded-lg p-8'>
        <h3 className='text-headingColor text-2xl font-bold mb-6'>
          Hello! <span className='text-primaryColor'>Welcome</span> Back
        </h3>

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Email address
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleInputChange}
              required
              className='w-full px-4 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primaryColor focus:border-primaryColor'
            />
          </div>
          <div>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Enter your password'
              value={formData.password}
              onChange={handleInputChange}
              required
              className='w-full px-4 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primaryColor focus:border-primaryColor'
            />
          </div>
          
          <div>
            <button
              type='submit'
              className='w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primaryColor hover:bg-primaryColor-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor'
            >
              Sign in
            </button>
          </div>
          <p>Don't have an account? <Link to="/register"> Register</Link></p>
        </form>
      </div>
    </section>
  );
};

export default Login;
