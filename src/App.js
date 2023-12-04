import React from 'react';

import {Footer, Feature, What, Header} from './containers';
import {Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
      <What />
      <Feature />
      <Footer />
    </div>
  )
}

export default App