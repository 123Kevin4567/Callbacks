const readlineSync = require('readline-sync');
const fs = require('fs').promises;


const confirmacion = readlineSync.question("Buenas amig@ quieres leer el JSON a ver qué hay? (si/no): ");

if (confirmacion.toLowerCase() !== 'si') {
    console.log("La operación se detuvo por el usuario. No veremos el contenido ≡(▔﹏▔)≡");
    process.exit();
}


fs.readFile('Ejemplo18.json')
    .then((data) => {
        const jsonData = JSON.parse(data);

        console.log("Datos obtenidos del archivo JSON:");
        console.log(jsonData);


        const filtrados = jsonData.filter(persona => persona.nombre.startsWith("A"));
        console.log("\n✅ Nombres que comienzan con 'A':");
        console.log(filtrados);
    })
    .catch((error) => {
        console.error("❌ Error al leer el archivo ＞︿＜:", error.message);
    });
