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
    showPersons: false,
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }

    return (
      <div className='App'>
        <h1>Hello!</h1>
        <p>A paragraph</p>
        {/* not the most efficient use of passing arguments */}
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
