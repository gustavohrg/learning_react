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
    otherState: 'some value',
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Guto';
    // DO THIS INSTEAD
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Felipe', age: 17 },
        { name: 'Carol', age: 24 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Guto', age: 23 },
        { name: event.target.value, age: 17 },
        { name: 'Carol', age: 24 },
      ],
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Hello!</h1>
        <p>A paragraph</p>
        {/* not the most efficient use of passing arguments */}
        <button onClick={() => this.switchNameHandler('Guto!')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          // best use of passing arguments
          click={this.switchNameHandler.bind(this, 'Guto')}
          changed={this.nameChangedHandler}
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
