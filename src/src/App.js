import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './Components/Main/index';
import './App.css';
import Test from './Components/Test/Test';
import data from './data.json';

class App extends Component {



  render() {
    return (
      <div className="App">
        <Test title={data.title} attack={data.attack}/>
      

      </div>
    );
  }
};

export default App;
