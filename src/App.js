import React from 'react';

import './App.css';
import Service from './components/service';
import { Header } from './components/header';
import { Cases } from './components/cases';
import { Divider } from './components/divider';
import { Wrapper } from './components/wrapper';
import { Expert } from './components/expert';
import { Footer } from './components/footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Cases />
      <Divider />
      <Service />
      <Wrapper />
      <Expert />
      <Footer />
    </div>
  );
}

export default App;
