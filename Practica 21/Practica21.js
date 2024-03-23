var opcion = prompt("Ingresa en que planeta deseas saber tu peso:");
var usuario;

switch (opcion){
  case "tierra":
  usuario = parseInt(prompt("Introduce tu peso actual:"));
  pesoTierra = usuario * 9.8;
  alert("Tu peso en la Tierra es de: " + pesoTierra.toFixed(2) +"N");
  break;

  case "marte":
  usuario = parseInt(prompt("Introduce tu peso actual:"));
  pesoMarte = (usuario * 3.7) / 9.8;
  alert("Tu peso en Marte es de: " + pesoMarte.toFixed(2) + "N");
  break;

  case "jupiter":
  usuario = parseInt(prompt("Introduce tu peso actual:"));
  pesoJupiter = (usuario * 24.8) / 9.8;
  alert("Tu peso en Júpiter es de: " + pesoJupiter.toFixed(2) + "N");
  break;

  default:
  alert("Esta opción no existe");
  break;
}