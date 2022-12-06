
const favoriteSpaceMovies = {
    1: {
        name: "Interstellar",
        director: 'Christopher Nolan'
    },
    2: {
        name: "2001: A Space Odyssey",
        director: "Stanley Kubrick"
    }
};

const name = "Oscar Bucio"
 
const greeting = () => {
    return `Hola Mundo! mi nombre es: ${name}`
}

export const FirstApp = ({ title, subTitle }) => { // Se desestructura de las props y ya se puede trabajar de manera directa.

    // console.log(props)

    return (
        <>
            <h1>{ title }</h1>
            <code>Mis peliculas favoritas son: { JSON.stringify( favoriteSpaceMovies ) }</code>
            <p>Soy ingeniero de Software</p>
            <p>{subTitle + 1}</p>
        </>
    )
}