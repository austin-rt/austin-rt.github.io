import React from 'react';
import './Header.css';
import pfp from '../../assets/headshot-no-bg.png';
import CallToAction from './CallToAction';
import HeaderSocials from './HeaderSocials';
import Typewriter from 'typewriter-effect';

export default function Header() {
  const strings = [
    "and I'm ",
    "a Full-Stack Software Developer.",
    "Tinkerer.",
    "Fixie Rider.",
    "Film Photographer.",
    "an Enneagram Five.",
    "me!"];

  return (
    <header>
      <div className='container header__container'>
        <h5 className='text-light'>Hey there, I'm</h5>
        <h1 className='header__name'>Austin Taylor</h1>
        <h5 className='text-light'>
          <Typewriter options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .changeDelay(75)
                .typeString(strings[0])
                .typeString(strings[1]).pauseFor(1000).changeDeleteSpeed(20).deleteChars(strings[1].length - 5).changeDeleteSpeed(50).deleteChars(3).pauseFor(200)
                .typeString(strings[2]).pauseFor(1000).changeDeleteSpeed(20).deleteChars(strings[2].length - 3).changeDeleteSpeed(50).deleteChars(3).pauseFor(200)
                .typeString(strings[3]).pauseFor(1000).changeDeleteSpeed(20).deleteChars(strings[3].length - 3).changeDeleteSpeed(50).deleteChars(3).pauseFor(200)
                .typeString(strings[4]).pauseFor(1000).changeDeleteSpeed(20).deleteChars(strings[4].length - 1).changeDeleteSpeed(50).deleteChars(3).pauseFor(100)
                .typeString(strings[5]).pauseFor(1000).changeDeleteSpeed(20).deleteChars(strings[5].length - 3).changeDeleteSpeed(50).deleteChars(3).pauseFor(200)
                .typeString(strings[6]).pauseFor(2000).deleteAll()
                .start();
            }} />

        </h5>
        <CallToAction />
        <HeaderSocials />
        <div className='pfp'>
          <img src={pfp} alt="austin talor" />
        </div>
        <div className="scroll__down__container">
          <a href="#portfolio" className='scroll__down__portfolio scroll__down'><h3>Portfolio</h3></a>
          <a href="#portfolio" className='scroll__down scroll__down__arrows'>
            <span>{`>`}</span>
            <span>{`>`}</span>
            <span>{`>`}</span>
            <span>{`>`}</span>
            <span>{`>`}</span>
            <span>{`>`}</span>
            <span>{`>`}</span>
            <span>{`>`}</span>
            <span>{`>`}</span>
            <span>{`>`}</span>
          </a>
        </div>
      </div>
    </header>
  );
}