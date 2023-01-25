const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3 ] = personajes; // F2 para refactorar

console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123];
}


const [ letras, numeros ] = retornaArreglo();
console.log(letras);
console.log(numeros);


// Tarea
// 1. El primer valor del arr se llamará nombre
// 2. Se llamará setNombre

const usestate = (valor) => {
    return [valor, () => {console.log('Hola mundo!')}]
};

const [nombre, setNombre] = usestate( 'Goku' );
console.log(nombre);

setNombre();

