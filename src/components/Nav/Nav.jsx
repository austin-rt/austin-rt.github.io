import './Nav.css';

import React from 'react';
import { useState } from 'react';

import { AiTwotoneHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiTwotoneMail } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BsFillBriefcaseFill } from 'react-icons/bs';


export default function Nav({home, about, portfolio, experience, contact, scrollTo}) {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <div className='nav__container'>
        <div onClick={() => {
          setActiveNav('#')
          scrollTo(home)
          }} className={activeNav === '#' ? 'active nav__link' : 'nav__link'}><AiTwotoneHome className='nav__icon' title="home"/></div>
          <p className='nav__text'>Home</p>
      </div>
      <div className='nav__container'>
        <div onClick={() => {
          setActiveNav('#about')
          scrollTo(about)
          }} className={activeNav === '#about' ? 'active nav__link' : 'nav__link'}><AiOutlineUser className='nav__icon' title="about"/></div>
          <p className='nav__text'>About</p>
      </div>
      <div className='nav__container'>
        <div onClick={() => {
          setActiveNav('#portfolio')
          scrollTo(portfolio)
      }} className={activeNav === '#portfolio' ? 'active nav__link' : 'nav__link'}><BsFillBriefcaseFill className='nav__icon' title="portfolio"/></div>
          <p className='nav__text'>Portfolio</p>
      </div>
      <div className='nav__container'>
        <div onClick={() => {
          setActiveNav('#experience')
          scrollTo(experience)
      }} className={activeNav === '#experience' ? 'active nav__link' : 'nav__link'}><BiBook className='nav__icon' title="experience"/></div>
          <p className='nav__text'>Experience</p>
      </div>
      <div className='nav__container'>
        <div onClick={() => {
          setActiveNav('#contact')
          scrollTo(contact)
        }} className={activeNav === '#contact' ? 'active nav__link' : 'nav__link'}><AiTwotoneMail className='nav__icon' title="contact"/></div>
          <p className='nav__text'>Contact</p>
      </div>
    </nav>
  );
}
