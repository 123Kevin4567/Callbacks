
async function validarEdad(usuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario.edad >= 18) {
                resolve(`Usuario ${usuario.nombre} aprobado.`);
            } else {
                reject(`Usuario ${usuario.nombre} rechazado por ser menor de edad.`);
            }
        }, 2000);
    });
}


async function procesarUsuarios(usuarios) {
    for (let i = 0; i < usuarios.length; i++) {
        try {

            const resultado = await validarEdad(usuarios[i]);
            console.log(resultado); 
        } catch (error) {
            console.log(error); 
        }
    }
    console.log('Todos los usuarios han sido procesados.');
}


const listaDeUsuarios = [
    { nombre: 'Carlos', edad: 17 },
    { nombre: 'Ana', edad: 22 },
    { nombre: 'Luis', edad: 19 },
    { nombre: 'María', edad: 16 }
];

procesarUsuarios(listaDeUsuarios);

