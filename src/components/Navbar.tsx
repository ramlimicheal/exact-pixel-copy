import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#dee0e5] bg-white/80 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <svg className="w-8 h-8 transition-transform group-hover:scale-105" viewBox="0 0 73 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinejoin="miter" fill="#181d27" d="M6 2.5C12.6274 2.5 18 7.87258 18 14.5C18 21.1274 12.6274 26.5 6 26.5V21.4268C2.60787 20.9414 0 18.0264 0 14.5C0 10.9736 2.6078 8.05758 6 7.57227V2.5ZM8 7.57227C11.3922 8.05758 14 10.9736 14 14.5C14 18.0264 11.3921 20.9414 8 21.4268V24.2988C12.5644 23.3722 16 19.3378 16 14.5C16 9.6621 12.5645 5.62675 8 4.7002V7.57227Z" />
            <path strokeLinejoin="miter" fill="#181d27" d="M27.76 22V6.38H38.276V8.866H30.62V12.936H38.012V15.4H30.62V19.514H38.452V22H27.76ZM40.8552 22V10.252H43.4072L43.5172 13.552L43.1872 13.42C43.3045 12.5987 43.5465 11.9387 43.9132 11.44C44.2798 10.9413 44.7272 10.5747 45.2552 10.34C45.7832 10.1053 46.3625 9.988 46.9932 9.988C47.8585 9.988 48.5845 10.1787 49.1712 10.56C49.7725 10.9413 50.2272 11.4693 50.5352 12.144C50.8432 12.804 50.9972 13.574 50.9972 14.454V22H48.1812V15.356C48.1812 14.696 48.1152 14.1387 47.9832 13.684C47.8512 13.2293 47.6312 12.8847 47.3232 12.65C47.0298 12.4007 46.6338 12.276 46.1352 12.276C45.3872 12.276 44.7858 12.54 44.3312 13.068C43.8912 13.596 43.6712 14.3587 43.6712 15.356V22H40.8552ZM53.4828 22V10.252H56.1228L56.2328 13.508L55.9908 13.464C56.1668 12.3347 56.4968 11.5207 56.9808 11.022C57.4795 10.5087 58.1541 10.252 59.0048 10.252H60.0828V12.672H58.9828C58.3815 12.672 57.8828 12.76 57.4868 12.936C57.0908 13.112 56.7901 13.3907 56.5848 13.772C56.3941 14.1387 56.2988 14.6227 56.2988 15.224V22H53.4828Z" />
          </svg>
          <span className="font-bold text-xl tracking-tight">Enra</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors hover:text-black ${
                location.pathname === link.path ? 'text-black font-semibold' : 'text-[#181d27]/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact CTA */}
        <Link
          to="/contact"
          className="bg-[#74f5a1] hover:bg-[#60e08e] text-[#181d27] font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all duration-200 hover:shadow-sm"
        >
          CONTACT US
        </Link>
      </div>
    </header>
  );
};
