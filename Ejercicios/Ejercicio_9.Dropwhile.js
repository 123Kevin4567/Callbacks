// 9. 
// Crear una función dropWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos a partir del primer callback que devolvió false
// • (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el
// callback de true, no los agrega, cuando el callback da false por primera vez agrega
// todos los elementos restantes a partir de dicho elemento inclusive)




//  Codigo NoRmal



// function dropWhile(array, callback) {
//     let index = 0;

//     while (index < array.length && callback(array[index])) {
//         index++;
//     }

//     return array.slice(index);
// }

// function obtenerNumeroEstudiantes() {
//     let cantidadEstudiantes;
//     do {
//         cantidadEstudiantes = Number(prompt("Ingrese la cantidad de estudiantes (número mayor a 0):"));
//     } while (isNaN(cantidadEstudiantes) || cantidadEstudiantes <= 0);
//     return cantidadEstudiantes;
// }

// function obtenerAprobado() {
//     let respuesta;
//     do {
//         respuesta = prompt("¿Aprobó? (si/no):").toLowerCase();
//     } while (respuesta !== "si" && respuesta !== "no");
//     return respuesta === "si";
// }

// const cantidadEstudiantes = obtenerNumeroEstudiantes();
// const estudiantes = [];

// for (let i = 0; i < cantidadEstudiantes; i++) {
//     const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
//     const aprobado = obtenerAprobado();
//     estudiantes.push({ nombre, aprobado });
// }

// const estudiantesPendientes = dropWhile(estudiantes, function(estudiante) {
//     return estudiante.aprobado === true;
// });

// console.log("Lista original de estudiantes:");
// estudiantes.forEach(est => console.log(`${est.nombre} - ${est.aprobado ? "Aprobado" : "Pendiente"}`));

// console.log("\nEstudiantes pendientes después de dropWhile:");
// estudiantesPendientes.forEach(est => console.log(`${est.nombre} - ${est.aprobado ? "Aprobado" : "Pendiente"}`));

// const cantidadAprobados = estudiantes.filter(est => est.aprobado).length;
// const cantidadPendientes = estudiantes.length - cantidadAprobados;

// console.log("\nResumen:");
// console.log(`Cantidad de estudiantes aprobados: ${cantidadAprobados}`);
// console.log(`Cantidad de estudiantes pendientes: ${cantidadPendientes}`);






// Codigo para NPM

const readlineSync = require('readline-sync');

function dropWhile(array, callback) {
    let index = 0;

    while (index < array.length && callback(array[index])) {
        index++;
    }

    return array.slice(index);
}

function obtenerNumeroEstudiantes() {
    let cantidadEstudiantes;
    do {
        cantidadEstudiantes = Number(readlineSync.question("Ingrese la cantidad de estudiantes (número mayor a 0): "));
    } while (isNaN(cantidadEstudiantes) || cantidadEstudiantes <= 0);
    return cantidadEstudiantes;
}

function obtenerAprobado() {
    let respuesta;
    do {
        respuesta = readlineSync.question("¿Aprobó? (si/no): ").toLowerCase();
    } while (respuesta !== "si" && respuesta !== "no");
    return respuesta === "si";
}

const cantidadEstudiantes = obtenerNumeroEstudiantes();
const estudiantes = [];

for (let i = 0; i < cantidadEstudiantes; i++) {
    const nombre = readlineSync.question(`Ingrese el nombre del estudiante ${i + 1}: `);
    const aprobado = obtenerAprobado();
    estudiantes.push({ nombre, aprobado });
}

const estudiantesPendientes = dropWhile(estudiantes, function(estudiante) {
    return estudiante.aprobado === true;
});

console.log("Lista original de estudiantes:");
estudiantes.forEach(est => console.log(`${est.nombre} - ${est.aprobado ? "Aprobado" : "Pendiente"}`));

console.log("\nEstudiantes pendientes después de dropWhile:");
estudiantesPendientes.forEach(est => console.log(`${est.nombre} - ${est.aprobado ? "Aprobado" : "Pendiente"}`));

const cantidadAprobados = estudiantes.filter(est => est.aprobado).length;
const cantidadPendientes = estudiantes.length - cantidadAprobados;

console.log("\nResumen:");
console.log(`Cantidad de estudiantes aprobados: ${cantidadAprobados}`);
console.log(`Cantidad de estudiantes pendientes: ${cantidadPendientes}`);



bichito.map( bichito => console.log((nombre)=>{


}));
