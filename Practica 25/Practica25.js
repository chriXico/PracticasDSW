function OperacionesMatematicas() {

    let operacion = prompt("Ingrese la operación (sumar, restar, multiplicar, dividir, residuo):");
    let a = parseFloat(prompt("Ingrese el primer número:"));
    let b = parseFloat(prompt("Ingrese el segundo número:"));

    let resultado = 0;
    let mensaje = "";

    switch (operacion) {
        case "sumar":
            resultado = a + b;
            mensaje = a + " + " + b + " = " + resultado;
            break;
        case "restar":
            resultado = a - b;
            mensaje = a + " - " + b + " = " + resultado;
            break;
        case "multiplicar":
            resultado = a * b;
            mensaje = a + " x " + b + " = " + resultado;
            break;
        case "dividir":
            if (b !== 0) {
                resultado = a / b;
                mensaje = a + " / " + b + " = " + resultado;
            } else {
                mensaje = "Error: División por cero no está permitida.";
            }
            break;
        case "residuo":
            if (b !== 0) {
                resultado = a % b;
                mensaje = `El residuo de la división de ${a} entre ${b} es ${resultado}.`;
            } else {
                mensaje = "Error: División por cero no está permitida.";
            }
            break;
        default:
            mensaje = "Operación no reconocida.";
    }

    alert(mensaje);
}

OperacionesMatematicas();
