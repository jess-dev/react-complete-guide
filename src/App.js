import React from 'react';
import Person from './Person/Person';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <Person name="Jess" age="35" />
      <Person name="Jamie" age="15">My Hobbies: Gaming</Person>
      <Person name="MJ" age="10" />
    </div>
  );
}

export default App;
