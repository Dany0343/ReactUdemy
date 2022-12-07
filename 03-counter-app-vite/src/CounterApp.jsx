// Tarea
import PropTypes from 'prop-types';

// Componente, functional component
export const CounterApp = ({ value }) => {


    return (
        // Fragment
        <>
            <h1>CounterApp</h1>
            <p>{value}</p>
        </>
    )
}

CounterApp.propTypes = { // Se importó como PropTypes pero aquí se utiliza como propTypes
    value: PropTypes.number.isRequired, 
} 


CounterApp.defaultProps = {  // Por si no sae pasa nada desde el padre, entonces se toma el valor por defecto 0
    value: 0,
}
