// Arreglo con los primeros 11 meses del año
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];

// Bucle for para iterar sobre los meses, omitiendo Julio
for (let i = 0; i < meses.length; i++) {
    if (meses[i] !== "Julio") {
        alert(meses[i]);
    }
}

// Agregar diciembre fuera del arreglo
alert("Diciembre");
