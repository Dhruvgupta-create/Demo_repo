import React from 'react';
import { Link } from 'react-router-dom';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import logo from "../../assets/images/logo.png";

const Footer = () => {

  // Social Links Array
  const socialLinks = [
    { path: 'https://linkedin.com/', icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' /> },
    { path: 'https://youtube.com/', icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' /> },
    { path: 'https://github.com/', icon: <AiFillGithub className='group-hover:text-white w-4 h-5' /> },
    { path: 'https://instagram.com/', icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' /> }
  ];

  // Quick Links Arrays
  const quickLinks1 = [
    { path: '/home', display: 'Home' },
    { path: '/', display: 'About us' },
    { path: '/services', display: 'Our Services' },
    { path: '/', display: 'Blog' }
  ];

  const quickLinks2 = [
    { path: '/find-a-doctor', display: 'Find A Doctor' },
    { path: '', display: 'Request An Appointment' },
    { path: '', display: 'Find a Location' },
    { path: '/', display: 'Get an Opinion' }
  ];

  const quickLinks3 = [
    { path: '/', display: 'Donate' },
    { path: '/contact', display: 'Contact Us' },
  ];

  return (
    <footer className='py-10 bg-gray-100'>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt='Logo' className='h-10 mb-4' />
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, assumenda. Exercitationem sunt quod sapiente distinctio molestiae? Dolorem quae praesentium atque!</p>
            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((link, index) => (
                <a href={link.path} key={index} className='text-blue-500 hover:text-blue-700'>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className='text-lg font-semibold mb-4 text-gray-800'>
              Quick Links
            </h2>
            <ul className="space-y-2">
              {quickLinks1.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className='text-gray-600 hover:text-gray-800'>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className='text-lg font-semibold mb-4 text-gray-800'>
              I want to
            </h2>
            <ul className="space-y-2">
              {quickLinks2.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className='text-gray-600 hover:text-gray-800'>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className='text-lg font-semibold mb-4 text-gray-800'>
              Support Us
            </h2>
            <ul className="space-y-2">
              {quickLinks3.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className='text-gray-600 hover:text-gray-800'>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
