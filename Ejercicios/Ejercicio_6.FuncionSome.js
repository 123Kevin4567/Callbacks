// 6. 
// Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true



// function miSome(array, callback) {

//     for (let i = 0; i < array.length; i++) {

//         if (callback(array[i])) {
           
//             return true;  // Devolvemos true inmediatamente
//         }
//     }
    
    
//     return false; // Si llegamos aquí, ningún elemento cumplió la condición
// }


// const array = [2, 5, 8, 10, 15];


// const valor = prompt("Ingrese un valor para verificar si algún elemento es mayor a este valor:");

// // Convertimos el valor ingresado a número y usamos miSome para verificar el array
// const algunMayor = miSome(array, function(elemento) {
//     return elemento > Number(valor); // Callback que verifica si algún elemento es mayor al valor ingresado
// });

// // Mostramos el resultado al usuario
// if (algunMayor) {
//     alert("Al menos un elemento es mayor que " + valor);
// } else {
//     alert("Ningún elemento es mayor que " + valor);
// }





const array = [2, 5, 8, 10, 15];

const valor = prompt("Ingrese un valor para verificar si algún elemento es mayor a este valor:");


const algunMayor = array.some(elemento => elemento > Number(valor));

if (algunMayor) {
    alert("Al menos un elemento es mayor que " + valor);
} else {
    alert("Ningún elemento es mayor que " + valor);
}

