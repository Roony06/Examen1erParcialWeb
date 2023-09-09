// Obtén los elementos del formulario
const programaInput = document.getElementById('programa');
const facultadSelect = document.getElementById('facultad');
const resultadosDiv = document.getElementById('resultados');
const data = [
    {
        facultad: 'Ingeniería',
        carreras: [
            { nombre: 'Ingeniería Informática', rama: 'Tecnología' },
            { nombre: 'Ingeniería Mecánica', rama: 'Ingeniería' },
            // Agrega más carreras según sea necesario
        ],
    },
    {
        facultad: 'Ciencias',
        carreras: [
            { nombre: 'Biología', rama: 'Ciencias Naturales' },
            { nombre: 'Química', rama: 'Ciencias Naturales' },
            // Agrega más carreras según sea necesario
        ],
    },
    // Agrega más facultades según sea necesario
];


// Escucha eventos de cambio en los elementos
programaInput.addEventListener('input', actualizarResultados);
facultadSelect.addEventListener('change', actualizarResultados);

function actualizarResultados() {
    const programaSeleccionado = programaInput.value;
    const facultadSeleccionada = facultadSelect.value;

    // Realiza aquí tu lógica para filtrar y mostrar resultados
    // Puedes usar programaSeleccionado y facultadSeleccionada

    // Ejemplo de actualización de resultados
    const resultadosHTML = `
    <h2>Resultados de búsqueda:</h2>
    <p>Programa Académico: ${programaSeleccionado}</p>
    <p>Facultad o Escuela: ${facultadSeleccionada}</p>`;

    // Muestra los resultados en el div de resultados
    resultadosDiv.innerHTML = resultadosHTML;

    // Muestra el div de resultados (puedes ajustar esto según tus necesidades)
    resultadosDiv.style.display = 'block';
}

// Función para crear y mostrar la tabla
function mostrarTabla() {
    const tablaCarreras = document.getElementById('tabla-carreras');

    // Recorre la estructura de datos y crea las filas de la tabla
    data.forEach(facultad => {
        facultad.carreras.forEach(carrera => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
        <td>${facultad.facultad}</td>
        <td>${carrera.nombre}</td>
        <td>${carrera.rama}</td>`;
            tablaCarreras.appendChild(fila);
        });
    });
}

// Constantes para selección de elementos HTML
const tabla = document.getElementById('miTabla'); // Reemplaza 'miTabla' con el ID de tu tabla
const cuerpoTabla = tabla.querySelector('tbody');
const filas = cuerpoTabla.querySelectorAll('tr');

// Función para agregar una fila a la tabla
function agregarFila(datos) {
    const fila = document.createElement('tr');
    datos.forEach(dato => {
        const celda = document.createElement('td');
        celda.textContent = dato;
        fila.appendChild(celda);
    });
    cuerpoTabla.appendChild(fila);
}

// Función para eliminar la última fila de la tabla
function eliminarUltimaFila() {
    if (filas.length > 0) {
        cuerpoTabla.removeChild(filas[filas.length - 1]);
    }
}

// Función para obtener los datos de una fila específica
function obtenerDatosFila(indice) {
    const fila = filas[indice];
    if (fila) {
        const celdas = fila.querySelectorAll('td');
        const datos = Array.from(celdas).map(celda => celda.textContent);
        return datos;
    } else {
        return null;
    }
}

// Función para limpiar la tabla
function limpiarTabla() {
    while (cuerpoTabla.firstChild) {
        cuerpoTabla.removeChild(cuerpoTabla.firstChild);
    }
}

// Ejemplos de uso:
agregarFila(['Dato1', 'Dato2', 'Dato3']);
agregarFila(['Dato4', 'Dato5', 'Dato6']);
console.log(obtenerDatosFila(0)); // Obtener datos de la primera fila
eliminarUltimaFila(); // Eliminar la última fila
limpiarTabla(); // Limpiar todos los datos de la tabla


// Llama a la función para mostrar la tabla
mostrarTabla();
