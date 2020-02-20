import React, { Component } from 'react';
import Header from './Components/Header';
import Books from './Components/Books';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{  
          backgroundImage: "url(" + "https://artsy-media-uploads.s3.amazonaws.com/vUNbMla7C4d6_OwBKt9fMQ%2FArtsy+-+Josephine+Meckseper-0226.jpg" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'}}>
        
        <Header />
        <Books />
      </div>
    );
  }
}
export default App;
