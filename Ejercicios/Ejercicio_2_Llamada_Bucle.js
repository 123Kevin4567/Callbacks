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

//Por lo que alert debe mostar un valor de 100000000




