// 3.
//  Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • obtenga el resultado
// • lo pushee a un nuevo array
// • devuelva el array final con el resultado de cada una de las llamadas al callback.



// VERSION NORMAL


// function miMap(array, callback) {

//     const nuevoArray = []; 
    
//     for (let i = 0; i < array.length; i++) {
//         const resultado = callback(array[i]);
        

//         nuevoArray.push(resultado);
//     }
    

//     return nuevoArray;
// }



// const numeros = [1, 2, 3, 4, 5];


// const resultado = miMap(numeros, function(numero) {
//     return numero * 2;
// });

// console.log('Resultado:', resultado); 





// VERSION RECORTADA



const numeros = [1, 2, 3, 4, 5];


const resultado = numeros.map(function(numero) {
    return numero * 2;
});

console.log('Resultado:', resultado); // [2, 4, 6, 8, 10]

