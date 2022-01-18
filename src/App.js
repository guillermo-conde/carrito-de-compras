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
    ],
    carrito: [
      // {nombre: 'Lechuga', precio: 7.00, img: '/productos/lechuga.jpg', cantidad: },
    ]
  }

  agregarAlCarrito = (producto) => {
    return this.setState({
      carrito: this.state.carrito.concat({
        ...producto, 
        cantidad: 1
      })
    });
  }

  render(){
    console.log(this.state.carrito);
    return (
      <div>
        <Navegacion/>
        <Layout>
          <Titulo></Titulo>
          <Productos
          agregarAlCarrito = {this.agregarAlCarrito}
          productos = {this.state.productos}  
          ></Productos>
        </Layout>
      </div>
    );
  };
}

export default App;
