// 4.
//  Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro".


// function miFilter(array, callback) {
   
//     const arrayFiltrado = [];  // Array donde guardaremos los elementos que pasen el filtro
    
    
//     for (let i = 0; i < array.length; i++) { // Recorremos cada elemento del array original
        
//         const elementoActual = array[i]; // Guardamos el elemento actual
        
        
//         if (callback(elementoActual)) { // Si el callback retorna true para este elemento
            
//             arrayFiltrado.push(elementoActual); // Lo agregamos al array filtrado
//         }
//     }
    
    
//     return arrayFiltrado; // Devolvemos el array con los elementos filtrados
// }

// // Ejemplo de uso:
// const array = [1, 5, 7, 9, 12, 15, 18, 21, 24];

// // Solicitar al usuario un valor para filtrar los elementos mayores a ese número
// const valor = prompt("Ingrese un valor para filtrar los números mayores:");

// // Convertimos el valor ingresado a número y usamos miFilter para filtrar el array
// const arrayFiltrado = miFilter(array, function(elemento) {
//     return elemento > Number(valor); // Callback que verifica si el elemento es mayor al valor ingresado
// });

// // Mostramos el array filtrado al usuario
// alert("Array filtrado: " + arrayFiltrado);



function MiFilter(array,callback) {

    const arrayFiltardo = [];

    for (let i = 0;  i < array.length; i++) {

       const elementoActual = array[i];


       if (callback(elementoActual)) {

        arrayFiltardo.push(elementoActual);

        
       }else{
        alert("El numero esta fuera del rango");
       }
    
    }

    return arrayFiltardo;
    
}

const array =[1,3,5,7,9,13,14,16,19,21];

const valor = prompt("Ingrese un numero para filtar los numeros mayores( Del 1 al 21)")

const arrayFiltardo =MiFilter(array,function(Bichito){
    return Bichito >Number(valor)
})

alert("Se filtro el array" + arrayFiltardo);
    





