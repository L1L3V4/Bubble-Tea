var sesion = sesion = document.getElementById("formulario");


var URLactual = new URLSearchParams(window.location.search);

var usuario = URLactual.get("Usuario");

document.getElementById('u').textContent=usuario;

