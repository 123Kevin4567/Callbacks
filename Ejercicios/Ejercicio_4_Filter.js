// 4.
//  Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro".




// function MiFilter(array,callback) {

//     const arrayFiltardo = [];

//     for (let i = 0;  i < array.length; i++) {

//        const elementoActual = array[i];


//        if (callback(elementoActual)) {

//         arrayFiltardo.push(elementoActual);
        
//        }
    
//     }

//     return arrayFiltardo;
    
// }

// const array =[1,3,5,7,9,13,14,16,19,21];

// const valor = prompt("Ingrese un numero para filtar los numeros mayores( Del 1 al 21)")

// if (valor < 1 || valor > 21) {
//   valor = prompt("Número fuera de rango. Por favor, ingrese un número entre 1 y 21");
// }

// const arrayFiltardo = MiFilter(array, function(Bichito) {     
//     return Bichito > Number(valor);
// });

// alert("Se filtro el array" + arrayFiltardo);
    
// array.filkter


const array = [1, 3, 5, 7, 9, 13, 14, 16, 19, 21];

let valor = prompt("Ingrese un número para filtrar los números mayores (Del 1 al 21)");

while (valor < 1 || valor > 21) {
  valor = prompt("Número fuera de rango. Por favor, ingrese un número entre 1 y 21");
}


const arrayFiltrado = array.filter(num => num > Number(valor));

alert("Se filtró el array: " + arrayFiltrado);




