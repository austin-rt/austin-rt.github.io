import React from 'react';
import './Header.css';
import headshot from '../../assets/headshot-no-bg.png';
import CallToAction from './CallToAction';
import HeaderSocials from './HeaderSocials';

export default function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h5 className='text-light'>Hey there, I'm</h5>
        <h1 className='header__name'>Austin Taylor</h1>
        <h5 className='text-light'>
          and I'm a Full-Stack Software Developer
        </h5>
        <CallToAction />
        <HeaderSocials />
        <div className='me'>
          <img src={headshot} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down {`>>>`}</a>
      </div>
    </header>
  );
}
