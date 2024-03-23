// Arreglo con los primeros 11 meses del año
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];

// Bucle for in
for (let mes in meses) {
    alert(`Mes ${mes}: ${meses[mes]}`);
}

// Bucle forEach
meses.forEach((mes, index) => {
    alert(`Mes ${index + 1}: ${mes}`);
});

// Bucle for of
for (let mes of meses) {
    alert(`Mes: ${mes}`);
}
