/*colossi.js*/
/*Este comentario indica el nombre del archivo donde se encuentra el código JavaScript.*/

let colossi = ["valus.jpg", "quadratus.jpg", "gaius.jpg", "phaedra.jpg", 
"avion.jpg","barba.jpg","hydrus.jpg","kuromori.jpg","basaran.jpg","dirge.jpg",
"celosia.jpg","pelagia.jpg","phalanx.jpg","cenobia.jpg","argus.jpg","malus.jpg"];
/*Aquí se declara un array llamado colossi, que contiene los nombres de archivos de imágenes de los colosos del viejojuego Shadow of the Colossus*/

let correcta = [0,2,1,3,3,2,3,1,3,0,1,3,2,3,0,3];
/*Este array llamado correcta contiene los índices de las respuestas correctas para cada coloso del videojuego, correspondientes al array colossi.*/

let opciones = [];
/*Se inicializa un array vacío llamado opciones, que contendrá las opciones de respuesta para cada coloso.*/

opciones.push(["Valus", "Quadratus", "Gaius", "Phaedra"]);

opciones.push(["Phaedra", "Kuromori", "Quadratus", "Barba"]);

opciones.push(["Hydrus", "Gaius", "Barba", "Kuromori"]);

opciones.push(["Basaran", "Argus", "Quadratus", "Phaedra"]);

opciones.push(["Gaius", "Phalanx", "Malus", "Avion"]);

opciones.push(["Malus", "Pelagia", "Barba", "Quadratus"]);

opciones.push(["Cenobia", "Gaius", "Dirge", "Hydrus"]);

opciones.push(["Malus", "Kuromori", "Dirge", "Pelagia"]);

opciones.push(["Celosia", "Phalanx", "Valus", "Basaran"]);

opciones.push(["Dirge", "Cenobia", "Argus", "Valus"]);

opciones.push(["Pelagia", "Celosia", "Cenobia", "Quadratus"]);

opciones.push(["Cenobia", "Quadratus", "Celosia", "Pelagia"]);

opciones.push(["Quadratus", "Malus", "Phalanx", "Kukomori"]);

opciones.push(["Celosia", "Avion", "Pelagia", "Cenobia"]);

opciones.push(["Argus", "Malus", "Valus", "Gaius"]);

opciones.push(["Argus", "Valus", "Gaius", "Malus"]);
/*Aquí se agregan las opciones de respuesta para cada coloso del videojuego al array opciones.*/

let posActual = 0;
let cantidadAcertadas = 0;
/*Se declaran dos variables para mantener el seguimiento de la posición actual del juego y el número de respuestas correctas.*/

function comenzarJuego(){
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarColossi();

}
/*Esta función comenzarJuego() se llama cuando se inicia el juego. Establece la posición actual y el 
número de respuestas correctas en 0, y muestra la pantalla de juego ocultando la pantalla inicial.*/

function cargarColossi(){
    if(colossi.length <= posActual){
        terminarJuego();
    }
    else{
        limpiarOpciones();

        document.getElementById("imgColossi").src = "img/" + colossi[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
        document.getElementById("n3").innerHTML = opciones[posActual][3];
    }
}
/*Esta función cargarColossi() carga al siguiente coloso del juego y 
sus opciones de respuesta en la interfaz de usuario. Si todas los 
colosos ya fueron mostrados, llama a terminarJuego().*/

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("n3").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
    document.getElementById("l3").className = "letra";
}
/*Esta función limpiarOpciones() elimina las clases CSS de las opciones de respuesta para preparar la interfaz para la siguiente pregunta.*/

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    setTimeout(cargarColossi,1000);
}
/*Esta función comprobarRespuesta(opElegida) verifica si la opción seleccionada es correcta. 
Actualiza las clases CSS de las opciones y aumenta el contador de respuestas correctas. 
Luego, llama a cargarMaravilla() después de un segundo.*/

function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = colossi.length - cantidadAcertadas;
}
/*Esta función terminarJuego() se llama cuando se han mostrado todas las maravillas del mundo. 
Oculta la pantalla de juego y muestra la pantalla final, mostrando el 
número de respuestas correctas e incorrectas.*/

function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}