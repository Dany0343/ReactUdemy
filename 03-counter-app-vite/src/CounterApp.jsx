// Primer Hook
import { useState } from 'react'; // 'use' significa en pocas palabras que es un hook, es una regla

import PropTypes from 'prop-types';


// Componente, functional component
export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value ) // Usualmente se requiere mandar cual es el valor inicial, es el valor del estado, se pone en const para evitar accidentalmente mutar el valor
    // El valor se cambia con el segundo argumento

    const handleAdd = () => { 
        // console.log(event)
        //setCounter( counter + 1 ); // No se pone ++ porque se estaría intentando acumular y eso daría un error
        // Cuando se manda a llamar un setCounter lo que hace es decirle a React que el estado cambió y por consecuencia tiene que volver a ejecutar la renderización del componente, React es muy eficiente, solo el código que necesita ser cambiado cambia

        // Otra forma
       setCounter((c) => c + 1) // Se le manda un callback
    }

    const handleSubstract = () => {
        setCounter( counter - 1 )
    }

    const handleReset = () => {
        setCounter( value )
        // El reset se va a cambiar directamente al valor que tiene value, en este caso 20 y value siempre sigue siendo 20, y no se debería cambiar la property como tal.
    }

    return (

        // Fragment
        <>
            <h1>CounterApp</h1>
            <p>{ counter }</p>

            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubstract }> -1 </button>
            <button onClick={ handleReset }> Reset </button>
        </>
    )
}

CounterApp.propTypes = { // Se importó como PropTypes pero aquí se utiliza como propTypes
    value: PropTypes.number.isRequired, 
} 


CounterApp.defaultProps = {  // Por si no sae pasa nada desde el padre, entonces se toma el valor por defecto 0
    value: 0,
}
