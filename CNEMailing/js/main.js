userList();
document.getElementById('actualice-usuario').addEventListener('click', function () {
    // userList();
    TablaJQ();
});

document.getElementById('boton').addEventListener('click', function () {
    val();
    login = document.getElementById('inputLogin').value;
    password = document.getElementById('inputPassword').value;
    firstname = document.getElementById('inputNombre').value;
    lastname = document.getElementById('inputApellido').value;
    email = document.getElementById('inputEmail').value;
    gender = document.getElementById('inputSexo').value;
    motto = document.getElementById('inputLema').value;
    fecha = document.getElementById('inputFecha').value;
    link = document.getElementById('inputLink').value;
    horario = document.getElementById('inputHorario').value;

    addUser(login, password, firstname, lastname, email, gender, motto, fecha, link, horario);
});