// 1. 
// Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.


function imprimirNumeros(desde, hasta, usarInterval = true) {
    // Comenzamos desde el número inicial
    let numero = desde;
    
    // Si el usuario elige usar setInterval
    if (usarInterval) {
        const intervalo = setInterval(() => {
            console.log(numero);
            if (numero === hasta) {
                clearInterval(intervalo);
            }
            numero++;
        }, 1000);
    } 
    // Si el usuario elige usar setTimeout
    else {
        function imprimir() {
            console.log(numero);
            
            if (numero < hasta) {
                numero++;
                setTimeout(imprimir, 1000);
            }
        }
        imprimir();
    }
}
  
  
  
  



  
  