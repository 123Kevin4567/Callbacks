// 8. 
// Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que
// devuelva true
// • sí ningún callback devuelve true, devuelva undefined



function findIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return i; // Devuelve el índice del primer elemento que cumple la condición
        }
    }
    return undefined; // Si ningún elemento cumple la condición, devuelve undefined
}

// Ejemplo de uso:
const array = [5, 12, 8, 130, 44];

// Solicitar al usuario un valor para buscar
const valor = prompt("Ingrese el valor que quiere buscar:");

// Convertimos el valor ingresado a número y utilizamos findIndex para buscar
const indice = findIndex(array, function(elemento) {
    return elemento === Number(valor); // Callback que compara cada elemento con el valor ingresado
});

if (indice !== undefined) {
    alert(`El valor se encontró en el índice: ${indice}`);
} else {
    alert("El valor no se encontró en el array.");
}


// Creamos nuestra función findIndex personalizada
function miFindIndex(array, callback) {
    // Recorremos cada elemento del array
    for(let i = 0; i < array.length; i++) {
        // Si el callback devuelve true para este elemento
        if(callback(array[i])) {
            // Devolvemos el índice actual
            return i;
        }
    }
    
    // Si no encontramos ningún elemento, devolvemos undefined
    return undefined;
}

// Ejemplos de uso:

// Ejemplo 1: Encontrar el índice del primer número mayor que 10
const numeros1 = [2, 5, 12, 8, 15, 4];
const indiceMayorQue10 = miFindIndex(numeros1, function(numero) {
    return numero > 10;
});
console.log('Números:', numeros1);
console.log('Índice del primer número mayor que 10:', indiceMayorQue10); // 2
console.log('El número en ese índice es:', numeros1[indiceMayorQue10]); // 12

// Sin números mayores que 20
const indiceMayorQue20 = miFindIndex(numeros1, function(numero) {
    return numero > 20;
});
console.log('Índice del primer número mayor que 20:', indiceMayorQue20); // undefined

// Ejemplo 2: Encontrar el índice de la primera palabra que empiece con 'p'
const palabras = ['casa', 'perro', 'auto', 'programa'];
const indicePalabraConP = miFindIndex(palabras, function(palabra) {
    return palabra.startsWith('p');
});
console.log('Palabras:', palabras);
console.log('Índice de la primera palabra que empieza con "p":', indicePalabraConP); // 1
console.log('La palabra en ese índice es:', palabras[indicePalabraConP]); // 'perro'

// Ejemplo 3: Encontrar el índice del primer número par
const numeros2 = [1, 3, 4, 7, 8, 10];
const indicePrimerPar = miFindIndex(numeros2, function(numero) {
    return numero % 2 === 0;
});
console.log('Números:', numeros2);
console.log('Índice del primer número par:', indicePrimerPar); // 2
console.log('El número en ese índice es:', numeros2[indicePrimerPar]); // 4

// Ejemplo 4: Buscar en un array de objetos
const personas = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 20 }
];

const indicePersonaMayorDe28 = miFindIndex(personas, function(persona) {
    return persona.edad > 28;
});
console.log('Índice de la primera persona mayor de 28 años:', indicePersonaMayorDe28); // 1
console.log('La persona en ese índice es:', personas[indicePersonaMayorDe28]); 
// { nombre: 'Juan', edad: 30 }


// La función miFindIndex recibe dos parámetros:

// array: el array donde queremos buscar
// callback: la función que define la condición de búsqueda


// Dentro de la función:

// Recorremos cada elemento del array
// Para cada elemento:

// Si el callback devuelve true para ese elemento, devolvemos su índice (i) inmediatamente
// Si el callback devuelve false, continuamos con el siguiente elemento


// Si terminamos de recorrer todo el array sin encontrar ningún elemento que cumpla la condición, devolvemos undefined