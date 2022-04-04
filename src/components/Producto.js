import { Component } from "react";
import Button from "./Button";

const styles = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '5px',
        marginTop: '10px' ,
    },
    img: {
        width: '100%'
    }
}

class Producto extends Component{
    render(){
        const { producto, agregarAlCarrito } = this.props;
        return(
            <div style={styles.producto}>
                <img alt={producto.name} src={producto.img} style={styles.img}/>
                <h3>{producto.nombre}</h3>
                <p>{producto.precio}</p>
                <Button
                    onClick={()=> agregarAlCarrito(producto)}
                >
                    Agregar al carrito de compras
                </Button>
            </div>
        )
    };
}

export default Producto;