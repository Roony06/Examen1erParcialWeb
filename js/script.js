const campusSelect = document.getElementById('campus');
const carreraInput = document.getElementById('carrera');
const carrerasDatalist = document.getElementById('carreras');
const tablaInfo = document.getElementById('tabla-info');

// Definir carreras por campus (datos proporcionados)
const carrerasPorCampus = {
    'Campus Ciudad Universitaria': [
        'E.T.S. de Arquitectura',
        'E.T.S. de Edificación',
        'E.T.S. de Ingeniería Aeronáutica y del Espacio',
        'E.T.S. de Ingeniería Agronómica, Alimentaría y de Biosistemas',
        'E.T.S. de Ingeniería de Montes, Forestal y del Medio Natural',
        'E.T.S. de Ingenieros de Caminos, Canales y Puertos',
        'E.T.S de Ingenieros de Telecomunicación',
        'E.T.S. de Ingenieros Navales',
        'Facultad de Ciencias de la Actividad Física y del Deporte (INFEF)',
        'Rectorado',
        'Instituto de Energía Solar',
        'Instituto de Sistemas Optoelectrónicos y Microtecnología',
        'Instituto de Ciencias de la Educación (ICE)'
    ],
    'Campus Madrid Ciudad': [
        'E.T.S. de Ingeniería Civil',
        'E.T.S. de Ingeniería y Diseño Industrial',
        'E.T.S. de Ingenieros de Minas y Energía',
        'E.T.S. de Ingenieros Industriales',
        'Instituto de Fusión Nuclear'
    ],
    'Campus Montegancedo': [
        'E.T.S. de Ingenieros Informáticos',
        'Centro de Investigación en Biotecnología y Genómica de Plantas (CBGP)',
        'Centro de Tecnología Biomédica (CTB)',
        'Instituto Universitario de Microgravedad "Ignacio Da Riva"',
        'Centro de Domótica Integral (CeDINT-UMP)'
    ],
    'Campus Sur': [
        'E.T.S. de Ingeniería de Sistemas Informáticos',
        'E.T.S. de Ingeniería de Sistemas Telecomunicación',
        'E.T.S. de Ingenieros en Topografía, Geodesia y Cartografía',
        'Instituto de Investigación del Automóvil (INSIA)',
        'Centro Superior de Diseño de Moda de Madrid (centro adscrito a la UPM)',
        'Centro de Investigación en Tecnologías de Software y Sistemas Multimedia para la Sostenibilidad'
    ]
};

// Definir información para cada carrera (datos proporcionados)
const informacionCarreras = {
    'E.T.S. de Arquitectura': {
        nombre: 'E.T.S. de Arquitectura',
        duracion: '5 años',
        descripcion: 'Escuela de Arquitectura especializada en diseño y planificación de edificios.'
    },
    'E.T.S. de Edificación': {
        nombre: 'E.T.S. de Edificación',
        duracion: '4 años',
        descripcion: 'Escuela de Edificación centrada en técnicas de construcción y gestión de proyectos.'
    },
    'E.T.S. de Ingeniería Aeronáutica y del Espacio': {
        nombre: 'E.T.S. de Ingeniería Aeronáutica y del Espacio',
        duracion: '4 años',
        descripcion: 'Escuela de Ingeniería Aeronáutica enfocada en tecnología aeroespacial.'
    },
    'E.T.S. de Ingeniería Agronómica, Alimentaría y de Biosistemas': {
        nombre: 'E.T.S. de Ingeniería Agronómica, Alimentaría y de Biosistemas',
        duracion: '4 años',
        descripcion: 'Escuela de Ingeniería Agronómica que se especializa en alimentos y biosistemas.'
    },
    'E.T.S. de Ingeniería de Montes, Forestal y del Medio Natural': {
        nombre: 'E.T.S. de Ingeniería de Montes, Forestal y del Medio Natural',
        duracion: '4 años',
        descripcion: 'Escuela de Ingeniería enfocada en la gestión de recursos forestales y medio ambiente.'
    },
    'E.T.S. de Ingenieros de Caminos, Canales y Puertos': {
        nombre: 'E.T.S. de Ingenieros de Caminos, Canales y Puertos',
        duracion: '4 años',
        descripcion: 'Escuela de Ingenieros especializada en infraestructuras civiles.'
    },
    'E.T.S de Ingenieros de Telecomunicación': {
        nombre: 'E.T.S de Ingenieros de Telecomunicación',
        duracion: '4 años',
        descripcion: 'Escuela de Ingenieros dedicada a la tecnología de telecomunicación.'
    },
    'E.T.S. de Ingenieros Navales': {
        nombre: 'E.T.S. de Ingenieros Navales',
        duracion: '4 años',
        descripcion: 'Escuela de Ingenieros Navales que se enfoca en la construcción naval y la ingeniería marina.'
    },
    'Facultad de Ciencias de la Actividad Física y del Deporte (INFEF)': {
        nombre: 'Facultad de Ciencias de la Actividad Física y del Deporte (INFEF)',
        duracion: '4 años',
        descripcion: 'Facultad dedicada a la formación en ciencias del deporte y la actividad física.'
    },
    'Rectorado': {
        nombre: 'Rectorado',
        duracion: 'Varía',
        descripcion: 'Sede del Rectorado de la Universidad Politécnica de Madrid.'
    },
    'Instituto de Energía Solar': {
        nombre: 'Instituto de Energía Solar',
        duracion: 'Varía',
        descripcion: 'Instituto de investigación dedicado a la energía solar y las tecnologías renovables.'
    },
    'Instituto de Sistemas Optoelectrónicos y Microtecnología': {
        nombre: 'Instituto de Sistemas Optoelectrónicos y Microtecnología',
        duracion: 'Varía',
        descripcion: 'Instituto de investigación enfocado en sistemas optoelectrónicos y microtecnología.'
    },
    'Instituto de Ciencias de la Educación (ICE)': {
        nombre: 'Instituto de Ciencias de la Educación (ICE)',
        duracion: 'Varía',
        descripcion: 'Instituto dedicado a la investigación en ciencias de la educación y pedagogía.'
    },
    'E.T.S. de Ingeniería Civil': {
        nombre: 'E.T.S. de Ingeniería Civil',
        duracion: '4 años',
        descripcion: 'Escuela de Ingeniería Civil enfocada en la planificación y construcción de infraestructuras.'
    },
    'E.T.S. de Ingeniería y Diseño Industrial': {
        nombre: 'E.T.S. de Ingeniería y Diseño Industrial',
        duracion: '4 años',
        descripcion: 'Escuela de Ingeniería y Diseño Industrial centrada en la innovación y la producción.'
    },
    'E.T.S. de Ingenieros de Minas y Energía': {
        nombre: 'E.T.S. de Ingenieros de Minas y Energía',
        duracion: '4 años',
        descripcion: 'Escuela de Ingenieros de Minas y Energía dedicada a la explotación de recursos naturales y energía.'
    },
    'E.T.S. de Ingenieros Industriales': {
        nombre: 'E.T.S. de Ingenieros Industriales',
        duracion: '4 años',
        descripcion: 'Escuela de Ingenieros Industriales especializada en procesos de manufactura y producción.'
    },
    'Instituto de Fusión Nuclear': {
        nombre: 'Instituto de Fusión Nuclear',
        duracion: 'Varía',
        descripcion: 'Instituto de investigación en el campo de la fusión nuclear y la energía de fusión.'
    },
    'E.T.S. de Ingenieros Informáticos': {
        nombre: 'E.T.S. de Ingenieros Informáticos',
        duracion: '4 años',
        descripcion: 'Escuela de Ingenieros Informáticos centrada en tecnologías de la información y la informática.'
    },
    'Centro de Inv. en Biotecnología y Genómica de Plantas (CBGP)': {
        nombre: 'Centro de Inv. en Biotecnología y Genómica de Plantas (CBGP)',
        duracion: 'Varía',
        descripcion: 'Centro de investigación en biotecnología y genómica vegetal.'
    },
    'Centro de Tecnología Biomédica (CTB)': {
        nombre: 'Centro de Tecnología Biomédica (CTB)',
        duracion: 'Varía',
        descripcion: 'Centro de investigación en tecnología biomédica y salud.'
    },
    'Instituto Universitario de Microgravedad "Ignacio Da Riva"': {
        nombre: 'Instituto Universitario de Microgravedad "Ignacio Da Riva"',
        duracion: 'Varía',
        descripcion: 'Instituto dedicado a la investigación en microgravedad y tecnologías espaciales.'
    },
    'Centro de Domótica Integral (CeDINT-UMP)': {
        nombre: 'Centro de Domótica Integral (CeDINT-UMP)',
        duracion: 'Varía',
        descripcion: 'Centro de investigación en domótica y automatización del hogar.'
    },
    'E.T.S. de Ingeniería de Sistemas Informáticos': {
        nombre: 'E.T.S. de Ingeniería de Sistemas Informáticos',
        duracion: '4 años',
        descripcion: 'Escuela de Ingeniería especializada en sistemas informáticos y software.'
    },
    'E.T.S. de Ingeniería de Sistemas Telecomunicación': {
        nombre: 'E.T.S. de Ingeniería de Sistemas Telecomunicación',
        duracion: '4 años',
        descripcion: 'Escuela de Ingeniería de Telecomunicación centrada en sistemas de comunicación.'
    },
    'E.T.S. de Ingenieros en Topografía, Geodesia y Cartografía': {
        nombre: 'E.T.S. de Ingenieros en Topografía, Geodesia y Cartografía',
        duracion: '4 años',
        descripcion: 'Escuela de Ingenieros especializada en topografía, geodesia y cartografía.'
    },
    'Instituto de Investigación del Automóvil (INSIA)': {
        nombre: 'Instituto de Investigación del Automóvil (INSIA)',
        duracion: 'Varía',
        descripcion: 'Instituto de investigación en tecnología automotriz y seguridad vial.'
    },
    'Centro Superior de Diseño de Moda de Madrid (centro adscrito a la UPM)': {
        nombre: 'Centro Superior de Diseño de Moda de Madrid (centro adscrito a la UPM)',
        duracion: 'Varía',
        descripcion: 'Centro de diseño de moda adscrito a la Universidad Politécnica de Madrid.'
    },
    'Centro de Inv. en Tecnologías Sw y Sis. Multimedia para la sostenibilidad.': {
        nombre: 'Centro de Inv. en Tecnologías Sw y Sis. Multimedia para la sostenibilidad.',
        duracion: 'Varía',
        descripcion: 'Centro de investigación en tecnologías de software y sistemas multimedia sostenibles.'
    },
};



// Evento que se dispara cuando se selecciona un campus
campusSelect.addEventListener('change', actualizarCarreras);

// Evento que se dispara cuando se selecciona una carrera
carreraInput.addEventListener('input', mostrarInformacionCarrera);

// Función para actualizar las opciones del datalist
function actualizarCarreras() {
    const campusSeleccionado = campusSelect.value;
    const carreras = carrerasPorCampus[campusSeleccionado] || [];

    // Limpiar las opciones anteriores
    carrerasDatalist.innerHTML = '';

    // Llenar el datalist con las nuevas opciones
    carreras.forEach(carrera => {
        const opcion = document.createElement('option');
        opcion.value = carrera;
        carrerasDatalist.appendChild(opcion);
    });
}

// Función para mostrar la información de la carrera
function mostrarInformacionCarrera() {
    const nombreCarrera = carreraInput.value;
    const datosCarrera = informacionCarreras[nombreCarrera];

    // Limpiar la tabla
    tablaInfo.innerHTML = '';

    if (datosCarrera) {
        // Crear filas de la tabla con información de la carrera
        for (const propiedad in datosCarrera) {
            if (datosCarrera.hasOwnProperty(propiedad)) {
                const fila = document.createElement('tr');
                const celdaPropiedad = document.createElement('td');
                const celdaValor = document.createElement('td');
                celdaPropiedad.textContent = propiedad;
                celdaValor.textContent = datosCarrera[propiedad];
                fila.appendChild(celdaPropiedad);
                fila.appendChild(celdaValor);
                tablaInfo.appendChild(fila);
            }
        }
    } else {
        // Mostrar un mensaje de error si la carrera no se encuentra
        tablaInfo.innerHTML = '<tr><td colspan="2">Carrera no encontrada</td></tr>';
    }
}



// Inicialmente, cargar las opciones para el primer campus
actualizarCarreras();