import { createContext, useRef } from 'react';

export const RefContext = createContext(null);

export const RefProvider = ({ children }) => {
  const home = useRef(null);
  const about = useRef(null);
  const portfolio = useRef(null);
  const experience = useRef(null);
  const contact = useRef(null);

  const scrollTo = (section) => {
    window.scrollTo({
      top: section.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const data = {
    home: home,
    about: about,
    portfolio: portfolio,
    experience: experience,
    contact: contact,
    scrollTo: scrollTo,
  };

  return <RefContext.Provider value={data}>{children}</RefContext.Provider>;
};
