import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Gustavo', age: 23 },
      { name: 'Felipe', age: 17 },
      { name: 'Carol', age: 24 },
    ],
  };

  switchNameHandler = () => {
    console.log('Was clicked!');
  };

  render() {
    return (
      <div className='App'>
        <h1>Hello!</h1>
        <p>A paragraph</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          Sou irmão do Gustavo
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
