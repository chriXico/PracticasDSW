// Arreglo vacio
var dias = [];

// Pedimos los dias
for (var i = 0; i < 7; i++) {
    var dia = prompt("Ingresa el día de la semana número " + (i + 1));
    // Se agrega el día ingresado al arreglo
    dias.push(dia);
}

// Creamos la cadena de los dias
var mensaje = "Los días de la semana que ingresaste son:\n";
for (var i = 0; i < dias.length; i++) {
    mensaje += dias[i] + "\n";
}

// Mostramos los días de la semana en un alert
alert(mensaje);
