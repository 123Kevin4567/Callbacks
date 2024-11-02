// 5.
// Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true
// Creamos nuestra función every personalizada




function miEvery(array, callback) {

    for (let i = 0; i < array.length; i++) {
        
        if (!callback(array[i])) { // Si algún elemento NO cumple la condición
            
            return false; // Devolvemos false inmediatamente
        }
    }
    
    
    return true; // Si llegamos aquí, todos los elementos cumplieron la condición
}


const array = [10, 12, 15, 20, 25];


const valor = prompt("Ingrese un valor para verificar si todos los elementos son mayores a este valor:");


const todosMayores = miEvery(array, function(elemento) {
    return elemento > Number(valor); 
});


if (todosMayores) {
    alert("Todos los elementos son mayores que " + valor);
} else {
    alert("No todos los elementos son mayores que " + valor);
}




















// Creamos nuestra función every personalizada
function miEvery(array, callback) {
    // Recorremos cada elemento del array
    for(let i = 0; i < array.length; i++) {
        // Si algún elemento NO cumple la condición
        if(!callback(array[i])) {
            // Devolvemos false inmediatamente
            return false;
        }
    }
    
    // Si llegamos aquí, todos los elementos cumplieron la condición
    return true;
}

// Ejemplos de uso:

// Ejemplo 1: Comprobar si todos los números son mayores que 5
const numeros1 = [6, 8, 10, 12];
const todosNumerosMayoresQue5 = miEvery(numeros1, function(numero) {
    return numero > 5;
});
console.log('Números:', numeros1);
console.log('¿Todos son mayores que 5?', todosNumerosMayoresQue5); // true

// Otro ejemplo con algunos números menores que 5
const numeros2 = [6, 4, 10, 12];
const todosNumerosMayoresQue5_2 = miEvery(numeros2, function(numero) {
    return numero > 5;
});
console.log('Números:', numeros2);
console.log('¿Todos son mayores que 5?', todosNumerosMayoresQue5_2); // false

// Ejemplo 2: Comprobar si todas las palabras tienen más de 3 letras
const palabras = ['casa', 'perro', 'javascript', 'programación'];
const todasPalabrasMasDe3Letras = miEvery(palabras, function(palabra) {
    return palabra.length > 3;
});
console.log('Palabras:', palabras);
console.log('¿Todas tienen más de 3 letras?', todasPalabrasMasDe3Letras); // true

// Ejemplo 3: Comprobar si todos los números son pares
const numeros3 = [2, 4, 6, 8, 10];
const todosNumerosPares = miEvery(numeros3, function(numero) {
    return numero % 2 === 0;
});
console.log('Números:', numeros3);
console.log('¿Todos son pares?', todosNumerosPares); // true

// Con un número impar
const numeros4 = [2, 4, 7, 8, 10];
const todosNumerosPares2 = miEvery(numeros4, function(numero) {
    return numero % 2 === 0;
});
console.log('Números:', numeros4);
console.log('¿Todos son pares?', todosNumerosPares2); // false


// Te explico cómo funciona paso a paso:

// La función miEvery recibe dos parámetros:

// array: el array que queremos comprobar
// callback: la función que define la condición a cumplir


// Dentro de la función:

// Recorremos cada elemento del array
// Para cada elemento:

// Si el callback devuelve false para algún elemento, devolvemos false inmediatamente
// Si el callback devuelve true, continuamos con el siguiente elemento


// Si terminamos de recorrer todo el array sin encontrar ningún false, devolvemos true