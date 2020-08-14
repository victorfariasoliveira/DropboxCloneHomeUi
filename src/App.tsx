import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import Section from './components/Section'
import SideMenu from './components/SideMenu'
import texts from './data'

function App() {
  return (
    <>
    <Section 
      variant="blue"
      title={texts[0].title}
      description={texts[0].description}
    />

    <Section 
      variant="beige"
      title={texts[1].title}
      description={texts[1].description}
    />

    <Section 
      variant="blue"
      title={texts[2].title}
      description={texts[2].description}
    />

    <Section 
      variant="white"
      title={texts[3].title}
      description={texts[3].description}
    />

    <Section 
      variant="black"
      title={texts[4].title}
      description={texts[4].description}
    />

    <SideMenu />
    <GlobalStyles />
    </>
  );
}

export default App;
