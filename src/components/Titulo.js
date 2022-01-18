import { Component } from "react";

const styles = {
    titulo: {
        marginBottom: '30px'
    }
}

class Titulo extends Component{
    render(){
        return(
            <h1 style={styles.titulo}>Tienda online</h1>
        );
    }
}

export default Titulo;