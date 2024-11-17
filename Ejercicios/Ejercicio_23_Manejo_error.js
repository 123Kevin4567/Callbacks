const readlineSync = require('readline-sync');
const fs = require('fs').promises;

async function leerYFiltrarDatos() {
    try {
        const letra = readlineSync.question("Qué letra deseas usar para filtrar los nombres ?: ").toUpperCase();


        const data = await fs.readFile('Ejemplo23.json', 'utf8');
        const jsonData = JSON.parse(data);

        console.log("\nDatos obtenidos del archivo JSON:");
        console.log(jsonData);


        const filtrados = jsonData.filter(persona => persona.nombre && persona.nombre.startsWith(letra));

        console.log(`\n🔍 Resultados que comienzan con '${letra}':`);
        if (filtrados.length > 0) {
            filtrados.forEach((persona, index) => {
                console.log(`\nResultado ${index + 1}:`);
                for (const [key, value] of Object.entries(persona)) {
                    console.log(`  ${key}: ${Array.isArray(value) ? value.join(', ') : value}`);
                }
            });
        } else {
            console.log(`No se encontró ningún nombre que comience con '${letra}'`);
        }
    } catch (error) {
        console.error("Error al leer el archivo ＞︿＜:", error.message);
    }
}


leerYFiltrarDatos();

