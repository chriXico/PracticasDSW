let diasDeLaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

alert("Días de la semana: " + diasDeLaSemana.join(", "));

function agregarDia() {
    let dia = prompt("Ingrese el día que desea agregar:");
    if (dia) {
        diasDeLaSemana.push(dia);
        alert("Día agregado: " + diasDeLaSemana.join(", "));
    }
}

function eliminarDia() {
    let dia = prompt("Ingrese el día que desea eliminar:");
    let indice = diasDeLaSemana.indexOf(dia);
    if (indice !== -1) {
        diasDeLaSemana.splice(indice, 1);
        alert("Día eliminado: " + diasDeLaSemana.join(", "));
    } else {
        alert("El día no se encuentra en la lista.");
    }
}

agregarDia();
eliminarDia();
