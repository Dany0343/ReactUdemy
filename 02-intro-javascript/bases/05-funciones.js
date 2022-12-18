// Funciones

// function saludar(nombre) {
//     return `Hola, ${ nombre }`
// }

// saludar = 30

// console.log( saludar ) // Ya no es la referencia a la función



// Por eso es recomendable usar function expressions con constantes, para tener esa funcion siempre
const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}



// Con funciones lambda, funciones flecha

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

// Simplificado

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo!`;

console.log( saludar );
console.log( saludar2('Vegeta') );
console.log( saludar3('Gohan') );
console.log( saludar4() );


const getUser = () => ({
        uid: 'ABC123',
        username: 'Nigger1994'
    }) // Retorno implicito con parentesis

// console.log(getUser())

const user = getUser();
console.log(user);


// Tarea
const getUsuarioActivo = (nombre) =>({
    uid: 'ABC567',
    usernmame: nombre,
});

const usuarioActivo = getUsuarioActivo('Oscar');
console.log(usuarioActivo)