import React from 'react';
import './Footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>austinrt.io</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#portfolio">My Portfolio</a></li>
        <li><a href="#experience">My Experience</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/austinrt" target="_blank" className='icon'><BsLinkedin /></a>
        <a href="https://www.github.com/austin-rt" target="_blank" className='icon'><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <div>
          <small>&copy; Austin Taylor 2022. All Rights Reserved</small>
        </div>
        <div>
          <small>Page based on Egator's Example <a href="https://egattor.com/rp2447/"> React Portfolio</a></small>
        </div>
      </div>
    </footer>
  );
}
