
function ValidandoCorreo(email) {
    const Email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return Email.test(email);
}

function Usuario(usuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                if (!usuario.nombre || usuario.nombre.length < 3) {
                    reject('El nombre debe tener al menos 3 caracteres');
                }
                if (!usuario.edad || usuario.edad < 16) {
                    reject('Lo siento debes tener cedula para poder seguir');
                }
                if (!usuario.email || !ValidandoCorreo(usuario.email)) {
                    reject('El correo que pusiste no es valido');
                }
                if (!usuario.programa || usuario.programa.length < 5) {
                    reject('Escribe un programa valido del SENA ser astronauta no es valido');
                }

                resolve({
                    mensaje: 'El usuario ingreso correctamente',
                    usuario: usuario
                });
            } catch (error) {
                reject('Error en la validacion: ' + error);
            }
        }, 3000); 
    });



}


function registrarAprendiz() {
    const nuevoAprendiz = {
        nombre: prompt("Escribe el nombre del Aprendiz:"),
        edad: parseInt(prompt("Escribe tu edad:")),
        email: prompt("Escribe tu correo electronico:"),
        programa: prompt("Escribe el programa al que cursas en el SENA:")
    };

    alert('Valerificando datos por favor espere.....');
    
    Usuario(nuevoAprendiz)
        .then(resultado => {
            alert('La promesa fue resuelta');
            alert('Datos del aprendiz:\n' + 
                  'Nombre: ' + resultado.usuario.nombre + '\n' +
                  'Edad: ' + resultado.usuario.edad + '\n' +
                  'Email: ' + resultado.usuario.email + '\n' +
                  'Programa: ' + resultado.usuario.programa);
        })
        .catch(error => {
            alert('Error en la validacion intenta nuevamente: ' + error);
        });
}

registrarAprendiz();


