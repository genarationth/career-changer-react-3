import React from 'react';
import santa from './santa.jpg';


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
        <img src={santa} width="150" height="150" />
    );
}

function Info() {
    let name = "Non"
    let bio = "He loves ice cream"
    return (
        <div>
            <h1>{name}</h1>
            <p>{bio}</p>
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

