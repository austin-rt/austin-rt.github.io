import React from 'react';
import './Experience.css';
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiPython } from 'react-icons/di';
import { RiVuejsFill } from 'react-icons/ri';
import { SiDjango, SiPostgresql, SiMongodb, SiExpress } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';

export default function Experience() {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Expereince</h2>

      <div className='container experience__container'>
        <div className="experience__fontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className="experience__details">
              <DiReact className='experience__details-icon icon' />
              <h4>React.js</h4>
            </article>

            <article className="experience__details">
              <DiJavascript className='experience__details-icon icon' />
              <h4>JavaScipt</h4>
            </article>

            <article className="experience__details">
              <DiHtml5 className='experience__details-icon icon' />
              <h4>HTML</h4>
            </article>

            <article className="experience__details">
              <DiCss3 className='experience__details-icon icon' />
              <h4>CSS</h4>
            </article>

            <article className="experience__details">
              <RiVuejsFill className='experience__details-icon icon' />
              <h4>Vue.js</h4>
            </article>

          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">

            <article className="experience__details">
              <FaNodeJs className='experience__details-icon icon' />
              <h4>Node.js</h4>
            </article>

            <article className="experience__details">
              <SiExpress className='experience__details-icon icon' />
              <h4>Express.js</h4>
            </article>

            <article className="experience__details">
              <SiPostgresql className='experience__details-icon icon' />
              <h4>PostgreSQL</h4>
            </article>

            <article className="experience__details">
              <SiMongodb className='experience__details-icon icon' />
              <h4>MongoDB</h4>
            </article>

            {/* <article className="experience__details">
              <SiDjango className='experience__details-icon icon' />
              <h4>Django</h4>
            </article>

            <article className="experience__details">
              <DiPython className='experience__details-icon icon' />
              <h4>Python</h4>
            </article> */}

          </div>

        </div>
      </div>
    </section>
  );
}
