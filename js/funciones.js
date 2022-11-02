var sesion = sesion = document.getElementById("formulario");


var URLactual = new URLSearchParams(window.location.search);

var usuario = URLactual.get("Usuario");
if(usuario != null){
    document.getElementById('uwu').textContent= "Bienvenid@ " + usuario + " !";
}



