import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser(); 

        expect( testUser ).toStrictEqual( user ); // No usar el toBe, mejor usar el toStrictEqual o el toEqual, el cual verifica incluso las direcciones de memoria en objetos, ya que dos objetos aunque parezcan lo mismo apuntan a direcciones de memoria distintas
    });


    //
    test('getUsuarioActivo debe de retornar un objeto', () => {
        const name = "Oscar";

        const user = getUsuarioActivo(name)
        console.log(user);

        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        })
    });

    

    
});