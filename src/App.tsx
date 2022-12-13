import React from 'react';
import './App.css';
import Greeting from "./Greeting";

function App() {
  const greeting1Props = {
    name: "Muslim",
    age: 30,
  };

  const onClick = (name: string) => {
    alert(`Es wurde ${name} geclickt`);
  }

  return (
    <div>
      <Greeting {...greeting1Props} onClick={onClick}>Extra body</Greeting>
      <Greeting name="Adrian" onClick={onClick}>
        <div>
          <h1>What's up?</h1>
        </div>
      </Greeting>
      <Greeting name="Doreen" age={30} onClick={onClick}>
        <button>Oha</button>
      </Greeting>
    </div>
  );
}

export default App;
