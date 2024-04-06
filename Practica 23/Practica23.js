function verificador() {

    var numero = prompt("Ingrese un número:");
    
    var num = Number(numero);
    
    if (num % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}

alert(verificador());
