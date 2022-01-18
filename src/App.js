import { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Titulo from './components/Titulo';
import Navegacion from './components/Navegacion';

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
        <Navegacion/>
        <Layout>
          <Titulo></Titulo>
          <Productos
          agregarAlCarrito = {() => console.log('Agregando al carrito')}
          productos = {this.state.productos}  
          ></Productos>
        </Layout>
      </div>
    );
  };
}

export default App;
