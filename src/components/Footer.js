import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    {
      heading: 'Navigate',
      links: [
        { title: 'Home', href: '/' },
        { title: 'Listing', href: '/listing' },
        { title: 'Login', href: '#loginModal' },
      ],
    },
    {
      heading: 'Social',
      links: [
        { title: 'Twitter', href: '#' },
        { title: 'Facebook', href: '#' },
        { title: 'Instagram', href: '#' },
        { title: 'Reddit', href: '#' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { title: 'Privacy Policy', href: '#' },
        { title: 'Money Back Guarantee & Refund Policy', href: '#' },
        { title: 'Terms of Service', href: '#' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { title: 'About', href: '#' },
        { title: 'Hiring', href: '#' },
        { title: 'FAQ', href: '#' },
        { title: 'Press Releases', href: '#' },
      ],
    },
  ];

  return (
    <footer>
      <div className='footer-logo mb-4 ms-3'>
        <img src='/images/logo.png' alt='' srcSet='' />
      </div>
      <div className='container grid-container d-grid mx-1'>
        <div className='row'>
          {footerLinks.map((section) => (
            <div key={section.heading} className='col-6 col-md-3'>
              <h5 className='mb-3 mt-2 text-white'>{section.heading}</h5>
              {section.links.map((link) => (
                <Link key={link.title} to={link.href} data-bs-toggle={link.href === '#loginModal' ? 'modal' : ''} className='d-block mb-2'>
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
