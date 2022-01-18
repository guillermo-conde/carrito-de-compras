import { Component } from 'react';
import './App.css';
import Productos from './components/Productos';
class App extends Component{
  state={
    productos:[
      {nombre: 'Tomate', precio: 15.00, img: '/productos/tomate.jpg'},
      {nombre: 'Arbejas', precio: 25.00, img: '/productos/arbejas.jpg'},
      {nombre: 'Lechuga', precio: 7.00, img: '/productos/lechuga.jpg'}
    ]
  }
  render(){
    return (
      <div>
        <Productos
        agregarAlCarrito = {() => console.log('Agregando al carrito')}
        productos = {this.state.productos}  
        ></Productos>
      </div>
    );
  };
}

export default App;
