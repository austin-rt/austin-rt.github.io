import React from 'react';
import './Header.css';
import pfp from '../../assets/headshot-no-bg.png';
import CallToAction from './CallToAction';
import HeaderSocials from './HeaderSocials';

export default function Header() {

  return (
    <header>
      <div className='container header__container'>
        <h5 className='text-light'>Hey there, I'm</h5>
        <h1 className='header__name'>Austin Taylor</h1>
        <h5 className='text-light'>and I'm a Software Developer.</h5>
        <CallToAction />
        <HeaderSocials />
        <div className='pfp-container'>
          <img src={pfp} className="pfp" alt="austin talor" />
        </div>
        <div className="scroll__down__container">
          <a href="#portfolio" className='scroll__down__portfolio scroll__down'><h3>Portfolio</h3></a>
          <a href="#portfolio" className='scroll__down scroll__down__arrows' title="scroll down arrows">
            <span>{`>`}</span>
            <span>{`>`}</span>
            <span>{`>`}</span>
            <span>{`>`}</span>
            <span>{`>`}</span>
            <span>{`>`}</span>
            <span>{`>`}</span>
            <span>{`>`}</span>
            <span>{`>`}</span>
            <span>{`>`}</span>
          </a>
        </div>
      </div>
    </header>
  );
}