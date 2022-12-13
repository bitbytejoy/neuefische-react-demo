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

  const items = [
    {id: "1", name: "John", age: 30},
    {id: "2", name: "Tom", age: 20},
    {id: "3", name: "Marry", age: 25},
  ];

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

      <ul>
        {items.map(item => (
          <li key={item.id}>name: {item.name}, age: {item.age}</li>
        ))}
      </ul>

      <div>
        {items.map((item, i) => (
          <Greeting
            key={item.id}
            name={item.name}
            age={item.age}
            onClick={() => {}}
          >
            Index: {i}
          </Greeting>
        ))}
      </div>
    </div>
  );
}

export default App;
