import { Component } from "react";

const styles = {
    bubbleAlert: {
        backgroundColor: '#E9725A',
        borderRadius: '15px',
        color: '#fff',
        padding: '2px 10px',
        fontSize: '0.9rem',
        width: '20px'
    }
}

class BubbleAlert extends Component{
    obtenerNumero(n){
        if (!n) {return ' '}
        return n > 9 ? '9+' : n;
    }

    render(){
        const { cantidad } = this.props;

        return(
            <span style={styles.bubbleAlert}>
                {this.obtenerNumero(cantidad)}
            </span>
        );
    }
}

export default BubbleAlert;