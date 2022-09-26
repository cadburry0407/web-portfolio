import { useEffect } from 'react';

import Navigation from './sections/Navigation';
import Main from './sections/Main';
import Services from './sections/Services';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const App = () => {
  useEffect(() => {
    document.title = `Portfolio | Emman Enrgeso`;
  }, []);

  return (
    <>
      <Navigation />
      <Main />
      <Services />
      <TechStack />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
