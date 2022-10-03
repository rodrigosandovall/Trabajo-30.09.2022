var formulario = document
  .querySelector("#formul")
  .addEventListener("submit", function (e) {
    e.preventDefault(); //se realizo la adecuacion de estas lineas debido a que no estaba señalado correctamente siendo usado correctamente

    var n = formul.elements[0]; //aqui se cambio el nombre de formulario por formul para relacionarlo con el queryselector
    var e = formul.elements[1];
    var na = formul.elements[2];

    var nombre = n.value;
    var edad = e.value;

    var i = na.selectedIndex;
    var nacionalidad = na.options[i].value;
    console.log(nombre, edad);
    console.log(nacionalidad);

    if (nombre.length === 0) {
      n.classList.add("error");
    }
    if (edad < 18 || edad > 120) {
      e.classList.add("error");
    }
    console.log(nombre + "" + " " + edad + " " + nacionalidad); // se agrego este console.log como indicio de que estaba pasando
    if (nombre.length > 0 && edad > 18 && edad < 120) {
      agregarInvitado(nombre, edad, nacionalidad);
    }
  });

var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "Argentina") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");

  elementoLista.classList.add("elemento-lista"); //aqui se cambio el metodo added por add, de acuerdo a la documentacion.
  lista.appendChild(elementoLista);

  var spanNombre = document.createElement("span");
  var inputNombre = document.createElement("input");
  var espacio = document.createElement("br");
  spanNombre.textContent = "Nombre: ";
  inputNombre.value = nombre;
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove();
  };
}
