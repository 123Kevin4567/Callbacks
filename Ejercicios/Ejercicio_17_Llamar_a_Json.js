// Nota:Solo disponible en consola segun el ejercicio
// Nota2:Por la explicacion del isntructor uno directamente en json puede defifnir los datos si los quiere string booleano entre otros 
// En mi caso utilize una funcion nativa llamandolo desde fs y parseandolo
// Nota3:EL archivo esta aqui mismo dentro de la carpeta ejercicio se llama Ejemplo17.json por si algo


const readlineSync = require('readline-sync');
const fs = require('fs');


const confirmacion = readlineSync.question("Buenas amig@ quieres leer el Json haber que hay (si/no): ");

if (confirmacion.toLowerCase() !== 'si') {
    
    console.log("La operacion se detuvo por el usuario no veremos el contenido ≡(▔﹏▔)≡");
    process.exit();
}


try {
    const data = fs.readFileSync('Ejemplo17.json'); 
    const jsonData = JSON.parse(data);

    console.log("Datos obtenidos del archivo JSON:");
    console.log(jsonData); 
} 


catch (error) {
    console.error("Error al leer el archivo ＞︿＜:", error.message);
}
