const persona = {
	nombre: 'Oscar',
	apellido: 'Bucio',
	edad: 21,
	direccion: {
		ciudad: 'New York',
		lat: 14.322,
		lng: 34.1215,
	},

};

// console.log( {persona: persona} );
// console.log(persona)

// Desde ES6
// console.table({persona});

// Un prototype es como el ADN


// Clonar objetos

// const persona2 = persona; // Se copia la referencia en memoria
// persona2.nombre = 'Peter';

// console.log(persona);
// console.log(persona2);  
// Como en Python, se modifican ambos


// Para clonarlo efectivamente 
const persona2 = {...persona}; // Con el REST operator, así se clona bien
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2); 