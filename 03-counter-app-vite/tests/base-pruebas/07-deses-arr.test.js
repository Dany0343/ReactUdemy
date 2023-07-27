import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {

    test('Debe de retornar un string y un número', () => { 

        const [letters, numbers] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123); // toBe también se encarga de evaluar el tipo de dato

        // Si no sabemos el contenido que viene, podemos evaluar por tipos

        expect(typeof letters).toBe('string'); // Se evalua tipo string
        expect(typeof numbers).toBe('number'); // Se evalua tipo number


        expect(letters).toEqual(expect.any(String)); // Este código igual le dice que espera cualquier tipo de String
    });


});