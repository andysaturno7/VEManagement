function userList() {
    const xhttp = new XMLHttpRequest;
    xhttp.open('POST', 'php/userlist-peticion.php', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var jsondata = JSON.parse(this.responseText);
            var datos = (jsondata.result['api-user-list'].items);
            var tbody = document.querySelector('#tbody');
            tbody.innerHTML = '';

            for (let item of datos) {
                tbody.innerHTML += `
                <tr>
                <th>${item.id}</th>
                <th>${item.login}</th>
                <th class="my-0">
                <ul class= "list-group list-group-flush">
                <li class= "list-group-item p-0"><a id="showData" class= "btn  btn-sm p-1 pl-3">Información de contacto</a></li></ul>
                <ul class= "list-group list-group-flush infoCard" id= "infoCard">
                <li class= "list-group-item btn-link">Nombre:  ->  Buscando...</li><li class= "list-group-item btn-link">Correo:  ->  Buscando...</li><li class= "list-group-item btn-link">Tel:  ->  Buscando...</li><li class= "list-group-item btn-link">Empresa:  ->  Buscando...</li ><li class= "list-group-item btn-link">Grupos:  ->  Buscando...</li > <li class="list-group-item btn-link">Rol(s):  ->  Buscando...</li>
                </ul>
                </th>
                <th class="float-right">
                <button id="editarPerfil" class="btn btn-outline-warning p-1"></button>
                <button id="eliminarPerfil" class="btn btn-outline-danger p-1"></button>
                </th>
                </tr>
                `;
            }
            document.querySelectorAll('[id=editarPerfil]').forEach(button => {
                button.innerHTML += `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>`;
                button.addEventListener('click', function () {
                    var id = this.parentElement.parentElement.children[0].textContent;
                    editarPerfil(id)
                })
            });
            document.querySelectorAll('[id=eliminarPerfil]').forEach(button => {
                button.innerHTML += `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
              </svg>`;
                button.addEventListener('click', function () {
                    var id = this.parentElement.parentElement.children[0].textContent;
                    eliminarPerfil(id);
                });
            });
            document.querySelectorAll('#showData').forEach(ele => {
                var elemento = ele.parentElement.parentElement.parentElement.children[1];
                var id = ele.parentElement.parentElement.parentElement.parentElement.children[0].textContent;
                //verPerfil(id, ele);
                elemento.style.display = 'none';
                ele.addEventListener('click', function () {
                    if (elemento.style.display == 'none') {
                        elemento.style.display = 'block';
                    } else { elemento.style.display = 'none' }
                });
            });
            //setTimeout(function () { TablaJQ(); }, 15 * 1000);
        }
    }
}

function TablaJQ() {
    $('#dataTable').DataTable({
        "pageLength": 12,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        language: {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla =(",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            },
            "buttons": {
                "copy": "Copiar",
                "colvis": "Visibilidad"
            }
        }
    });
}

function verPerfil(id, el) {
    var divInfoCard = el.parentElement.parentElement.parentElement.children[1];
    var liNombre = divInfoCard.children[0];
    var liCorreos = divInfoCard.children[1];
    var liTel = divInfoCard.children[2];
    var liEmpresa = divInfoCard.children[3];
    var liGrupos = divInfoCard.children[4];
    var liRol = divInfoCard.children[5];
    const xhttp = new XMLHttpRequest;
    xhttp.open('POST', 'php/verPerfil.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('id=' + id);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var userInfo = JSON.parse(this.responseText).result['api-user-profile'];
            let name = userInfo['first-name'];
            let lastname = userInfo['last-name'];
            let email = userInfo.email;
            let company = userInfo['professional-profile'].company;
            let tel = userInfo['professional-profile'].mobile;
            let groups = userInfo['permission-groups'];
            var groupArray = new Array;
            groups.forEach(element => {
                let name = element.name;
                groupArray.push(name);
            });
            let roles = userInfo['permission-roles'];
            var rolArray = new Array;
            roles.forEach(element => {
                let name = element.name;
                rolArray.push(name);
            });

            liNombre.innerHTML = `Nombre: ${name} ${lastname}`;
            liCorreos.innerHTML = `Correo: ${email}`;
            liTel.innerHTML = `Tel.: ${tel}`;
            liEmpresa.innerHTML = `Empresa: ${company}`;
            liGrupos.innerHTML = `Gupos: ${groupArray}`;
            liRol.innerHTML = `Rol(s): ${rolArray}`;
        }
    }
}

function editarPerfil(id) {

    console.log(id);
}

function eliminarPerfil(id) {
    if (confirm('Estas a punto de eliminar un usuario. Estás seguro que deseas hacerlo?') === false) {
        return false;
    }
    const xhttp = new XMLHttpRequest;
    xhttp.open('POST', 'php/eliminarPerfil.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('id=' + id);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsonresponse = JSON.parse(this.responseText);
            try {
                alert(jsonresponse.error.message);
            } catch (error) {
                console.log(jsonresponse.result['api-user-delete']);
                alert('Eliminado correctamente');
                location.reload();
            }
        }
        // userList();
    }
}

function addUser(login, password, firstname, lastname, email, gender, motto, fecha, link, horario) {
    const xht = new XMLHttpRequest;
    xht.open('POST', 'php/registrarUsuario.php', true);
    xht.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xht.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsonresponse = JSON.parse(this.responseText);
            try {
                alert(jsonresponse.error.message);
                return false;
            } catch (error) {
                console.log(jsonresponse.result['api-user-add'])
                alert('Agregado correctamente');
                autoMail(fecha, firstname, lastname, login, password, link, horario);
            }
            // location.reload();
        }
    }
    xht.send('login=' + login + '&password=' + password + '&firstname=' + firstname + '&lastname=' + lastname + '&email=' + email + '&gender=' + gender + '&motto=' + motto);
}

function autoMail(fecha, firstname, lastname, login, password, link, horario) {
    const xht = new XMLHttpRequest;
    xht.open('POST', 'php/mail.php', true);
    xht.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xht.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText);
            //    try {
            //        alert(jsonresponse.error.message);
            //        return false;
            //   } catch (error) {
            //        console.log(jsonresponse.result['api-user-add'])
            //        alert('Agregado correctamente');
            //    }
            alert(this.responseText)
            location.reload();
        }

    }
    xht.send('login=' + login + '&password=' + password + '&firstname=' + firstname + '&lastname=' + lastname + '&fecha=' + fecha + '&link=' + link + '&email=' + email + '&horario=' + horario);
}