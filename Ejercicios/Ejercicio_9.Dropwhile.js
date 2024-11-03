// 9. 
// Crear una función dropWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos a partir del primer callback que devolvió false
// • (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el
// callback de true, no los agrega, cuando el callback da false por primera vez agrega
// todos los elementos restantes a partir de dicho elemento inclusive)


function dropWhile(array, callback) {
    let index = 0;

    while (index < array.length && callback(array[index])) {
        index++;
    }

    return array.slice(index);
}

const cantidadEstudiantes = Number(prompt("Ingrese la cantidad de estudiantes:"));
const estudiantes = [];

for (let i = 0; i < cantidadEstudiantes; i++) {
    const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
    const aprobado = prompt(`¿${nombre} aprobó? (si/no):`).toLowerCase() === "si";
    estudiantes.push({ nombre, aprobado });
}


const estudiantesPendientes = dropWhile(estudiantes, function(estudiante) {
    return estudiante.aprobado === true; 
});


console.log("Lista original de estudiantes:", estudiantes);
console.log("Estudiantes pendientes después de dropWhile:", estudiantesPendientes);

