import PropTypes from 'prop-types' // En Vite se instala manualmente

export const FirstApp = ({ title, subTitle, name }) => { // Se desestructura de las props y ya se puede trabajar de manera directa.

    return (
        <>
            <h1>{ title }</h1>
            <code>Mis peliculas favoritas son: Interstellar y 2001</code>
            <p>Soy ingeniero de Software</p>
            <p>{subTitle} </p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = { // Se importo como PropTypes pero aquí se utiliza como propTypes
    title: PropTypes.string.isRequired, // Es obligatorio
    subTitle: PropTypes.string,
} 


// Hay otra manera de definir los parametros por defecto, los default props entran antes que los propTypes
FirstApp.defaultProps = { // Se puede definir cualquier cantidad de propiedades por defecto e incluso se pueden poner propiedades que 
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo', // Aquí si evalua el PropType
    name: 'Oscar Bucio' // Se puede implementar un defaultprop para una prop aunque no la hayamos desestructurado, se puede ver en las devtools, como se recibe el prop. Despues si se puede desestructurar para usarlo
}

// Normalmente estos dos van al final