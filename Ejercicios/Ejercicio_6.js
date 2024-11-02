// 6. 
// Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true



// Creamos nuestra función some personalizada
function miSome(array, callback) {
    // Recorremos cada elemento del array
    for (let i = 0; i < array.length; i++) {
        // Si algún elemento cumple la condición
        if (callback(array[i])) {
            // Devolvemos true inmediatamente
            return true;
        }
    }
    
    // Si llegamos aquí, ningún elemento cumplió la condición
    return false;
}

// Ejemplo de uso:
const array = [2, 5, 8, 10, 15];

// Solicitar al usuario un valor para verificar si al menos un elemento es mayor a ese número
const valor = prompt("Ingrese un valor para verificar si algún elemento es mayor a este valor:");

// Convertimos el valor ingresado a número y usamos miSome para verificar el array
const algunMayor = miSome(array, function(elemento) {
    return elemento > Number(valor); // Callback que verifica si algún elemento es mayor al valor ingresado
});

// Mostramos el resultado al usuario
if (algunMayor) {
    alert("Al menos un elemento es mayor que " + valor);
} else {
    alert("Ningún elemento es mayor que " + valor);
}






// Creamos nuestra función some personalizada
function miSome(array, callback) {
    // Recorremos cada elemento del array
    for(let i = 0; i < array.length; i++) {
        // Si algún elemento cumple la condición
        if(callback(array[i])) {
            // Devolvemos true inmediatamente
            return true;
        }
    }
    
    // Si llegamos aquí, ningún elemento cumplió la condición
    return false;
}

// Ejemplos de uso:

// Ejemplo 1: Comprobar si hay algún número mayor que 10
const numeros1 = [2, 5, 8, 12, 4];
const hayMayorQue10 = miSome(numeros1, function(numero) {
    return numero > 10;
});
console.log('Números:', numeros1);
console.log('¿Hay algún número mayor que 10?', hayMayorQue10); // true

// Con ningún número mayor que 10
const numeros2 = [2, 5, 8, 9, 4];
const hayMayorQue10_2 = miSome(numeros2, function(numero) {
    return numero > 10;
});
console.log('Números:', numeros2);
console.log('¿Hay algún número mayor que 10?', hayMayorQue10_2); // false

// Ejemplo 2: Comprobar si hay alguna palabra que empiece con 'a'
const palabras = ['casa', 'perro', 'auto', 'programa'];
const hayPalabraConA = miSome(palabras, function(palabra) {
    return palabra.startsWith('a');
});
console.log('Palabras:', palabras);
console.log('¿Hay alguna palabra que empiece con "a"?', hayPalabraConA); // true

// Ejemplo 3: Comprobar si hay algún número par
const numeros3 = [1, 3, 5, 7, 8];
const hayNumeroPar = miSome(numeros3, function(numero) {
    return numero % 2 === 0;
});
console.log('Números:', numeros3);
console.log('¿Hay algún número par?', hayNumeroPar); // true

// Con ningún número par
const numeros4 = [1, 3, 5, 7, 9];
const hayNumeroPar2 = miSome(numeros4, function(numero) {
    return numero % 2 === 0;
});
console.log('Números:', numeros4);
console.log('¿Hay algún número par?', hayNumeroPar2); // false


// Te explico cómo funciona paso a paso:

// La función miSome recibe dos parámetros:

// array: el array que queremos comprobar
// callback: la función que define la condición a cumplir


// Dentro de la función:

// Recorremos cada elemento del array
// Para cada elemento:

// Si el callback devuelve true para algún elemento, devolvemos true inmediatamente
// Si el callback devuelve false, continuamos con el siguiente elemento


// Si terminamos de recorrer todo el array sin encontrar ningún true, devolvemos false
