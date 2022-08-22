import React from 'react';
import './Header.css';

import headshot from '../../assets/headshot-no-bg.png';

import CallToAction from './CallToAction';
import HeaderSocials from './HeaderSocials';

export default function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hey there, I'm</h5>
        <h1>Austin Taylor</h1>
        <h5 className='text-light'>and I'm a Full-stack Software Developer.</h5>
        <CallToAction />
        <HeaderSocials />
        <div className='me'>
          <img src={headshot} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  );
}
