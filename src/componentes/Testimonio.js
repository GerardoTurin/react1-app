import React from 'react';
import '../estilos/Testimonio.css';

function Testimonio(props) {
    return (
        <div className="testimonio">
            <img className='testimonio__imagen' src={require(`../imagenes/testimonio-${props.imagen}.png`)} alt='Foto de Emma' />
            <div className="testimonio__texto">
                <p className="testimonio__texto__nombre"><strong> {props.nombre} </strong> en {props.pais}</p>
                <p className="testimonio__texto__cargo">{props.cargo} en <strong> {props.empresa} </strong></p>
                <p className="testimonio__texto__texto">{props.testimonio}</p>
            </div>
        </div>
    );
}


export default Testimonio;

