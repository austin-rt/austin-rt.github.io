import brtr from '../../assets/brtr-1.png';
import blockInvaders from '../../assets/block-invaders-4.png';
import ratedOur from '../../assets/rated-our-2.png';
import crappleMaps from '../../assets/crapple-maps-1.png';
import { DiHtml5, DiCss3, DiJavascript, DiReact } from 'react-icons/di';
import { SiPostgresql, SiMongodb, SiExpress } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';

export const portfolioItems = [
  {
    id: 0,
    image: brtr,
    title: 'brtr',
    github: 'https://github.com/austin-rt/brtr-frontend',
    demo: 'http://brtr-app.herokuapp.com/',
    oneline:
      'brtr functions as a simulated buy / sell platform for any type of item. You can tell how cool and hip and 2010s we are by the lack of vowels in our name. Users can browse as a guest or create an account for the full experience. With an account users will be able to list and sell thier items and buy other users items. A post MVP version sees reviews for both users and items, credit card processing, user and product reviews, and a barter system to trade items instead of using money.',
    stack: [<SiPostgresql />, <SiExpress />, <DiReact />, <FaNodeJs />],
  },
  {
    id: 1,
    image: ratedOur,
    title: 'Rated Our',
    github: 'https://github.com/deontelaborde/review-app-frontend',
    demo: 'https://rated-our.herokuapp.com',
    oneline:
      "Rated Our is movie rating app. It's a full-stack PERN app that uses JWT tokens and Local Storage to authenticate and authorize users.",
    stack: [<SiPostgresql />, <SiExpress />, <DiReact />, <FaNodeJs />],
  },
  {
    id: 2,
    image: blockInvaders,
    title: 'Block Invaders',
    github: 'https://github.com/austin-rt/blockinvaders',
    demo: 'https://austinrt.io/blockinvaders/',
    oneline:
      "Block Invaders is a multi-level, in-browser version of the classic arcade game Space Invaders. The user controls a block that can shoot and move left or right while the enemy descends toward the player. As the level increments, the speed of the invaders' descension increases.",
    stack: [<DiHtml5 />, <DiCss3 />, <DiJavascript />],
  },
  {
    id: 3,
    image: crappleMaps,
    title: 'Crapple Maps',
    github: 'https://github.com/austin-rt/crapple-maps',
    demo: 'https://crapple-maps.herokuapp.com/',
    oneline:
      'Crapple Maps is a simple, crowdsourced, full-stack, public restroom locator. This was built using the MERN stack. When a user is in need of a public restroom, they will be able to access the database in list form. If a listing is perceived as inaccurate, users will be able to update or delete the listing.',
    stack: [<SiMongodb />, <SiExpress />, <DiReact />, <FaNodeJs />],
  },
];
