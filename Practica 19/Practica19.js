var valores = [true, 10, false, "codigo", "herramientas", 7];

var texto1 = valores[3];
var texto2 = valores[4];

var textoResultado = "";

if (texto1 > texto2) {
    textoResultado = "La palabra '" + texto1 + "' es mayor que '" + texto2 + "'.\n";
} else if (texto1 < texto2) {
    textoResultado = "La palabra '" + texto2 + "' es mayor que '" + texto1 + "'.\n";
} else {
    textoResultado = "Ambas palabras son iguales.\n";
}

var booleano1 = valores[0];
var booleano2 = valores[2];

var resultadoTrue = booleano1 || booleano2;
var resultadoFalse = booleano1 && booleano2;

var num1 = valores[1];
var num2 = valores[5];

var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;
var modulo = num1 % num2;

var mensaje = textoResultado +
    "Operadores necesarios para obtener un resultado true: " + resultadoTrue + "\n" +
    "Operadores necesarios para obtener un resultado false: " + resultadoFalse + "\n" +
    "Suma: " + suma + "\n" +
    "Resta: " + resta + "\n" +
    "Multiplicación: " + multiplicacion + "\n" +
    "División: " + division + "\n" +
    "Módulo: " + modulo;

alert(mensaje);
