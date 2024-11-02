// 2.
// En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
// pesado que demora más de 100 ms en finalizar.
// ¿Cuándo se ejecutará la función programada y por qué se ejecutará?
// a) Después del bucle.
// b) Antes del bucle.
// c) Al comienzo del bucle.
//  ¿Qué va a mostrar alert()?



let i = 0;
setTimeout(() => alert(i), 100); // Programa mostrar i después de 100ms
// Bucle pesado que toma más de 100ms
for(let j = 0; j < 10000000; j++) {
    i++;
}

// La respuesta correcta es:

// a) Después del bucle

// Explicación:

// Se supone que el setTimeout esta programado para ejecutarse despes de 100ms pero 


// Aunque setTimeout está programado para ejecutarse después de 100ms,
//  debido a cómo funciona el modelo de concurrencia de JavaScript (Event Loop):

// El callback de setTimeout no se ejecutará hasta que:

// Hayan pasado los 100ms
// La pila de ejecución esté vacía (es decir, el bucle haya terminado)




// JavaScript es monohilo, lo que significa que no puede ejecutar el callback mientras el bucle está corriendo,
//  incluso si ya pasaron los 100ms


// Sobre el valor que mostrará alert():


// Mostrará 10000000 (diez millones)
// Esto es porque aunque setTimeout se programó cuando i era 0, cuando finalmente se ejecute el alert(),
//  el bucle ya habrá incrementado i hasta 10000000