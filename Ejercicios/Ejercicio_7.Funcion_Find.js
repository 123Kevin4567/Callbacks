// 7. 
// Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined






// // Creamos nuestra función find personalizada
// function miFind(array, callback) {
//     // Recorremos cada elemento del array
//     for (let i = 0; i < array.length; i++) {
//         // Guardamos el elemento actual
//         const elementoActual = array[i];
        
//         // Si el callback devuelve true para este elemento
//         if (callback(elementoActual)) {
//             // Devolvemos el elemento inmediatamente
//             return elementoActual;
//         }
//     }
    
//     // Si no encontramos ningún elemento, devolvemos undefined
//     return undefined;
// }

// // Solicitar al usuario los valores del array
// const valores = prompt("Ingrese los valores del array separados por comas:");
// // Convertir la entrada en un array de números
// const array = valores.split(",").map(Number);

// // Solicitar al usuario un valor para buscar el primer elemento igual o mayor a ese número
// const valor = prompt("Ingrese un valor para encontrar el primer elemento igual o mayor a este valor:");

// // Convertimos el valor ingresado a número y usamos miFind para buscar en el array
// const primerElemento = miFind(array, function(elemento) {
//     return elemento >= Number(valor); // Callback que verifica si el elemento es igual o mayor al valor ingresado
// });

// // Mostramos el resultado al usuario
// if (primerElemento !== undefined) {
//     alert("El primer elemento igual o mayor que " + valor + " es: " + primerElemento);
// } else {
//     alert("No se encontró ningún elemento igual o mayor que " + valor);
// }





function miFind(array, callback) {

    for (let i = 0; i < array.length; i++) {

        const elementoActual = array[i];
        

        if (callback(elementoActual)) {

            return elementoActual;
        }
    }
    

    return undefined;
}

const nombres = prompt("Ingrese nombres separados por comas:");

const array = nombres.split(",");


const letra = prompt("Ingrese una letra o cadena para encontrar el primer nombre que comience con ella:");


const primerNombre = miFind(array, function(nombre) {
    return nombre.trim().toLowerCase().startsWith(letra.toLowerCase());
});


if (primerNombre !== undefined) {
    alert("El primer nombre que comienza con '" + letra + "' es: " + primerNombre);
} else {
    alert("No se encontró ningún nombre que comience con '" + letra + "'");
}






