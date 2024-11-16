

const readlineSync = require('readline-sync');
const fs = require('fs').promises;

async function leerYFiltrarDatos() {
    try {
        const letra = readlineSync.question("¿Qué letra deseas usar para filtrar los nombres ?: ").toUpperCase();

        const data = await fs.readFile('Ejemplo19.json', 'utf8');
        const jsonData = JSON.parse(data);

        console.log("Datos obtenidos del archivo JSON:");
        console.log(jsonData);


        if (jsonData.nombre && jsonData.nombre.startsWith(letra)) {
            console.log(`\n🔍 Nombre que comienza con '${letra}': ${jsonData.nombre}`);
        } else {
            console.log(`No se encontró ningún nombre que comience con '${letra}'`);
        }

    } catch (error) {
        console.error("Error al leer el archivo ＞︿＜:", error.message);
    }
}

leerYFiltrarDatos();

