// 1. 
// Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.



function imprimirNumeros(desde, hasta) {

    let opcion = prompt("Hola que tal :D porfa escoge que quieres hacer: \n1: Usar setTimeout anidado \n2: Usar setInterval");


    opcion = parseInt(opcion);


    if (opcion === 1) {

        let numero = desde;
        function imprimir() {
            console.log(numero);
            if (numero < hasta) {
                numero++;
                setTimeout(imprimir, 1000); 
            }
        }
        imprimir(); 
    } else if (opcion === 2) {
 
        let numero = desde;
        const intervalo = setInterval(() => {
            console.log(numero);
            if (numero === hasta) {
                clearInterval(intervalo); 
            }
            numero++;
        }, 1000);
    } else {
        alert("Opción no correcta Bob. Tu puedes, ingresa 1 o 2.");
    }
}


imprimirNumeros(1, 20);


  
  
  
  



  
  