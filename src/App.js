import React, { Component } from 'react';
import FormInput from './Components/FormInput/FormInput';
import Textarea from './Components/Textarea/Textarea';
import FormButton from './Components/FormButton/FormButton';
import Front from './Components/Front/Front';
import Card from 'react-cards';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Card>
      <Front />
      <FormInput />
      <Textarea />
        
      
      <FormButton />
      </Card>
      
      
      </div>
    );
  }
}

export default App;
