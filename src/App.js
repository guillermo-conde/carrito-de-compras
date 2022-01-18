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
    carrito: []
  }

  agregarAlCarrito = (producto) => {
    const { carrito } = this.state

    if (carrito.find(x => x.nombre === producto.nombre)) {
      const newCarrito = carrito.map(x => x.nombre === producto.nombre ?
      ({ ...x, cantidad: x.cantidad + 1 })
      : x)
      return this.setState({carrito: newCarrito})
    } 
    return this.setState({
      carrito: this.state.carrito.concat({
        ...producto, 
        cantidad: 1
      })
    });
  }

  render(){
    return (
      <div>
        <Navegacion carrito={this.state.carrito}/>
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
