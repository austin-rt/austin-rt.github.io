import './Portfolio.css';
import { useContext } from 'react';
import { RefContext } from '../../context/RefContext';
import { portfolioItems } from './portfolioItems';

export default function Portfolio() {
  const { portfolio } = useContext(RefContext);
  return (
    <section
      id='portfolio'
      ref={portfolio}
    >
      <h5>Recent Projects</h5>
      <h2>My Portoflio</h2>
      <div className='container portfolio__container'>
        {portfolioItems.map(({ id, image, title, github, demo, stack }) => (
          <article
            className='portfolio__item'
            key={id}
          >
            <div className='portfolio__item-image'>
              <a
                href={demo}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src={image}
                  alt={title}
                />
              </a>
            </div>
            <div className='portfolio__item-title'>
              <a
                href={demo}
                target='_blank'
                rel='noopener noreferrer'
              >
                <h3>{title}</h3>
              </a>
            </div>
            <div className='portfolio__item__stack-icon__container'>
              {stack.map((icon, index) => (
                <h5
                  key={index}
                  className='icon stack-icon'
                >
                  {icon}
                </h5>
              ))}
            </div>
            <div className='portfolio__item-call-to-action'>
              <a
                href={github}
                className='btn'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub Repo
              </a>
              <a
                href={demo}
                className='btn btn-primary'
                target='_blank'
                rel='noopener noreferrer'
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
