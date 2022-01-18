import { computeHeadingLevel } from "@testing-library/react";
import { Component } from "react";

const styles = {
    detallesCarro:{
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50
    },
    ul:{
        mardin: 0,
        padding: 0
    },
    producto:{
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #AAA'
    }
}

class DetallesCarro extends Component{
    render(){
        const { carrito } = this.props;
        return(
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carrito.map(x => 
                    <li key={x.nombre} style={styles.producto}>
                        <img alt={x.nombre} src={x.img} width='50' height='32'/>
                        {x.nombre}
                        <span>{x.cantidad}</span>
                    </li>)}
                    
                </ul>
            </div>
        );
    }
}

export default DetallesCarro;