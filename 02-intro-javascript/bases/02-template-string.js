const nombre = 'Oscar';
const apellido = 'Bucio';

// const nombreCompleto = nombre + ' ' + apellido;

// Mejor forma
const nombreCompleto = `${ nombre } ${apellido}`;

console.log( nombreCompleto );

function getSaludo(nombre) {
	return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo(nombre) }` )