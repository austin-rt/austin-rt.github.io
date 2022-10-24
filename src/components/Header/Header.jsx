import './Header.css';
import { useContext } from 'react';
import { RefContext } from '../../context/RefContext';
import CallToAction from './CallToAction';
import HeaderSocials from './HeaderSocials';
import pfp from '../../assets/headshot-no-bg.png';

export default function Header() {
  const { home, portfolio, contact, scrollTo } = useContext(RefContext);
  return (
    <header ref={home}>
      <div className='container header__container'>
        <h5 className='text-light'>Hey there, I'm</h5>
        <h1 className='header__name'>Austin Taylor</h1>
        <h5 className='text-light'>and I'm a Software Developer.</h5>
        <CallToAction
          contact={contact}
          scrollTo={scrollTo}
        />
        <HeaderSocials />
        <div className='pfp-container'>
          <img
            src={pfp}
            className='pfp'
            alt='austin taylor'
          />
        </div>
        <div className='scroll__down__container'>
          <div className='scroll__down__portfolio scroll__down'>
            <h3
              onClick={() => {
                scrollTo(portfolio);
              }}
            >
              Portfolio
            </h3>
          </div>
          <div
            className='scroll__down scroll__down__arrows'
            title='scroll down arrows'
          >
            <span
              onClick={() => {
                scrollTo(portfolio);
              }}
            >{`>`}</span>
            <span
              onClick={() => {
                scrollTo(portfolio);
              }}
            >{`>`}</span>
            <span
              onClick={() => {
                scrollTo(portfolio);
              }}
            >{`>`}</span>
            <span
              onClick={() => {
                scrollTo(portfolio);
              }}
            >{`>`}</span>
            <span
              onClick={() => {
                scrollTo(portfolio);
              }}
            >{`>`}</span>
            <span
              onClick={() => {
                scrollTo(portfolio);
              }}
            >{`>`}</span>
            <span
              onClick={() => {
                scrollTo(portfolio);
              }}
            >{`>`}</span>
            <span
              onClick={() => {
                scrollTo(portfolio);
              }}
            >{`>`}</span>
            <span
              onClick={() => {
                scrollTo(portfolio);
              }}
            >{`>`}</span>
            <span
              onClick={() => {
                scrollTo(portfolio);
              }}
            >{`>`}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
