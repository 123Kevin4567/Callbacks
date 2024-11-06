// 10. 
// Crear una función takeWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos hasta el primer callback que devolvió false
// • (Inverso del dropWhile)


// NOta 1
// takeWhile empieza a agregar elementos solo mientras el callback devuelve true, 
// en cuanto encuentra el primer false (Nota simpre aparecera lista completada asi pude crear una lista para que se puedan agregregar mas tareas),
// se detendra toda la ejecucion y no devolvera nada devolviedno un array vacio.

// Nota 2
// Basicamente si la primera es false no saldra nada y si la primera es true apareceran todas las tareas completadas hasta el rpimer false

// PARA NAVEGADOR

// function takeWhile(array, callback) {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i])) {
//             result.push(array[i]);
//         } else {
//             break;
//         }
//     }
//     return result;
// }

// const tareas = [
//     { nombre: "lista", completado: true }
// ];

// // Solicitar la cantidad de tareas
// const cantidadTareas = Number(prompt("Hello, ingresa la cantidad de tareas 📋:"));

// if (isNaN(cantidadTareas) || cantidadTareas <= 0) {
//     alert("La cantidad de tareas debe ser  mayor a 0 si pone mas de 100... bueno suerte.");
// } else {
//     // Recolectar información de cada tarea
//     for (let i = 0; i < cantidadTareas; i++) {
//         const nombre = prompt(`Ingrese el nombre de la tarea ${i + 1}:`);

//         let completado;
//         const respuesta = prompt(`La tarea "${nombre}" esta completada? (si/no):`).toLowerCase();

//         switch (respuesta) {
//             case "si":
//                 completado = true;
//                 break;
//             case "no":
//                 completado = false;
//                 break;
//             default:
//                 alert("Respuesta INCORRECTA :C, procedera a pasar a tarea no completada");
//                 completado = false;
//                 break;
//         }

//         tareas.push({ nombre, completado });
//     }

//     // Usar la función takeWhile para obtener tareas completadas hasta la primera incompleta
//     const tareasCompletadas = takeWhile(tareas, function(tarea) {
//         return tarea.completado === true;
//     });

//     // Preparar la salida
//     let mensajeOriginal = "Lista original de tareas:\n";
//     tareas.forEach((tarea, index) => {
//         mensajeOriginal += `${index + 1}. ${tarea.nombre} - ${tarea.completado ? "Completada" : "Incompleta"}\n`;
//     });

//     let mensajeCompletadas = "Tareas completadas hasta la primera incompleta:\n";
//     tareasCompletadas.forEach((tarea, index) => {
//         mensajeCompletadas += `${index + 1}. ${tarea.nombre} - Completada\n`;
//     });

//     // Mostrar los resultados en ventanas de alerta
//     alert(mensajeOriginal);
//     alert(mensajeCompletadas);
// }


// PARA NODE


const readlineSync = require('readline-sync');

function takeWhile(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i]);
        } else {
            break;
        }
    }
    return result;
}

const tareas = [
    { nombre: "lista", completado: true }
];


const cantidadTareas = Number(readlineSync.question("Hello, ingresa la cantidad de tareas 📋: "));

if (isNaN(cantidadTareas) || cantidadTareas <= 0) {
    console.log("La cantidad de tareas debe ser  mayor a 0 si pone mas de 100... bueno suerte.");
    process.exit();
}


for (let i = 0; i < cantidadTareas; i++) {
    const nombre = readlineSync.question(`Ingrese el nombre de la tarea ${i + 1}: `);

    let completado;
    const respuesta = readlineSync.question(`La tarea "${nombre}" esta completada? (si/no): `).toLowerCase();

    switch (respuesta) {
        case "si":
            completado = true;
            break;
        case "no":
            completado = false;
            break;
        default:
            console.log("Respuesta INCORRECTA :C, procedera a pasar a tarea no completada");
            completado = false;
            break;
    }

    tareas.push({ nombre, completado });
}


const tareasCompletadas = takeWhile(tareas, function(tarea) {
    return tarea.completado === true;
});


console.log("Lista original de las tareas:");
tareas.forEach((tarea, index) => {
    console.log(`${index + 1}. ${tarea.nombre} - ${tarea.completado ? "Completada" : "Incompleta"}`);
});

console.log("\nTareas completadas hasta la primera incompleta:");
tareasCompletadas.forEach((tarea, index) => {
    console.log(`${index + 1}. ${tarea.nombre} - Completada`);
});




