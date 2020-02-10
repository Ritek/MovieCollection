import React from 'react';
import movieList from './movieList.json'
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Collection from './components/Collection'

function App() {

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Collection movieList={movieList}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
