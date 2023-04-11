
import React, { useState } from 'react';

function App() {

    return (
      <div id="app">
        <Img />
        <Info />
        <Social />
      </div>
    );
  }
  
  function Img() {
      return (
          <img src={"https://cdn.pixabay.com/photo/2017/04/19/09/32/fish-2241634_960_720.jpg"} width="150" height="150" />
      );
  }
  
  function Info() {

    const [yourName, setYourName] = useState('Your name here');
    const [yourBio, setYourBio] = useState('Short Bio');
    
    return (
        <div>
        <input type="text" placeholder="name here" onChange={(e) => setYourName(e.target.value)} />
        <input type="text" placeholder="short bio" onChange={(e) => setYourBio(e.target.value)} />
        <h1>{yourName}</h1>
        <p>{yourBio}</p>
        </div>
    );
}
  
  function Social() {
      return (
          <div>
              <a href="#yourFB">Facebook</a>
              <a href="#yourtwitter">Twitter</a>
          </div>
      );
  }

  
export default App;

