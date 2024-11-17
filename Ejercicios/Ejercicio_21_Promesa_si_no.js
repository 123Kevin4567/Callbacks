async function operacionAsincrona() {
    document.write("Iniciando las operaciones, por favor espere... ༼ つ ◕_◕ ༽つ<br>");


    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Operación 1 completada con exito.");
        }, 1000);  
    });

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Operación 2 fallida debido a un error.");
        }, 2000);  
    });

    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Operación 3 completada con éxito.");
        }, 3000); 
    });


    Promise.allSettled([promise1, promise2, promise3])
        .then((resultados) => {
            document.write("Estado de todas las operaciones: <br>");
            resultados.forEach((resultado, index) => {

                
                if (resultado.status === "fulfilled") {
                    document.write(`Operación ${index + 1}: ${resultado.value} <br>`);
                } else if (resultado.status === "rejected") {
                    document.write(`Operación ${index + 1}: ${resultado.reason} <br>`);
                }
            });
        })
        .catch((error) => {
            document.write(`Hubo un error: ${error} <br>`);
        });
}

operacionAsincrona();



