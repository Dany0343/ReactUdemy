
// Arreglos en JS

// const arreglo = new Array(100); // Es una forma algo antigua, solo se usa cuando se quiere crear arreglos con un tamaño predefinido. Se puede seguir expandiendo

// const arreglo = []
// arreglo.push(1); // No es recomendable utilizar .push porque modifica el objeto principal 

// console.log(arreglo)


// Por ejemplo
const arreglo = [1, 2, 3, 4];

let arreglo2 = [...arreglo, 5]; // Con spread se pueden añadir cosas y se puede hacer una clonacion correcta

const arreglo3 = arreglo2.map(function(numero){
	return numero * 2;
}); // El metodo map espera una funcion, map crea un nuevo arreglo

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);