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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Guto', age: 23 },
        { name: event.target.value, age: 17 },
        { name: 'Carol', age: 24 },
      ],
    });
  };

  deletePersonHandler = (personIndex) => {
    // ES5
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
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
