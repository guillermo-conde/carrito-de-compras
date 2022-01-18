import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  state={
    productos:[
      {name: 'Tomate', precio: 15.00, img: '/productos/tomate.jpg'},
      {name: 'Arbejas', precio: 25.00, img: '/productos/arbejas.jpg'},
      {name: 'Lechuga', precio: 7.00, img: '/productos/lechuga.jpg'}
    ]
  }
  render(){
    return (
      <div className="App">
        <p>Hola Mundo</p>
      </div>
    );
  };
}

export default App;
