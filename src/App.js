import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Hello!</h1>
        <Person name='Gustavo' age='23' />
        <Person name='Felipe' age='17'>
          Sou irmão do Gustavo
        </Person>
        <Person name='Julia' age='20' />
      </div>
    );
  }
}

export default App;
