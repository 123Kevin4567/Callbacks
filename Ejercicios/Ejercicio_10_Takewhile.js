// 10. 
// Crear una función takeWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos hasta el primer callback que devolvió false
// • (Inverso del dropWhile)



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
    {nombre: "lista",
        completado: true
     }
];


const cantidadTareas = Number(prompt("Ingrese la cantidad de tareas:"));


for (let i = 0; i < cantidadTareas; i++) {

    const nombre = prompt(`Ingrese el nombre de la tarea ${i + 1}:`);

    const completado = prompt(`¿La tarea "${nombre}" está completada? (si/no):`).toLowerCase() === "si";
    tareas.push({ nombre, completado });

}


const tareasCompletadas = takeWhile(tareas, function(tarea) {
    return tarea.completado === true; 
});


console.log("Lista original de tareas:", tareas);
console.log("Tareas completadas hasta la primera incompleta:", tareasCompletadas);


// Como takeWhile empieza a agregar elementos solo mientras el callback devuelve true, 
// en cuanto encuentra el primer false (en este caso, la primera tarea), detiene la ejecución y devuelve un array vacío.
// Dado que la primera tarea no está completada (completado: false), el callback de takeWhile devuelve false inmediatamente.
// Resultado Por lo tanto, no se agrega ninguna tarea al array result, y el resultado final será un array vacio