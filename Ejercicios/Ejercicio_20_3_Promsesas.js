
async function operacionAsincrona() {
    const numeroStr = prompt("Good day my friend, escribamos un numero para accionar algunas promesas (～￣▽￣)～");
    const numero = Number(numeroStr);

 
    if (isNaN(numero)) {
        document.write("EL valor que pusiste no es valido intentalo nuevamente ＞﹏＜ <br>");
        return;
    }

    document.write("Accionando las promesas con el numero " + numero + "<br>");


    const promise1 = new Promise((resolve) => setTimeout(() => {

        if (isNaN(numero)) {
            resolve("No es un numero.");
        } else {
            resolve("Es un numero.");
        }
    }, 1000)); 

    const promise2 = new Promise((resolve) => setTimeout(() => {
        if (numero < 0) {
            resolve("Es un numero negativo.");
        } else if (numero > 0) {
            resolve("Es un numero positivo.");
        } else {
            resolve("El numero es cero.");
        }
    }, 2000));

    const promise3 = new Promise((resolve) => setTimeout(() => {

        if (numero % 2 === 0) {
            resolve("El numero es par.");
        } else {
            resolve("El numero es impar.");
        }
    }, 3000)); 


    Promise.all([promise1, promise2, promise3])
        .then((resultados) => {
            document.write("¡Todas las verificaciones se completaron (づ￣ 3￣)づ <br>");
            
            resultados.forEach((resultado) => document.write(`${resultado} <br>`));
        })
        .catch((error) => {
            document.write(`Hubo un error X-X ${error} <br>`);
        });
}

operacionAsincrona();

