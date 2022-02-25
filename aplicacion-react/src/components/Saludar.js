import React from "react";

export default function Saludar(props) {

    const { nombre, apellidos } = props;


    return (
        <div>
            <p>
                Hola {nombre} {apellidos}
            </p>
        </div>
    );
}
