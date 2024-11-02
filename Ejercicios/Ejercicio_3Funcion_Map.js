// 3.
//  Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • obtenga el resultado
// • lo pushee a un nuevo array
// • devuelva el array final con el resultado de cada una de las llamadas al callback.





// Creamos nuestra función map personalizada
function miMap(array, callback) {
    // Creamos un nuevo array para guardar los resultados
    const nuevoArray = [];
    
    // Recorremos cada elemento del array original
    for(let i = 0; i < array.length; i++) {
        // Ejecutamos el callback con el elemento actual
        // y guardamos el resultado
        const resultado = callback(array[i]);
        
        // Agregamos el resultado al nuevo array
        nuevoArray.push(resultado);
    }
    
    // Devolvemos el nuevo array con todos los resultados
    return nuevoArray;
}

// Ejemplos de uso:

// Ejemplo 1: Duplicar números
const numeros = [1, 2, 3, 4, 5];
const duplicados = miMap(numeros, function(numero) {
    return numero * 2;
});
console.log('Números duplicados:', duplicados); // [2, 4, 6, 8, 10]

// Ejemplo 2: Convertir a mayúsculas
const palabras = ['hola', 'mundo', 'javascript'];
const mayusculas = miMap(palabras, function(palabra) {
    return palabra.toUpperCase();
});
console.log('Palabras en mayúsculas:', mayusculas); // ['HOLA', 'MUNDO', 'JAVASCRIPT']

// Ejemplo 3: Obtener longitudes
const frases = ['hola', 'buenos días', 'adiós'];
const longitudes = miMap(frases, function(frase) {
    return frase.length;
});
console.log('Longitudes de las frases:', longitudes); // [4, 11, 5]


// Te explico cómo funciona paso a paso:

// La función miFilter recibe dos parámetros:

// array: el array que queremos filtrar
// callback: la función que decide si un elemento pasa el filtro o no


// Dentro de la función:

// Creamos un array vacío para guardar los elementos filtrados
// Recorremos cada elemento del array original
// Para cada elemento:

// Ejecutamos el callback con ese elemento
// Si el callback devuelve true, agregamos el elemento al nuevo array


// Al final, devolvemos el array con los elementos filtrados