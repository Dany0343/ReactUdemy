// Desestructuración
// Asignación Desestructurante


const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan',
    rango: 'Soldado',
};

// const {edad, clave, nombre:nombrexd, } = persona;

// console.log(nombrexd);
// console.log(edad);
// console.log(clave);


// const retornaPersona = (usuario) => {
//     const {edad, clave, nombre, } = usuario;
//     console.log(edad);
//     console.log(clave);
//     console.log(nombre);
// }

const usecontext = ({clave, nombre, edad, rango='Capitan'}) => { // Se puede desestructurar en el argumento y poner por defecto

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 34.328,
            lng: 39.8939,
        },
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = usecontext(persona) // Se desestructura lo que regresa la funcion y además podemos desestructurar el objeto ya desestructurado

// Igual se puede hacer así
// const {lat, lng} = latlng

console.log(nombreClave, anios);
console.log(lat, lng);