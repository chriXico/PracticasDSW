/*7maravillas.js*/

/*Este comentario indica el nombre del archivo donde se encuentra el código JavaScript.*/
let maravillas = ["chichen-itza.jpg", "coliseo.jpg", "cristo-redentor.jpg", "machu-picchu.jpg", "muralla-china.jpg","petra.jpg","taj-mahal.jpg"];
/*Aquí se declara un array llamado maravillas, que contiene los nombres de archivos de imágenes de las maravillas del mundo.*/
let correcta = [1,0,2,1,2,0,1];

/*Este array llamado correcta contiene los índices de las respuestas correctas para cada maravilla del mundo, correspondientes al array maravillas.*/
let opciones = [];

/*Se inicializa un array vacío llamado opciones, que contendrá las opciones de respuesta para cada maravilla.*/
opciones.push(["Machu Picchu", "Chichen Itza", "Coliseo"]);
opciones.push(["Coliseo", "Petra", "Cristo Redentor"]);
opciones.push(["Muralla China", "Taj Mahal", "Cristo Redentor"]);
opciones.push(["Petra", "Machu Picchu", "Taj Mahal"]);
opciones.push(["Chichen Itza", "Petra", "Muralla China"]);
opciones.push(["Petra", "Machu Pichu", "Chichen Itza"]);
opciones.push(["Coliseo", "Taj Mahal", "Cristo Redentor"]);

/*Aquí se agregan las opciones de respuesta para cada maravilla del mundo al array opciones.*/
let posActual = 0;
let cantidadAcertadas = 0;

/*Se declaran dos variables para mantener el seguimiento de la posición actual del juego y el número de respuestas correctas.*/
function comenzarJuego(){
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarMaravilla();

}

/*Esta función comenzarJuego() se llama cuando se inicia el juego. Establece la posición actual y el 
número de respuestas correctas en 0, y muestra la pantalla de juego ocultando la pantalla inicial.*/
function cargarMaravilla(){
    if(maravillas.length <= posActual){
        terminarJuego();
    }
    else{
        limpiarOpciones();

        document.getElementById("imgMaravilla").src = "img/" + maravillas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

/*Esta función cargarMaravilla() carga la siguiente maravilla del mundo y 
sus opciones de respuesta en la interfaz de usuario. Si todas las 
maravillas ya han sido mostradas, llama a terminarJuego().*/
function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
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
    setTimeout(cargarMaravilla,1000);
}

/*Esta función comprobarRespuesta(opElegida) verifica si la opción seleccionada es correcta. 
Actualiza las clases CSS de las opciones y aumenta el contador de respuestas correctas. 
Luego, llama a cargarMaravilla() después de un segundo.*/
function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas;
}

/*Esta función terminarJuego() se llama cuando se han mostrado todas las maravillas del mundo. 
Oculta la pantalla de juego y muestra la pantalla final, mostrando el 
número de respuestas correctas e incorrectas.*/
function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}