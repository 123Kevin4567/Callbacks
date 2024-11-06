// 7. 
// Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined







function miFind(array, callback) {

    for (let i = 0; i < array.length; i++) {

        const elementoActual = array[i];
        

        if (callback(elementoActual)) {

            return elementoActual;
        }
    }
    

    return undefined;
}

const nombres = prompt("Ingrese nombres separados por comas:");

const array = nombres.split(",");


const letra = prompt("Ingrese una letra o cadena para encontrar el primer nombre que comience con ella:");


const primerNombre = miFind(array, function(nombre) {
    return nombre.trim().toLowerCase().startsWith(letra.toLowerCase());
});


if (primerNombre !== undefined) {
    alert("El primer nombre que comienza con '" + letra + "' es: " + primerNombre);
} else {
    alert("No se encontró ningún nombre que comience con '" + letra + "'");
}






