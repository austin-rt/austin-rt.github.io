import React from 'react';
import './About.css';
import aboutMe from '../../assets/about-me.png';

export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>A Little About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-pfp">
            <img src={aboutMe} alt="austin taylor" />
          </div>
        </div>

        <div className="about__content">
          <p>
            A cameraman turned full-stack developer. I've always been fascinated by the inner workings of gadgets. From converting my vintage bikes into fixies to developing my own film photography, I disassemble and rebuild anything I can get my hands on just to understand how it works.</p>
          <p>I am a bridger of gaps. Whether Digital, IRL, or Web3, I have always had a passion for connecting my friends with my friends. Few things in life are as satisfying as being "the guy who knows the perfect person for that".</p>
          <p>After a successful tenure in the film industry, I am further cultivating my curiosity and creative spirit by crafting code and connecting communities.
          </p>
          <div className='about__contact-btn-container'>
            <a href="#contact" className="btn btn-primary about__contact-btn">Say Hi</a>
          </div>
        </div>
      </div>
    </section>
  );
};
