import React, { Component } from 'react';
import MyB from './Button';
import Card from './Card';
import Form from './Form';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = { counter: 0, cards:[] };

    incrementCounter = (incValue) => {
      this.setState((prevState) => ({
        counter: prevState.counter + incValue
      }));
    };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <MyB incValue={1} onFooFunction={this.incrementCounter}/>
          <MyB incValue={2} onFooFunction={this.incrementCounter}/>
          <MyB incValue={4} onFooFunction={this.incrementCounter}/>
          <Result abracadabra={this.state.counter}/>
          <Form onSubmit={this.addNewCard}/>
          <Card cards={this.state.cards}/>
        </div>
      </div>      
    );
  }

  addNewCard = (cardInfo) =>{
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };
}
const Result = (props) => {
  return (<div>{props.abracadabra}</div>);
};

export default App;