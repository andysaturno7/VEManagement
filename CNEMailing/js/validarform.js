'use-strict'
//document.querySelector('#boton').onclick = val;
function val() {
    var nom = document.querySelector('#inputNombre').value;
    var ape = document.querySelector('#inputApellido').value;
    var email = document.querySelector('#inputEmail').value;
    var log = document.querySelector('#inputLogin').value;
    var pass = document.querySelector('#inputPassword').value;
    var lema = document.querySelector('#inputLema').value;
    var expresion = /\w+@\w+\.+[a-z]/;

    if (nom === '' || ape === '' || email === '' || log === '' || pass === '' || lema === '') {
        alert("Todos los campos son obligatorios"); return false;
    } else if (nom.length > 50) {
        alert("Nombre es demasiado largo"); return false;
    } else if (ape.length > 50) {
        alert("Apellido es demasiado largo"); return false;
    } else if (email.length > 50) {
        alert("El correo es muy largo"); return false;
    } else if (!expresion.test(email)) {
        alert("Agrega un correo valido"); return false;
    }
}