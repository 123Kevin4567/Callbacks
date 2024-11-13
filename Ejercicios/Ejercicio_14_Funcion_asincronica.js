
async function operacionAsincrona() {

    const iniciarOperacion = prompt("Hello como vamos quieres hacer alguna accion? (si/no):");

    if (iniciarOperacion.toLowerCase() !== "si") {
        document.write("La operacion fue rechazada por el usuario :C <br>");
        return;
    }

    const estadoOperacion = prompt("Escribe cual sera el estado de la operacion (completado, pendiente, Error):");

    document.write("Iniciando la operacion aguanteme un ratico... -.- <br>");

    await new Promise((resolve) => setTimeout(resolve, 4000));

    let mensaje;
    switch (estadoOperacion.toLowerCase()) {
        case "completado":
            mensaje = "La operacion fue todo un exito :D.";
            break;
        case "pendiente":
            mensaje = "La operacion quedo pendiente esperemos un rato :/...";
            break;
        case "error":
            mensaje = "Error en la operacion vuelva a intentarlo x-x.";
            break;
        default:
            mensaje = "EL estado que escogiste no existe o no se reconocio vuelva a intentar °-°";
            break;
    }

    document.write(mensaje);
}

operacionAsincrona();


