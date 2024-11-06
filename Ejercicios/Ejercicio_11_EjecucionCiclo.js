// ¿Cuál es el resultado del código a continuación?


let i = 0;
setTimeout(() => alert(i), 100); // Programa mostrar i después de 100ms
// Bucle pesado que toma más de 100ms
for(let j = 0; j < 10000000; j++) {
    i++;
}


// Se mostrará una alerta con el valor 100000000

// Explicación:

// Se supone que el setTimeout esta programado para ejecutarse despues de 100ms pero debido a que
// el bucle sigue correindo ya que se el puso que el i se incrementara hasta 1000000 el bucle seguira hasta terminarlo
// Por lo que el callback no se ejecutara mientras el bucle este corriendo y el bucle dura casi 2 horas por lo que
// preparate unas palomitas esto va pa largo