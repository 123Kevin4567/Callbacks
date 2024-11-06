// 6. 
// Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true





// VERSION SIMPLE Y RECORTADA


// const array = [2, 5, 8, 10, 15];

// const valor = prompt("Ingrese un valor para verificar si algún elemento es mayor a este valor:");


// const algunMayor = array.some(elemento => elemento > Number(valor));

// if (algunMayor) {
//     alert("Al menos un elemento es mayor que " + valor);
// } else {
//     alert("Ningún elemento es mayor que " + valor);
// }



// VERSION FINAL

function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }
    return false;
}


const arrayInput = prompt("Ingrese una lista de números separados por comas (por ejemplo: 2,5,8,10,15):");
const array = arrayInput.split(',').map(Number); 


if (array.some(isNaN)) {
    alert("Lo siento Bob no contien numeros, recuerda solo numeros");
} else {
    const valor = Number(prompt("Ingrese un valor para comparar:"));

    if (isNaN(valor)) {
        alert("Otra vez Bob un valor numerico valido OjO.");
    } else {

        const comparacion = prompt("Elija el tipo de comparación:\n1: Mayor que\n2: Menor que\n3: Igual a");

        let mensaje;
        switch (comparacion) {
            case "1":
                mensaje = some(array, elemento => elemento > valor)
                    ? `Al menos un elemento es mayor que ${valor}.`
                    : `Ningún elemento es mayor que ${valor}.`;
                break;

            case "2":
                mensaje = some(array, elemento => elemento < valor)
                    ? `Al menos un elemento es menor que ${valor}.`
                    : `Ningún elemento es menor que ${valor}.`;
                break;

            case "3":
                mensaje = some(array, elemento => elemento === valor)
                    ? `Al menos un elemento es igual a ${valor}.`
                    : `Ningún elemento es igual a ${valor}.`;
                break;

            default:
                mensaje = "Opción de comparación no válida.";
                break;
        }

        alert(mensaje);
    }
}



