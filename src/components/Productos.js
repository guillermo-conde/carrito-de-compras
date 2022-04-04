import { Component } from "react";
import Producto from "./Producto";


const styles = {
    productos:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    }
}

class Productos extends Component {
    render(){
        const { productos, agregarAlCarrito } = this.props;
        return(
            <div style={styles.productos}>
                {productos.map(producto =>
                    <Producto
                        agregarAlCarrito = {agregarAlCarrito}
                        key = {producto.nombre}
                        producto = {producto}
                    >                     
                    </Producto>
                )}
            </div>
        );
    }
}

export default Productos;