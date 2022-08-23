import { BsGithub, BsLinkedin, BsTwitter, } from 'react-icons/bs';

export default function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href="https://www.github.com/austin-rt" target="_blank" className='icon' rel='noopener noreferrer'><BsGithub /></a>
      <a href="https://www.linkedin.com/in/austinrt" target="_blank" className='icon' rel='noopener noreferrer' ><BsLinkedin /></a>
      <a href="https://www.twitter.com/0xStink" target="_blank" className="icon" rel='noopener noreferrer' ><BsTwitter /></a>
    </div>
  );
}
