// Codigos para agregar y eliminar comentarios

var entradaTarea = document.getElementById("entradaTarea");

var listaTareas = document.getElementById("listaTareas");


function BotonAgregarTareas() {
  var textoTarea = entradaTarea.value;


  if (textoTarea !== "") {

    var elementoTarea = document.createElement("li");
    elementoTarea.textContent = textoTarea;
    listaTareas.appendChild(elementoTarea);
    entradaTarea.value = "";

    var botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("delete-button");
    elementoTarea.appendChild(botonEliminar);

    botonEliminar.addEventListener("click", function () {
      elementoTarea.remove();
    });
  }
}
