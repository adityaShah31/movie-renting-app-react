import React from 'react';

const Footer = () => {
  const footerLinks = [
    {
      heading: 'Navigate',
      links: [
        { title: 'Home', href: '#' },
        { title: 'Movies', href: '#' },
        { title: 'TV Shows', href: '#' },
        { title: 'Login', href: '#' },
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
        <img src='/images/logo.png' alt='' srcset='' />
      </div>
      <div className='container grid-container d-grid mx-1'>
        <div className='row'>
          {footerLinks.map((section) => (
            <div className='col-6 col-md-3'>
              <h5 className='mb-3 mt-2'>{section.heading}</h5>
              {section.links.map((link) => (
                <a href={link.href} className='d-block mb-2'>
                  {link.title}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
