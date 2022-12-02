import './Experience.css';
import { useContext } from 'react';
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiPython } from 'react-icons/di';
import { RiVuejsFill } from 'react-icons/ri';
import {
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiSequelize,
  SiFirebase,
  SiFlask,
  SiRedux,
  SiTailwindcss,
} from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import { RefContext } from '../../context/RefContext';

export default function Experience() {
  const { experience } = useContext(RefContext);
  return (
    <section
      id='experience'
      ref={experience}
    >
      <h5>Skills</h5>
      <h2>My Expereince</h2>

      <div className='container experience__container'>
        <div className='experience__fontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <DiReact className='experience__details-icon icon' />
              <h4 className='experience__details-text'>React.js</h4>
            </article>

            <article className='experience__details'>
              <SiRedux className='experience__details-icon icon' />
              <h4 className='experience__details-text'>Redux</h4>
            </article>

            <article className='experience__details'>
              <SiTailwindcss className='experience__details-icon icon' />
              <h4 className='experience__details-text'>TailwindCSS</h4>
            </article>

            <article className='experience__details'>
              <RiVuejsFill className='experience__details-icon icon' />
              <h4>Vue.js</h4>
            </article>

            <article className='experience__details'>
              <DiJavascript className='experience__details-icon icon' />
              <h4 className='experience__details-text'>JavaScipt</h4>
            </article>

            <article className='experience__details'>
              <DiCss3 className='experience__details-icon icon' />
              <h4 className='experience__details-text'>CSS</h4>
            </article>

            <article className='experience__details'>
              <DiHtml5 className='experience__details-icon icon' />
              <h4 className='experience__details-text'>HTML</h4>
            </article>
          </div>
        </div>

        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon icon' />
              <h4 className='experience__details-text'>Node.js</h4>
            </article>

            <article className='experience__details'>
              <SiExpress className='experience__details-icon icon' />
              <h4 className='experience__details-text'>Express.js</h4>
            </article>

            <article className='experience__details'>
              <SiFirebase className='experience__details-icon icon' />
              <h4 className='experience__details-text'>Firebase</h4>
            </article>

            <article className='experience__details'>
              <SiPostgresql className='experience__details-icon icon' />
              <h4 className='experience__details-text'>PostgreSQL</h4>
            </article>

            <article className='experience__details'>
              <SiSequelize className='experience__details-icon icon' />
              <h4 className='experience__details-text'>Sequelize</h4>
            </article>

            <article className='experience__details'>
              <SiMongodb className='experience__details-icon icon' />
              <h4 className='experience__details-text'>MongoDB</h4>
            </article>

            <article className='experience__details'>
              <MdOutlineLibraryBooks className='experience__details-icon icon' />
              <h4 className='experience__details-text'>Mongoose</h4>
            </article>

            <article className='experience__details'>
              <DiPython className='experience__details-icon icon' />
              <h4>Python</h4>
            </article>

            <article className='experience__details'>
              <SiDjango className='experience__details-icon icon' />
              <h4>Django</h4>
            </article>

            <article className='experience__details'>
              <SiFlask className='experience__details-icon icon' />
              <h4>Flask</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
