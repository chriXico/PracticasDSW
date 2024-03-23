let num = 5; // Número para el cual queremos calcular el factorial
let factorial = 1; // Inicializamos el factorial en 1

do {
 factorial *= num; // Multiplicamos el factorial por el número actual
 num--; // Decrementamos el número
} while (num > 1); // Continuamos mientras el número sea mayor que 1

alert("El factorial de 5 es " + factorial); // Mostramos el resultado en un alert
