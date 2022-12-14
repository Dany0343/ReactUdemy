// Variables y constantes
// Ya no usar var, por el hoisting

const nombre = 'Oscar'; // Nunca cambia el valor
let apellido = 'Bucio'; // Puede cambiar el valor

// Estas variables crean variables de scope


let valorDado = 5;

console.log(nombre, apellido, valorDado);

if (true) {
	const nombre = 'Peter';
	console.log(nombre)
}

console.log(valorDado);