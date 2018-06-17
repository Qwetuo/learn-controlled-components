import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      todos: []
    };
  }
  render() {
    return (
      <div>
        <h1>Learn controlled components</h1>
        <ul>
          {this.state.todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
        <input onChange={(event) => this.handleChange(event)}/>
        <button onClick={() => this.handleClick()}>Submit</button>
      </div>
    );
  }


  handleClick() {
    this.setState({
      todos: [...this.state.todos, this.state.value],
      value: ""
    });
    // this.setState({
    //   value: ""
    // })
  }
  
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
}

export default App;
