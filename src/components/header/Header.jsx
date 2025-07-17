import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
  const [toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  // ============= Change Background Header on Scroll =============
  useEffect(() => {
  const handleScroll = () => {
    const header = document.querySelector('.header');
    if (window.scrollY >= 50) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


   

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='#home' className='nav__logo'>Chandra Shekhara</a>

        <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className='nav__list grid'>
            {[
              { href: '#home', icon: 'uil-estate', label: 'Home' },
              { href: '#about', icon: 'uil-user', label: 'About' },
              { href: '#skills', icon: 'uil-file-alt', label: 'Skills' },
              { href: '#services', icon: 'uil-briefcase-alt', label: 'Services' },
              { href: '#portfolio', icon: 'uil-scenery', label: 'Projects' },
              { href: '#contact', icon: 'uil-message', label: 'Contact' },
            ].map(({ href, icon, label }) => (
              <li className='nav__item' key={href}>
                <a
                  href={href}
                  onClick={() => setActiveNav(href)}
                  className={activeNav === href ? 'nav__link active-link' : 'nav__link'}
                >
                  <i className={`uil ${icon} nav__icon`}></i> {label}
                </a>
              </li>
            ))}
          </ul>
          <i className='uil uil-times nav__close' onClick={() => showMenu(!toggle)}></i>
        </div>

        <div className='nav__toggle' onClick={() => showMenu(!toggle)}>
          <i className='uil uil-apps'></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
