import { Component } from "react";
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro';

const styles = {
    carro: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer'
    },
    bubble: {
        position: 'relative',
        left: '12px',
        top: '20px'
    }
}

class Carro extends Component{
    render(){
        const { carrito } = this.props;
        const total = carrito.reduce((acc, el) => acc + el.cantidad, 0);

        return(
            <div>
                <span style={styles.bubble}>
                    {total !== 0 ?
                        <BubbleAlert cantidad ={total}/>
                        : null
                    }
                </span>
                <button style={styles.carro}>
                    Carro
                </button>
                <DetallesCarro carrito={carrito}/>
            </div>
        );
    }
}

export default Carro;