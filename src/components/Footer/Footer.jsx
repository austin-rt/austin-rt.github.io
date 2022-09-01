import React from 'react';
import './Footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

export default function Footer({home, about, portfolio, experience, contact, scrollTo}) {
  return (
    <footer>
      <h4 onClick={()=>{scrollTo(home)}} className='footer__logo'>austinrt.io</h4>

      <ul className='permalinks'>
        <li onClick={()=>{scrollTo(home)}} >Home</li>
        <li onClick={()=>{scrollTo(about)}}>About Me</li>
        <li onClick={()=>{scrollTo(portfolio)}}>My Portfolio</li>
        <li onClick={()=>{scrollTo(experience)}}>My Experience</li>
        <li onClick={()=>{scrollTo(contact)}}>Contact Me</li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/austinrt" title="LinkedIn Profile" target="_blank" className='icon' rel='noopener noreferrer'><BsLinkedin /></a>
        <a href="https://www.github.com/austin-rt" title="GitHub Page" target="_blank" className='icon' rel='noopener noreferrer'><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <div>
          <small>&copy; Austin Taylor 2022.</small>
        </div>
        <div>
          <small>Page design based on Egator's Example <a href="https://egattor.com/rp2447/" target="_blank" rel='noopener noreferrer'> React Portfolio</a></small>
        </div>
      </div>
    </footer>
  );
}
