
function crearPromesa(numero) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numero);
        }, 2000);
    });
}

async function ejecutarOperacion() {

    const respuesta = prompt("Buenas buenas, como simpre quieres ejecutar la operacion de tres sumas? (si/no)");

    if (respuesta.toLowerCase() !== "si") {
        document.write("La operacion se detuvo por el usuario no habra suma (；′⌒`) <br>");
        return;
    }

    document.write("Iniciando la operacion aguanteme un ratico... (´。＿。｀) <br>");

    try {

        const resultado1 = await crearPromesa(3); 
        document.write(`Numero 1: ${resultado1}<br>`);

        const resultado2 = await crearPromesa(9); 
        document.write(`Numero 2: ${resultado2}<br>`);

        const resultado3 = await crearPromesa(16); 
        document.write(`Numero 3: ${resultado3}<br>`);


        const sumaTotal = resultado1 + resultado2 + resultado3;
        document.write(`Felicidades la suma de todo es: ${sumaTotal} （。＾▽＾）`);
    } catch (error) {
        document.write("(。_。)Hubo un error vuelve a intentar" + error);
    }
}
ejecutarOperacion();
