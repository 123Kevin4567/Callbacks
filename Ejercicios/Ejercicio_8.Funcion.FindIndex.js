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
            return i; 
        }
    }
    return undefined;
}


const inputNombres = prompt("Ingrese una lista de nombres separados por comas:");

const nombres = inputNombres.split(',').map(nombre => nombre.trim());


const opcion = prompt("Elija una opción:\n1. Buscar nombre que empiece con una letra específica\n2. Buscar nombre que contenga una letra específica\n3. Buscar nombre que termine con una letra específica");


switch (opcion) {
    case '1':
        const letraInicio = prompt("Ingrese la letra con la que debe empezar el nombre:");
        const indiceInicio = findIndex(nombres, function(nombre) {
            return nombre.startsWith(letraInicio); 
        });

        if (indiceInicio !== undefined) {
            console.log('El primer nombre que empieza con "' + letraInicio + '" es: ' + nombres[indiceInicio]);
        } else {
            console.log('No se encontró ningún nombre que empiece con la letra "' + letraInicio + '".');
        }
        break;

    case '2':
        const letraContiene = prompt("Ingrese la letra que debe contener el nombre:");
        const indiceContiene = findIndex(nombres, function(nombre) {
            return nombre.includes(letraContiene); 
        });

        if (indiceContiene !== undefined) {
            console.log('El primer nombre que contiene "' + letraContiene + '" es: ' + nombres[indiceContiene]);
        } else {
            console.log('No se encontró ningún nombre que contenga la letra "' + letraContiene + '".');
        }
        break;

    case '3':
        const letraFinal = prompt("Ingrese la letra con la que debe terminar el nombre:");
        const indiceFinal = findIndex(nombres, function(nombre) {
            return nombre.endsWith(letraFinal); 
        });

        if (indiceFinal !== undefined) {
            console.log('El primer nombre que termina con "' + letraFinal + '" es: ' + nombres[indiceFinal]);
        } else {
            console.log('No se encontró ningún nombre que termine con la letra "' + letraFinal + '".');
        }
        break;

    default:
        console.log('Opción no válida. Por favor, elija 1, 2 o 3.');
}





