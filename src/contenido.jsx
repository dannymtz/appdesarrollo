import React from 'react'
import './contenido.css';
class Contenido extends React.Component{
    render(){
        return(
        <div className="grid-contenedor">
            <div className="gird-elemento">1</div>
            <div className="grid-elemento">2</div>
            <div className="grid-elemento">3</div>
            <div className="grid-elemento">4</div>
            <div className="grid-elemento">5</div>
            <div className="grid-elemento">6</div>
        </div>
        );
    }
}
export default Contenido