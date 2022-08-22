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
      <a href="#" className={activeNav === '#' ? 'active' : ''}><AiTwotoneHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsFillBriefcaseFill /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiTwotoneMail /></a>
    </nav>
  );
}
