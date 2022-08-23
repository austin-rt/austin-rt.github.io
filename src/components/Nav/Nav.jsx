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
      <a href="#" className={activeNav === '#' ? 'active nav__icon' : 'nav__icon'}><AiTwotoneHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active nav__icon' : 'nav__icon'}><AiOutlineUser /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active nav__icon' : 'nav__icon'}><BsFillBriefcaseFill /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active nav__icon' : 'nav__icon'}><BiBook /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active nav__icon' : 'nav__icon'}><AiTwotoneMail /></a>
    </nav>
  );
}
