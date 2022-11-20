var sesion = sesion = document.getElementById("formulario");


var URLactual = new URLSearchParams(window.location.search);

var usuario = URLactual.get("Usuario");
if(usuario != null){
    document.getElementById('uwu').textContent= "Bienvenid@ " + usuario + " !";
}



function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";
    var nombreHTML = document.getElementById("Nombre" + no);
    var categoriaHTML = document.getElementById("Categoria" + no);
    var precioHTML = document.getElementById("Precio" + no);
    var dispHTML = document.getElementById("Disponibilidad" + no);
    var imgHTML = document.getElementById("Imagen" + no);
    var nombre = nombreHTML.innerHTML;
    var categoria = categoriaHTML.innerHTML;
    var precio = precioHTML.innerHTML;
    var disp = dispHTML.innerHTML;
    var img = imgHTML;
    nombreHTML.innerHTML = "<input type='text' id='nombre_text" + no + "' value='" + nombre + "'>";
    categoriaHTML.innerHTML = "<input type='text' id='categoria_text" + no + "' value='" + categoria + "'>";
    precioHTML.innerHTML = "<input type='text' id='precio_text" + no + "' value='" + precio + "'>";
    dispHTML.innerHTML = "<input type='text' id='disp_text" + no + "' value='" + disp + "'>";
    imgHTML.innerHTML = "<input type='file' id='img_text" + no + "' value='" + img + "'>";
    console.log(no);
}

function save_row(no) {
    var nombreHTML = document.getElementById("nombre_text" + no).value;
    var categoriaHTML = document.getElementById("categoria_text" + no).value;
    var precioHTML = document.getElementById("precio_text" + no).value;
    var dispHTML = document.getElementById("disp_text" + no).value;
    var imgHTML = document.getElementById("img_text" + no).value;
    document.getElementById("Nombre" + no).innerHTML = nombreHTML;
    document.getElementById("Categoria" + no).innerHTML = categoriaHTML;
    document.getElementById("Precio" + no).innerHTML = precioHTML;
    document.getElementById("Disponibilidad" + no).innerHTML = dispHTML;
    document.getElementById("Imagen" + no).innerHTML = imgHTML;
    document.getElementById("edit_button" + no).style.display = "inline";
    document.getElementById("save_button" + no).style.display = "inline";
}

function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_row() {
    var newN = document.getElementById("nNombre").value;
    var newC = document.getElementById("nCategoria").value;
    var newP = document.getElementById("nPrecio").value;
    var newD = document.getElementById("nDisp").value;
    var newI = document.getElementById("nImg").value;
    var table = document.getElementById("data_table");
    var table_len = (table.rows.length)-1;
    console.log(table_len);
    table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='Nombre" + table_len + "'>" + newN + "</td><td id='Categoria" + table_len + "'>" + newC + "</td><td id='Precio" + table_len + "'>" + newP + "</td><td id='Disponibilidad" + table_len + "'>" + newD + "</td><td id='Imagen" + table_len + "'>" + newI + "</td><td><input type='button' id='edit_button" + table_len + "' value='Editar' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Guardar' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Eliminar' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";
    document.getElementById("nNombre").value = "";
    document.getElementById("nProducto").value = "";
    document.getElementById("nDisp").value = "";
    document.getElementById("data_table").value = "";
}

