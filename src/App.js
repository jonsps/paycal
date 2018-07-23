import React, { Component } from 'react';
import Paycal from './Paycal.svg';
import PayPal from './PayPal.svg';
import IdeasPositivas from './IdeasPositivas.svg';
import './App.css';

import Calculador from './calculador/Calculador'

class App extends Component {

render() {
    return (
      <div className="Container">
        <div className="Header">
          <img src={Paycal} className="App-logo" alt="logo" />
        </div>

        <div className="Body">
          <Calculador />
        </div>

        <div className="Footer">
          <img src={PayPal} className="Footer-logo" alt="logo-PayPal" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={IdeasPositivas} className="Footer-logo" alt="logo-IdeasPositivas" />
        </div>       
      </div>
    );
  }
}

export default App;
