function habilitar() {
    let ciudad = document.getElementById('ciudad');
  
    if(ciudad.selectedIndex != 1)
    {
      document.getElementById("transporte").disabled = true;
    }
    else {
      document.getElementById("transporte").disabled = false;
    }
  }
  
  function aparecer(){
    let select = document.getElementById("camisa");
    let tr = document.querySelectorAll("tr:nth-child(6)");
    let form = document.getElementById("formulario");
  
    if (select.selectedIndex == 0) {
      tr[0].classList.remove("talla");
      tr[1].classList.remove("talla");
      form.style.height = "500px";
    }
    else{
      tr[0].classList.add("talla");
      tr[1].classList.add("talla");
      form.style.height = "450px";
    }
  }

  function convertToUppercase(el) {
    if(!el || !el.value) return;
    el.value = el.value.toUpperCase();
   }

   // Función para resaltar el campo de entrada cuando recibe el foco
function resaltarCampo(event) {
  event.target.style.backgroundColor = 'lightblue'; // Cambia el color de fondo a azul claro
 }
 
 // Función para eliminar el resaltado cuando el campo pierde el foco
 function eliminarResaltado(event) {
  event.target.style.backgroundColor = ''; // Restablece el color de fondo
 }
 
 // Seleccionar todos los campos de entrada del formulario
 const camposEntrada = document.querySelectorAll('#formulario input, #formulario select, #formulario textarea');
 
 // Agregar el evento 'focus' a cada campo de entrada
 camposEntrada.forEach(campo => {
  campo.addEventListener('focus', resaltarCampo);
  campo.addEventListener('blur', eliminarResaltado);
 });
 
  