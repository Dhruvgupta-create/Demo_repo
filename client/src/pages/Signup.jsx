import React, { useState } from 'react';
import signup from "../assets/images/signup.gif";
import avatar from "../assets/images/avatar-icon.png"; // Assuming you have an avatar placeholder image
import { Link } from 'react-router-dom';

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    gender: '',
    photo: null
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];

    //later we will use cloudinary to upload image
    console.log(file);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <section className='min-h-screen flex items-center justify-center px-5 lg:px-0 bg-gray-50'>
      <div className='w-full max-w-4xl bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 flex justify-center mb-6 md:mb-0'>
          <figure>
            <img src={signup} alt='Signup Illustration' className='w-80 h-auto rounded-lg' />
          </figure>
        </div>
        <div className='w-full md:w-1/2'>
          <h3 className='text-headingColor text-xl font-bold mb-4'>
            Create an Account
          </h3>
          <form onSubmit={handleSubmit} className='space-y-3'>
            <div className='mb-4 flex items-center gap-3'>
              <figure className='w-12 h-12'>
                <img src={avatar} alt='Avatar' className='w-full h-full rounded-full object-cover' />
              </figure>
              <div>
                <input 
                  type='file'
                  name='photo'
                  id='customFile'
                  accept='.jpg, .png'
                  onChange={handleFileInputChange}
                  required
                  className='hidden'
                />
                <label 
                  htmlFor='customFile'
                  className='cursor-pointer bg-primaryColor text-white py-2 px-3 rounded-md shadow-sm hover:bg-primaryColor-dark text-sm'
                >
                  Upload Photo
                </label>
              </div>
            </div>
            <div>
              <label htmlFor='name' className='block text-xs font-medium text-gray-700'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Enter your name'
                value={formData.name}
                onChange={handleInputChange}
                required
                className='w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primaryColor focus:border-primaryColor text-sm'
              />
            </div>
            <div>
              <label htmlFor='email' className='block text-xs font-medium text-gray-700'>
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
                className='w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primaryColor focus:border-primaryColor text-sm'
              />
            </div>
            <div>
              <label htmlFor='password' className='block text-xs font-medium text-gray-700'>
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
                className='w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primaryColor focus:border-primaryColor text-sm'
              />
            </div>
            <div className='flex space-x-2'>
              <div className='w-1/2'>
                <label htmlFor='role' className='block text-xs font-medium text-gray-700'>
                  Role
                </label>
                <select
                  id='role'
                  name='role'
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  className='w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primaryColor focus:border-primaryColor text-sm'
                >
                  <option value=''>Select your role</option>
                  <option value='doctor'>Doctor</option>
                  <option value='patient'>Patient</option>
                </select>
              </div>
              <div className='w-1/2'>
                <label htmlFor='gender' className='block text-xs font-medium text-gray-700'>
                  Gender
                </label>
                <select
                  id='gender'
                  name='gender'
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className='w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primaryColor focus:border-primaryColor text-sm'
                >
                  <option value=''>Select your gender</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                  <option value='other'>Other</option>
                </select>
              </div>
            </div>
            <div>
              <button
                type='submit'
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primaryColor hover:bg-primaryColor-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor'
              >
                Sign Up
              </button>
            </div>
            <p className='text-xs text-center'>
              Already have an account? <Link to="/login" className='text-primaryColor'>Login</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
