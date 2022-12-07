import PropTypes from 'prop-types' // En Vite se instala manualmente

export const FirstApp = ({ title, subTitle }) => { // Se desestructura de las props y ya se puede trabajar de manera directa.

    return (
        <>
            <h1>{ title }</h1>
            <code>Mis peliculas favoritas son: Interstellar y 2001</code>
            <p>Soy ingeniero de Software</p>
            <p>Tengo {subTitle} años</p>
        </>
    )
}

FirstApp.propTypes = { // Se importo como PropTypes pero aquí se utiliza como propTypes
    //title: PropTypes.string // Hasta ahora solo revisa los tipos, pero no si es obligatorio
    title: PropTypes.string.isRequired, // Ahora si es obligatorio
    subTitle: PropTypes.number.isRequired,
} 
