// 3.
//  Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • obtenga el resultado
// • lo pushee a un nuevo array
// • devuelva el array final con el resultado de cada una de las llamadas al callback.



// VERSION NORMAL


// function miMap(array, callback) {

//     const nuevoArray = []; 
    
//     for (let i = 0; i < array.length; i++) {
//         const resultado = callback(array[i]);
        

//         nuevoArray.push(resultado);
//     }
    

//     return nuevoArray;
// }



// const numeros = [1, 2, 3, 4, 5];


// const resultado = miMap(numeros, function(numero) {
//     return numero * 2;
// });

// console.log('Resultado:', resultado); 


// // VERSION RECORTADA






// const numeros = [1, 2, 3, 4, 5];


// const resultado = numeros.map(function(numero) {
//     return numero * 2;
// });

// console.log('Resultado:', resultado); 


// Version final


const personas = [
    { nombre: 'Grille', edad: 21, fechaNacimiento: '12-05-2003' },
    { nombre: 'Hernan', edad: 37, fechaNacimiento: '04-03-1987' },
    { nombre: 'Jose', edad: 23, fechaNacimiento: '05-11-2000' },
    { nombre: 'Camila', edad: 20, fechaNacimiento: '10-10-2000' }
];


const personasTransformadas = personas.map(function(persona) {
    const edadEn10Anos = persona.edad + 10;
    const nombreEnMayusculas = persona.nombre.toUpperCase();


    const fechaNacimiento = new Date(persona.fechaNacimiento);

  
    let fechaFormateada = '';
    if (!isNaN(fechaNacimiento)) {
        fechaFormateada = `${fechaNacimiento.getDate().toString().padStart(2, '0')}-${(fechaNacimiento.getMonth() + 1).toString().padStart(2, '0')}-${fechaNacimiento.getFullYear()}`;
    } else {
        fechaFormateada = 'Fecha inválida';
    }

    return {
        nombre: nombreEnMayusculas,
        edad: persona.edad,
        edadEn10Anos: edadEn10Anos,
        fechaNacimiento: fechaFormateada
    };
});

console.log('Personas transformadas:', personasTransformadas);


