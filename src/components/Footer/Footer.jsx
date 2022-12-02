import './Footer.css';
import { useContext } from 'react';
import { BsLinkedin, BsGithub, BsTwitter, BsMedium } from 'react-icons/bs';
import { RefContext } from '../../context/RefContext';

export default function Footer() {
  const { home, about, portfolio, experience, contact, scrollTo } = useContext(RefContext);
  return (
    <footer>
      <h4
        onClick={() => {
          scrollTo(home);
        }}
        className='footer__logo'
      >
        austinrt.io
      </h4>

      <ul className='permalinks'>
        <li
          onClick={() => {
            scrollTo(home);
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            scrollTo(about);
          }}
        >
          About Me
        </li>
        <li
          onClick={() => {
            scrollTo(portfolio);
          }}
        >
          My Portfolio
        </li>
        <li
          onClick={() => {
            scrollTo(experience);
          }}
        >
          My Experience
        </li>
        <li
          onClick={() => {
            scrollTo(contact);
          }}
        >
          Contact Me
        </li>
      </ul>

      <div className='footer__socials'>
        <a
          href='https://www.linkedin.com/in/austinrt'
          title='LinkedIn Profile'
          target='_blank'
          className='icon'
          rel='noopener noreferrer'
        >
          <BsLinkedin />
        </a>
        <a
          href='https://www.github.com/austin-rt'
          title='GitHub Page'
          target='_blank'
          className='icon'
          rel='noopener noreferrer'
        >
          <BsGithub />
        </a>
        <a
          href='https://www.twitter.com/0xStink'
          title='Twitter Link'
          target='_blank'
          className='icon'
          rel='noopener noreferrer'
        >
          <BsTwitter />
        </a>
        <a
          href='https://www.medium.com/@austinrt'
          title='Medium Link'
          target='_blank'
          className='icon'
          rel='noopener noreferrer'
        >
          <BsMedium />
        </a>
      </div>

      <div className='footer__copyright'>
        <div>
          <small>&copy; Austin Taylor 2022.</small>{' '}
          <small>
            <a
              href='https://github.com/austin-rt/austin-rt.github.io'
              target='_blank'
              rel='noopener noreferrer'
            >
              Portfolio Repo
            </a>
          </small>
        </div>
        <div>
          <small>
            Page design based on Egator's Example{' '}
            <a
              href='https://egattor.com/rp2447/'
              target='_blank'
              rel='noopener noreferrer'
              className='credit'
            >
              {' '}
              React Portfolio
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
}
