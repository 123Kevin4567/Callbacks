
function ejecutarOperacion() {
    const respuesta = prompt("Hola otra vez quieres realizar una operacion (si/no)");

    if (respuesta.toLowerCase() !== "si") {
        document.write("LA operacion se nacencelo por el usuario :C.");
        return;
    }

    const miPromesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Ups la promesa fue rechazada :/ "); 
        }, 2000);
    });

    miPromesa
        .then((resultado) => {
            document.write("✅ Operación completada: " + resultado);
        })
        .catch((error) => {
            document.write("Error X-X: " + error);
        });
}

ejecutarOperacion();
