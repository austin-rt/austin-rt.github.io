import './Nav.css';

import React from 'react';
import { useState } from 'react';

import { AiTwotoneHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiTwotoneMail } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BsFillBriefcaseFill } from 'react-icons/bs';


export default function Nav() {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <div className='nav__container'>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiTwotoneHome className='nav__icon' /></a>
          <p className='nav__text'>Home</p>
      </div>
      <div className='nav__container'>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser className='nav__icon' /></a>
          <p className='nav__text'>About</p>
      </div>
      <div className='nav__container'>
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsFillBriefcaseFill className='nav__icon' /></a>
          <p className='nav__text'>Portfolio</p>
      </div>
      <div className='nav__container'>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook className='nav__icon' /></a>
          <p className='nav__text'>Experience</p>
      </div>
      <div className='nav__container'>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiTwotoneMail className='nav__icon' /></a>
          <p className='nav__text'>Contact</p>
      </div>
    </nav>
  );
}
