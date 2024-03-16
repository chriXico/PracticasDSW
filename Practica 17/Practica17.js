// Variables predefinidas
var num1 = 8;
var num2 = 4;

// Operaciones
var x = num1 + num2;
var y = num1 - num2;
var z = num1 * num2;
var w = num1 / num2;

// Mensajes de las operaciones
alert("Los resultados son:\n" +
        "Suma: " + x + "\n" +
        "Resta: " + y + "\n" +
        "Multiplicación: " + z + "\n" +
        "División: " + w);

//Lo mismo que las anteriores pero para que el usuario ponga numeros manualmente
var num1 = prompt("Ingrese el primer número:");
var num2 = prompt("Ingrese el segundo número:");

//convierte los numeros del usuario en float
num1 = parseFloat(num1);
num2 = parseFloat(num2);

x = num1 + num2;
y = num1 - num2;
z = num1 * num2;
w = num1 / num2;

alert("Los resultados con los números ingresados son:\n" +
        "Suma: " + x + "\n" +
        "Resta: " + y + "\n" +
        "Multiplicación: " + z + "\n" +
        "División: " + w);
