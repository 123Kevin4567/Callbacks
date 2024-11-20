const persona = {
    nombre: "Kevin",
    apellido: "Polo",
    edad: 21,
    email: "ejemplo@correo.com",
    fecha: "2024-01-01"
};

const propiedadesValidas = Object.keys(persona);

const manejador = {
    get(objetivo, propiedad) {
        if (!propiedadesValidas.includes(propiedad)) {
            throw new Error(`La propiedad "${propiedad}" no está permitida.`);
        }
        console.log(`Obteniendo la propiedad "${propiedad}"`);
        return objetivo[propiedad];
    },

    set(objetivo, propiedad, valor) {
        if (!propiedadesValidas.includes(propiedad)) {
            throw new Error(`No se puede agregar la propiedad "${propiedad}".`);
        }

        if (typeof valor === 'string' && (valor.startsWith(' ') || valor.endsWith(' '))) {
            throw new Error(`La propiedad "${propiedad}" no puede contener espacios al inicio o final`);
        }


        if (propiedad === "nombre" || propiedad === "apellido") {
            if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/.test(valor)) {
                throw new Error(`El ${propiedad} solo debe contener letras`);
            }
        }

        if (propiedad === "edad") {
            if (isNaN(valor)) {
                throw new Error("La edad debe ser un número");
            }
        }

        if (propiedad === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(valor)) {
                throw new Error("El formato del email es inválido");
            }
        }

        if (propiedad === "fecha") {
            const fechaRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
            if (!fechaRegex.test(valor)) {
                throw new Error("El formato de fecha debe ser YYYY-MM-DD");
            }
            
            const fecha = new Date(valor);
            if (fecha.toString() === 'Invalid Date') {
                throw new Error("La fecha ingresada no es válida");
            }
            
            const fechaFormateada = fecha.toISOString().split('T')[0];
            if (fechaFormateada !== valor) {
                throw new Error("La fecha no es válida para el mes especificado");
            }
        }

        console.log(`Modificando la propiedad "${propiedad}" con el valor "${valor}"`);
        objetivo[propiedad] = valor;
        return true;
    }
};

const proxy = new Proxy(persona, manejador);


    try {
        
        proxy.nombre = "Carlos";  
        proxy.edad = 25;        
        proxy.email = "correo@dominio.com";   
        proxy.fecha = "2024-01-01"; 
        console.log(proxy.nombre);
        console.log(persona);
    

    } catch (error) {
        console.error("Error:", error.message);
    }