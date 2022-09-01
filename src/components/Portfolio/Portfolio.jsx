import React from 'react';
import './Portfolio.css';
import blockInvaders from '../../assets/block-invaders-4.png';
import ratedOur from '../../assets/rated-our-2.png';
import crappleMaps from '../../assets/crapple-maps-1.png';
import { DiHtml5, DiCss3, DiJavascript, DiReact } from 'react-icons/di';
import { SiPostgresql, SiMongodb, SiExpress } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';

const portfolioItems = [
  {
    id: 1,
    image: ratedOur,
    title: 'Rated Our',
    github: 'https://github.com/deontelaborde/review-app-frontend',
    demo: 'https://rated-our.herokuapp.com',
    oneline: "Rated Our is movie rating app. It's a full-stack PERN app that uses JWT tokens and Local Storage to authenticate and authorize users.",
    stack: [<SiPostgresql />, <SiExpress />, <DiReact />, <FaNodeJs />]
  }, {
    id: 2,
    image: blockInvaders,
    title: 'Block Invaders',
    github: 'https://github.com/austin-rt/blockinvaders',
    demo: 'https://austinrt.io/blockinvaders/',
    oneline: "Block Invaders is a multi-level, in-browser version of the classic arcade game Space Invaders. The user controls a block that can shoot and move left or right while the enemy descends toward the player. As the level increments, the speed of the invaders' descension increases.",
    stack: [<DiHtml5 />, <DiCss3 />, <DiJavascript />]
  }, {
    id: 3,
    image: crappleMaps,
    title: 'Crapple Maps',
    github: 'https://github.com/austin-rt/crapple-maps',
    demo: 'https://crapple-maps.herokuapp.com/',
    oneline: "Crapple Maps is a simple, crowdsourced, full-stack, public restroom locator. This was built using the MERN stack. When a user is in need of a public restroom, they will be able to access the database in list form. If a listing is perceived as inaccurate, users will be able to update or delete the listing.",
    stack: [<SiMongodb />, <SiExpress />, <DiReact />, <FaNodeJs />]
  }
];

export default function Portfolio({portfolio}) {
  return (
    <section id='portfolio' ref={portfolio}>
      <h5>Recent Projects</h5>
      <h2>My Portoflio</h2>
      <div className="container portfolio__container">
        {
          portfolioItems.map(({ id, image, title, github, demo, oneline, stack }) => (
            <article className='portfolio__item' key={id}>
              <div className="portfolio__item-image">
                <a href={demo} target="_blank" rel='noopener noreferrer'>
                  <img src={image} alt={title} />
                </a>
              </div>
              <div className="portfolio__item-title">
                <h3>{title}</h3>
              </div>
              <div className='portfolio__item__stack-icon__container'>

                {stack.map((icon, index) => (
                  <h5 key={index} className="icon stack-icon">
                    {icon}
                  </h5>
                ))}
              </div>
              {/* <p>{oneline}</p> */}
              <div className="portfolio__item-call-to-action">
                <a href={github} className="btn" target="_blank" rel='noopener noreferrer'>GitHub Repo</a>
                <a href={demo} className="btn btn-primary" target="_blank" rel='noopener noreferrer'>Live Demo</a>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  );
}