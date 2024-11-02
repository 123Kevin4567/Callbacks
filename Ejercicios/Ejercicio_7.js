// 7. 
// Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined






// Creamos nuestra función find personalizada
function miFind(array, callback) {
    // Recorremos cada elemento del array
    for (let i = 0; i < array.length; i++) {
        // Guardamos el elemento actual
        const elementoActual = array[i];
        
        // Si el callback devuelve true para este elemento
        if (callback(elementoActual)) {
            // Devolvemos el elemento inmediatamente
            return elementoActual;
        }
    }
    
    // Si no encontramos ningún elemento, devolvemos undefined
    return undefined;
}

// Solicitar al usuario los valores del array
const valores = prompt("Ingrese los valores del array separados por comas:");
// Convertir la entrada en un array de números
const array = valores.split(",").map(Number);

// Solicitar al usuario un valor para buscar el primer elemento igual o mayor a ese número
const valor = prompt("Ingrese un valor para encontrar el primer elemento igual o mayor a este valor:");

// Convertimos el valor ingresado a número y usamos miFind para buscar en el array
const primerElemento = miFind(array, function(elemento) {
    return elemento >= Number(valor); // Callback que verifica si el elemento es igual o mayor al valor ingresado
});

// Mostramos el resultado al usuario
if (primerElemento !== undefined) {
    alert("El primer elemento igual o mayor que " + valor + " es: " + primerElemento);
} else {
    alert("No se encontró ningún elemento igual o mayor que " + valor);
}





// Creamos nuestra función find personalizada
function miFind(array, callback) {
    // Recorremos cada elemento del array
    for(let i = 0; i < array.length; i++) {
        // Guardamos el elemento actual
        const elementoActual = array[i];
        
        // Si el callback devuelve true para este elemento
        if(callback(elementoActual)) {
            // Devolvemos el elemento inmediatamente
            return elementoActual;
        }
    }
    
    // Si no encontramos ningún elemento, devolvemos undefined
    return undefined;
}

// Ejemplos de uso:

// Ejemplo 1: Encontrar el primer número mayor que 10
const numeros1 = [2, 5, 12, 8, 15, 4];
const primerMayorQue10 = miFind(numeros1, function(numero) {
    return numero > 10;
});
console.log('Números:', numeros1);
console.log('Primer número mayor que 10:', primerMayorQue10); // 12

// Sin números mayores que 20
const primerMayorQue20 = miFind(numeros1, function(numero) {
    return numero > 20;
});
console.log('Primer número mayor que 20:', primerMayorQue20); // undefined

// Ejemplo 2: Encontrar la primera palabra que empiece con 'p'
const palabras = ['casa', 'perro', 'auto', 'programa'];
const primeraPalabraConP = miFind(palabras, function(palabra) {
    return palabra.startsWith('p');
});
console.log('Palabras:', palabras);
console.log('Primera palabra que empieza con "p":', primeraPalabraConP); // 'perro'

// Ejemplo 3: Encontrar el primer número par
const numeros2 = [1, 3, 4, 7, 8, 10];
const primerPar = miFind(numeros2, function(numero) {
    return numero % 2 === 0;
});
console.log('Números:', numeros2);
console.log('Primer número par:', primerPar); // 4

// Ejemplo 4: Buscar en un array de objetos
const personas = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 20 }
];

const personaMayorDe28 = miFind(personas, function(persona) {
    return persona.edad > 28;
});
console.log('Primera persona mayor de 28 años:', personaMayorDe28); 
// { nombre: 'Juan', edad: 30 }

// Te explico cómo funciona paso a paso:

// La función miFind recibe dos parámetros:

// array: el array donde queremos buscar
// callback: la función que define la condición de búsqueda


// Dentro de la función:

// Recorremos cada elemento del array
// Para cada elemento:

// Si el callback devuelve true para ese elemento, lo devolvemos inmediatamente
// Si el callback devuelve false, continuamos con el siguiente elemento


// Si terminamos de recorrer todo el array sin encontrar ningún elemento que cumpla la condición, devolvemos undefined