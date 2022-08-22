import React from 'react';
import './Portfolio.css';
import blockInvaders from '../../assets/block-invaders-4.png';
import ratedOur from '../../assets/rated-our-2.png';
import crappleMaps from '../../assets/crapple-maps-1.png';

const portfolioItems = [
  {
    id: 1,
    image: ratedOur,
    title: 'Rated Our',
    github: 'https://github.com/deontelaborde/review-app-frontend',
    demo: 'https://rated-our.herokuapp.com'
  }, {
    id: 2,
    image: blockInvaders,
    title: 'Block Invaders',
    github: 'https://github.com/austin-rt/blockinvaders',
    demo: 'https://austinrt.io/blockinvaders/'
  }, {
    id: 3,
    image: crappleMaps,
    title: 'Crapple Maps',
    github: 'https://github.com/austin-rt/crapple-maps',
    demo: 'https://crapple-maps.herokuapp.com/'
  }
];

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>Recent Projects</h5>
      <h2>My Portoflio</h2>
      <div className="container portfolio__container">
        {
          portfolioItems.map(({ id, image, title, github, demo }) => (
            <a href={demo} target="_blank" rel='noopener noreferrer'>
              <article className='portfolio__item' key={id}>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-call-to-action">
                  <a href={github} className="btn" target="_blank" rel='noopener noreferrer'>GitHub Repo</a>
                  <a href={demo} className="btn btn-primary" target="_blank" rel='noopener noreferrer'>Live Demo</a>
                </div>
              </article>
            </a>
          ))
        }
      </div>
    </section>
  );
}