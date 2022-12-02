import { BsGithub, BsLinkedin, BsTwitter, BsMedium } from 'react-icons/bs';

export default function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a
        href='https://www.github.com/austin-rt'
        title='GitHub Link'
        target='_blank'
        className='icon'
        rel='noopener noreferrer'
      >
        <BsGithub />
      </a>
      <a
        href='https://www.linkedin.com/in/austinrt'
        title='LinkedIn Link'
        target='_blank'
        className='icon'
        rel='noopener noreferrer'
      >
        <BsLinkedin />
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
  );
}
